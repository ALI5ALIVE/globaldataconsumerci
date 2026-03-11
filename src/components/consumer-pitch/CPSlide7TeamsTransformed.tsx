import { motion } from "framer-motion";
import CPSlideContainer from "./CPSlideContainer";
import { SlideNarrationProps } from "@/types/slideProps";

interface TimeBar {
  label: string;
  pct: number;
  color: string;
}

const beforeBars: TimeBar[] = [
  { label: "Reconciling", pct: 60, color: "bg-destructive/70" },
  { label: "Searching", pct: 20, color: "bg-amber-500/70" },
  { label: "Reporting", pct: 10, color: "bg-muted-foreground/50" },
  { label: "Strategy", pct: 10, color: "bg-primary/40" },
];

const afterBars: TimeBar[] = [
  { label: "Reconciling", pct: 5, color: "bg-muted-foreground/30" },
  { label: "Searching", pct: 5, color: "bg-muted-foreground/30" },
  { label: "Reporting", pct: 15, color: "bg-accent/50" },
  { label: "Strategy", pct: 75, color: "bg-primary" },
];

const BarSet = ({ bars, delay, label }: { bars: TimeBar[]; delay: number; label: string }) => (
  <div className="flex-1">
    <p className="text-sm font-semibold text-foreground mb-3">{label}</p>
    <div className="space-y-2">
      {bars.map((bar, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground w-20 text-right shrink-0">{bar.label}</span>
          <div className="flex-1 h-6 bg-card/40 rounded-md overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${bar.pct}%` }}
              transition={{ delay: delay + i * 0.15, duration: 0.8, ease: "easeOut" }}
              className={`h-full ${bar.color} rounded-md flex items-center justify-end pr-2`}
            >
              <span className="text-[10px] font-bold text-foreground">{bar.pct}%</span>
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CPSlide7TeamsTransformed = (props: SlideNarrationProps) => {
  return (
    <CPSlideContainer
      id="cp-slide-7"
      title="Your Teams, Transformed"
      subtitle="From reconciling data to reading the market."
      slideNumber={7}
      {...props}
    >
      <div className="h-full flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
            <BarSet bars={beforeBars} delay={0.3} label="Today — Fragmented" />
            <div className="hidden sm:flex items-center">
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="w-px h-full bg-primary/30 origin-top"
              />
            </div>
            <BarSet bars={afterBars} delay={1.5} label="Connected — Transformed" />
          </div>

          {/* Decision velocity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="mt-8 flex items-center justify-center gap-6 sm:gap-10"
          >
            <div className="text-center">
              <p className="text-xs text-muted-foreground">Decision velocity</p>
              <p className="text-lg font-bold text-destructive line-through">6–8 weeks</p>
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8 }}
              className="text-primary text-2xl"
            >→</motion.span>
            <div className="text-center">
              <p className="text-xs text-muted-foreground">Decision velocity</p>
              <p className="text-lg font-bold text-primary">Hours</p>
            </div>
          </motion.div>
        </div>
      </div>
    </CPSlideContainer>
  );
};

export default CPSlide7TeamsTransformed;
