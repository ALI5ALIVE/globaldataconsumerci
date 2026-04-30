import type { SlideSpec } from "../../slideSpec";
import { PPTX_BRAND, addTitleBlock, addCard, addCheckRow } from "@/lib/pptxBrand";

const C = PPTX_BRAND.color;
const W = PPTX_BRAND.size.w;

/** Slide 10 — Why Not DIY (CJSlideWhyNotDIY). DIY vs Connected comparison. */
export const whyNotDiySpec: SlideSpec = {
  label: "Why Not DIY",
  build: (slide) => {
    addTitleBlock(slide, {
      eyebrow: "Why Not DIY?",
      title: "Connected Intelligence is structurally different.",
      subtitle: "You're not building it — you're switching it on. 40 years of analyst-validated data, already connected.",
    });

    const top = 3.1;
    const x0 = 0.5;
    const w = W - 1;
    const gap = 0.3;
    const colW = (w - gap) / 2;
    const colH = 3.6;

    // DIY column
    addCard(slide, x0, top, colW, colH, { fill: C.surface, border: C.danger });
    slide.addShape("rect", {
      x: x0, y: top, w: colW, h: 0.5,
      fill: { color: C.danger }, line: { type: "none" },
    });
    slide.addText("DIY INTEGRATION", {
      x: x0, y: top, w: colW, h: 0.5,
      fontFace: PPTX_BRAND.font.body, fontSize: 12, bold: true, color: "FFFFFF",
      align: "center", valign: "middle", charSpacing: 4, margin: 0,
    });

    // Connected column
    const px = x0 + colW + gap;
    addCard(slide, px, top, colW, colH, { fill: C.surface, border: C.primary });
    slide.addShape("rect", {
      x: px, y: top, w: colW, h: 0.5,
      fill: { color: C.primary }, line: { type: "none" },
    });
    slide.addText("CONNECTED INTELLIGENCE", {
      x: px, y: top, w: colW, h: 0.5,
      fontFace: PPTX_BRAND.font.body, fontSize: 12, bold: true, color: "FFFFFF",
      align: "center", valign: "middle", charSpacing: 4, margin: 0,
    });

    const pairs = [
      { diy: "14 separate contracts · 14 taxonomies", ci: "1 contract · 1 unified taxonomy" },
      { diy: "18–36 months of integration & maintenance", ci: "90-day deployment, switched on" },
      { diy: "Three FTEs just to keep the pipes connected", ci: "Built on 40 years of analyst-validated data" },
      { diy: "No cross-pollination — data flows, intelligence doesn't", ci: "Cross-solution patterns surfaced by Ava AI" },
      { diy: "Coverage you have to build market by market", ci: "95% of global GDP covered out of the box" },
    ];

    const rowH = (colH - 0.7) / pairs.length;
    pairs.forEach((p, i) => {
      const ry = top + 0.55 + i * rowH;
      // DIY row: ✕
      slide.addText("✕", {
        x: x0 + 0.2, y: ry, w: 0.4, h: rowH,
        fontFace: PPTX_BRAND.font.display, fontSize: 16, bold: true, color: C.danger,
        align: "center", valign: "middle", margin: 0,
      });
      slide.addText(p.diy, {
        x: x0 + 0.65, y: ry, w: colW - 0.85, h: rowH,
        fontFace: PPTX_BRAND.font.body, fontSize: 11, color: C.inkSoft,
        valign: "middle", margin: 0,
      });
      // CI row: ✓
      slide.addText("✓", {
        x: px + 0.2, y: ry, w: 0.4, h: rowH,
        fontFace: PPTX_BRAND.font.display, fontSize: 16, bold: true, color: C.success,
        align: "center", valign: "middle", margin: 0,
      });
      slide.addText(p.ci, {
        x: px + 0.65, y: ry, w: colW - 0.85, h: rowH,
        fontFace: PPTX_BRAND.font.body, fontSize: 11, color: C.inkSoft,
        valign: "middle", margin: 0,
      });
    });
    // Reference unused helper to avoid lint warning
    void addCheckRow;
  },
};
