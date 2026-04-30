import type { SlideSpec } from "../../slideSpec";
import { PPTX_BRAND, addCard, addTitleBlock } from "@/lib/pptxBrand";
import { SEVEN_SOURCES_SLIDE as S } from "./_copy";

const C = PPTX_BRAND.color;
const W = PPTX_BRAND.size.w;

/** Slide 3 — Seven Sources / vendor sprawl. */
export const sevenSourcesSpec: SlideSpec = {
  label: "Seven Sources",
  build: (slide) => {
    addTitleBlock(slide, {
      eyebrow: S.eyebrow,
      title: S.title,
      subtitle: S.sub,
    });

    // 7 vendor tiles in a row (max 7 cols)
    const x0 = 0.5;
    const w = W - 1;
    const top = 3.4;
    const gap = 0.18;
    const n = S.vendors.length;
    const cw = (w - gap * (n - 1)) / n;
    const ch = 2.0;

    S.vendors.forEach((v, i) => {
      const x = x0 + i * (cw + gap);
      addCard(slide, x, top, cw, ch, { fill: C.surface });
      // Red conflict dot
      slide.addShape("ellipse", {
        x: x + cw - 0.22, y: top + 0.1, w: 0.14, h: 0.14,
        fill: { color: C.danger }, line: { type: "none" },
      });
      // Vendor name
      slide.addText(v.name, {
        x: x + 0.05, y: top + 0.45, w: cw - 0.1, h: 0.4,
        fontFace: PPTX_BRAND.font.display, fontSize: 13, bold: true, color: C.ink,
        align: "center", margin: 0,
      });
      slide.addText(v.role, {
        x: x + 0.05, y: top + 0.85, w: cw - 0.1, h: 0.3,
        fontFace: PPTX_BRAND.font.body, fontSize: 9, color: C.muted,
        align: "center", margin: 0,
      });
      // Conflicting signal italic
      slide.addText(v.signal, {
        x: x + 0.08, y: top + 1.25, w: cw - 0.16, h: ch - 1.35,
        fontFace: PPTX_BRAND.font.body, fontSize: 9, italic: true, color: C.danger,
        align: "center", valign: "top", margin: 0,
      });
    });

    // Stats band (red-tinted pill)
    const by = top + ch + 0.35;
    const bandW = 7;
    const bx = (W - bandW) / 2;
    slide.addShape("roundRect", {
      x: bx, y: by, w: bandW, h: 0.95,
      fill: { color: "FAEDEB" }, line: { color: C.danger, width: 0.75 },
      rectRadius: 0.18,
    });
    const colW = bandW / S.stats.length;
    S.stats.forEach((s, i) => {
      const sx = bx + i * colW;
      const isMid = i === 1;
      const color = i === 0 ? C.danger : isMid ? C.muted : C.warning;
      slide.addText(s.value, {
        x: sx, y: by + 0.1, w: colW, h: 0.5,
        fontFace: PPTX_BRAND.font.display, fontSize: 26, bold: true, color,
        align: "center", valign: "middle", margin: 0,
      });
      slide.addText(s.label, {
        x: sx, y: by + 0.6, w: colW, h: 0.32,
        fontFace: PPTX_BRAND.font.body, fontSize: 10, color: C.muted,
        align: "center", valign: "middle", margin: 0,
      });
      // Divider
      if (i > 0) {
        slide.addShape("rect", {
          x: sx, y: by + 0.2, w: 0.01, h: 0.55,
          fill: { color: C.hairline }, line: { type: "none" },
        });
      }
    });

    // Caption
    slide.addText(S.caption, {
      x: 0.5, y: by + 1.05, w: W - 1, h: 0.32,
      fontFace: PPTX_BRAND.font.body, fontSize: 11, italic: true, color: C.muted,
      align: "center", margin: 0,
    });
  },
};
