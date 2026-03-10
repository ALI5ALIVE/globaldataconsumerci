import { motion } from "framer-motion";
import CPSlideContainer from "./CPSlideContainer";
import { SlideNarrationProps } from "@/types/slideProps";

const results = [
  {
    company: "Ferrero",
    stat: "5 → 1",
    detail: "Replaced five vendors with one connected platform",
    sub: "30% lower cost",
    color: "border-primary/40",
  },
  {
    company: "Mondelēz",
    stat: "70%",
    detail: "Faster decision cycles — responding to consumer shifts before competitors",
    sub: "First-mover advantage",
    color: "border-emerald-500/40",
  },
  {
    company: "Validated",
    stat: "2×",
    detail: "Higher launch success rates by validating against real consumer signals",
    sub: "Not gut instinct — evidence",
    color: "border-amber-500/40",
  },
  {
    company: "Total Cost",
    stat: "−30%",
    detail: "Lower total cost of ownership — one connected answer, not seven disconnected tools",
    sub: "Investment, not expense",
    color: "border-violet-500/40",
  },
];

const CPSlide8Results = (props: SlideNarrationProps) => {
  return (
    <CPSlideContainer
      id="cp-slide-8"
      title="The Results Are Real"
      subtitle="These aren't projections — they're outcomes."
      slideNumber={8}
      {...props}
    >
      <div className="h-full flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-4xl">
          {results.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 * i, duration: 0.5 }}
              className={`p-5 sm:p-6 rounded-xl border ${r.color} bg-card/30`}
            >
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{r.company}</p>
              <p className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{r.stat}</p>
              <p className="text-sm text-foreground/80 mb-1">{r.detail}</p>
              <p className="text-xs text-primary">{r.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </CPSlideContainer>
  );
};

export default CPSlide8Results;
