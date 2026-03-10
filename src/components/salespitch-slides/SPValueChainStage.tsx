import { SlideNarrationProps } from "@/types/slideProps";
import SPSlideContainer from "./SPSlideContainer";
import { cn } from "@/lib/utils";

interface ValueChainStageData {
  stageNumber: number;
  slideNumber: number;
  slideId: string;
  stageName: string;
  stageQuestion: string;
  jobToBeDone: string;
  challenge: string;
  solution: string;
  result: string;
  whoItHelps: string;
  insight?: string;
}

const allStages = [
  { name: "Strategic", verb: "Spots the trend" },
  { name: "Market", verb: "Validates category demand" },
  { name: "Innovation", verb: "Tests what will win" },
  { name: "Competitive", verb: "Finds white space" },
  { name: "Sales", verb: "Lands the listings" },
];

const SPValueChainStage = ({ data, ...props }: { data: ValueChainStageData } & SlideNarrationProps) => {
  return (
    <SPSlideContainer
      id={data.slideId}
      title="Intelligence That Compounds Across the Value Chain"
      subtitle="From trend signal to shelf presence in 16 weeks"
      slideNumber={data.slideNumber}
      {...props}
    >
      <div className="flex flex-col h-full gap-3">
        {/* Value chain bar */}
        <div className="flex gap-1">
          {allStages.map((stage, i) => (
            <div key={stage.name} className={cn(
              "flex-1 rounded-lg px-2 py-1.5 text-center transition-all",
              i + 1 === data.stageNumber
                ? "bg-primary text-primary-foreground"
                : i + 1 < data.stageNumber
                  ? "bg-primary/20 text-primary"
                  : "bg-card/50 text-muted-foreground"
            )}>
              <p className="text-[10px] font-bold">{stage.name}</p>
              <p className="text-[8px] opacity-80">{stage.verb}</p>
            </div>
          ))}
        </div>

        {/* Stage detail */}
        <div className="bg-card/50 border border-primary/30 rounded-xl p-4 mb-1">
          <h3 className="text-lg font-bold mb-1">
            Stage {data.stageNumber}: {data.stageName} — <span className="text-primary">"{data.stageQuestion}"</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 flex-1 min-h-0">
          {/* Jobs to be done */}
          <div className="bg-card/30 border border-border rounded-xl p-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Jobs to Be Done</h4>
            <p className="text-xs text-muted-foreground italic">{data.jobToBeDone}</p>
          </div>

          {/* Challenge > Solution > Result */}
          <div className="bg-card/30 border border-accent/20 rounded-xl p-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-accent mb-2">Challenge → Solution → Result</h4>
            <div className="space-y-2">
              <div className="bg-destructive/10 rounded-lg p-2">
                <p className="text-[10px] font-bold text-destructive">Challenge</p>
                <p className="text-xs text-muted-foreground">{data.challenge}</p>
              </div>
              <div className="bg-primary/10 rounded-lg p-2">
                <p className="text-[10px] font-bold text-primary">Solution</p>
                <p className="text-xs text-muted-foreground">{data.solution}</p>
              </div>
              <div className="bg-green-500/10 rounded-lg p-2">
                <p className="text-[10px] font-bold text-green-500">Result</p>
                <p className="text-xs text-foreground font-medium">{data.result}</p>
              </div>
            </div>
          </div>

          {/* Who it helps */}
          <div className="bg-card/30 border border-border rounded-xl p-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Who It Helps</h4>
            <p className="text-xs text-muted-foreground">{data.whoItHelps}</p>
            {data.insight && (
              <p className="text-xs text-primary mt-2 font-medium">{data.insight}</p>
            )}
          </div>
        </div>
      </div>
    </SPSlideContainer>
  );
};

// Slides 12-16
export const SPSlide12VCStrategic = (props: SlideNarrationProps) => (
  <SPValueChainStage data={{
    stageNumber: 1, slideNumber: 12, slideId: "sp-slide-12",
    stageName: "Strategic Intelligence", stageQuestion: "Is this trend material, or noise?",
    jobToBeDone: "When I need to anticipate change and determine where to act next, I want to understand what's emerging, converging, and becoming material, so that I make faster, more confident, future-proof strategic decisions.",
    challenge: "Blindsided by macro forces (AI regulation, sustainability)",
    solution: "Thematic intelligence tracking high-impact forces",
    result: "Material implications identified 12+ months ahead",
    whoItHelps: "CMO, CSO, Category Lead",
    insight: "$4B addressable opportunity",
  }} {...props} />
);

export const SPSlide13VCMarket = (props: SlideNarrationProps) => (
  <SPValueChainStage data={{
    stageNumber: 2, slideNumber: 13, slideId: "sp-slide-13",
    stageName: "Market Intelligence", stageQuestion: "Where's the demand strongest?",
    jobToBeDone: "When I need to quantify an opportunity, I want to access authoritative market size, growth, and performance benchmarks, so that teams align around a shared, defensible view.",
    challenge: "Plans built on estimates and assumptions",
    solution: "Authoritative market data and forecasts",
    result: "Investment cases with defensible market facts",
    whoItHelps: "CMO, CSO, Category Lead",
    insight: "Germany & UK lead. 3× grocery.",
  }} {...props} />
);

export const SPSlide14VCInnovation = (props: SlideNarrationProps) => (
  <SPValueChainStage data={{
    stageNumber: 3, slideNumber: 14, slideId: "sp-slide-14",
    stageName: "Innovation Intelligence", stageQuestion: "What product will win?",
    jobToBeDone: "When we have 5 product concepts competing for R&D budget, I want to validate which resonates most with target consumers, so that I don't waste 12 months and £2M on a concept that flops.",
    challenge: "Gut-feel NPD decisions lead to 40% launch failure",
    solution: "Consumer-validated concept screening",
    result: "2× NPD success rate",
    whoItHelps: "CMO, CSO, Category Lead",
    insight: "Clean-label, low-sugar, functional claims win.",
  }} {...props} />
);

export const SPSlide15VCCompetitive = (props: SlideNarrationProps) => (
  <SPValueChainStage data={{
    stageNumber: 4, slideNumber: 15, slideId: "sp-slide-15",
    stageName: "Competitive Intelligence", stageQuestion: "Where's the gap to exploit?",
    jobToBeDone: "When a competitor launches a new SKU, I want to know their strategy and likely next moves, so that I can respond or pre-empt before I lose share.",
    challenge: "Found out about competitor launch from a retailer, not our team",
    solution: "Real-time competitive tracking",
    result: "3-week earlier competitor visibility",
    whoItHelps: "CMO, CSO, Category Lead",
    insight: "No player owns 'natural energy' in convenience.",
  }} {...props} />
);

export const SPSlide16VCSales = (props: SlideNarrationProps) => (
  <SPValueChainStage data={{
    stageNumber: 5, slideNumber: 16, slideId: "sp-slide-16",
    stageName: "Sales Intelligence", stageQuestion: "How do we win listings?",
    jobToBeDone: "When I'm preparing a sell-in pitch for Tesco or Carrefour, I want to know exactly what story will land with this buyer so that I maximise listings and get the shelf placement I need.",
    challenge: "Generic sell-in decks don't resonate with buyers",
    solution: "Retailer-specific insights and stories",
    result: "25% higher listing success",
    whoItHelps: "CMO, CSO, Category Lead",
    insight: "Tesco: sustainability. Carrefour: Gen Z data.",
  }} {...props} />
);

export default SPValueChainStage;
