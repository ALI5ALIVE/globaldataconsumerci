import { useState, useEffect } from "react";
import GDSlideContainer from "./GDSlideContainer";
import { Target, TrendingUp, Swords, Lightbulb, BarChart3, ChevronRight, ArrowDown } from "lucide-react";
import type { SlideNarrationProps } from "@/types/slideProps";
import type { LucideIcon } from "lucide-react";
import { solutionDeepDives } from "@/data/solutionDeepDives";

// Solution icon and color mapping
const solutionConfig: Record<string, { icon: LucideIcon; color: string }> = {
  "Strategic": { icon: Target, color: "hsl(217 100% 50%)" },
  "Market": { icon: TrendingUp, color: "hsl(195 100% 45%)" },
  "Competitive": { icon: Swords, color: "hsl(180 70% 45%)" },
  "Innovation": { icon: Lightbulb, color: "hsl(165 70% 45%)" },
  "Sales": { icon: BarChart3, color: "hsl(145 70% 45%)" },
};

// Map solution names to deep dive IDs
const solutionToDeepDiveId: Record<string, string> = {
  "Strategic": "strategic",
  "Market": "market",
  "Competitive": "competitive",
  "Innovation": "innovation",
  "Sales": "sales",
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
  const [activeStage, setActiveStage] = useState<number | null>(0);
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
      setActiveStage(index !== null ? index : 0); // Revert to first stage
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
      title="Intelligence That Compounds Across the Value Chain"
      subtitle="From trend to shelf—every stage reinforced by connected solutions"
      slideNumber={5}
      isPlaying={isPlaying}
      isLoading={isLoading}
      progress={progress}
      hasCompleted={hasCompleted}
      onPlay={onPlay}
      onPause={onPause}
      onNextSlide={onNextSlide}
    >
      <div className="flex flex-col gap-2 h-full max-h-full overflow-hidden">
        {/* Solution Combo Pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {solutionCombos.map((combo, i) => (
            <div
              key={combo.label}
              className={`px-3 py-1.5 rounded-full border cursor-pointer transition-all duration-200 ${
                activeCombo === i 
                  ? "border-primary bg-primary/10 shadow-md" 
                  : "border-border/50 bg-card/30 hover:border-primary/50"
              }`}
              onMouseEnter={() => handleComboHover(i)}
              onMouseLeave={() => handleComboHover(null)}
              onClick={() => handleComboHover(activeCombo === i ? null : i)}
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-foreground">{combo.label}</span>
                <span className="text-xs text-muted-foreground">
                  {combo.solutions.map((sol, j) => {
                    const Icon = solutionConfig[sol].icon;
                    return (
                      <Icon 
                        key={sol} 
                        className="inline-block w-3 h-3 ml-1" 
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
        <div className="flex items-center">
          <div className="w-full grid grid-cols-5 gap-1.5">
            {workflowStages.map((stage, i) => (
              <div key={stage.id} className="flex items-center">
                <div
                  className={`flex-1 p-3 rounded-xl border cursor-pointer transition-all duration-200 min-h-[100px] ${
                    isStageHighlighted(i)
                      ? "border-primary bg-primary/15 shadow-lg scale-[1.02]"
                      : "border-border bg-card/50 hover:border-primary/40"
                  }`}
                  onMouseEnter={() => handleStageHover(i)}
                  onMouseLeave={() => handleStageHover(null)}
                  onClick={() => handleStageHover(activeStage === i ? null : i)}
                >
                  {/* Stage Label */}
                  <h4 className="text-[11px] font-semibold text-foreground text-center mb-1 leading-tight min-h-[22px]">
                    {stage.label}
                  </h4>
                  
                  {/* Solution Labels with Icons */}
                  <div className="flex flex-col gap-0.5 mb-1">
                    {stage.solutions.map((sol) => {
                      const Icon = solutionConfig[sol].icon;
                      return (
                        <div 
                          key={sol}
                          className="flex items-center gap-1 px-1.5 py-0.5 rounded-md border"
                          style={{ 
                            backgroundColor: solutionConfig[sol].color + "15",
                            borderColor: solutionConfig[sol].color + "40"
                          }}
                        >
                          <Icon className="w-2.5 h-2.5" style={{ color: solutionConfig[sol].color }} />
                          <span 
                            className="text-[8px] font-medium"
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
                    <span className="text-[9px] text-muted-foreground leading-tight">
                      {stage.combination.name}
                    </span>
                  </div>
                </div>

                {/* Arrow connector */}
                {i < workflowStages.length - 1 && (
                  <ChevronRight className="w-3 h-3 text-muted-foreground/50 shrink-0 mx-0.5" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Detail Panel */}
        <div className="min-h-[120px] max-h-[150px]">
          {activeData && (() => {
            // Get the primary solution's deep dive
            const primarySol = activeData.solutions[0];
            const deepDiveId = solutionToDeepDiveId[primarySol];
            const deepDive = solutionDeepDives.find(s => s.id === deepDiveId);
            const firstPain = deepDive?.painToCapability[0];

            return (
              <div className="bg-gradient-to-r from-primary/10 to-sky-500/5 border border-primary/30 rounded-xl p-2.5 animate-fade-in">
                <div className="flex gap-3">
                  {/* Left: Icons + Stage Info */}
                  <div className="shrink-0">
                    <div className="flex gap-1 mb-1">
                      {activeData.solutions.map((sol) => {
                        const Icon = solutionConfig[sol].icon;
                        return (
                          <div 
                            key={sol} 
                            className="w-6 h-6 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: solutionConfig[sol].color + "20" }}
                          >
                            <Icon className="w-3 h-3" style={{ color: solutionConfig[sol].color }} />
                          </div>
                        );
                      })}
                    </div>
                    <p className="text-[11px] font-semibold text-foreground">{activeData.label}</p>
                    <p className="text-[10px] text-muted-foreground">Stage {workflowStages.indexOf(activeData) + 1}</p>
                  </div>

                  {/* Right: Rich Content */}
                  <div className="flex-1 grid grid-cols-3 gap-2">
                    {/* Column 1: JTBD */}
                    {deepDive && (
                      <div className="p-2 bg-card/60 rounded-lg border border-border/50">
                        <p className="text-[9px] font-semibold text-muted-foreground uppercase mb-0.5">
                          Jobs to Be Done
                        </p>
                        <p className="text-[10px] text-muted-foreground leading-snug">
                          <span className="text-primary font-medium">When</span> {deepDive.jtbd.when.toLowerCase()}...{" "}
                          <span className="text-primary font-medium">I want to</span> {deepDive.jtbd.iWantTo.toLowerCase()}{" "}
                          <span className="text-primary font-medium">so that</span> {deepDive.jtbd.soThat.toLowerCase()}.
                        </p>
                      </div>
                    )}

                    {/* Column 2: Pain to Outcome */}
                    {firstPain && (
                      <div className="p-2 bg-card/60 rounded-lg border border-border/50">
                        <p className="text-[9px] font-semibold text-muted-foreground uppercase mb-0.5">
                          From Pain to Outcome
                        </p>
                        <div className="flex flex-col gap-0">
                          <div className="px-2 py-0.5 rounded bg-destructive/10 border border-destructive/20">
                            <span className="text-[9px] text-destructive">{firstPain.pain}</span>
                          </div>
                          <ArrowDown className="w-2.5 h-2.5 text-muted-foreground mx-auto" />
                          <div className="px-2 py-0.5 rounded bg-card border border-border">
                            <span className="text-[9px] text-foreground">{firstPain.capability}</span>
                          </div>
                          <ArrowDown className="w-2.5 h-2.5 text-muted-foreground mx-auto" />
                          <div className="px-2 py-0.5 rounded bg-primary/15 border border-primary/30">
                            <span className="text-[9px] text-primary font-medium">{firstPain.outcome}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Column 3: Real Example + Capabilities */}
                    {deepDive && (
                      <div className="space-y-1">
                        <div className="p-1.5 bg-primary/10 rounded-lg border border-primary/20">
                          <p className="text-[9px] font-semibold text-primary uppercase">Real Example</p>
                          <p className="text-[9px] text-muted-foreground">{deepDive.example.brand}</p>
                          <p className="text-[9px] text-foreground font-medium">{deepDive.example.result}</p>
                        </div>
                        <div className="flex flex-wrap gap-0.5">
                          {deepDive.capabilities.slice(0, 3).map((cap, i) => (
                            <span key={i} className="px-1.5 py-0.5 rounded bg-primary/10 text-primary text-[8px]">
                              {cap}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })()}
          
          {activeComboData && !activeData && (
            <div 
              className="bg-gradient-to-r from-primary/10 to-sky-500/5 border border-primary/30 rounded-xl p-3 animate-fade-in"
            >
              <div className="flex items-start gap-3">
                <div className="flex gap-1 shrink-0">
                  {activeComboData.solutions.map((sol) => {
                    const Icon = solutionConfig[sol].icon;
                    return (
                      <div 
                        key={sol}
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: solutionConfig[sol].color + "20", border: `1px solid ${solutionConfig[sol].color}40` }}
                      >
                        <Icon className="w-4 h-4" style={{ color: solutionConfig[sol].color }} />
                      </div>
                    );
                  })}
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-foreground mb-0.5">{activeComboData.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {activeComboData.description}
                  </p>
                  <p className="text-[11px] text-primary mt-1">
                    Combines: {activeComboData.solutions.join(" + ")} Intelligence
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-3 gap-1.5">
          <div className="bg-card/50 border border-border/50 rounded-lg p-2 text-center">
            <p className="text-xl font-bold text-primary">5</p>
            <p className="text-[11px] text-muted-foreground">Workflow stages</p>
          </div>
          <div className="bg-card/50 border border-border/50 rounded-lg p-1.5 text-center">
            <p className="text-lg font-bold text-primary">3</p>
            <p className="text-[10px] text-muted-foreground">Strategic combinations</p>
          </div>
          <div className="bg-card/50 border border-border/50 rounded-lg p-1.5 text-center">
            <p className="text-lg font-bold text-primary">∞</p>
            <p className="text-[10px] text-muted-foreground">Compounding value</p>
          </div>
        </div>
      </div>
    </GDSlideContainer>
  );
};

export default GDSlide5ValueChain;
