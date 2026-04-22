import { useState } from "react";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import PptxGenJS from "pptxgenjs";

interface Props {
  onBeforeCapture?: () => void;
  fileName?: string;
  slideCount?: number;
  /**
   * Public URL of the deck. We render each slide inside a hidden 1920x1080
   * iframe pointed at this URL so the layout is captured at the intended
   * desktop size, regardless of the user's actual viewport.
   *
   * Defaults to the published URL (must be reachable from the browser).
   */
  deckUrl?: string;
}

const DEFAULT_DECK_URL = "https://globaldataconsumerci.lovable.app";
const SLIDE_W = 1920;
const SLIDE_H = 1080;
const SETTLE_MS = 1500; // wait for fonts + layout + any motion to finalise

const DeckExportPptxButton = ({
  onBeforeCapture,
  fileName = "GlobalData-Connected-Intelligence.pptx",
  slideCount = 12,
  deckUrl = DEFAULT_DECK_URL,
}: Props) => {
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState<string>("");

  const captureSlide = async (index: number): Promise<string> => {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("aria-hidden", "true");
    // Position fully off-screen but still rendered at the real pixel size.
    iframe.style.cssText = [
      "position:fixed",
      "left:-20000px",
      "top:0",
      `width:${SLIDE_W}px`,
      `height:${SLIDE_H}px`,
      "border:0",
      "pointer-events:none",
      "opacity:1",
    ].join(";");
    iframe.src = `${deckUrl}/?capture=1&slide=${index}`;
    document.body.appendChild(iframe);

    try {
      // Wait for iframe to load
      await new Promise<void>((resolve, reject) => {
        const timeout = setTimeout(
          () => reject(new Error(`Iframe load timeout for slide ${index}`)),
          30000,
        );
        iframe.onload = () => {
          clearTimeout(timeout);
          resolve();
        };
        iframe.onerror = () => {
          clearTimeout(timeout);
          reject(new Error(`Iframe load error for slide ${index}`));
        };
      });

      const win = iframe.contentWindow;
      const doc = iframe.contentDocument;
      if (!win || !doc) throw new Error("Iframe document unavailable");

      // Wait for fonts, then a settle delay for animations / lazy paint.
      try {
        // @ts-expect-error -- fonts API not always typed
        if (doc.fonts && doc.fonts.ready) await doc.fonts.ready;
      } catch {
        /* ignore */
      }
      await new Promise((r) => setTimeout(r, SETTLE_MS));

      // Capture the iframe body at native size, 2x for 4K crispness.
      const canvas = await html2canvas(doc.body, {
        width: SLIDE_W,
        height: SLIDE_H,
        windowWidth: SLIDE_W,
        windowHeight: SLIDE_H,
        scale: 2,
        useCORS: true,
        allowTaint: false,
        backgroundColor: "#ffffff",
        logging: false,
        // Avoid html2canvas re-cloning into an offscreen iframe again — use
        // the iframe document directly.
        foreignObjectRendering: false,
      });

      return canvas.toDataURL("image/png");
    } finally {
      iframe.remove();
    }
  };

  const handleExport = async () => {
    setBusy(true);
    setProgress("Preparing…");
    onBeforeCapture?.();

    try {
      const pptx = new PptxGenJS();
      pptx.layout = "LAYOUT_WIDE"; // 13.333 x 7.5 in (16:9)
      pptx.title = "GlobalData Connected Intelligence";

      for (let i = 0; i < slideCount; i++) {
        setProgress(`Rendering slide ${i + 1}/${slideCount}…`);
        const dataUrl = await captureSlide(i);
        const slide = pptx.addSlide();
        slide.background = { color: "FFFFFF" };
        slide.addImage({ data: dataUrl, x: 0, y: 0, w: 13.333, h: 7.5 });
      }

      setProgress("Assembling .pptx…");
      await pptx.writeFile({ fileName });
      setProgress("Done");
    } catch (err) {
      console.error("PPTX export failed", err);
      alert(
        `PPTX export failed: ${err instanceof Error ? err.message : String(err)}`,
      );
    } finally {
      setTimeout(() => {
        setBusy(false);
        setProgress("");
      }, 600);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="gap-2 border-primary/30 text-primary hover:bg-primary/10 text-xs"
      onClick={handleExport}
      disabled={busy}
      data-deck-ui="true"
      title="Render each slide at 1920x1080 in a hidden iframe and assemble a PowerPoint deck"
    >
      <FileDown className="w-3.5 h-3.5" />
      {busy ? progress || "Exporting…" : "Save as PPTX"}
    </Button>
  );
};

export default DeckExportPptxButton;
