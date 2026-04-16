import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const DeckDownloadButton = () => {
  return (
    <a
      href="/downloads/GlobalData-Connected-Intelligence.pptx"
      download="GlobalData-Connected-Intelligence.pptx"
    >
      <Button
        variant="outline"
        size="sm"
        className="gap-2 border-primary/30 text-primary hover:bg-primary/10 text-xs"
      >
        <Download className="w-3.5 h-3.5" />
        Download Deck
      </Button>
    </a>
  );
};

export default DeckDownloadButton;
