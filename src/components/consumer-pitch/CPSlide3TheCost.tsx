import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { TrendingDown, Clock, AlertTriangle, ShieldAlert, Timer, HelpCircle } from "lucide-react";
import { useEffect, useRef } from "react";
import CPSlideContainer from "./CPSlideContainer";
import { SlideNarrationProps } from "@/types/slideProps";

const businessCosts = [
  {
    icon: TrendingDown,
    stat: "£40M Line — Lost",
    detail: "A competitor saw the same plant-based signals six months ago. They launched. They claimed the shelf. You're still reconciling.",
    value: 40,
    iconColor: "text-destructive",
    borderColor: "border-destructive/30 bg-destructive/5",
  },
  {
    icon: Clock,
    stat: "12 Weeks to Align",
    detail: "Strategy, innovation, and commercial each had a different view. By the time they agreed, the buyer had moved on.",
    value: 8,
    iconColor: "text-amber-400",
    borderColor: "border-amber-500/30 bg-amber-500/5",
  },
  {
    icon: AlertTriangle,
    stat: "The Launch That Flopped",
    detail: "Launched without competitive context. A rival had already saturated the space. You found out from trade press.",
    value: 15,
    iconColor: "text-orange-400",
    borderColor: "border-orange-500/30 bg-orange-500/5",
  },
];

const personalCosts = [
  {
    icon: ShieldAlert,
    stat: "Your Board Questioned the Numbers — Again",
    detail: "Three different data sources. Three different stories. Your credibility took the hit.",
    iconColor: "text-violet-400",
    borderColor: "border-violet-500/30 bg-violet-500/5",
  },
  {
    icon: Timer,
    stat: "3 Days Building a Deck, Not Strategy",
    detail: "You spent 60% of your week reconciling spreadsheets instead of shaping the category.",
    iconColor: "text-sky-400",
    borderColor: "border-sky-500/30 bg-sky-500/5",
  },
  {
    icon: HelpCircle,
    stat: "The Call You Didn't Make",
    detail: "You had the right instinct but no evidence to back it. So you waited. Someone else didn't.",
    iconColor: "text-emerald-400",
    borderColor: "border-emerald-500/30 bg-emerald-500/5",
  },
];

const AnimatedCounter = ({ target, delay }: { target: number; delay: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `£${Math.round(v)}M`);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      animate(count, target, { duration: 1.2, ease: "easeOut" });
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [count, target, delay]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = v;
    });
    return unsubscribe;
  }, [rounded]);

  return <span ref={ref} className="font-bold text-destructive">£0M</span>;
};

const CPSlide3TheCost = (props: SlideNarrationProps) => {
  const totalBusinessLoss = businessCosts.reduce((sum, c) => sum + c.value, 0);

  return (
    <CPSlideContainer
      id="cp-slide-3"
      title="What It's Already Cost You"
      subtitle="In your category. This year. Personally."
      slideNumber={3}
      {...props}
    >
      <div className="h-full flex flex-col justify-between">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 min-h-0">
          {/* Business column */}
          <div className="flex flex-col gap-3">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xs uppercase tracking-widest font-semibold text-destructive/80 mb-1"
            >
              Your Business
            </motion.h3>
            {businessCosts.map((cost, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.4, duration: 0.5 }}
                className={`p-4 rounded-xl border ${cost.borderColor} flex items-start gap-3`}
              >
                <cost.icon className={`w-6 h-6 ${cost.iconColor} shrink-0 mt-0.5`} />
                <div className="min-w-0">
                  <p className="text-sm sm:text-base font-bold text-foreground leading-tight">{cost.stat}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1">{cost.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Personal column */}
          <div className="flex flex-col gap-3">
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xs uppercase tracking-widest font-semibold text-primary/80 mb-1"
            >
              You, Personally
            </motion.h3>
            {personalCosts.map((cost, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.4, duration: 0.5 }}
                className={`p-4 rounded-xl border ${cost.borderColor} flex items-start gap-3`}
              >
                <cost.icon className={`w-6 h-6 ${cost.iconColor} shrink-0 mt-0.5`} />
                <div className="min-w-0">
                  <p className="text-sm sm:text-base font-bold text-foreground leading-tight">{cost.stat}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1">{cost.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Accumulator bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="mt-4 p-3 sm:p-4 rounded-xl border border-primary/20 bg-primary/5 flex flex-col sm:flex-row items-center justify-between gap-2"
        >
          <div className="flex items-center gap-4 text-sm">
            <span className="text-muted-foreground">Revenue at risk:</span>
            <AnimatedCounter target={totalBusinessLoss} delay={2.4} />
            <span className="text-muted-foreground mx-1">·</span>
            <span className="text-muted-foreground">Time lost:</span>
            <span className="font-bold text-primary">60% of your week</span>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2, duration: 0.8 }}
            className="text-xs sm:text-sm text-muted-foreground italic text-center sm:text-right"
          >
            And next quarter, it happens again — unless something changes.
          </motion.p>
        </motion.div>
      </div>
    </CPSlideContainer>
  );
};

export default CPSlide3TheCost;
