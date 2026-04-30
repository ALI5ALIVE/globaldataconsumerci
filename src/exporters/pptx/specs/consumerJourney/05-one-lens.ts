import type { SlideSpec } from "../../slideSpec";
import { PPTX_BRAND, addCard, addGlyphTile, addTitleBlock } from "@/lib/pptxBrand";
import { ONE_LENS_SLIDE as O } from "./_copy";

const C = PPTX_BRAND.color;
const W = PPTX_BRAND.size.w;

/** Slide 5 — One Lens / Ava Hub. Center hub + 5 persona cards. */
export const oneLensSpec: SlideSpec = {
  label: "One Lens (Ava Hub)",
  build: (slide) => {
    addTitleBlock(slide, {
      eyebrow: O.eyebrow,
      title: O.title,
      subtitle: O.sub,
    });

    const cx = W / 2;
    const cy = 4.85;

    const dv = C.dv;
    const palette = [dv[0], dv[2], dv[5], dv[3], dv[8]];

    // Position 5 cards roughly equally around the hub
    const angles = [-110, -55, 0, 55, 110];
    const orbitX = 4.0;
    const orbitY = 1.85;
    const cardW = 2.3;
    const cardH = 1.25;

    // Connector lines from hub center to each card center (thin rotated rects)
    angles.forEach((a) => {
      const rad = (a * Math.PI) / 180;
      const tx = cx + Math.sin(rad) * orbitX;
      const ty = cy - Math.cos(rad) * orbitY;
      const segs = 14;
      for (let s = 1; s < segs; s++) {
        const t = s / segs;
        const px = cx + (tx - cx) * t;
        const py = cy + (ty - cy) * t;
        slide.addShape("ellipse", {
          x: px - 0.03, y: py - 0.03, w: 0.06, h: 0.06,
          fill: { color: C.hairline }, line: { type: "none" },
        });
      }
    });

    // Central hub
    const hubR = 0.85;
    slide.addShape("ellipse", {
      x: cx - hubR, y: cy - hubR, w: hubR * 2, h: hubR * 2,
      fill: { color: C.navy }, line: { color: C.accent, width: 3 },
    });
    slide.addText(O.hubLabel, {
      x: cx - hubR, y: cy - 0.45, w: hubR * 2, h: 0.5,
      fontFace: PPTX_BRAND.font.display, fontSize: 24, bold: true,
      color: C.inkInverse, align: "center", valign: "middle",
      charSpacing: 4, margin: 0,
    });
    slide.addText(O.hubSub, {
      x: cx - hubR, y: cy + 0.05, w: hubR * 2, h: 0.4,
      fontFace: PPTX_BRAND.font.body, fontSize: 9, color: C.hyperBlue2,
      align: "center", valign: "middle", margin: 0,
    });

    // Persona cards
    O.spokes.forEach((sp, i) => {
      const a = angles[i];
      const rad = (a * Math.PI) / 180;
      let x = cx + Math.sin(rad) * orbitX - cardW / 2;
      let y = cy - Math.cos(rad) * orbitY - cardH / 2;
      x = Math.max(0.4, Math.min(W - 0.4 - cardW, x));
      y = Math.max(2.85, Math.min(6.5 - cardH, y));
      const accent = palette[i];
      addCard(slide, x, y, cardW, cardH, { fill: C.surface, border: accent });
      addGlyphTile(slide, x + 0.15, y + 0.15, 0.42, { glyph: sp.glyph, color: accent, fill: accent });
      slide.addText(sp.solution, {
        x: x + 0.7, y: y + 0.12, w: cardW - 0.8, h: 0.32,
        fontFace: PPTX_BRAND.font.display, fontSize: 11, bold: true, color: C.ink,
        valign: "middle", margin: 0,
      });
      slide.addText(`${sp.name} · ${sp.role}`, {
        x: x + 0.7, y: y + 0.42, w: cardW - 0.8, h: 0.28,
        fontFace: PPTX_BRAND.font.body, fontSize: 9, bold: true, color: accent,
        margin: 0,
      });
      slide.addText("Connected via Ava AI", {
        x: x + 0.18, y: y + 0.78, w: cardW - 0.3, h: cardH - 0.85,
        fontFace: PPTX_BRAND.font.body, fontSize: 9, italic: true, color: C.muted,
        valign: "top", margin: 0,
      });
    });

    // Footer caption
    slide.addText(O.footer, {
      x: 0.5, y: 6.85, w: W - 1, h: 0.3,
      fontFace: PPTX_BRAND.font.body, fontSize: 11, italic: true, color: C.primary,
      align: "center", margin: 0,
    });
  },
};
