import { useState } from "react";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import PptxGenJS from "pptxgenjs";

interface Props {
  onBeforeCapture?: () => void;
  fileName?: string;
}

const TARGET_WIDTH = 1920;
const TARGET_HEIGHT = 1080;

const DeckExportPptxButton = ({ onBeforeCapture, fileName = "GlobalData-Connected-Intelligence.pptx" }: Props) => {
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState<string>("");

  const handleExport = async () => {
    setBusy(true);
    setProgress("Preparing…");
    onBeforeCapture?.();

    // Find the print root and its slide sections
    const printRoot = document.querySelector<HTMLElement>("[data-deck-print-root]");
    if (!printRoot) {
      setBusy(false);
      setProgress("");
      alert("Could not find deck content to export.");
      return;
    }
    const slides = Array.from(printRoot.children) as HTMLElement[];
    if (slides.length === 0) {
      setBusy(false);
      setProgress("");
      return;
    }

    // Force print/capture mode so UI chrome hides + 1920px layout applies
    document.documentElement.setAttribute("data-printing", "true");
    document.documentElement.setAttribute("data-pptx-capture", "true");

    try {
      if ((document as any).fonts?.ready) await (document as any).fonts.ready;
      // Allow layout to reflow
      await new Promise((r) => setTimeout(r, 800));

      const pptx = new PptxGenJS();
      pptx.layout = "LAYOUT_WIDE"; // 13.333 x 7.5 inches (16:9)
      pptx.title = "GlobalData Connected Intelligence";

      const originalScroll = printRoot.scrollTop;

      for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        setProgress(`Rendering slide ${i + 1}/${slides.length}…`);

        // Scroll the slide into view so any lazy content / framer-motion reveals
        slide.scrollIntoView({ block: "start", behavior: "auto" });
        await new Promise((r) => setTimeout(r, 350));
        await new Promise((r) => requestAnimationFrame(() => r(null)));

        const canvas = await html2canvas(slide, {
          width: TARGET_WIDTH,
          height: TARGET_HEIGHT,
          windowWidth: TARGET_WIDTH,
          windowHeight: TARGET_HEIGHT,
          scale: 2, // 3840 x 2160 output
          useCORS: true,
          allowTaint: true,
          backgroundColor: "#ffffff",
          logging: false,
        });

        const dataUrl = canvas.toDataURL("image/png");
        const pSlide = pptx.addSlide();
        pSlide.background = { color: "FFFFFF" };
        pSlide.addImage({
          data: dataUrl,
          x: 0,
          y: 0,
          w: 13.333,
          h: 7.5,
        });
      }

      // Restore scroll
      printRoot.scrollTop = originalScroll;

      setProgress("Assembling .pptx…");
      await pptx.writeFile({ fileName });
      setProgress("Done");
    } catch (err) {
      console.error("PPTX export failed", err);
      alert("PPTX export failed. See console for details.");
    } finally {
      document.documentElement.removeAttribute("data-printing");
      document.documentElement.removeAttribute("data-pptx-capture");
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
      title="Render every slide at 1920×1080 and assemble a PowerPoint deck"
    >
      <FileDown className="w-3.5 h-3.5" />
      {busy ? progress || "Exporting…" : "Save as PPTX"}
    </Button>
  );
};

export default DeckExportPptxButton;
