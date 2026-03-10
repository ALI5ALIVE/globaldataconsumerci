import { SlideNarrationProps } from "@/types/slideProps";
import SPSlideContainer from "./SPSlideContainer";
import { Bot, ArrowDown, Sparkles } from "lucide-react";

interface IntelligenceSlideData {
  domain: string;
  slideNumber: number;
  slideId: string;
  jobToBeDone: string;
  painPoint: string;
  solution: string;
  result: string;
  realExample: string;
  showAvaIntro?: boolean;
  dataPoints?: string[];
}

const SPIntelligenceSlide = ({ data, ...props }: { data: IntelligenceSlideData } & SlideNarrationProps) => {
  return (
    <SPSlideContainer
      id={data.slideId}
      title={`Connected Intelligence: ${data.domain}`}
      subtitle="One solution that moves faster, aligns better, and acts with confidence"
      slideNumber={data.slideNumber}
      {...props}
    >
      <div className="flex flex-col h-full gap-3">
        {/* Jobs to be done */}
        <div className="bg-card/50 border border-border rounded-xl p-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Jobs to Be Done</h3>
          <p className="text-sm text-muted-foreground italic">"{data.jobToBeDone}"</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1 min-h-0">
          {/* Ava + Data credentials */}
          <div className="bg-card/30 border border-primary/20 rounded-xl p-4">
            {data.showAvaIntro ? (
              <>
                <div className="flex items-center gap-2 mb-3">
                  <Bot className="w-5 h-5 text-primary" />
                  <h3 className="text-sm font-bold">Meet Ava, Your AI Intelligence Partner</h3>
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  Unlike generic AI, Ava understands your category dynamics — built on analyst-validated consumer data across 110 markets.
                </p>
              </>
            ) : (
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="text-sm font-bold">Ava-Powered Intelligence</h3>
              </div>
            )}
            <div className="grid grid-cols-2 gap-2">
              {(data.dataPoints || ["95% global GDP coverage", "Analyst-validated", "Single taxonomy", "Real-time updates"]).map((point) => (
                <div key={point} className="bg-card/50 rounded-lg px-2 py-1.5 text-[10px] text-muted-foreground text-center">
                  {point}
                </div>
              ))}
            </div>
          </div>

          {/* Pain → Solution → Result */}
          <div className="bg-card/30 border border-accent/20 rounded-xl p-4 flex flex-col gap-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-accent mb-1">From Pain to Outcome</h3>
            <div className="flex flex-col gap-2 flex-1">
              <div className="bg-destructive/10 rounded-lg p-2.5">
                <p className="text-[10px] font-bold text-destructive mb-0.5">Challenge</p>
                <p className="text-xs text-muted-foreground">{data.painPoint}</p>
              </div>
              <ArrowDown className="w-4 h-4 text-muted-foreground mx-auto" />
              <div className="bg-primary/10 rounded-lg p-2.5">
                <p className="text-[10px] font-bold text-primary mb-0.5">Solution</p>
                <p className="text-xs text-muted-foreground">{data.solution}</p>
              </div>
              <ArrowDown className="w-4 h-4 text-muted-foreground mx-auto" />
              <div className="bg-green-500/10 rounded-lg p-2.5">
                <p className="text-[10px] font-bold text-green-500 mb-0.5">Result</p>
                <p className="text-xs text-foreground font-medium">{data.result}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Real example */}
        <div className="bg-card/30 border border-primary/20 rounded-xl p-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Real Example</h3>
          <p className="text-sm text-muted-foreground">{data.realExample}</p>
        </div>
      </div>
    </SPSlideContainer>
  );
};

// Slide 7: Sales Intelligence
export const SPSlide07Sales = (props: SlideNarrationProps) => (
  <SPIntelligenceSlide data={{
    domain: "Sales",
    slideNumber: 7,
    slideId: "sp-slide-7",
    showAvaIntro: true,
    jobToBeDone: "When I'm preparing a sell-in pitch for Tesco or Carrefour, I want to know exactly what story will land with this buyer so that I maximise listings and get the shelf placement I need.",
    painPoint: "Generic sell-in decks don't resonate with buyers",
    solution: "Retailer-specific insights & stories",
    result: "25% higher listing success",
    realExample: "A multinational snack company secured 100% target listings. Tesco gave premium placement; Carrefour added to health-focused end-cap.",
  }} {...props} />
);

// Slide 8: Strategic Intelligence
export const SPSlide08Strategic = (props: SlideNarrationProps) => (
  <SPIntelligenceSlide data={{
    domain: "Strategic",
    slideNumber: 8,
    slideId: "sp-slide-8",
    jobToBeDone: "When I need to anticipate change and determine where to act next, I want to understand what's emerging, converging, and becoming material, so that I make faster, more confident, future-proof strategic decisions.",
    painPoint: "Blindsided by macro forces (AI, regulation, sustainability)",
    solution: "Thematic Intelligence tracking high-impact forces",
    result: "Material implications identified 12+ months ahead",
    realExample: "A top-5 global beverage company prioritised sustainability compliance 18 months ahead. Avoided €50M in rushed reformulation.",
  }} {...props} />
);

// Slide 9: Market Intelligence
export const SPSlide09Market = (props: SlideNarrationProps) => (
  <SPIntelligenceSlide data={{
    domain: "Market",
    slideNumber: 9,
    slideId: "sp-slide-9",
    jobToBeDone: "When I need to quantify an opportunity or ground a plan in evidence, I want to access authoritative market size, growth, and performance benchmarks, so that teams align around a shared, defensible view.",
    painPoint: "Plans built on estimates and assumptions",
    solution: "Authoritative market data & forecasts",
    result: "Investment cases with defensible market facts",
    realExample: "A European personal care leader aligned all regions in one week. Board approved €25M investment with 90% confidence in the TAM.",
  }} {...props} />
);

// Slide 10: Competitive Intelligence
export const SPSlide10Competitive = (props: SlideNarrationProps) => (
  <SPIntelligenceSlide data={{
    domain: "Competitive",
    slideNumber: 10,
    slideId: "sp-slide-10",
    jobToBeDone: "When a competitor launches a new SKU or runs a promo, I want to know their strategy and likely next moves, so that I can respond—or pre-empt—before I lose share.",
    painPoint: "Found out about competitor launch from a retailer, not our team",
    solution: "Real-time competitive tracking",
    result: "3-week earlier competitor visibility",
    realExample: "A global confectionery company reformulated hero SKU with clean label claims at -10% price and recovered 2.5pts share in 6 months.",
  }} {...props} />
);

// Slide 11: Innovation Intelligence
export const SPSlide11Innovation = (props: SlideNarrationProps) => (
  <SPIntelligenceSlide data={{
    domain: "Innovation",
    slideNumber: 11,
    slideId: "sp-slide-11",
    jobToBeDone: "When we have 5 product concepts competing for R&D budget, I want to validate which resonates most with target consumers, so that I don't waste 12 months and £2M on a concept that flops at launch.",
    painPoint: "Gut-feel NPD decisions lead to 40% launch failures",
    solution: "Consumer-validated concept screening",
    result: "2× NPD success rate",
    realExample: "A leading European dairy company launched high-protein and kids variants—both hit top-5 in category within 12 weeks.",
  }} {...props} />
);

export default SPIntelligenceSlide;
