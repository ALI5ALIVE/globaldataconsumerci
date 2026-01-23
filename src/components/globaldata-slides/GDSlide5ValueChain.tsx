import { useState, useEffect } from "react";
import GDSlideContainer from "./GDSlideContainer";
import { Target, TrendingUp, Swords, Lightbulb, BarChart3, ChevronRight } from "lucide-react";
import type { SlideNarrationProps } from "@/types/slideProps";
import type { LucideIcon } from "lucide-react";

// Solution icon and color mapping
const solutionConfig: Record<string, { icon: LucideIcon; color: string }> = {
  "Strategic": { icon: Target, color: "hsl(217 100% 50%)" },
  "Market": { icon: TrendingUp, color: "hsl(195 100% 45%)" },
  "Competitive": { icon: Swords, color: "hsl(180 70% 45%)" },
  "Innovation": { icon: Lightbulb, color: "hsl(165 70% 45%)" },
  "Sales": { icon: BarChart3, color: "hsl(145 70% 45%)" },
};

// Workflow stages with solution mapping (based on PDF)
const workflowStages = [
  {
    id: "trend-strategy",
    label: "Trend & Strategy",
    questions: ["Which markets and categories?", "Macro trends?", "Size of the prize?"],
    solutions: ["Strategic", "Market"],
    combination: { name: "Where to Play", description: "Identify growth spaces before competitors" },
  },
  {
    id: "whitespace",
    label: "White Space",
    questions: ["What white space exists?", "What approaches are working?"],
    solutions: ["Market", "Innovation", "Competitive"],
    combination: { name: "Opportunity Discovery", description: "Validate trends with competitive context" },
  },
  {
    id: "concept-screening",
    label: "Concept Screening",
    questions: ["Which products resonate?", "Initial reactions?", "How to differentiate?"],
    solutions: ["Innovation", "Competitive"],
    combination: { name: "How to Win", description: "Test concepts against competitive landscape" },
  },
  {
    id: "market-entry",
    label: "Market Entry",
    questions: ["Which channels to launch?", "What is the TAM?", "Optimal pricing?"],
    solutions: ["Sales", "Market", "Competitive"],
    combination: { name: "How to Execute", description: "Launch with channel and pricing precision" },
  },
  {
    id: "post-launch",
    label: "Post-Launch",
    questions: ["How to measure engagement?", "When to refresh?", "Monitor competitors?"],
    solutions: ["Sales", "Competitive", "Market"],
    combination: { name: "Continuous Intelligence", description: "Performance + competitive response" },
  },
];

// Solution combination examples
const solutionCombos = [
  { 
    label: "Where to Play", 
    solutions: ["Strategic", "Market"], 
    description: "Identify markets and categories with the highest growth potential",
    color: "hsl(217 100% 50%)",
    stageIndices: [0, 1],
  },
  { 
    label: "How to Win", 
    solutions: ["Innovation", "Competitive"], 
    description: "Develop differentiated products that outperform competitors",
    color: "hsl(195 100% 45%)",
    stageIndices: [1, 2],
  },
  { 
    label: "How to Execute", 
    solutions: ["Sales", "Market"], 
    description: "Launch and scale with precision across channels",
    color: "hsl(145 70% 45%)",
    stageIndices: [3, 4],
  },
];

// Narration sync timings
const stepTimings = [
  { index: 0, startPercent: 15 },
  { index: 1, startPercent: 30 },
  { index: 2, startPercent: 45 },
  { index: 3, startPercent: 60 },
  { index: 4, startPercent: 75 },
];

const GDSlide5ValueChain = ({
  isPlaying = false,
  isLoading = false,
  progress = 0,
  hasCompleted = false,
  onPlay,
  onPause,
  onNextSlide,
}: SlideNarrationProps) => {
  const [activeStage, setActiveStage] = useState<number | null>(null);
  const [activeCombo, setActiveCombo] = useState<number | null>(null);
  const [isNarrationControlled, setIsNarrationControlled] = useState(false);

  // Sync active stage with narration progress
  useEffect(() => {
    if (isPlaying && progress > 0) {
      setIsNarrationControlled(true);
      setActiveCombo(null);
      
      let currentStep: number | null = null;
      for (let i = stepTimings.length - 1; i >= 0; i--) {
        if (progress >= stepTimings[i].startPercent) {
          currentStep = stepTimings[i].index;
          break;
        }
      }
      setActiveStage(currentStep);
    } else if (!isPlaying && isNarrationControlled) {
      setIsNarrationControlled(false);
    }
  }, [isPlaying, progress, isNarrationControlled]);

  const handleStageHover = (index: number | null) => {
    if (!isNarrationControlled) {
      setActiveStage(index);
      if (index !== null) setActiveCombo(null);
    }
  };

  const handleComboHover = (index: number | null) => {
    if (!isNarrationControlled) {
      setActiveCombo(index);
      if (index !== null) setActiveStage(null);
    }
  };

  const isStageHighlighted = (stageIndex: number) => {
    if (activeCombo !== null) {
      return solutionCombos[activeCombo].stageIndices.includes(stageIndex);
    }
    return activeStage === stageIndex;
  };

  const activeData = activeStage !== null ? workflowStages[activeStage] : null;
  const activeComboData = activeCombo !== null ? solutionCombos[activeCombo] : null;

  return (
    <GDSlideContainer
      id="gd-slide-5"
      title="Solutions That Combine for Greater Advantage"
      subtitle="Connected intelligence across every workflow stage"
      slideNumber={5}
      isPlaying={isPlaying}
      isLoading={isLoading}
      progress={progress}
      hasCompleted={hasCompleted}
      onPlay={onPlay}
      onPause={onPause}
      onNextSlide={onNextSlide}
    >
      <div className="flex flex-col gap-4 h-full">
        {/* Solution Combo Pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {solutionCombos.map((combo, i) => (
            <div
              key={combo.label}
              className={`px-4 py-2 rounded-full border cursor-pointer transition-all duration-200 ${
                activeCombo === i 
                  ? "border-primary bg-primary/10 shadow-md" 
                  : "border-border/50 bg-card/30 hover:border-primary/50"
              }`}
              onMouseEnter={() => handleComboHover(i)}
              onMouseLeave={() => handleComboHover(null)}
              onClick={() => handleComboHover(activeCombo === i ? null : i)}
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-foreground">{combo.label}</span>
                <span className="text-xs text-muted-foreground">
                  {combo.solutions.map((sol, j) => {
                    const Icon = solutionConfig[sol].icon;
                    return (
                      <Icon 
                        key={sol} 
                        className="inline-block w-3.5 h-3.5 ml-1" 
                        style={{ color: solutionConfig[sol].color }}
                      />
                    );
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Workflow Cards */}
        <div className="flex-1 flex items-center">
          <div className="w-full grid grid-cols-5 gap-2">
            {workflowStages.map((stage, i) => (
              <div key={stage.id} className="flex items-center">
                <div
                  className={`flex-1 p-4 rounded-xl border cursor-pointer transition-all duration-200 min-h-[140px] ${
                    isStageHighlighted(i)
                      ? "border-primary bg-primary/15 shadow-lg scale-[1.02]"
                      : "border-border bg-card/50 hover:border-primary/40"
                  }`}
                  onMouseEnter={() => handleStageHover(i)}
                  onMouseLeave={() => handleStageHover(null)}
                  onClick={() => handleStageHover(activeStage === i ? null : i)}
                >
                  {/* Stage Label */}
                  <h4 className="text-xs font-semibold text-foreground text-center mb-2 leading-tight min-h-[28px]">
                    {stage.label}
                  </h4>
                  
                  {/* Solution Labels with Icons */}
                  <div className="flex flex-col gap-1 mb-2">
                    {stage.solutions.map((sol) => {
                      const Icon = solutionConfig[sol].icon;
                      return (
                        <div 
                          key={sol}
                          className="flex items-center gap-1.5 px-2 py-0.5 rounded-md border"
                          style={{ 
                            backgroundColor: solutionConfig[sol].color + "15",
                            borderColor: solutionConfig[sol].color + "40"
                          }}
                        >
                          <Icon className="w-3 h-3" style={{ color: solutionConfig[sol].color }} />
                          <span 
                            className="text-[9px] font-medium"
                            style={{ color: solutionConfig[sol].color }}
                          >
                            {sol}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Combination Tag */}
                  <div className="text-center">
                    <span className="text-[10px] text-muted-foreground leading-tight">
                      {stage.combination.name}
                    </span>
                  </div>
                </div>

                {/* Arrow connector */}
                {i < workflowStages.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-muted-foreground/50 shrink-0 mx-1" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Detail Panel */}
        <div className="min-h-[120px]">
          {activeData ? (
            <div 
              className="bg-gradient-to-r from-primary/10 to-sky-500/5 border border-primary/30 rounded-xl p-4 animate-fade-in"
            >
              <div className="flex items-start gap-4">
                <div className="flex gap-1 shrink-0">
                  {activeData.solutions.map((sol) => {
                    const Icon = solutionConfig[sol].icon;
                    return (
                      <div 
                        key={sol}
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: solutionConfig[sol].color + "20", border: `1px solid ${solutionConfig[sol].color}40` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: solutionConfig[sol].color }} />
                      </div>
                    );
                  })}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-bold text-foreground">{activeData.label}</span>
                    <span className="px-2 py-0.5 rounded-full bg-primary/20 text-[10px] font-medium text-primary">
                      {activeData.combination.name}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                    {activeData.questions.map((q, j) => (
                      <p key={j} className="text-xs text-muted-foreground flex items-start gap-1">
                        <span className="text-primary">•</span> {q}
                      </p>
                    ))}
                  </div>
                  <p className="text-xs text-primary mt-2 font-medium">
                    → {activeData.combination.description}
                  </p>
                </div>
              </div>
            </div>
          ) : activeComboData ? (
            <div 
              className="bg-gradient-to-r from-primary/10 to-sky-500/5 border border-primary/30 rounded-xl p-4 animate-fade-in"
            >
              <div className="flex items-start gap-4">
                <div className="flex gap-1 shrink-0">
                  {activeComboData.solutions.map((sol) => {
                    const Icon = solutionConfig[sol].icon;
                    return (
                      <div 
                        key={sol}
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: solutionConfig[sol].color + "20", border: `1px solid ${solutionConfig[sol].color}40` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: solutionConfig[sol].color }} />
                      </div>
                    );
                  })}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-foreground mb-1">{activeComboData.label}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {activeComboData.description}
                  </p>
                  <p className="text-xs text-primary mt-2">
                    Combines: {activeComboData.solutions.join(" + ")} Intelligence
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center bg-card/30 border border-border/30 rounded-xl p-4">
              <p className="text-sm text-muted-foreground text-center">
                Hover over a workflow stage or combination to explore how solutions work together
              </p>
            </div>
          )}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-card/50 border border-border/50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-primary">5</p>
            <p className="text-xs text-muted-foreground">Workflow stages</p>
          </div>
          <div className="bg-card/50 border border-border/50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-primary">3</p>
            <p className="text-xs text-muted-foreground">Strategic combinations</p>
          </div>
          <div className="bg-card/50 border border-border/50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-primary">∞</p>
            <p className="text-xs text-muted-foreground">Compounding value</p>
          </div>
        </div>
      </div>
    </GDSlideContainer>
  );
};

export default GDSlide5ValueChain;
