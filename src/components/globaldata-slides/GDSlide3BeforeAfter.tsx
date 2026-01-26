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

const GDSlide3BeforeAfter = ({
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
      <div className="flex flex-col gap-1.5 h-full max-h-full overflow-hidden">
        {/* Main Before/After Grid */}
        <div className="grid lg:grid-cols-2 gap-2">
          {/* Before Column */}
          <div className="bg-card/30 border border-destructive/20 rounded-xl p-2.5 flex flex-col">
            {/* Label inside card */}
            <div className="inline-flex self-start px-2 py-0.5 mb-1.5 bg-destructive/20 border border-destructive/30 rounded text-[10px] font-semibold text-destructive uppercase tracking-wider">
              Before: Fragmented Intelligence
            </div>
            
            {/* SVG Illustration */}
            <div className="h-14 mb-0.5">
              <GDBeforeSilosIllustration />
            </div>

            {/* Icon list (condensed 2-column grid) */}
            <div className="grid grid-cols-2 gap-1">
              {beforeItems.map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 group">
                  <div className="w-5 h-5 rounded-md bg-destructive/10 border border-destructive/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-2.5 h-2.5 text-destructive" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-semibold text-foreground truncate">{item.label}</div>
                    <div className="text-[9px] text-muted-foreground truncate">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Warning indicators */}
            <div className="mt-1 pt-1 border-t border-destructive/20 grid grid-cols-2 gap-1">
              <div className="bg-destructive/10 rounded-lg p-1 text-center">
                <p className="text-[11px] font-medium text-destructive">12+ weeks</p>
                <p className="text-[9px] text-muted-foreground">to decision</p>
              </div>
              <div className="bg-destructive/10 rounded-lg p-1 text-center">
                <p className="text-[11px] font-medium text-destructive">3-5 sources</p>
                <p className="text-[9px] text-muted-foreground">to reconcile</p>
              </div>
            </div>
          </div>

          {/* Transformation Arrow - Center */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-10 h-10 rounded-full bg-primary border-2 border-sky-400 shadow-lg shadow-primary/30 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* After Column */}
          <div className="bg-card/30 border border-primary/20 rounded-xl p-2.5 flex flex-col">
            {/* Label inside card */}
            <div className="inline-flex self-start px-2 py-0.5 mb-1.5 bg-primary/20 border border-primary/30 rounded text-[10px] font-semibold text-primary uppercase tracking-wider">
              After: Connected Intelligence
            </div>
            
            {/* SVG Illustration */}
            <div className="h-14 mb-0.5">
              <GDAfterConnectedIllustration />
            </div>

            {/* Icon list (condensed 2-column grid) */}
            <div className="grid grid-cols-2 gap-1">
              {afterItems.map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 group">
                  <div className="w-5 h-5 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-2.5 h-2.5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-semibold text-foreground truncate">{item.label}</div>
                    <div className="text-[9px] text-muted-foreground truncate">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Success indicators */}
            <div className="mt-1 pt-1 border-t border-primary/20 grid grid-cols-2 gap-1">
              <div className="bg-primary/10 rounded-lg p-1 text-center">
                <p className="text-[11px] font-medium text-primary">Days</p>
                <p className="text-[9px] text-muted-foreground">to decision</p>
              </div>
              <div className="bg-primary/10 rounded-lg p-1 text-center">
                <p className="text-[11px] font-medium text-primary">1 source</p>
                <p className="text-[9px] text-muted-foreground">of truth</p>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Banner */}
        <div className="bg-card border border-border/50 rounded-xl p-1.5">
          <div className="grid grid-cols-3 gap-1">
            {metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <span className="text-[10px] text-destructive line-through">{metric.before}</span>
                  <ArrowRight className="w-2.5 h-2.5 text-primary" />
                  <span className="text-[10px] text-primary font-semibold">{metric.after}</span>
                </div>
                <p className="text-[10px] text-muted-foreground">{metric.label}</p>
                <p className="text-xs font-bold text-primary mt-0.5">{metric.improvement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GDSlideContainer>
  );
};

export default GDSlide3BeforeAfter;
