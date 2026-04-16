import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Zap, Brain, Rocket } from "lucide-react";
import CPSlideContainer from "@/components/consumer-pitch/CPSlideContainer";
import { SlideNarrationProps } from "@/types/slideProps";

interface Stage {
  id: number;
  label: string;
  icon: typeof TrendingUp;
  color: string;
  tagline: string;
  decisionSpeed: string;
  timeAllocation: { reconciliation: number; analysis: number; strategy: number };
  bullets: string[];
  isGateway?: boolean;
  cx: number;
  cy: number;
  insight: string;
}

const stages: Stage[] = [
  {
    id: 1, label: "Fragmented", icon: TrendingUp,
    color: "hsl(var(--gd-red))",
    tagline: "Seven sources. Seven answers.",
    decisionSpeed: "6–8 weeks",
    timeAllocation: { reconciliation: 60, analysis: 30, strategy: 10 },
    bullets: ["Teams reconcile conflicting data", "No shared taxonomy or language", "Decisions delayed by data debates"],
    insight: "Your best people spend most of their time reconciling data — not thinking.",
    cx: 100, cy: 320,
  },
  {
    id: 2, label: "Connected", icon: Zap,
    color: "hsl(var(--gd-mid-blue))",
    tagline: "The Gateway — one taxonomy unlocks everything.",
    decisionSpeed: "2–3 weeks",
    timeAllocation: { reconciliation: 20, analysis: 45, strategy: 35 },
    bullets: ["One consumer taxonomy across all solutions", "Reconciliation drops from 60% to 20%", "Cross-solution intelligence flows begin"],
    insight: "Connected Intelligence frees teams to shift from reconciliation to real analysis.",
    isGateway: true,
    cx: 250, cy: 260,
  },
  {
    id: 3, label: "Optimised", icon: Brain,
    color: "hsl(var(--gd-hyper-blue))",
    tagline: "AI-powered insights across every solution.",
    decisionSpeed: "3–5 days",
    timeAllocation: { reconciliation: 10, analysis: 35, strategy: 55 },
    bullets: ["AI surfaces cross-solution patterns", "Automated alerts on market shifts", "Evidence-based concept scoring"],
    insight: "AI amplifies human insight — teams focus on strategic pattern recognition.",
    cx: 400, cy: 140,
  },
  {
    id: 4, label: "Predictive", icon: Rocket,
    color: "hsl(var(--gd-cream))",
    tagline: "AI anticipates — your team acts first.",
    decisionSpeed: "Hours",
    timeAllocation: { reconciliation: 5, analysis: 20, strategy: 75 },
    bullets: ["Predictive market shift detection", "75% of team time on strategy", "First-mover advantage, every time"],
    insight: "Teams become strategic advisors. AI handles the heavy lifting.",
    cx: 550, cy: 50,
  },
];

const curvePath = `M 100 320 C 150 310, 200 280, 250 260 C 300 240, 350 180, 400 140 C 450 100, 500 65, 550 50`;

const StageCard = ({ stage }: { stage: Stage }) => (
  <div
    className="bg-card border border-border rounded-lg p-2 flex flex-col gap-1 relative"
    style={{ borderTopWidth: 3, borderTopColor: stage.color }}
  >
    {stage.isGateway && (
      <span
        className="absolute -top-3 right-2 text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full"
        style={{ backgroundColor: stage.color, color: "white" }}
      >
        Gateway
      </span>
    )}
    <div className="flex items-center justify-between">
      <h4 className="text-[11px] font-bold text-foreground">{stage.label}</h4>
      <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-secondary text-muted-foreground font-medium">
        {stage.decisionSpeed}
      </span>
    </div>
    <p className="text-[9px] font-semibold leading-tight" style={{ color: stage.color }}>
      {stage.tagline}
    </p>
    <ul className="space-y-0">
      {stage.bullets.map((b, i) => (
        <li key={i} className="flex items-start gap-1 text-[9px] text-muted-foreground leading-tight">
          <span className="mt-1 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: stage.color }} />
          {b}
        </li>
      ))}
    </ul>
    <div className="text-[8px] text-muted-foreground mt-auto pt-0.5 border-t border-border/50">
      <span className="font-medium">{stage.timeAllocation.reconciliation}%</span> reconcile · <span className="font-medium">{stage.timeAllocation.strategy}%</span> strategy
    </div>
  </div>
);

const CJSlideMaturityJourney = (props: SlideNarrationProps) => {
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDrawn(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <CPSlideContainer
      id="cj-slide-maturity"
      title="The Maturity Journey"
      showTitle={false}
      slideNumber={8}
      {...props}
    >
      <div className="h-full flex flex-col items-center justify-center gap-1 px-4 max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-0.5">
            The Intelligence Maturity Journey
          </h2>
          <p className="text-muted-foreground text-xs md:text-sm">
            From fragmented data to predictive intelligence
          </p>
        </motion.div>

        {/* SVG Curve — compact */}
        <div className="w-full max-h-[300px]">
          <svg viewBox="0 0 650 380" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="curveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--gd-red))" />
                <stop offset="33%" stopColor="hsl(var(--gd-mid-blue))" />
                <stop offset="66%" stopColor="hsl(var(--gd-hyper-blue))" />
                <stop offset="100%" stopColor="hsl(var(--gd-cream))" />
              </linearGradient>
            </defs>

            {/* Axes */}
            <line x1="60" y1="10" x2="60" y2="360" stroke="hsl(var(--border))" strokeWidth="1" />
            <line x1="60" y1="360" x2="620" y2="360" stroke="hsl(var(--border))" strokeWidth="1" />
            <text x="20" y="190" fill="hsl(var(--muted-foreground))" fontSize="10" textAnchor="middle" transform="rotate(-90,20,190)">
              Value / Capability
            </text>
            <text x="340" y="378" fill="hsl(var(--muted-foreground))" fontSize="10" textAnchor="middle">
              Maturity →
            </text>

            {/* Grid lines */}
            {[100, 180, 260, 340].map(y => (
              <line key={y} x1="60" y1={y} x2="620" y2={y} stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.4" />
            ))}

            {/* Gateway vertical line */}
            <line x1="250" y1="30" x2="250" y2="355" stroke="hsl(var(--gd-mid-blue))" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5" />
            <rect x="205" y="30" width="90" height="18" rx="9" fill="hsl(var(--gd-mid-blue))" opacity="0.15" />
            <text x="250" y="42" fill="hsl(var(--gd-mid-blue))" fontSize="8" textAnchor="middle" fontWeight="600">
              CONNECTED GATEWAY
            </text>

            {/* Curve */}
            <path
              d={curvePath}
              fill="none"
              stroke="url(#curveGrad)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="800"
              strokeDashoffset={drawn ? 0 : 800}
              style={{ transition: "stroke-dashoffset 1.5s ease-out" }}
            />

            {/* Stage markers — static */}
            {stages.map((stage) => (
              <g key={stage.id}>
                <circle
                  cx={stage.cx}
                  cy={stage.cy}
                  r={7}
                  fill={stage.color}
                  stroke="hsl(var(--background))"
                  strokeWidth="2"
                />
                <circle cx={stage.cx} cy={stage.cy} r="2" fill="hsl(var(--background))" />
                <text
                  x={stage.cx}
                  y={stage.cy + (stage.id < 3 ? 22 : -14)}
                  fill="hsl(var(--muted-foreground))"
                  fontSize="10"
                  textAnchor="middle"
                  fontWeight="500"
                >
                  {stage.label}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* 4 static content boxes */}
        <div className="w-full grid grid-cols-4 gap-2">
          {stages.map((stage) => (
            <StageCard key={stage.id} stage={stage} />
          ))}
        </div>
      </div>
    </CPSlideContainer>
  );
};

export default CJSlideMaturityJourney;
