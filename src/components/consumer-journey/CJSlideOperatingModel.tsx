import { ArrowRight, RefreshCw, Diamond, ArrowLeftRight, Target, Zap } from "lucide-react";
import GDSlideContainer from "@/components/globaldata-slides/GDSlideContainer";
import type { SlideNarrationProps } from "@/types/slideProps";

const canvasCards = [
  { icon: ArrowRight, title: "Workflow Impact", before: "Manual data pulls from 5+ tools", after: "One-click connected dashboards", description: "How daily work changes" },
  { icon: RefreshCw, title: "Role Evolution", before: "Analysts as report factories", after: "Strategists driving growth", description: "Who does what differently" },
  { icon: Diamond, title: "Decision Rights", before: "HiPPO-driven, gut-feel calls", after: "Data-backed at every level", description: "Where authority shifts" },
  { icon: ArrowLeftRight, title: "Information Flow", before: "Siloed emails & slide decks", after: "Real-time shared intelligence", description: "What data moves where" },
  { icon: Target, title: "Success Metrics", before: "Activity & output tracking", after: "Outcome & impact measurement", description: "How outcomes are measured" },
  { icon: Zap, title: "Change Velocity", before: "Quarterly review cycles", after: "Continuous optimisation loops", description: "Speed of transformation" },
];

const CJSlideOperatingModel = (props: SlideNarrationProps) => {
  return (
    <GDSlideContainer
      id="cj-slide-operating-model"
      title="Your Operating Model Transformed"
      subtitle="The Operating Model Canvas"
      slideNumber={8}
      {...props}
    >
      <div className="h-full flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl mx-auto">
          {canvasCards.map((card) => (
            <div
              key={card.title}
              className="group border border-border/50 rounded-xl p-5 sm:p-6 bg-card/30 hover:bg-card/60 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors shrink-0">
                  <card.icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-foreground leading-tight">{card.title}</h3>
                  <p className="text-xs text-muted-foreground">{card.description}</p>
                </div>
              </div>
              <div className="space-y-1.5 mt-3 pt-3 border-t border-border/30">
                <div className="flex items-start gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-destructive/80 shrink-0 mt-0.5 w-12">Before</span>
                  <p className="text-xs text-muted-foreground line-through decoration-destructive/40">{card.before}</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary shrink-0 mt-0.5 w-12">After</span>
                  <p className="text-xs text-foreground font-medium">{card.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </GDSlideContainer>
  );
};

export default CJSlideOperatingModel;
