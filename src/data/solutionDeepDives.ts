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
      when: "When I'm setting portfolio priorities for the next 2-3 years",
      iWantTo: "I want to see which categories are premiumizing and where share is shifting",
      soThat: "So that I invest in the growth spaces before competitors lock them up",
    },
    painToCapability: [
      {
        pain: "Portfolio decisions based on outdated category reports",
        capability: "Real-time category growth tracking",
        outcome: "6-month earlier visibility into category shifts",
      },
      {
        pain: "Don't know where competitors are gaining ground",
        capability: "Share-of-market trend analysis",
        outcome: "Identify 3 acquisition targets before competition",
      },
      {
        pain: "Board asks 'where should we play?' and we guess",
        capability: "Strategic opportunity mapping",
        outcome: "Data-backed board recommendations in 48 hours",
      },
    ],
    example: {
      brand: "A top-5 global beverage company",
      challenge: "Needed to prioritize between functional hydration and alcohol-free spirits—two emerging categories competing for the same R&D budget",
      action: "Used Strategic Intelligence to map consumer demand curves, competitor investment signals, and retailer readiness across 12 European markets",
      result: "Chose functional hydration first. Captured 4% category share in 18 months. Alcohol-free roadmap now queued for 2026.",
    },
    capabilities: [
      "Category growth forecasting",
      "Portfolio optimization analysis",
      "White space identification",
      "M&A target screening",
      "Consumer macro-trend tracking",
    ],
    useCases: [
      { role: "CMO", useCase: "Identify which consumer segments to prioritize for brand investment" },
      { role: "CSO", useCase: "Build data-backed portfolio strategy for board presentations" },
      { role: "Category Lead", useCase: "Spot premiumization opportunities before competitors" },
    ],
  },
  {
    id: "market",
    label: "Market Intelligence",
    icon: TrendingUp,
    color: "from-emerald-500 to-emerald-600",
    jtbd: {
      when: "When I see a trend emerging on social or in panels",
      iWantTo: "I want to validate if it's a real consumer shift or noise",
      soThat: "So that I don't waste 6 months chasing a trend that dies before we launch",
    },
    painToCapability: [
      {
        pain: "Trends spotted too late—competitors already on shelf",
        capability: "Early trend detection (18-month horizon)",
        outcome: "First-mover in 2 of 3 trend cycles",
      },
      {
        pain: "Social listening doesn't connect to actual purchase",
        capability: "Trend-to-transaction correlation",
        outcome: "40% fewer false-positive trends",
      },
      {
        pain: "Channel shifts surprise us—why did this SKU fail online?",
        capability: "Channel growth forecasting",
        outcome: "Optimized channel mix before launch",
      },
    ],
    example: {
      brand: "A European personal care leader",
      challenge: "Saw 'microbiome skincare' trending on social, but couldn't tell if it was influencer hype or real shopper demand",
      action: "Market Intelligence validated the trend by correlating social signal strength, search volume, and early POS data from specialty retailers",
      result: "Launched microbiome cleanser 8 months ahead of nearest competitor. Now #1 in the segment with 22% share.",
    },
    capabilities: [
      "Trend emergence tracking",
      "Social-to-purchase correlation",
      "Channel performance analysis",
      "Demographic shift monitoring",
      "Seasonal pattern prediction",
    ],
    useCases: [
      { role: "CMO", useCase: "Validate emerging trends before committing marketing spend" },
      { role: "CSO", useCase: "Forecast category and channel growth for planning" },
      { role: "Category Lead", useCase: "Identify underserved shopper segments" },
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
      iWantTo: "I want to validate which resonates most with target shoppers",
      soThat: "So that I don't waste 12 months and £2M on a concept that flops at launch",
    },
    painToCapability: [
      {
        pain: "Gut-feel NPD decisions lead to 40% launch failures",
        capability: "Shopper-validated concept screening",
        outcome: "2x NPD success rate",
      },
      {
        pain: "R&D develops products shoppers don't actually want",
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
      action: "Innovation Intelligence tested all 4 against target shoppers, validated claims, and predicted retail acceptance",
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
      { role: "CSO", useCase: "Prioritize innovation pipeline with shopper data" },
      { role: "Category Lead", useCase: "Test concepts against real shopper preferences" },
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
      action: "Sales Intelligence generated retailer-specific sell-in decks—Tesco wanted sustainability + margin; Carrefour wanted shopper acquisition data",
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
