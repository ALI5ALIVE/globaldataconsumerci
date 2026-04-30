import type { SlideSpec } from "../../slideSpec";
import { PPTX_BRAND, addTitleBlock, addCard, addIconBadge } from "@/lib/pptxBrand";

const C = PPTX_BRAND.color;
const W = PPTX_BRAND.size.w;
const H = PPTX_BRAND.size.h;

/** Slide 5 — One Lens / Ava Hub (CPSlide4ImagineOneLens / CJOneLensHub).
 *  Native composition: central Ava badge + 5 persona/solution cards radiating around it.
 */
export const oneLensSpec: SlideSpec = {
  label: "One Lens (Ava Hub)",
  build: (slide) => {
    addTitleBlock(slide, {
      eyebrow: "Connected Consumer Intelligence",
      title: "One lens. Five solutions. One AI layer.",
      subtitle: "Ava connects Strategic, Market, Competitive, Innovation, and Sales Intelligence — for the first time.",
    });

    const cx = W / 2;
    const cy = 4.7;

    // Central Ava badge
    const hubR = 1.05;
    slide.addShape("ellipse", {
      x: cx - hubR, y: cy - hubR, w: hubR * 2, h: hubR * 2,
      fill: { color: C.primary }, line: { color: C.accent, width: 3 },
    });
    slide.addText("AVA", {
      x: cx - hubR, y: cy - 0.55, w: hubR * 2, h: 0.5,
      fontFace: PPTX_BRAND.font.display, fontSize: 28, bold: true, color: "FFFFFF",
      align: "center", valign: "middle", charSpacing: 4, margin: 0,
    });
    slide.addText("AI Intelligence Layer", {
      x: cx - hubR, y: cy - 0.05, w: hubR * 2, h: 0.4,
      fontFace: PPTX_BRAND.font.body, fontSize: 10, color: "DBEAFE",
      align: "center", valign: "middle", margin: 0,
    });

    const solutions = [
      { title: "Strategic", persona: "Sarah · Head of Strategy", desc: "Predictive foresight on macro & micro signals.", color: C.primary, angle: -110 },
      { title: "Market", persona: "James · Insights Director", desc: "One definitive sizing across every market.", color: C.accent, angle: -55 },
      { title: "Competitive", persona: "Priya · Competitive Lead", desc: "Real-time competitive radar.", color: C.warning, angle: 0 },
      { title: "Innovation", persona: "Marcus · Innovation Lead", desc: "Test concepts against real evidence.", color: C.stage4, angle: 55 },
      { title: "Sales", persona: "Elena · Commercial Lead", desc: "Walk into every buyer meeting armed.", color: C.success, angle: 110 },
    ];

    const cardW = 2.4;
    const cardH = 1.35;
    const orbit = 3.5;
    solutions.forEach((s) => {
      const rad = (s.angle * Math.PI) / 180;
      const x = cx + Math.sin(rad) * orbit - cardW / 2;
      const y = cy - Math.cos(rad) * (orbit * 0.55) - cardH / 2;
      // Clamp within safe area
      const safeY = Math.max(2.7, Math.min(H - 1.2 - cardH, y));
      const safeX = Math.max(0.4, Math.min(W - 0.4 - cardW, x));

      addCard(slide, safeX, safeY, cardW, cardH, { fill: C.surface, border: s.color });
      addIconBadge(slide, safeX + 0.15, safeY + 0.15, 0.36, s.color, s.title[0]);
      slide.addText(s.title + " Intelligence", {
        x: safeX + 0.6, y: safeY + 0.12, w: cardW - 0.7, h: 0.32,
        fontFace: PPTX_BRAND.font.display, fontSize: 12, bold: true, color: C.ink,
        valign: "middle", margin: 0,
      });
      slide.addText(s.persona, {
        x: safeX + 0.6, y: safeY + 0.42, w: cardW - 0.7, h: 0.24,
        fontFace: PPTX_BRAND.font.body, fontSize: 9, color: s.color, bold: true, margin: 0,
      });
      slide.addText(s.desc, {
        x: safeX + 0.18, y: safeY + 0.7, w: cardW - 0.3, h: cardH - 0.8,
        fontFace: PPTX_BRAND.font.body, fontSize: 10, color: C.muted,
        valign: "top", margin: 0,
      });
    });
  },
};
