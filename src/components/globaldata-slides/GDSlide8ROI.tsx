import { useState, useEffect } from "react";
import GDSlideContainer from "./GDSlideContainer";
import { Clock, TrendingUp, DollarSign, ArrowRight, Zap } from "lucide-react";
import type { SlideNarrationProps } from "@/types/slideProps";

const roiPillars = [
  { 
    icon: Clock, 
    title: "Speed to Decision", 
    before: "Weeks",
    after: "Days",
    improvement: "70%",
    label: "faster decision cycles",
    desc: "Decision cycles shrink from weeks to days",
    color: "from-primary to-sky-400"
  },
  { 
    icon: TrendingUp, 
    title: "Better Growth Outcomes", 
    before: "Reactive bets",
    after: "Proactive bets",
    improvement: "2x",
    label: "higher launch success",
    desc: "Higher-quality bets, fewer failed launches",
    color: "from-sky-400 to-cyan-400"
  },
  { 
    icon: DollarSign, 
    title: "Lower Cost of Intelligence", 
    before: "Tool sprawl",
    after: "Unified platform",
    improvement: "30%",
    label: "lower TCO",
    desc: "Less duplication, fewer tools, less manual reconciliation",
    color: "from-cyan-400 to-teal-400"
  },
];

const stepTimings = [
  { step: 'intro', startPercent: 0 },
  { step: 'pillar1', startPercent: 12 },
  { step: 'pillar2', startPercent: 32 },
  { step: 'pillar3', startPercent: 52 },
  { step: 'compounding', startPercent: 72 },
];

const stepOrder = ['intro', 'pillar1', 'pillar2', 'pillar3', 'compounding'];

const GDSlide8ROI = ({
  isPlaying = false,
  isLoading = false,
  progress = 0,
  hasCompleted = false,
  onPlay,
  onPause,
  onNextSlide,
}: SlideNarrationProps) => {
  const [activeStep, setActiveStep] = useState<string>('compounding');
  const [isNarrationControlled, setIsNarrationControlled] = useState(false);

  useEffect(() => {
    if (isPlaying && progress > 0) {
      setIsNarrationControlled(true);
      const currentTiming = [...stepTimings].reverse().find(t => progress >= t.startPercent);
      if (currentTiming) {
        setActiveStep(currentTiming.step);
      }
    } else if (!isPlaying && isNarrationControlled && hasCompleted) {
      setActiveStep('compounding');
      setIsNarrationControlled(false);
    } else if (!isPlaying && !isNarrationControlled) {
      setActiveStep('compounding');
    }
  }, [isPlaying, progress, hasCompleted, isNarrationControlled]);

  const isVisible = (step: string) => {
    const activeIndex = stepOrder.indexOf(activeStep);
    const stepIndex = stepOrder.indexOf(step);
    return stepIndex <= activeIndex;
  };

  const isPillarVisible = (index: number) => isVisible(`pillar${index + 1}`);

  return (
    <GDSlideContainer
      id="gd-slide-8"
      title="The Return: Speed, Success, Savings"
      subtitle="How connected intelligence delivers measurable advantage"
      slideNumber={8}
      isPlaying={isPlaying}
      isLoading={isLoading}
      progress={progress}
      hasCompleted={hasCompleted}
      onPlay={onPlay}
      onPause={onPause}
      onNextSlide={onNextSlide}
    >
      <div className="flex flex-col gap-2 h-full max-h-full overflow-hidden">
        {/* ROI Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-3">
          {roiPillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={i}
                className={`bg-card/50 border border-border/50 rounded-xl p-4 hover:border-primary/30 transition-all duration-300 group flex flex-col ${
                  isPillarVisible(i) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Header */}
                <div className="flex items-start gap-2 mb-3">
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${pillar.color} flex items-center justify-center shrink-0`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-foreground">{pillar.title}</h3>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{pillar.desc}</p>
                  </div>
                </div>

                {/* Before/After */}
                <div className="bg-muted/30 rounded-lg p-2 mb-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-destructive line-through">{pillar.before}</span>
                    <ArrowRight className="w-3 h-3 text-primary" />
                    <span className="text-primary font-semibold">{pillar.after}</span>
                  </div>
                </div>

                {/* Improvement Metric */}
                <div className="mt-auto pt-3 border-t border-border/30 text-center">
                  <div className="flex items-baseline justify-center gap-1.5">
                    <span className="text-3xl font-bold text-primary">{pillar.improvement}</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{pillar.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compounding Message */}
        <div className={`bg-gradient-to-r from-primary/10 to-sky-500/5 border border-primary/30 rounded-xl p-4 transition-all duration-500 ${
          isVisible('compounding') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Key Message</p>
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-bold text-primary">ROI compounds</span> as organisations move up the maturity curve. The sooner you start, the faster value accumulates.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Compounding Chart */}
        <div className={`bg-card border border-border/50 rounded-xl p-3 transition-all duration-500 ${
          isVisible('compounding') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4, 5].map((stage) => (
              <div key={stage} className="flex flex-col items-center">
                <div 
                  className="w-14 bg-gradient-to-t from-primary to-sky-400 rounded-t-lg transition-all"
                  style={{ 
                    height: `${16 + stage * 16}px`,
                    opacity: stage * 0.2 + 0.2
                  }}
                />
                <span className="text-[10px] text-muted-foreground mt-1.5">Stage {stage}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 mt-2 pt-2 border-t border-border/30">
            <ArrowRight className="w-3 h-3 text-primary" />
            <span className="text-[10px] text-muted-foreground">Value compounds exponentially as maturity increases</span>
          </div>
        </div>
      </div>
    </GDSlideContainer>
  );
};

export default GDSlide8ROI;
