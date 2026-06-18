import { motion } from "framer-motion";
import { TrendingUp, Zap, Layers, Target } from "lucide-react";
import SlidePlayButton from "@/components/SlidePlayButton";
import type { SlideNarrationProps } from "@/types/slideProps";

const pressureCards = [
  {
    icon: Zap,
    title: "Market Velocity",
    desc: "Competitors ship in weeks. Your planning cycle is quarters.",
    accent: "from-accent/30 to-accent/5",
    featured: true,
  },
  {
    icon: Target,
    title: "First-Mover Risk",
    desc: "A £40M line lost this year to a signal someone else saw 6 months earlier.",
    accent: "from-destructive/20 to-destructive/5",
    featured: false,
  },
  {
    icon: TrendingUp,
    title: "Consumer Expectations",
    desc: "Tastes shift in 8 weeks. Your research takes 14.",
    accent: "from-primary/20 to-primary/5",
    featured: false,
  },
  {
    icon: Layers,
    title: "Fragmented View",
    desc: "7 vendors. 7 taxonomies. 0 shared truth.",
    accent: "from-amber-400/20 to-amber-400/5",
    featured: false,
  },
];

const CJSlide1Pressure = ({
  isPlaying = false,
  isLoading = false,
  progress = 0,
  hasCompleted = false,
  onPlay,
  onPause,
  onNextSlide,
}: SlideNarrationProps) => {
  return (
    <section
      id="cj-slide-1"
      className="h-screen w-full flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16 py-6 sm:py-8 snap-start relative overflow-hidden bg-background"
    >
      {onPlay && (
        <SlidePlayButton
          isPlaying={isPlaying}
          isLoading={isLoading}
          progress={progress}
          hasCompleted={hasCompleted}
          onPlay={onPlay}
          onPause={onPause ?? (() => {})}
          onNextSlide={onNextSlide}
        />
      )}

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-destructive/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full text-center space-y-8 sm:space-y-10">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-[1.1] tracking-tight text-foreground">
            You're Under More Pressure
            <br />
            <span className="text-destructive">Than Ever.</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            <span className="text-foreground font-semibold">60%</span> of your week reconciling data.{" "}
            <span className="text-foreground font-semibold">£63M</span> of category revenue at risk.
            <br className="hidden sm:block" />
            And the cycle is accelerating.
          </p>
        </motion.div>

        {/* Pressure cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-3xl mx-auto">
          {pressureCards.map((card, i) => {
            const Icon = card.icon;
            const featured = card.featured;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className={`relative rounded-xl border bg-gradient-to-br ${card.accent} backdrop-blur-sm text-left group transition-colors duration-300 ${
                  featured
                    ? "sm:col-span-2 border-primary/40 p-6 sm:p-7 hover:border-primary/60"
                    : "border-border/50 p-5 sm:p-6 hover:border-primary/30"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`rounded-lg bg-card/80 border border-border/50 flex items-center justify-center shrink-0 ${featured ? "w-12 h-12" : "w-10 h-10"}`}>
                    <Icon className={`text-primary ${featured ? "w-6 h-6" : "w-5 h-5"}`} />
                  </div>
                  <div>
                    <h3 className={`font-semibold text-foreground mb-1 ${featured ? "text-base sm:text-lg" : "text-sm sm:text-base"}`}>
                      {card.title}
                    </h3>
                    <p className={`text-muted-foreground leading-relaxed ${featured ? "text-sm sm:text-base" : "text-xs sm:text-sm"}`}>
                      {card.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bridge line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-foreground/80 text-sm sm:text-base md:text-lg font-display"
        >
          This isn't a data problem. It's an <span className="text-primary font-semibold">operating-model</span> problem.
          <br className="hidden sm:block" />
          <span className="italic text-foreground/60">Look at your Monday.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default CJSlide1Pressure;
