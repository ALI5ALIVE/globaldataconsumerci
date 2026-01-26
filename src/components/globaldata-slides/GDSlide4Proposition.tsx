import { useState } from "react";
import GDSlideContainer from "./GDSlideContainer";
import type { SlideNarrationProps } from "@/types/slideProps";
import ConnectedIntelligenceWheel from "./ConnectedIntelligenceWheel";
import SolutionValuePanel from "./SolutionValuePanel";

const GDSlide4Proposition = ({
  isPlaying = false,
  isLoading = false,
  progress = 0,
  hasCompleted = false,
  onPlay,
  onPause,
  onNextSlide,
}: SlideNarrationProps) => {
  const [activeSegment, setActiveSegment] = useState<string | null>("Market Intelligence");

  return (
    <GDSlideContainer
      id="gd-slide-4"
      title="The Answer: Connected Intelligence"
      subtitle="One system that moves faster, aligns better, and acts with confidence"
      slideNumber={4}
      isPlaying={isPlaying}
      isLoading={isLoading}
      progress={progress}
      hasCompleted={hasCompleted}
      onPlay={onPlay}
      onPause={onPause}
      onNextSlide={onNextSlide}
    >
      <div className="flex flex-col gap-2 h-full max-h-full overflow-hidden">
        {/* Central Value Proposition */}
        <div className="bg-gradient-to-r from-primary/10 to-sky-500/5 border border-primary/30 rounded-xl p-3">
          <p className="text-base md:text-lg font-medium text-foreground leading-relaxed text-center">
            A unified solution that connects <span className="text-primary font-bold">market, consumer, competitor, innovation, and commercial intelligence</span> into one trusted system—so organisations <span className="text-primary font-bold">move faster, align better, and act with confidence</span>.
          </p>
        </div>

        {/* Intelligence Domains Hub */}
        <div className="flex-1 grid lg:grid-cols-2 gap-3 items-center min-h-0 max-h-[calc(100%-100px)]">
          {/* Connected Intelligence Wheel */}
          <div className="flex items-center justify-center h-full max-h-[300px]">
            <ConnectedIntelligenceWheel
              activeSegment={activeSegment}
              defaultSegment="Market Intelligence"
              onSegmentHover={setActiveSegment}
              onSegmentClick={setActiveSegment}
            />
          </div>

          {/* Solution Value Panel */}
          <SolutionValuePanel activeSolution={activeSegment} />
        </div>

        {/* Bottom callout */}
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-2 text-center">
          <p className="text-sm text-foreground">
            This is intelligence designed to <span className="font-bold text-primary">drive decisions end-to-end</span>—not another layer of data.
          </p>
        </div>
      </div>
    </GDSlideContainer>
  );
};

export default GDSlide4Proposition;
