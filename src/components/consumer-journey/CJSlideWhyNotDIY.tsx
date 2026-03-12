import { motion } from "framer-motion";
import { X, Check, Clock, DollarSign, Layers, Link2 } from "lucide-react";
import CPSlideContainer from "@/components/consumer-pitch/CPSlideContainer";
import { SlideNarrationProps } from "@/types/slideProps";

const diyPoints = [
  { icon: Clock, label: "18+ months integration", detail: "Custom APIs, data mapping, ongoing maintenance" },
  { icon: DollarSign, label: "14 separate contracts", detail: "Overlapping coverage, no volume leverage" },
  { icon: Layers, label: "No shared taxonomy", detail: "Every tool uses different categories and definitions" },
  { icon: Link2, label: "No cross-pollination", detail: "Insights stay siloed in the tool that created them" },
];

const connectedPoints = [
  { icon: Clock, label: "90-day deployment", detail: "Pre-built on 40+ years of analyst-validated intelligence" },
  { icon: DollarSign, label: "1 platform, 1 contract", detail: "40% TCO reduction through consolidation" },
  { icon: Layers, label: "One consumer taxonomy", detail: "Unified across 50+ markets · 95% global GDP coverage" },
  { icon: Link2, label: "Intelligence flows", detail: "Agentic AI + domain experts accelerate every layer" },
];

const CJSlideWhyNotDIY = (props: SlideNarrationProps) => {
  return (
    <CPSlideContainer
      id="cj-slide-diy"
      title="Why Not DIY?"
      showTitle={false}
      slideNumber={8}
      {...props}
    >
      <div className="h-full flex flex-col items-center justify-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-2">The #1 Objection</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground">
            "Can't we just <span className="text-destructive">integrate</span> what we have?"
          </h2>
        </motion.div>

        {/* Two-column comparison */}
        <div className="w-full max-w-4xl grid grid-cols-2 gap-4">
          {/* DIY column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="rounded-xl border border-destructive/25 bg-destructive/5 p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <X className="w-5 h-5 text-destructive" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-destructive">DIY Integration</h3>
            </div>
            <div className="space-y-3">
              {diyPoints.map((point, i) => (
                <motion.div
                  key={point.label}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-2.5"
                >
                  <point.icon className="w-4 h-4 text-destructive/60 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-foreground">{point.label}</p>
                    <p className="text-[10px] text-muted-foreground leading-snug">{point.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Connected column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="rounded-xl border border-primary/25 bg-primary/5 p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <Check className="w-5 h-5 text-primary" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary">Connected Intelligence</h3>
            </div>
            <div className="space-y-3">
              {connectedPoints.map((point, i) => (
                <motion.div
                  key={point.label}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-2.5"
                >
                  <point.icon className="w-4 h-4 text-primary/70 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-foreground">{point.label}</p>
                    <p className="text-[10px] text-muted-foreground leading-snug">{point.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Data infrastructure callout */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mt-4 w-full max-w-4xl rounded-lg border border-primary/15 bg-primary/5 px-4 py-2 flex items-center justify-center gap-3"
        >
          <span className="text-[10px] sm:text-xs text-primary/80 font-medium tracking-wide text-center">
            Built on 40+ years of market intelligence · 95% global GDP coverage · Analyst-validated · Real-time
          </span>
        </motion.div>

        {/* Bottom line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-4 text-sm md:text-base font-semibold text-foreground/80 italic text-center"
        >
          "Integration connects pipes. GlobalData connects <span className="text-primary">meaning</span> — with the world's deepest consumer intelligence infrastructure behind it."
        </motion.p>
      </div>
    </CPSlideContainer>
  );
};

export default CJSlideWhyNotDIY;
