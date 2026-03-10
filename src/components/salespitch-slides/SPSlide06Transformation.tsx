import { SlideNarrationProps } from "@/types/slideProps";
import SPSlideContainer from "./SPSlideContainer";
import { ArrowRight, Check, X } from "lucide-react";

const SPSlide06Transformation = (props: SlideNarrationProps) => {
  return (
    <SPSlideContainer
      id="sp-slide-6"
      title="From Fragmented Insight to Connected Decisions"
      subtitle="Ferrero's transformation to close the Intelligence Gap"
      slideNumber={6}
      {...props}
    >
      <div className="flex flex-col h-full gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 min-h-0">
          {/* Before */}
          <div className="bg-card/50 border border-destructive/30 rounded-xl p-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-destructive mb-4">Before: Fragmented Intelligence</h3>
            <div className="flex gap-4 mb-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-destructive">12+</p>
                <p className="text-[10px] text-muted-foreground">weeks to decision</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-destructive">3-5</p>
                <p className="text-[10px] text-muted-foreground">sources to reconcile</p>
              </div>
            </div>
            <ul className="space-y-2">
              {["Different taxonomies", "No common language", "Manual reconciliation", "Time-consuming alignment"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <X className="w-3 h-3 text-destructive flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-destructive/70 mt-3 italic">Slow, debated decisions → Analysis paralysis</p>
          </div>

          {/* After */}
          <div className="bg-card/50 border border-green-500/30 rounded-xl p-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-green-500 mb-4">After: Connected Intelligence</h3>
            <div className="flex gap-4 mb-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-500">Days</p>
                <p className="text-[10px] text-muted-foreground">to decision</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-500">1</p>
                <p className="text-[10px] text-muted-foreground">source of truth</p>
              </div>
            </div>
            <ul className="space-y-2">
              {["Shared truth", "Single taxonomy", "Embedded workflows", "Automated orchestration"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-green-500/70 mt-3 italic">Confident, fast action → Aligned decisions</p>
          </div>
        </div>

        {/* Consolidation advantage */}
        <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 flex items-center gap-4">
          <ArrowRight className="w-6 h-6 text-primary flex-shrink-0" />
          <div>
            <h3 className="text-sm font-bold text-primary mb-1">Consolidation Advantage</h3>
            <p className="text-sm text-muted-foreground">
              Replace Nielsen, Kantar, Mintel, Euromonitor, Circana with <span className="text-foreground font-medium">one connected platform — 30% lower TCO</span>
            </p>
          </div>
        </div>
      </div>
    </SPSlideContainer>
  );
};

export default SPSlide06Transformation;
