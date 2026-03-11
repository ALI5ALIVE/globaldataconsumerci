import { ArrowRight, RefreshCw, Diamond, ArrowLeftRight, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";
import GDSlideContainer from "@/components/globaldata-slides/GDSlideContainer";
import type { SlideNarrationProps } from "@/types/slideProps";

const canvasCards = [
  {
    icon: ArrowRight,
    title: "Workflow Impact",
    description: "How daily work changes",
    before: "Pulling trend data from Mintel, Nielsen, Kantar separately every Monday",
    after: "One unified consumer intelligence feed — trends, sizing & retail signals in one view",
    statLabel: "Time on data reconciliation",
    statBefore: 60,
    statAfter: 5,
    benefit: "Your CMI team reclaims 11 hours per week for strategic thinking",
  },
  {
    icon: RefreshCw,
    title: "Role Evolution",
    description: "Who does what differently",
    before: "Consumer insights analysts building 40-slide decks nobody reads",
    after: "Strategic advisors briefing the board with evidence-backed recommendations",
    statLabel: "Time on strategy",
    statBefore: 10,
    statAfter: 75,
    benefit: "Analysts become the growth advisors they were hired to be",
  },
  {
    icon: Diamond,
    title: "Decision Rights",
    description: "Where authority shifts",
    before: "Category decisions based on whoever presents last or loudest",
    after: "Every call backed by connected trend, sizing & competitive evidence",
    statLabel: "Decision velocity",
    statBefore: 8, // weeks
    statAfter: 48, // hours — displayed differently
    statUnit: "weeks → 48 hrs",
    benefit: "Kill or fast-track concepts in days, not quarters",
  },
  {
    icon: ArrowLeftRight,
    title: "Information Flow",
    description: "What data moves where",
    before: "Trend team emails a PDF. Sizing team has a different number. Nobody sees competitor moves",
    after: "One taxonomy connects foresight, sizing, competitive intel & innovation scoring in real time",
    statLabel: "Data sources",
    statBefore: 7,
    statAfter: 1,
    statUnit: "sources → 1 truth",
    benefit: 'No more "which number is right?" meetings',
  },
  {
    icon: Target,
    title: "Success Metrics",
    description: "How outcomes are measured",
    before: "Tracking reports produced and meetings attended",
    after: "Measuring concepts validated, time-to-shelf, and listing win rate",
    statLabel: "Innovation cycle",
    statBefore: 1,
    statAfter: 3,
    statUnit: "3× faster",
    benefit: "Prove CMI's impact in language the board understands",
  },
  {
    icon: Zap,
    title: "Change Velocity",
    description: "Speed of transformation",
    before: "Quarterly planning cycles that miss fast-moving consumer trends",
    after: "Continuous signal monitoring with AI-triggered alerts when markets shift",
    statLabel: "Response time",
    statBefore: 12, // weeks
    statAfter: 0, // real-time
    statUnit: "12 wks → real-time",
    benefit: "Never miss another plant-based protein moment",
  },
];

const CJSlideOperatingModel = (props: SlideNarrationProps) => {
  return (
    <GDSlideContainer
      id="cj-slide-operating-model"
      title="Your Operating Model Transformed"
      subtitle="The Operating Model Canvas"
      slideNumber={8}
      {...props}
    >
      <div className="h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full max-w-6xl mx-auto">
          {canvasCards.map((card, i) => {
            const showPercentBar = !card.statUnit;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="group border border-border/50 rounded-lg p-2.5 bg-card/30 hover:bg-card/60 hover:border-primary/40 transition-all duration-300 flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors shrink-0">
                    <card.icon className="w-3 h-3" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-foreground leading-tight">{card.title}</h3>
                    <p className="text-[9px] text-muted-foreground">{card.description}</p>
                  </div>
                </div>

                {/* Before / After */}
                <div className="space-y-0.5 pt-1 border-t border-border/30 text-[10px] leading-snug">
                  <div className="flex items-start gap-1.5">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-destructive/80 shrink-0 mt-px w-9">Before</span>
                    <p className="text-muted-foreground line-through decoration-destructive/30">{card.before}</p>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-primary shrink-0 mt-px w-9">After</span>
                    <p className="text-foreground font-medium">{card.after}</p>
                  </div>
                </div>

                {/* Stat Bar */}
                <div className="mt-1 pt-1 border-t border-border/20">
                  <p className="text-[9px] uppercase tracking-wider text-muted-foreground mb-1 font-semibold">{card.statLabel}</p>
                  {showPercentBar ? (
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[9px] text-destructive/70 w-7 text-right font-semibold">{card.statBefore}%</span>
                        <div className="flex-1 h-1.5 rounded-full bg-muted/50 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-destructive/50"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${card.statBefore}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 + 0.3, duration: 0.6 }}
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[9px] text-primary w-7 text-right font-semibold">{card.statAfter}%</span>
                        <div className="flex-1 h-1.5 rounded-full bg-muted/50 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-primary"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${card.statAfter}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 + 0.4, duration: 0.6 }}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-primary">{card.statUnit}</span>
                    </div>
                  )}
                </div>

                {/* Benefit */}
                <p className="mt-auto pt-1 text-[9px] text-primary font-medium leading-snug">
                  ✦ {card.benefit}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </GDSlideContainer>
  );
};

export default CJSlideOperatingModel;
