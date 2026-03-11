import { motion } from "framer-motion";
import { Shield, Quote, Clock, Zap, Target } from "lucide-react";
import CPSlideContainer from "@/components/consumer-pitch/CPSlideContainer";
import { SlideNarrationProps } from "@/types/slideProps";

const trustedLogos = [
  "Ferrero", "Mondelez", "Danone", "Reckitt",
  "Colgate-Palmolive", "Henkel", "Church & Dwight", "Haleon",
];

const transformationPillars = [
  { icon: Clock, metric: "70%", label: "reduction in time to insight", tagline: "Hours, not weeks" },
  { icon: Zap, metric: "3×", label: "faster decisions", tagline: "Evidence, not debate" },
  { icon: Target, metric: "2×", label: "launch success rate", tagline: "Winners, not guesses" },
];

const CJSlideProof = (props: SlideNarrationProps) => {
  return (
    <CPSlideContainer
      id="cj-slide-proof"
      title="Proof"
      showTitle={false}
      slideNumber={9}
      {...props}
    >
      <div className="h-full flex flex-col items-center justify-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-5"
        >
          <Shield className="w-5 h-5 text-primary" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Trusted by the best</span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
            <span className="text-primary">8 of the top 10</span> FMCG companies
          </h2>
          <p className="text-base text-muted-foreground">have already transformed how they work.</p>
        </motion.div>

        {/* Transformation Pillars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="grid grid-cols-3 gap-4 max-w-2xl mb-6 w-full"
        >
          {transformationPillars.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.15 }}
              className="rounded-xl border border-primary/20 bg-primary/5 p-4"
            >
              <pillar.icon className="w-5 h-5 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">{pillar.metric}</p>
              <p className="text-[11px] text-muted-foreground mt-1">{pillar.label}</p>
              <p className="text-[10px] font-semibold text-primary/70 mt-2 italic">"{pillar.tagline}"</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Logo grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="grid grid-cols-4 gap-2.5 max-w-2xl mb-6"
        >
          {trustedLogos.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + i * 0.06 }}
              className="flex items-center justify-center h-12 rounded-lg border border-border bg-card/60 backdrop-blur-sm px-3"
            >
              <span className="text-xs font-semibold text-muted-foreground tracking-wide">{name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          className="max-w-xl rounded-xl border border-primary/20 bg-primary/5 p-4 relative"
        >
          <Quote className="w-5 h-5 text-primary/30 absolute top-3 left-3" />
          <p className="text-sm text-foreground italic leading-relaxed mb-2 pl-6">
            "We went from seven disconnected data vendors to a single connected platform in 90 days. 
            For the first time, our strategy, innovation, and commercial teams are working from the same intelligence."
          </p>
          <div className="flex items-center gap-3 pl-6">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
              <span className="text-[10px] font-bold text-primary-foreground">VP</span>
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold text-foreground">VP of Consumer Insights</p>
              <p className="text-[10px] text-muted-foreground">Top 5 Global FMCG Company</p>
            </div>
          </div>
        </motion.div>
      </div>
    </CPSlideContainer>
  );
};

export default CJSlideProof;
