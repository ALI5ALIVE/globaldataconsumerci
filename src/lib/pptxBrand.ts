import pptxgen from "pptxgenjs";

/**
 * GlobalData — PPTX brand toolkit (Consumer Journey deck).
 *
 * Re-skinned to match the GlobalData 2025 PPT Master Template:
 *   • Primary palette: Navy #1F2432, Cream #FBF5E9, Mid Blue #09216B,
 *     GD Black #242528, Light Grey #F2F2F2.
 *   • Secondary palette: Hyper Blue, Mid Blue shades, Cream+1, Mid Grey.
 *   • Data-viz palette in fixed order (used for series 1–10 in any chart).
 *   • Typography: Poppins Regular for headings, Poppins Light for body
 *     (PowerPoint substitutes Calibri locally if Poppins isn't installed).
 *   • Chrome: cream-on-light surfaces, Q-glyph watermark in lower-right,
 *     "globaldata.com" wordmark in the footer, GD wordmark removed from
 *     content-slide headers per project memory.
 *
 * The token keys (primary, accent, danger, success, stage1..5, etc.) are
 * preserved so all existing slide specs adopt the GD palette without edits.
 */

export const PPTX_BRAND = {
  size: { w: 13.333, h: 7.5 },
  color: {
    // ── Surfaces ──────────────────────────────────────────────
    bg: "FBF5E9",          // Cream — primary content background
    bgAlt: "F2F2F2",       // Light Grey — neutral surface
    surface: "FFFFFF",     // White inner panels
    surfaceAlt: "F8F4E6",  // Slightly tinted cream for layering
    hairline: "E0D8C5",    // Cream-derived hairline so it reads on cream
    // ── Ink ───────────────────────────────────────────────────
    ink: "242528",         // GD Black
    inkSoft: "1F2432",     // Navy Blue (also a surface color)
    muted: "676B75",       // Mid Grey
    subtle: "B5AB9A",      // Cream +2 (muted on dark; visible on cream)
    // ── Brand primary ────────────────────────────────────────
    primary: "09216B",     // Mid Blue — primary accent
    primarySoft: "CAD6FF", // Hyper Blue -2 — soft pill background
    accent: "6789FB",      // Hyper Blue -1 — secondary accent
    accentSoft: "DCE4FF",  // Hyper Blue light — soft accent surface
    // ── Status (drawn from the data-viz palette) ─────────────
    danger: "B84438",      // dv 10 — red
    warning: "E08E45",     // dv 6 — amber
    success: "4A7C6B",     // dv 3 — green
    // ── Maturity stages — mapped to data-viz colors in the
    //    master's prescribed series order so chart parity holds.
    stage1: "B84438",      // Fragmented (red)
    stage2: "6789FB",      // Managed (hyper blue)
    stage3: "4A7C6B",      // Connected (green)
    stage4: "523D85",      // Optimised (purple)
    stage5: "EBD369",      // Predictive (gold)
    // ── Inverse (hero / dark slides) ─────────────────────────
    inkInverse: "FFFFFF",
    bgDark: "1F2432",      // Navy Blue
    // ── Brand-specific extras (referenced by name) ──────────
    cream: "FBF5E9",
    cream1: "E7D7C1",
    navy: "1F2432",
    midBlue: "09216B",
    midBlue2: "3D5BBA",
    hyperBlue: "6789FB",
    hyperBlue2: "CAD6FF",
    lightGrey: "F2F2F2",
    midGrey: "676B75",
    darkGrey: "505259",
    gdBlack: "242528",
    // ── Data-viz sequence (master pages 10 + 17, series 1–10) ─
    dv: [
      "2541D8", "E6DCC3", "4A7C6B", "001F5C", "EBD369",
      "E08E45", "BBAEA0", "DCE4FF", "8BC09B", "B84438",
    ],
  },
  // GlobalData typography spec: Poppins for both headings and body.
  font: { display: "Poppins", body: "Poppins" },
} as const;

const C = PPTX_BRAND.color;

/* ── Backgrounds ─────────────────────────────────────────────── */

export function paintBackground(
  slide: pptxgen.Slide,
  variant: "light" | "dark" = "light",
) {
  slide.background = { color: variant === "dark" ? C.bgDark : C.bg };
}

/* ── Chrome (Q-mark watermark + globaldata.com footer + counter) ─ */

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

/**
 * Add the GlobalData Q-mark as a small watermark in the lower-right.
 * On dark/hero slides we use a larger, prominent placement in the upper-left
 * (callers handle that directly via slide.addImage).
 */
export function addBrandLogo(
  slide: pptxgen.Slide,
  logoBase64: string,
  variant: "light" | "dark" = "light",
) {
  if (!logoBase64) return;
  if (variant === "dark") {
    // Hero placement: top-left, prominent.
    const h = 0.65;
    slide.addImage({
      data: logoBase64,
      x: 0.5, y: 0.45, w: h, h,
    });
  } else {
    // Footer watermark: small, lower-right, just above the footer line.
    const h = 0.4;
    slide.addImage({
      data: logoBase64,
      x: PPTX_BRAND.size.w - h - 0.4,
      y: PPTX_BRAND.size.h - h - 0.55,
      w: h, h,
    });
  }
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

  const ink = variant === "dark" ? C.subtle : C.muted;

  if (ctx.logo) addBrandLogo(slide, ctx.logo, variant);

  // Footer hairline (subtle on cream, slightly brighter on navy)
  slide.addShape("rect", {
    x: 0.5, y: PPTX_BRAND.size.h - 0.42, w: PPTX_BRAND.size.w - 1, h: 0.01,
    fill: { color: variant === "dark" ? C.darkGrey : C.hairline },
    line: { type: "none" },
  });

  // Deck label (bottom-left)
  slide.addText(ctx.deckLabel, {
    x: 0.5, y: PPTX_BRAND.size.h - 0.36, w: 5.8, h: 0.28,
    fontFace: PPTX_BRAND.font.body, fontSize: 9, color: ink, margin: 0,
  });

  // GlobalData wordmark (centre)
  slide.addText("globaldata.com", {
    x: PPTX_BRAND.size.w / 2 - 1.5, y: PPTX_BRAND.size.h - 0.36,
    w: 3, h: 0.28,
    fontFace: PPTX_BRAND.font.body, fontSize: 9, color: ink,
    align: "center", margin: 0,
  });

  // Slide counter (bottom-right)
  slide.addText(
    `${String(ctx.index + 1).padStart(2, "0")} / ${String(ctx.total).padStart(2, "0")}`,
    {
      x: PPTX_BRAND.size.w - 1.4, y: PPTX_BRAND.size.h - 0.36, w: 1, h: 0.28,
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
  // GlobalData spec: headings ≤ 32pt Poppins Regular.
  slide.addText(opts.title, {
    x: 0.5, y, w: 12.3, h: 1.4,
    fontFace: PPTX_BRAND.font.display, fontSize: 28, bold: false, color: ink,
    valign: "top", margin: 0,
  });
  y += 1.2;
  if (opts.subtitle) {
    slide.addText(opts.subtitle, {
      x: 0.5, y, w: 12.3, h: 0.6,
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
    fill: { color: opts.fill ?? C.surface },
    line: { color: opts.border ?? C.hairline, width: 0.75 },
    rectRadius: opts.radius ?? 0.08,
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
    rectRadius: 0.08,
  });
  // Left accent bar (GD master uses left-accent strips for category cards)
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
    x: x + 0.22, y: cy, w: w - 0.4, h: 0.7,
    fontFace: PPTX_BRAND.font.display, fontSize: opts.titleSize ?? 14,
    bold: true, color: C.ink, valign: "top", margin: 0,
  });
  cy += 0.7;
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
  slide.addShape("ellipse", {
    x, y, w: size, h: size,
    fill: { color }, line: { type: "none" },
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
  // Top accent bar — GD master uses thin colored caps on stat tiles
  slide.addShape("rect", {
    x, y, w, h: 0.08,
    fill: { color: accent }, line: { type: "none" },
  });
  slide.addText(value, {
    x: x + 0.1, y: y + 0.25, w: w - 0.2, h: h * 0.55,
    fontFace: PPTX_BRAND.font.display, fontSize: 38, bold: true, color: accent,
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

/* ── Glyph tile (rounded square with centered glyph) ─────────── */

export function addGlyphTile(
  slide: pptxgen.Slide,
  x: number, y: number, size: number,
  opts: { glyph: string; color: string; fill?: string; rounded?: boolean },
) {
  const fill = opts.fill ?? `${opts.color}`;
  if (opts.rounded === false) {
    slide.addShape("rect", {
      x, y, w: size, h: size,
      fill: { color: fill }, line: { type: "none" },
    });
  } else {
    slide.addShape("roundRect", {
      x, y, w: size, h: size,
      fill: { color: fill }, line: { type: "none" },
      rectRadius: size * 0.22,
    });
  }
  slide.addText(opts.glyph, {
    x, y, w: size, h: size,
    fontFace: PPTX_BRAND.font.display,
    fontSize: Math.max(10, size * 28),
    bold: true, color: "FFFFFF",
    align: "center", valign: "middle", margin: 0,
  });
}

/* ── Segmented bar (for time-allocation visuals) ─────────────── */

export function addSegmentedBar(
  slide: pptxgen.Slide,
  x: number, y: number, w: number, h: number,
  segments: { pct: number; color: string; label?: string }[],
) {
  const total = segments.reduce((s, seg) => s + seg.pct, 0) || 1;
  let cursor = x;
  segments.forEach((seg) => {
    const segW = (seg.pct / total) * w;
    slide.addShape("rect", {
      x: cursor, y, w: segW, h,
      fill: { color: seg.color }, line: { type: "none" },
    });
    if (segW > 0.4 && seg.label) {
      slide.addText(seg.label, {
        x: cursor, y, w: segW, h,
        fontFace: PPTX_BRAND.font.body, fontSize: 8, bold: true, color: "FFFFFF",
        align: "center", valign: "middle", margin: 0,
      });
    }
    cursor += segW;
  });
}

/* ── Inbox row (Slide 2 helper) ──────────────────────────────── */

export function addInboxRow(
  slide: pptxgen.Slide,
  x: number, y: number, w: number, h: number,
  opts: { sender: string; subject: string; time: string },
) {
  slide.addShape("rect", {
    x, y, w, h: 0.01,
    fill: { color: C.hairline }, line: { type: "none" },
  });
  // Unread dot
  slide.addShape("ellipse", {
    x: x + 0.12, y: y + h / 2 - 0.06, w: 0.12, h: 0.12,
    fill: { color: C.primary }, line: { type: "none" },
  });
  slide.addText(opts.sender, {
    x: x + 0.32, y, w: 2.4, h,
    fontFace: PPTX_BRAND.font.display, fontSize: 10, bold: true, color: C.ink,
    valign: "middle", margin: 0,
  });
  slide.addText(opts.subject, {
    x: x + 2.78, y, w: w - 4.0, h,
    fontFace: PPTX_BRAND.font.body, fontSize: 10, color: C.muted,
    valign: "middle", margin: 0,
  });
  slide.addText(opts.time, {
    x: x + w - 1.0, y, w: 0.95, h,
    fontFace: PPTX_BRAND.font.body, fontSize: 9, color: C.subtle,
    align: "right", valign: "middle", margin: 0,
  });
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
