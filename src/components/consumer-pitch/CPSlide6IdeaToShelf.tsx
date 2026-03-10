import { motion } from "framer-motion";
import { Sparkles, BarChart3, Radar, Lightbulb, ShoppingCart, ArrowRight } from "lucide-react";
import CPSlideContainer from "./CPSlideContainer";
import { SlideNarrationProps } from "@/types/slideProps";

const steps = [
  { icon: Sparkles, label: "Trend Emerges", detail: "Strategic flags it 18 months early", color: "text-sky-400", bg: "bg-sky-500/10 border-sky-500/30" },
  { icon: BarChart3, label: "Opportunity Sized", detail: "Market sizes across priority markets", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/30" },
  { icon: Radar, label: "White Space Found", detail: "Competitive reveals who's moving", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/30" },
  { icon: Lightbulb, label: "Concept Validated", detail: "Innovation scores through launch gates", color: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/30" },
  { icon: ShoppingCart, label: "Story Packaged", detail: "Sales walks in with the full picture", color: "text-pink-400", bg: "bg-pink-500/10 border-pink-500/30" },
];

const CPSlide6IdeaToShelf = (props: SlideNarrationProps) => {
  return (
    <CPSlideContainer
      id="cp-slide-6"
      title="From Idea to Shelf"
      subtitle="One connected chain. Every team aligned. Every decision faster."
      slideNumber={6}
      {...props}
    >
      <div className="h-full flex items-center justify-center">
        <div className="w-full max-w-5xl">
          {/* Horizontal flow */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-0">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 * i, duration: 0.5 }}
                  className={`flex flex-col items-center p-4 sm:p-5 rounded-xl border ${step.bg} w-full sm:w-36 md:w-44`}
                >
                  <step.icon className={`w-8 h-8 ${step.color} mb-2`} />
                  <p className="text-xs sm:text-sm font-semibold text-foreground text-center mb-1">{step.label}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground text-center leading-tight">{step.detail}</p>
                </motion.div>
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 * i + 0.3 }}
                  >
                    <ArrowRight className="w-5 h-5 text-primary/50 mx-1 hidden sm:block" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Connected data line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-6 h-0.5 rounded-full bg-gradient-to-r from-sky-500 via-primary to-pink-500 origin-left"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
            className="text-center text-xs text-muted-foreground mt-2 italic"
          >
            Same taxonomy. Same truth. Every step of the way.
          </motion.p>
        </div>
      </div>
    </CPSlideContainer>
  );
};

export default CPSlide6IdeaToShelf;
