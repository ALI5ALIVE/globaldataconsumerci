import { useState, useEffect } from "react";
import GDSlideContainer from "./GDSlideContainer";
import { TrendingDown, Clock, Users, AlertTriangle, Zap } from "lucide-react";
import type { SlideNarrationProps } from "@/types/slideProps";

const painPoints = [
  { 
    icon: TrendingDown, 
    title: "Market Velocity", 
    desc: "Consumer behaviour shifts faster than insight cycles can track",
    stat: "3x",
    statLabel: "faster shifts"
  },
  { 
    icon: Clock, 
    title: "Shrinking Windows", 
    desc: "Innovation and GTM windows are shorter and less forgiving",
    stat: "40%",
    statLabel: "narrower windows"
  },
  { 
    icon: Users, 
    title: "Asymmetric Competition", 
    desc: "Competitors scale faster with fewer assets",
    stat: "2x",
    statLabel: "faster rivals"
  },
];

const stepTimings = [
  { step: 'intro', startPercent: 0 },
  { step: 'painPoint1', startPercent: 10 },
  { step: 'painPoint2', startPercent: 22 },
  { step: 'painPoint3', startPercent: 34 },
  { step: 'paradox', startPercent: 46 },
  { step: 'realProblem', startPercent: 62 },
  { step: 'callout', startPercent: 82 },
];

const stepOrder = ['intro', 'painPoint1', 'painPoint2', 'painPoint3', 'paradox', 'realProblem', 'callout'];

const GDSlide1GrowthReality = ({
  isPlaying = false,
  isLoading = false,
  progress = 0,
  hasCompleted = false,
  onPlay,
  onPause,
  onNextSlide,
}: SlideNarrationProps) => {
  const [activeStep, setActiveStep] = useState<string>('callout');
  const [isNarrationControlled, setIsNarrationControlled] = useState(false);

  useEffect(() => {
    if (isPlaying && progress > 0) {
      setIsNarrationControlled(true);
      const currentTiming = [...stepTimings].reverse().find(t => progress >= t.startPercent);
      if (currentTiming) {
        setActiveStep(currentTiming.step);
      }
    } else if (!isPlaying && isNarrationControlled && hasCompleted) {
      setActiveStep('callout');
      setIsNarrationControlled(false);
    } else if (!isPlaying && !isNarrationControlled) {
      setActiveStep('callout');
    }
  }, [isPlaying, progress, hasCompleted, isNarrationControlled]);

  const isVisible = (step: string) => {
    const activeIndex = stepOrder.indexOf(activeStep);
    const stepIndex = stepOrder.indexOf(step);
    return stepIndex <= activeIndex;
  };

  return (
    <GDSlideContainer
      id="gd-slide-1"
      title="The Market Rewards Speed and Punishes Delay"
      subtitle="Why the Intelligence Gap is widening for consumer brands"
      slideNumber={1}
      isPlaying={isPlaying}
      isLoading={isLoading}
      progress={progress}
      hasCompleted={hasCompleted}
      onPlay={onPlay}
      onPause={onPause}
      onNextSlide={onNextSlide}
    >
      <div className="flex flex-col gap-2 h-full max-h-full overflow-hidden">
        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-3 gap-3">
          {painPoints.map((point, i) => {
            const stepKey = `painPoint${i + 1}`;
            return (
              <div 
                key={i}
                className={`bg-card/50 border border-border/50 rounded-xl p-4 hover:border-destructive/30 transition-all duration-300 group ${
                  isVisible(stepKey) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-destructive/10 border border-destructive/20 flex items-center justify-center">
                    <point.icon className="w-4 h-4 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-foreground">{point.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
                <div className="flex items-baseline gap-1.5 pt-2 border-t border-border/30">
                  <span className="text-xl font-bold text-destructive">{point.stat}</span>
                  <span className="text-xs text-muted-foreground">{point.statLabel}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Paradox */}
        <div className="grid lg:grid-cols-2 gap-2 items-center">
          <div className={`bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/30 rounded-xl p-5 transition-all duration-300 ${
            isVisible('paradox') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}>
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">The Paradox</span>
            </div>
            <p className="text-base font-medium text-foreground leading-relaxed mb-3">
              Organisations have <span className="text-amber-400">more insight than ever</span>, yet <span className="text-amber-400">less confidence</span>.
            </p>
            <p className="text-xs text-muted-foreground">
              Data abundance hasn't created clarity. It's created noise, debate, and delayed decisions.
            </p>
          </div>

          <div className={`bg-gradient-to-br from-destructive/10 to-red-500/5 border border-destructive/30 rounded-xl p-5 transition-all duration-300 ${
            isVisible('realProblem') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}>
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-destructive" />
              <span className="text-xs font-semibold text-destructive uppercase tracking-wider">The Real Problem</span>
            </div>
            <p className="text-base font-medium text-foreground leading-relaxed mb-3">
              Insight exists, but it doesn't <span className="text-destructive">move the organisation together</span>.
            </p>
            <p className="text-xs text-muted-foreground">
              The problem isn't data scarcity. It's data fragmentation and misalignment.
            </p>
          </div>
        </div>

        {/* Bottom callout */}
        <div className={`bg-card border border-border/50 rounded-lg p-3 text-center transition-all duration-300 ${
          isVisible('callout') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-xs text-foreground">
            <span className="font-semibold text-primary">Category leaders</span> don't just have better data — they have <span className="font-semibold text-primary">connected intelligence</span> that enables faster, unified action.
          </p>
        </div>
      </div>
    </GDSlideContainer>
  );
};

export default GDSlide1GrowthReality;
