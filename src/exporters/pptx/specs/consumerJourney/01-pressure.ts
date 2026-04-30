import type { SlideSpec } from "../../slideSpec";
import {
  PPTX_BRAND, addTitleBlock, addLabeledCard,
} from "@/lib/pptxBrand";

const C = PPTX_BRAND.color;
const W = PPTX_BRAND.size.w;

/** Slide 1 — The Pressure (CJSlide1Pressure). Three pressure cards. */
export const pressureSpec: SlideSpec = {
  label: "The Pressure",
  build: (slide) => {
    addTitleBlock(slide, {
      eyebrow: "The Pressure",
      title: "Boards want evidence. Markets move faster. Data lives in seven places.",
      subtitle: "If this feels familiar, you're not alone — and there's a structural reason it keeps happening.",
    });

    const cards = [
      {
        eyebrow: "Board pressure",
        title: "Evidence — not intuition",
        body: "Every recommendation has to be defensible. Gut-feel doesn't survive the boardroom anymore.",
        accent: C.primary,
      },
      {
        eyebrow: "Market velocity",
        title: "Trends shift faster than planning cycles",
        body: "By the time you've socialised a position, the signal has already moved on.",
        accent: C.accent,
      },
      {
        eyebrow: "Fragmentation",
        title: "Seven sources, seven answers",
        body: "Strategy, market, competitive, innovation, sales — every team is pulling from a different platform.",
        accent: C.warning,
      },
    ];
    const x0 = 0.5;
    const w = W - 1;
    const gap = 0.3;
    const cw = (w - gap * (cards.length - 1)) / cards.length;
    const cy = 3.3;
    const ch = 3.0;
    cards.forEach((c, i) => {
      addLabeledCard(slide, x0 + i * (cw + gap), cy, cw, ch, c);
    });
  },
};
