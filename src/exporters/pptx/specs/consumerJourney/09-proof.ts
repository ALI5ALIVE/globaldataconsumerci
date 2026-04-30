import type { SlideSpec } from "../../slideSpec";
import { PPTX_BRAND, addTitleBlock, addBrandStatBlock, addCard } from "@/lib/pptxBrand";

const C = PPTX_BRAND.color;
const W = PPTX_BRAND.size.w;

/** Slide 9 — Proof (CJSlideProof). FMCG outcomes. */
export const proofSpec: SlideSpec = {
  label: "The Proof",
  build: (slide) => {
    addTitleBlock(slide, {
      eyebrow: "The Proof",
      title: "Leading global FMCG companies are already seeing this.",
      subtitle: "Connected Intelligence — proven and delivering across the world's largest brands.",
    });

    // Stats colored using the GD data-viz palette (series 1, 3, 9, 4)
    const dv = C.dv;
    addBrandStatBlock(slide, 0.5, 3.2, W - 1, [
      { value: "3×", label: "Faster decisions", accent: dv[0] },
      { value: "70%", label: "Less time to insight", accent: dv[2] },
      { value: "2×", label: "Launch success rate", accent: dv[8] },
      { value: "30%", label: "Lower TCO", accent: dv[3] },
    ]);

    // Quote card
    const qy = 5.05;
    addCard(slide, 0.5, qy, W - 1, 1.7, { fill: C.surface });
    slide.addShape("rect", {
      x: 0.5, y: qy + 0.15, w: 0.06, h: 1.4,
      fill: { color: C.primary }, line: { type: "none" },
    });
    slide.addText(
      "\u201CWe replaced fourteen vendor contracts with one. Decisions that took three months now take three days.\u201D",
      {
        x: 0.8, y: qy + 0.25, w: W - 1.6, h: 0.7,
        fontFace: PPTX_BRAND.font.display, fontSize: 18, italic: true, color: C.ink,
        margin: 0,
      },
    );
    slide.addText("VP of Insights · Top 5 Global FMCG", {
      x: 0.8, y: qy + 1.05, w: W - 1.6, h: 0.4,
      fontFace: PPTX_BRAND.font.body, fontSize: 11, color: C.primary,
      bold: true, charSpacing: 3, margin: 0,
    });
  },
};
