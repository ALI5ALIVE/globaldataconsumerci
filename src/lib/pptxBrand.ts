import pptxgen from "pptxgenjs";

/**
 * Comply365 Connected Consumer Intelligence — PPTX brand toolkit.
 *
 * Ported from the stratagem-pyramid reference architecture and re-skinned to
 * the Consumer Journey deck palette (Comply365 blue + sky blue accents on
 * a light surface). Provides a small set of layout primitives so each slide
 * spec can compose a brand-consistent layout in a few lines.
 */

export const PPTX_BRAND = {
  size: { w: 13.333, h: 7.5 },
  color: {
    // Surfaces
    bg: "FFFFFF",
    bgAlt: "F8FAFC",
    surface: "FFFFFF",
    surfaceAlt: "F1F5F9",
    hairline: "E2E8F0",
    // Ink
    ink: "0A1628",
    inkSoft: "1E293B",
    muted: "64748B",
    subtle: "94A3B8",
    // Brand
    primary: "0066FF",
    primarySoft: "DBEAFE",
    accent: "38BDF8", // sky blue
    accentSoft: "E0F2FE",
    // Status
    danger: "EF4444",
    warning: "F59E0B",
    success: "10B981",
    // Maturity stages (Red, Sky, Teal, Purple, Gold)
    stage1: "EF4444",
    stage2: "38BDF8",
    stage3: "0EA5A4",
    stage4: "8B5CF6",
    stage5: "D4A017",
    // Inverse (for hero / dark slides)
    inkInverse: "FFFFFF",
    bgDark: "0A1628",
  },
  font: { display: "Calibri", body: "Calibri" },
} as const;

const C = PPTX_BRAND.color;

/* ── Backgrounds ─────────────────────────────────────────────── */

export function paintBackground(
  slide: pptxgen.Slide,
  variant: "light" | "dark" = "light",
) {
  slide.background = { color: variant === "dark" ? C.bgDark : C.bg };
  // Top brand hairline
  slide.addShape("rect", {
    x: 0, y: 0, w: PPTX_BRAND.size.w, h: 0.06,
    fill: { color: C.primary }, line: { type: "none" },
  });
}

/* ── Chrome (logo + footer + slide counter) ─────────────────── */

export async function loadImageAsBase64(url: string): Promise<string> {
  const res = await fetch(url);
  const blob = await res.blob();
  return await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

export function addBrandLogo(
  slide: pptxgen.Slide,
  logoBase64: string,
  variant: "light" | "dark" = "light",
) {
  if (!logoBase64) return;
  // Comply365 wordmark aspect ratio ~9.65:1
  const h = 0.32;
  const w = h * 9.65; // ≈ 3.09"
  slide.addImage({
    data: logoBase64,
    x: PPTX_BRAND.size.w - w - 0.4, y: 0.25, w, h,
  });
}

export function addBrandMaster(
  slide: pptxgen.Slide,
  ctx: {
    logo: string;
    index: number;
    total: number;
    deckLabel: string;
    variant?: "light" | "dark";
  },
) {
  const variant = ctx.variant ?? "light";
  paintBackground(slide, variant);
  if (ctx.logo) addBrandLogo(slide, ctx.logo, variant);

  const ink = variant === "dark" ? C.subtle : C.muted;

  // Footer hairline
  slide.addShape("rect", {
    x: 0, y: PPTX_BRAND.size.h - 0.42, w: PPTX_BRAND.size.w, h: 0.015,
    fill: { color: C.hairline }, line: { type: "none" },
  });
  slide.addText(ctx.deckLabel, {
    x: 0.42, y: PPTX_BRAND.size.h - 0.38, w: 5.8, h: 0.3,
    fontFace: PPTX_BRAND.font.body, fontSize: 9, color: ink, margin: 0,
  });
  slide.addText("Comply365 · Connected Consumer Intelligence", {
    x: PPTX_BRAND.size.w / 2 - 3, y: PPTX_BRAND.size.h - 0.38, w: 6, h: 0.3,
    fontFace: PPTX_BRAND.font.body, fontSize: 9, color: ink,
    align: "center", margin: 0,
  });
  slide.addText(
    `${String(ctx.index + 1).padStart(2, "0")} / ${String(ctx.total).padStart(2, "0")}`,
    {
      x: PPTX_BRAND.size.w - 1.4, y: PPTX_BRAND.size.h - 0.38, w: 1, h: 0.3,
      fontFace: PPTX_BRAND.font.body, fontSize: 9, color: ink,
      align: "right", margin: 0,
    },
  );
}

/* ── Title block ─────────────────────────────────────────────── */

export function addTitleBlock(
  slide: pptxgen.Slide,
  opts: {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    y?: number;
    variant?: "light" | "dark";
  },
) {
  const variant = opts.variant ?? "light";
  const ink = variant === "dark" ? C.inkInverse : C.ink;
  const muted = variant === "dark" ? C.subtle : C.muted;
  let y = opts.y ?? 0.75;
  if (opts.eyebrow) {
    slide.addText(opts.eyebrow.toUpperCase(), {
      x: 0.5, y, w: 12, h: 0.3,
      fontFace: PPTX_BRAND.font.body, fontSize: 11, color: C.primary,
      bold: true, charSpacing: 4, margin: 0,
    });
    y += 0.34;
  }
  slide.addText(opts.title, {
    x: 0.5, y, w: 12.3, h: 0.9,
    fontFace: PPTX_BRAND.font.display, fontSize: 32, bold: true, color: ink,
    margin: 0,
  });
  y += 0.9;
  if (opts.subtitle) {
    slide.addText(opts.subtitle, {
      x: 0.5, y, w: 12.3, h: 0.45,
      fontFace: PPTX_BRAND.font.body, fontSize: 14, color: muted,
      margin: 0,
    });
  }
}

/* ── Cards ───────────────────────────────────────────────────── */

export function addCard(
  slide: pptxgen.Slide,
  x: number, y: number, w: number, h: number,
  opts: { fill?: string; border?: string; radius?: number } = {},
) {
  slide.addShape("roundRect", {
    x, y, w, h,
    fill: { color: opts.fill ?? C.surfaceAlt },
    line: { color: opts.border ?? C.hairline, width: 0.75 },
    rectRadius: opts.radius ?? 0.1,
  });
}

export function addLabeledCard(
  slide: pptxgen.Slide,
  x: number, y: number, w: number, h: number,
  opts: {
    eyebrow?: string;
    title: string;
    body?: string;
    accent?: string;
    fill?: string;
    titleSize?: number;
    bodySize?: number;
  },
) {
  const accent = opts.accent ?? C.primary;
  slide.addShape("roundRect", {
    x, y, w, h,
    fill: { color: opts.fill ?? C.surface },
    line: { color: C.hairline, width: 0.75 },
    rectRadius: 0.1,
  });
  // Left accent bar
  slide.addShape("rect", {
    x, y: y + 0.08, w: 0.06, h: h - 0.16,
    fill: { color: accent }, line: { type: "none" },
  });
  let cy = y + 0.18;
  if (opts.eyebrow) {
    slide.addText(opts.eyebrow.toUpperCase(), {
      x: x + 0.22, y: cy, w: w - 0.4, h: 0.24,
      fontFace: PPTX_BRAND.font.body, fontSize: 9, color: accent,
      bold: true, charSpacing: 3, margin: 0,
    });
    cy += 0.28;
  }
  slide.addText(opts.title, {
    x: x + 0.22, y: cy, w: w - 0.4, h: 0.4,
    fontFace: PPTX_BRAND.font.display, fontSize: opts.titleSize ?? 14,
    bold: true, color: C.ink, margin: 0,
  });
  cy += 0.42;
  if (opts.body) {
    slide.addText(opts.body, {
      x: x + 0.22, y: cy, w: w - 0.4, h: y + h - cy - 0.18,
      fontFace: PPTX_BRAND.font.body, fontSize: opts.bodySize ?? 11,
      color: C.muted, valign: "top", paraSpaceAfter: 4, margin: 0,
    });
  }
}

/* ── Pills + badges ─────────────────────────────────────────── */

export function addPill(
  slide: pptxgen.Slide,
  x: number, y: number, w: number, h: number,
  text: string,
  color: string = C.primary,
  fill?: string,
) {
  slide.addShape("roundRect", {
    x, y, w, h,
    fill: { color: fill ?? C.surface },
    line: { color, width: 1 },
    rectRadius: h / 2,
  });
  slide.addText(text, {
    x, y, w, h,
    fontFace: PPTX_BRAND.font.body, fontSize: 10, color, bold: true,
    align: "center", valign: "middle", margin: 0,
  });
}

export function addPillRow(
  slide: pptxgen.Slide,
  x: number, y: number, w: number, h: number,
  items: { text: string; color?: string }[],
) {
  const gap = 0.14;
  const pillW = (w - gap * (items.length - 1)) / items.length;
  items.forEach((it, i) => {
    addPill(slide, x + i * (pillW + gap), y, pillW, h, it.text, it.color ?? C.primary);
  });
}

export function addIconBadge(
  slide: pptxgen.Slide,
  x: number, y: number, size: number,
  color: string,
  glyph: string = "■",
) {
  slide.addShape("roundRect", {
    x, y, w: size, h: size,
    fill: { color }, line: { type: "none" },
    rectRadius: size * 0.25,
  });
  slide.addText(glyph, {
    x, y, w: size, h: size,
    fontFace: PPTX_BRAND.font.display,
    fontSize: Math.max(10, size * 22),
    bold: true, color: "FFFFFF",
    align: "center", valign: "middle", margin: 0,
  });
}

/* ── Stat tiles ─────────────────────────────────────────────── */

export function addStatTile(
  slide: pptxgen.Slide,
  x: number, y: number, w: number, h: number,
  value: string,
  label: string,
  accent: string = C.primary,
) {
  addCard(slide, x, y, w, h, { fill: C.surface });
  // Top accent bar
  slide.addShape("rect", {
    x, y, w, h: 0.08,
    fill: { color: accent }, line: { type: "none" },
  });
  slide.addText(value, {
    x: x + 0.1, y: y + 0.25, w: w - 0.2, h: h * 0.55,
    fontFace: PPTX_BRAND.font.display, fontSize: 40, bold: true, color: accent,
    align: "center", valign: "middle", margin: 0,
  });
  slide.addText(label, {
    x: x + 0.15, y: y + h * 0.7, w: w - 0.3, h: h * 0.25,
    fontFace: PPTX_BRAND.font.body, fontSize: 11, color: C.muted,
    align: "center", valign: "middle", margin: 0,
  });
}

export function addBrandStatBlock(
  slide: pptxgen.Slide,
  x: number, y: number, w: number,
  items: { value: string; label: string; accent?: string }[],
) {
  const gap = 0.2;
  const tileW = (w - gap * (items.length - 1)) / items.length;
  const tileH = 1.4;
  items.forEach((it, i) => {
    addStatTile(
      slide,
      x + i * (tileW + gap), y, tileW, tileH,
      it.value, it.label, it.accent,
    );
  });
}

/* ── Eyebrows / titles / dividers ───────────────────────────── */

export function addEyebrow(
  slide: pptxgen.Slide,
  x: number, y: number, w: number,
  text: string,
  color: string = C.primary,
) {
  slide.addText(text.toUpperCase(), {
    x, y, w, h: 0.28,
    fontFace: PPTX_BRAND.font.body, fontSize: 10, color,
    bold: true, charSpacing: 4, margin: 0,
  });
}

export function addSectionTitle(
  slide: pptxgen.Slide,
  x: number, y: number, w: number,
  text: string,
  color: string = C.ink,
) {
  slide.addText(text, {
    x, y, w, h: 0.45,
    fontFace: PPTX_BRAND.font.display, fontSize: 18, bold: true, color,
    margin: 0,
  });
}

export function addDivider(
  slide: pptxgen.Slide,
  x: number, y: number, w: number,
  color: string = C.hairline,
) {
  slide.addShape("rect", {
    x, y, w, h: 0.015,
    fill: { color }, line: { type: "none" },
  });
}

/* ── Lists ───────────────────────────────────────────────────── */

export function addBulletList(
  slide: pptxgen.Slide,
  x: number, y: number, w: number, h: number,
  items: string[],
  opts: { fontSize?: number; color?: string; accent?: string } = {},
) {
  slide.addText(
    items.map((t) => ({
      text: t,
      options: { bullet: { code: "25A0" }, color: opts.color ?? C.ink },
    })),
    {
      x, y, w, h,
      fontFace: PPTX_BRAND.font.body,
      fontSize: opts.fontSize ?? 13,
      color: opts.color ?? C.ink,
      paraSpaceAfter: 8,
      valign: "top",
      margin: 0,
    },
  );
}

/* ── Comparison row ──────────────────────────────────────────── */

export function addCheckRow(
  slide: pptxgen.Slide,
  x: number, y: number, w: number, h: number,
  label: string,
  ok: boolean,
  ok2?: boolean,
) {
  slide.addText(label, {
    x, y, w: w - 1.2, h,
    fontFace: PPTX_BRAND.font.body, fontSize: 11, color: C.ink,
    valign: "middle", margin: 0,
  });
  const iconX1 = x + w - 1.1;
  const iconX2 = x + w - 0.5;
  slide.addText(ok ? "✓" : "✕", {
    x: iconX1, y, w: 0.5, h,
    fontFace: PPTX_BRAND.font.display, fontSize: 16, bold: true,
    color: ok ? C.success : C.danger, align: "center", valign: "middle", margin: 0,
  });
  if (typeof ok2 === "boolean") {
    slide.addText(ok2 ? "✓" : "✕", {
      x: iconX2, y, w: 0.5, h,
      fontFace: PPTX_BRAND.font.display, fontSize: 16, bold: true,
      color: ok2 ? C.success : C.danger, align: "center", valign: "middle", margin: 0,
    });
  }
}

/* ── Image fallback (for SVG-heavy compositions) ─────────────── */

export function addImageFallback(
  slide: pptxgen.Slide,
  base64Png: string,
  x: number, y: number, w: number, h: number,
  caption?: string,
) {
  slide.addImage({ data: base64Png, x, y, w, h });
  if (caption) {
    slide.addText(caption, {
      x, y: y + h + 0.05, w, h: 0.25,
      fontFace: PPTX_BRAND.font.body, fontSize: 9, color: C.muted,
      align: "center", italic: true, margin: 0,
    });
  }
}
