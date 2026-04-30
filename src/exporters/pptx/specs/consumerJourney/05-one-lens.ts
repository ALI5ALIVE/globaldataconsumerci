import type { SlideSpec } from "../../slideSpec";
import {
  PPTX_BRAND,
  addCard,
  addDashedRing,
  addPersonSilhouette,
} from "@/lib/pptxBrand";
import { ONE_LENS_SLIDE as O } from "./_copy";

const C = PPTX_BRAND.color;
const W = PPTX_BRAND.size.w;
const H = PPTX_BRAND.size.h;

/**
 * Slide 5 — One Lens / Ava Hub.
 *
 * Mirrors `CJOneLensHub.tsx`: a consumer hub at the center, wrapped by a
 * dashed AVA AI ring, with 6 solution cards on an inner orbit and 6 persona
 * discs on an outer orbit. Each persona is connected to its solution card by
 * a thin colored spoke.
 */
export const oneLensSpec: SlideSpec = {
  label: "One Lens (Ava Hub)",
  gdLayout: "ClearSpace",
  build: (slide) => {
    // Compact title block (no addTitleBlock — we need maximum vertical space)
    slide.addText(O.eyebrow.toUpperCase(), {
      x: 0.5, y: 0.55, w: W - 1, h: 0.3,
      fontFace: PPTX_BRAND.font.body, fontSize: 11, bold: true, color: C.primary,
      align: "center", charSpacing: 4, margin: 0,
    });
    slide.addText(O.title, {
      x: 0.5, y: 0.9, w: W - 1, h: 0.55,
      fontFace: PPTX_BRAND.font.display, fontSize: 24, bold: true, color: C.ink,
      align: "center", valign: "middle", margin: 0,
    });
    slide.addText(O.sub, {
      x: 1.0, y: 1.45, w: W - 2, h: 0.38,
      fontFace: PPTX_BRAND.font.body, fontSize: 12, color: C.muted,
      align: "center", margin: 0,
    });

    // Hub geometry
    const cx = W / 2;
    const cy = 4.55;
    const stageR = 1.85;     // inner solution-card orbit
    const personaR = 3.05;   // outer persona-disc orbit
    const avaR = 0.95;       // dashed AVA ring radius

    const dv = C.dv;
    const palette = [dv[0], dv[2], dv[5], dv[3], dv[8], dv[4]]; // 6 colors

    const n = O.spokes.length; // 6
    const angleFor = (i: number) => (i / n) * Math.PI * 2 - Math.PI / 2;

    // Card and disc dimensions
    const cardW = 2.05;
    const cardH = 0.95;
    const personaR2 = 0.32; // persona disc radius

    // Pre-compute positions
    const stagePos = O.spokes.map((_, i) => {
      const a = angleFor(i);
      return { x: cx + Math.cos(a) * stageR, y: cy + Math.sin(a) * stageR };
    });
    const personaPos = O.spokes.map((_, i) => {
      const a = angleFor(i);
      return { x: cx + Math.cos(a) * personaR, y: cy + Math.sin(a) * personaR };
    });

    // 1) Dotted journey arcs between adjacent solution cards (subtle)
    for (let i = 0; i < n; i++) {
      const a = stagePos[i];
      const b = stagePos[(i + 1) % n];
      const segs = 14;
      for (let s = 1; s < segs; s++) {
        const t = s / segs;
        const px = a.x + (b.x - a.x) * t;
        const py = a.y + (b.y - a.y) * t;
        slide.addShape("ellipse", {
          x: px - 0.03, y: py - 0.03, w: 0.05, h: 0.05,
          fill: { color: C.hairline }, line: { type: "none" },
        });
      }
    }

    // 2) AVA → solution card connector dots (radial inner spokes)
    O.spokes.forEach((_, i) => {
      const a = angleFor(i);
      const innerX = cx + Math.cos(a) * (avaR + 0.08);
      const innerY = cy + Math.sin(a) * (avaR + 0.08);
      const outerX = stagePos[i].x;
      const outerY = stagePos[i].y;
      const segs = 10;
      for (let s = 1; s < segs; s++) {
        const t = s / segs;
        const px = innerX + (outerX - innerX) * t;
        const py = innerY + (outerY - innerY) * t;
        slide.addShape("ellipse", {
          x: px - 0.025, y: py - 0.025, w: 0.05, h: 0.05,
          fill: { color: C.accent }, line: { type: "none" },
        });
      }
    });

    // 3) Solution-card → persona spokes (colored dots)
    O.spokes.forEach((sp, i) => {
      const accent = palette[i];
      const innerX = stagePos[i].x;
      const innerY = stagePos[i].y;
      const outerX = personaPos[i].x;
      const outerY = personaPos[i].y;
      const segs = 8;
      for (let s = 1; s < segs; s++) {
        const t = s / segs;
        const px = innerX + (outerX - innerX) * t;
        const py = innerY + (outerY - innerY) * t;
        slide.addShape("ellipse", {
          x: px - 0.025, y: py - 0.025, w: 0.05, h: 0.05,
          fill: { color: accent }, line: { type: "none" },
        });
      }
    });

    // 4) Center: filled navy disc + AVA dashed ring
    addDashedRing(slide, cx, cy, avaR, C.accent, 36, 0.07);
    slide.addText(O.avaLabel, {
      x: cx - 2.5, y: cy - avaR - 0.45, w: 5.0, h: 0.28,
      fontFace: PPTX_BRAND.font.body, fontSize: 9, bold: true, color: C.accent,
      align: "center", charSpacing: 3, margin: 0,
    });

    const hubR = 0.55;
    slide.addShape("ellipse", {
      x: cx - hubR, y: cy - hubR, w: hubR * 2, h: hubR * 2,
      fill: { color: C.navy }, line: { color: C.accent, width: 2 },
    });
    addPersonSilhouette(slide, cx, cy - 0.05, 0.5, "FFFFFF");
    slide.addText(O.hubLabel, {
      x: cx - hubR, y: cy + 0.15, w: hubR * 2, h: 0.22,
      fontFace: PPTX_BRAND.font.display, fontSize: 8, bold: true,
      color: C.inkInverse, align: "center", valign: "middle",
      charSpacing: 1, margin: 0,
    });
    slide.addText(O.hubSub, {
      x: cx - hubR, y: cy + 0.34, w: hubR * 2, h: 0.18,
      fontFace: PPTX_BRAND.font.body, fontSize: 6.5, color: C.hyperBlue2,
      align: "center", valign: "middle", margin: 0,
    });

    // 5) Solution cards (inner ring)
    O.spokes.forEach((sp, i) => {
      const accent = palette[i];
      const px = stagePos[i].x;
      const py = stagePos[i].y;
      let x = px - cardW / 2;
      let y = py - cardH / 2;
      // Clamp to slide
      x = Math.max(0.4, Math.min(W - 0.4 - cardW, x));
      y = Math.max(2.0, Math.min(H - 0.7 - cardH, y));
      addCard(slide, x, y, cardW, cardH, { fill: C.surface, border: accent });
      slide.addShape("rect", {
        x, y, w: cardW, h: 0.05,
        fill: { color: accent }, line: { type: "none" },
      });
      slide.addText(sp.solution, {
        x: x + 0.12, y: y + 0.1, w: cardW - 0.24, h: 0.32,
        fontFace: PPTX_BRAND.font.display, fontSize: 10, bold: true, color: accent,
        align: "center", valign: "middle", margin: 0,
      });
      slide.addText(sp.subline, {
        x: x + 0.12, y: y + 0.42, w: cardW - 0.24, h: 0.42,
        fontFace: PPTX_BRAND.font.body, fontSize: 8, italic: true, color: C.muted,
        align: "center", valign: "top", margin: 0,
      });
    });

    // 6) Persona avatars (outer ring)
    O.spokes.forEach((sp, i) => {
      const accent = palette[i];
      const a = angleFor(i);
      let dx = personaPos[i].x;
      let dy = personaPos[i].y;
      // Clamp
      dx = Math.max(0.45, Math.min(W - 0.45, dx));
      dy = Math.max(2.0, Math.min(H - 0.6, dy));
      // Disc
      slide.addShape("ellipse", {
        x: dx - personaR2, y: dy - personaR2 - 0.15,
        w: personaR2 * 2, h: personaR2 * 2,
        fill: { color: accent }, line: { color: "FFFFFF", width: 1.5 },
      });
      slide.addText(sp.glyph, {
        x: dx - personaR2, y: dy - personaR2 - 0.15,
        w: personaR2 * 2, h: personaR2 * 2,
        fontFace: PPTX_BRAND.font.display, fontSize: 12, bold: true, color: "FFFFFF",
        align: "center", valign: "middle", margin: 0,
      });
      // Name + role labels — anchor based on quadrant
      const labelW = 1.5;
      const labelX = dx - labelW / 2;
      const labelY = dy + personaR2 + 0.0;
      slide.addText(sp.name, {
        x: labelX, y: labelY, w: labelW, h: 0.22,
        fontFace: PPTX_BRAND.font.display, fontSize: 9, bold: true, color: C.ink,
        align: "center", margin: 0,
      });
      slide.addText(sp.role, {
        x: labelX, y: labelY + 0.2, w: labelW, h: 0.2,
        fontFace: PPTX_BRAND.font.body, fontSize: 7.5, color: C.muted,
        align: "center", margin: 0,
      });
    });

    // Footer caption
    slide.addText(O.footer, {
      x: 0.5, y: H - 0.85, w: W - 1, h: 0.3,
      fontFace: PPTX_BRAND.font.body, fontSize: 11, italic: true, color: C.primary,
      align: "center", margin: 0,
    });
  },
};
