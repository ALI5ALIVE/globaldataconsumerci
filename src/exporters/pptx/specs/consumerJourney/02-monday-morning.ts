import type { SlideSpec } from "../../slideSpec";
import { PPTX_BRAND, addCard, addInboxRow } from "@/lib/pptxBrand";
import { MONDAY_SLIDE as M } from "./_copy";

const C = PPTX_BRAND.color;
const W = PPTX_BRAND.size.w;

/** Slide 2 — Monday Morning inbox. */
export const mondayMorningSpec: SlideSpec = {
  label: "Monday Morning",
  build: (slide) => {
    slide.addText(M.title, {
      x: 0.5, y: 0.65, w: W - 1, h: 0.6,
      fontFace: PPTX_BRAND.font.display, fontSize: 28, bold: true, color: C.ink,
      align: "center", valign: "middle", margin: 0,
    });
    slide.addText(M.sub, {
      x: 0.5, y: 1.25, w: W - 1, h: 0.4,
      fontFace: PPTX_BRAND.font.body, fontSize: 14, color: C.muted,
      align: "center", valign: "top", margin: 0,
    });

    // Inbox container
    const x0 = 1.5;
    const w = W - 3;
    const top = 1.95;
    const toolbarH = 0.45;
    const rowH = 0.46;
    const totalH = toolbarH + rowH * M.emails.length;
    addCard(slide, x0, top, w, totalH, { fill: C.surface, border: C.hairline });

    // Toolbar
    slide.addShape("rect", {
      x: x0, y: top, w, h: toolbarH,
      fill: { color: C.bgAlt }, line: { type: "none" },
    });
    // Inbox + count pill
    slide.addText("✉  Inbox", {
      x: x0 + 0.15, y: top, w: 1.4, h: toolbarH,
      fontFace: PPTX_BRAND.font.display, fontSize: 12, bold: true, color: C.ink,
      valign: "middle", margin: 0,
    });
    slide.addShape("roundRect", {
      x: x0 + 1.55, y: top + toolbarH / 2 - 0.13, w: 0.32, h: 0.26,
      fill: { color: C.primary }, line: { type: "none" },
      rectRadius: 0.13,
    });
    slide.addText("7", {
      x: x0 + 1.55, y: top + toolbarH / 2 - 0.13, w: 0.32, h: 0.26,
      fontFace: PPTX_BRAND.font.body, fontSize: 9, bold: true, color: "FFFFFF",
      align: "center", valign: "middle", margin: 0,
    });
    // Faux search
    slide.addShape("roundRect", {
      x: x0 + w - 2.4, y: top + toolbarH / 2 - 0.15, w: 2.0, h: 0.3,
      fill: { color: C.surface }, line: { color: C.hairline, width: 0.5 },
      rectRadius: 0.06,
    });
    slide.addText("Search mail…", {
      x: x0 + w - 2.3, y: top + toolbarH / 2 - 0.15, w: 1.85, h: 0.3,
      fontFace: PPTX_BRAND.font.body, fontSize: 9, color: C.subtle,
      valign: "middle", margin: 0,
    });

    // Rows
    M.emails.forEach((e, i) => {
      const ry = top + toolbarH + i * rowH;
      addInboxRow(slide, x0, ry, w, rowH, e);
    });

    // Footer italic
    slide.addText(M.footer, {
      x: 0.5, y: top + totalH + 0.2, w: W - 1, h: 0.4,
      fontFace: PPTX_BRAND.font.display, fontSize: 12, italic: true, color: C.muted,
      align: "center", margin: 0,
    });
  },
};
