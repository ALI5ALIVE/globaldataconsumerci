import type { SlideSpec } from "../../slideSpec";
import { PPTX_BRAND, addTitleBlock, addCard } from "@/lib/pptxBrand";

const C = PPTX_BRAND.color;
const W = PPTX_BRAND.size.w;

/** Slide 4 — The Cost (CPSlide3TheCost). Business vs You split + £63M accumulator. */
export const theCostSpec: SlideSpec = {
  label: "The Cost",
  build: (slide) => {
    addTitleBlock(slide, {
      eyebrow: "What It's Costing You",
      title: "The business cost. The personal cost.",
      subtitle: "£63M of revenue at risk this year — and your credibility, every board meeting.",
    });

    const x0 = 0.5;
    const top = 3.1;
    const w = W - 1;
    const gap = 0.3;
    const colW = (w - gap) / 2;
    const colH = 3.4;

    // Business column
    addCard(slide, x0, top, colW, colH, { fill: C.surface, border: C.danger });
    slide.addShape("rect", {
      x: x0, y: top, w: colW, h: 0.42,
      fill: { color: C.danger }, line: { type: "none" },
    });
    slide.addText("BUSINESS COST", {
      x: x0, y: top, w: colW, h: 0.42,
      fontFace: PPTX_BRAND.font.body, fontSize: 11, bold: true, color: "FFFFFF",
      align: "center", valign: "middle", charSpacing: 4, margin: 0,
    });
    slide.addText("£63M", {
      x: x0, y: top + 0.55, w: colW, h: 1.0,
      fontFace: PPTX_BRAND.font.display, fontSize: 64, bold: true, color: C.danger,
      align: "center", valign: "middle", margin: 0,
    });
    slide.addText("Revenue at risk this year across your portfolio.", {
      x: x0 + 0.3, y: top + 1.55, w: colW - 0.6, h: 0.5,
      fontFace: PPTX_BRAND.font.body, fontSize: 12, color: C.muted,
      align: "center", margin: 0,
    });
    const bizPoints = [
      "Competitor saw the plant-based signal six months ago — and claimed the shelf.",
      "A low-scored concept by gut-feel became a £40M competitor line.",
      "Decision windows close while you're still reconciling.",
    ];
    slide.addText(
      bizPoints.map((t) => ({ text: t, options: { bullet: { code: "25A0" }, color: C.inkSoft } })),
      {
        x: x0 + 0.3, y: top + 2.15, w: colW - 0.6, h: colH - 2.3,
        fontFace: PPTX_BRAND.font.body, fontSize: 11, color: C.inkSoft,
        paraSpaceAfter: 6, valign: "top", margin: 0,
      },
    );

    // Personal column
    const px = x0 + colW + gap;
    addCard(slide, px, top, colW, colH, { fill: C.surface, border: C.primary });
    slide.addShape("rect", {
      x: px, y: top, w: colW, h: 0.42,
      fill: { color: C.primary }, line: { type: "none" },
    });
    slide.addText("PERSONAL COST", {
      x: px, y: top, w: colW, h: 0.42,
      fontFace: PPTX_BRAND.font.body, fontSize: 11, bold: true, color: "FFFFFF",
      align: "center", valign: "middle", charSpacing: 4, margin: 0,
    });
    slide.addText("60%", {
      x: px, y: top + 0.55, w: colW, h: 1.0,
      fontFace: PPTX_BRAND.font.display, fontSize: 64, bold: true, color: C.primary,
      align: "center", valign: "middle", margin: 0,
    });
    slide.addText("Of your time spent reconciling — not deciding.", {
      x: px + 0.3, y: top + 1.55, w: colW - 0.6, h: 0.5,
      fontFace: PPTX_BRAND.font.body, fontSize: 12, color: C.muted,
      align: "center", margin: 0,
    });
    const personalPoints = [
      "Every board meeting, your credibility rests on numbers you're not sure of.",
      "Insight is buried across seven platforms — by the time you've pieced it together, the window has closed.",
      "Your best people stop doing the work they were hired to do.",
    ];
    slide.addText(
      personalPoints.map((t) => ({ text: t, options: { bullet: { code: "25A0" }, color: C.inkSoft } })),
      {
        x: px + 0.3, y: top + 2.15, w: colW - 0.6, h: colH - 2.3,
        fontFace: PPTX_BRAND.font.body, fontSize: 11, color: C.inkSoft,
        paraSpaceAfter: 6, valign: "top", margin: 0,
      },
    );
  },
};
