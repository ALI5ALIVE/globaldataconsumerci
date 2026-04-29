import JSZip from "jszip";
import templateUrl from "@/assets/pptx/gd_master.pptx?url";

/**
 * Build a final .pptx by:
 *  1. Loading the GlobalData master template (.pptx).
 *  2. Keeping ONLY the title slide (slide1) and the Thank You slide (slide61).
 *  3. Appending one new image-only slide for each captured PNG, sandwiched
 *     between the title and the Thank You.
 *
 * IMPORTANT: All XML edits are done as string operations. Browser XMLSerializer
 * subtly changes namespace prefixes / attribute ordering in ways PowerPoint
 * rejects ("file extension doesn't match content"). Strings preserve bytes.
 */

const SLIDE_W_EMU = 12192000; // 13.333"
const SLIDE_H_EMU = 6858000; // 7.5"

const KEEP_TITLE_SLIDE = "slide1.xml";
const KEEP_THANKYOU_SLIDE = "slide61.xml";
const IMAGE_LAYOUT_TARGET = "../slideLayouts/slideLayout11.xml";

function dataUrlToBase64(dataUrl: string): string {
  const idx = dataUrl.indexOf(",");
  return idx >= 0 ? dataUrl.slice(idx + 1) : dataUrl;
}

function imageSlideXml(picRelId: string): string {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sld xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"><p:cSld><p:spTree><p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr><p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/><a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr><p:pic><p:nvPicPr><p:cNvPr id="2" name="Slide Image"/><p:cNvPicPr><a:picLocks noChangeAspect="1"/></p:cNvPicPr><p:nvPr/></p:nvPicPr><p:blipFill><a:blip r:embed="${picRelId}"/><a:stretch><a:fillRect/></a:stretch></p:blipFill><p:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="${SLIDE_W_EMU}" cy="${SLIDE_H_EMU}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></p:spPr></p:pic></p:spTree></p:cSld><p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr></p:sld>`;
}

function slideRelsXml(picRelId: string, picTarget: string): string {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="${IMAGE_LAYOUT_TARGET}"/><Relationship Id="${picRelId}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="${picTarget}"/></Relationships>`;
}

interface BuildArgs {
  capturedSlides: { id: string; png: string }[];
  onProgress?: (current: number, total: number, label: string) => void;
}

/** Parse one Relationship element from rels XML using regex (preserve fidelity). */
interface RelEntry {
  id: string;
  type: string;
  target: string;
  raw: string;
}
function parseRels(xml: string): RelEntry[] {
  const out: RelEntry[] = [];
  // Attribute values contain "/" (URL Types), so we cannot use [^/>].
  const re = /<Relationship\b[^>]*?\/>/g;
  const matches = xml.match(re) || [];
  for (const raw of matches) {
    const id = /\sId="([^"]+)"/.exec(raw)?.[1] || "";
    const type = /\sType="([^"]+)"/.exec(raw)?.[1] || "";
    const target = /\sTarget="([^"]+)"/.exec(raw)?.[1] || "";
    out.push({ id, type, target, raw });
  }
  return out;
}

export async function buildFromTemplate({
  capturedSlides,
  onProgress,
}: BuildArgs): Promise<Blob> {
  onProgress?.(0, capturedSlides.length, "Loading template");

  const buf = await fetch(templateUrl).then((r) => r.arrayBuffer());
  const zip = await JSZip.loadAsync(buf);

  const presentationXmlPath = "ppt/presentation.xml";
  const presRelsPath = "ppt/_rels/presentation.xml.rels";
  const ctPath = "[Content_Types].xml";

  const presentationXmlOriginal = await zip.file(presentationXmlPath)!.async("string");
  const presRelsOriginal = await zip.file(presRelsPath)!.async("string");
  const ctOriginal = await zip.file(ctPath)!.async("string");

  // ── 1. Parse rels and find title + thank you rIds ─────────────────────────
  const rels = parseRels(presRelsOriginal);
  let titleRId: string | null = null;
  let thankYouRId: string | null = null;
  for (const r of rels) {
    if (!r.type.endsWith("/slide")) continue;
    if (r.target.endsWith(KEEP_TITLE_SLIDE)) titleRId = r.id;
    if (r.target.endsWith(KEEP_THANKYOU_SLIDE)) thankYouRId = r.id;
  }
  if (!titleRId || !thankYouRId)
    throw new Error("Template title/thankyou slides not found");

  // ── 2. Remove all other slide files + their rels ──────────────────────────
  const keepSlides = new Set([KEEP_TITLE_SLIDE, KEEP_THANKYOU_SLIDE]);
  const slideFileNames: string[] = [];
  zip.folder("ppt/slides")?.forEach((rel, file) => {
    if (!file.dir && rel.endsWith(".xml")) slideFileNames.push(rel);
  });
  for (const rel of slideFileNames) {
    if (!keepSlides.has(rel)) {
      zip.remove(`ppt/slides/${rel}`);
      const relsFile = `ppt/slides/_rels/${rel}.rels`;
      if (zip.file(relsFile)) zip.remove(relsFile);
    }
  }

  // ── 3. Add new image slides ───────────────────────────────────────────────
  let nextSlideNum = 2;
  const insertedSlides: { fileName: string; rId: string }[] = [];

  // Highest existing rId (across ALL rels, not just slides)
  let maxRIdNum = 0;
  for (const r of rels) {
    const n = parseInt(r.id.replace("rId", ""), 10);
    if (!isNaN(n) && n > maxRIdNum) maxRIdNum = n;
  }

  for (let i = 0; i < capturedSlides.length; i++) {
    const cap = capturedSlides[i];
    onProgress?.(i + 1, capturedSlides.length, `Embedding slide ${i + 1}`);

    const slideNum = nextSlideNum++;
    const slideFileName = `slide${slideNum}.xml`;
    const imageFileName = `gdimg_${i + 1}.png`;
    const picRelId = "rId10";

    zip.file(`ppt/media/${imageFileName}`, dataUrlToBase64(cap.png), {
      base64: true,
    });
    zip.file(`ppt/slides/${slideFileName}`, imageSlideXml(picRelId));
    zip.file(
      `ppt/slides/_rels/${slideFileName}.rels`,
      slideRelsXml(picRelId, `../media/${imageFileName}`),
    );

    const newRId = `rId${++maxRIdNum}`;
    insertedSlides.push({ fileName: slideFileName, rId: newRId });
  }

  // ── 4. Rebuild presentation.xml.rels as STRING ────────────────────────────
  // Keep all non-slide rels verbatim. Then add only the kept slide rels + new ones.
  const keptRelsXml: string[] = [];
  for (const r of rels) {
    if (!r.type.endsWith("/slide")) {
      keptRelsXml.push(r.raw);
    } else if (
      r.target.endsWith(KEEP_TITLE_SLIDE) ||
      r.target.endsWith(KEEP_THANKYOU_SLIDE)
    ) {
      keptRelsXml.push(r.raw);
    }
  }
  for (const ins of insertedSlides) {
    keptRelsXml.push(
      `<Relationship Id="${ins.rId}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/${ins.fileName}"/>`,
    );
  }
  const newPresRels =
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n` +
    `<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">` +
    keptRelsXml.join("") +
    `</Relationships>`;
  zip.file(presRelsPath, newPresRels);

  // ── 5. Rebuild sldIdLst inside presentation.xml as STRING ─────────────────
  // Build new <p:sldIdLst>…</p:sldIdLst> content
  let sldIdCounter = 256;
  const sldIdEntries: string[] = [];
  const addSldId = (rId: string) => {
    sldIdEntries.push(`<p:sldId id="${sldIdCounter++}" r:id="${rId}"/>`);
  };
  addSldId(titleRId);
  for (const ins of insertedSlides) addSldId(ins.rId);
  addSldId(thankYouRId);
  const newSldIdLst = `<p:sldIdLst>${sldIdEntries.join("")}</p:sldIdLst>`;

  // Replace the existing sldIdLst block (handles either self-closing or with children)
  let newPresXml = presentationXmlOriginal.replace(
    /<p:sldIdLst\b[^>]*\/>|<p:sldIdLst\b[^>]*>[\s\S]*?<\/p:sldIdLst>/,
    newSldIdLst,
  );
  zip.file(presentationXmlPath, newPresXml);

  // ── 6. Update [Content_Types].xml as STRING ───────────────────────────────
  // Remove Override entries for slides that no longer exist
  let newCt = ctOriginal.replace(
    /<Override\s+PartName="\/ppt\/slides\/slide\d+\.xml"[^>]*?\/>/g,
    (match) => {
      if (
        match.includes(`/ppt/slides/${KEEP_TITLE_SLIDE}"`) ||
        match.includes(`/ppt/slides/${KEEP_THANKYOU_SLIDE}"`)
      )
        return match;
      return "";
    },
  );

  // Add overrides for new slides
  const newOverrides = insertedSlides
    .map(
      (ins) =>
        `<Override PartName="/ppt/slides/${ins.fileName}" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>`,
    )
    .join("");
  newCt = newCt.replace("</Types>", `${newOverrides}</Types>`);

  // Ensure png Default exists
  if (!/<Default\s+Extension="png"/.test(newCt)) {
    newCt = newCt.replace(
      "</Types>",
      `<Default Extension="png" ContentType="image/png"/></Types>`,
    );
  }
  zip.file(ctPath, newCt);

  onProgress?.(capturedSlides.length, capturedSlides.length, "Composing PPTX");

  const blob = await zip.generateAsync({
    type: "blob",
    mimeType:
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    compression: "DEFLATE",
    compressionOptions: { level: 6 },
  });
  return blob;
}
