import GDSlideContainer from "./GDSlideContainer";
import { Layers, MessageSquareWarning, Clock, ShieldAlert, AlertOctagon, ArrowRight } from "lucide-react";
import type { SlideNarrationProps } from "@/types/slideProps";

const rootCauses = [
  { 
    icon: Layers, 
    title: "First: Breadth—Signals Fragment", 
    desc: "Consumer insights in one system, POS in another",
    detail: "Incomplete shopper picture",
    badge: "BREADTH"
  },
  { 
    icon: MessageSquareWarning, 
    title: "Then: Alignment—Teams Debate Sources", 
    desc: "Which data do we trust for this launch?",
    detail: "No shared truth to act on",
    badge: "ALIGNMENT"
  },
  { 
    icon: Clock, 
    title: "Next: Speed—The Shelf Window Closes", 
    desc: "Competitor launched while you validated",
    detail: "Category share lost",
    badge: "SPEED"
  },
  { 
    icon: ShieldAlert, 
    title: "Finally: Confidence—Decisions Stall", 
    desc: "Without unified intelligence, teams hesitate",
    detail: "Gut feel replaces shopper truth",
    badge: "CONFIDENCE"
  },
];

const impacts = [
  { value: "3-5", label: "sources", desc: "to reconcile per NPD decision", dimension: "Breadth" },
  { value: "40%", label: "of NPD", desc: "misses the consumer moment", dimension: "Alignment" },
  { value: "12wks", label: "=", desc: "2 missed seasonal windows", dimension: "Speed" },
  { value: "68%", label: "of teams", desc: "lack confidence to act fast", dimension: "Confidence" },
];

const GDSlide2IntelligenceGap = ({
  isPlaying = false,
  isLoading = false,
  progress = 0,
  hasCompleted = false,
  onPlay,
  onPause,
  onNextSlide,
}: SlideNarrationProps) => {
  return (
    <GDSlideContainer
      id="gd-slide-2"
      title="The Intelligence Gap: Faster, Broader, Aligned, Confident"
      subtitle="The four dimensions separating insight from action"
      slideNumber={2}
      isPlaying={isPlaying}
      isLoading={isLoading}
      progress={progress}
      hasCompleted={hasCompleted}
      onPlay={onPlay}
      onPause={onPause}
      onNextSlide={onNextSlide}
    >
      <div className="flex flex-col gap-6 h-full">
        {/* Definition Box */}
        <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <AlertOctagon className="w-5 h-5 text-destructive" />
            <span className="text-sm font-semibold text-destructive uppercase tracking-wider">The Intelligence Gap</span>
          </div>
          <p className="text-lg font-medium text-foreground">
            The disconnect between the <span className="text-destructive">shopper signals you collect</span> and the <span className="text-destructive">confident, aligned action you take</span>—measured in speed, breadth, alignment, and confidence.
          </p>
        </div>

        {/* Root Causes Flow */}
        <div className="flex-1 grid lg:grid-cols-2 gap-6 items-start">
          {/* Left: Root Causes */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Why It Exists</p>
            <div className="space-y-3">
              {rootCauses.map((cause, i) => (
                <div 
                  key={i}
                  className="flex items-start gap-3 bg-card/50 border border-border/50 rounded-lg p-4 min-h-[84px] group hover:border-destructive/30 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-destructive/10 border border-destructive/20 flex items-center justify-center">
                      <cause.icon className="w-4 h-4 text-destructive" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground/30 hidden sm:block" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-bold text-destructive bg-destructive/10 px-1.5 py-0.5 rounded uppercase tracking-wider">{cause.badge}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-foreground">{cause.title}</h4>
                    <p className="text-xs text-muted-foreground">{cause.desc}</p>
                    <p className="text-xs text-destructive mt-1">{cause.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Quantified Impact */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Quantified Impact</p>
            <div className="space-y-3">
              {impacts.map((impact, i) => (
                <div 
                  key={i}
                  className="bg-gradient-to-r from-destructive/10 to-transparent border border-destructive/20 rounded-lg p-4 min-h-[84px] flex items-center gap-3"
                >
                  <div className="text-right min-w-[60px]">
                    <span className="text-2xl font-bold text-destructive">{impact.value}</span>
                    <span className="text-xs text-destructive ml-1">{impact.label}</span>
                  </div>
                  <div className="flex-1 border-l border-destructive/20 pl-3">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{impact.dimension}</p>
                    <p className="text-xs text-foreground">{impact.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="bg-card border-2 border-destructive/30 rounded-xl p-5 text-center">
          <p className="text-sm font-semibold text-destructive uppercase tracking-wider mb-2">Real Example</p>
          <p className="text-lg font-medium text-foreground">
            A global snack brand spent <span className="text-destructive">9 months validating</span> a 'protein + gut health' concept. By launch, <span className="text-destructive">three competitors had already captured the position</span>.
          </p>
        </div>
      </div>
    </GDSlideContainer>
  );
};

export default GDSlide2IntelligenceGap;
