import { useState } from "react";
import { FileText, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { buildConsumerJourneySlides } from "@/exporters/googleSlides/buildConsumerJourneySlides";

interface Props {
  onBeforeBuild?: () => void;
}

const DeckGoogleSlidesExportButton = ({ onBeforeBuild }: Props) => {
  const [busy, setBusy] = useState(false);

  const handleClick = async () => {
    if (busy) return;
    onBeforeBuild?.();
    setBusy(true);
    const t = toast.loading("Creating Google Slides deck…");
    try {
      const slides = buildConsumerJourneySlides();
      const { data, error } = await supabase.functions.invoke("create-google-slides-deck", {
        body: {
          presentationTitle: "Connected Consumer Intelligence",
          slides,
        },
      });
      if (error) throw error;
      if (!data?.url) throw new Error("No URL returned");
      toast.success("Google Slides deck created", { id: t });
      window.open(data.url, "_blank", "noopener");
    } catch (e) {
      console.error("[gslides] build failed", e);
      toast.error(`Failed: ${(e as Error).message}`, { id: t });
    } finally {
      setBusy(false);
    }
  };

  return (
    <Button variant="outline" size="sm" onClick={handleClick} disabled={busy} className="gap-2">
      {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <FileText className="w-4 h-4" />}
      <span className="hidden sm:inline">{busy ? "Creating…" : "Google Slides"}</span>
    </Button>
  );
};

export default DeckGoogleSlidesExportButton;
