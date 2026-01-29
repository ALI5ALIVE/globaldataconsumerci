import { CheckCircle, Eye, Target, TrendingUp, ArrowRight, Cpu, Lock, Sparkles } from "lucide-react";

// AI Readiness indicator component
// Level 1-2 (FRAGMENTED/MANAGED) = AI Blocked
// Level 3 (CONNECTED) = AI Enabled  
// Level 4-5 (OPERATIONAL/PREDICTIVE) = AI Optimized
const AIReadinessIndicator = ({ level }: { level: number }) => {
  if (level === 1) {
    // Stage 1 (FRAGMENTED) = AI Blocked
    return (
      <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-red-500/15 border border-red-500/30">
        <Lock className="w-3 h-3 text-red-400" />
        <span className="text-[9px] font-semibold text-red-400 uppercase tracking-wider">AI Blocked</span>
      </div>
    );
  } else if (level === 2) {
    // Stage 2 (MANAGED) = AI Siloed
    return (
      <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-orange-500/15 border border-orange-500/30">
        <Lock className="w-3 h-3 text-orange-400" />
        <span className="text-[9px] font-semibold text-orange-400 uppercase tracking-wider">AI Siloed</span>
      </div>
    );
  } else if (level === 3) {
    // Stage 3 (CONNECTED) = AI Aligned
    return (
      <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30">
        <Cpu className="w-3 h-3 text-emerald-400" />
        <span className="text-[9px] font-semibold text-emerald-400 uppercase tracking-wider">AI Aligned</span>
      </div>
    );
  } else if (level === 4) {
    // Stage 4 (OPTIMISED) = AI Operational
    return (
      <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-amber-500/15 border border-amber-500/30">
        <Cpu className="w-3 h-3 text-amber-400" />
        <span className="text-[9px] font-semibold text-amber-400 uppercase tracking-wider">AI Operational</span>
      </div>
    );
  } else {
    // Stage 5 (PREDICTIVE) = AI Agentic
    return (
      <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-amber-500/15 border border-amber-500/30">
        <Sparkles className="w-3 h-3 text-amber-400" />
        <span className="text-[9px] font-semibold text-amber-400 uppercase tracking-wider">AI Agentic</span>
      </div>
    );
  }
};

export interface GDValueProof {
  metrics: string[];
  roiStatement: string;
}

export interface GDLayerData {
  id: string;
  level: number;
  headline: string;
  sublabel: string;
  whatItLooksLike: string[];
  result: string[];
  whyItMatters: string;
  colorClass: string;
  accentColor: string;
  valueProof: GDValueProof;
}

interface GDDetailsPanelProps {
  layer: GDLayerData;
  highlightedModule?: string | null;
}

const moduleHighlights: Record<string, number[]> = {
  market: [0, 1],
  innovation: [1, 2],
  consumer: [2, 3],
  competitive: [0, 3],
  commercial: [1, 2, 3],
};

const GDDetailsPanel = ({ layer, highlightedModule }: GDDetailsPanelProps) => {
  const highlightedItems = highlightedModule ? moduleHighlights[highlightedModule] || [] : [];

  return (
    <div className="h-full flex flex-col gap-2.5 text-left">
      {/* Header with AI Readiness */}
      <div className="flex items-start gap-2 mb-1">
        <div
          className="w-6 h-6 rounded-md flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
          style={{ backgroundColor: layer.accentColor }}
        >
          {layer.level}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-0.5">
            <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-medium">
              {layer.sublabel}
            </p>
            <AIReadinessIndicator level={layer.level} />
          </div>
          <h3 className="text-sm font-bold text-foreground leading-tight truncate">
            {layer.headline}
          </h3>
        </div>
      </div>

      {/* What It Looks Like */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-1">
          <Eye className="w-2.5 h-2.5" style={{ color: layer.accentColor }} />
          <span className="text-[8px] font-semibold uppercase tracking-wider text-muted-foreground">
            What It Looks Like
          </span>
        </div>
        <ul className="space-y-0.5">
          {layer.whatItLooksLike.slice(0, 4).map((item, index) => (
            <li
              key={index}
              className={`flex items-start gap-1 text-[9px] leading-snug transition-all duration-300 ${
                highlightedItems.includes(index)
                  ? "text-foreground font-medium"
                  : "text-foreground/80"
              }`}
              style={{
                backgroundColor: highlightedItems.includes(index)
                  ? `${layer.accentColor}15`
                  : "transparent",
                borderRadius: "4px",
                padding: highlightedItems.includes(index) ? "2px 4px" : "0",
              }}
            >
              <CheckCircle
                className="w-2 h-2 mt-0.5 flex-shrink-0"
                style={{ color: layer.accentColor }}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Result */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-1">
          <Target className="w-2.5 h-2.5" style={{ color: layer.accentColor }} />
          <span className="text-[8px] font-semibold uppercase tracking-wider text-muted-foreground">
            Result
          </span>
        </div>
        <ul className="space-y-0.5">
          {layer.result.slice(0, 3).map((item, index) => (
            <li key={index} className="flex items-start gap-1 text-[9px] text-foreground/80 leading-snug">
              <ArrowRight className="w-2 h-2 mt-0.5 flex-shrink-0" style={{ color: layer.accentColor }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Value Proof */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-1">
          <TrendingUp className="w-2.5 h-2.5" style={{ color: layer.accentColor }} />
          <span className="text-[8px] font-semibold uppercase tracking-wider text-muted-foreground">
            Value Proof
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {layer.valueProof.metrics.slice(0, 4).map((metric, index) => (
            <span
              key={index}
              className="px-1.5 py-0.5 rounded text-[7px] font-medium"
              style={{
                backgroundColor: `${layer.accentColor}20`,
                color: layer.accentColor,
              }}
            >
              {metric}
            </span>
          ))}
        </div>
        <p className="text-[8px] italic text-muted-foreground mt-0.5">
          "{layer.valueProof.roiStatement}"
        </p>
      </div>
    </div>
  );
};

export default GDDetailsPanel;
