import { SlideNarrationProps } from "@/types/slideProps";
import SPSlideContainer from "./SPSlideContainer";
import { cn } from "@/lib/utils";

interface MaturityStageData {
  stageNumber: number;
  slideNumber: number;
  slideId: string;
  stageName: string;
  stageSubtitle: string;
  description: string;
  capabilities: string[];
  platformFeatures: string[];
  decisionVelocity: string;
  timeAllocation: { reconciliation: number; analysis: number; strategic: number };
}

const stages = ["Fragmented", "Connected", "Optimised", "Predictive"];

const SPMaturityStage = ({ data, ...props }: { data: MaturityStageData } & SlideNarrationProps) => {
  return (
    <SPSlideContainer
      id={data.slideId}
      title="Your Intelligence Journey: Where Are You?"
      subtitle="The further you progress, the faster your intelligence compounds"
      slideNumber={data.slideNumber}
      {...props}
    >
      <div className="flex flex-col h-full gap-3">
        {/* Maturity bar */}
        <div className="flex gap-1">
          {stages.map((stage, i) => (
            <div key={stage} className={cn(
              "flex-1 rounded-lg px-2 py-2 text-center transition-all",
              i + 1 === data.stageNumber
                ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2 ring-offset-background"
                : i + 1 < data.stageNumber
                  ? "bg-primary/20 text-primary"
                  : "bg-card/50 text-muted-foreground"
            )}>
              <p className="text-xs font-bold">{stage}</p>
            </div>
          ))}
        </div>

        {/* Stage header */}
        <div className="bg-card/50 border border-primary/30 rounded-xl p-3">
          <h3 className="text-lg font-bold">
            Stage {data.stageNumber}: {data.stageName} — <span className="text-primary">{data.stageSubtitle}</span>
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 flex-1 min-h-0">
          {/* Key capabilities */}
          <div className="bg-card/30 border border-border rounded-xl p-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Key Capabilities</h4>
            <ul className="space-y-1.5">
              {data.capabilities.map((cap) => (
                <li key={cap} className="text-xs text-muted-foreground flex items-start gap-1.5">
                  <span className="text-primary mt-0.5">•</span>
                  {cap}
                </li>
              ))}
            </ul>
          </div>

          {/* Platform */}
          <div className="bg-card/30 border border-border rounded-xl p-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-accent mb-2">Platform at This Stage</h4>
            <ul className="space-y-1.5">
              {data.platformFeatures.map((feat) => (
                <li key={feat} className="text-xs text-muted-foreground flex items-start gap-1.5">
                  <span className="text-accent mt-0.5">•</span>
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Metrics */}
          <div className="bg-card/30 border border-border rounded-xl p-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Decision Velocity</h4>
            <p className="text-2xl font-bold text-primary mb-4">{data.decisionVelocity}</p>

            <h4 className="text-xs font-bold uppercase tracking-wider text-accent mb-2">Time Allocation</h4>
            <div className="space-y-2">
              {[
                { label: "Reconciliation", value: data.timeAllocation.reconciliation, color: "bg-destructive" },
                { label: "Analysis", value: data.timeAllocation.analysis, color: "bg-accent" },
                { label: "Strategic", value: data.timeAllocation.strategic, color: "bg-primary" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-[10px] text-muted-foreground mb-0.5">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="h-1.5 bg-card rounded-full overflow-hidden">
                    <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SPSlideContainer>
  );
};

// Slides 17-20
export const SPSlide17Fragmented = (props: SlideNarrationProps) => (
  <SPMaturityStage data={{
    stageNumber: 1, slideNumber: 17, slideId: "sp-slide-17",
    stageName: "Fragmented", stageSubtitle: "Hunting for answers",
    description: "Multiple data sources with no unified view. Teams work in silos with conflicting insights, spending more time reconciling than deciding.",
    capabilities: [
      "Siloed analytics tools per function",
      "Manual data reconciliation across sources",
      "Periodic monthly/quarterly reporting cycles",
      "Team-specific dashboards and definitions",
      "5+ vendor contracts to manage",
      "Separate taxonomies per data source",
      "Insights shared via email and PowerPoint",
    ],
    platformFeatures: ["Strong tools, but siloed"],
    decisionVelocity: "6-8 weeks",
    timeAllocation: { reconciliation: 50, analysis: 35, strategic: 15 },
  }} {...props} />
);

export const SPSlide18Connected = (props: SlideNarrationProps) => (
  <SPMaturityStage data={{
    stageNumber: 2, slideNumber: 18, slideId: "sp-slide-18",
    stageName: "Connected", stageSubtitle: "One truth, unified platform",
    description: "Unified data platform delivering one source of truth. All teams access the same intelligence in real-time, eliminating reconciliation.",
    capabilities: [
      "Single taxonomy across all data sources",
      "Real-time data integration and updates",
      "Cross-functional self-service dashboards",
      "Unified market and category view",
    ],
    platformFeatures: [
      "One platform replacing multiple vendors",
      "Consistent definitions and hierarchies",
      "Self-service analytics for all teams",
    ],
    decisionVelocity: "2-3 weeks",
    timeAllocation: { reconciliation: 20, analysis: 40, strategic: 40 },
  }} {...props} />
);

export const SPSlide19Optimised = (props: SlideNarrationProps) => (
  <SPMaturityStage data={{
    stageNumber: 3, slideNumber: 19, slideId: "sp-slide-19",
    stageName: "Optimised", stageSubtitle: "Deciding in days",
    description: "Intelligence in action. Ava anticipates shifts and surfaces insights before you ask for them.",
    capabilities: [
      "Automated anomaly and trend detection",
      "AI-generated insight summaries",
      "Workflow triggers and smart alerts",
      "Predictive recommendations for action",
    ],
    platformFeatures: [
      "Ava AI assistant embedded in workflows",
      "Custom alert rules and thresholds",
      "Automated reporting and distribution",
    ],
    decisionVelocity: "3-5 days",
    timeAllocation: { reconciliation: 10, analysis: 30, strategic: 60 },
  }} {...props} />
);

export const SPSlide20Predictive = (props: SlideNarrationProps) => (
  <SPMaturityStage data={{
    stageNumber: 4, slideNumber: 20, slideId: "sp-slide-20",
    stageName: "Predictive", stageSubtitle: "AI-driven foresight",
    description: "AI anticipates market shifts and recommends actions before competitors move. Strategy becomes proactive, not reactive.",
    capabilities: [
      "Market trend and disruption forecasting",
      "Competitive move prediction (6+ weeks ahead)",
      "Scenario modelling and simulation",
      "Prescriptive recommendations with confidence",
    ],
    platformFeatures: [
      "Predictive AI models trained on your market",
      "Strategic foresight dashboards",
      "Early warning system for market shifts",
    ],
    decisionVelocity: "Hours",
    timeAllocation: { reconciliation: 5, analysis: 20, strategic: 75 },
  }} {...props} />
);

export default SPMaturityStage;
