import { motion } from "framer-motion";
import { Database, BarChart3, Radar, Lightbulb, ShoppingCart, Globe, Brain } from "lucide-react";
import CPSlideContainer from "./CPSlideContainer";
import { SlideNarrationProps } from "@/types/slideProps";

const sources = [
  { icon: Brain, label: "Strategic\nInsight", provider: "Provider A" },
  { icon: BarChart3, label: "Market\nSizing", provider: "Provider B" },
  { icon: Radar, label: "Competitive\nTracking", provider: "Provider C" },
  { icon: Lightbulb, label: "Innovation\nTrends", provider: "Provider D" },
  { icon: ShoppingCart, label: "Sales\nIntelligence", provider: "Provider E" },
  { icon: Globe, label: "Consumer\nResearch", provider: "Provider F" },
  { icon: Database, label: "Internal\nData", provider: "In-house" },
];

const CPSlide2SevenSources = (props: SlideNarrationProps) => {
  return (
    <CPSlideContainer
      id="cp-slide-2"
      title="Seven Questions, Seven Sources"
      subtitle="Every team is confident they have the right answer. None of them agree."
      slideNumber={2}
      {...props}
    >
      <div className="h-full flex flex-col items-center justify-center">
        {/* Disconnected grid */}
        <div className="grid grid-cols-4 sm:grid-cols-7 gap-3 sm:gap-4 w-full max-w-4xl">
          {sources.map((source, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotate: (i % 2 === 0 ? -3 : 3) }}
              animate={{ opacity: 1, y: 0, rotate: (i % 2 === 0 ? -2 : 2) }}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
              className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl bg-card/40 border border-border/40 relative"
            >
              {/* Disconnection indicator */}
              <motion.div
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-destructive/80"
              />
              <source.icon className="w-7 h-7 sm:w-8 sm:h-8 text-muted-foreground" />
              <span className="text-[10px] sm:text-xs text-center text-foreground/80 whitespace-pre-line leading-tight">
                {source.label}
              </span>
              <span className="text-[9px] text-muted-foreground">{source.provider}</span>
            </motion.div>
          ))}
        </div>

        {/* Time waste stat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-8 flex items-center gap-6 px-8 py-4 rounded-2xl bg-destructive/10 border border-destructive/20"
        >
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-destructive">60%</p>
            <p className="text-xs text-muted-foreground">of time reconciling</p>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-muted-foreground">10%</p>
            <p className="text-xs text-muted-foreground">on strategy</p>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-amber-400">12 wks</p>
            <p className="text-xs text-muted-foreground">to decide</p>
          </div>
        </motion.div>
      </div>
    </CPSlideContainer>
  );
};

export default CPSlide2SevenSources;
