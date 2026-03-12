import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SlidePlayButton from "@/components/SlidePlayButton";
import type { SlideNarrationProps } from "@/types/slideProps";

const stats = [
  { value: "8 of 10", label: "Top FMCG companies trust us" },
  { value: "95%", label: "Global GDP coverage" },
  { value: "40+", label: "Years of market intelligence" },
];

const CJSlide0Title = ({
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
      id="cj-slide-0"
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
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-sky-400/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full text-center space-y-6 sm:space-y-8">
        {/* Audience badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[10px] sm:text-xs font-semibold text-primary uppercase tracking-wider">
            For CMOs, CSOs & Category Leaders
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight">
            <span className="text-foreground">Connected Intelligence</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-sky-400 to-primary bg-clip-text text-transparent">
              for Consumer Brands
            </span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            What you're about to see isn't just better data.
            <br className="hidden sm:block" />
            It's a completely{" "}
            <span className="text-primary font-medium">new way of working.</span>
          </p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto pt-4 border-t border-border/30"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
              className="text-center"
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-[10px] sm:text-xs mt-1 leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="pt-2 space-y-2"
        >
          <p className="text-foreground/80 text-base sm:text-lg md:text-xl font-display italic">
            "The brands that win don't have more data.
            <br className="hidden sm:block" />
            They have connected intelligence."
          </p>
          <span className="inline-block text-primary text-[10px] sm:text-xs font-semibold uppercase tracking-widest">
            A new way of working
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground/50 animate-pulse">
        <span className="text-[10px] sm:text-xs uppercase tracking-widest">Scroll to begin</span>
        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>
    </section>
  );
};

export default CJSlide0Title;
