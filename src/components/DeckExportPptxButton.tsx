import { useState } from "react";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { domToPng } from "modern-screenshot";
import PptxGenJS from "pptxgenjs";

interface Props {
  onBeforeCapture?: () => void;
  fileName?: string;
  slideCount?: number;
  /**
   * URL of the deck. Defaults to the current origin so the iframe is
   * same-origin (cross-origin iframes block contentDocument access).
   */
  deckUrl?: string;
}

const SLIDE_W = 1920;
const SLIDE_H = 1080;
const READY_TIMEOUT_MS = 15000;
const SETTLE_MS = 600;

const waitForReady = (doc: Document) =>
  new Promise<void>((resolve, reject) => {
    const start = Date.now();
    const check = () => {
      if (doc.documentElement.getAttribute("data-pptx-ready") === "true") {
        resolve();
        return;
      }
      if (Date.now() - start > READY_TIMEOUT_MS) {
        reject(new Error("Timed out waiting for slide layout"));
        return;
      }
      setTimeout(check, 100);
    };
    check();
  });

const DeckExportPptxButton = ({
  onBeforeCapture,
  fileName = "GlobalData-Connected-Intelligence.pptx",
  slideCount = 12,
  deckUrl,
}: Props) => {
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState<string>("");

  const baseUrl = deckUrl ?? window.location.origin;

  const captureSlide = async (index: number): Promise<string> => {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("aria-hidden", "true");
    iframe.style.cssText = [
      "position:fixed",
      "left:-20000px",
      "top:0",
      `width:${SLIDE_W}px`,
      `height:${SLIDE_H}px`,
      "border:0",
      "pointer-events:none",
      "background:#ffffff",
    ].join(";");
    iframe.src = `${baseUrl}/?capture=1&slide=${index}&t=${Date.now()}`;
    document.body.appendChild(iframe);

    try {
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
      if (!win || !doc) {
        throw new Error(
          "Iframe document unavailable (cross-origin?). Ensure the export button runs on the same origin as the deck.",
        );
      }

      try {
        const fonts = (doc as Document & { fonts?: { ready: Promise<unknown> } }).fonts;
        if (fonts?.ready) await fonts.ready;
      } catch {
        /* ignore */
      }

      setProgress(`Slide ${index + 1}/${slideCount} — waiting for layout…`);
      await waitForReady(doc);
      await new Promise((r) => setTimeout(r, SETTLE_MS));

      setProgress(`Slide ${index + 1}/${slideCount} — capturing…`);
      const dataUrl = await domToPng(doc.documentElement, {
        width: SLIDE_W,
        height: SLIDE_H,
        scale: 2,
        backgroundColor: "#ffffff",
      });

      return dataUrl;
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
      pptx.layout = "LAYOUT_WIDE";
      pptx.title = "GlobalData Connected Intelligence";

      for (let i = 0; i < slideCount; i++) {
        try {
          const dataUrl = await captureSlide(i);
          const slide = pptx.addSlide();
          slide.background = { color: "FFFFFF" };
          slide.addImage({ data: dataUrl, x: 0, y: 0, w: 13.333, h: 7.5 });
        } catch (slideErr) {
          console.error(`Slide ${i + 1} failed`, slideErr);
          throw new Error(
            `Slide ${i + 1} failed: ${slideErr instanceof Error ? slideErr.message : String(slideErr)}`,
          );
        }
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
