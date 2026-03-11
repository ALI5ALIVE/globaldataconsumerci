import { motion } from "framer-motion";
import { ChevronDown, BarChart3, Zap, Shuffle, Compass } from "lucide-react";
import SlidePlayButton from "@/components/SlidePlayButton";
import type { SlideNarrationProps } from "@/types/slideProps";

const pressureCards = [
  {
    icon: BarChart3,
    title: "Consumer Expectations",
    line: "They expect brands to know what they want before they do",
  },
  {
    icon: Zap,
    title: "Consumer Velocity",
    line: "Preferences shift faster than your planning cycles can follow",
  },
  {
    icon: Shuffle,
    title: "Fragmented Consumer View",
    line: "Seven tools, seven logins — no single view of your consumer",
  },
  {
    icon: Compass,
    title: "First-Mover Advantage",
    line: "8 of the top 10 FMCG companies already see the consumer as one connected picture",
  },
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
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-destructive/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full text-center space-y-8 sm:space-y-10">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight text-foreground">
            You're under{" "}
            <span className="bg-gradient-to-r from-destructive via-destructive/70 to-destructive bg-clip-text text-transparent">
              more pressure
            </span>{" "}
            than ever.
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Your consumers are changing faster than you can track them.
            <br className="hidden sm:block" />
            And every missed signal is a missed opportunity.
          </p>
        </motion.div>

        {/* Pressure cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {pressureCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-4 sm:p-5 text-left hover:border-destructive/30 transition-colors duration-300"
            >
              <card.icon className="w-5 h-5 text-destructive/80 mb-2" />
              <h3 className="text-foreground text-xs sm:text-sm font-semibold mb-1">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-[11px] sm:text-xs leading-relaxed">
                {card.line}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Emotional closer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-foreground/90 text-lg sm:text-xl md:text-2xl font-display italic"
        >
          "There has to be a better way."
        </motion.p>
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
