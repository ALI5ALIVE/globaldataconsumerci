import { useState, useEffect } from "react";
import GDSlideContainer from "./GDSlideContainer";
import { Layers, MessageSquareWarning, Clock, Zap, Database, CheckCircle2, ArrowRight, TrendingUp } from "lucide-react";
import type { SlideNarrationProps } from "@/types/slideProps";
import GDBeforeSilosIllustration from "./GDBeforeSilosIllustration";
import GDAfterConnectedIllustration from "./GDAfterConnectedIllustration";

const beforeItems = [
  { icon: Layers, label: "Siloed insights", desc: "Fragmented across tools" },
  { icon: MessageSquareWarning, label: "Different taxonomies", desc: "No common language" },
  { icon: Clock, label: "Manual reconciliation", desc: "Time-consuming alignment" },
  { icon: Zap, label: "Slow, debated decisions", desc: "Analysis paralysis" },
];

const afterItems = [
  { icon: Database, label: "Unified system", desc: "One connected platform" },
  { icon: CheckCircle2, label: "Shared truth", desc: "Single taxonomy" },
  { icon: Zap, label: "Embedded workflows", desc: "Automated orchestration" },
  { icon: TrendingUp, label: "Confident, fast action", desc: "Aligned decisions" },
];

const metrics = [
  { before: "Weeks", after: "Days", label: "Decision cycles", improvement: "70% faster" },
  { before: "Reactive", after: "Proactive", label: "Launch approach", improvement: "2x success" },
  { before: "Sprawl", after: "Unified", label: "Tool landscape", improvement: "30% lower TCO" },
];

const stepTimings = [
  { step: 'intro', startPercent: 0 },
  { step: 'before', startPercent: 12 },
  { step: 'after', startPercent: 45 },
  { step: 'metrics', startPercent: 72 },
];

const stepOrder = ['intro', 'before', 'after', 'metrics'];

const GDSlide3BeforeAfter = ({
  isPlaying = false,
  isLoading = false,
  progress = 0,
  hasCompleted = false,
  onPlay,
  onPause,
  onNextSlide,
}: SlideNarrationProps) => {
  const [activeStep, setActiveStep] = useState<string>('metrics');
  const [isNarrationControlled, setIsNarrationControlled] = useState(false);

  useEffect(() => {
    if (isPlaying && progress > 0) {
      setIsNarrationControlled(true);
      const currentTiming = [...stepTimings].reverse().find(t => progress >= t.startPercent);
      if (currentTiming) {
        setActiveStep(currentTiming.step);
      }
    } else if (!isPlaying && isNarrationControlled && hasCompleted) {
      setActiveStep('metrics');
      setIsNarrationControlled(false);
    } else if (!isPlaying && !isNarrationControlled) {
      setActiveStep('metrics');
    }
  }, [isPlaying, progress, hasCompleted, isNarrationControlled]);

  const isVisible = (step: string) => {
    const activeIndex = stepOrder.indexOf(activeStep);
    const stepIndex = stepOrder.indexOf(step);
    return stepIndex <= activeIndex;
  };

  return (
    <GDSlideContainer
      id="gd-slide-3"
      title="From Fragmented Insight to Connected Decisions"
      subtitle="The transformation that closes the Intelligence Gap"
      slideNumber={3}
      isPlaying={isPlaying}
      isLoading={isLoading}
      progress={progress}
      hasCompleted={hasCompleted}
      onPlay={onPlay}
      onPause={onPause}
      onNextSlide={onNextSlide}
    >
      <div className="flex flex-col gap-4 h-full max-h-full overflow-hidden">
        {/* Main Before/After Grid */}
        <div className="grid lg:grid-cols-2 gap-4 flex-1">
          {/* Before Column */}
          <div className={`bg-card/30 border border-destructive/20 rounded-xl p-4 flex flex-col transition-all duration-500 ${
            isVisible('before') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            {/* Label inside card */}
            <div className="inline-flex self-start px-3 py-1 mb-2 bg-destructive/20 border border-destructive/30 rounded text-xs font-semibold text-destructive uppercase tracking-wider">
              Before: Fragmented Intelligence
            </div>
            
            {/* SVG Illustration */}
            <div className="h-32 mb-2">
              <GDBeforeSilosIllustration />
            </div>

            {/* Icon list (condensed 2-column grid) */}
            <div className="grid grid-cols-2 gap-2">
              {beforeItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2 group">
                  <div className="w-8 h-8 rounded-md bg-destructive/10 border border-destructive/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-destructive" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-foreground truncate">{item.label}</div>
                    <div className="text-xs text-muted-foreground truncate">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Warning indicators */}
            <div className="mt-3 pt-3 border-t border-destructive/20 grid grid-cols-2 gap-2">
              <div className="bg-destructive/10 rounded-lg p-2 text-center">
                <p className="text-sm font-medium text-destructive">12+ weeks</p>
                <p className="text-xs text-muted-foreground">to decision</p>
              </div>
              <div className="bg-destructive/10 rounded-lg p-2 text-center">
                <p className="text-sm font-medium text-destructive">3-5 sources</p>
                <p className="text-xs text-muted-foreground">to reconcile</p>
              </div>
            </div>
          </div>

          {/* Transformation Arrow - Center */}
          <div className={`hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-300 ${
            isVisible('after') ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}>
            <div className="w-10 h-10 rounded-full bg-primary border-2 border-sky-400 shadow-lg shadow-primary/30 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* After Column */}
          <div className={`bg-card/30 border border-primary/20 rounded-xl p-4 flex flex-col transition-all duration-500 ${
            isVisible('after') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            {/* Label inside card */}
            <div className="inline-flex self-start px-3 py-1 mb-2 bg-primary/20 border border-primary/30 rounded text-xs font-semibold text-primary uppercase tracking-wider">
              After: Connected Intelligence
            </div>
            
            {/* SVG Illustration */}
            <div className="h-32 mb-2">
              <GDAfterConnectedIllustration />
            </div>

            {/* Icon list (condensed 2-column grid) */}
            <div className="grid grid-cols-2 gap-2">
              {afterItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2 group">
                  <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-foreground truncate">{item.label}</div>
                    <div className="text-xs text-muted-foreground truncate">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Success indicators */}
            <div className="mt-3 pt-3 border-t border-primary/20 grid grid-cols-2 gap-2">
              <div className="bg-primary/10 rounded-lg p-2 text-center">
                <p className="text-sm font-medium text-primary">Days</p>
                <p className="text-xs text-muted-foreground">to decision</p>
              </div>
              <div className="bg-primary/10 rounded-lg p-2 text-center">
                <p className="text-sm font-medium text-primary">1 source</p>
                <p className="text-xs text-muted-foreground">of truth</p>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Banner */}
        <div className={`bg-card border border-border/50 rounded-xl p-3 transition-all duration-500 ${
          isVisible('metrics') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="grid grid-cols-3 gap-3">
            {metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1.5">
                  <span className="text-sm text-destructive line-through">{metric.before}</span>
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-semibold">{metric.after}</span>
                </div>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
                <p className="text-base font-bold text-primary mt-1">{metric.improvement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GDSlideContainer>
  );
};

export default GDSlide3BeforeAfter;
