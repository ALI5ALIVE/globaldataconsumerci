import { useState, useEffect, useCallback } from "react";
import { Play, Pause } from "lucide-react";
import GDSlideContainer from "./GDSlideContainer";
import GDPyramid3D from "./GDPyramid3D";
import GDDetailsPanel, { GDLayerData } from "./GDDetailsPanel";
import type { SlideNarrationProps } from "@/types/slideProps";

// Complete content specification with inverted stages: Level 1 = Apex (PREDICTIVE), Level 5 = Base (FRAGMENTED)
const layersData: GDLayerData[] = [
  {
    id: "PREDICTIVE",
    level: 1,
    headline: "Predictive & Adaptive Category Leadership",
    sublabel: "AI-Driven Foresight",
    whatItLooksLike: [
      "AI-driven market predictions integrated into strategic planning cycles",
      "Real-time intelligence embedded across all functions",
      "Self-learning systems that auto-detect emerging trends, risks, and opportunities",
      "Category intelligence as a core board-level capability",
      "Ava anticipates market shifts before competitors can react",
    ],
    result: [
      "Data-led category leadership, outpacing competition",
      "First-mover advantage becomes systematic",
      "Teams shift from analysis to strategic action",
    ],
    whyItMatters:
      "AI compresses the insight-to-action gap while keeping humans in control — intelligence becomes a competitive moat.",
    colorClass: "bg-gradient-to-b from-pyramid-transformational to-pyramid-transformational/80",
    accentColor: "hsl(45 93% 58%)",
    behavioralShift: {
      from: "Reactive analysis and reporting",
      to: "Proactive intelligence and strategic action",
      culturalMarker: "We see what's coming before it arrives",
    },
    timeAllocation: {
      reconciliation: 5,
      analysis: 20,
      strategic: 75,
    },
    valueProof: {
      metrics: ["Category share +3-5pts", "35% faster response", "ROI 15:1+", "First-mover systematic"],
      roiStatement: "See disruption before it hits—and act first.",
    },
  },
  {
    id: "OPERATIONAL",
    level: 2,
    headline: "Operational Intelligence",
    sublabel: "Intelligent Ops",
    whatItLooksLike: [
      "Advanced analytics integrated into daily workflows across multiple markets",
      "Consumer, category, and commercial insights connected in unified models",
      "AI augmentation: automated trend detection, decision recommendations",
      "Category insights embedded into key commercial and innovation decisions",
    ],
    result: [
      "Predictive-led decisions at local and regional levels",
      "Reduced decision latency, faster time-to-market",
      "Measurable performance improvement across KPIs",
    ],
    whyItMatters:
      "Turns intelligence into controlled execution, not just reporting. Decisions in days, not weeks.",
    colorClass: "bg-gradient-to-b from-pyramid-commercial to-pyramid-commercial/80",
    accentColor: "hsl(280 65% 55%)",
    behavioralShift: {
      from: "Manual insight synthesis and presentation",
      to: "Ava-augmented decisions with embedded intelligence",
      culturalMarker: "Insights drive real change, not just reports",
    },
    timeAllocation: {
      reconciliation: 10,
      analysis: 30,
      strategic: 60,
    },
    valueProof: {
      metrics: ["Decision cycle -40-70%", "ROMI +25%", "Innovation hit +30%", "NPD hit rate ↑"],
      roiStatement: "60% of time on growth decisions, AI synthesizes complexity.",
    },
  },
  {
    id: "CONNECTED",
    level: 3,
    headline: "Connected & Governed Intelligence",
    sublabel: "Unified Platform",
    whatItLooksLike: [
      "Unified taxonomy, governance, and KPIs across all data types and markets",
      "Democratized, self-service access to insights",
      "Consistent brand safety, compliance, and usage policies globally",
      "Market, Consumer, Commercial intelligence unified into one governed system",
    ],
    result: [
      "Speed-to-insight improves; dependency on specialists reduced",
      "Improved governance and confidence, foundation for optimization",
      "Reconciliation time drops 60%",
    ],
    whyItMatters:
      "Eliminates handoffs and creates one version of intelligence truth. This is the platform shift.",
    colorClass: "bg-gradient-to-b from-pyramid-operational to-pyramid-operational/80",
    accentColor: "hsl(173 80% 40%)",
    behavioralShift: {
      from: "Debating whose data is right",
      to: "Acting on one shared truth",
      culturalMarker: "We can see what's happening across the market",
    },
    timeAllocation: {
      reconciliation: 20,
      analysis: 40,
      strategic: 40,
    },
    valueProof: {
      metrics: ["70% self-service", "Data prep -50%", "Reconciliation ↓60%", "Audit-ready"],
      roiStatement: "One truth means 60% less time reconciling—more time winning.",
    },
  },
  {
    id: "MANAGED",
    level: 4,
    headline: "Managed but Siloed Intelligence",
    sublabel: "Silo Optimisation",
    whatItLooksLike: [
      "Multiple data sources and visualization tools in use",
      "Data ownership exists but is fragmented by function or region",
      "Reporting is regular, but mostly backward-looking",
      "Strong tools within market, innovation, consumer, competitive domains",
    ],
    result: [
      "Partial efficiency gains—but still limited strategic leverage",
      "Intelligence is trusted but not connected — progress is incremental",
      "No shared view of demand across the organization",
    ],
    whyItMatters:
      "Domains operate well individually, but lack of connection prevents organizational alignment.",
    colorClass: "bg-gradient-to-b from-pyramid-foundation to-pyramid-foundation/80",
    accentColor: "hsl(199 89% 48%)",
    behavioralShift: {
      from: "Insight overload with limited synthesis",
      to: "Structured processes within each silo",
      culturalMarker: "We're informed, but not aligned",
    },
    timeAllocation: {
      reconciliation: 40,
      analysis: 40,
      strategic: 20,
    },
    valueProof: {
      metrics: ["Reporting cycle -30%", "Dept intelligence ↑", "Cross-func limited", "Silo ROI only"],
      roiStatement: "Structured intelligence, but limited cross-functional value.",
    },
  },
  {
    id: "FRAGMENTED",
    level: 5,
    headline: "Fragmented & Reactive Intelligence",
    sublabel: "Starting Point",
    whatItLooksLike: [
      "Insight requests handled ad hoc; minimal self-service",
      "Multiple, disconnected tools and data sources",
      "Decisions often made with incomplete or outdated data",
      "Every decision starts with 'which data source should we trust?'",
      "Innovation team and commercial team have different views of the same consumer",
    ],
    result: [
      "High dependency on external vendors who each have different taxonomies",
      "High decision latency and missed windows",
      "Launches fail due to incomplete intelligence",
    ],
    whyItMatters:
      "Fragmentation is where growth stalls, relevance erodes, and leadership is lost — this is where most organizations start.",
    colorClass: "bg-gradient-to-b from-pyramid-fragmentation to-pyramid-fragmentation/80",
    accentColor: "hsl(0 70% 50%)",
    behavioralShift: {
      from: "Reconciling conflicting data across providers",
      to: "Reactive decisions just to keep up",
      culturalMarker: "We have data, but no confidence",
    },
    timeAllocation: {
      reconciliation: 60,
      analysis: 30,
      strategic: 10,
    },
    valueProof: {
      metrics: ["High vendor spend", "Low self-service", "Missed windows ↑", "Decision latency 12+ wks"],
      roiStatement: "Hidden costs: reconciliation, late validation, opportunities lost.",
    },
  },
];

const glowClasses: Record<string, string> = {
  PREDICTIVE: "glow-transformational",
  OPERATIONAL: "glow-commercial",
  CONNECTED: "glow-operational",
  MANAGED: "glow-foundation",
  FRAGMENTED: "glow-fragmentation",
};

// Progression from base to apex (narration order)
const layerOrder = ["FRAGMENTED", "MANAGED", "CONNECTED", "OPERATIONAL", "PREDICTIVE"];

// Timing markers for narration-synced stage changes
const stageTimings = [
  { stage: "FRAGMENTED", startPercent: 12 },
  { stage: "MANAGED", startPercent: 28 },
  { stage: "CONNECTED", startPercent: 42 },
  { stage: "OPERATIONAL", startPercent: 56 },
  { stage: "PREDICTIVE", startPercent: 72 },
];

const GDSlide6ValuePyramid = ({
  isPlaying: narrationPlaying = false,
  isLoading: narrationLoading = false,
  progress: narrationProgress = 0,
  hasCompleted = false,
  onPlay,
  onPause,
  onNextSlide,
}: SlideNarrationProps) => {
  const [activeLayerId, setActiveLayerId] = useState("FRAGMENTED");
  const [highlightedModule, setHighlightedModule] = useState<string | null>(null);
  const [isAutoCycling, setIsAutoCycling] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isNarrationControlled, setIsNarrationControlled] = useState(false);

  const activeLayer = layersData.find((l) => l.id === activeLayerId) || layersData[4];
  const currentIndex = layerOrder.indexOf(activeLayerId);

  // Sync stage with narration progress
  useEffect(() => {
    if (narrationPlaying && narrationProgress > 0) {
      setIsNarrationControlled(true);
      setIsAutoCycling(false);
      
      const currentTiming = [...stageTimings]
        .reverse()
        .find(t => narrationProgress >= t.startPercent);
      
      if (currentTiming && currentTiming.stage !== activeLayerId) {
        setActiveLayerId(currentTiming.stage);
      }
    } else if (!narrationPlaying && isNarrationControlled) {
      setIsNarrationControlled(false);
    }
  }, [narrationPlaying, narrationProgress, activeLayerId, isNarrationControlled]);

  // Auto-cycle through stages (only when not narration-controlled)
  useEffect(() => {
    if (!isAutoCycling || isNarrationControlled) {
      setProgress(0);
      return;
    }

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 2;
      });
    }, 80);

    const cycleInterval = setInterval(() => {
      setActiveLayerId((prev) => {
        const currentIdx = layerOrder.indexOf(prev);
        const nextIdx = (currentIdx + 1) % layerOrder.length;
        return layerOrder[nextIdx];
      });
      setProgress(0);
    }, 4000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(cycleInterval);
    };
  }, [isAutoCycling, isNarrationControlled]);

  const handleLayerClick = useCallback((level: number) => {
    const layer = layersData.find((l) => l.level === level);
    if (layer) {
      setActiveLayerId(layer.id);
      setHighlightedModule(null);
      setIsAutoCycling(false);
    }
  }, []);

  const handleModuleClick = useCallback((module: string) => {
    setActiveLayerId("MANAGED");
    setHighlightedModule(module);
    setIsAutoCycling(false);
    setTimeout(() => setHighlightedModule(null), 3000);
  }, []);

  const handleDotClick = (index: number) => {
    setActiveLayerId(layerOrder[index]);
    setIsAutoCycling(false);
    setProgress(0);
  };

  return (
    <GDSlideContainer
      id="slide-6"
      title="Intelligence Maturity Ladder"
      subtitle="From fragmented point solutions to connected intelligence that drives category leadership"
      slideNumber={6}
      isPlaying={narrationPlaying}
      isLoading={narrationLoading}
      progress={narrationProgress}
      hasCompleted={hasCompleted}
      onPlay={onPlay}
      onPause={onPause}
      onNextSlide={onNextSlide}
    >
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch h-full">
        {/* LEFT: Pyramid Visual */}
        <div className="w-full min-h-[300px] lg:min-h-[400px] flex items-center justify-center">
          <GDPyramid3D
            layers={layersData.map((layer) => ({
              id: layer.id,
              level: layer.level,
              label: layer.headline,
              sublabel: layer.sublabel,
              colorClass: layer.colorClass,
              glowClass: glowClasses[layer.id],
            }))}
            activeLayer={activeLayer.level}
            onLayerClick={handleLayerClick}
            onModuleClick={handleModuleClick}
            compact={true}
          />
        </div>

        {/* RIGHT: Details Panel */}
        <div className="h-full overflow-y-auto bg-card/30 rounded-lg p-4 border border-border/30 flex flex-col">
          <div className={`flex-1 transition-all duration-500 ${isNarrationControlled ? 'animate-fade-in' : ''}`}>
            <GDDetailsPanel layer={activeLayer} highlightedModule={highlightedModule} />
          </div>
          
          {/* Stage Indicator & Controls */}
          <div className="mt-3 pt-3 border-t border-border/30">
            <div className="flex items-center justify-between gap-2">
              {/* Stage dots */}
              <div className="flex items-center gap-1.5">
                {layerOrder.map((id, index) => (
                  <button
                    key={id}
                    onClick={() => handleDotClick(index)}
                    className={`relative w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentIndex
                        ? "bg-primary scale-125"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to stage ${5 - index}`}
                  >
                    {index === currentIndex && isAutoCycling && (
                      <span 
                        className="absolute inset-0 rounded-full bg-primary/30 animate-ping"
                        style={{ animationDuration: "2s" }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Progress bar */}
              {isAutoCycling && (
                <div className="flex-1 h-1 bg-muted/30 rounded-full overflow-hidden max-w-16">
                  <div 
                    className="h-full bg-primary/60 transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}

              {/* Play/Pause button */}
              <button
                onClick={() => setIsAutoCycling(!isAutoCycling)}
                className="flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-medium bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                aria-label={isAutoCycling ? "Pause auto-play" : "Resume auto-play"}
              >
                {isAutoCycling ? (
                  <>
                    <Pause className="w-2.5 h-2.5" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-2.5 h-2.5" />
                    <span>Auto-play</span>
                  </>
                )}
              </button>
            </div>

            {/* Stage label */}
            <p className="text-[9px] text-muted-foreground mt-1.5 text-center">
              Stage {activeLayer.level} of 5 · {isAutoCycling ? "Click pyramid or pause to explore" : "Click play to resume"}
            </p>
          </div>
        </div>
      </div>
    </GDSlideContainer>
  );
};

export default GDSlide6ValuePyramid;
