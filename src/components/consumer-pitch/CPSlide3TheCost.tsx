import { motion } from "framer-motion";
import { TrendingDown, Clock, AlertTriangle, DollarSign } from "lucide-react";
import CPSlideContainer from "./CPSlideContainer";
import { SlideNarrationProps } from "@/types/slideProps";

const costs = [
  {
    icon: TrendingDown,
    stat: "Missed Trends",
    detail: "A major CPG company missed the protein snacking wave — three teams, three views, no alignment.",
    color: "border-destructive/30 bg-destructive/5",
    iconColor: "text-destructive",
  },
  {
    icon: Clock,
    stat: "12+ Weeks",
    detail: "Average decision latency. By the time you align, competitors have claimed the shelf.",
    color: "border-amber-500/30 bg-amber-500/5",
    iconColor: "text-amber-400",
  },
  {
    icon: AlertTriangle,
    stat: "68% Lack Confidence",
    detail: "Two-thirds of insight teams don't trust their data enough to act. Not a data problem — a connection problem.",
    color: "border-orange-500/30 bg-orange-500/5",
    iconColor: "text-orange-400",
  },
  {
    icon: DollarSign,
    stat: "Failed Launches",
    detail: "40% of launches miss their window. Not because the idea was wrong — the insight was too slow.",
    color: "border-violet-500/30 bg-violet-500/5",
    iconColor: "text-violet-400",
  },
];

const CPSlide3TheCost = (props: SlideNarrationProps) => {
  return (
    <CPSlideContainer
      id="cp-slide-3"
      title="What It's Costing You"
      subtitle="Fragmentation isn't just frustrating — it's expensive."
      slideNumber={3}
      {...props}
    >
      <div className="h-full flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-4xl">
          {costs.map((cost, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 * i, duration: 0.6 }}
              className={`p-5 sm:p-6 rounded-xl border ${cost.color}`}
            >
              <div className="flex items-start gap-4">
                <cost.icon className={`w-8 h-8 ${cost.iconColor} shrink-0 mt-1`} />
                <div>
                  <p className="text-lg sm:text-xl font-bold text-foreground mb-1">{cost.stat}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cost.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </CPSlideContainer>
  );
};

export default CPSlide3TheCost;
