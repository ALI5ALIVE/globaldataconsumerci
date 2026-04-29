import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { DECK_BUILDERS, type DeckId } from "@/exporters/pptx";

interface Props {
  deckId: DeckId;
  filename?: string;
  onBeforeBuild?: () => void;
}

const DeckPPTXExportButton = ({
  deckId,
  filename = "Connected-Consumer-Intelligence.pptx",
  onBeforeBuild,
}: Props) => {
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState<{ current: number; total: number; label: string } | null>(null);

  const handleClick = async () => {
    if (busy) return;
    onBeforeBuild?.();
    setBusy(true);
    setProgress({ current: 0, total: 12, label: "Starting" });
    try {
      const builder = DECK_BUILDERS[deckId];
      const blob = await builder({
        onProgress: (current, total, label) => setProgress({ current, total, label }),
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1500);
      toast.success("PPTX downloaded");
    } catch (e) {
      console.error("[pptx] build failed", e);
      toast.error("Failed to build PPTX");
    } finally {
      setBusy(false);
      setProgress(null);
    }
  };

  const label = busy && progress
    ? `Building ${progress.current}/${progress.total} · ${progress.label}`
    : "Save as PPTX";

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleClick}
      disabled={busy}
      className="gap-2"
    >
      {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
      <span className="hidden sm:inline">{label}</span>
    </Button>
  );
};

export default DeckPPTXExportButton;
