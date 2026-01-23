import { useState, useEffect } from "react";
import GDSlideContainer from "./GDSlideContainer";
import MaturityStageDetails from "@/components/MaturityStageDetails";
import GDMaturitySummaryBanner from "./GDMaturitySummaryBanner";
import { useIsMobile } from "@/hooks/use-mobile";
import type { MaturityStage } from "@/components/MaturityCurveVisualization";
import type { SlideNarrationProps } from "@/types/slideProps";

const stagesData: MaturityStage[] = [
  {
    id: "FRAGMENTED",
    stage: 1,
    headline: "Fragmented & Reactive",
    sublabel: "Manual / Reactive",
    whatItLooksLike: [
      "Insights scattered across disconnected tools",
      "No shared taxonomy across intelligence domains",
      "Decisions debated for weeks with conflicting data",
      "Manual reconciliation required for every decision",
    ],
    result: [
      "High decision latency and missed windows",
      "Launches fail due to incomplete intelligence",
    ],
    whyItMatters:
      "AI cannot function on fragmented data—organizations here are locked out of the AI advantage",
    accentColor: "hsl(0 70% 50%)",
    behavioralShift: {
      from: "Debating data across systems",
      to: "Reactive decisions just to keep up",
      culturalMarker: "We have data, but no confidence",
    },
    timeAllocation: {
      coordination: 60,
      administration: 30,
      improvement: 10,
    },
    valueProof: {
      metrics: ["Decision latency 12+ wks", "3-5 conflicting sources", "40% miss windows"],
      roiStatement: "Hidden costs: missed opportunities, failed launches, eroded margins",
    },
    curveAnnotations: ["Disconnected tools", "No shared taxonomy", "Slow decisions"],
  },
  {
    id: "MANAGED",
    stage: 2,
    headline: "Managed (Siloed)",
    sublabel: "Silo Optimisation",
    whatItLooksLike: [
      "Strong systems in specific domains",
      "Intelligence is structured but disconnected",
      "Analysis produces insights but alignment is inconsistent",
    ],
    result: [
      "Intelligence is managed, but decisions do not systematically improve",
      "Conflicting data persists",
    ],
    whyItMatters:
      "Silos prevent AI from learning across the organization. Progress stops here without unification",
    accentColor: "hsl(199 89% 48%)",
    behavioralShift: {
      from: "Debating data with limited visibility",
      to: "Structured processes within each silo",
      culturalMarker: "We're informed, but not aligned",
    },
    timeAllocation: {
      coordination: 45,
      administration: 35,
      improvement: 20,
    },
    valueProof: {
      metrics: ["Domain coverage ↑", "Process consistency ↑", "Cross-func ROI limited"],
      roiStatement: "Structured intelligence, but limited cross-functional ROI",
    },
    curveAnnotations: ["Better process", "Still manual handoffs", "Slow change cycles"],
  },
  {
    id: "CONNECTED",
    stage: 3,
    headline: "Connected Intelligence",
    sublabel: "Platform Shift",
    whatItLooksLike: [
      "Market, Consumer, Commercial intelligence unified into one governed system",
      "Shared taxonomy and traceability established",
      "Visibility improves; fragmentation reduces",
    ],
    result: [
      "Improved governance and confidence",
      "Decision readiness increases",
      "Foundation for optimized operations is in place",
    ],
    whyItMatters:
      "The AI threshold—unified data is the prerequisite for intelligent automation. Without it, Stages 4 and 5 remain out of reach.",
    accentColor: "hsl(173 80% 40%)",
    behavioralShift: {
      from: "Chasing data across tools and vendors",
      to: "Single source of truth, async collaboration",
      culturalMarker: "We can see what's happening across the market",
    },
    timeAllocation: {
      coordination: 30,
      administration: 35,
      improvement: 35,
    },
    valueProof: {
      metrics: ["Decision prep ↓ 30%", "Handoffs ↓ 50%", "Visibility ↑"],
      roiStatement: "Reconciliation time drops 60%",
    },
    curveAnnotations: ["AI THRESHOLD", "Reconciliation ↓60%", "Unified data unlocks AI"],
  },
  {
    id: "OPTIMIZED",
    stage: 4,
    headline: "Optimized Operations",
    sublabel: "Intelligent Ops",
    whatItLooksLike: [
      "Intelligence embedded directly into decision workflows",
      "Continuous improvement cycles across all functions",
      "Evidence captured automatically at every decision point",
      "Cross-functional alignment through shared dashboards",
    ],
    result: [
      "Reduced decision latency",
      "Faster time-to-market",
      "Measurable performance improvement across KPIs",
    ],
    whyItMatters:
      "AI-augmented decisions—only possible because connected data enables machine learning across functions",
    accentColor: "hsl(280 65% 55%)",
    behavioralShift: {
      from: "Reactive fixes and analysis requests",
      to: "Proactive improvement with outcome ownership",
      culturalMarker: "Insights drive real change, not just reports",
    },
    timeAllocation: {
      coordination: 20,
      administration: 30,
      improvement: 50,
    },
    valueProof: {
      metrics: ["Latency ↓ 50%", "Time-to-market ↓ 40%", "KPI lift ↑"],
      roiStatement: "Decisions in days, not weeks",
    },
    curveAnnotations: ["Decisions in days, not weeks", "Prioritised interventions", "Faster decisions"],
  },
  {
    id: "PREDICTIVE",
    stage: 5,
    headline: "Predictive & Proactive",
    sublabel: "AI-Driven Foresight",
    whatItLooksLike: [
      "AI anticipates market shifts before they surface",
      "Proactive positioning recommendations generated automatically",
      "Decisions made before competitors can react",
      "Continuous market monitoring with exception-led alerts",
      "Intelligence compounds across the value chain",
    ],
    result: [
      "Category performance through speed and foresight",
      "First-mover advantage becomes systematic",
      "Teams shift from analysis to strategic action",
    ],
    whyItMatters:
      "AI anticipates and acts—but only for organizations that first achieved connection. This is where the AI advantage compounds",
    accentColor: "hsl(45 93% 58%)",
    behavioralShift: {
      from: "Reactive analysis and reporting",
      to: "Proactive intelligence and strategic action",
      culturalMarker: "We see what's coming before it arrives",
    },
    timeAllocation: {
      coordination: 10,
      administration: 20,
      improvement: 70,
    },
    valueProof: {
      metrics: ["Decision speed ↑ 70%", "Launch success 2x", "TCO ↓ 30%"],
      roiStatement: "See disruption before it hits",
    },
    curveAnnotations: ["See disruption before it hits", "Human-in-loop control", "Continuous proof"],
  },
];

// Timing markers for narration-synced stage changes
const stageTimings = [
  { stage: 1, startPercent: 10 },
  { stage: 2, startPercent: 22 },
  { stage: 3, startPercent: 35 },
  { stage: 4, startPercent: 50 },
  { stage: 5, startPercent: 68 },
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
  const [isAnimated, setIsAnimated] = useState(false);
  const [isNarrationControlled, setIsNarrationControlled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

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
    stagesData.find((s) => s.stage === activeStage) || stagesData[0];

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
      slideNumber={7}
      isPlaying={isPlaying}
      isLoading={isLoading}
      progress={progress}
      hasCompleted={hasCompleted}
      onPlay={onPlay}
      onPause={onPause}
      onNextSlide={onNextSlide}
    >
      <div className="flex flex-col gap-3 h-full max-h-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch flex-1">
          {/* LEFT: Hockey Stick Curve - 2x scaled */}
          <div className="bg-card/30 rounded-xl border border-border/30 p-4 md:p-6 flex items-center justify-center lg:col-span-2">
            <svg
              viewBox={viewBox}
              className="w-full h-auto max-h-[500px]"
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
                {/* AI Territory gradient fill */}
                <linearGradient id="gdAITerritoryGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(45 93% 58%)" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="hsl(173 80% 40%)" stopOpacity="0.05" />
                </linearGradient>

                {/* Pre-AI Territory gradient fill */}
                <linearGradient id="gdPreAITerritoryGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(199 89% 48%)" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="hsl(0 70% 50%)" stopOpacity="0.12" />
                </linearGradient>
              </defs>

              {/* AI-POWERED TERRITORY shading (above Stage 3) */}
              {!isMobile && (
                <g className={`transition-opacity duration-700 ${isAnimated ? "opacity-100" : "opacity-0"}`}>
                  <rect 
                    x="540" 
                    y="60" 
                    width="580" 
                    height="420" 
                    rx="12" 
                    fill="url(#gdAITerritoryGrad)" 
                  />
                  <text 
                    x="830" 
                    y="90" 
                    fill="hsl(45 93% 58%)" 
                    fontSize="16" 
                    fontWeight="700" 
                    textAnchor="middle" 
                    className="font-display uppercase tracking-wider"
                  >
                    AI-POWERED TERRITORY
                  </text>
                </g>
              )}

              {/* PRE-AI TERRITORY shading (below Stage 3) */}
              {!isMobile && (
                <g className={`transition-opacity duration-700 ${isAnimated ? "opacity-100" : "opacity-0"}`}>
                  <rect 
                    x="100" 
                    y="500" 
                    width="440" 
                    height="150" 
                    rx="12" 
                    fill="url(#gdPreAITerritoryGrad)" 
                  />
                  <text 
                    x="320" 
                    y="630" 
                    fill="hsl(0 70% 60%)" 
                    fontSize="14" 
                    fontWeight="600" 
                    textAnchor="middle" 
                    className="font-display uppercase tracking-wider"
                  >
                    PRE-AI TERRITORY
                  </text>
                </g>
              )}

              {/* AI THRESHOLD line at Stage 3 */}
              {!isMobile && (
                <g className={`transition-opacity duration-700 delay-300 ${isAnimated ? "opacity-100" : "opacity-0"}`}>
                  <line 
                    x1="90" 
                    y1="460" 
                    x2="1120" 
                    y2="460" 
                    stroke="hsl(45 93% 58%)" 
                    strokeWidth="3" 
                    strokeDasharray="12,8"
                    opacity="0.7"
                  />
                  <rect 
                    x="980" 
                    y="440" 
                    width="130" 
                    height="36" 
                    rx="6" 
                    fill="hsl(45 93% 58%)" 
                    fillOpacity="0.2"
                    stroke="hsl(45 93% 58%)"
                    strokeWidth="2"
                  />
                  <text 
                    x="1045" 
                    y="464" 
                    fill="hsl(45 93% 58%)" 
                    fontSize="14" 
                    fontWeight="700" 
                    textAnchor="middle" 
                    className="font-display"
                  >
                    AI GATEWAY
                  </text>
                </g>
              )}

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
                className={`transition-all duration-1000 ${isAnimated ? "opacity-100" : "opacity-0"}`}
              />

              {/* Platform Shift marker - desktop only, 2x scaled */}
              {!isMobile && (
                <g className={`transition-opacity duration-700 delay-500 ${isAnimated ? "opacity-100" : "opacity-0"}`}>
                  <line x1="560" y1="460" x2="560" y2="660" stroke="hsl(173 80% 40%)" strokeWidth="3" strokeDasharray="8,6" />
                  <rect x="470" y="510" width="180" height="40" rx="6" fill="hsl(173 80% 40% / 0.2)" stroke="hsl(173 80% 40%)" strokeWidth="2" />
                  <text x="560" y="538" fill="hsl(173 80% 50%)" fontSize="18" fontWeight="600" textAnchor="middle" className="font-display">
                    PLATFORM SHIFT
                  </text>
                </g>
              )}

              {/* Stage markers - 2x scaled */}
              {stagesData.map((stage, index) => {
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
                      className={`transition-all duration-300 ${isAnimated ? "opacity-100" : "opacity-0"}`}
                      style={{ transitionDelay: `${index * 80}ms` }}
                    />
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r={isStageActive ? 12 : 8}
                      fill="hsl(222 47% 6%)"
                      className={`transition-all duration-300 ${isAnimated ? "opacity-100" : "opacity-0"}`}
                      style={{ transitionDelay: `${index * 80}ms` }}
                    />
                    <text
                      x={point.x}
                      y={point.y + 8}
                      fill={stage.accentColor}
                      fontSize="18"
                      fontWeight="bold"
                      textAnchor="middle"
                      className={`transition-all duration-300 ${isAnimated ? "opacity-100" : "opacity-0"}`}
                      style={{ transitionDelay: `${index * 80}ms` }}
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
                    {isStageActive && !isMobile && (
                      <g className="animate-fade-in">
                        <rect
                          x={point.x - 130}
                          y={stage.stage === 5 ? point.y + 40 : point.y - 136}
                          width="260"
                          height={stage.curveAnnotations.length * 28 + 24}
                          rx="8"
                          fill="hsl(222 47% 10% / 0.95)"
                          stroke={stage.accentColor}
                          strokeWidth="2"
                        />
                        {stage.curveAnnotations.map((annotation, i) => (
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
              <MaturityStageDetails stage={selectedStage} />
            </div>

            {/* Stage dots navigation */}
            <div className="flex justify-center gap-2 mt-4 pt-4 border-t border-border/30">
              {stagesData.map((stage) => (
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
