import JSZip from "jszip";

export interface PptxValidationIssue {
  severity: "error" | "warning";
  code: string;
  message: string;
}

export interface PptxValidationReport {
  ok: boolean;
  issues: PptxValidationIssue[];
  slideCount: number;
}

/**
 * Validate a generated .pptx Blob by inspecting its OPC structure:
 *  - Required parts exist ([Content_Types].xml, _rels/.rels, ppt/presentation.xml, ppt/_rels/presentation.xml.rels)
 *  - Every <Override> in [Content_Types].xml points to an existing part
 *  - Every <Relationship Target="..."> in presentation.xml.rels resolves to an existing part
 *  - Every slide referenced from sldIdLst exists and has a matching rels file
 *  - Every slide rels file's image targets exist in the zip
 *  - All slide XML parses as well-formed XML and contains <p:sld> root
 *  - All key XML files declare the expected p: / r: / a: namespaces where applicable
 *
 * Pure browser code — no headless runtime required.
 */
export async function validatePptx(blob: Blob): Promise<PptxValidationReport> {
  const issues: PptxValidationIssue[] = [];
  const add = (severity: "error" | "warning", code: string, message: string) =>
    issues.push({ severity, code, message });

  let zip: JSZip;
  try {
    zip = await JSZip.loadAsync(await blob.arrayBuffer());
  } catch (e) {
    return {
      ok: false,
      slideCount: 0,
      issues: [
        {
          severity: "error",
          code: "ZIP_PARSE",
          message: `Output is not a valid zip: ${(e as Error).message}`,
        },
      ],
    };
  }

  const has = (path: string) => !!zip.file(path);
  const read = (path: string) => zip.file(path)?.async("string");

  // 1. Required OPC parts
  const required = [
    "[Content_Types].xml",
    "_rels/.rels",
    "ppt/presentation.xml",
    "ppt/_rels/presentation.xml.rels",
  ];
  for (const p of required) {
    if (!has(p)) add("error", "MISSING_PART", `Required part missing: ${p}`);
  }

  // 2. Content Types — every Override target must exist
  const ctXml = (await read("[Content_Types].xml")) || "";
  const overrideRe = /<Override\s+PartName="([^"]+)"\s+ContentType="([^"]+)"\s*\/>/g;
  let m: RegExpExecArray | null;
  let slideOverrideCount = 0;
  while ((m = overrideRe.exec(ctXml))) {
    const partName = m[1].replace(/^\//, "");
    if (!has(partName))
      add(
        "error",
        "ORPHAN_OVERRIDE",
        `[Content_Types].xml references missing part: /${partName}`,
      );
    if (m[2].endsWith("/slide+xml")) slideOverrideCount++;
  }
  if (!/<Default\s+Extension="png"/.test(ctXml) && !/<Default\s+Extension="jpeg"/.test(ctXml)) {
    add(
      "warning",
      "NO_IMAGE_DEFAULT",
      "[Content_Types].xml has no Default for png/jpeg images",
    );
  }

  // 3. Presentation rels — targets must resolve under ppt/
  const presRelsXml = (await read("ppt/_rels/presentation.xml.rels")) || "";
  const relRe = /<Relationship\s+([^/>]+)\/>/g;
  const presRels: { id: string; type: string; target: string }[] = [];
  while ((m = relRe.exec(presRelsXml))) {
    const attrs = m[1];
    const id = /\sId="([^"]+)"|^Id="([^"]+)"/.exec(attrs)?.[1] || /Id="([^"]+)"/.exec(attrs)?.[1] || "";
    const type = /Type="([^"]+)"/.exec(attrs)?.[1] || "";
    const target = /Target="([^"]+)"/.exec(attrs)?.[1] || "";
    presRels.push({ id, type, target });
    const resolved = `ppt/${target}`.replace(/\/\.\//g, "/");
    if (!has(resolved))
      add(
        "error",
        "ORPHAN_REL",
        `presentation.xml.rels Id="${id}" -> missing target: ${resolved}`,
      );
  }

  // 4. presentation.xml — sldIdLst entries map to existing rIds
  const presXml = (await read("ppt/presentation.xml")) || "";
  if (!/xmlns:p="http:\/\/schemas\.openxmlformats\.org\/presentationml\/2006\/main"/.test(presXml))
    add("error", "PRES_NS", "presentation.xml missing p: namespace declaration");
  if (!/xmlns:r="http:\/\/schemas\.openxmlformats\.org\/officeDocument\/2006\/relationships"/.test(presXml))
    add("error", "PRES_NS", "presentation.xml missing r: namespace declaration");

  const sldIdRe = /<p:sldId\s+id="(\d+)"\s+r:id="([^"]+)"\s*\/>/g;
  const referencedSlideRels: string[] = [];
  while ((m = sldIdRe.exec(presXml))) referencedSlideRels.push(m[2]);

  if (referencedSlideRels.length === 0)
    add("error", "NO_SLIDES", "presentation.xml has empty <p:sldIdLst>");

  for (const rid of referencedSlideRels) {
    const rel = presRels.find((r) => r.id === rid);
    if (!rel) {
      add("error", "BAD_SLIDE_REF", `sldIdLst r:id="${rid}" has no matching Relationship`);
      continue;
    }
    if (!rel.type.endsWith("/slide"))
      add(
        "error",
        "BAD_SLIDE_TYPE",
        `Relationship ${rid} points to non-slide type: ${rel.type}`,
      );
  }

  // 5. Each slide file: rels exist, XML parses, image targets exist
  const slidePaths: string[] = [];
  zip.folder("ppt/slides")?.forEach((rel, file) => {
    if (!file.dir && rel.endsWith(".xml")) slidePaths.push(`ppt/slides/${rel}`);
  });

  if (slidePaths.length !== slideOverrideCount)
    add(
      "warning",
      "OVERRIDE_COUNT_MISMATCH",
      `Slide files: ${slidePaths.length}, slide Overrides: ${slideOverrideCount}`,
    );

  const parser = new DOMParser();
  for (const sp of slidePaths) {
    const xml = (await read(sp)) || "";
    const doc = parser.parseFromString(xml, "application/xml");
    if (doc.getElementsByTagName("parsererror").length > 0) {
      add("error", "SLIDE_XML_INVALID", `${sp} is not well-formed XML`);
      continue;
    }
    const root = doc.documentElement;
    if (!root || root.localName !== "sld")
      add("error", "SLIDE_ROOT", `${sp} root is <${root?.nodeName}>, expected <p:sld>`);

    // rels file
    const slideName = sp.split("/").pop()!;
    const slideRelsPath = `ppt/slides/_rels/${slideName}.rels`;
    const slideRelsXml = await read(slideRelsPath);
    if (!slideRelsXml) {
      add("error", "MISSING_SLIDE_RELS", `Missing rels for ${sp}: ${slideRelsPath}`);
      continue;
    }
    // Every Target in slide rels (image / slideLayout) must resolve
    const slideRelTargets: string[] = [];
    const sre = /<Relationship\s+[^/>]*Target="([^"]+)"[^/>]*\/>/g;
    while ((m = sre.exec(slideRelsXml))) slideRelTargets.push(m[1]);
    for (const t of slideRelTargets) {
      // Resolve relative to ppt/slides/
      const resolved = new URL(t, "http://x/ppt/slides/").pathname.replace(/^\//, "");
      if (!has(resolved))
        add(
          "error",
          "SLIDE_REL_ORPHAN",
          `${slideRelsPath} -> missing target: ${resolved}`,
        );
    }

    // r:embed references in slide XML must have matching rId in slide rels
    const embedRe = /r:embed="([^"]+)"/g;
    while ((m = embedRe.exec(xml))) {
      const eid = m[1];
      if (!new RegExp(`Id="${eid}"`).test(slideRelsXml))
        add(
          "error",
          "MISSING_EMBED_REL",
          `${sp} uses r:embed="${eid}" with no matching Relationship`,
        );
    }
  }

  return {
    ok: !issues.some((i) => i.severity === "error"),
    slideCount: slidePaths.length,
    issues,
  };
}

export function formatValidationReport(report: PptxValidationReport): string {
  const lines: string[] = [];
  lines.push(`PPTX validation: ${report.ok ? "OK" : "FAILED"} (${report.slideCount} slides)`);
  for (const i of report.issues) {
    lines.push(`  [${i.severity.toUpperCase()}] ${i.code}: ${i.message}`);
  }
  return lines.join("\n");
}
