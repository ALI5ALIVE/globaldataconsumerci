import { Compass, TrendingUp, Target, Lightbulb, ShoppingCart, type LucideIcon } from "lucide-react";

export interface PainToCapability {
  pain: string;
  capability: string;
  outcome: string;
}

export interface RoleUseCase {
  role: string;
  useCase: string;
}

export interface SolutionExample {
  brand: string;
  challenge: string;
  action: string;
  result: string;
  quote?: string;
}

export interface SolutionDeepDive {
  id: string;
  label: string;
  icon: LucideIcon;
  color: string;
  jtbd: {
    when: string;
    iWantTo: string;
    soThat: string;
  };
  painToCapability: PainToCapability[];
  example: SolutionExample;
  capabilities: string[];
  useCases: RoleUseCase[];
}

export const solutionDeepDives: SolutionDeepDive[] = [
  {
    id: "strategic",
    label: "Strategic Intelligence",
    icon: Compass,
    color: "from-blue-500 to-blue-600",
    jtbd: {
      when: "When I need to anticipate change and determine where to act next",
      iWantTo: "understand what's emerging, converging, and becoming material",
      soThat: "I make faster, more confident, future-proof strategic decisions",
    },
    painToCapability: [
      {
        pain: "Blindsided by macro forces (AI, regulation, sustainability)",
        capability: "Thematic Intelligence tracking high-impact forces",
        outcome: "Material implications identified 12+ months ahead",
      },
      {
        pain: "Strategy disconnected from emerging risks",
        capability: "Scenario planning & strategic options",
        outcome: "Board-ready risk/opportunity frameworks",
      },
      {
        pain: "Knowing what's happening but not what it means for us",
        capability: "Industry and value chain implication mapping",
        outcome: "Clear 'so what' for every major trend",
      },
    ],
    example: {
      brand: "A top-5 global beverage company",
      challenge: "Needed to determine whether sustainability regulations or AI-driven personalization would reshape their category first—and where to invest",
      action: "Used Strategic Intelligence to synthesize Market + Competitive data with Thematic Intelligence on regulatory timelines and tech adoption curves",
      result: "Prioritized sustainability compliance 18 months ahead. Avoided €50M in rushed reformulation. AI roadmap now sequenced for 2026.",
    },
    capabilities: [
      "Thematic Intelligence tracking",
      "Scenario & strategic options",
      "Risk & opportunity framing",
      "Value chain implication mapping",
      "Future-proof decision guidance",
    ],
    useCases: [
      { role: "CMO", useCase: "Anticipate how macro forces will reshape brand strategy" },
      { role: "CSO", useCase: "Build scenario-based strategic options for the board" },
      { role: "Category Lead", useCase: "Translate emerging trends into 'what it means for us'" },
    ],
  },
  {
    id: "market",
    label: "Market Intelligence",
    icon: TrendingUp,
    color: "from-emerald-500 to-emerald-600",
    jtbd: {
      when: "When I need to quantify an opportunity or ground a plan in evidence",
      iWantTo: "access authoritative market size, growth, and performance benchmarks",
      soThat: "teams align around a shared, defensible view of what's happening and how big it is",
    },
    painToCapability: [
      {
        pain: "Plans built on estimates and assumptions",
        capability: "Authoritative market data & forecasts",
        outcome: "Investment cases with defensible market facts",
      },
      {
        pain: "Teams misaligned on category dynamics",
        capability: "Shared source of truth across regions",
        outcome: "Faster consensus on go-to-market decisions",
      },
      {
        pain: "Performance comparisons scattered across sources",
        capability: "Cross-company, brand, and geo benchmarks",
        outcome: "Credible competitive positioning in 24 hours",
      },
    ],
    example: {
      brand: "A European personal care leader",
      challenge: "Needed to build an investment case for entering the premium skincare segment, but internal estimates varied by 40% across regions",
      action: "Market Intelligence provided authoritative market size, growth forecasts, and competitive benchmarks across 8 European markets",
      result: "Aligned all regions in one week. Board approved €25M investment with 90% confidence in the TAM.",
    },
    capabilities: [
      "Market size & growth forecasts",
      "Category & consumer dynamics",
      "Industry trend tracking",
      "Cross-company benchmarks",
      "Geographic performance comparison",
    ],
    useCases: [
      { role: "CMO", useCase: "Ground brand strategy in defensible market data" },
      { role: "CSO", useCase: "Build investment cases with authoritative forecasts" },
      { role: "Category Lead", useCase: "Align teams around a shared view of category dynamics" },
    ],
  },
  {
    id: "competitive",
    label: "Competitive Intelligence",
    icon: Target,
    color: "from-amber-500 to-amber-600",
    jtbd: {
      when: "When a competitor launches a new SKU or runs a promo",
      iWantTo: "I want to know their strategy and likely next moves",
      soThat: "So that I can respond—or preempt—before I lose share",
    },
    painToCapability: [
      {
        pain: "Found out about competitor launch from a retailer, not our team",
        capability: "Real-time competitive tracking",
        outcome: "3-week earlier competitor visibility",
      },
      {
        pain: "Don't know why competitor SKU is winning at Tesco",
        capability: "Competitive positioning analysis",
        outcome: "Identified 2 positioning gaps to exploit",
      },
      {
        pain: "Reacting to promos after share already lost",
        capability: "Promo impact prediction",
        outcome: "30% faster response to competitive threats",
      },
    ],
    example: {
      brand: "A global confectionery company",
      challenge: "Private-label protein bars were stealing share in convenience, but couldn't identify which claims and price points were winning",
      action: "Competitive Intelligence mapped private-label positioning across 8 retailers, identified 'clean-label + affordable' as the winning formula",
      result: "Reformulated hero SKU with clean-label claims at -10% price. Recovered 2.5pts share in 6 months.",
    },
    capabilities: [
      "Competitor launch tracking",
      "Pricing strategy analysis",
      "Claims & positioning mapping",
      "Promo effectiveness benchmarking",
      "Share shift attribution",
    ],
    useCases: [
      { role: "CMO", useCase: "Monitor competitor brand positioning and messaging shifts" },
      { role: "CSO", useCase: "Anticipate competitive moves for strategic planning" },
      { role: "Category Lead", useCase: "Identify positioning gaps to exploit" },
    ],
  },
  {
    id: "innovation",
    label: "Innovation Intelligence",
    icon: Lightbulb,
    color: "from-purple-500 to-purple-600",
    jtbd: {
      when: "When we have 5 product concepts competing for R&D budget",
      iWantTo: "I want to validate which resonates most with target consumers",
      soThat: "So that I don't waste 12 months and £2M on a concept that flops at launch",
    },
    painToCapability: [
      {
        pain: "Gut-feel NPD decisions lead to 40% launch failures",
        capability: "Consumer-validated concept screening",
        outcome: "2x NPD success rate",
      },
      {
        pain: "R&D develops products consumers don't actually want",
        capability: "Trend-to-product translation",
        outcome: "30% faster concept-to-shelf",
      },
      {
        pain: "Claims we want to make don't resonate with target",
        capability: "Claims validation testing",
        outcome: "Optimal claim stack before creative spend",
      },
    ],
    example: {
      brand: "A leading European dairy company",
      challenge: "Had 4 protein yogurt concepts—high-protein, gut-health, plant-based, and kids—but budget for only 2 launches",
      action: "Innovation Intelligence tested all 4 against target consumers, validated claims, and predicted retail acceptance",
      result: "Launched high-protein and kids variants. Both hit top-5 in category within 12 weeks. Plant-based deprioritized based on low purchase intent.",
    },
    capabilities: [
      "Concept validation testing",
      "Claims resonance analysis",
      "Formulation guidance",
      "Pack & format optimization",
      "Launch timing recommendations",
    ],
    useCases: [
      { role: "CMO", useCase: "Validate brand extensions before launch investment" },
      { role: "CSO", useCase: "Prioritize innovation pipeline with consumer data" },
      { role: "Category Lead", useCase: "Test concepts against real consumer preferences" },
    ],
  },
  {
    id: "sales",
    label: "Sales Intelligence",
    icon: ShoppingCart,
    color: "from-rose-500 to-rose-600",
    jtbd: {
      when: "When I'm preparing a sell-in pitch for Tesco or Carrefour",
      iWantTo: "I want to know exactly what story will land with this buyer",
      soThat: "So that I maximize listings and get the shelf placement I need",
    },
    painToCapability: [
      {
        pain: "Generic sell-in decks don't resonate with buyers",
        capability: "Retailer-specific insights & stories",
        outcome: "25% higher listing success",
      },
      {
        pain: "Sales team doesn't know competitor positioning at each retailer",
        capability: "Retailer competitive landscape",
        outcome: "3 additional distribution points per SKU",
      },
      {
        pain: "Trade spend allocated without knowing what works",
        capability: "Promo effectiveness analysis",
        outcome: "15% better trade ROI",
      },
    ],
    example: {
      brand: "A multinational snack company",
      challenge: "Launching a new premium crisp line, but Tesco and Carrefour buyers wanted completely different stories",
      action: "Sales Intelligence generated retailer-specific sell-in decks—Tesco wanted sustainability + margin; Carrefour wanted consumer acquisition data",
      result: "Secured 100% target listings. Tesco gave premium placement; Carrefour added to health-focused end-cap.",
    },
    capabilities: [
      "Retailer-specific sell-in stories",
      "Buyer persona insights",
      "Competitive shelf mapping",
      "Promo ROI optimization",
      "Distribution gap analysis",
    ],
    useCases: [
      { role: "CMO", useCase: "Ensure brand story translates to retail execution" },
      { role: "CSO", useCase: "Optimize trade spend allocation across retailers" },
      { role: "Category Lead", useCase: "Build compelling sell-in materials for key accounts" },
    ],
  },
];
