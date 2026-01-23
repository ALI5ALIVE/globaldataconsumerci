import GDSlideContainer from "./GDSlideContainer";
import { XCircle, CheckCircle2 } from "lucide-react";
import type { SlideNarrationProps } from "@/types/slideProps";
import ConnectedIntelligenceWheel from "./ConnectedIntelligenceWheel";

const replaces = [
  "See the full consumer journey—from trend emergence to purchase decision",
  "Know why a product is winning (or losing) across every touchpoint",
  "Align brand, innovation, and commercial around the same consumer truth",
];

const notThis = [
  "Another consumer panel you can't connect",
  "Another dashboard that doesn't match your other data",
  "Another point solution that creates more reconciliation",
];

const GDSlide4Proposition = ({
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
      id="gd-slide-4"
      title="See the Full Consumer Journey. Act First."
      subtitle="Understand your consumer faster than anyone—and act before they've moved on"
      slideNumber={4}
      isPlaying={isPlaying}
      isLoading={isLoading}
      progress={progress}
      hasCompleted={hasCompleted}
      onPlay={onPlay}
      onPause={onPause}
      onNextSlide={onNextSlide}
    >
      <div className="flex flex-col gap-5 h-full">
        {/* Central Value Proposition */}
        <div className="bg-gradient-to-r from-primary/10 to-sky-500/5 border border-primary/30 rounded-xl p-6">
          <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed text-center">
            <span className="text-primary font-bold">From trend emergence to purchase decision</span>—one connected view of your consumer. <span className="text-primary font-bold">Every team aligned. Every decision faster.</span>
          </p>
        </div>

        {/* Intelligence Domains Hub */}
        <div className="flex-1 grid lg:grid-cols-2 gap-6 items-center">
          {/* Connected Intelligence Wheel */}
          <div className="flex items-center justify-center py-4">
            <ConnectedIntelligenceWheel />
          </div>

          {/* What it replaces / What it is NOT */}
          <div className="space-y-4">
            {/* What it enables */}
            <div className="bg-card/50 border border-border/50 rounded-xl p-4">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">What This Means For Your Brand</p>
              <div className="space-y-2">
                {replaces.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What it is NOT */}
            <div className="bg-card/50 border border-destructive/20 rounded-xl p-4">
              <p className="text-xs font-semibold text-destructive uppercase tracking-wider mb-3">What It Is NOT</p>
              <div className="space-y-2">
                {notThis.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-destructive shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom callout */}
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-center">
          <p className="text-sm text-foreground">
            This isn't about better data. It's about <span className="font-bold text-primary">understanding your consumer faster than anyone else</span>—and acting on it before they've moved on.
          </p>
        </div>
      </div>
    </GDSlideContainer>
  );
};

export default GDSlide4Proposition;
