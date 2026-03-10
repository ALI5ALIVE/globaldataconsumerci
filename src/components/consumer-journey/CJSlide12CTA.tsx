import { motion } from "framer-motion";
import { Zap, ArrowRight, Crown } from "lucide-react";
import CPSlideContainer from "@/components/consumer-pitch/CPSlideContainer";
import { SlideNarrationProps } from "@/types/slideProps";

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
        {/* Revolutionary statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-8"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Crown className="w-5 h-5 text-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">A First</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground leading-tight mb-4">
            Nothing like this{" "}
            <span className="text-primary">exists.</span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            No one has ever connected strategic foresight, market sizing, competitive tracking, 
            innovation validation, and commercial intelligence through a single consumer-connected taxonomy.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="text-sm text-primary mt-3 font-medium"
          >
            Eight of the top ten FMCG companies already trust it.
          </motion.p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="w-24 h-px bg-primary/40 mb-8"
        />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-primary/10 border border-primary/30">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-2xl sm:text-3xl font-bold text-foreground">90 Days</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            From seven disconnected sources to one unified consumer intelligence platform.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="mt-4 flex items-center gap-2 text-primary font-semibold text-lg"
          >
            <span>Let's have the conversation</span>
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </motion.div>

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
