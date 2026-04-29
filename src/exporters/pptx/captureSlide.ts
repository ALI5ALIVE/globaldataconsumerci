import { toPng } from "html-to-image";

/**
 * Capture a slide DOM node by id and return a base64 PNG data URL.
 * High-fidelity render at 2x for projection-quality images.
 */
export async function captureSlide(slideId: string): Promise<string> {
  const el = document.getElementById(slideId) as HTMLElement | null;
  if (!el) throw new Error(`Slide element not found: #${slideId}`);

  // Scroll the slide fully into view so its content is laid out & visible
  el.scrollIntoView({ behavior: "auto", block: "start" });

  // Wait for fonts + framer-motion animations to settle
  if (document.fonts && (document.fonts as any).ready) {
    try {
      await (document.fonts as any).ready;
    } catch {
      /* ignore */
    }
  }
  await new Promise((r) => setTimeout(r, 600));

  const rect = el.getBoundingClientRect();
  const dataUrl = await toPng(el, {
    width: rect.width,
    height: rect.height,
    pixelRatio: 2,
    cacheBust: true,
    backgroundColor: "#0F1320",
    style: {
      // Force the snapshot region's box to its natural size
      transform: "none",
      margin: "0",
    },
    // Ignore floating UI chrome from the deck (play buttons, nav arrows)
    filter: (node) => {
      if (!(node instanceof HTMLElement)) return true;
      if (node.dataset && node.dataset.deckUi === "true") return false;
      if (node.getAttribute && node.getAttribute("data-deck-ui") === "true")
        return false;
      return true;
    },
  });
  return dataUrl;
}
