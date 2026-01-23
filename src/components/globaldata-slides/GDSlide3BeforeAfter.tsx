import GDSlideContainer from "./GDSlideContainer";
import { Layers, MessageSquareWarning, Clock, Zap, Database, CheckCircle2, ArrowRight, AlertTriangle, TrendingUp } from "lucide-react";
import type { SlideNarrationProps } from "@/types/slideProps";

const beforeItems = [
  { icon: Layers, label: "Shopper signals scattered", desc: "POS, panels, social in silos" },
  { icon: MessageSquareWarning, label: "Conflicting shopper views", desc: "Which insight is right?" },
  { icon: Clock, label: "Manual trend validation", desc: "Weeks to align on the opportunity" },
  { icon: AlertTriangle, label: "Competitor launched first", desc: "They saw the same trend—faster" },
];

const afterItems = [
  { icon: Database, label: "One shopper truth", desc: "Unified across touchpoints" },
  { icon: CheckCircle2, label: "Trend to concept in days", desc: "Not weeks or months" },
  { icon: Zap, label: "Validated before commit", desc: "Test with real shoppers first" },
  { icon: TrendingUp, label: "First to shelf", desc: "Own the category moment" },
];

const metrics = [
  { before: "12 weeks", after: "3 days", label: "Validate a flavour concept", improvement: "Before competitor locks shelf" },
  { before: "Gut feel", after: "Shopper-tested", label: "Launch confidence", improvement: "2x success rate" },
  { before: "Failed SKUs", after: "Lean pipeline", label: "Innovation waste", improvement: "30% less unsold inventory" },
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
      title="One Shopper Truth. Faster Wins."
      subtitle="What changes when you see the full journey—and act on it first"
      slideNumber={3}
      isPlaying={isPlaying}
      isLoading={isLoading}
      progress={progress}
      hasCompleted={hasCompleted}
      onPlay={onPlay}
      onPause={onPause}
      onNextSlide={onNextSlide}
    >
      <div className="flex flex-col gap-4 h-full">
        {/* Main Before/After Grid */}
        <div className="grid lg:grid-cols-2 gap-4 flex-1">
          {/* Before Column */}
          <div className="relative">
            <div className="absolute -top-2.5 left-3 px-2 py-0.5 bg-destructive/20 border border-destructive/30 rounded text-[10px] font-semibold text-destructive uppercase tracking-wider z-10">
              Before: The Intelligence Gap
            </div>
            <div className="bg-card/30 border border-destructive/20 rounded-xl p-4 pt-6 h-full">
              <div className="grid gap-3">
                {beforeItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-lg bg-destructive/10 border border-destructive/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-destructive" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-foreground">{item.label}</div>
                      <div className="text-xs text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Warning indicators */}
              <div className="mt-4 pt-4 border-t border-destructive/20 grid grid-cols-2 gap-2">
                <div className="bg-destructive/10 rounded-lg p-2 text-center">
                  <p className="text-xs font-medium text-destructive">12+ weeks</p>
                  <p className="text-[10px] text-muted-foreground">to decision</p>
                </div>
                <div className="bg-destructive/10 rounded-lg p-2 text-center">
                  <p className="text-xs font-medium text-destructive">3-5 sources</p>
                  <p className="text-[10px] text-muted-foreground">to reconcile</p>
                </div>
              </div>
            </div>
          </div>

          {/* Transformation Arrow - Center */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-12 h-12 rounded-full bg-primary border-2 border-sky-400 shadow-lg shadow-primary/30 flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* After Column */}
          <div className="relative">
            <div className="absolute -top-2.5 left-3 px-2 py-0.5 bg-primary/20 border border-primary/30 rounded text-[10px] font-semibold text-primary uppercase tracking-wider z-10">
              After: Connected Intelligence
            </div>
            <div className="bg-card/30 border border-primary/20 rounded-xl p-4 pt-6 h-full">
              <div className="grid gap-3">
                {afterItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-foreground">{item.label}</div>
                      <div className="text-xs text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Success indicators */}
              <div className="mt-4 pt-4 border-t border-primary/20 grid grid-cols-2 gap-2">
                <div className="bg-primary/10 rounded-lg p-2 text-center">
                  <p className="text-xs font-medium text-primary">Days</p>
                  <p className="text-[10px] text-muted-foreground">to decision</p>
                </div>
                <div className="bg-primary/10 rounded-lg p-2 text-center">
                  <p className="text-xs font-medium text-primary">1 source</p>
                  <p className="text-[10px] text-muted-foreground">of truth</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Banner */}
        <div className="bg-card border border-border/50 rounded-xl p-4">
          <div className="grid grid-cols-3 gap-4">
            {metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-xs text-destructive line-through">{metric.before}</span>
                  <ArrowRight className="w-3 h-3 text-primary" />
                  <span className="text-xs text-primary font-semibold">{metric.after}</span>
                </div>
                <p className="text-xs text-muted-foreground">{metric.label}</p>
                <p className="text-sm font-bold text-primary mt-1">{metric.improvement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GDSlideContainer>
  );
};

export default GDSlide3BeforeAfter;
