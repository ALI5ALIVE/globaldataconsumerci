import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Zap, Brain, Rocket } from "lucide-react";
import CPSlideContainer from "@/components/consumer-pitch/CPSlideContainer";
import { SlideNarrationProps } from "@/types/slideProps";

interface Stage {
  id: number;
  label: string;
  icon: typeof TrendingUp;
  color: string;
  borderColor: string;
  tagline: string;
  decisionSpeed: string;
  timeAllocation: { reconciliation: number; analysis: number; strategy: number };
  bullets: string[];
  isGateway?: boolean;
}

const stages: Stage[] = [
  {
    id: 1,
    label: "Fragmented",
    icon: TrendingUp,
    color: "hsl(var(--comply-red))",
    borderColor: "border-[hsl(var(--comply-red)/.5)]",
    tagline: "Seven sources. Seven answers.",
    decisionSpeed: "6–8 weeks",
    timeAllocation: { reconciliation: 60, analysis: 30, strategy: 10 },
    bullets: [
      "Teams reconcile conflicting data",
      "No shared taxonomy or language",
      "Decisions delayed by data debates",
    ],
  },
  {
    id: 2,
    label: "Connected",
    icon: Zap,
    color: "hsl(var(--comply-teal))",
    borderColor: "border-[hsl(var(--comply-teal)/.5)]",
    tagline: "The Gateway — one taxonomy unlocks everything.",
    decisionSpeed: "2–3 weeks",
    timeAllocation: { reconciliation: 20, analysis: 45, strategy: 35 },
    bullets: [
      "One consumer taxonomy across all solutions",
      "Reconciliation drops from 60% to 20%",
      "Cross-solution intelligence flows begin",
    ],
    isGateway: true,
  },
  {
    id: 3,
    label: "Optimised",
    icon: Brain,
    color: "hsl(var(--comply-plum))",
    borderColor: "border-[hsl(var(--comply-plum)/.5)]",
    tagline: "AI-powered insights across every solution.",
    decisionSpeed: "3–5 days",
    timeAllocation: { reconciliation: 10, analysis: 35, strategy: 55 },
    bullets: [
      "AI surfaces cross-solution patterns",
      "Automated alerts on market shifts",
      "Evidence-based concept scoring",
    ],
  },
  {
    id: 4,
    label: "Predictive",
    icon: Rocket,
    color: "hsl(var(--comply-sky))",
    borderColor: "border-[hsl(var(--comply-sky)/.5)]",
    tagline: "AI anticipates — your team acts first.",
    decisionSpeed: "Hours",
    timeAllocation: { reconciliation: 5, analysis: 20, strategy: 75 },
    bullets: [
      "Predictive market shift detection",
      "75% of team time on strategy",
      "First-mover advantage, every time",
    ],
  },
];

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
  const current = stages[activeStage];

  return (
    <CPSlideContainer
      id="cj-slide-maturity"
      title="The Maturity Journey"
      showTitle={false}
      slideNumber={8}
      {...props}
    >
      <div className="h-full flex flex-col items-center justify-center gap-6 px-4 max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-1">
            The Intelligence Maturity Journey
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            From fragmented data to predictive intelligence
          </p>
        </motion.div>

        {/* Curve + stage selector */}
        <div className="w-full flex items-end justify-between gap-2 md:gap-4 relative px-2">
          {/* Connecting curve line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 400 120">
            <path
              d="M 30 100 Q 130 95 200 70 Q 270 40 370 10"
              fill="none"
              stroke="hsl(var(--muted-foreground) / .2)"
              strokeWidth="2"
              strokeDasharray="6 4"
            />
          </svg>

          {stages.map((stage, i) => {
            const Icon = stage.icon;
            const isActive = activeStage === i;
            return (
              <motion.button
                key={stage.id}
                onClick={() => setActiveStage(i)}
                className={`relative z-10 flex flex-col items-center gap-1 p-3 md:p-4 rounded-xl border transition-all duration-300 flex-1 ${
                  isActive
                    ? `bg-card ${stage.borderColor} ring-1 ring-offset-1 ring-offset-background`
                    : "bg-card/50 border-border/50 hover:border-border"
                } ${stage.isGateway && isActive ? "ring-2" : ""}`}
                style={isActive ? { borderColor: stage.color, ringColor: stage.color } : {}}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${stage.color}20` }}
                >
                  <Icon className="w-5 h-5" style={{ color: stage.color }} />
                </div>
                <span className={`text-xs md:text-sm font-semibold ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                  {stage.label}
                </span>
                {stage.isGateway && (
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: `${stage.color}20`, color: stage.color }}>
                    Gateway
                  </span>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Detail card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="w-full grid md:grid-cols-2 gap-4"
          >
            {/* Left: info */}
            <div className="bg-card border border-border rounded-xl p-5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-bold text-foreground">{current.label}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                  Decisions in {current.decisionSpeed}
                </span>
              </div>
              <p className="text-sm font-medium" style={{ color: current.color }}>
                {current.tagline}
              </p>
              <ul className="space-y-1.5">
                {current.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: current.color }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: time allocation */}
            <div className="bg-card border border-border rounded-xl p-5 flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-foreground">Team Time Allocation</h4>
              <div className="flex flex-col gap-2.5">
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
