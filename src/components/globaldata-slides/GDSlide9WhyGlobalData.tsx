import GDSlideContainer from "./GDSlideContainer";
import ThreePillarDiagram from "./ThreePillarDiagram";
import { Zap, TrendingUp, Trophy, Database, Sparkles, Users } from "lucide-react";
import type { SlideNarrationProps } from "@/types/slideProps";

const resultItems = [
  { text: "Faster time to market", icon: Zap },
  { text: "Stronger consumer connection", icon: TrendingUp },
  { text: "Consistent category gains", icon: Trophy },
];

const callouts = [
  {
    icon: Database,
    title: "High-impact data — real-time, trusted, actionable",
    desc: "Coverage of 95% of global GDP, analyst-validated and unified into a single taxonomy. Earlier signals, clearer context, and decisions you can trust.",
    position: "top",
    color: "from-primary to-sky-400",
  },
  {
    icon: Sparkles,
    title: "AI that accelerates execution",
    desc: "Agentic AI that acts, not just reports — forecasting moves, surfacing answers in seconds, and guiding your teams to act when timing matters most.",
    position: "bottom-left",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Domain experts who turn insight into impact",
    desc: "Industry specialists, journalists, and advisors embedded in your workflows — decoding complexity and transforming intelligence into confident action.",
    position: "bottom-right",
    color: "from-teal-500 to-cyan-500",
  },
];

const GDSlide9WhyGlobalData = ({
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
      id="gd-slide-9"
      title="Consumer intelligence that turns strategy into performance"
      slideNumber={10}
      isPlaying={isPlaying}
      isLoading={isLoading}
      progress={progress}
      hasCompleted={hasCompleted}
      onPlay={onPlay}
      onPause={onPause}
      onNextSlide={onNextSlide}
    >
      <div className="grid lg:grid-cols-[40%_60%] gap-6 h-full max-h-full items-start">
        {/* Left Column - Text Content */}
        <div className="flex flex-col gap-4">
          {/* Intro Paragraph */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            Our connected intelligence platform unites high-impact data, AI, and human expertise to move consumer teams from reactive to precision execution.
          </p>
          
          {/* The Result Section */}
          <div className="bg-primary/10 border border-primary/30 rounded-xl p-4">
            <p className="text-[11px] font-semibold text-primary uppercase tracking-wider mb-3">
              The result
            </p>
            <div className="space-y-2">
              {resultItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm text-foreground font-medium">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column - Diagram + Callouts */}
        <div className="relative flex flex-col gap-3">
          {/* Top Callout */}
          <div className="bg-card/50 border border-border/50 rounded-lg p-3 flex items-start gap-3">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${callouts[0].color} flex items-center justify-center shrink-0`}>
              <Database className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-bold text-foreground mb-0.5">{callouts[0].title}</h4>
              <p className="text-[10px] text-muted-foreground leading-relaxed">{callouts[0].desc}</p>
            </div>
          </div>

          {/* Diagram */}
          <div className="flex justify-center">
            <ThreePillarDiagram />
          </div>

          {/* Bottom Callouts - Side by Side */}
          <div className="grid grid-cols-2 gap-3">
            {/* AI Callout */}
            <div className="bg-card/50 border border-border/50 rounded-lg p-3">
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${callouts[1].color} flex items-center justify-center mb-2`}>
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <h4 className="text-xs font-bold text-foreground mb-0.5">{callouts[1].title}</h4>
              <p className="text-[10px] text-muted-foreground leading-relaxed">{callouts[1].desc}</p>
            </div>

            {/* Human Expertise Callout */}
            <div className="bg-card/50 border border-border/50 rounded-lg p-3">
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${callouts[2].color} flex items-center justify-center mb-2`}>
                <Users className="w-4 h-4 text-white" />
              </div>
              <h4 className="text-xs font-bold text-foreground mb-0.5">{callouts[2].title}</h4>
              <p className="text-[10px] text-muted-foreground leading-relaxed">{callouts[2].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </GDSlideContainer>
  );
};

export default GDSlide9WhyGlobalData;
