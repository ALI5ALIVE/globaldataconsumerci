import { useState, ReactNode } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DeckDownloadButtonProps {
  /** Kept for backwards compatibility — no longer used by native print flow. */
  slides?: ReactNode[];
  onBeforeCapture?: () => void;
}

const DeckDownloadButton = ({ onBeforeCapture }: DeckDownloadButtonProps) => {
  const [isPreparing, setIsPreparing] = useState(false);

  const handleSavePdf = async () => {
    setIsPreparing(true);
    onBeforeCapture?.();

    document.documentElement.setAttribute("data-printing", "true");

    try {
      if ((document as any).fonts?.ready) {
        await (document as any).fonts.ready;
      }
      // Allow layout to reflow at 1920px width and slides to expand
      await new Promise((r) => setTimeout(r, 700));
      await new Promise((r) => requestAnimationFrame(() => r(null)));
      window.print();
    } finally {
      const cleanup = () => {
        document.documentElement.removeAttribute("data-printing");
        setIsPreparing(false);
        window.removeEventListener("afterprint", cleanup);
      };
      window.addEventListener("afterprint", cleanup);
      setTimeout(cleanup, 60_000);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="gap-2 border-primary/30 text-primary hover:bg-primary/10 text-xs"
      onClick={handleSavePdf}
      disabled={isPreparing}
      data-deck-ui="true"
      title="Open the browser print dialog and choose 'Save as PDF' for a pixel-perfect export"
    >
      <Download className="w-3.5 h-3.5" />
      {isPreparing ? "Opening…" : "Save as PDF"}
    </Button>
  );
};

export default DeckDownloadButton;
