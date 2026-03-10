import { SlideNarrationProps } from "@/types/slideProps";
import SPSlideContainer from "./SPSlideContainer";
import { Database, Bot, Users } from "lucide-react";

const SPSlide21WhyGlobalData = (props: SlideNarrationProps) => {
  return (
    <SPSlideContainer
      id="sp-slide-21"
      title="Why GlobalData: The Intelligence Advantage"
      subtitle="Trusted by 8 of the top 10 FMCG companies including Nestlé, Unilever, PepsiCo, and Mondelēz"
      slideNumber={21}
      {...props}
    >
      <div className="flex flex-col justify-center h-full gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card/50 border border-primary/30 rounded-xl p-6">
            <Database className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-bold mb-2">High-Impact Data</h3>
            <p className="text-xs text-muted-foreground mb-3">Real-time, trusted, actionable</p>
            <p className="text-sm text-muted-foreground">
              Coverage of 95% of global GDP. Analyst-validated and unified into a single taxonomy. Earlier signals, clearer context, and decisions you can trust.
            </p>
          </div>
          <div className="bg-card/50 border border-accent/30 rounded-xl p-6">
            <Bot className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-lg font-bold mb-2">AI That Accelerates</h3>
            <p className="text-xs text-muted-foreground mb-3">Agentic AI that acts, not just reports</p>
            <p className="text-sm text-muted-foreground">
              Forecasting moves, surfacing answers in seconds, and guiding your teams to act when timing matters most.
            </p>
          </div>
          <div className="bg-card/50 border border-primary/30 rounded-xl p-6">
            <Users className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-bold mb-2">Domain Experts</h3>
            <p className="text-xs text-muted-foreground mb-3">Insight into impact</p>
            <p className="text-sm text-muted-foreground">
              Industry specialists, journalists, and advisors embedded in your workflows — decoding complexity and transforming intelligence into confident action.
            </p>
          </div>
        </div>
      </div>
    </SPSlideContainer>
  );
};

export default SPSlide21WhyGlobalData;
