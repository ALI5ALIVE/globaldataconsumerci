import type { SlideSpec } from "../../slideSpec";
import { PPTX_BRAND, addCard, addGlyphTile, addTitleBlock } from "@/lib/pptxBrand";
import { TEAMS_SLIDE as T } from "./_copy";

const C = PPTX_BRAND.color;
const W = PPTX_BRAND.size.w;

const ACCENT_MAP: Record<string, string> = {
  danger: C.danger,
  warning: C.warning,
  muted: C.muted,
  primarySoft: C.primarySoft,
  accent: C.accent,
  primary: C.primary,
};

const drawBarSet = (
  slide: Parameters<NonNullable<import("../../slideSpec").SlideSpec["build"]>>[0],
  x: number, y: number, w: number, h: number,
  label: string, bars: typeof T.before,
) => {
  slide.addText(label, {
    x, y, w, h: 0.3,
    fontFace: PPTX_BRAND.font.display, fontSize: 12, bold: true, color: C.ink,
    margin: 0,
  });
  const rowH = (h - 0.4) / bars.length;
  bars.forEach((b, i) => {
    const ry = y + 0.4 + i * rowH;
    slide.addText(b.label, {
      x, y: ry, w: 1.0, h: rowH - 0.06,
      fontFace: PPTX_BRAND.font.body, fontSize: 10, color: C.muted,
      align: "right", valign: "middle", margin: 0,
    });
    // Track
    const trackX = x + 1.1;
    const trackW = w - 1.1;
    slide.addShape("roundRect", {
      x: trackX, y: ry + 0.04, w: trackW, h: rowH - 0.14,
      fill: { color: C.bgAlt }, line: { type: "none" },
      rectRadius: 0.05,
    });
    // Fill
    const fillW = (b.pct / 100) * trackW;
    if (fillW > 0.05) {
      slide.addShape("roundRect", {
        x: trackX, y: ry + 0.04, w: fillW, h: rowH - 0.14,
        fill: { color: ACCENT_MAP[b.accent] }, line: { type: "none" },
        rectRadius: 0.05,
      });
      slide.addText(`${b.pct}%`, {
        x: trackX, y: ry + 0.04, w: fillW - 0.05, h: rowH - 0.14,
        fontFace: PPTX_BRAND.font.body, fontSize: 9, bold: true, color: "FFFFFF",
        align: "right", valign: "middle", margin: 0,
      });
    }
  });
};

/** Slide 7 — Teams Transformed. Before/after bars + 3 outcome cards. */
export const teamsTransformedSpec: SlideSpec = {
  label: "Teams Transformed",
  build: (slide) => {
    addTitleBlock(slide, {
      eyebrow: T.eyebrow,
      title: T.title,
      subtitle: T.sub,
    });

    const top = 3.05;
    const x0 = 0.5;
    const w = W - 1;
    const gap = 0.4;
    const colW = (w - gap) / 2;
    const colH = 2.0;

    drawBarSet(slide, x0, top, colW, colH, "Today — Fragmented", T.before);
    drawBarSet(slide, x0 + colW + gap, top, colW, colH, "Connected — Transformed", T.after);

    // Velocity band
    const vy = top + colH + 0.15;
    addCard(slide, x0, vy, w, 0.5, { fill: C.surface });
    slide.addText("Decision velocity:", {
      x: x0 + 0.3, y: vy, w: 2.5, h: 0.5,
      fontFace: PPTX_BRAND.font.body, fontSize: 11, color: C.muted,
      valign: "middle", margin: 0,
    });
    slide.addText(T.velocityBefore, {
      x: x0 + 2.6, y: vy, w: 1.6, h: 0.5,
      fontFace: PPTX_BRAND.font.display, fontSize: 14, bold: true,
      color: C.danger, strike: true, valign: "middle", margin: 0,
    });
    slide.addText("\u2192", {
      x: x0 + 4.2, y: vy, w: 0.5, h: 0.5,
      fontFace: PPTX_BRAND.font.display, fontSize: 16, color: C.primary,
      align: "center", valign: "middle", margin: 0,
    });
    slide.addText(T.velocityAfter, {
      x: x0 + 4.7, y: vy, w: 2, h: 0.5,
      fontFace: PPTX_BRAND.font.display, fontSize: 14, bold: true,
      color: C.primary, valign: "middle", margin: 0,
    });

    // 3 outcome cards
    const cy = vy + 0.65;
    const cgap = 0.2;
    const cw = (w - cgap * 2) / 3;
    const ch = 1.4;
    T.cards.forEach((c, i) => {
      const cx = x0 + i * (cw + cgap);
      addCard(slide, cx, cy, cw, ch, { fill: "EAF0FF", border: C.primary });
      addGlyphTile(slide, cx + cw / 2 - 0.18, cy + 0.12, 0.36, { glyph: c.glyph, color: C.primary, fill: C.primary });
      slide.addText(c.metric, {
        x: cx, y: cy + 0.5, w: cw, h: 0.4,
        fontFace: PPTX_BRAND.font.display, fontSize: 22, bold: true, color: C.primary,
        align: "center", valign: "middle", margin: 0,
      });
      slide.addText(c.title, {
        x: cx, y: cy + 0.88, w: cw, h: 0.25,
        fontFace: PPTX_BRAND.font.display, fontSize: 11, bold: true, color: C.ink,
        align: "center", margin: 0,
      });
      slide.addText(c.desc, {
        x: cx + 0.15, y: cy + 1.13, w: cw - 0.3, h: 0.27,
        fontFace: PPTX_BRAND.font.body, fontSize: 8.5, color: C.muted,
        align: "center", valign: "top", margin: 0,
      });
    });
  },
};
