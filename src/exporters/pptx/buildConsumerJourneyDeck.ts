import type { BuildOpts } from "./types";
import { captureSlide } from "./captureSlide";
import { buildFromTemplate } from "./templateMerge";

/**
 * The 12 Consumer Journey slides in order.
 * Each entry maps to a DOM element id rendered inside <ConsumerJourneyDeck/>.
 */
export const CONSUMER_JOURNEY_SLIDE_IDS: { id: string; label: string }[] = [
  { id: "cj-slide-0", label: "Title" },
  { id: "cj-slide-1", label: "Pressure" },
  { id: "cp-slide-1", label: "Monday Morning" },
  { id: "cp-slide-2", label: "Seven Sources" },
  { id: "cp-slide-3", label: "The Cost" },
  { id: "cp-slide-4", label: "One Lens" },
  { id: "cj-slide-whatyouget", label: "What You Get" },
  { id: "cj-slide-decision", label: "Connected Decision" },
  { id: "cp-slide-7", label: "Teams Transformed" },
  { id: "cj-slide-maturity", label: "Maturity Journey" },
  { id: "cj-slide-proof", label: "Proof" },
  { id: "cj-slide-diy", label: "Why Not DIY" },
  { id: "cj-slide-12", label: "CTA" },
];

export async function buildConsumerJourneyDeck(opts: BuildOpts): Promise<Blob> {
  const total = CONSUMER_JOURNEY_SLIDE_IDS.length;
  const captured: { id: string; png: string }[] = [];

  for (let i = 0; i < total; i++) {
    const { id, label } = CONSUMER_JOURNEY_SLIDE_IDS[i];
    opts.onProgress?.(i + 1, total, `Capturing ${label}`);
    const png = await captureSlide(id);
    captured.push({ id, png });
  }

  return buildFromTemplate({
    capturedSlides: captured,
    onProgress: (current, totalSteps, label) => {
      // Map merge progress to a second phase after captures
      opts.onProgress?.(total, total, label);
    },
  });
}
