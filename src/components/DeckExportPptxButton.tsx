import { useState } from "react";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

interface Props {
  onBeforeCapture?: () => void;
  fileName?: string;
  slideCount?: number;
  /**
   * Public URL of the deck. The edge function (headless Chromium) needs to
   * reach this from the server, so it must be a publicly accessible host.
   * Defaults to the published URL.
   */
  deckUrl?: string;
}

const DEFAULT_DECK_URL = "https://globaldataconsumerci.lovable.app";

const DeckExportPptxButton = ({
  onBeforeCapture,
  fileName = "GlobalData-Connected-Intelligence.pptx",
  slideCount = 12,
  deckUrl = DEFAULT_DECK_URL,
}: Props) => {
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState<string>("");

  const handleExport = async () => {
    setBusy(true);
    setProgress("Rendering slides… (~25s)");
    onBeforeCapture?.();

    try {
      const { data, error } = await supabase.functions.invoke("export-deck-pptx", {
        body: { deckUrl, slideCount },
      });

      if (error) throw error;
      if (!data) throw new Error("No file returned");

      // supabase-js returns a Blob for binary responses
      const blob = data instanceof Blob ? data : new Blob([data]);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setProgress("Done");
    } catch (err) {
      console.error("PPTX export failed", err);
      alert(
        `PPTX export failed: ${err instanceof Error ? err.message : String(err)}`
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
      title="Render every slide via headless Chromium and assemble a PowerPoint deck"
    >
      <FileDown className="w-3.5 h-3.5" />
      {busy ? progress || "Exporting…" : "Save as PPTX"}
    </Button>
  );
};

export default DeckExportPptxButton;
