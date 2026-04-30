import type { SlideSpec } from "../../slideSpec";
import { PPTX_BRAND, addCard, addGlyphTile } from "@/lib/pptxBrand";
import { PRESSURE_SLIDE as P } from "./_copy";

const C = PPTX_BRAND.color;
const W = PPTX_BRAND.size.w;

const ACCENT_MAP = {
  primary: C.primary,
  accent: C.accent,
  warning: C.warning,
  danger: C.danger,
} as const;

/** Slide 1 — The Pressure. 2x2 cards. */
export const pressureSpec: SlideSpec = {
  label: "The Pressure",
  gdLayout: "Divider",
  build: (slide) => {
    // Eyebrow
    slide.addText("THE PRESSURE", {
      x: 0.5, y: 0.55, w: W - 1, h: 0.3,
      fontFace: PPTX_BRAND.font.body, fontSize: 11, bold: true, color: C.primary,
      align: "center", charSpacing: 4, margin: 0,
    });
    // Centered headline (split-color)
    slide.addText(P.titleA + " ", {
      x: 0.5, y: 0.95, w: W - 1, h: 0.7,
      fontFace: PPTX_BRAND.font.display, fontSize: 32, bold: true, color: C.ink,
      align: "center", valign: "middle", margin: 0,
    });
    slide.addText(P.titleB, {
      x: 0.5, y: 1.6, w: W - 1, h: 0.7,
      fontFace: PPTX_BRAND.font.display, fontSize: 32, bold: true, color: C.danger,
      align: "center", valign: "middle", margin: 0,
    });
    slide.addText(P.sub, {
      x: 1.5, y: 2.35, w: W - 3, h: 0.55,
      fontFace: PPTX_BRAND.font.body, fontSize: 14, color: C.muted,
      align: "center", valign: "top", margin: 0,
    });

    // 2x2 grid
    const x0 = 1.5;
    const top = 3.05;
    const w = W - 3;
    const gapX = 0.35;
    const gapY = 0.3;
    const cw = (w - gapX) / 2;
    const ch = 1.55;
    P.cards.forEach((card, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const x = x0 + col * (cw + gapX);
      const y = top + row * (ch + gapY);
      const accent = ACCENT_MAP[card.accent];
      addCard(slide, x, y, cw, ch, { fill: C.surface, border: C.hairline });
      addGlyphTile(slide, x + 0.18, y + 0.18, 0.55, { glyph: card.glyph, color: accent, fill: accent });
      slide.addText(card.title, {
        x: x + 0.95, y: y + 0.18, w: cw - 1.1, h: 0.4,
        fontFace: PPTX_BRAND.font.display, fontSize: 14, bold: true, color: C.ink,
        valign: "top", margin: 0,
      });
      slide.addText(card.desc, {
        x: x + 0.95, y: y + 0.6, w: cw - 1.1, h: ch - 0.7,
        fontFace: PPTX_BRAND.font.body, fontSize: 11, color: C.muted,
        valign: "top", margin: 0,
      });
    });

    // Bridge italic line
    slide.addText(P.bridge, {
      x: 0.5, y: 6.55, w: W - 1, h: 0.4,
      fontFace: PPTX_BRAND.font.display, fontSize: 14, italic: true,
      color: C.inkSoft, align: "center", margin: 0,
    });
  },
};
