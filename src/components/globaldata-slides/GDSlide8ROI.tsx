import GDSlideContainer from "./GDSlideContainer";
import { Clock, TrendingUp, DollarSign, ArrowRight, Zap } from "lucide-react";
import type { SlideNarrationProps } from "@/types/slideProps";

const roiPillars = [
  { 
    icon: Clock, 
    title: "Speed to Shelf", 
    before: "Months to validate",
    after: "Days to act",
    improvement: "70%",
    label: "faster from trend to launch",
    desc: "Respond to a competitive launch in days, not months",
    color: "from-primary to-sky-400"
  },
  { 
    icon: TrendingUp, 
    title: "Fewer Failed SKUs", 
    before: "Gut-feel launches",
    after: "Shopper-validated",
    improvement: "2x",
    label: "higher launch success",
    desc: "Fewer products that sit on shelf; more products shoppers reach for",
    color: "from-sky-400 to-cyan-400"
  },
  { 
    icon: DollarSign, 
    title: "Leaner Innovation", 
    before: "Wasted R&D",
    after: "Focused pipeline",
    improvement: "30%",
    label: "less unsold inventory",
    desc: "Less wasted R&D on concepts that don't resonate with shoppers",
    color: "from-cyan-400 to-teal-400"
  },
];

const GDSlide8ROI = ({
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
      id="gd-slide-8"
      title="Fewer Failed SKUs. Faster Wins."
      subtitle="Time-to-shelf. Launch success. Innovation efficiency. Measurable in 6 months."
      slideNumber={8}
      isPlaying={isPlaying}
      isLoading={isLoading}
      progress={progress}
      hasCompleted={hasCompleted}
      onPlay={onPlay}
      onPause={onPause}
      onNextSlide={onNextSlide}
    >
      <div className="flex flex-col gap-6 h-full">
        {/* ROI Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-5 flex-1">
          {roiPillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={i}
                className="bg-card/50 border border-border/50 rounded-xl p-5 hover:border-primary/30 transition-all group flex flex-col"
              >
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className={`w-11 h-11 rounded-lg bg-gradient-to-br ${pillar.color} flex items-center justify-center shrink-0`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{pillar.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{pillar.desc}</p>
                  </div>
                </div>

                {/* Before/After */}
                <div className="bg-muted/30 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-destructive line-through">{pillar.before}</span>
                    <ArrowRight className="w-4 h-4 text-primary" />
                    <span className="text-primary font-semibold">{pillar.after}</span>
                  </div>
                </div>

                {/* Improvement Metric */}
                <div className="mt-auto pt-4 border-t border-border/30 text-center">
                  <div className="flex items-baseline justify-center gap-1.5">
                    <span className="text-4xl font-bold text-primary">{pillar.improvement}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{pillar.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compounding Message */}
        <div className="bg-gradient-to-r from-primary/10 to-sky-500/5 border border-primary/30 rounded-xl p-5">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">For Consumer Brands</p>
              <p className="text-base text-foreground leading-relaxed">
                <span className="font-bold text-primary">Every stage up</span> means faster time-to-shelf, fewer failed launches, and more shelf space won. The sooner you start, the more category moments you own.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Compounding Chart */}
        <div className="bg-card border border-border/50 rounded-xl p-4">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4, 5].map((stage) => (
              <div key={stage} className="flex flex-col items-center">
                <div 
                  className="w-16 bg-gradient-to-t from-primary to-sky-400 rounded-t-lg transition-all"
                  style={{ 
                    height: `${20 + stage * 20}px`,
                    opacity: stage * 0.2 + 0.2
                  }}
                />
                <span className="text-xs text-muted-foreground mt-2">Stage {stage}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-border/30">
            <ArrowRight className="w-4 h-4 text-primary" />
            <span className="text-xs text-muted-foreground">Value compounds exponentially as maturity increases</span>
          </div>
        </div>
      </div>
    </GDSlideContainer>
  );
};

export default GDSlide8ROI;
