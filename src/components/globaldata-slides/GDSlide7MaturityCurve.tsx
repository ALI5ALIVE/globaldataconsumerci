import { useState, useEffect } from "react";
import GDSlideContainer from "./GDSlideContainer";
import RoadmapStageDetails, { RoadmapStage } from "./RoadmapStageDetails";
import GDMaturitySummaryBanner from "./GDMaturitySummaryBanner";
import { useIsMobile } from "@/hooks/use-mobile";
import type { SlideNarrationProps } from "@/types/slideProps";

// New data structure focused on Ways of Working (actions, behaviors, use cases)
const roadmapStagesData: RoadmapStage[] = [
  {
    id: "FRAGMENTED",
    stage: 1,
    headline: "Fragmented & Reactive",
    sublabel: "Manual / Reactive",
    accentColor: "hsl(0 70% 50%)",
    waysOfWorking: {
      keyActions: [
        "Request insights via email, wait 2-3 weeks for response",
        "Export data to spreadsheets manually for analysis",
        "Schedule ad-hoc vendor calls to reconcile conflicting data",
      ],
      teamBehavior: "Brand, innovation, and commercial teams each maintain separate data sources and vendor relationships",
      exampleUseCase: "Which Nielsen data do we trust vs Kantar? — 3 days debating before any decision",
      timeToDecision: "12+ weeks",
    },
  },
  {
    id: "MANAGED",
    stage: 2,
    headline: "Managed (Siloed)",
    sublabel: "Silo Optimisation",
    accentColor: "hsl(199 89% 48%)",
    waysOfWorking: {
      keyActions: [
        "Run separate brand tracker, innovation pipeline, competitive monitor",
        "Share quarterly reports across functions",
        "Maintain domain-specific dashboards and workflows",
      ],
      teamBehavior: "Teams have their own tools that work well internally, but alignment happens only in big meetings",
      exampleUseCase: "Here's the brand health update — but NPD has completely different consumer segmentation",
      timeToDecision: "6-8 weeks",
    },
  },
  {
    id: "CONNECTED",
    stage: 3,
    headline: "Connected Intelligence",
    sublabel: "Platform Shift",
    accentColor: "hsl(173 80% 40%)",
    waysOfWorking: {
      keyActions: [
        "Query any data source with one search",
        "Export to any workflow from unified platform",
        "Share dashboards cross-functionally in real-time",
      ],
      teamBehavior: "Real-time access to same truth; async collaboration replaces alignment meetings",
      exampleUseCase: "Pull the integrated view for UK protein snacks — done in 10 minutes",
      timeToDecision: "2-3 weeks",
    },
  },
  {
    id: "OPTIMIZED",
    stage: 4,
    headline: "Optimized Operations",
    sublabel: "Intelligent Ops",
    accentColor: "hsl(280 65% 55%)",
    waysOfWorking: {
      keyActions: [
        "Receive automated alerts when market share drops 2%+",
        "Get AI-generated decision recommendations",
        "Run scenario models with real-time data",
      ],
      teamBehavior: "Decisions made in shared workspaces with embedded intelligence; fewer meetings, faster action",
      exampleUseCase: "Alert: Competitor launched at 15% lower price — here's recommended response",
      timeToDecision: "3-5 days",
    },
  },
  {
    id: "PREDICTIVE",
    stage: 5,
    headline: "Predictive & Proactive",
    sublabel: "AI-Driven Foresight",
    accentColor: "hsl(45 93% 58%)",
    waysOfWorking: {
      keyActions: [
        "Ava flags emerging competitor launch 6 weeks before announcement",
        "AI generates positioning recommendations automatically",
        "Validate strategic pivots with real-time data in hours",
      ],
      teamBehavior: "AI recommends, humans approve and refine; strategic focus replaces reactive firefighting",
      exampleUseCase: "Ava recommends pausing Product X investment based on weakening trend signal",
      timeToDecision: "Hours",
    },
  },
];

// Curve annotations for each stage (unchanged from original)
const curveAnnotations: Record<number, string[]> = {
  1: ["Disconnected tools", "No shared taxonomy", "Slow decisions"],
  2: ["Better process", "Still manual handoffs", "Slow change cycles"],
  3: ["AI THRESHOLD", "Reconciliation ↓60%", "Unified data unlocks AI"],
  4: ["Decisions in days, not weeks", "Prioritised interventions", "Faster decisions"],
  5: ["See disruption before it hits", "Human-in-loop control", "Continuous proof"],
};
// Timing markers for narration-synced stage changes
const stageTimings = [
  { stage: 1, startPercent: 12 },
  { stage: 2, startPercent: 28 },
  { stage: 3, startPercent: 45 },
  { stage: 4, startPercent: 62 },
  { stage: 5, startPercent: 78 },
];

const GDSlide7MaturityCurve = ({
  isPlaying = false,
  isLoading = false,
  progress = 0,
  hasCompleted = false,
  onPlay,
  onPause,
  onNextSlide,
}: SlideNarrationProps) => {
  const [activeStage, setActiveStage] = useState(1);
  const [isNarrationControlled, setIsNarrationControlled] = useState(false);
  const isMobile = useIsMobile();

  // Curve is always visible - activeStage animation syncs with narration

  // Sync stage with narration progress
  useEffect(() => {
    if (isPlaying && progress > 0) {
      setIsNarrationControlled(true);
      
      const currentTiming = [...stageTimings]
        .reverse()
        .find(t => progress >= t.startPercent);
      
      if (currentTiming && currentTiming.stage !== activeStage) {
        setActiveStage(currentTiming.stage);
      }
    } else if (!isPlaying && isNarrationControlled) {
      // Narration stopped - keep current stage but release control
      setIsNarrationControlled(false);
    }
  }, [isPlaying, progress, activeStage, isNarrationControlled]);

  const selectedStage =
    roadmapStagesData.find((s) => s.stage === activeStage) || roadmapStagesData[0];

  // 2x scaled viewBox dimensions
  const viewBox = isMobile ? "0 0 840 760" : "0 0 1160 760";

  // 2x scaled curve points
  const curvePoints = isMobile
    ? [
        { x: 100, y: 620, stage: 1 },
        { x: 240, y: 580, stage: 2 },
        { x: 400, y: 480, stage: 3 },
        { x: 580, y: 320, stage: 4 },
        { x: 760, y: 120, stage: 5 },
      ]
    : [
        { x: 160, y: 600, stage: 1 },
        { x: 360, y: 560, stage: 2 },
        { x: 560, y: 460, stage: 3 },
        { x: 780, y: 300, stage: 4 },
        { x: 1000, y: 110, stage: 5 },
      ];

  const generateCurvePath = () => {
    const points = curvePoints;
    let path = `M ${points[0].x} ${points[0].y}`;
    
    for (let i = 0; i < points.length - 1; i++) {
      const current = points[i];
      const next = points[i + 1];
      const cpX = (current.x + next.x) / 2;
      path += ` Q ${cpX} ${current.y}, ${next.x} ${next.y}`;
    }
    
    return path;
  };

  return (
    <GDSlideContainer
      id="slide-7"
      title="Your Roadmap to Predictive Performance"
      subtitle="The proven path from reactive to first-mover"
      slideNumber={8}
      isPlaying={isPlaying}
      isLoading={isLoading}
      progress={progress}
      hasCompleted={hasCompleted}
      onPlay={onPlay}
      onPause={onPause}
      onNextSlide={onNextSlide}
    >
      <div className="flex flex-col gap-2 h-full max-h-full overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 items-stretch flex-1">
          {/* LEFT: Hockey Stick Curve - 2x scaled */}
          <div className="bg-card/30 rounded-xl border border-border/30 p-3 md:p-4 flex items-center justify-center lg:col-span-2">
            <svg
              viewBox={viewBox}
              className="w-full h-auto max-h-[420px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="gdSlideGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(0 70% 50%)" />
                  <stop offset="25%" stopColor="hsl(199 89% 48%)" />
                  <stop offset="50%" stopColor="hsl(173 80% 40%)" />
                  <stop offset="75%" stopColor="hsl(280 65% 55%)" />
                  <stop offset="100%" stopColor="hsl(45 93% 58%)" />
                </linearGradient>
                
                <filter id="gdSlideGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <filter id="gdSlideActiveGlow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="12" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>


              {/* Y-axis - 2x scaled */}
              <line x1="90" y1="660" x2="90" y2="60" stroke="hsl(222 47% 25%)" strokeWidth="3" />
              <polygon points="90,50 82,66 98,66" fill="hsl(222 47% 25%)" />
              
              <text
                x="36"
                y="360"
                fill="hsl(215 20% 65%)"
                fontSize="20"
                fontWeight="600"
                textAnchor="middle"
                transform="rotate(-90, 36, 360)"
                className="font-display"
              >
                INTELLIGENCE VALUE
              </text>

              {/* X-axis - 2x scaled */}
              <line x1="90" y1="660" x2={isMobile ? 800 : 1120} y2="660" stroke="hsl(222 47% 25%)" strokeWidth="3" />
              <polygon points={isMobile ? "810,660 794,652 794,668" : "1130,660 1114,652 1114,668"} fill="hsl(222 47% 25%)" />

              {/* Grid lines - 2x scaled */}
              {[180, 320, 460, 560].map((y) => (
                <line
                  key={y}
                  x1="90"
                  y1={y}
                  x2={isMobile ? 800 : 1120}
                  y2={y}
                  stroke="hsl(222 47% 15%)"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              ))}

              {/* Hockey stick curve - 2x stroke */}
              <path
                d={generateCurvePath()}
                fill="none"
                stroke="url(#gdSlideGradient)"
                strokeWidth="6"
                strokeLinecap="round"
                filter="url(#gdSlideGlow)"
                className="opacity-100"
              />

              {/* Platform Shift marker - desktop only, 2x scaled */}
              {!isMobile && (
                <g className="opacity-100">
                  <line x1="560" y1="460" x2="560" y2="660" stroke="hsl(173 80% 40%)" strokeWidth="3" strokeDasharray="8,6" />
                  <rect x="470" y="510" width="180" height="40" rx="6" fill="hsl(173 80% 40% / 0.2)" stroke="hsl(173 80% 40%)" strokeWidth="2" />
                  <text x="560" y="538" fill="hsl(173 80% 50%)" fontSize="18" fontWeight="600" textAnchor="middle" className="font-display">
                    CONNECTED INTELLIGENCE
                  </text>
                </g>
              )}

              {/* Stage markers - 2x scaled */}
              {roadmapStagesData.map((stage, index) => {
                const point = curvePoints[index];
                const isStageActive = activeStage === stage.stage;
                
                return (
                  <g key={stage.id} className="cursor-pointer" onClick={() => setActiveStage(stage.stage)}>
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r={isStageActive ? 24 : 18}
                      fill={stage.accentColor}
                      filter={isStageActive ? "url(#gdSlideActiveGlow)" : "url(#gdSlideGlow)"}
                      className="transition-all duration-300 opacity-100"
                    />
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r={isStageActive ? 12 : 8}
                      fill="hsl(222 47% 6%)"
                      className="transition-all duration-300 opacity-100"
                    />
                    <text
                      x={point.x}
                      y={point.y + 8}
                      fill={stage.accentColor}
                      fontSize="18"
                      fontWeight="bold"
                      textAnchor="middle"
                      className="transition-all duration-300 opacity-100"
                    >
                      {stage.stage}
                    </text>

                    {/* X-axis labels - 2x font */}
                    {(() => {
                      const shortLabels: Record<number, string> = {
                        1: "Fragmented",
                        2: "Managed",
                        3: "Connected",
                        4: "Optimized",
                        5: "Predictive",
                      };
                      return (
                        <text
                          x={point.x}
                          y="696"
                          fill={isStageActive ? stage.accentColor : "hsl(215 20% 65%)"}
                          fontSize={isMobile ? "18" : "20"}
                          fontWeight={isStageActive ? "700" : "500"}
                          textAnchor="middle"
                          className="font-display transition-colors duration-300"
                        >
                          {shortLabels[stage.stage]}
                        </text>
                      );
                    })()}

                    {/* Active stage annotations - desktop only, 2x scaled */}
                    {isStageActive && !isMobile && curveAnnotations[stage.stage] && (
                      <g className="animate-fade-in">
                        <rect
                          x={point.x - 130}
                          y={stage.stage === 5 ? point.y + 40 : point.y - 136}
                          width="260"
                          height={curveAnnotations[stage.stage].length * 28 + 24}
                          rx="8"
                          fill="hsl(222 47% 10% / 0.95)"
                          stroke={stage.accentColor}
                          strokeWidth="2"
                        />
                        {curveAnnotations[stage.stage].map((annotation, i) => (
                          <text
                            key={i}
                            x={point.x}
                            y={stage.stage === 5 ? point.y + 72 + i * 28 : point.y - 104 + i * 28}
                            fill="hsl(210 40% 98%)"
                            fontSize="16"
                            textAnchor="middle"
                            className="font-medium"
                          >
                            {annotation}
                          </text>
                        ))}
                      </g>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>

          {/* RIGHT: Stage Details Panel */}
          <div className="bg-card/30 rounded-xl border border-border/30 p-4 md:p-6">
            <div className={`transition-all duration-500 ${isNarrationControlled ? 'animate-fade-in' : ''}`}>
              <RoadmapStageDetails stage={selectedStage} />
            </div>

            {/* Stage dots navigation */}
            <div className="flex justify-center gap-2 mt-4 pt-4 border-t border-border/30">
              {roadmapStagesData.map((stage) => (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(stage.stage)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeStage === stage.stage
                      ? "scale-125"
                      : "opacity-50 hover:opacity-80"
                  }`}
                  style={{ backgroundColor: stage.accentColor }}
                  aria-label={`View stage ${stage.stage}: ${stage.headline}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Age of AI Callout */}
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mt-2">
          <p className="text-sm font-semibold text-primary">In the age of AI, Stage 3 is non-negotiable.</p>
          <p className="text-xs text-muted-foreground mt-1">
            Organizations stuck at Stages 1-2 cannot leverage AI for optimization or prediction. 
            The gap between connected and fragmented organizations is widening exponentially.
          </p>
        </div>

        {/* Summary Banner */}
        <GDMaturitySummaryBanner />
      </div>
    </GDSlideContainer>
  );
};

export default GDSlide7MaturityCurve;
