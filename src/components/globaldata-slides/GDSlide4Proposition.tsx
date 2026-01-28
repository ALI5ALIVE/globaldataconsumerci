import { useState, useEffect, useRef } from "react";
import GDSlideContainer from "./GDSlideContainer";
import type { SlideNarrationProps } from "@/types/slideProps";
import ConnectedIntelligenceWheel from "./ConnectedIntelligenceWheel";
import SolutionValuePanel from "./SolutionValuePanel";

const segmentTimings = [
  { segment: 'Market Intelligence', startPercent: 25 },
  { segment: 'Competitor Intelligence', startPercent: 35 },
  { segment: 'Innovation Intelligence', startPercent: 45 },
  { segment: 'Sales Intelligence', startPercent: 55 },
  { segment: 'Strategic Intelligence', startPercent: 65 },
];

const stepTimings = [
  { step: 'intro', startPercent: 0 },
  { step: 'wheel', startPercent: 28 },
  { step: 'callout', startPercent: 78 },
];

const stepOrder = ['intro', 'wheel', 'callout'];

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
  const [activeStep, setActiveStep] = useState<string>('callout');
  const [isNarrationControlled, setIsNarrationControlled] = useState(false);
  const userInteractedRef = useRef(false);

  useEffect(() => {
    if (isPlaying && progress > 0) {
      setIsNarrationControlled(true);
      
      // Update step visibility
      const currentStepTiming = [...stepTimings].reverse().find(t => progress >= t.startPercent);
      if (currentStepTiming) {
        setActiveStep(currentStepTiming.step);
      }
      
      // Auto-cycle through segments if user hasn't interacted
      if (!userInteractedRef.current) {
        const currentSegmentTiming = [...segmentTimings].reverse().find(t => progress >= t.startPercent);
        if (currentSegmentTiming) {
          setActiveSegment(currentSegmentTiming.segment);
        }
      }
    } else if (!isPlaying && isNarrationControlled && hasCompleted) {
      setActiveStep('callout');
      setIsNarrationControlled(false);
      userInteractedRef.current = false;
    } else if (!isPlaying && !isNarrationControlled) {
      setActiveStep('callout');
    }
  }, [isPlaying, progress, hasCompleted, isNarrationControlled]);

  const isVisible = (step: string) => {
    const activeIndex = stepOrder.indexOf(activeStep);
    const stepIndex = stepOrder.indexOf(step);
    return stepIndex <= activeIndex;
  };

  const handleSegmentHover = (segment: string | null) => {
    userInteractedRef.current = true;
    setActiveSegment(segment);
  };

  const handleSegmentClick = (segment: string | null) => {
    userInteractedRef.current = true;
    setActiveSegment(segment);
  };

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
        <div className={`bg-gradient-to-r from-primary/10 to-sky-500/5 border border-primary/30 rounded-xl p-2 transition-all duration-300 ${
          isVisible('intro') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}>
          <p className="text-[13px] md:text-sm font-medium text-foreground leading-snug text-center">
            A unified solution that connects <span className="text-primary font-bold">market, consumer, competitor, innovation, and commercial intelligence</span> into one trusted system—so organisations <span className="text-primary font-bold">move faster, align better, and act with confidence</span>.
          </p>
        </div>

        {/* Intelligence Domains Hub */}
        <div className={`flex-1 grid lg:grid-cols-2 gap-3 items-center min-h-0 transition-all duration-500 ${
          isVisible('wheel') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          {/* Connected Intelligence Wheel */}
          <div className="flex items-center justify-center h-full max-h-[340px]">
            <ConnectedIntelligenceWheel
              activeSegment={activeSegment}
              defaultSegment="Market Intelligence"
              onSegmentHover={handleSegmentHover}
              onSegmentClick={handleSegmentClick}
            />
          </div>

          {/* Solution Value Panel */}
          <SolutionValuePanel activeSolution={activeSegment} />
        </div>

        {/* Bottom callout */}
        <div className={`bg-primary/10 border border-primary/30 rounded-lg p-1.5 text-center transition-all duration-300 ${
          isVisible('callout') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-[12px] text-foreground leading-snug">
            This is intelligence designed to <span className="font-bold text-primary">drive decisions end-to-end</span>—not another layer of data.
          </p>
        </div>
      </div>
    </GDSlideContainer>
  );
};

export default GDSlide4Proposition;
