import GDSlideContainer from "./GDSlideContainer";
import { Layers, MessageSquareWarning, Clock, AlertOctagon, ArrowRight } from "lucide-react";
import type { SlideNarrationProps } from "@/types/slideProps";

const rootCauses = [
  { 
    icon: Layers, 
    title: "First: Shopper Signals Fragment", 
    desc: "Consumer insights in one system, POS in another",
    detail: "No single shopper truth"
  },
  { 
    icon: MessageSquareWarning, 
    title: "Then: Teams Debate Sources", 
    desc: "Which data do we trust for this launch?",
    detail: "Innovation stalls"
  },
  { 
    icon: Clock, 
    title: "Finally: The Shelf Window Closes", 
    desc: "Competitor launched while you validated",
    detail: "Category share lost"
  },
];

const impacts = [
  { value: "12wks", label: "=", desc: "2 missed seasonal windows" },
  { value: "3-5", label: "sources", desc: "to reconcile per NPD decision" },
  { value: "40%", label: "of NPD", desc: "misses the consumer moment" },
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
      title="The Speed Gap: From Trend to Shelf—Too Slow"
      subtitle="The hidden cost between seeing an opportunity and owning it"
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
            <span className="text-sm font-semibold text-destructive uppercase tracking-wider">The Speed Gap</span>
          </div>
          <p className="text-lg font-medium text-foreground">
            The delay between <span className="text-destructive">spotting a consumer trend</span> and <span className="text-destructive">owning it on shelf</span>.
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
                  className="flex items-start gap-3 bg-card/50 border border-border/50 rounded-lg p-4 group hover:border-destructive/30 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-destructive/10 border border-destructive/20 flex items-center justify-center">
                      <cause.icon className="w-4 h-4 text-destructive" />
                    </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground/30 hidden sm:block" />
                  </div>
                  <div className="flex-1">
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
            <div className="grid gap-3">
              {impacts.map((impact, i) => (
                <div 
                  key={i}
                  className="bg-gradient-to-r from-destructive/10 to-transparent border border-destructive/20 rounded-lg p-4 flex items-center gap-4"
                >
                  <div className="text-right min-w-[80px]">
                    <span className="text-3xl font-bold text-destructive">{impact.value}</span>
                    <span className="text-sm text-destructive ml-1">{impact.label}</span>
                  </div>
                  <div className="flex-1 border-l border-destructive/20 pl-4">
                    <p className="text-sm text-foreground">{impact.desc}</p>
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
