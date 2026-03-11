import { motion } from "framer-motion";
import { Phone, BarChart3, Rocket, ArrowRight } from "lucide-react";
import CPSlideContainer from "@/components/consumer-pitch/CPSlideContainer";
import { SlideNarrationProps } from "@/types/slideProps";

const ctaOptions = [
  {
    icon: Phone,
    title: "30-min Discovery Call",
    description: "Understand how connected intelligence applies to your specific category challenges.",
    cta: "Book a call",
  },
  {
    icon: BarChart3,
    title: "Intelligence Maturity Assessment",
    description: "Score your current setup across all five intelligence layers. Identify the biggest gaps.",
    cta: "Get assessed",
  },
  {
    icon: Rocket,
    title: "90-Day Pilot",
    description: "Deploy connected intelligence in one category. Measurable impact within a quarter.",
    cta: "Start a pilot",
  },
];

const CJSlide12CTA = (props: SlideNarrationProps) => {
  return (
    <CPSlideContainer
      id="cj-slide-12"
      title=""
      showTitle={false}
      slideNumber={12}
      {...props}
    >
      <div className="h-full flex flex-col items-center justify-center text-center relative">
        {/* Closing headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground leading-tight mb-4">
            Your competitors already see{" "}
            <span className="text-primary">the full picture.</span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            Let's make sure you do too.
          </motion.p>
        </motion.div>

        {/* Social proof badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mb-8 px-5 py-2.5 rounded-full bg-card/60 border border-primary/20 text-sm text-foreground"
        >
          8 of the top 10 FMCG companies already trust this platform.
        </motion.div>

        {/* 3 CTA options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl w-full mb-6"
        >
          {ctaOptions.map((option, i) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.15 }}
              className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-left hover:border-primary/40 transition-colors group"
            >
              <option.icon className="w-5 h-5 text-primary mb-2" />
              <h3 className="text-sm font-bold text-foreground mb-1">{option.title}</h3>
              <p className="text-[10px] text-muted-foreground leading-relaxed mb-3">{option.description}</p>
              <div className="flex items-center gap-1 text-xs text-primary font-semibold group-hover:gap-2 transition-all">
                <span>{option.cta}</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Risk reversal */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="text-sm text-muted-foreground italic"
        >
          No commitment. No procurement. Just clarity.
        </motion.p>

        {/* Background glow */}
        <motion.div
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 40%, hsl(var(--primary) / 0.1), transparent 60%)",
          }}
        />
      </div>
    </CPSlideContainer>
  );
};

export default CJSlide12CTA;
