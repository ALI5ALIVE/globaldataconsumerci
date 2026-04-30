import type { SlideSpec } from "../../slideSpec";
import { PPTX_BRAND, addTitleBlock, addStatTile, addCard } from "@/lib/pptxBrand";

const C = PPTX_BRAND.color;
const W = PPTX_BRAND.size.w;

/** Slide 7 — Teams Transformed (CPSlide7TeamsTransformed). */
export const teamsTransformedSpec: SlideSpec = {
  label: "Teams Transformed",
  build: (slide) => {
    addTitleBlock(slide, {
      eyebrow: "Teams Transformed",
      title: "Your best people stop being data janitors.",
      subtitle: "Strategy time goes from 10% → 75%. Decision velocity from weeks → hours.",
    });

    const stats = [
      { value: "75%", label: "Time on strategy (was 10%)", accent: C.primary },
      { value: "Hours", label: "Decision velocity (was 6–8 weeks)", accent: C.accent },
      { value: "2×", label: "Innovation hit rate", accent: C.success },
    ];
    const x0 = 0.5;
    const w = W - 1;
    const gap = 0.3;
    const tw = (w - gap * (stats.length - 1)) / stats.length;
    const ty = 3.2;
    stats.forEach((s, i) => {
      addStatTile(slide, x0 + i * (tw + gap), ty, tw, 1.8, s.value, s.label, s.accent);
    });

    // Talent retention card
    const cy = ty + 2.1;
    addCard(slide, x0, cy, w, 1.65, { fill: C.surface });
    slide.addShape("rect", {
      x: x0, y: cy + 0.15, w: 0.06, h: 1.35,
      fill: { color: C.primary }, line: { type: "none" },
    });
    slide.addText("AND THE TALENT YOU FOUGHT TO HIRE — STAYS.", {
      x: x0 + 0.25, y: cy + 0.18, w: w - 0.5, h: 0.32,
      fontFace: PPTX_BRAND.font.body, fontSize: 10, bold: true, color: C.primary,
      charSpacing: 3, margin: 0,
    });
    slide.addText(
      "Because they're finally doing the work they were hired to do — not reconciling spreadsheets. " +
      "That's not incremental improvement. That's a fundamentally different way of working.",
      {
        x: x0 + 0.25, y: cy + 0.55, w: w - 0.5, h: 1.0,
        fontFace: PPTX_BRAND.font.body, fontSize: 14, color: C.inkSoft,
        valign: "top", margin: 0,
      },
    );
  },
};
