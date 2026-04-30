import type { SlideSpec } from "../../slideSpec";
import {
  PPTX_BRAND,
  paintBackground,
  addBrandLogo,
} from "@/lib/pptxBrand";

const C = PPTX_BRAND.color;
const W = PPTX_BRAND.size.w;
const H = PPTX_BRAND.size.h;

/** Slide 0 — Title (hero / dark variant). Mirrors CJSlide0Title. */
export const titleSpec: SlideSpec = {
  label: "Title",
  variant: "dark",
  chrome: false,
  build: (slide, ctx) => {
    paintBackground(slide, "dark");

    // Subtle accent band on the right (Hyper Blue from GD secondary palette)
    slide.addShape("rect", {
      x: W - 0.12, y: 0, w: 0.12, h: H,
      fill: { color: C.accent }, line: { type: "none" },
    });

    // Large GD Q-mark in top-left (white glyph on navy)
    if (ctx.logo) addBrandLogo(slide, ctx.logo, "dark");

    // Eyebrow
    slide.addText("A NEW WAY OF WORKING", {
      x: 0.75, y: 2.4, w: W - 1.5, h: 0.5,
      fontFace: PPTX_BRAND.font.body, fontSize: 14,
      color: C.cream, bold: true, charSpacing: 6, margin: 0,
    });

    // Headline (Poppins Regular ≤ 32pt per GD master spec)
    slide.addText("Connected Consumer Intelligence", {
      x: 0.75, y: 2.95, w: W - 1.5, h: 1.4,
      fontFace: PPTX_BRAND.font.display, fontSize: 32, bold: false,
      color: C.inkInverse, margin: 0,
    });

    // Subhead
    slide.addText(
      "Connected. Predictive. Decisive. Powered by analyst-validated intelligence.",
      {
        x: 0.75, y: 4.35, w: W - 1.5, h: 0.6,
        fontFace: PPTX_BRAND.font.body, fontSize: 18, color: C.subtle,
        margin: 0,
      },
    );

    // Stats strip — outline cards on navy with GD Hyper Blue numbers
    const stats = [
      { value: "70%", label: "Faster decisions" },
      { value: "2×", label: "Launch success" },
      { value: "30%", label: "Lower TCO" },
      { value: "95%", label: "Global GDP coverage" },
    ];
    const sy = 5.4;
    const gap = 0.3;
    const sw = (W - 1.5 - gap * (stats.length - 1)) / stats.length;
    stats.forEach((s, i) => {
      const sx = 0.75 + i * (sw + gap);
      slide.addShape("roundRect", {
        x: sx, y: sy, w: sw, h: 1.2,
        fill: { color: C.navy }, line: { color: C.accent, width: 0.75 },
        rectRadius: 0.08,
      });
      slide.addText(s.value, {
        x: sx, y: sy + 0.18, w: sw, h: 0.55,
        fontFace: PPTX_BRAND.font.display, fontSize: 30, bold: true,
        color: C.accent, align: "center", valign: "middle", margin: 0,
      });
      slide.addText(s.label, {
        x: sx, y: sy + 0.75, w: sw, h: 0.4,
        fontFace: PPTX_BRAND.font.body, fontSize: 11, color: C.subtle,
        align: "center", valign: "middle", margin: 0,
      });
    });

    // Footer wordmark — GD master uses "globaldata.com"
    slide.addText("globaldata.com  ·  CONNECTED CONSUMER INTELLIGENCE", {
      x: 0.75, y: H - 0.6, w: 8, h: 0.3,
      fontFace: PPTX_BRAND.font.body, fontSize: 9, color: C.subtle,
      charSpacing: 4, margin: 0,
    });
  },
};
