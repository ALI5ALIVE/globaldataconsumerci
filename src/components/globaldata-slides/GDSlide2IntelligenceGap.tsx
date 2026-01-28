import { useState, useEffect } from "react";
import GDSlideContainer from "./GDSlideContainer";
import { Layers, MessageSquareWarning, Clock, ShieldAlert, AlertOctagon } from "lucide-react";
import type { SlideNarrationProps } from "@/types/slideProps";

const rootCauses = [
  { 
    icon: Layers, 
    title: "Signals Fragment", 
    desc: "Across tools, teams, and vendors",
    detail: "No single source of truth",
    badge: "BREADTH"
  },
  { 
    icon: MessageSquareWarning, 
    title: "Leaders Debate", 
    desc: "Data instead of committing to direction",
    detail: "Analysis paralysis",
    badge: "ALIGNMENT"
  },
  { 
    icon: Clock, 
    title: "Decisions Arrive Late", 
    desc: "Too late to matter",
    detail: "Missed windows",
    badge: "SPEED"
  },
  { 
    icon: ShieldAlert, 
    title: "Decisions Lack Conviction", 
    desc: "Teams hedge instead of committing",
    detail: "Diluted action",
    badge: "CONFIDENCE"
  },
];

const impacts = [
  { value: "3-5", label: "sources", desc: "conflicting data per decision", dimension: "Breadth" },
  { value: "40%", label: "launches", desc: "miss optimal windows", dimension: "Alignment" },
  { value: "12+", label: "weeks", desc: "average decision latency", dimension: "Speed" },
  { value: "68%", label: "teams", desc: "lack confidence to act decisively", dimension: "Confidence" },
];

const stepTimings = [
  { step: 'definition', startPercent: 0 },
  { step: 'cause1', startPercent: 12 },
  { step: 'cause2', startPercent: 25 },
  { step: 'cause3', startPercent: 38 },
  { step: 'cause4', startPercent: 50 },
  { step: 'impacts', startPercent: 62 },
  { step: 'bottomLine', startPercent: 85 },
];

const stepOrder = ['definition', 'cause1', 'cause2', 'cause3', 'cause4', 'impacts', 'bottomLine'];

const GDSlide2IntelligenceGap = ({
  isPlaying = false,
  isLoading = false,
  progress = 0,
  hasCompleted = false,
  onPlay,
  onPause,
  onNextSlide,
}: SlideNarrationProps) => {
  const [activeStep, setActiveStep] = useState<string>('bottomLine');
  const [isNarrationControlled, setIsNarrationControlled] = useState(false);

  useEffect(() => {
    if (isPlaying && progress > 0) {
      setIsNarrationControlled(true);
      const currentTiming = [...stepTimings].reverse().find(t => progress >= t.startPercent);
      if (currentTiming) {
        setActiveStep(currentTiming.step);
      }
    } else if (!isPlaying && isNarrationControlled && hasCompleted) {
      setActiveStep('bottomLine');
      setIsNarrationControlled(false);
    } else if (!isPlaying && !isNarrationControlled) {
      setActiveStep('bottomLine');
    }
  }, [isPlaying, progress, hasCompleted, isNarrationControlled]);

  const isVisible = (step: string) => {
    const activeIndex = stepOrder.indexOf(activeStep);
    const stepIndex = stepOrder.indexOf(step);
    return stepIndex <= activeIndex;
  };

  const isCauseVisible = (index: number) => isVisible(`cause${index + 1}`);
  const isImpactVisible = (index: number) => isVisible('impacts');

  return (
    <GDSlideContainer
      id="gd-slide-2"
      title="Where Growth and Performance Are Lost"
      subtitle="The Intelligence Gap is the delay between real-world change and enterprise action"
      slideNumber={2}
      isPlaying={isPlaying}
      isLoading={isLoading}
      progress={progress}
      hasCompleted={hasCompleted}
      onPlay={onPlay}
      onPause={onPause}
      onNextSlide={onNextSlide}
    >
      <div className="flex flex-col gap-2 h-full max-h-full overflow-hidden">
        {/* Definition Box */}
        <div className={`bg-destructive/10 border border-destructive/30 rounded-xl p-4 transition-all duration-300 ${
          isVisible('definition') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}>
          <div className="flex items-center gap-2 mb-2">
            <AlertOctagon className="w-4 h-4 text-destructive" />
            <span className="text-xs font-semibold text-destructive uppercase tracking-wider">The Intelligence Gap</span>
          </div>
          <p className="text-base font-medium text-foreground">
            The delay between <span className="text-destructive">real-world change</span> and <span className="text-destructive">enterprise action</span>.
          </p>
        </div>

        {/* Why It Exists + Quantified Impact */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-2 items-stretch">
          {/* Left: Why It Exists */}
          <div className="flex flex-col gap-1.5 h-full">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Why It Exists</p>
            {rootCauses.map((cause, i) => (
              <div 
                key={i}
                className={`flex items-start gap-2 bg-card/50 border border-border/50 rounded-lg p-2 group hover:border-destructive/30 transition-all duration-300 h-full ${
                  isCauseVisible(i) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
              >
                <div className="w-6 h-6 rounded-lg bg-destructive/10 border border-destructive/20 flex items-center justify-center flex-shrink-0">
                  <cause.icon className="w-3 h-3 text-destructive" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[8px] font-bold text-destructive bg-destructive/10 px-1 py-0.5 rounded uppercase tracking-wider">{cause.badge}</span>
                  </div>
                  <h4 className="text-xs font-semibold text-foreground leading-tight">{cause.title}</h4>
                  <p className="text-[10px] text-muted-foreground leading-tight">{cause.desc}</p>
                  <p className="text-[10px] text-destructive mt-0.5">{cause.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Quantified Impact */}
          <div className="flex flex-col gap-1.5 h-full">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Quantified Impact</p>
            {impacts.map((impact, i) => (
              <div 
                key={i}
                className={`bg-gradient-to-r from-destructive/10 to-transparent border border-destructive/20 rounded-lg p-2 flex items-start gap-2 h-full transition-all duration-300 ${
                  isImpactVisible(i) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}
              >
                <div className="text-right min-w-[50px]">
                  <span className="text-lg font-bold text-destructive">{impact.value}</span>
                  <span className="text-[10px] text-destructive ml-1">{impact.label}</span>
                </div>
                <div className="flex-1 border-l border-destructive/20 pl-2">
                  <p className="text-[8px] text-muted-foreground uppercase tracking-wider">{impact.dimension}</p>
                  <p className="text-[10px] text-foreground leading-tight">{impact.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Line */}
        <div className={`bg-card border-2 border-destructive/30 rounded-xl p-4 text-center transition-all duration-300 ${
          isVisible('bottomLine') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-xs font-semibold text-destructive uppercase tracking-wider mb-1">Bottom Line</p>
          <p className="text-base font-medium text-foreground">
            This gap is where <span className="text-destructive">growth stalls</span>, <span className="text-destructive">relevance erodes</span>, and <span className="text-destructive">performance suffers</span>.
          </p>
        </div>
      </div>
    </GDSlideContainer>
  );
};

export default GDSlide2IntelligenceGap;
