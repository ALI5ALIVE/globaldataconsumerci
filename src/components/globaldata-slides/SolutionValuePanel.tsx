import { MousePointer2, TrendingUp, Compass, Swords, Lightbulb, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SolutionValuePanelProps {
  activeSolution: string | null;
}

interface SolutionData {
  icon: LucideIcon;
  headline: string;
  oneLiner: string;
  outcome: string;
  color: string;
}

const solutionData: Record<string, SolutionData> = {
  "Sales Intelligence": {
    icon: TrendingUp,
    headline: "Sales Intelligence",
    oneLiner: "Prioritize markets, brands, and opportunities with AI-driven insights for revenue growth.",
    outcome: "Action-ready intelligence for pipeline planning and expansion strategy.",
    color: "hsl(195 85% 50%)",
  },
  "Strategic Intelligence": {
    icon: Compass,
    headline: "Strategic Intelligence",
    oneLiner: "Track market, category, and consumer shifts for informed, long-term strategic decisions.",
    outcome: "Actionable insights on emerging risks and opportunities across portfolios and channels.",
    color: "hsl(190 80% 45%)",
  },
  "Competitor Intelligence": {
    icon: Swords,
    headline: "Competitive Intelligence",
    oneLiner: "Outperform competitors by tracking their strategies, investments, and market share shifts.",
    outcome: "Proprietary data and expert insights reveal competitor focus and relevance.",
    color: "hsl(210 75% 50%)",
  },
  "Innovation Intelligence": {
    icon: Lightbulb,
    headline: "Innovation Intelligence",
    oneLiner: "Accelerate innovation and reduce time-to-market with real-time consumer insight.",
    outcome: "Validate concepts, optimize propositions, and prioritize pipelines based on demand.",
    color: "hsl(200 90% 45%)",
  },
  "Market Intelligence": {
    icon: BarChart3,
    headline: "Market Intelligence",
    oneLiner: "Understand market dynamics and size growth opportunities across categories and segments.",
    outcome: "Smarter strategic, portfolio, and investment decisions based on demand shifts.",
    color: "hsl(217 100% 40%)",
  },
};

const SolutionValuePanel = ({ activeSolution }: SolutionValuePanelProps) => {
  const solution = activeSolution ? solutionData[activeSolution] : null;

  if (!solution) {
    return (
      <div className="h-full min-h-[200px] flex items-center justify-center bg-card/30 border border-border/30 rounded-xl p-6">
        <div className="text-center">
          <MousePointer2 className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
          <p className="text-sm text-muted-foreground">
            Hover over a segment to explore our intelligence solutions
          </p>
        </div>
      </div>
    );
  }

  const IconComponent = solution.icon;

  return (
    <div 
      className="h-full min-h-[200px] bg-card/50 border rounded-xl p-5 animate-fade-in"
      style={{ borderColor: `${solution.color}50` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div 
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${solution.color}20` }}
        >
          <IconComponent className="w-5 h-5" style={{ color: solution.color }} />
        </div>
        <h3 className="text-lg font-bold text-foreground">{solution.headline}</h3>
      </div>
      
      <p className="text-sm text-foreground leading-relaxed mb-4">
        {solution.oneLiner}
      </p>
      
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
          Outcome
        </p>
        <p className="text-sm text-muted-foreground">
          {solution.outcome}
        </p>
      </div>
    </div>
  );
};

export default SolutionValuePanel;
