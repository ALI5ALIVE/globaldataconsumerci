import { useState, useEffect, useCallback, useMemo } from "react";
import GDSlideContainer from "./GDSlideContainer";
import GDPyramid3D from "./GDPyramid3D";
import GDDetailsPanel, { GDLayerData } from "./GDDetailsPanel";
import type { SlideNarrationProps } from "@/types/slideProps";
import { getGlobalDataNarration } from "@/data/globalDataNarration";
import { computeStageTimingsFromScript } from "@/utils/narrationTimingUtils";

// Marker phrases for each stage in the narration script (slideId: 6)
const STAGE_MARKERS = [
  { stage: "FRAGMENTED", phrase: "At the base: Fragmented and Reactive." },
  { stage: "MANAGED", phrase: "Stage two: Managed but Siloed." },
  { stage: "CONNECTED", phrase: "Stage three: Connected and Governed." },
  { stage: "OPTIMISED", phrase: "Stage four: Operational Intelligence." },
  { stage: "PREDICTIVE", phrase: "And at the apex: Predictive and Adaptive." },
];

// Fallback timings if script parsing fails
const FALLBACK_TIMINGS = [
  { stage: "FRAGMENTED", startPercent: 12 },
  { stage: "MANAGED", startPercent: 28 },
  { stage: "CONNECTED", startPercent: 42 },
  { stage: "OPTIMISED", startPercent: 56 },
  { stage: "PREDICTIVE", startPercent: 72 },
];

// Complete content specification: Level 1 = Base (FRAGMENTED), Level 5 = Apex (PREDICTIVE)
const layersData: GDLayerData[] = [
  {
    id: "PREDICTIVE",
    level: 5,
    headline: "Predictive & Adaptive Category Performance",
    sublabel: "AI-Driven Foresight",
    whatItLooksLike: [
      "Ava anticipates market shifts across all five intelligence domains simultaneously",
      "AI recommends which products to defend, which opportunities to pursue, which threats to monitor",
      "Self-learning systems that auto-detect emerging trends, risks, and opportunities",
      "Category intelligence as a core board-level capability",
      "Every insight builds on every other—value compounds exponentially",
    ],
    result: [
      "Data-led category performance, outpacing competition",
      "Two times higher launch success",
      "Thirty percent lower total cost of ownership",
      "First-mover advantage becomes systematic",
    ],
    whyItMatters:
      "The intelligence value compounds exponentially. Ava anticipates across all five domains simultaneously—unlocking value that's impossible at lower stages. This is the capability that defines future category leaders.",
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
      metrics: ["Decision speed ↑ 70%", "Launch success 2x", "TCO ↓ 30%", "First-mover systematic"],
      roiStatement: "See disruption before it hits. 2x launch success, 30% lower TCO.",
    },
  },
  {
    id: "OPTIMISED",
    level: 4,
    headline: "Optimised Intelligence",
    sublabel: "Intelligence in Action",
    whatItLooksLike: [
      "AI is no longer siloed—it's orchestrating across all five intelligence domains",
      "Automated alerts when market conditions shift",
      "Proactive recommendations across all five domains",
      "The intelligence system doesn't wait to be asked—it surfaces what matters",
    ],
    result: [
      "Decisions in days, not weeks",
      "70% faster decision cycles",
      "Measurable performance improvement across KPIs",
    ],
    whyItMatters:
      "Intelligence becomes operational. AI doesn't just surface insights—it recommends actions across the connected system. New ways of working become possible.",
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
      metrics: ["Decision speed ↑ 70%", "ROMI +25%", "Launch success ↑", "NPD hit rate ↑"],
      roiStatement: "Decisions in days, not weeks. 70% faster decision cycles.",
    },
  },
  {
    id: "CONNECTED",
    level: 3,
    headline: "Connected & Governed Intelligence",
    sublabel: "Unified Platform",
    whatItLooksLike: [
      "Five best-in-class intelligence solutions—Market, Consumer, Competitive, Innovation, Commercial—unified under one taxonomy",
      "The depth and quality of intelligence, not just the connection",
      "AI can finally learn across functions—enabling truly aligned AI strategy",
      "Democratized, self-service access to insights with proper governance",
    ],
    result: [
      "Reconciliation time drops 60%—because there's one truth",
      "Foundation for AI-powered optimization and prediction",
      "Speed-to-insight improves; dependency on specialists reduced",
      "Improved governance and confidence",
    ],
    whyItMatters:
      "This is where AI becomes truly valuable. Five best-in-class solutions sharing one taxonomy means AI can learn across your entire intelligence landscape—not just automate individual tools. This is the foundation for a truly aligned AI strategy.",
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
    level: 2,
    headline: "Managed but Siloed Intelligence",
    sublabel: "Silo Optimisation",
    whatItLooksLike: [
      "AI may exist within individual tools—but it's siloed",
      "It automates what you already have, not enabling new ways of working",
      "Strong tools within market, innovation, consumer, competitive domains—but fragmented",
      "Data ownership exists but is fragmented by function or region",
    ],
    result: [
      "Partial efficiency gains—but still limited strategic leverage",
      "Intelligence is trusted but not connected—progress is incremental",
      "No shared view of demand across the organization",
    ],
    whyItMatters:
      "AI at this stage just automates silos—it can't learn across the organisation. You're optimising fragments while competitors build connected advantages.",
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
    level: 1,
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
      "AI cannot function on fragmented data—you're locked out of the intelligence advantage entirely. This is where most organisations start, but staying here guarantees falling behind.",
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
  OPTIMISED: "glow-commercial",
  CONNECTED: "glow-operational",
  MANAGED: "glow-foundation",
  FRAGMENTED: "glow-fragmentation",
};

// Progression from base to apex (narration order)
const layerOrder = ["FRAGMENTED", "MANAGED", "CONNECTED", "OPTIMISED", "PREDICTIVE"];

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
  const [isNarrationControlled, setIsNarrationControlled] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Compute stage timings from script at runtime
  const stageTimings = useMemo(() => {
    const narration = getGlobalDataNarration(6);
    if (!narration?.script) {
      console.warn("[GDSlide6ValuePyramid] No narration script found, using fallback timings");
      return FALLBACK_TIMINGS;
    }
    return computeStageTimingsFromScript(
      narration.script,
      STAGE_MARKERS,
      1.5, // lag percent
      FALLBACK_TIMINGS
    );
  }, []);

  const activeLayer = layersData.find((l) => l.id === activeLayerId) || layersData[4];
  const currentIndex = layerOrder.indexOf(activeLayerId);

  // Sync stage with narration progress
  useEffect(() => {
    if (narrationPlaying && narrationProgress > 0) {
      setIsNarrationControlled(true);
      
      const currentTiming = [...stageTimings]
        .reverse()
        .find(t => narrationProgress >= t.startPercent);
      
      if (currentTiming && currentTiming.stage !== activeLayerId) {
        setActiveLayerId(currentTiming.stage as string);
      }
    } else if (!narrationPlaying && isNarrationControlled) {
      setIsNarrationControlled(false);
    }
  }, [narrationPlaying, narrationProgress, activeLayerId, isNarrationControlled]);


  const handleLayerClick = useCallback((level: number) => {
    const layer = layersData.find((l) => l.level === level);
    if (layer && layer.id !== activeLayerId) {
      setIsTransitioning(true);
      setHighlightedModule(null);
      
      // After fade-out, switch content and fade-in
      setTimeout(() => {
        setActiveLayerId(layer.id);
        setIsTransitioning(false);
      }, 200);
    }
  }, [activeLayerId]);

  const handleModuleClick = useCallback((module: string) => {
    // Only switch to MANAGED stage for Level 2 silo modules
    const siloModules = ["nielseniq", "circana", "kantar", "euromonitor", "mintel"];
    if (siloModules.includes(module)) {
      setActiveLayerId("MANAGED");
    }
    setHighlightedModule(module);
    setTimeout(() => setHighlightedModule(null), 3000);
  }, []);

  const handleDotClick = (index: number) => {
    setActiveLayerId(layerOrder[index]);
  };

  return (
    <GDSlideContainer
      id="slide-6"
      title="The Intelligence Maturity Ladder: Where Are You?"
      subtitle="The higher you climb, the more your intelligence compounds—critical for future success."
      slideNumber={7}
      isPlaying={narrationPlaying}
      isLoading={narrationLoading}
      progress={narrationProgress}
      hasCompleted={hasCompleted}
      onPlay={onPlay}
      onPause={onPause}
      onNextSlide={onNextSlide}
    >
      <div className="grid lg:grid-cols-[3fr_2fr] gap-3 lg:gap-4 items-stretch h-full max-h-full overflow-hidden">
        {/* LEFT: Pyramid Visual */}
        <div className="w-full min-h-0 max-h-[420px] flex items-center justify-center">
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
          <div className={`flex-1 transition-all duration-200 ${
            isTransitioning 
              ? 'opacity-0 translate-x-4' 
              : 'opacity-100 translate-x-0'
          }`}>
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
                    aria-label={`Go to stage ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Stage label */}
            <p className="text-[9px] text-muted-foreground mt-1.5 text-center truncate">
              Stage {activeLayer.level} of 5 · Click pyramid to explore
            </p>
          </div>
        </div>
      </div>
    </GDSlideContainer>
  );
};

export default GDSlide6ValuePyramid;
