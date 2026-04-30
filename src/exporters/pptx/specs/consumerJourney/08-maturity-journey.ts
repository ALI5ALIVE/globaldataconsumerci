import type { SlideSpec } from "../../slideSpec";
import { PPTX_BRAND, addTitleBlock, addCard } from "@/lib/pptxBrand";

const C = PPTX_BRAND.color;
const W = PPTX_BRAND.size.w;

/** Slide 8 — Maturity Journey (CJSlideMaturityJourney). 5-stage curve as native shapes. */
export const maturityJourneySpec: SlideSpec = {
  label: "Maturity Journey",
  build: (slide) => {
    addTitleBlock(slide, {
      eyebrow: "Intelligence Maturity",
      title: "The journey from Fragmented to Predictive.",
      subtitle: "You can't skip to Predictive without first being Connected. Taxonomy is the foundation.",
    });

    const stages = [
      { name: "Fragmented", color: C.stage1 },
      { name: "Managed", color: C.stage2 },
      { name: "Connected", color: C.stage3 },
      { name: "Optimised", color: C.stage4 },
      { name: "Predictive", color: C.stage5 },
    ];

    // Curve: 5 ellipses on an ascending line
    const top = 3.1;
    const baseY = 4.6;
    const x0 = 0.6;
    const span = W - 1.2;
    const stepX = span / (stages.length - 1);

    // Draw connecting line
    for (let i = 0; i < stages.length - 1; i++) {
      const x1 = x0 + i * stepX;
      const x2 = x0 + (i + 1) * stepX;
      const y1 = baseY - i * 0.32;
      const y2 = baseY - (i + 1) * 0.32;
      const segLen = Math.hypot(x2 - x1, y2 - y1);
      // Approximate line using a thin rotated rect via a series of ellipses (pptxgen has no line shape)
      const dots = 18;
      for (let d = 0; d <= dots; d++) {
        const tx = x1 + ((x2 - x1) * d) / dots;
        const ty = y1 + ((y2 - y1) * d) / dots;
        slide.addShape("ellipse", {
          x: tx - 0.025, y: ty - 0.025, w: 0.05, h: 0.05,
          fill: { color: C.hairline }, line: { type: "none" },
        });
      }
    }

    stages.forEach((s, i) => {
      const x = x0 + i * stepX;
      const y = baseY - i * 0.32;
      const r = 0.3 + i * 0.04;
      slide.addShape("ellipse", {
        x: x - r, y: y - r, w: r * 2, h: r * 2,
        fill: { color: s.color }, line: { color: "FFFFFF", width: 2 },
      });
      slide.addText(String(i + 1), {
        x: x - r, y: y - r, w: r * 2, h: r * 2,
        fontFace: PPTX_BRAND.font.display, fontSize: 14, bold: true, color: "FFFFFF",
        align: "center", valign: "middle", margin: 0,
      });
      slide.addText(s.name, {
        x: x - 1, y: y + r + 0.08, w: 2, h: 0.3,
        fontFace: PPTX_BRAND.font.display, fontSize: 12, bold: true, color: C.ink,
        align: "center", margin: 0,
      });
    });

    // Four summary boxes below
    const boxes = [
      { title: "Stage 1 → 2", body: "Reconciliation drops 60% → 20%. Decisions compress to weeks." },
      { title: "Stage 2 → 3 (Connected)", body: "One taxonomy across all five solutions. The mandatory AI gateway." },
      { title: "Stage 3 → 4 (Optimised)", body: "AI surfaces cross-solution patterns no team would spot alone." },
      { title: "Stage 4 → 5 (Predictive)", body: "AI anticipates market shifts before they happen." },
    ];
    const boxTop = 5.6;
    const x0b = 0.5;
    const wb = W - 1;
    const gap = 0.18;
    const bw = (wb - gap * (boxes.length - 1)) / boxes.length;
    const bh = 1.2;
    boxes.forEach((b, i) => {
      const x = x0b + i * (bw + gap);
      addCard(slide, x, boxTop, bw, bh, { fill: C.surface });
      slide.addText(b.title, {
        x: x + 0.15, y: boxTop + 0.12, w: bw - 0.3, h: 0.3,
        fontFace: PPTX_BRAND.font.display, fontSize: 11, bold: true, color: C.primary,
        margin: 0,
      });
      slide.addText(b.body, {
        x: x + 0.15, y: boxTop + 0.42, w: bw - 0.3, h: bh - 0.5,
        fontFace: PPTX_BRAND.font.body, fontSize: 10, color: C.inkSoft,
        valign: "top", margin: 0,
      });
    });
  },
};
