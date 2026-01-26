import { useState, useEffect } from "react";
import { ArrowRight, Infinity } from "lucide-react";
import GDSlideContainer from "./GDSlideContainer";
import GDSolutionsFlow from "./GDSolutionsFlow";
import { SlideNarrationProps } from "@/types/slideProps";

// Map narration progress to active step
const stepTimings = [
  { index: 0, startPercent: 18 },  // Strategic
  { index: 1, startPercent: 28 },  // Market
  { index: 2, startPercent: 40 },  // Competitive
  { index: 3, startPercent: 50 },  // Innovation
  { index: 4, startPercent: 62 },  // Sales
];

const comparisonData = [
  { separate: "Insights sit in decks", connected: "Insights directly shape decisions" },
  { separate: "Decisions are isolated", connected: "Decisions are validated upfront" },
  { separate: "Enablement is generic", connected: "Enablement is opportunity-specific" },
  { separate: "Value resets each cycle", connected: "Value compounds every cycle" },
];

const GDSlide10Solutions = ({
  isPlaying = false,
  isLoading = false,
  progress = 0,
  hasCompleted = false,
  onPlay,
  onPause,
  onNextSlide,
}: SlideNarrationProps) => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isNarrationControlled, setIsNarrationControlled] = useState(false);

  // Sync active step with narration progress
  useEffect(() => {
    if (isPlaying && progress > 0) {
      setIsNarrationControlled(true);
      
      // Find the current step based on progress
      let currentStep = null;
      for (let i = stepTimings.length - 1; i >= 0; i--) {
        if (progress >= stepTimings[i].startPercent) {
          currentStep = stepTimings[i].index;
          break;
        }
      }
      setActiveStep(currentStep);
    } else if (!isPlaying && isNarrationControlled) {
      setIsNarrationControlled(false);
    }
  }, [isPlaying, progress, isNarrationControlled]);

  const handleStepClick = (step: number) => {
    if (!isNarrationControlled) {
      setActiveStep(activeStep === step ? null : step);
    }
  };

  return (
    <GDSlideContainer
      id="gd-slide-10"
      title="Connected Intelligence in Action"
      subtitle="From weak signal to winning launch in 6 months"
      slideNumber={10}
      isPlaying={isPlaying}
      isLoading={isLoading}
      progress={progress}
      hasCompleted={hasCompleted}
      onPlay={onPlay}
      onPause={onPause}
      onNextSlide={onNextSlide}
    >
      <div className="flex flex-col gap-2 h-full max-h-full overflow-hidden">
        {/* Case Study Context */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="px-2 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-medium">
            Case Study
          </span>
          <span className="text-muted-foreground">
            Target: Urban European commuters, 25-40, health-conscious but time-poor
          </span>
          <ArrowRight className="w-3 h-3 text-muted-foreground hidden sm:block" />
          <span className="text-foreground font-medium hidden sm:inline">
            Segment growing 14% YoY · 3 competitors already have 2+ SKUs each
          </span>
        </div>

        {/* Solutions Flow Visualization */}
        <GDSolutionsFlow
          activeStep={activeStep}
          onStepClick={handleStepClick}
          isNarrationControlled={isNarrationControlled}
        />

        {/* Comparison Table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {/* Separate */}
          <div className="p-3 rounded-xl bg-card/30 border border-border/30">
            <h4 className="text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-muted-foreground/50" />
              If Bought Separately
            </h4>
            <ul className="space-y-1.5">
              {comparisonData.map((item, i) => (
                <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="text-muted-foreground/50">•</span>
                  {item.separate}
                </li>
              ))}
            </ul>
          </div>

          {/* Connected */}
          <div className="p-3 rounded-xl bg-primary/5 border border-primary/30">
            <h4 className="text-xs font-semibold text-primary mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              If Bought as Connected Platform
            </h4>
            <ul className="space-y-1.5">
              {comparisonData.map((item, i) => (
                <li key={i} className="text-xs text-foreground flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  {item.connected}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="text-center p-2 rounded-lg bg-card/30 border border-border/30">
            <div className="text-xl sm:text-2xl font-bold text-primary mb-0.5">6mo</div>
            <div className="text-[11px] text-muted-foreground">Launched (vs 14mo typical)</div>
          </div>
          <div className="text-center p-2 rounded-lg bg-card/30 border border-border/30">
            <div className="text-xl sm:text-2xl font-bold text-primary mb-0.5">#2</div>
            <div className="text-[11px] text-muted-foreground">Segment position in 8 weeks</div>
          </div>
          <div className="text-center p-2 rounded-lg bg-card/30 border border-border/30">
            <div className="flex justify-center">
              <Infinity className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-0.5" />
            </div>
            <div className="text-[11px] text-muted-foreground">Intelligence that compounds</div>
          </div>
        </div>
      </div>
    </GDSlideContainer>
  );
};

export default GDSlide10Solutions;
