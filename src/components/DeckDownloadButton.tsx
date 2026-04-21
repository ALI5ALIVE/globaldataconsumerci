import { useState, RefObject } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface DeckDownloadButtonProps {
  containerRef: RefObject<HTMLDivElement>;
  totalSlides: number;
  onBeforeCapture?: () => void;
}

const DeckDownloadButton = ({ containerRef, totalSlides, onBeforeCapture }: DeckDownloadButtonProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState<{ current: number; total: number } | null>(null);

  const handleDownload = async () => {
    const container = containerRef.current;
    if (!container) return;

    setIsGenerating(true);
    onBeforeCapture?.();

    const originalScroll = container.scrollTop;
    const slideHeight = container.clientHeight;

    try {
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [1920, 1080],
        hotfixes: ["px_scaling"],
      });

      const slideNodes = Array.from(container.children).filter(
        (el): el is HTMLElement => el instanceof HTMLElement
      );
      const count = Math.min(totalSlides, slideNodes.length);

      for (let i = 0; i < count; i++) {
        setProgress({ current: i + 1, total: count });

        // Scroll to slide and wait for layout/animations
        container.scrollTo({ top: i * slideHeight, behavior: "auto" });
        await new Promise((r) => setTimeout(r, 700));

        const node = slideNodes[i];
        const canvas = await html2canvas(node, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: null,
          windowWidth: node.scrollWidth,
          windowHeight: node.scrollHeight,
        });

        const imgData = canvas.toDataURL("image/png");
        if (i > 0) pdf.addPage([1920, 1080], "landscape");
        pdf.addImage(imgData, "PNG", 0, 0, 1920, 1080);
      }

      pdf.save("GlobalData-Connected-Intelligence.pdf");
    } catch (e) {
      console.error("PDF generation failed:", e);
    } finally {
      container.scrollTo({ top: originalScroll, behavior: "auto" });
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
