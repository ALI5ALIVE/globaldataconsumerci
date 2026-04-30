import type { SlideSpec } from "../../slideSpec";
import { PPTX_BRAND, addCard, addGlyphTile } from "@/lib/pptxBrand";
import { CTA_SLIDE as CTA } from "./_copy";

const C = PPTX_BRAND.color;
const W = PPTX_BRAND.size.w;

/** Slide 11 — CTA. Headline + social proof badge + 3 CTAs + reassurance. */
export const ctaSpec: SlideSpec = {
  label: "Next Steps",
  gdLayout: "X2ColumnBackground",
  build: (slide) => {
    // Diagonal navy accent (mirrors the live diagonal-split visual)
    slide.addShape("rtTriangle", {
      x: W - 4.5, y: 0, w: 4.5, h: 3.0,
      fill: { color: C.navy, transparency: 92 }, line: { type: "none" },
      flipH: true,
    });
    slide.addShape("rtTriangle", {
      x: 0, y: H - 2.5, w: 4.0, h: 2.5,
      fill: { color: C.primary, transparency: 94 }, line: { type: "none" },
    });

    // Eyebrow
    slide.addText(CTA.eyebrow.toUpperCase(), {
      x: 0.5, y: 0.7, w: W - 1, h: 0.3,
      fontFace: PPTX_BRAND.font.body, fontSize: 11, bold: true, color: C.primary,
      align: "center", charSpacing: 5, margin: 0,
    });

    // Headline (split color)
    slide.addText(
      [
        { text: CTA.titleA + " ", options: { color: C.ink } },
        { text: CTA.titleAccent, options: { color: C.primary } },
      ],
      {
        x: 0.5, y: 1.1, w: W - 1, h: 0.9,
        fontFace: PPTX_BRAND.font.display, fontSize: 36, bold: true,
        align: "center", valign: "middle", margin: 0,
      },
    );

    // Sub
    slide.addText(CTA.sub, {
      x: 0.5, y: 2.1, w: W - 1, h: 0.4,
      fontFace: PPTX_BRAND.font.body, fontSize: 16, color: C.muted,
      align: "center", margin: 0,
    });

    // Social-proof badge (centered pill)
    const badgeW = 7.2;
    const badgeX = (W - badgeW) / 2;
    slide.addShape("roundRect", {
      x: badgeX, y: 2.7, w: badgeW, h: 0.45,
      fill: { color: C.surface }, line: { color: C.primary, width: 1 },
      rectRadius: 0.22,
    });
    slide.addText(CTA.badge, {
      x: badgeX, y: 2.7, w: badgeW, h: 0.45,
      fontFace: PPTX_BRAND.font.body, fontSize: 12, color: C.ink,
      align: "center", valign: "middle", margin: 0,
    });

    // 3 CTA cards
    const top = 3.5;
    const cAreaW = 10;
    const x0 = (W - cAreaW) / 2;
    const gap = 0.3;
    const cw = (cAreaW - gap * (CTA.options.length - 1)) / CTA.options.length;
    const ch = 2.6;
    CTA.options.forEach((opt, i) => {
      const x = x0 + i * (cw + gap);
      addCard(slide, x, top, cw, ch, { fill: "EAF0FF", border: C.primary });
      addGlyphTile(slide, x + 0.25, top + 0.25, 0.5, { glyph: opt.glyph, color: C.primary, fill: C.primary });
      slide.addText(opt.title, {
        x: x + 0.25, y: top + 0.85, w: cw - 0.5, h: 0.45,
        fontFace: PPTX_BRAND.font.display, fontSize: 14, bold: true, color: C.ink,
        valign: "top", margin: 0,
      });
      slide.addText(opt.desc, {
        x: x + 0.25, y: top + 1.3, w: cw - 0.5, h: 0.85,
        fontFace: PPTX_BRAND.font.body, fontSize: 10, color: C.muted,
        valign: "top", margin: 0,
      });
      // Action pill
      slide.addShape("roundRect", {
        x: x + 0.25, y: top + ch - 0.55, w: cw - 0.5, h: 0.4,
        fill: { color: C.primary }, line: { type: "none" },
        rectRadius: 0.2,
      });
      slide.addText(opt.cta + "  →", {
        x: x + 0.25, y: top + ch - 0.55, w: cw - 0.5, h: 0.4,
        fontFace: PPTX_BRAND.font.body, fontSize: 11, bold: true, color: "FFFFFF",
        align: "center", valign: "middle", margin: 0,
      });
    });

    // Reassurance italic
    slide.addText(CTA.reassurance, {
      x: 0.5, y: top + ch + 0.25, w: W - 1, h: 0.3,
      fontFace: PPTX_BRAND.font.body, fontSize: 12, italic: true, color: C.muted,
      align: "center", margin: 0,
    });
  },
};
