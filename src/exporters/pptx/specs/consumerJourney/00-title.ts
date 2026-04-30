import type { SlideSpec } from "../../slideSpec";
import { PPTX_BRAND, paintBackground, addBrandLogo } from "@/lib/pptxBrand";
import { TITLE_SLIDE as T } from "./_copy";

const C = PPTX_BRAND.color;
const W = PPTX_BRAND.size.w;
const H = PPTX_BRAND.size.h;

/** Slide 0 — Title (hero / dark variant). Mirrors CJSlide0Title. */
export const titleSpec: SlideSpec = {
  label: "Title",
  variant: "dark",
  chrome: false,
  gdLayout: "TitleSlide",
  build: (slide, ctx) => {
    paintBackground(slide, "dark");

    // Right edge accent
    slide.addShape("rect", {
      x: W - 0.12, y: 0, w: 0.12, h: H,
      fill: { color: C.accent }, line: { type: "none" },
    });

    if (ctx.logo) addBrandLogo(slide, ctx.logo, "dark");

    // Audience badge pill
    const badgeW = 4.6;
    const badgeX = (W - badgeW) / 2;
    slide.addShape("roundRect", {
      x: badgeX, y: 1.7, w: badgeW, h: 0.42,
      fill: { color: C.navy }, line: { color: C.accent, width: 1 },
      rectRadius: 0.21,
    });
    slide.addText(T.badge, {
      x: badgeX, y: 1.7, w: badgeW, h: 0.42,
      fontFace: PPTX_BRAND.font.body, fontSize: 11, bold: true,
      color: C.accent, align: "center", valign: "middle",
      charSpacing: 4, margin: 0,
    });

    // Headline
    slide.addText(T.headlineTop, {
      x: 0.5, y: 2.4, w: W - 1, h: 0.85,
      fontFace: PPTX_BRAND.font.display, fontSize: 44, bold: true,
      color: C.inkInverse, align: "center", valign: "middle", margin: 0,
    });
    slide.addText(T.headlineBottom, {
      x: 0.5, y: 3.25, w: W - 1, h: 0.85,
      fontFace: PPTX_BRAND.font.display, fontSize: 44, bold: true,
      color: C.accent, align: "center", valign: "middle", margin: 0,
    });

    // Sub
    slide.addText(T.sub, {
      x: 1.5, y: 4.25, w: W - 3, h: 0.65,
      fontFace: PPTX_BRAND.font.body, fontSize: 16, color: C.subtle,
      align: "center", valign: "top", margin: 0,
    });

    // Stats strip
    const sy = 5.15;
    const gap = 0.4;
    const sw = (W - 2.5 - gap * (T.stats.length - 1)) / T.stats.length;
    T.stats.forEach((s, i) => {
      const sx = 1.25 + i * (sw + gap);
      slide.addText(s.value, {
        x: sx, y: sy, w: sw, h: 0.55,
        fontFace: PPTX_BRAND.font.display, fontSize: 28, bold: true,
        color: C.accent, align: "center", valign: "middle", margin: 0,
      });
      slide.addText(s.label, {
        x: sx, y: sy + 0.6, w: sw, h: 0.4,
        fontFace: PPTX_BRAND.font.body, fontSize: 10, color: C.subtle,
        align: "center", valign: "middle", margin: 0,
      });
    });

    // Italic quote band
    slide.addText(T.quote, {
      x: 1, y: 6.25, w: W - 2, h: 0.55,
      fontFace: PPTX_BRAND.font.display, fontSize: 16, italic: true,
      color: C.cream, align: "center", valign: "middle", margin: 0,
    });

    // Footer eyebrow
    slide.addText(T.eyebrowFooter, {
      x: 0.5, y: H - 0.5, w: W - 1, h: 0.3,
      fontFace: PPTX_BRAND.font.body, fontSize: 10, bold: true,
      color: C.accent, align: "center", charSpacing: 6, margin: 0,
    });
  },
};
