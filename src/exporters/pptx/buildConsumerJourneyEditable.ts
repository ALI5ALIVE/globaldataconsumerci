import PptxGenJS from "pptxgenjs";
import type { BuildOpts } from "./types";
import { consumerJourneyNarrations } from "@/data/consumerJourneyNarration";

/**
 * Fully native, editable PPTX of the Consumer Journey deck.
 *
 * Trade-off: this is NOT pixel-perfect with the web view. Each slide is
 * rebuilt with native PowerPoint text frames so presenters can edit the
 * title, body copy, and speaker notes directly. Visual SVGs / framer-motion
 * compositions are replaced with simple themed text layouts.
 *
 * Use the "Pixel Perfect" exporter when fidelity matters more than editing.
 */

// Comply365 brand
const NAVY = "0A1628";
const PRIMARY = "0066FF";
const SKY = "38BDF8";
const WHITE = "FFFFFF";
const MUTED = "94A3B8";

interface EditableSlide {
  eyebrow: string;
  title: string;
  body: string[]; // bullet/paragraph lines
  notes: string;
}

function splitScript(script: string): string[] {
  // Break narration into ~2-sentence chunks for readable bullets.
  const sentences = script
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+/)
    .filter(Boolean);
  const chunks: string[] = [];
  for (let i = 0; i < sentences.length; i += 2) {
    chunks.push(sentences.slice(i, i + 2).join(" "));
  }
  return chunks.slice(0, 6);
}

function buildSlideContent(): EditableSlide[] {
  const eyebrows = [
    "Connected Consumer Intelligence",
    "The Pressure",
    "Monday Morning",
    "Seven Sources",
    "The Cost",
    "One Lens",
    "Connected Decision",
    "Teams Transformed",
    "Maturity Journey",
    "The Proof",
    "Why Not DIY",
    "Next Steps",
  ];

  return consumerJourneyNarrations.map((n, i) => ({
    eyebrow: eyebrows[i] ?? `Slide ${i + 1}`,
    title: n.title,
    body: splitScript(n.script),
    notes: n.script,
  }));
}

export async function buildConsumerJourneyEditable(
  opts: BuildOpts,
): Promise<Blob> {
  const slides = buildSlideContent();
  const total = slides.length;

  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_WIDE"; // 13.333" x 7.5"
  pptx.title = "Connected Consumer Intelligence";
  pptx.company = "Comply365";
  pptx.author = "Comply365";

  // ── Title slide master ────────────────────────────────────────────────
  pptx.defineSlideMaster({
    title: "TITLE_MASTER",
    background: { color: NAVY },
    objects: [
      {
        rect: {
          x: 0,
          y: 7.0,
          w: 13.333,
          h: 0.5,
          fill: { color: PRIMARY },
        },
      },
    ],
  });

  // ── Content slide master ──────────────────────────────────────────────
  pptx.defineSlideMaster({
    title: "CONTENT_MASTER",
    background: { color: WHITE },
    objects: [
      {
        rect: { x: 0, y: 0, w: 13.333, h: 0.35, fill: { color: PRIMARY } },
      },
      {
        text: {
          text: "Connected Consumer Intelligence",
          options: {
            x: 0.5,
            y: 7.05,
            w: 8,
            h: 0.3,
            fontSize: 9,
            fontFace: "Calibri",
            color: MUTED,
            margin: 0,
          },
        },
      },
      {
        text: {
          text: "Comply365",
          options: {
            x: 11.5,
            y: 7.05,
            w: 1.5,
            h: 0.3,
            fontSize: 9,
            fontFace: "Calibri",
            color: MUTED,
            align: "right",
            margin: 0,
          },
        },
      },
    ],
  });

  for (let i = 0; i < total; i++) {
    const s = slides[i];
    opts.onProgress?.(i + 1, total, `Building slide ${i + 1}`);

    if (i === 0) {
      // TITLE SLIDE
      const slide = pptx.addSlide({ masterName: "TITLE_MASTER" });
      slide.addText("CONNECTED CONSUMER INTELLIGENCE", {
        x: 0.75,
        y: 2.4,
        w: 11.8,
        h: 0.6,
        fontSize: 16,
        fontFace: "Calibri",
        color: SKY,
        bold: true,
        charSpacing: 6,
      });
      slide.addText("A new way of working for consumer brands.", {
        x: 0.75,
        y: 3.0,
        w: 11.8,
        h: 1.6,
        fontSize: 44,
        fontFace: "Calibri Light",
        color: WHITE,
        bold: false,
      });
      slide.addText(
        "Connected. Predictive. Decisive. Powered by analyst-validated intelligence.",
        {
          x: 0.75,
          y: 4.8,
          w: 11.8,
          h: 0.6,
          fontSize: 18,
          fontFace: "Calibri",
          color: MUTED,
        },
      );
      slide.addNotes(s.notes);
      continue;
    }

    // CONTENT SLIDE
    const slide = pptx.addSlide({ masterName: "CONTENT_MASTER" });

    slide.addText(s.eyebrow.toUpperCase(), {
      x: 0.75,
      y: 0.7,
      w: 11.8,
      h: 0.4,
      fontSize: 12,
      fontFace: "Calibri",
      color: PRIMARY,
      bold: true,
      charSpacing: 4,
    });

    slide.addText(s.title, {
      x: 0.75,
      y: 1.15,
      w: 11.8,
      h: 1.0,
      fontSize: 36,
      fontFace: "Calibri",
      color: NAVY,
      bold: true,
    });

    slide.addText(
      s.body.map((line) => ({
        text: line,
        options: { bullet: { code: "25A0" }, color: NAVY },
      })),
      {
        x: 0.75,
        y: 2.4,
        w: 11.8,
        h: 4.3,
        fontSize: 16,
        fontFace: "Calibri",
        color: NAVY,
        valign: "top",
        paraSpaceAfter: 8,
      },
    );

    slide.addNotes(s.notes);
  }

  opts.onProgress?.(total, total, "Composing PPTX");

  const data = (await pptx.write({ outputType: "blob" })) as Blob;
  return data;
}
