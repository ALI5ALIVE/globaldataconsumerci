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

const GDSlide1GrowthReality = ({
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
      id="gd-slide-1"
      title="The Market Rewards Speed and Punishes Hesitation"
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
          {painPoints.map((point, i) => (
            <div 
              key={i}
              className="bg-card/50 border border-border/50 rounded-xl p-4 hover:border-destructive/30 transition-all group"
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
          ))}
        </div>

        {/* The Paradox */}
        <div className="grid lg:grid-cols-2 gap-2 items-center">
          <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/30 rounded-xl p-5">
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

          <div className="bg-gradient-to-br from-destructive/10 to-red-500/5 border border-destructive/30 rounded-xl p-5">
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
        <div className="bg-card border border-border/50 rounded-lg p-3 text-center">
          <p className="text-xs text-foreground">
            <span className="font-semibold text-primary">Category leaders</span> don't just have better data — they have <span className="font-semibold text-primary">connected intelligence</span> that enables faster, unified action.
          </p>
        </div>
      </div>
    </GDSlideContainer>
  );
};

export default GDSlide1GrowthReality;
