import type { SlideSpec } from "../../slideSpec";
import { PPTX_BRAND, addTitleBlock, addCard } from "@/lib/pptxBrand";

const C = PPTX_BRAND.color;
const W = PPTX_BRAND.size.w;

/** Slide 11 — CTA (CJSlide12CTA). Two CTAs + VP testimonial. */
export const ctaSpec: SlideSpec = {
  label: "Next Steps",
  build: (slide) => {
    addTitleBlock(slide, {
      eyebrow: "Next Steps",
      title: "Map your intelligence landscape. No commitment. Just clarity.",
      subtitle: "The companies who've made this shift aren't just faster — they're winning categories they used to chase.",
    });

    const top = 3.2;
    const x0 = 0.5;
    const w = W - 1;
    const gap = 0.3;
    const colW = (w - gap) / 2;
    const colH = 2.3;

    // Discovery Session
    addCard(slide, x0, top, colW, colH, { fill: C.primary, border: C.primary });
    slide.addText("DISCOVERY SESSION", {
      x: x0 + 0.3, y: top + 0.25, w: colW - 0.6, h: 0.32,
      fontFace: PPTX_BRAND.font.body, fontSize: 11, bold: true, color: "DBEAFE",
      charSpacing: 4, margin: 0,
    });
    slide.addText("60 minutes. Your team and ours.", {
      x: x0 + 0.3, y: top + 0.6, w: colW - 0.6, h: 0.6,
      fontFace: PPTX_BRAND.font.display, fontSize: 22, bold: true, color: "FFFFFF",
      margin: 0,
    });
    slide.addText(
      "Walk through your current intelligence landscape and identify the highest-value quick wins.",
      {
        x: x0 + 0.3, y: top + 1.25, w: colW - 0.6, h: colH - 1.4,
        fontFace: PPTX_BRAND.font.body, fontSize: 12, color: "DBEAFE",
        valign: "top", margin: 0,
      },
    );

    // Intelligence Audit
    const px = x0 + colW + gap;
    addCard(slide, px, top, colW, colH, { fill: C.surface, border: C.primary });
    slide.addShape("rect", {
      x: px, y: top + 0.12, w: 0.06, h: colH - 0.24,
      fill: { color: C.primary }, line: { type: "none" },
    });
    slide.addText("INTELLIGENCE AUDIT", {
      x: px + 0.3, y: top + 0.25, w: colW - 0.6, h: 0.32,
      fontFace: PPTX_BRAND.font.body, fontSize: 11, bold: true, color: C.primary,
      charSpacing: 4, margin: 0,
    });
    slide.addText("Where you are on the maturity curve.", {
      x: px + 0.3, y: top + 0.6, w: colW - 0.6, h: 0.6,
      fontFace: PPTX_BRAND.font.display, fontSize: 22, bold: true, color: C.ink,
      margin: 0,
    });
    slide.addText(
      "A structured assessment of your data, taxonomy and decision velocity vs. your category peers.",
      {
        x: px + 0.3, y: top + 1.25, w: colW - 0.6, h: colH - 1.4,
        fontFace: PPTX_BRAND.font.body, fontSize: 12, color: C.muted,
        valign: "top", margin: 0,
      },
    );

    // VP Testimonial band
    const ty = top + colH + 0.35;
    addCard(slide, x0, ty, w, 1.2, { fill: C.bgAlt });
    slide.addText(
      "\u201CWe're now spotting category opportunities a full quarter before our competitors. " +
      "The advantage compounds every cycle.\u201D",
      {
        x: x0 + 0.3, y: ty + 0.2, w: w - 0.6, h: 0.55,
        fontFace: PPTX_BRAND.font.display, fontSize: 14, italic: true, color: C.ink,
        margin: 0,
      },
    );
    slide.addText("VP, Top 5 Global FMCG  ·  Connected Intelligence customer, year 2.", {
      x: x0 + 0.3, y: ty + 0.78, w: w - 0.6, h: 0.35,
      fontFace: PPTX_BRAND.font.body, fontSize: 11, color: C.primary, bold: true,
      charSpacing: 3, margin: 0,
    });
  },
};
