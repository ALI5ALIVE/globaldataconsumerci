import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SlidePlayButton from "@/components/SlidePlayButton";
import type { SlideNarrationProps } from "@/types/slideProps";


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
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

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
            For the leaders deciding what to launch next
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-5"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight">
            <span className="text-foreground">Connected Intelligence</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              for Consumer Brands
            </span>
          </h1>
          <p className="text-foreground/90 text-base sm:text-lg md:text-2xl font-display font-semibold max-w-2xl mx-auto leading-tight">
            Stop reconciling data.{" "}
            <span className="text-primary">Start running the category.</span>
          </p>
        </motion.div>

        {/* Tension line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="max-w-2xl mx-auto pt-4 border-t border-border/30"
        >
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            In your category, the next launch decision is already being made.
            <br className="hidden sm:block" />
            The question is who has the better picture.
          </p>
        </motion.div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="pt-2 space-y-2"
        >
          <p className="text-foreground/80 text-base sm:text-lg md:text-xl font-display italic">
            "Seven vendors. Seven answers.
            <br className="hidden sm:block" />
            One window closing."
          </p>
          <span className="inline-block text-primary text-[10px] sm:text-xs font-semibold uppercase tracking-widest">
            Internal benchmark · Top-10 FMCG · 2025
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
