import type { SlideSpec } from "../../slideSpec";
import { PPTX_BRAND, addCard, addSegmentedBar, addTitleBlock } from "@/lib/pptxBrand";
import { MATURITY_SLIDE as M } from "./_copy";

const C = PPTX_BRAND.color;
const W = PPTX_BRAND.size.w;

const STAGE_COLORS: Record<string, string> = {
  stage1: C.stage1,
  primary: C.primary,
  stage3: C.success,
  stage5: C.stage5,
};

/** Slide 8 — Maturity Journey. 4 stages, ascending dotted curve, summary cards w/ time-allocation bars. */
export const maturityJourneySpec: SlideSpec = {
  label: "Maturity Journey",
  gdLayout: "ClearSpace",
  build: (slide) => {
    addTitleBlock(slide, {
      eyebrow: M.eyebrow,
      title: M.title,
      subtitle: M.sub,
    });

    // Curve area
    const curveTop = 3.0;
    const curveH = 1.4;
    const curveLeft = 1.0;
    const curveRight = W - 1.0;
    const span = curveRight - curveLeft;

    // Axes
    slide.addShape("rect", {
      x: curveLeft, y: curveTop + curveH, w: span, h: 0.01,
      fill: { color: C.hairline }, line: { type: "none" },
    });

    const stages = M.stages;
    const stepX = span / (stages.length - 1);
    const points = stages.map((_, i) => ({
      x: curveLeft + i * stepX,
      y: curveTop + curveH - (i / (stages.length - 1)) * (curveH - 0.2),
    }));

    // Dotted ascending line
    for (let i = 0; i < points.length - 1; i++) {
      const a = points[i];
      const b = points[i + 1];
      const dots = 18;
      for (let d = 0; d <= dots; d++) {
        const t = d / dots;
        const px = a.x + (b.x - a.x) * t;
        const py = a.y + (b.y - a.y) * t;
        slide.addShape("ellipse", {
          x: px - 0.025, y: py - 0.025, w: 0.05, h: 0.05,
          fill: { color: C.subtle }, line: { type: "none" },
        });
      }
    }

    // Stage markers
    stages.forEach((st, i) => {
      const p = points[i];
      const color = STAGE_COLORS[st.accentKey];
      const r = 0.2;
      slide.addShape("ellipse", {
        x: p.x - r, y: p.y - r, w: r * 2, h: r * 2,
        fill: { color }, line: { color: "FFFFFF", width: 2 },
      });
      slide.addText(String(i + 1), {
        x: p.x - r, y: p.y - r, w: r * 2, h: r * 2,
        fontFace: PPTX_BRAND.font.display, fontSize: 11, bold: true,
        color: "FFFFFF", align: "center", valign: "middle", margin: 0,
      });
      slide.addText(st.label, {
        x: p.x - 1.2, y: p.y + r + 0.06, w: 2.4, h: 0.28,
        fontFace: PPTX_BRAND.font.display, fontSize: 11, bold: true, color: C.ink,
        align: "center", margin: 0,
      });
      // Gateway pill
      if (st.isGateway) {
        slide.addShape("roundRect", {
          x: p.x - 0.5, y: p.y - r - 0.4, w: 1.0, h: 0.26,
          fill: { color: C.primary }, line: { type: "none" },
          rectRadius: 0.13,
        });
        slide.addText("GATEWAY", {
          x: p.x - 0.5, y: p.y - r - 0.4, w: 1.0, h: 0.26,
          fontFace: PPTX_BRAND.font.body, fontSize: 8, bold: true, color: "FFFFFF",
          align: "center", valign: "middle", charSpacing: 3, margin: 0,
        });
      }
    });

    // 4 summary cards
    const cardTop = 4.95;
    const cardH = 2.0;
    const x0 = 0.5;
    const w = W - 1;
    const gap = 0.18;
    const cw = (w - gap * (stages.length - 1)) / stages.length;
    stages.forEach((st, i) => {
      const x = x0 + i * (cw + gap);
      const color = STAGE_COLORS[st.accentKey];
      addCard(slide, x, cardTop, cw, cardH, { fill: C.surface });
      slide.addShape("rect", {
        x, y: cardTop, w: cw, h: 0.06,
        fill: { color }, line: { type: "none" },
      });
      slide.addText(st.label, {
        x: x + 0.15, y: cardTop + 0.12, w: cw - 1.1, h: 0.3,
        fontFace: PPTX_BRAND.font.display, fontSize: 12, bold: true, color: C.ink,
        valign: "middle", margin: 0,
      });
      // Decision speed pill
      slide.addShape("roundRect", {
        x: x + cw - 0.95, y: cardTop + 0.15, w: 0.85, h: 0.24,
        fill: { color: C.bgAlt }, line: { type: "none" },
        rectRadius: 0.12,
      });
      slide.addText(st.decisionSpeed, {
        x: x + cw - 0.95, y: cardTop + 0.15, w: 0.85, h: 0.24,
        fontFace: PPTX_BRAND.font.body, fontSize: 8, bold: true, color: C.muted,
        align: "center", valign: "middle", margin: 0,
      });
      // Tagline
      slide.addText(st.tagline, {
        x: x + 0.15, y: cardTop + 0.45, w: cw - 0.3, h: 0.32,
        fontFace: PPTX_BRAND.font.body, fontSize: 9, italic: true, color,
        valign: "top", margin: 0,
      });
      // Time-allocation bar
      addSegmentedBar(slide, x + 0.15, cardTop + 0.82, cw - 0.3, 0.18, [
        { pct: st.reconciliation, color: C.danger, label: `${st.reconciliation}%` },
        { pct: st.analysis, color: C.warning, label: `${st.analysis}%` },
        { pct: st.strategy, color: C.success, label: `${st.strategy}%` },
      ]);
      slide.addText("Reconcile · Analyse · Strategy", {
        x: x + 0.15, y: cardTop + 1.02, w: cw - 0.3, h: 0.2,
        fontFace: PPTX_BRAND.font.body, fontSize: 7, color: C.subtle,
        margin: 0,
      });
      // Bullets
      slide.addText(
        st.bullets.map((t) => ({ text: t, options: { bullet: { code: "25A0" }, color: C.muted } })),
        {
          x: x + 0.15, y: cardTop + 1.22, w: cw - 0.3, h: cardH - 1.32,
          fontFace: PPTX_BRAND.font.body, fontSize: 8, color: C.muted,
          paraSpaceAfter: 2, valign: "top", margin: 0,
        },
      );
    });
  },
};
