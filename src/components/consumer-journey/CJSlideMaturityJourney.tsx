import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
}

const stages: Stage[] = [
  {
    id: 1, label: "Fragmented", icon: TrendingUp,
    color: "hsl(var(--comply-red))",
    tagline: "Seven sources. Seven answers.",
    decisionSpeed: "6–8 weeks",
    timeAllocation: { reconciliation: 60, analysis: 30, strategy: 10 },
    bullets: ["Teams reconcile conflicting data", "No shared taxonomy or language", "Decisions delayed by data debates"],
    cx: 100, cy: 320,
  },
  {
    id: 2, label: "Connected", icon: Zap,
    color: "hsl(var(--comply-teal))",
    tagline: "The Gateway — one taxonomy unlocks everything.",
    decisionSpeed: "2–3 weeks",
    timeAllocation: { reconciliation: 20, analysis: 45, strategy: 35 },
    bullets: ["One consumer taxonomy across all solutions", "Reconciliation drops from 60% to 20%", "Cross-solution intelligence flows begin"],
    isGateway: true,
    cx: 250, cy: 260,
  },
  {
    id: 3, label: "Optimised", icon: Brain,
    color: "hsl(var(--comply-plum))",
    tagline: "AI-powered insights across every solution.",
    decisionSpeed: "3–5 days",
    timeAllocation: { reconciliation: 10, analysis: 35, strategy: 55 },
    bullets: ["AI surfaces cross-solution patterns", "Automated alerts on market shifts", "Evidence-based concept scoring"],
    cx: 400, cy: 140,
  },
  {
    id: 4, label: "Predictive", icon: Rocket,
    color: "hsl(var(--comply-sky))",
    tagline: "AI anticipates — your team acts first.",
    decisionSpeed: "Hours",
    timeAllocation: { reconciliation: 5, analysis: 20, strategy: 75 },
    bullets: ["Predictive market shift detection", "75% of team time on strategy", "First-mover advantage, every time"],
    cx: 550, cy: 50,
  },
];

const curvePath = `M 100 320 C 150 310, 200 280, 250 260 C 300 240, 350 180, 400 140 C 450 100, 500 65, 550 50`;

const TimeBar = ({ label, value, color }: { label: string; value: number; color: string }) => (
  <div className="flex items-center gap-2 text-xs">
    <span className="w-24 text-muted-foreground text-right shrink-0">{label}</span>
    <div className="flex-1 h-3 rounded-full bg-secondary overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </div>
    <span className="w-8 text-muted-foreground">{value}%</span>
  </div>
);

const CJSlideMaturityJourney = (props: SlideNarrationProps) => {
  const [activeStage, setActiveStage] = useState(0);
  const [drawn, setDrawn] = useState(false);
  const current = stages[activeStage];

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
      <div className="h-full flex flex-col items-center justify-center gap-3 px-4 max-w-6xl mx-auto">
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

        {/* SVG Curve */}
        <div className="w-full flex-1 min-h-0 max-h-[340px]">
          <svg viewBox="0 0 650 380" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="curveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--comply-red))" />
                <stop offset="33%" stopColor="hsl(var(--comply-teal))" />
                <stop offset="66%" stopColor="hsl(var(--comply-plum))" />
                <stop offset="100%" stopColor="hsl(var(--comply-sky))" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
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
            <line x1="250" y1="30" x2="250" y2="355" stroke="hsl(var(--comply-teal))" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5" />
            <rect x="205" y="30" width="90" height="18" rx="9" fill="hsl(var(--comply-teal))" opacity="0.15" />
            <text x="250" y="42" fill="hsl(var(--comply-teal))" fontSize="8" textAnchor="middle" fontWeight="600">
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

            {/* Stage markers */}
            {stages.map((stage, i) => {
              const isActive = activeStage === i;
              return (
                <g
                  key={stage.id}
                  onClick={() => setActiveStage(i)}
                  className="cursor-pointer"
                  filter={isActive ? "url(#glow)" : undefined}
                >
                  {/* Outer ring on active */}
                  {isActive && (
                    <circle cx={stage.cx} cy={stage.cy} r="14" fill="none" stroke={stage.color} strokeWidth="2" opacity="0.4">
                      <animate attributeName="r" values="14;18;14" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2s" repeatCount="indefinite" />
                    </circle>
                  )}
                  <circle
                    cx={stage.cx}
                    cy={stage.cy}
                    r={isActive ? 10 : 7}
                    fill={stage.color}
                    stroke="hsl(var(--background))"
                    strokeWidth="2"
                    style={{ transition: "r 0.3s ease" }}
                  />
                  {/* Icon placeholder — small white dot */}
                  <circle cx={stage.cx} cy={stage.cy} r="2" fill="hsl(var(--background))" />
                  {/* Label */}
                  <text
                    x={stage.cx}
                    y={stage.cy + (i < 2 ? 26 : -18)}
                    fill={isActive ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))"}
                    fontSize={isActive ? "11" : "10"}
                    textAnchor="middle"
                    fontWeight={isActive ? "700" : "500"}
                    style={{ transition: "all 0.3s ease" }}
                  >
                    {stage.label}
                  </text>
                  <text
                    x={stage.cx}
                    y={stage.cy + (i < 2 ? 38 : -8)}
                    fill="hsl(var(--muted-foreground))"
                    fontSize="8"
                    textAnchor="middle"
                  >
                    {stage.decisionSpeed}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Detail card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="w-full grid md:grid-cols-2 gap-3"
          >
            {/* Left: info */}
            <div className="bg-card border border-border rounded-xl p-4 flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-bold text-foreground">{current.label}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                  Decisions in {current.decisionSpeed}
                </span>
              </div>
              <p className="text-sm font-medium" style={{ color: current.color }}>
                {current.tagline}
              </p>
              <ul className="space-y-1">
                {current.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: current.color }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: time allocation */}
            <div className="bg-card border border-border rounded-xl p-4 flex flex-col gap-2">
              <h4 className="text-sm font-semibold text-foreground">Team Time Allocation</h4>
              <div className="flex flex-col gap-2">
                <TimeBar label="Reconciliation" value={current.timeAllocation.reconciliation} color="hsl(var(--comply-red))" />
                <TimeBar label="Analysis" value={current.timeAllocation.analysis} color="hsl(var(--comply-sky))" />
                <TimeBar label="Strategy" value={current.timeAllocation.strategy} color="hsl(var(--comply-teal))" />
              </div>
              <p className="text-xs text-muted-foreground mt-auto">
                {current.id === 1 && "Your best people spend most of their time reconciling data — not thinking."}
                {current.id === 2 && "Connected Intelligence frees teams to shift from reconciliation to real analysis."}
                {current.id === 3 && "AI amplifies human insight — teams focus on strategic pattern recognition."}
                {current.id === 4 && "Teams become strategic advisors. AI handles the heavy lifting."}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </CPSlideContainer>
  );
};

export default CJSlideMaturityJourney;
