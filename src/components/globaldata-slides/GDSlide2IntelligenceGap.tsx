import GDSlideContainer from "./GDSlideContainer";
import { Layers, MessageSquareWarning, Clock, ShieldAlert, AlertOctagon } from "lucide-react";
import type { SlideNarrationProps } from "@/types/slideProps";

const swimLaneColors = [
  { bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-500", gradient: "from-amber-500/10" },
  { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-500", gradient: "from-purple-500/10" },
  { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-500", gradient: "from-cyan-500/10" },
  { bg: "bg-red-500/10", border: "border-red-500/30", text: "text-red-500", gradient: "from-red-500/10" },
];

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
      title="Where Growth and Performance Are Lost"
      subtitle="The Intelligence Gap is the delay between real-world change and enterprise action"
      slideNumber={3}
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
        <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-3">
          <div className="flex items-center gap-2 mb-1">
            <AlertOctagon className="w-4 h-4 text-destructive" />
            <span className="text-xs font-semibold text-destructive uppercase tracking-wider">The Intelligence Gap</span>
          </div>
          <p className="text-sm font-medium text-foreground">
            The delay between <span className="text-destructive">real-world change</span> and <span className="text-destructive">enterprise action</span>.
          </p>
        </div>

        {/* Why It Exists + Quantified Impact */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-2 items-stretch">
          {/* Left: Why It Exists */}
          <div className="flex flex-col gap-1.5 h-full">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Why It Exists</p>
            {rootCauses.map((cause, i) => {
              const colors = swimLaneColors[i];
              return (
                <div 
                  key={i}
                  className={`flex flex-col items-center justify-center text-center ${colors.bg} border ${colors.border} rounded-lg p-2 group hover:border-opacity-50 transition-all duration-300 h-full`}
                >
                  <div className={`w-6 h-6 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center mb-1`}>
                    <cause.icon className={`w-3 h-3 ${colors.text}`} />
                  </div>
                  <span className={`text-[9px] font-bold ${colors.text} ${colors.bg} px-1.5 py-0.5 rounded uppercase tracking-wider mb-0.5`}>{cause.badge}</span>
                  <h4 className="text-sm font-semibold text-foreground leading-tight">{cause.title}</h4>
                  <p className="text-xs text-muted-foreground leading-tight mt-0.5">{cause.desc}</p>
                  <p className={`text-xs ${colors.text} mt-0.5`}>{cause.detail}</p>
                </div>
              );
            })}
          </div>

          {/* Right: Quantified Impact */}
          <div className="flex flex-col gap-1.5 h-full">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Quantified Impact</p>
            {impacts.map((impact, i) => {
              const colors = swimLaneColors[i];
              return (
                <div 
                  key={i}
                  className={`bg-gradient-to-r ${colors.gradient} to-transparent border ${colors.border} rounded-lg p-2 flex flex-col items-center justify-center text-center h-full`}
                >
                  <p className={`text-[9px] ${colors.text} uppercase tracking-wider mb-0.5`}>{impact.dimension}</p>
                  <div className="flex items-baseline justify-center">
                    <span className={`text-lg font-bold ${colors.text}`}>{impact.value}</span>
                    <span className={`text-xs ${colors.text} ml-1`}>{impact.label}</span>
                  </div>
                  <p className="text-xs text-foreground leading-tight mt-0.5">{impact.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Line */}
        <div className="bg-card border-2 border-destructive/30 rounded-xl p-3 text-center">
          <p className="text-xs font-semibold text-destructive uppercase tracking-wider mb-0.5">Bottom Line</p>
          <p className="text-sm font-medium text-foreground">
            This gap is where <span className="text-destructive">growth stalls</span>, <span className="text-destructive">relevance erodes</span>, and <span className="text-destructive">performance suffers</span>.
          </p>
        </div>
      </div>
    </GDSlideContainer>
  );
};

export default GDSlide2IntelligenceGap;
