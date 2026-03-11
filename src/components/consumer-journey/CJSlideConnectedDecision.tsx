import { motion } from "framer-motion";
import { Compass, BarChart3, Radar, Lightbulb, ShoppingCart, Wallet, CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import CPSlideContainer from "@/components/consumer-pitch/CPSlideContainer";

interface CJSlideConnectedDecisionProps {
  isPlaying?: boolean;
  isLoading?: boolean;
  progress?: number;
  hasCompleted?: boolean;
  onPlay?: () => void;
  onPause?: () => void;
  onNextSlide?: () => void;
}

const personas = [
  {
    name: "Sarah",
    role: "Strategy",
    icon: Compass,
    verdict: "Trend accelerating +38% YoY across SE Asia",
    solution: "Strategic Foresight",
    color: "from-blue-500/20 to-blue-600/20",
    border: "border-blue-500/30",
    accent: "text-blue-400",
  },
  {
    name: "James",
    role: "Market Sizing",
    icon: BarChart3,
    verdict: "$2.1B TAM by 2027 — 12.6% CAGR",
    solution: "Market Sizing",
    color: "from-emerald-500/20 to-emerald-600/20",
    border: "border-emerald-500/30",
    accent: "text-emerald-400",
  },
  {
    name: "Priya",
    role: "Competitive Intel",
    icon: Radar,
    verdict: "Competitor X filed 4 patents in this space",
    solution: "Competitive Intelligence",
    color: "from-amber-500/20 to-amber-600/20",
    border: "border-amber-500/30",
    accent: "text-amber-400",
  },
  {
    name: "Marcus",
    role: "Innovation",
    icon: Lightbulb,
    verdict: "3 of 5 concepts pass the evidence threshold",
    solution: "Innovation Validation",
    color: "from-purple-500/20 to-purple-600/20",
    border: "border-purple-500/30",
    accent: "text-purple-400",
  },
  {
    name: "Elena",
    role: "Commercial",
    icon: ShoppingCart,
    verdict: "Tesco confirms category gap — wants first-mover pitch",
    solution: "Commercial Intelligence",
    color: "from-rose-500/20 to-rose-600/20",
    border: "border-rose-500/30",
    accent: "text-rose-400",
  },
];

const CJSlideConnectedDecision = ({
  isPlaying, isLoading, progress, hasCompleted, onPlay, onPause, onNextSlide,
}: CJSlideConnectedDecisionProps) => {
  return (
    <CPSlideContainer
      id="cj-slide-decision"
      title="The Connected Decision"
      subtitle="One question. Six perspectives. One connected answer."
      slideNumber={7}
      isPlaying={isPlaying}
      isLoading={isLoading}
      progress={progress}
      hasCompleted={hasCompleted}
      onPlay={onPlay}
      onPause={onPause}
      onNextSlide={onNextSlide}
    >
      <div className="h-full flex flex-col gap-3">
        {/* The Question */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary/10 border border-primary/30 rounded-lg px-4 py-3 text-center"
        >
          <p className="text-[10px] uppercase tracking-widest text-primary mb-1 font-semibold">The Question</p>
          <p className="text-base sm:text-lg font-bold text-foreground">
            "Should we launch plant-based snacking in Southeast Asia?"
          </p>
        </motion.div>

        {/* Persona verdict chain */}
        <div className="grid grid-cols-5 gap-2 flex-1 min-h-0">
          {personas.map((persona, i) => {
            const Icon = persona.icon;
            return (
              <motion.div
                key={persona.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-gradient-to-b ${persona.color} border ${persona.border} rounded-lg p-3 flex flex-col items-center text-center`}
              >
                <div className={`w-8 h-8 rounded-full bg-card/50 flex items-center justify-center mb-1.5 ${persona.accent}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <p className="text-sm font-bold text-foreground">{persona.name}</p>
                <p className={`text-[10px] ${persona.accent} font-medium mb-2`}>{persona.role}</p>
                <p className="text-xs text-muted-foreground leading-snug flex-1">"{persona.verdict}"</p>
                <p className={`text-[9px] mt-2 ${persona.accent} font-semibold uppercase tracking-wider`}>{persona.solution}</p>
                {i < personas.length - 1 && (
                  <div className="absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 hidden sm:block">
                    <ArrowRight className="w-3 h-3 text-muted-foreground" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Verdict bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="bg-emerald-500/15 border border-emerald-500/40 rounded-lg px-4 py-2.5 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-400" />
            <div>
              <p className="text-base font-bold text-emerald-400">GO</p>
              <p className="text-xs text-muted-foreground">Validated in one meeting — not 14 weeks</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Wallet className="w-4 h-4 text-primary" />
            <span className="font-medium text-foreground">David:</span>
            <span>"One platform. One contract. All of this."</span>
          </div>
        </motion.div>

        {/* Without vs With */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 gap-3"
        >
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg px-4 py-2.5 flex items-start gap-3">
            <XCircle className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-bold text-destructive mb-0.5">WITHOUT</p>
              <p className="text-xs text-muted-foreground">6 vendors · 14 weeks · 3 conflicting answers</p>
            </div>
          </div>
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-4 py-2.5 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-bold text-emerald-400 mb-0.5">WITH</p>
              <p className="text-xs text-muted-foreground">1 platform · 1 meeting · 1 connected answer</p>
            </div>
          </div>
        </motion.div>
      </div>
    </CPSlideContainer>
  );
};

export default CJSlideConnectedDecision;
