import JSZip from "jszip";
import templateUrl from "@/assets/pptx/gd_master.pptx?url";

/**
 * Build a final .pptx by:
 *  1. Loading the GlobalData master template (.pptx).
 *  2. Keeping ONLY the title slide (slide1) and the Thank You slide (slide61).
 *  3. Appending one new image-only slide for each captured PNG, sandwiched
 *     between the title and the Thank You.
 *
 * The output preserves the template's theme, master, fonts, and metadata so
 * the deck reads as a native GlobalData PPT in PowerPoint.
 */

const SLIDE_W_EMU = 12192000; // 13.333"
const SLIDE_H_EMU = 6858000; // 7.5"

const KEEP_TITLE_SLIDE = "slide1.xml";
const KEEP_THANKYOU_SLIDE = "slide61.xml"; // confirmed by inspection
const IMAGE_LAYOUT_TARGET = "../slideLayouts/slideLayout11.xml"; // "Clear Space"

/** Strip a data URL prefix and return raw base64. */
function dataUrlToBase64(dataUrl: string): string {
  const idx = dataUrl.indexOf(",");
  return idx >= 0 ? dataUrl.slice(idx + 1) : dataUrl;
}

/** Build slide XML containing one full-bleed picture. */
function imageSlideXml(picRelId: string): string {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sld xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">
  <p:cSld>
    <p:spTree>
      <p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr>
      <p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/><a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr>
      <p:pic>
        <p:nvPicPr>
          <p:cNvPr id="2" name="Slide Image"/>
          <p:cNvPicPr><a:picLocks noChangeAspect="1"/></p:cNvPicPr>
          <p:nvPr/>
        </p:nvPicPr>
        <p:blipFill>
          <a:blip r:embed="${picRelId}"/>
          <a:stretch><a:fillRect/></a:stretch>
        </p:blipFill>
        <p:spPr>
          <a:xfrm>
            <a:off x="0" y="0"/>
            <a:ext cx="${SLIDE_W_EMU}" cy="${SLIDE_H_EMU}"/>
          </a:xfrm>
          <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
        </p:spPr>
      </p:pic>
    </p:spTree>
  </p:cSld>
  <p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr>
</p:sld>`;
}

function slideRelsXml(picRelId: string, picTarget: string): string {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="${IMAGE_LAYOUT_TARGET}"/>
  <Relationship Id="${picRelId}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="${picTarget}"/>
</Relationships>`;
}

interface BuildArgs {
  capturedSlides: { id: string; png: string }[]; // png = data URL
  onProgress?: (current: number, total: number, label: string) => void;
}

export async function buildFromTemplate({
  capturedSlides,
  onProgress,
}: BuildArgs): Promise<Blob> {
  onProgress?.(0, capturedSlides.length, "Loading template");

  const buf = await fetch(templateUrl).then((r) => r.arrayBuffer());
  const zip = await JSZip.loadAsync(buf);

  // ── 1. Determine which template slide files to KEEP ───────────────────────
  const presentationXmlPath = "ppt/presentation.xml";
  const presRelsPath = "ppt/_rels/presentation.xml.rels";
  const ctPath = "[Content_Types].xml";

  const presentationXmlOriginal = await zip.file(presentationXmlPath)!.async("string");
  const presRelsOriginal = await zip.file(presRelsPath)!.async("string");
  const ctOriginal = await zip.file(ctPath)!.async("string");

  // Parse current rels to find rId of the slides we want to keep
  const relsDoc = new DOMParser().parseFromString(presRelsOriginal, "application/xml");
  const relNodes = Array.from(relsDoc.getElementsByTagName("Relationship"));
  const slideRels = relNodes.filter((n) =>
    (n.getAttribute("Type") || "").endsWith("/slide"),
  );

  let titleRId: string | null = null;
  let thankYouRId: string | null = null;
  for (const rel of slideRels) {
    const target = rel.getAttribute("Target") || "";
    if (target.endsWith(KEEP_TITLE_SLIDE)) titleRId = rel.getAttribute("Id");
    if (target.endsWith(KEEP_THANKYOU_SLIDE)) thankYouRId = rel.getAttribute("Id");
  }
  if (!titleRId || !thankYouRId)
    throw new Error("Template title/thankyou slides not found");

  // ── 2. Remove all other slides (xml + rels + media refs they own) ─────────
  const slidesFolder = zip.folder("ppt/slides")!;
  const slidesRelsFolder = zip.folder("ppt/slides/_rels")!;

  const keepSlides = new Set([KEEP_TITLE_SLIDE, KEEP_THANKYOU_SLIDE]);

  // Collect slide files
  const slideFileNames: string[] = [];
  zip.folder("ppt/slides")?.forEach((rel, file) => {
    if (!file.dir && rel.endsWith(".xml")) slideFileNames.push(rel);
  });
  for (const rel of slideFileNames) {
    if (!keepSlides.has(rel)) {
      zip.remove(`ppt/slides/${rel}`);
      // Also delete its rels
      const relsFile = `ppt/slides/_rels/${rel}.rels`;
      if (zip.file(relsFile)) zip.remove(relsFile);
    }
  }

  // ── 3. Add new image slides ───────────────────────────────────────────────
  let nextSlideNum = 2; 

  const insertedSlides: { fileName: string; rId: string }[] = [];

  // Highest existing rId (from the rels we kept)
  let maxRIdNum = 0;
  for (const rel of relNodes) {
    const id = rel.getAttribute("Id") || "";
    const n = parseInt(id.replace("rId", ""), 10);
    if (!isNaN(n) && n > maxRIdNum) maxRIdNum = n;
  }

  for (let i = 0; i < capturedSlides.length; i++) {
    const cap = capturedSlides[i];
    onProgress?.(i + 1, capturedSlides.length, `Embedding slide ${i + 1}`);

    const slideNum = nextSlideNum++;
    const slideFileName = `slide${slideNum}.xml`;
    const imageFileName = `gdimg_${i + 1}.png`;
    const picRelId = "rId10"; // local to slide rels — unique per slide

    // Add image binary
    zip.file(
      `ppt/media/${imageFileName}`,
      dataUrlToBase64(cap.png),
      { base64: true },
    );

    // Add slide xml
    zip.file(`ppt/slides/${slideFileName}`, imageSlideXml(picRelId));

    // Add slide _rels
    zip.file(
      `ppt/slides/_rels/${slideFileName}.rels`,
      slideRelsXml(picRelId, `../media/${imageFileName}`),
    );

    // New presentation-level rId for this slide
    const newRId = `rId${++maxRIdNum}`;
    insertedSlides.push({ fileName: slideFileName, rId: newRId });
  }

  // ── 4. Rebuild presentation.xml.rels ──────────────────────────────────────
  const newRelsDoc = new DOMParser().parseFromString(
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"></Relationships>`,
    "application/xml",
  );
  const relsRoot = newRelsDoc.documentElement;

  for (const rel of relNodes) {
    const type = rel.getAttribute("Type") || "";
    if (type.endsWith("/slide")) {
      const tgt = rel.getAttribute("Target") || "";
      if (tgt.endsWith(KEEP_TITLE_SLIDE) || tgt.endsWith(KEEP_THANKYOU_SLIDE)) {
        relsRoot.appendChild(newRelsDoc.importNode(rel, true));
      }
    } else {
      relsRoot.appendChild(newRelsDoc.importNode(rel, true));
    }
  }
  // Append new image-slide rels
  for (const ins of insertedSlides) {
    const r = newRelsDoc.createElement("Relationship");
    r.setAttribute("Id", ins.rId);
    r.setAttribute(
      "Type",
      "http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide",
    );
    r.setAttribute("Target", `slides/${ins.fileName}`);
    relsRoot.appendChild(r);
  }
  const newPresRels = new XMLSerializer().serializeToString(newRelsDoc);
  zip.file(presRelsPath, newPresRels);

  // ── 5. Rebuild presentation.xml sldIdLst ──────────────────────────────────
  const presDoc = new DOMParser().parseFromString(
    presentationXmlOriginal,
    "application/xml",
  );
  const sldIdLst = presDoc.getElementsByTagName("p:sldIdLst")[0];
  // Clear existing children
  while (sldIdLst.firstChild) sldIdLst.removeChild(sldIdLst.firstChild);

  // Helper to build sldId element
  let sldIdCounter = 256;
  const addSldId = (rId: string) => {
    const el = presDoc.createElementNS(
      "http://schemas.openxmlformats.org/presentationml/2006/main",
      "p:sldId",
    );
    el.setAttribute("id", String(sldIdCounter++));
    el.setAttributeNS(
      "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
      "r:id",
      rId,
    );
    sldIdLst.appendChild(el);
  };

  addSldId(titleRId);
  for (const ins of insertedSlides) addSldId(ins.rId);
  addSldId(thankYouRId);

  const newPresXml = new XMLSerializer().serializeToString(presDoc);
  zip.file(presentationXmlPath, newPresXml);

  // ── 6. Update [Content_Types].xml — drop overrides for removed slides, add new ones, add png type ─
  const ctDoc = new DOMParser().parseFromString(ctOriginal, "application/xml");
  const ctRoot = ctDoc.documentElement;
  const overrides = Array.from(ctDoc.getElementsByTagName("Override"));
  for (const ov of overrides) {
    const part = ov.getAttribute("PartName") || "";
    if (
      part.startsWith("/ppt/slides/slide") &&
      part.endsWith(".xml") &&
      !part.endsWith(`/${KEEP_TITLE_SLIDE}`) &&
      !part.endsWith(`/${KEEP_THANKYOU_SLIDE}`)
    ) {
      ctRoot.removeChild(ov);
    }
  }
  // Add new overrides for inserted slides
  for (const ins of insertedSlides) {
    const ov = ctDoc.createElement("Override");
    ov.setAttribute("PartName", `/ppt/slides/${ins.fileName}`);
    ov.setAttribute(
      "ContentType",
      "application/vnd.openxmlformats-officedocument.presentationml.slide+xml",
    );
    ctRoot.appendChild(ov);
  }
  // Ensure png Default exists
  const defaults = Array.from(ctDoc.getElementsByTagName("Default"));
  const hasPng = defaults.some((d) => (d.getAttribute("Extension") || "") === "png");
  if (!hasPng) {
    const def = ctDoc.createElement("Default");
    def.setAttribute("Extension", "png");
    def.setAttribute("ContentType", "image/png");
    ctRoot.appendChild(def);
  }
  const newCt = new XMLSerializer().serializeToString(ctDoc);
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
