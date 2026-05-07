import type { SlideSpec } from "../../slideSpec";
import { PPTX_BRAND, addCard, addGlyphTile } from "@/lib/pptxBrand";
import { WHAT_YOU_GET_SLIDE as W } from "./_copy";

const C = PPTX_BRAND.color;
const SW = PPTX_BRAND.size.w;

/** Slide 06 — What You Actually Get. 6-tile deliverables grid + Day 1/30/90 timeline strip. */
export const whatYouGetSpec: SlideSpec = {
  label: "What You Get",
  gdLayout: "Content",
  build: (slide) => {
    // Eyebrow
    slide.addText(W.eyebrow.toUpperCase(), {
      x: 0.5, y: 0.55, w: SW - 1, h: 0.3,
      fontFace: PPTX_BRAND.font.body, fontSize: 11, bold: true, color: C.muted,
      align: "center", charSpacing: 5, margin: 0,
    });
    // Title
    slide.addText(
      [
        { text: W.titleA + " ", options: { color: C.ink } },
        { text: W.titleAccent, options: { color: C.primary } },
      ],
      {
        x: 0.5, y: 0.9, w: SW - 1, h: 0.55,
        fontFace: PPTX_BRAND.font.display, fontSize: 26, bold: true,
        align: "center", valign: "middle", margin: 0,
      },
    );
    // Sub
    slide.addText(W.sub, {
      x: 0.5, y: 1.5, w: SW - 1, h: 0.32,
      fontFace: PPTX_BRAND.font.body, fontSize: 12, color: C.muted,
      align: "center", valign: "middle", margin: 0,
    });

    // 6-tile grid: 3 cols × 2 rows
    const gridTop = 2.0;
    const gridLeft = 0.5;
    const gridW = SW - 1;
    const cols = 3;
    const rows = 2;
    const gap = 0.2;
    const tileW = (gridW - gap * (cols - 1)) / cols;
    const tileH = 1.55;

    W.tiles.forEach((tile, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const x = gridLeft + col * (tileW + gap);
      const y = gridTop + row * (tileH + gap);
      addCard(slide, x, y, tileW, tileH, { fill: C.surface, border: C.hairline });
      addGlyphTile(slide, x + 0.25, y + 0.2, 0.42, {
        glyph: tile.glyph, color: C.primary, fill: C.primary,
      });
      slide.addText(tile.title, {
        x: x + 0.25, y: y + 0.7, w: tileW - 0.5, h: 0.4,
        fontFace: PPTX_BRAND.font.display, fontSize: 11, bold: true, color: C.ink,
        valign: "top", margin: 0,
      });
      slide.addText(tile.detail, {
        x: x + 0.25, y: y + 1.05, w: tileW - 0.5, h: tileH - 1.1,
        fontFace: PPTX_BRAND.font.body, fontSize: 9, color: C.muted,
        valign: "top", margin: 0,
      });
    });

    // Timeline strip: 3 chips
    const stripTop = gridTop + rows * (tileH + gap) + 0.05;
    const chipH = 0.55;
    const chipW = (gridW - gap * 2) / 3;
    W.timeline.forEach((step, i) => {
      const x = gridLeft + i * (chipW + gap);
      addCard(slide, x, stripTop, chipW, chipH, { fill: "EAF0FF", border: C.primary });
      slide.addText(step.day.toUpperCase(), {
        x: x + 0.2, y: stripTop, w: 0.85, h: chipH,
        fontFace: PPTX_BRAND.font.display, fontSize: 10, bold: true, color: C.primary,
        valign: "middle", charSpacing: 2, margin: 0,
      });
      slide.addText(step.text, {
        x: x + 1.05, y: stripTop, w: chipW - 1.15, h: chipH,
        fontFace: PPTX_BRAND.font.body, fontSize: 9, color: C.ink,
        valign: "middle", margin: 0,
      });
    });

    // Closing tagline (right-aligned, italic)
    slide.addText(W.closing, {
      x: 0.5, y: stripTop + chipH + 0.05, w: gridW, h: 0.3,
      fontFace: PPTX_BRAND.font.display, fontSize: 10, italic: true, color: C.muted,
      align: "right", valign: "middle", margin: 0,
    });
  },
};
