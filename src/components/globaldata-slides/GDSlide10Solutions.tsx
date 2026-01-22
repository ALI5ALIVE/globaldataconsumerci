import { useState, useEffect } from "react";
import { ArrowRight, Infinity } from "lucide-react";
import GDSlideContainer from "./GDSlideContainer";
import GDSolutionsFlow from "./GDSolutionsFlow";
import { SlideNarrationProps } from "@/types/slideProps";

// Map narration progress to active step
const stepTimings = [
  { index: 0, startPercent: 15 },  // Strategic
  { index: 1, startPercent: 30 },  // Market
  { index: 2, startPercent: 45 },  // Competitive
  { index: 3, startPercent: 55 },  // Innovation
  { index: 4, startPercent: 70 },  // Sales
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
      title="One Platform. Five Solutions. Compounding Returns."
      subtitle="See how it works for a global FMCG brand"
      slideNumber={10}
      isPlaying={isPlaying}
      isLoading={isLoading}
      progress={progress}
      hasCompleted={hasCompleted}
      onPlay={onPlay}
      onPause={onPause}
      onNextSlide={onNextSlide}
    >
      <div className="space-y-6 sm:space-y-8">
        {/* Case Study Context */}
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary font-medium">
            Case Study
          </span>
          <span className="text-muted-foreground">
            Global FMCG brand in healthy snacks
          </span>
          <ArrowRight className="w-4 h-4 text-muted-foreground hidden sm:block" />
          <span className="text-foreground font-medium hidden sm:inline">
            "Win growth in high-protein on-the-go segment"
          </span>
        </div>

        {/* Solutions Flow Visualization */}
        <GDSolutionsFlow
          activeStep={activeStep}
          onStepClick={handleStepClick}
          isNarrationControlled={isNarrationControlled}
        />

        {/* Comparison Table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Separate */}
          <div className="p-4 rounded-xl bg-card/30 border border-border/30">
            <h4 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-muted-foreground/50" />
              If Bought Separately
            </h4>
            <ul className="space-y-2">
              {comparisonData.map((item, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-muted-foreground/50">•</span>
                  {item.separate}
                </li>
              ))}
            </ul>
          </div>

          {/* Connected */}
          <div className="p-4 rounded-xl bg-primary/5 border border-primary/30">
            <h4 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              If Bought as Connected Platform
            </h4>
            <ul className="space-y-2">
              {comparisonData.map((item, i) => (
                <li key={i} className="text-sm text-foreground flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  {item.connected}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 rounded-lg bg-card/30 border border-border/30">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">5</div>
            <div className="text-xs text-muted-foreground">Intelligence Solutions</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-card/30 border border-border/30">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">1</div>
            <div className="text-xs text-muted-foreground">Unified Taxonomy</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-card/30 border border-border/30">
            <div className="flex justify-center">
              <Infinity className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-1" />
            </div>
            <div className="text-xs text-muted-foreground">Compounding Value</div>
          </div>
        </div>
      </div>
    </GDSlideContainer>
  );
};

export default GDSlide10Solutions;
