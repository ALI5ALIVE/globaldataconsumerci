import type { SlideSpec } from "../../slideSpec";
import { PPTX_BRAND, addCard, addGlyphTile } from "@/lib/pptxBrand";
import { DIY_SLIDE as D } from "./_copy";

const C = PPTX_BRAND.color;
const W = PPTX_BRAND.size.w;

/** Slide 10 — Why Not DIY. Quoted headline + 2 columns × 4 icon rows + closing italic. */
export const whyNotDiySpec: SlideSpec = {
  label: "Why Not DIY",
  gdLayout: "X2Column",
  build: (slide) => {
    // Eyebrow
    slide.addText(D.eyebrow.toUpperCase(), {
      x: 0.5, y: 0.6, w: W - 1, h: 0.3,
      fontFace: PPTX_BRAND.font.body, fontSize: 11, bold: true, color: C.muted,
      align: "center", charSpacing: 5, margin: 0,
    });
    // Headline (3 spans, "integrate" in red)
    slide.addText(
      [
        { text: D.titleA + " ", options: { color: C.ink } },
        { text: D.titleAccent, options: { color: C.danger } },
        { text: " " + D.titleB, options: { color: C.ink } },
      ],
      {
        x: 0.5, y: 0.95, w: W - 1, h: 0.7,
        fontFace: PPTX_BRAND.font.display, fontSize: 28, bold: true,
        align: "center", valign: "middle", margin: 0,
      },
    );

    // Two columns
    const top = 2.0;
    const x0 = 0.5;
    const w = W - 1;
    const gap = 0.3;
    const colW = (w - gap) / 2;
    const colH = 4.0;

    // DIY column (red tint)
    addCard(slide, x0, top, colW, colH, { fill: "FAEDEB", border: C.danger });
    slide.addText("✕  DIY INTEGRATION", {
      x: x0 + 0.25, y: top + 0.2, w: colW - 0.5, h: 0.4,
      fontFace: PPTX_BRAND.font.body, fontSize: 12, bold: true, color: C.danger,
      charSpacing: 4, margin: 0,
    });

    // Connected column (blue tint)
    const px = x0 + colW + gap;
    addCard(slide, px, top, colW, colH, { fill: "EAF0FF", border: C.primary });
    slide.addText("✓  CONNECTED INTELLIGENCE", {
      x: px + 0.25, y: top + 0.2, w: colW - 0.5, h: 0.4,
      fontFace: PPTX_BRAND.font.body, fontSize: 12, bold: true, color: C.primary,
      charSpacing: 4, margin: 0,
    });

    const rowsTop = top + 0.7;
    const rowH = (colH - 0.85) / D.diy.length;
    D.diy.forEach((row, i) => {
      const ry = rowsTop + i * rowH;
      addGlyphTile(slide, x0 + 0.25, ry + 0.1, 0.36, { glyph: row.glyph, color: C.danger, fill: C.danger });
      slide.addText(row.label, {
        x: x0 + 0.75, y: ry + 0.05, w: colW - 0.9, h: 0.3,
        fontFace: PPTX_BRAND.font.display, fontSize: 11, bold: true, color: C.ink,
        valign: "top", margin: 0,
      });
      slide.addText(row.detail, {
        x: x0 + 0.75, y: ry + 0.35, w: colW - 0.9, h: rowH - 0.4,
        fontFace: PPTX_BRAND.font.body, fontSize: 9, color: C.muted,
        valign: "top", margin: 0,
      });
    });
    D.connected.forEach((row, i) => {
      const ry = rowsTop + i * rowH;
      addGlyphTile(slide, px + 0.25, ry + 0.1, 0.36, { glyph: row.glyph, color: C.primary, fill: C.primary });
      slide.addText(row.label, {
        x: px + 0.75, y: ry + 0.05, w: colW - 0.9, h: 0.3,
        fontFace: PPTX_BRAND.font.display, fontSize: 11, bold: true, color: C.ink,
        valign: "top", margin: 0,
      });
      slide.addText(row.detail, {
        x: px + 0.75, y: ry + 0.35, w: colW - 0.9, h: rowH - 0.4,
        fontFace: PPTX_BRAND.font.body, fontSize: 9, color: C.muted,
        valign: "top", margin: 0,
      });
    });

    // Callout band
    const cy = top + colH + 0.15;
    addCard(slide, x0, cy, w, 0.4, { fill: "EAF0FF", border: C.primary });
    slide.addText(D.callout, {
      x: x0, y: cy, w, h: 0.4,
      fontFace: PPTX_BRAND.font.body, fontSize: 10, bold: true, color: C.primary,
      align: "center", valign: "middle", charSpacing: 1, margin: 0,
    });

    // Closing italic
    slide.addText(D.closing, {
      x: 0.5, y: cy + 0.5, w: W - 1, h: 0.4,
      fontFace: PPTX_BRAND.font.display, fontSize: 12, italic: true, bold: true, color: C.inkSoft,
      align: "center", margin: 0,
    });
  },
};
