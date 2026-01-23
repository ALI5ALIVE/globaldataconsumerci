import GDSlideContainer from "./GDSlideContainer";
import { Layers, MessageSquareWarning, Clock, Zap, Database, CheckCircle2, ArrowRight, TrendingUp, XCircle } from "lucide-react";
import type { SlideNarrationProps } from "@/types/slideProps";
import ConnectedIntelligenceWheel from "./ConnectedIntelligenceWheel";

const beforeItems = [
  { icon: Layers, label: "Siloed Insights", desc: "Fragmented across tools" },
  { icon: MessageSquareWarning, label: "Different Taxonomies", desc: "No common language" },
  { icon: Clock, label: "Manual Reconciliation", desc: "Time-consuming alignment" },
  { icon: Zap, label: "Slow Decisions", desc: "Debated, not decided" },
];

const afterItems = [
  { icon: Database, label: "Unified System", desc: "One connected platform" },
  { icon: CheckCircle2, label: "Shared Truth", desc: "Single taxonomy" },
  { icon: Zap, label: "Embedded Workflows", desc: "Automated orchestration" },
  { icon: TrendingUp, label: "Confident Action", desc: "Aligned decisions" },
];

const metrics = [
  { before: "Weeks", after: "Days", label: "Decision cycles", improvement: "70% faster" },
  { before: "Reactive", after: "Proactive", label: "Launch approach", improvement: "2× success" },
  { before: "Sprawl", after: "Unified", label: "Tool landscape", improvement: "30% lower TCO" },
];

const replaces = [
  "Tool sprawl across vendors",
  "Manual reconciliation",
  "Conflicting answers",
];

const notThis = [
  "Another dataset",
  "Another dashboard",
  "Another point solution",
];

const GDSlide3Transformation = ({
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
      title="Connected Intelligence for Consumer Brands"
      subtitle="From Fragmented Insight to Aligned Action"
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
        {/* Value Proposition Banner */}
        <div className="bg-gradient-to-r from-primary/10 to-sky-500/5 border border-primary/30 rounded-lg p-3">
          <p className="text-sm md:text-base font-medium text-foreground leading-relaxed text-center">
            A unified solution connecting <span className="text-primary font-bold">market, consumer, competitor, innovation, and commercial intelligence</span> into one trusted system.
          </p>
        </div>

        {/* Before/After Comparison */}
        <div className="grid md:grid-cols-2 gap-3 relative">
          {/* Before Column */}
          <div className="bg-card/50 border border-destructive/20 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-destructive" />
              <p className="text-xs font-semibold text-destructive uppercase tracking-wider">Before</p>
            </div>
            <div className="space-y-2">
              {beforeItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-destructive/70 shrink-0" />
                    <div>
                      <span className="text-xs font-medium text-foreground">{item.label}</span>
                      <span className="text-xs text-muted-foreground ml-1">– {item.desc}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-2 mt-3">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-destructive/10 text-destructive border border-destructive/20">12+ weeks</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-destructive/10 text-destructive border border-destructive/20">3-5 sources</span>
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* After Column */}
          <div className="bg-card/50 border border-primary/30 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <p className="text-xs font-semibold text-primary uppercase tracking-wider">After</p>
            </div>
            <div className="space-y-2">
              {afterItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-primary shrink-0" />
                    <div>
                      <span className="text-xs font-medium text-foreground">{item.label}</span>
                      <span className="text-xs text-muted-foreground ml-1">– {item.desc}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-2 mt-3">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/30">Days</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/30">1 source of truth</span>
            </div>
          </div>
        </div>

        {/* Intelligence Wheel + Replaces/Not This */}
        <div className="grid lg:grid-cols-2 gap-4 flex-1 min-h-0">
          {/* Connected Intelligence Wheel */}
          <div className="flex items-center justify-center">
            <div className="transform scale-[0.7] origin-center">
              <ConnectedIntelligenceWheel />
            </div>
          </div>

          {/* What it replaces / What it is NOT */}
          <div className="space-y-3">
            {/* What it replaces */}
            <div className="bg-card/50 border border-border/50 rounded-lg p-3">
              <p className="text-[10px] font-semibold text-primary uppercase tracking-wider mb-2">What It Replaces</p>
              <div className="space-y-1.5">
                {replaces.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="text-xs text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What it is NOT */}
            <div className="bg-card/50 border border-destructive/20 rounded-lg p-3">
              <p className="text-[10px] font-semibold text-destructive uppercase tracking-wider mb-2">What It Is NOT</p>
              <div className="space-y-1.5">
                {notThis.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <XCircle className="w-3.5 h-3.5 text-destructive shrink-0" />
                    <span className="text-xs text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Banner */}
        <div className="grid grid-cols-3 gap-3">
          {metrics.map((metric, i) => (
            <div key={i} className="bg-card/50 border border-border/50 rounded-lg p-2 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-[10px] text-destructive line-through">{metric.before}</span>
                <ArrowRight className="w-3 h-3 text-primary" />
                <span className="text-[10px] text-primary font-semibold">{metric.after}</span>
              </div>
              <p className="text-[10px] text-muted-foreground">{metric.label}</p>
              <p className="text-xs font-bold text-primary">{metric.improvement}</p>
            </div>
          ))}
        </div>
      </div>
    </GDSlideContainer>
  );
};

export default GDSlide3Transformation;
