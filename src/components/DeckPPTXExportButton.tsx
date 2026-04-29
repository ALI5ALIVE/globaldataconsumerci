import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { DECK_BUILDERS, type DeckId } from "@/exporters/pptx";
import { validatePptx, formatValidationReport } from "@/exporters/pptx/validatePptx";

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

      // Structural validation before download
      setProgress({ current: 12, total: 12, label: "Validating PPTX" });
      const report = await validatePptx(blob);
      console.log("[pptx] validation report\n" + formatValidationReport(report));
      if (!report.ok) {
        const firstError = report.issues.find((i) => i.severity === "error");
        toast.error(
          `PPTX failed validation: ${firstError?.code} — ${firstError?.message}`,
          { duration: 8000 },
        );
        return;
      }
      const warnings = report.issues.filter((i) => i.severity === "warning");
      if (warnings.length > 0) {
        toast.warning(`PPTX built with ${warnings.length} warning(s) — see console`);
      }

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
    ? `${progress.label} (${progress.current}/${progress.total})`
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
