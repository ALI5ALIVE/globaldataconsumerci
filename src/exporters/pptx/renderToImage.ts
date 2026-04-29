import html2canvas from "html2canvas";

/**
 * Capture a slide DOM node by id and return a base64 PNG data URL.
 * Used as a fallback for SVG/canvas-heavy slides we can't faithfully
 * rebuild as native PPTX shapes (5, 6, 8).
 */
export async function renderToImage(slideId: string): Promise<string> {
  const el = document.getElementById(slideId) as HTMLElement | null;
  if (!el) throw new Error(`Slide element not found: #${slideId}`);

  // Make sure the slide has been laid out at full height before capture.
  el.scrollIntoView({ behavior: "auto", block: "start" });
  await new Promise((r) => setTimeout(r, 250));

  const canvas = await html2canvas(el, {
    backgroundColor: "#0F1320",
    scale: 2,
    useCORS: true,
    logging: false,
    windowWidth: el.clientWidth,
    windowHeight: el.clientHeight,
  });
  return canvas.toDataURL("image/png");
}
