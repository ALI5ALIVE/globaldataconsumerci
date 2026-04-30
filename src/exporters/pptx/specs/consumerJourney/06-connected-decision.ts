import type { SlideSpec } from "../../slideSpec";
import { PPTX_BRAND, addCard, addGlyphTile } from "@/lib/pptxBrand";
import { CONNECTED_DECISION_SLIDE as D } from "./_copy";

const C = PPTX_BRAND.color;
const W = PPTX_BRAND.size.w;

/** Slide 6 — Connected Decision. Question → 5 persona dashboards → GO verdict → without/with. */
export const connectedDecisionSpec: SlideSpec = {
  label: "Connected Decision",
  gdLayout: "X4Column",
  build: (slide) => {
    // Eyebrow + title
    slide.addText(D.eyebrow.toUpperCase(), {
      x: 0.5, y: 0.55, w: W - 1, h: 0.3,
      fontFace: PPTX_BRAND.font.body, fontSize: 11, bold: true, color: C.primary,
      align: "center", charSpacing: 4, margin: 0,
    });
    slide.addText(D.title, {
      x: 0.5, y: 0.9, w: W - 1, h: 0.5,
      fontFace: PPTX_BRAND.font.display, fontSize: 22, bold: true, color: C.ink,
      align: "center", valign: "middle", margin: 0,
    });

    // The Question card
    const qy = 1.55;
    addCard(slide, 1.5, qy, W - 3, 0.7, { fill: "EAF0FF", border: C.primary });
    slide.addText("THE QUESTION", {
      x: 1.5, y: qy + 0.05, w: W - 3, h: 0.25,
      fontFace: PPTX_BRAND.font.body, fontSize: 9, bold: true, color: C.primary,
      align: "center", charSpacing: 4, margin: 0,
    });
    slide.addText(D.question, {
      x: 1.5, y: qy + 0.28, w: W - 3, h: 0.4,
      fontFace: PPTX_BRAND.font.display, fontSize: 13, bold: true, italic: true,
      color: C.ink, align: "center", valign: "middle", margin: 0,
    });

    // Persona dashboards row
    const dv = C.dv;
    const palette = [dv[0], dv[2], dv[5], dv[3], dv[8]];
    const top = 2.45;
    const x0 = 0.5;
    const w = W - 1;
    const gap = 0.18;
    const cw = (w - gap * (D.personas.length - 1)) / D.personas.length;
    const ch = 2.7;
    D.personas.forEach((p, i) => {
      const x = x0 + i * (cw + gap);
      const accent = palette[i];
      addCard(slide, x, top, cw, ch, { fill: C.surface });
      slide.addShape("rect", {
        x, y: top, w: cw, h: 0.06,
        fill: { color: accent }, line: { type: "none" },
      });
      addGlyphTile(slide, x + cw / 2 - 0.22, top + 0.18, 0.44, { glyph: p.glyph, color: accent, fill: accent });
      slide.addText(p.name, {
        x, y: top + 0.7, w: cw, h: 0.28,
        fontFace: PPTX_BRAND.font.display, fontSize: 12, bold: true, color: C.ink,
        align: "center", margin: 0,
      });
      slide.addText(p.role, {
        x, y: top + 0.96, w: cw, h: 0.24,
        fontFace: PPTX_BRAND.font.body, fontSize: 9, color: accent, bold: true,
        align: "center", margin: 0,
      });
      // Stat block
      slide.addText(p.stat, {
        x, y: top + 1.25, w: cw, h: 0.45,
        fontFace: PPTX_BRAND.font.display, fontSize: 22, bold: true, color: accent,
        align: "center", valign: "middle", margin: 0,
      });
      slide.addText(p.statLabel, {
        x, y: top + 1.7, w: cw, h: 0.22,
        fontFace: PPTX_BRAND.font.body, fontSize: 8, color: C.muted,
        align: "center", margin: 0,
      });
      // Verdict
      slide.addText(`\u201C${p.verdict}\u201D`, {
        x: x + 0.1, y: top + 1.95, w: cw - 0.2, h: ch - 2.05,
        fontFace: PPTX_BRAND.font.body, fontSize: 8, italic: true, color: C.inkSoft,
        align: "center", valign: "top", margin: 0,
      });
    });

    // GO verdict band (with green left rule)
    const vy = top + ch + 0.18;
    addCard(slide, 0.5, vy, W - 1, 0.55, { fill: "E8F3EE", border: C.success });
    slide.addShape("rect", {
      x: 0.5, y: vy, w: 0.1, h: 0.55,
      fill: { color: C.success }, line: { type: "none" },
    });
    slide.addText("✓  GO", {
      x: 0.7, y: vy, w: 2.5, h: 0.55,
      fontFace: PPTX_BRAND.font.display, fontSize: 18, bold: true, color: C.success,
      valign: "middle", margin: 0,
    });
    slide.addText(D.verdict.caption, {
      x: 3.0, y: vy, w: W - 3.5, h: 0.55,
      fontFace: PPTX_BRAND.font.body, fontSize: 11, italic: true, color: C.inkSoft,
      align: "right", valign: "middle", margin: 0,
    });

    // Without / With strip
    const wy = vy + 0.7;
    const halfW = (W - 1.18) / 2;
    addCard(slide, 0.5, wy, halfW, 0.5, { fill: "FAEDEB", border: C.danger });
    slide.addText("✕  WITHOUT  ·  " + D.without, {
      x: 0.65, y: wy, w: halfW - 0.3, h: 0.5,
      fontFace: PPTX_BRAND.font.body, fontSize: 10, bold: true, color: C.danger,
      valign: "middle", margin: 0,
    });
    addCard(slide, 0.68 + halfW, wy, halfW, 0.5, { fill: "E8F3EE", border: C.success });
    slide.addText("✓  WITH  ·  " + D.withConnected, {
      x: 0.83 + halfW, y: wy, w: halfW - 0.3, h: 0.5,
      fontFace: PPTX_BRAND.font.body, fontSize: 10, bold: true, color: C.success,
      valign: "middle", margin: 0,
    });
  },
};
