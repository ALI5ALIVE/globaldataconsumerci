import type { SlideSpec } from "../../slideSpec";
import { PPTX_BRAND, addTitleBlock, addCard, addStatTile } from "@/lib/pptxBrand";

const C = PPTX_BRAND.color;
const W = PPTX_BRAND.size.w;

/** Slide 3 — Seven sources / vendor sprawl (CPSlide2SevenSources). */
export const sevenSourcesSpec: SlideSpec = {
  label: "Seven Sources",
  build: (slide) => {
    addTitleBlock(slide, {
      eyebrow: "Seven Sources, Seven Signals",
      title: "Every team pulls from a different source.",
      subtitle: "Your people spend 60% of their time reconciling — not thinking.",
    });

    const vendors = [
      "Mintel", "Euromonitor", "Nielsen IQ", "Brandwatch",
      "Gartner", "Statista", "Internal BI",
    ];
    const x0 = 0.5;
    const w = W - 1;
    const top = 3.0;
    const cardH = 0.85;
    const gap = 0.18;
    const perRow = 4;
    const cw = (w - gap * (perRow - 1)) / perRow;

    vendors.forEach((v, i) => {
      const row = Math.floor(i / perRow);
      const col = i % perRow;
      const x = x0 + col * (cw + gap);
      const y = top + row * (cardH + gap);
      addCard(slide, x, y, cw, cardH, { fill: C.surface });
      // Left accent bar
      slide.addShape("rect", {
        x, y: y + 0.12, w: 0.05, h: cardH - 0.24,
        fill: { color: C.primary }, line: { type: "none" },
      });
      slide.addText(v, {
        x: x + 0.2, y, w: cw - 0.3, h: cardH,
        fontFace: PPTX_BRAND.font.display, fontSize: 16, bold: true, color: C.ink,
        valign: "middle", margin: 0,
      });
      slide.addText("Vendor signal", {
        x: x + 0.2, y: y + cardH - 0.32, w: cw - 0.3, h: 0.22,
        fontFace: PPTX_BRAND.font.body, fontSize: 9, color: C.muted, margin: 0,
      });
    });

    // Stats strip below
    const sy = top + 2 * (cardH + gap) + 0.25;
    const stats = [
      { value: "60%", label: "Time reconciling data", accent: C.danger },
      { value: "10%", label: "Time on actual strategy", accent: C.warning },
      { value: "12 wks", label: "To make a decision", accent: C.primary },
    ];
    const sgap = 0.3;
    const sw = (w - sgap * (stats.length - 1)) / stats.length;
    stats.forEach((s, i) => {
      addStatTile(slide, x0 + i * (sw + sgap), sy, sw, 1.2, s.value, s.label, s.accent);
    });
  },
};
