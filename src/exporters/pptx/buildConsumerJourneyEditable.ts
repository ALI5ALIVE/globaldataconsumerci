import PptxGenJS from "pptxgenjs";
import type { BuildOpts } from "./types";
import type { SlideSpec } from "./slideSpec";
import {
  PPTX_BRAND,
  addBrandMaster,
  loadImageAsBase64,
} from "@/lib/pptxBrand";
import comply365LogoUrl from "@/assets/comply365-logo.png";
import comply365LogoWhiteUrl from "@/assets/comply365-logo-white.png";
import { consumerJourneyNarrations } from "@/data/consumerJourneyNarration";

import { titleSpec } from "./specs/consumerJourney/00-title";
import { pressureSpec } from "./specs/consumerJourney/01-pressure";
import { mondayMorningSpec } from "./specs/consumerJourney/02-monday-morning";
import { sevenSourcesSpec } from "./specs/consumerJourney/03-seven-sources";
import { theCostSpec } from "./specs/consumerJourney/04-the-cost";
import { oneLensSpec } from "./specs/consumerJourney/05-one-lens";
import { connectedDecisionSpec } from "./specs/consumerJourney/06-connected-decision";
import { teamsTransformedSpec } from "./specs/consumerJourney/07-teams-transformed";
import { maturityJourneySpec } from "./specs/consumerJourney/08-maturity-journey";
import { proofSpec } from "./specs/consumerJourney/09-proof";
import { whyNotDiySpec } from "./specs/consumerJourney/10-why-not-diy";
import { ctaSpec } from "./specs/consumerJourney/11-cta";

const DECK_LABEL = "Connected Consumer Intelligence";

const C = PPTX_BRAND.color;

/**
 * Editable PPTX of the Consumer Journey deck.
 *
 * Built using the SlideSpec architecture (mirrors stratagem-pyramid). Each
 * slide is a hand-coded composition of native PowerPoint primitives — fully
 * editable shapes, text frames and colors. Speaker notes are populated from
 * the canonical narration data so presenters keep the script in PowerPoint.
 *
 * Trade-off: NOT pixel-identical to the web view. PowerPoint has no SVG /
 * framer-motion, so SVG-heavy compositions (Ava hub, maturity curve) are
 * reconstructed with shapes — visually similar but not byte-identical.
 *
 * Use the Pixel Perfect exporter when fidelity matters more than editing.
 */
export async function buildConsumerJourneyEditable(
  opts: BuildOpts,
): Promise<Blob> {
  const composed: SlideSpec[] = [
    titleSpec,
    pressureSpec,
    mondayMorningSpec,
    sevenSourcesSpec,
    theCostSpec,
    oneLensSpec,
    connectedDecisionSpec,
    teamsTransformedSpec,
    maturityJourneySpec,
    proofSpec,
    whyNotDiySpec,
    ctaSpec,
  ];

  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_WIDE"; // 13.333" × 7.5"
  pptx.title = DECK_LABEL;
  pptx.company = "Comply365";
  pptx.author = "Comply365";

  // Load logos once (light + dark variants)
  let logoLight = "";
  let logoDark = "";
  try {
    logoLight = await loadImageAsBase64(comply365LogoUrl);
  } catch (err) {
    console.warn("[pptx-editable] failed to load light logo", err);
  }
  try {
    logoDark = await loadImageAsBase64(comply365LogoWhiteUrl);
  } catch (err) {
    console.warn("[pptx-editable] failed to load dark logo", err);
  }

  const total = composed.length;
  for (let i = 0; i < total; i++) {
    const spec = composed[i];
    opts.onProgress?.(i, total, spec.label);

    const slide = pptx.addSlide();
    const variant = spec.variant ?? "light";
    const logo = variant === "dark" ? logoDark : logoLight;

    try {
      // Apply standard brand chrome unless the spec opts out.
      if (spec.chrome !== false) {
        addBrandMaster(slide, {
          logo,
          index: i,
          total,
          deckLabel: DECK_LABEL,
          variant,
        });
      }
      await spec.build(slide, {
        logo,
        index: i,
        total,
        deckLabel: DECK_LABEL,
      });

      // Speaker notes from canonical narration data.
      const narration = consumerJourneyNarrations[i];
      if (narration?.script) slide.addNotes(narration.script);
    } catch (err) {
      console.error(
        `[pptx-editable] slide ${i} (${spec.label}) failed`,
        err,
      );
      slide.background = { color: C.bg };
      slide.addText(
        `Slide failed to render: ${spec.label}\n${(err as Error)?.message ?? ""}`,
        {
          x: 1, y: 3, w: PPTX_BRAND.size.w - 2, h: 1.5,
          fontFace: PPTX_BRAND.font.body, fontSize: 18,
          color: C.danger, align: "center",
        },
      );
    }
  }

  opts.onProgress?.(total, total, "Composing PPTX");
  const data = (await pptx.write({ outputType: "blob" })) as Blob;
  return data;
}
