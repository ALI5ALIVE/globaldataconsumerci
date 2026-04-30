import type { SlideSpec } from "../../slideSpec";
import { PPTX_BRAND, addCard, addGlyphTile } from "@/lib/pptxBrand";
import { PROOF_SLIDE as P } from "./_copy";

const C = PPTX_BRAND.color;
const W = PPTX_BRAND.size.w;

/** Slide 9 — Proof. Trusted-by badge, headline, 3 pillars, logos, testimonial. */
export const proofSpec: SlideSpec = {
  label: "The Proof",
  gdLayout: "ProblemStatement",
  build: (slide) => {
    // Eyebrow
    slide.addText("\u2BC4  " + P.eyebrow.toUpperCase(), {
      x: 0.5, y: 0.6, w: W - 1, h: 0.3,
      fontFace: PPTX_BRAND.font.body, fontSize: 11, bold: true, color: C.primary,
      align: "center", charSpacing: 6, margin: 0,
    });
    // Headline (split color)
    slide.addText(
      [
        { text: P.titleA + " ", options: { color: C.primary } },
        { text: P.titleB, options: { color: C.ink } },
      ],
      {
        x: 0.5, y: 1.0, w: W - 1, h: 0.7,
        fontFace: PPTX_BRAND.font.display, fontSize: 32, bold: true,
        align: "center", valign: "middle", margin: 0,
      },
    );
    slide.addText(P.sub, {
      x: 0.5, y: 1.7, w: W - 1, h: 0.4,
      fontFace: PPTX_BRAND.font.body, fontSize: 14, color: C.muted,
      align: "center", margin: 0,
    });

    // 3 pillars
    const pTop = 2.3;
    const pH = 1.5;
    const pGap = 0.3;
    const pAreaW = 8.5;
    const pX0 = (W - pAreaW) / 2;
    const pW = (pAreaW - pGap * (P.pillars.length - 1)) / P.pillars.length;
    P.pillars.forEach((pl, i) => {
      const x = pX0 + i * (pW + pGap);
      addCard(slide, x, pTop, pW, pH, { fill: "EAF0FF", border: C.primary });
      addGlyphTile(slide, x + pW / 2 - 0.18, pTop + 0.12, 0.36, { glyph: pl.glyph, color: C.primary, fill: C.primary });
      slide.addText(pl.metric, {
        x, y: pTop + 0.5, w: pW, h: 0.4,
        fontFace: PPTX_BRAND.font.display, fontSize: 22, bold: true, color: C.primary,
        align: "center", valign: "middle", margin: 0,
      });
      slide.addText(pl.label, {
        x: x + 0.1, y: pTop + 0.9, w: pW - 0.2, h: 0.28,
        fontFace: PPTX_BRAND.font.body, fontSize: 9, color: C.muted,
        align: "center", margin: 0,
      });
      slide.addText(`\u201C${pl.tagline}\u201D`, {
        x, y: pTop + 1.18, w: pW, h: 0.28,
        fontFace: PPTX_BRAND.font.body, fontSize: 9, italic: true, bold: true, color: C.primary,
        align: "center", margin: 0,
      });
    });

    // Logo grid
    const lTop = 4.0;
    const lH = 0.6;
    const lGap = 0.15;
    const lAreaW = W - 2;
    const cols = 4;
    const lW = (lAreaW - lGap * (cols - 1)) / cols;
    P.logos.forEach((name, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const x = 1 + col * (lW + lGap);
      const y = lTop + row * (lH + lGap);
      addCard(slide, x, y, lW, lH, { fill: C.surface });
      slide.addText(name, {
        x, y, w: lW, h: lH,
        fontFace: PPTX_BRAND.font.display, fontSize: 11, bold: true, color: C.muted,
        align: "center", valign: "middle", charSpacing: 2, margin: 0,
      });
    });

    // Testimonial
    const ty = lTop + 2 * (lH + lGap) + 0.1;
    addCard(slide, 1, ty, W - 2, 1.4, { fill: "EAF0FF", border: C.primary });
    slide.addText("\u201C", {
      x: 1.1, y: ty + 0.05, w: 0.4, h: 0.5,
      fontFace: PPTX_BRAND.font.display, fontSize: 32, bold: true, color: C.primary,
      margin: 0,
    });
    slide.addText(P.quote, {
      x: 1.55, y: ty + 0.15, w: W - 3.1, h: 0.85,
      fontFace: PPTX_BRAND.font.display, fontSize: 12, italic: true, color: C.ink,
      valign: "top", margin: 0,
    });
    slide.addText(P.attribution, {
      x: 1.55, y: ty + 1.0, w: W - 3.1, h: 0.3,
      fontFace: PPTX_BRAND.font.body, fontSize: 10, bold: true, color: C.primary,
      charSpacing: 2, margin: 0,
    });
  },
};
