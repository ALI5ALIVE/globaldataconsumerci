import { Target, TrendingUp, Users, Lightbulb, Truck } from "lucide-react";
import { cn } from "@/lib/utils";

interface GDSolutionsFlowProps {
  activeStep?: number | null;
  onStepClick?: (step: number) => void;
  isNarrationControlled?: boolean;
}

const solutions = [
  {
    id: "strategic",
    label: "Strategic Intelligence",
    shortLabel: "Strategic",
    icon: Target,
    description: "Where to play",
    capabilities: ["Category prioritization", "Investment focus", "Growth strategy"],
    caseOutput: "Defined the strategic question: Where to launch with confidence?",
    color: "from-blue-500 to-blue-600",
    borderColor: "border-blue-500/50",
    bgColor: "bg-blue-500/10",
    dotColor: "#3b82f6",
  },
  {
    id: "market",
    label: "Market Intelligence",
    shortLabel: "Market",
    icon: TrendingUp,
    description: "Opportunity discovery",
    capabilities: ["Category growth trends", "Channel shifts", "Macro signals"],
    caseOutput: "Identified savory protein snacks for urban European commuters",
    color: "from-sky-400 to-sky-500",
    borderColor: "border-sky-400/50",
    bgColor: "bg-sky-400/10",
    dotColor: "#38bdf8",
  },
  {
    id: "competitive",
    label: "Competitive Intelligence",
    shortLabel: "Competitive",
    icon: Users,
    description: "Landscape understanding",
    capabilities: ["Competitor moves", "Positioning gaps", "Threat analysis"],
    caseOutput: "Mapped competitor gaps and positioning opportunities",
    color: "from-cyan-400 to-cyan-500",
    borderColor: "border-cyan-400/50",
    bgColor: "bg-cyan-400/10",
    dotColor: "#22d3ee",
  },
  {
    id: "innovation",
    label: "Innovation Intelligence",
    shortLabel: "Innovation",
    icon: Lightbulb,
    description: "Product development",
    capabilities: ["Trend-to-product", "Concept screening", "Claims validation"],
    caseOutput: "Recommended savory protein crisp with clean-label positioning",
    color: "from-teal-400 to-teal-500",
    borderColor: "border-teal-400/50",
    bgColor: "bg-teal-400/10",
    dotColor: "#2dd4bf",
  },
  {
    id: "sales",
    label: "Sales Intelligence",
    shortLabel: "Sales",
    icon: Truck,
    description: "Go-to-market execution",
    capabilities: ["Channel strategy", "Retailer insights", "Sales enablement"],
    caseOutput: "Generated retail-specific sell-in stories and enablement",
    color: "from-green-400 to-green-500",
    borderColor: "border-green-400/50",
    bgColor: "bg-green-400/10",
    dotColor: "#4ade80",
  },
];

// Animated dots configuration
const flowingDots = [
  { id: 1, delay: 0 },
  { id: 2, delay: 1.5 },
  { id: 3, delay: 3 },
  { id: 4, delay: 4.5 },
];

const GDSolutionsFlow = ({ activeStep, onStepClick, isNarrationControlled }: GDSolutionsFlowProps) => {
  return (
    <div className="w-full">
      {/* Solutions Flow */}
      <div className="relative">
        {/* Unified Data Layer - Background Bar with animated dots */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-lg border border-primary/30 flex items-center justify-center z-0 overflow-hidden">
          <span className="text-xs sm:text-sm font-medium text-primary relative z-10">
            Unified Taxonomy & Data Layer
          </span>
          
          {/* Animated flowing dots in the data layer */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="dotGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="25%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#22d3ee" />
                <stop offset="75%" stopColor="#2dd4bf" />
                <stop offset="100%" stopColor="#4ade80" />
              </linearGradient>
              <filter id="dotGlow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Flowing dots along the data layer */}
            {flowingDots.map((dot) => (
              <circle
                key={dot.id}
                r="4"
                fill="url(#dotGradient)"
                filter="url(#dotGlow)"
                opacity="0.8"
              >
                <animate
                  attributeName="cx"
                  values="0%;100%"
                  dur="6s"
                  begin={`${dot.delay}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cy"
                  values="50%;50%"
                  dur="6s"
                  begin={`${dot.delay}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
          </svg>
        </div>

        {/* Connection lines SVG overlay */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-5" style={{ top: 0 }}>
          <defs>
            <filter id="connectionGlow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Animated dots flowing between cards */}
          {[0, 1, 2, 3].map((connectionIndex) => (
            <g key={connectionIndex}>
              {/* Dot traveling from card to card via data layer */}
              <circle
                r="3"
                fill={solutions[connectionIndex].dotColor}
                filter="url(#connectionGlow)"
                opacity="0.9"
              >
                {/* Animate down to data layer */}
                <animate
                  attributeName="cy"
                  values="40%;85%;85%;40%"
                  keyTimes="0;0.25;0.75;1"
                  dur="4s"
                  begin={`${connectionIndex * 0.8}s`}
                  repeatCount="indefinite"
                />
                {/* Animate across to next card */}
                <animate
                  attributeName="cx"
                  values={`${10 + connectionIndex * 20}%;${10 + connectionIndex * 20}%;${10 + (connectionIndex + 1) * 20}%;${10 + (connectionIndex + 1) * 20}%`}
                  keyTimes="0;0.25;0.75;1"
                  dur="4s"
                  begin={`${connectionIndex * 0.8}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          ))}
        </svg>

        {/* Solutions Grid */}
        <div className="grid grid-cols-5 gap-2 sm:gap-4 pb-16 relative z-10">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const isActive = activeStep === index;
            const isPast = activeStep !== null && index < activeStep;
            
            return (
              <button
                key={solution.id}
                onClick={() => onStepClick?.(index)}
                className={cn(
                  "relative flex flex-col items-center p-2 sm:p-4 rounded-xl border transition-all duration-300",
                  "bg-card/50 backdrop-blur-sm",
                  isActive
                    ? `${solution.borderColor} ${solution.bgColor} scale-105 shadow-lg`
                    : isPast
                    ? "border-border/50 opacity-70"
                    : "border-border/30 hover:border-border/50 hover:bg-card/70",
                  isNarrationControlled && isActive && "animate-fade-in"
                )}
              >
                {/* Connection line to data layer */}
                <div className={cn(
                  "absolute -bottom-4 left-1/2 -translate-x-1/2 w-0.5 h-4 transition-all duration-300",
                  isActive ? `bg-gradient-to-b ${solution.color}` : "bg-border/50"
                )} />

                {/* Icon */}
                <div className={cn(
                  "w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300",
                  isActive
                    ? `bg-gradient-to-br ${solution.color}`
                    : "bg-muted"
                )}>
                  <Icon className={cn(
                    "w-4 h-4 sm:w-6 sm:h-6",
                    isActive ? "text-white" : "text-muted-foreground"
                  )} />
                </div>

                {/* Label */}
                <h4 className={cn(
                  "text-[10px] sm:text-xs font-semibold text-center mb-1 transition-colors",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )}>
                  <span className="hidden sm:inline">{solution.label}</span>
                  <span className="sm:hidden">{solution.shortLabel}</span>
                </h4>

                {/* Description - hidden on mobile */}
                <p className="hidden sm:block text-[10px] text-muted-foreground text-center">
                  {solution.description}
                </p>

                {/* Arrow to next */}
                {index < solutions.length - 1 && (
                  <div className="absolute -right-1 sm:-right-2 top-1/2 -translate-y-1/2 z-20">
                    <svg width="12" height="12" viewBox="0 0 12 12" className="text-muted-foreground/50">
                      <path d="M4 2 L8 6 L4 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Solution Details */}
      {activeStep !== null && activeStep >= 0 && activeStep < solutions.length && (
        <div className={cn(
          "mt-6 p-4 sm:p-6 rounded-xl border transition-all duration-300",
          solutions[activeStep].borderColor,
          solutions[activeStep].bgColor
        )}>
          <div className="flex items-start gap-4">
            <div className={cn(
              "w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0",
              `bg-gradient-to-br ${solutions[activeStep].color}`
            )}>
              {(() => {
                const Icon = solutions[activeStep].icon;
                return <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />;
              })()}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-base sm:text-lg font-semibold text-foreground mb-1">
                {solutions[activeStep].label}
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                {solutions[activeStep].description}
              </p>
              
              {/* Capabilities */}
              <div className="flex flex-wrap gap-2 mb-3">
                {solutions[activeStep].capabilities.map((cap, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-full bg-background/50 border border-border/50 text-muted-foreground"
                  >
                    {cap}
                  </span>
                ))}
              </div>

              {/* Case Study Output */}
              <div className="p-3 rounded-lg bg-background/50 border border-border/30">
                <p className="text-xs text-muted-foreground mb-1">Case Study Output:</p>
                <p className="text-sm text-foreground">{solutions[activeStep].caseOutput}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GDSolutionsFlow;
