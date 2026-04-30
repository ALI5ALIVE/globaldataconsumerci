import type { SlideSpec } from "../../slideSpec";
import { PPTX_BRAND, addCard, addGlyphTile, addTitleBlock } from "@/lib/pptxBrand";
import { COST_SLIDE as CS } from "./_copy";

const C = PPTX_BRAND.color;
const W = PPTX_BRAND.size.w;

const ACCENT_MAP = {
  primary: C.primary,
  accent: C.accent,
  warning: C.warning,
  danger: C.danger,
  success: C.success,
} as const;

const renderColumn = (
  slide: Parameters<NonNullable<import("../../slideSpec").SlideSpec["build"]>>[0],
  x: number, top: number, w: number, h: number,
  eyebrow: string, eyebrowColor: string,
  items: ReadonlyArray<{ glyph: string; stat: string; detail: string; accent: keyof typeof ACCENT_MAP }>,
) => {
  slide.addText(eyebrow.toUpperCase(), {
    x, y: top, w, h: 0.3,
    fontFace: PPTX_BRAND.font.body, fontSize: 10, bold: true, color: eyebrowColor,
    charSpacing: 4, margin: 0,
  });
  const cardTop = top + 0.35;
  const gap = 0.15;
  const ch = (h - 0.35 - gap * (items.length - 1)) / items.length;
  items.forEach((item, i) => {
    const cy = cardTop + i * (ch + gap);
    const accent = ACCENT_MAP[item.accent];
    addCard(slide, x, cy, w, ch, { fill: C.surface, border: accent });
    slide.addShape("rect", {
      x, y: cy, w: 0.06, h: ch,
      fill: { color: accent }, line: { type: "none" },
    });
    addGlyphTile(slide, x + 0.18, cy + 0.18, 0.42, { glyph: item.glyph, color: accent, fill: accent });
    slide.addText(item.stat, {
      x: x + 0.75, y: cy + 0.12, w: w - 0.85, h: 0.4,
      fontFace: PPTX_BRAND.font.display, fontSize: 13, bold: true, color: C.ink,
      valign: "top", margin: 0,
    });
    slide.addText(item.detail, {
      x: x + 0.75, y: cy + 0.52, w: w - 0.85, h: ch - 0.6,
      fontFace: PPTX_BRAND.font.body, fontSize: 10, color: C.muted,
      valign: "top", margin: 0,
    });
  });
};

/** Slide 4 — The Cost. Two columns of 3 cost cards + accumulator. */
export const theCostSpec: SlideSpec = {
  label: "The Cost",
  gdLayout: "X2Column",
  build: (slide) => {
    addTitleBlock(slide, {
      eyebrow: CS.eyebrow,
      title: CS.title,
      subtitle: CS.sub,
    });

    const x0 = 0.5;
    const top = 3.05;
    const w = W - 1;
    const gap = 0.3;
    const colW = (w - gap) / 2;
    const colH = 3.3;

    renderColumn(slide, x0, top, colW, colH, "Your Business", C.danger, CS.business);
    renderColumn(slide, x0 + colW + gap, top, colW, colH, "You, Personally", C.primary, CS.personal);

    // Accumulator band
    const ay = top + colH + 0.15;
    addCard(slide, x0, ay, w, 0.55, { fill: "EAF0FF", border: C.primary });
    slide.addText(
      [
        { text: "Revenue at risk:  ", options: { color: C.muted } },
        { text: CS.accumulator.revenue + "  ·  ", options: { bold: true, color: C.danger } },
        { text: "Time lost:  ", options: { color: C.muted } },
        { text: CS.accumulator.time, options: { bold: true, color: C.primary } },
      ],
      {
        x: x0 + 0.3, y: ay, w: w * 0.55, h: 0.55,
        fontFace: PPTX_BRAND.font.body, fontSize: 12,
        valign: "middle", margin: 0,
      },
    );
    slide.addText(CS.accumulator.caption, {
      x: x0 + w * 0.55, y: ay, w: w * 0.45 - 0.3, h: 0.55,
      fontFace: PPTX_BRAND.font.body, fontSize: 10, italic: true, color: C.muted,
      align: "right", valign: "middle", margin: 0,
    });
  },
};
