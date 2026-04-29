import type PptxGenJS from "pptxgenjs";

/**
 * Brand tokens & helpers shared by every native PPTX builder.
 * Hex values are PowerPoint-friendly (no leading #).
 */
export const brand = {
  // Core palette — Comply365 / GlobalData
  primary: "0066FF",
  primaryDark: "0033A0",
  accent: "1E2A78",
  bgNavy: "0F1320",
  bgCard: "1B2236",
  bgCardSoft: "232B42",
  text: "F5F1E8",
  textMuted: "A8AEBF",
  textSubtle: "6E7388",
  border: "2E3552",
  white: "FFFFFF",

  // Status / accent
  destructive: "E0506F",
  amber: "F59E0B",
  emerald: "34D399",
  sky: "38BDF8",
  violet: "A78BFA",
  orange: "F97316",

  // Maturity stages
  stageFragmented: "E0506F",
  stageManaged: "38BDF8",
  stageConnected: "14B8A6",
  stageOptimised: "A78BFA",
  stagePredictive: "F5C547",
} as const;

export const fonts = {
  heading: "Calibri",
  body: "Calibri",
} as const;

export const SLIDE_W = 13.333;
export const SLIDE_H = 7.5;
export const PAGE_PAD = 0.6;

export function addBackground(slide: PptxGenJS.Slide, color: string = brand.bgNavy) {
  slide.background = { color };
}

export function addAccentBar(slide: PptxGenJS.Slide) {
  slide.addShape("rect", {
    x: 0,
    y: 0,
    w: SLIDE_W,
    h: 0.06,
    fill: { color: brand.primary },
    line: { type: "none" },
  });
}

export function addTitle(
  slide: PptxGenJS.Slide,
  text: string,
  opts?: { color?: string; subtitle?: string },
) {
  slide.addText(text, {
    x: PAGE_PAD,
    y: 0.35,
    w: SLIDE_W - PAGE_PAD * 2,
    h: 0.7,
    fontFace: fonts.heading,
    fontSize: 28,
    bold: true,
    color: opts?.color ?? brand.text,
  });
  if (opts?.subtitle) {
    slide.addText(opts.subtitle, {
      x: PAGE_PAD,
      y: 1.0,
      w: SLIDE_W - PAGE_PAD * 2,
      h: 0.4,
      fontFace: fonts.body,
      fontSize: 13,
      color: brand.textMuted,
    });
  }
}

export function addEyebrow(slide: PptxGenJS.Slide, text: string, y = 0.4) {
  slide.addText(text, {
    x: PAGE_PAD,
    y,
    w: SLIDE_W - PAGE_PAD * 2,
    h: 0.3,
    fontFace: fonts.body,
    fontSize: 10,
    bold: true,
    color: brand.primary,
    charSpacing: 4,
  });
}

export function addFooter(slide: PptxGenJS.Slide, current: number, total: number) {
  slide.addText("© 2026 GlobalData · Connected Consumer Intelligence", {
    x: PAGE_PAD,
    y: SLIDE_H - 0.4,
    w: 6,
    h: 0.3,
    fontFace: fonts.body,
    fontSize: 9,
    color: brand.textSubtle,
  });
  slide.addText(`${String(current).padStart(2, "0")} / ${String(total).padStart(2, "0")}`, {
    x: SLIDE_W - PAGE_PAD - 1.5,
    y: SLIDE_H - 0.4,
    w: 1.5,
    h: 0.3,
    fontFace: fonts.body,
    fontSize: 9,
    color: brand.textSubtle,
    align: "right",
  });
}

/** Rounded card background. */
export function addCard(
  slide: PptxGenJS.Slide,
  x: number,
  y: number,
  w: number,
  h: number,
  opts?: { fill?: string; border?: string; transparency?: number; radius?: number },
) {
  slide.addShape("roundRect", {
    x,
    y,
    w,
    h,
    fill: { color: opts?.fill ?? brand.bgCard, transparency: opts?.transparency ?? 0 },
    line: { color: opts?.border ?? brand.border, width: 0.75 },
    rectRadius: opts?.radius ?? 0.12,
  });
}
