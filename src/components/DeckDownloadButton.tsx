import { useState, ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface DeckDownloadButtonProps {
  slides: ReactNode[];
  onBeforeCapture?: () => void;
}

const SLIDE_W = 1920;
const SLIDE_H = 1080;

const DeckDownloadButton = ({ slides, onBeforeCapture }: DeckDownloadButtonProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState<{ current: number; total: number } | null>(null);

  const handleDownload = async () => {
    setIsGenerating(true);
    onBeforeCapture?.();

    // Off-screen host fixed at 1920x1080
    const host = document.createElement("div");
    host.style.cssText = `position:fixed; left:-100000px; top:0; width:${SLIDE_W}px; height:${SLIDE_H}px; overflow:hidden; pointer-events:none; z-index:-1;`;
    document.body.appendChild(host);

    // Inner wrapper that React will mount into
    const mount = document.createElement("div");
    mount.style.cssText = `width:${SLIDE_W}px; height:${SLIDE_H}px;`;
    host.appendChild(mount);

    // Disable animations during capture
    document.documentElement.setAttribute("data-capturing", "true");

    const root = createRoot(mount);
    const total = slides.length;

    try {
      // Wait for fonts before first render
      if ((document as any).fonts?.ready) {
        await (document as any).fonts.ready;
      }

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [SLIDE_W, SLIDE_H],
        hotfixes: ["px_scaling"],
      });

      for (let i = 0; i < total; i++) {
        setProgress({ current: i + 1, total });

        // Render the slide into the off-screen host
        await new Promise<void>((resolve) => {
          root.render(<div style={{ width: SLIDE_W, height: SLIDE_H }}>{slides[i]}</div>);
          // Two RAFs + small delay so layout, fonts, and SVG paints settle
          requestAnimationFrame(() => {
            requestAnimationFrame(() => setTimeout(resolve, 600));
          });
        });

        const canvas = await html2canvas(mount, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: null,
          width: SLIDE_W,
          height: SLIDE_H,
          windowWidth: SLIDE_W,
          windowHeight: SLIDE_H,
        });

        const imgData = canvas.toDataURL("image/png");
        if (i > 0) pdf.addPage([SLIDE_W, SLIDE_H], "landscape");
        pdf.addImage(imgData, "PNG", 0, 0, SLIDE_W, SLIDE_H);
      }

      pdf.save("GlobalData-Connected-Intelligence.pdf");
    } catch (e) {
      console.error("PDF generation failed:", e);
    } finally {
      try {
        root.unmount();
      } catch {}
      document.body.removeChild(host);
      document.documentElement.removeAttribute("data-capturing");
      setIsGenerating(false);
      setProgress(null);
    }
  };

  const label = isGenerating
    ? progress
      ? `Capturing ${progress.current} / ${progress.total}…`
      : "Preparing…"
    : "Download Deck";

  return (
    <Button
      variant="outline"
      size="sm"
      className="gap-2 border-primary/30 text-primary hover:bg-primary/10 text-xs"
      onClick={handleDownload}
      disabled={isGenerating}
    >
      {isGenerating ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Download className="w-3.5 h-3.5" />}
      {label}
    </Button>
  );
};

export default DeckDownloadButton;
