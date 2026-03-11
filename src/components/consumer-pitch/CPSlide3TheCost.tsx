import { motion } from "framer-motion";
import { TrendingDown, Clock, AlertTriangle, DollarSign } from "lucide-react";
import CPSlideContainer from "./CPSlideContainer";
import { SlideNarrationProps } from "@/types/slideProps";

const costs = [
  {
    icon: TrendingDown,
    stat: "They Moved First",
    detail: "A competitor saw the same plant-based signals six months ago. They launched. They claimed the shelf. You're still reconciling.",
    color: "border-destructive/30 bg-destructive/5",
    iconColor: "text-destructive",
  },
  {
    icon: Clock,
    stat: "12 Weeks to Align",
    detail: "Your strategy, innovation, and commercial teams each had a different view. By the time they agreed, the buyer had moved on.",
    color: "border-amber-500/30 bg-amber-500/5",
    iconColor: "text-amber-400",
  },
  {
    icon: AlertTriangle,
    stat: "The Concept You Killed",
    detail: "One of your five plant-based concepts scored low on gut-feel. A competitor launched something almost identical — it's now a £40M line.",
    color: "border-orange-500/30 bg-orange-500/5",
    iconColor: "text-orange-400",
  },
  {
    icon: DollarSign,
    stat: "The Launch That Flopped",
    detail: "Another concept launched without competitive context. A rival had already saturated the space. You found out from trade press.",
    color: "border-violet-500/30 bg-violet-500/5",
    iconColor: "text-violet-400",
  },
];

const CPSlide3TheCost = (props: SlideNarrationProps) => {
  return (
    <CPSlideContainer
      id="cp-slide-3"
      title="What It's Costing You"
      subtitle="This isn't hypothetical. This is what fragmentation costs you — in this category, this year."
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
