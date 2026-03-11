import { motion } from "framer-motion";
import { Compass, BarChart3, Radar, Lightbulb, ShoppingCart, Wallet, Link2 } from "lucide-react";
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

const solutions = [
  {
    icon: Compass,
    title: "Strategic Foresight",
    who: "Heads of Strategy & Planning",
    value: "Identifies emerging themes 12–18 months before they hit your category — so you act on foresight, not hindsight.",
    connected: "Feeds validated trends into Market Intelligence and Innovation Validation",
    color: "border-blue-500/30",
    bg: "from-blue-500/15 to-blue-600/10",
    accent: "text-blue-400",
    dotColor: "bg-blue-400",
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    who: "Market Intelligence & Commercial Teams",
    value: "One-click sizing across 110 countries and 1,000+ segments — one number everyone trusts.",
    connected: "Sizes only the markets where Strategic Foresight signals growth",
    color: "border-emerald-500/30",
    bg: "from-emerald-500/15 to-emerald-600/10",
    accent: "text-emerald-400",
    dotColor: "bg-emerald-400",
  },
  {
    icon: Radar,
    title: "Competitive Intelligence",
    who: "Competitive Intelligence & Strategy Teams",
    value: "Tracks 25,000 companies via six alternative data signals — patents, hires, supply chain shifts — in real time.",
    connected: "Alerts Innovation when a competitor files a relevant patent",
    color: "border-amber-500/30",
    bg: "from-amber-500/15 to-amber-600/10",
    accent: "text-amber-400",
    dotColor: "bg-amber-400",
  },
  {
    icon: Lightbulb,
    title: "Innovation Intelligence",
    who: "Innovation & R&D Directors",
    value: "Scores every concept against real consumer signals — compressing 18-month cycles to 8-week validated sprints.",
    connected: "Scores concepts against trend momentum + market size + competitive white space",
    color: "border-violet-500/30",
    bg: "from-violet-500/15 to-violet-600/10",
    accent: "text-violet-400",
    dotColor: "bg-violet-400",
  },
  {
    icon: ShoppingCart,
    title: "Sales Intelligence",
    who: "National Account Managers & Commercial Leads",
    value: "Walks into every buyer meeting with the full story — trend, sizing, competitive context — in one click.",
    connected: "Builds buyer stories from every upstream intelligence layer",
    color: "border-rose-500/30",
    bg: "from-rose-500/15 to-rose-600/10",
    accent: "text-rose-400",
    dotColor: "bg-rose-400",
  },
  {
    icon: Wallet,
    title: "Procurement Optimisation",
    who: "Heads of Procurement & CFOs",
    value: "Consolidates 14 data vendors into one platform — 40% lower TCO with full usage visibility.",
    connected: "Measures ROI across all five intelligence solutions in one contract",
    color: "border-cyan-500/30",
    bg: "from-cyan-500/15 to-cyan-600/10",
    accent: "text-cyan-400",
    dotColor: "bg-cyan-400",
  },
];

const CJSlideConnectedDecision = ({
  isPlaying, isLoading, progress, hasCompleted, onPlay, onPause, onNextSlide,
}: CJSlideConnectedDecisionProps) => {
  return (
    <CPSlideContainer
      id="cj-slide-decision"
      title="Connected Consumer Intelligence"
      subtitle="Six solutions. One taxonomy. Each powerful alone — transformational together."
      slideNumber={7}
      isPlaying={isPlaying}
      isLoading={isLoading}
      progress={progress}
      hasCompleted={hasCompleted}
      onPlay={onPlay}
      onPause={onPause}
      onNextSlide={onNextSlide}
    >
      <div className="h-full flex flex-col gap-2">
        {/* Solution grid — 3×2 */}
        <div className="grid grid-cols-3 gap-2 flex-1 min-h-0">
          {solutions.map((sol, i) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className={`relative bg-gradient-to-b ${sol.bg} border ${sol.color} rounded-lg p-3 flex flex-col`}
              >
                {/* Header */}
                <div className="flex items-center gap-2 mb-1.5">
                  <div className={`w-7 h-7 rounded-lg bg-card/50 flex items-center justify-center ${sol.accent}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground leading-tight">{sol.title}</p>
                    <p className={`text-[9px] ${sol.accent} font-medium`}>{sol.who}</p>
                  </div>
                </div>

                {/* Value */}
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                  {sol.value}
                </p>

                {/* Connected link */}
                <div className="mt-1.5 flex items-start gap-1 pt-1.5 border-t border-border/30">
                  <Link2 className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                  <p className="text-[10px] text-primary/80 leading-snug italic">
                    {sol.connected}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Unifying taxonomy bar */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="h-1.5 rounded-full bg-gradient-to-r from-blue-500 via-primary to-rose-500 origin-left"
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center text-xs text-muted-foreground"
        >
          One Consumer-Connected Taxonomy — intelligence flows from foresight to shelf
        </motion.p>
      </div>
    </CPSlideContainer>
  );
};

export default CJSlideConnectedDecision;
