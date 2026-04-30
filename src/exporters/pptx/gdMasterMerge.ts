import JSZip from "jszip";
import templateUrl from "@/assets/pptx/gd_master.pptx?url";
import { gdLayoutFile, type GdLayoutKey } from "./gdMasterLayouts";

/**
 * Merge the GlobalData 2025 master into a pptxgenjs-generated deck.
 *
 * Strategy
 * ────────
 *  1. pptxgenjs writes a perfectly-valid .pptx with its own (vanilla) master,
 *     theme and layouts.
 *  2. We open that output, strip its slideMasters / slideLayouts / theme,
 *     splice in the GlobalData master's equivalents (renaming media to a
 *     `gd_…` prefix to avoid collisions), then update Content_Types and the
 *     presentation rels so PowerPoint resolves the new master.
 *  3. For each slide we rewrite its `_rels/slideN.xml.rels` to point at the
 *     desired GD layout (by `GdLayoutKey`).
 *
 * The user's hand-drawn shapes survive untouched on top of the GD layout, so
 * we get GD's chrome (footer, page counter, Q-mark watermark, theme colours,
 * fonts) "for free" while the slide bodies remain fully editable.
 *
 * All XML manipulation is byte-level (string ops). XMLSerializer subtly
 * mutates namespace prefixes in ways PowerPoint rejects.
 */

interface MergeArgs {
  /** Generated pptx blob from pptxgenjs (`pptx.write({outputType:"blob"})`). */
  generated: Blob;
  /**
   * Per-slide layout selection. Index matches the order slides were added to
   * pptxgenjs. Slides without an entry default to `defaultLayout`.
   */
  layoutBySlideIndex: Record<number, GdLayoutKey | undefined>;
  defaultLayout?: GdLayoutKey;
}

const PRES_XML = "ppt/presentation.xml";
const PRES_RELS = "ppt/_rels/presentation.xml.rels";
const CT_PATH = "[Content_Types].xml";

/** Move a file inside a JSZip from `from` → `to` (copy + delete). */
async function renameZipFile(zip: JSZip, from: string, to: string) {
  const file = zip.file(from);
  if (!file) return;
  const buf = await file.async("uint8array");
  zip.file(to, buf);
  zip.remove(from);
}

/** List file paths in a JSZip folder (non-recursive) matching a predicate. */
function listFiles(zip: JSZip, prefix: string, suffix = ""): string[] {
  const out: string[] = [];
  zip.forEach((path) => {
    if (path.startsWith(prefix) && path.endsWith(suffix) && !path.endsWith("/")) {
      out.push(path);
    }
  });
  return out;
}

/** Allocate the next free `rIdN` not present in the supplied rels XML. */
function nextRId(relsXml: string): string {
  let max = 0;
  const re = /\sId="rId(\d+)"/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(relsXml))) {
    const n = parseInt(m[1], 10);
    if (n > max) max = n;
  }
  return `rId${max + 1}`;
}

export async function mergeGdMaster({
  generated,
  layoutBySlideIndex,
  defaultLayout = "Content",
}: MergeArgs): Promise<Blob> {
  const [genBuf, masterBuf] = await Promise.all([
    generated.arrayBuffer(),
    fetch(templateUrl).then((r) => r.arrayBuffer()),
  ]);

  const out = await JSZip.loadAsync(genBuf);
  const master = await JSZip.loadAsync(masterBuf);

  /* ─── 1. Strip pptxgenjs master/layouts/theme + their rels + media ───── */
  const stripPrefixes = [
    "ppt/slideMasters/",
    "ppt/slideLayouts/",
    "ppt/theme/",
  ];
  // Track media files that pptxgenjs's master/layouts referenced so we can
  // remove them too. We do this conservatively by reading slide* rels first.
  const mediaToKeep = new Set<string>();
  for (const slidePath of listFiles(out, "ppt/slides/", ".xml")) {
    const relsPath = slidePath.replace(
      /ppt\/slides\/(slide\d+\.xml)$/,
      "ppt/slides/_rels/$1.rels",
    );
    const f = out.file(relsPath);
    if (!f) continue;
    const xml = await f.async("string");
    const re = /Target="\.\.\/media\/([^"]+)"/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(xml))) mediaToKeep.add(`ppt/media/${m[1]}`);
  }
  // Delete everything under master/layout/theme (incl. _rels), and any media
  // in ppt/media/ NOT referenced by a slide (those came from the stripped
  // master/layouts and would otherwise be orphans).
  const filesToDelete: string[] = [];
  out.forEach((path) => {
    if (stripPrefixes.some((p) => path.startsWith(p))) filesToDelete.push(path);
    else if (path.startsWith("ppt/media/") && !mediaToKeep.has(path))
      filesToDelete.push(path);
  });
  for (const p of filesToDelete) out.remove(p);

  /* ─── 2. Copy GD master/layouts/theme + their media in (renamed) ─────── */
  // Collect every media file referenced by the master's masters/layouts/theme.
  const masterRefs = new Set<string>();
  const collectFrom = async (relsPath: string) => {
    const f = master.file(relsPath);
    if (!f) return;
    const xml = await f.async("string");
    const re = /Target="(\.\.\/media\/[^"]+)"/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(xml))) {
      // Resolve relative path → ppt/media/...
      masterRefs.add(`ppt/media/${m[1].replace("../media/", "")}`);
    }
  };
  for (const path of listFiles(master, "ppt/slideMasters/_rels/", ".rels"))
    await collectFrom(path);
  for (const path of listFiles(master, "ppt/slideLayouts/_rels/", ".rels"))
    await collectFrom(path);
  for (const path of listFiles(master, "ppt/theme/_rels/", ".rels"))
    await collectFrom(path);

  // Copy master + layouts + theme XML and rels verbatim.
  const copyPrefixes = [
    "ppt/slideMasters/",
    "ppt/slideLayouts/",
    "ppt/theme/",
  ];
  const copyTasks: Promise<void>[] = [];
  master.forEach((path, file) => {
    if (file.dir) return;
    if (copyPrefixes.some((p) => path.startsWith(p))) {
      copyTasks.push(
        file.async("uint8array").then((buf) => {
          out.file(path, buf);
        }),
      );
    }
  });
  await Promise.all(copyTasks);

  // Copy referenced media with a `gd_` prefix to avoid colliding with anything
  // pptxgenjs left behind.
  const mediaCopyTasks: Promise<void>[] = [];
  for (const mediaPath of masterRefs) {
    const f = master.file(mediaPath);
    if (!f) continue;
    const baseName = mediaPath.replace("ppt/media/", "");
    mediaCopyTasks.push(
      f.async("uint8array").then((buf) => {
        out.file(`ppt/media/gd_${baseName}`, buf);
      }),
    );
  }
  await Promise.all(mediaCopyTasks);

  // Rewrite all newly-copied master/layout/theme rels so their media targets
  // point at the renamed `gd_*` filenames.
  const rewriteRels = async (path: string) => {
    const f = out.file(path);
    if (!f) return;
    let xml = await f.async("string");
    xml = xml.replace(/Target="\.\.\/media\/([^"]+)"/g, (_m, name) =>
      `Target="../media/gd_${name}"`,
    );
    out.file(path, xml);
  };
  for (const p of listFiles(out, "ppt/slideMasters/_rels/", ".rels"))
    await rewriteRels(p);
  for (const p of listFiles(out, "ppt/slideLayouts/_rels/", ".rels"))
    await rewriteRels(p);
  for (const p of listFiles(out, "ppt/theme/_rels/", ".rels"))
    await rewriteRels(p);

  /* ─── 3. Rewrite [Content_Types].xml ─────────────────────────────────── */
  const ctFile = out.file(CT_PATH);
  if (!ctFile) throw new Error("Generated pptx missing [Content_Types].xml");
  let ct = await ctFile.async("string");

  // Strip overrides for stripped paths.
  ct = ct.replace(
    /<Override\s+PartName="\/(ppt\/slideMasters\/[^"]+|ppt\/slideLayouts\/[^"]+|ppt\/theme\/[^"]+)"[^>]*?\/>/g,
    "",
  );
  // Append fresh overrides from the master.
  const masterCtFile = master.file(CT_PATH);
  if (masterCtFile) {
    const masterCt = await masterCtFile.async("string");
    const overrideRe =
      /<Override\s+PartName="\/(ppt\/slideMasters\/[^"]+|ppt\/slideLayouts\/[^"]+|ppt\/theme\/[^"]+)"[^>]*?\/>/g;
    const newOverrides = masterCt.match(overrideRe) ?? [];
    if (newOverrides.length) {
      ct = ct.replace("</Types>", newOverrides.join("") + "</Types>");
    }
  }
  // Ensure image extensions used by the GD master (jpg, jpeg, svg, gif) are
  // declared as Defaults so PowerPoint doesn't complain.
  const defaults: Array<[string, string]> = [
    ["jpg", "image/jpeg"],
    ["jpeg", "image/jpeg"],
    ["svg", "image/svg+xml"],
    ["gif", "image/gif"],
  ];
  for (const [ext, mime] of defaults) {
    const re = new RegExp(`<Default[^/]*Extension="${ext}"`);
    if (!re.test(ct)) {
      ct = ct.replace(
        "</Types>",
        `<Default Extension="${ext}" ContentType="${mime}"/></Types>`,
      );
    }
  }
  out.file(CT_PATH, ct);

  /* ─── 4. Rewrite presentation.xml.rels: master, theme references ─────── */
  const presRelsFile = out.file(PRES_RELS);
  if (!presRelsFile) throw new Error("Missing presentation.xml.rels");
  let presRels = await presRelsFile.async("string");

  // Drop existing slideMaster / theme rels — keep slide rels and everything
  // else (notesMaster, tableStyles, viewProps, etc.) intact.
  presRels = presRels.replace(
    /<Relationship[^/]*Type="[^"]*\/(slideMaster|theme)"[^/]*\/>/g,
    "",
  );

  // Insert one slideMaster rel for every master in the GD pack (typically 1).
  const masterFiles = listFiles(out, "ppt/slideMasters/", ".xml")
    .map((p) => p.replace("ppt/slideMasters/", ""))
    .sort();
  const themeFiles = listFiles(out, "ppt/theme/", ".xml")
    .map((p) => p.replace("ppt/theme/", ""))
    .sort();

  const newRels: string[] = [];
  for (const mf of masterFiles) {
    const id = nextRId(presRels + newRels.join(""));
    newRels.push(
      `<Relationship Id="${id}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="slideMasters/${mf}"/>`,
    );
  }
  for (const tf of themeFiles) {
    const id = nextRId(presRels + newRels.join(""));
    newRels.push(
      `<Relationship Id="${id}" Type="http://schemas.officedocument/officeDocument/2006/relationships/theme" Target="theme/${tf}"/>`.replace(
        "schemas.officedocument/officeDocument",
        "schemas.openxmlformats.org/officeDocument",
      ),
    );
  }
  presRels = presRels.replace(
    "</Relationships>",
    newRels.join("") + "</Relationships>",
  );
  out.file(PRES_RELS, presRels);

  /* ─── 5. Update <p:sldMasterIdLst> in presentation.xml ───────────────── */
  const presFile = out.file(PRES_XML);
  if (!presFile) throw new Error("Missing presentation.xml");
  let presXml = await presFile.async("string");

  // Find the rIds we just added for masters.
  const masterRelRe =
    /<Relationship\s+Id="(rId\d+)"\s+Type="[^"]*\/slideMaster"\s+Target="slideMasters\/([^"]+)"/g;
  const masterIds: string[] = [];
  let mm: RegExpExecArray | null;
  while ((mm = masterRelRe.exec(presRels))) masterIds.push(mm[1]);

  let sldMasterCounter = 2147483648;
  const masterIdLst = `<p:sldMasterIdLst>${masterIds
    .map((id) => `<p:sldMasterId id="${sldMasterCounter++}" r:id="${id}"/>`)
    .join("")}</p:sldMasterIdLst>`;
  presXml = presXml.replace(
    /<p:sldMasterIdLst\b[^>]*\/>|<p:sldMasterIdLst\b[^>]*>[\s\S]*?<\/p:sldMasterIdLst>/,
    masterIdLst,
  );
  out.file(PRES_XML, presXml);

  /* ─── 6. Re-point each slide's layout rel at the chosen GD layout ────── */
  const slidePaths = listFiles(out, "ppt/slides/", ".xml")
    .filter((p) => /\/slide\d+\.xml$/.test(p))
    .sort((a, b) => {
      const an = parseInt(a.match(/slide(\d+)\.xml$/)![1], 10);
      const bn = parseInt(b.match(/slide(\d+)\.xml$/)![1], 10);
      return an - bn;
    });

  for (let i = 0; i < slidePaths.length; i++) {
    const slidePath = slidePaths[i];
    const slideRelsPath = slidePath.replace(
      /ppt\/slides\/(slide\d+\.xml)$/,
      "ppt/slides/_rels/$1.rels",
    );
    const relsFile = out.file(slideRelsPath);
    if (!relsFile) continue;
    let relsXml = await relsFile.async("string");

    const layoutKey = layoutBySlideIndex[i] ?? defaultLayout;
    const layoutTarget = `../slideLayouts/${gdLayoutFile(layoutKey)}`;

    // Replace any existing slideLayout rel target; if none, append one.
    if (/\/slideLayout"/.test(relsXml)) {
      relsXml = relsXml.replace(
        /(<Relationship[^/]*Type="[^"]*\/slideLayout"[^/]*Target=")[^"]+(")/,
        `$1${layoutTarget}$2`,
      );
    } else {
      const id = nextRId(relsXml);
      relsXml = relsXml.replace(
        "</Relationships>",
        `<Relationship Id="${id}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="${layoutTarget}"/></Relationships>`,
      );
    }
    out.file(slideRelsPath, relsXml);
  }

  /* ─── 7. Emit ────────────────────────────────────────────────────────── */
  return await out.generateAsync({
    type: "blob",
    mimeType:
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    compression: "DEFLATE",
    compressionOptions: { level: 6 },
  });
}
