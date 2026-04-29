import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import jsPDF from "jspdf";
import { captureSlide } from "@/exporters/pptx/captureSlide";
import { CONSUMER_JOURNEY_SLIDE_IDS } from "@/exporters/pptx/buildConsumerJourneyDeck";

interface DeckDownloadButtonProps {
  /** Optional override; defaults to the Consumer Journey slide list. */
  slideIds?: { id: string; label: string }[];
  filename?: string;
  onBeforeCapture?: () => void;
}

const DeckDownloadButton = ({
  slideIds = CONSUMER_JOURNEY_SLIDE_IDS,
  filename = "Connected-Consumer-Intelligence.pdf",
  onBeforeCapture,
}: DeckDownloadButtonProps) => {
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState<{ current: number; total: number; label: string } | null>(null);

  const handleSavePdf = async () => {
    if (busy) return;
    onBeforeCapture?.();
    setBusy(true);
    document.documentElement.dataset.capturing = "true";
    const total = slideIds.length;
    setProgress({ current: 0, total, label: "Starting" });

    try {
      // 1920×1080 px landscape (16:9) — matches PPTX export
      const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [1920, 1080] });

      for (let i = 0; i < total; i++) {
        const { id, label } = slideIds[i];
        setProgress({ current: i + 1, total, label: `Capturing ${label}` });
        const dataUrl = await captureSlide(id);
        if (i > 0) pdf.addPage([1920, 1080], "landscape");
        pdf.addImage(dataUrl, "PNG", 0, 0, 1920, 1080, undefined, "FAST");
      }

      pdf.save(filename);
      toast.success("PDF downloaded");
    } catch (err) {
      console.error("[pdf] export failed", err);
      toast.error("Failed to build PDF");
    } finally {
      delete document.documentElement.dataset.capturing;
      setBusy(false);
      setProgress(null);
    }
  };

  const label = busy && progress
    ? `${progress.label} (${progress.current}/${progress.total})`
    : "Save as PDF";

  return (
    <Button
      variant="outline"
      size="sm"
      className="gap-2 border-primary/30 text-primary hover:bg-primary/10 text-xs"
      onClick={handleSavePdf}
      disabled={busy}
      data-deck-ui="true"
      title="Capture every slide and download as a 16:9 PDF"
    >
      {busy ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Download className="w-3.5 h-3.5" />}
      <span className="hidden sm:inline">{label}</span>
    </Button>
  );
};

export default DeckDownloadButton;
