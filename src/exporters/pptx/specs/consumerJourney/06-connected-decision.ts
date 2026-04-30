import type { SlideSpec } from "../../slideSpec";
import { PPTX_BRAND, addTitleBlock, addCard, addStatTile } from "@/lib/pptxBrand";

const C = PPTX_BRAND.color;
const W = PPTX_BRAND.size.w;

/** Slide 6 — Connected Decision (CJSlideConnectedDecision). Boardroom GO verdict + persona evidence. */
export const connectedDecisionSpec: SlideSpec = {
  label: "Connected Decision",
  build: (slide) => {
    addTitleBlock(slide, {
      eyebrow: "The Connected Decision",
      title: "Plant-based snacking in Southeast Asia — GO.",
      subtitle: "One platform. One meeting. Evidence from every angle.",
    });

    // GO verdict band
    const verdictY = 2.95;
    addCard(slide, 0.5, verdictY, W - 1, 0.7, { fill: C.primary, border: C.primary });
    slide.addText("VERDICT  ·  GO  ·  CONVERGENCE 92 / 100  ·  THREAT LEVEL HIGH", {
      x: 0.5, y: verdictY, w: W - 1, h: 0.7,
      fontFace: PPTX_BRAND.font.display, fontSize: 16, bold: true, color: "FFFFFF",
      align: "center", valign: "middle", charSpacing: 4, margin: 0,
    });

    const personas = [
      { name: "Sarah · Strategic", stat: "92", label: "Convergence score", accent: C.primary,
        body: "2 macro themes · 4 micro signals accelerating in SEA." },
      { name: "James · Market", stat: "$820M", label: "SEA opportunity", accent: C.accent,
        body: "14% growth · 42% of snacking occasions unaddressed." },
      { name: "Priya · Competitive", stat: "4", label: "Patents filed (14d)", accent: C.warning,
        body: "Rival hiring regional supply chain lead. Threat: high." },
      { name: "Marcus · Innovation", stat: "3 / 5", label: "Concepts pass evidence", accent: C.stage4,
        body: "Crispy Bites 87 · Protein Bar 72 · Gut Shot fails." },
      { name: "Elena · Sales", stat: "2 / 3", label: "Retailers ready", accent: C.success,
        body: "12% shelf space available. Buyer sentiment positive." },
    ];

    const top = 3.85;
    const x0 = 0.5;
    const w = W - 1;
    const gap = 0.18;
    const cw = (w - gap * (personas.length - 1)) / personas.length;
    const ch = 2.5;

    personas.forEach((p, i) => {
      const x = x0 + i * (cw + gap);
      addCard(slide, x, top, cw, ch, { fill: C.surface });
      // Top accent
      slide.addShape("rect", {
        x, y: top, w: cw, h: 0.06,
        fill: { color: p.accent }, line: { type: "none" },
      });
      slide.addText(p.name, {
        x: x + 0.15, y: top + 0.18, w: cw - 0.3, h: 0.3,
        fontFace: PPTX_BRAND.font.display, fontSize: 11, bold: true, color: C.ink,
        margin: 0,
      });
      slide.addText(p.stat, {
        x: x + 0.15, y: top + 0.55, w: cw - 0.3, h: 0.7,
        fontFace: PPTX_BRAND.font.display, fontSize: 28, bold: true, color: p.accent,
        align: "center", valign: "middle", margin: 0,
      });
      slide.addText(p.label, {
        x: x + 0.15, y: top + 1.25, w: cw - 0.3, h: 0.3,
        fontFace: PPTX_BRAND.font.body, fontSize: 9, color: C.muted,
        align: "center", margin: 0,
      });
      slide.addText(p.body, {
        x: x + 0.18, y: top + 1.6, w: cw - 0.36, h: ch - 1.7,
        fontFace: PPTX_BRAND.font.body, fontSize: 10, color: C.inkSoft,
        valign: "top", margin: 0,
      });
    });
  },
};
