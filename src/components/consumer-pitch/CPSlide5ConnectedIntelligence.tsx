import { motion } from "framer-motion";
import { Brain, BarChart3, Radar, Lightbulb, ShoppingCart } from "lucide-react";
import CPSlideContainer from "./CPSlideContainer";
import { SlideNarrationProps } from "@/types/slideProps";

const solutions = [
  {
    icon: Brain,
    title: "Strategic Intelligence",
    desc: "Scans macro themes 12 months before they hit your category",
    color: "border-sky-500/40 bg-sky-500/10",
    iconColor: "text-sky-400",
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    desc: "Sizing & forecasting across 110 countries, 1,000+ segments",
    color: "border-emerald-500/40 bg-emerald-500/10",
    iconColor: "text-emerald-400",
  },
  {
    icon: Radar,
    title: "Competitive Intelligence",
    desc: "Predictive tracking of 25,000 companies via 6 data signals",
    color: "border-amber-500/40 bg-amber-500/10",
    iconColor: "text-amber-400",
  },
  {
    icon: Lightbulb,
    title: "Innovation Intelligence",
    desc: "18-month cycles compressed to 8-week validated sprints",
    color: "border-violet-500/40 bg-violet-500/10",
    iconColor: "text-violet-400",
  },
  {
    icon: ShoppingCart,
    title: "Sales Intelligence",
    desc: "Stories backed by foresight, not fragments",
    color: "border-pink-500/40 bg-pink-500/10",
    iconColor: "text-pink-400",
  },
];

const CPSlide5ConnectedIntelligence = (props: SlideNarrationProps) => {
  return (
    <CPSlideContainer
      id="cp-slide-5"
      title="Connected Consumer Intelligence"
      subtitle="One solution that moves faster, aligns better, and acts with confidence."
      slideNumber={5}
      {...props}
    >
      <div className="h-full flex items-center justify-center">
        <div className="w-full max-w-5xl">
          {/* Central connected ring */}
          <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-4">
            {solutions.map((sol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * i, duration: 0.5 }}
                className={`flex-1 p-4 sm:p-5 rounded-xl border ${sol.color} relative`}
              >
                {/* Connection line to next */}
                {i < solutions.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.2 * i + 0.5, duration: 0.4 }}
                    className="hidden sm:block absolute -right-2 top-1/2 w-4 h-px bg-primary/50 origin-left z-10"
                  />
                )}
                <sol.icon className={`w-7 h-7 ${sol.iconColor} mb-3`} />
                <p className="text-sm font-semibold text-foreground mb-1">{sol.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{sol.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Unifying taxonomy bar */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-4 h-1.5 rounded-full bg-gradient-to-r from-sky-500 via-primary to-pink-500 origin-left"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-center text-xs text-muted-foreground mt-2"
          >
            One Consumer-Connected Taxonomy
          </motion.p>
        </div>
      </div>
    </CPSlideContainer>
  );
};

export default CPSlide5ConnectedIntelligence;
