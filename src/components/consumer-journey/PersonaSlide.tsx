import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import CPSlideContainer from "@/components/consumer-pitch/CPSlideContainer";
import { SlideNarrationProps } from "@/types/slideProps";

export interface PersonaData {
  name: string;
  role: string;
  step: string;
  icon: LucideIcon;
  painQuote: string;
  painDetail: string;
  benefitQuote: string;
  benefitDetail: string;
}

interface PersonaSlideProps extends SlideNarrationProps {
  persona: PersonaData;
  slideNumber: number;
}

const PersonaSlide = ({ persona, slideNumber, ...narrationProps }: PersonaSlideProps) => {
  return (
    <CPSlideContainer
      id={`cj-slide-${slideNumber}`}
      title={persona.step}
      showTitle={false}
      slideNumber={slideNumber}
      {...narrationProps}
    >
      <div className="h-full flex flex-col">
        {/* Step label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-2 flex items-center gap-3"
        >
          <persona.icon className="w-5 h-5 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">{persona.step}</span>
        </motion.div>

        {/* Persona intro */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-1"
        >
          Meet <span className="text-primary">{persona.name}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm text-muted-foreground mb-4 sm:mb-6"
        >
          {persona.role}
        </motion.p>

        {/* Split screen: Without vs With */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 min-h-0">
          {/* WITHOUT — Pain */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col rounded-2xl border border-destructive/30 bg-destructive/5 p-5 sm:p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-destructive/60" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-destructive/70 mb-3">
              Without Connected Intelligence
            </span>
            <blockquote className="text-base sm:text-lg font-medium text-foreground leading-snug mb-3 italic">
              "{persona.painQuote}"
            </blockquote>
            <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
              {persona.painDetail}
            </p>
            {/* Emotional tension pulse */}
            <motion.div
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-destructive/10 blur-2xl"
            />
          </motion.div>

          {/* WITH — Benefit */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="flex flex-col rounded-2xl border border-primary/30 bg-primary/5 p-5 sm:p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-primary/60" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-3">
              With Connected Intelligence
            </span>
            <blockquote className="text-base sm:text-lg font-medium text-foreground leading-snug mb-3 italic">
              "{persona.benefitQuote}"
            </blockquote>
            <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
              {persona.benefitDetail}
            </p>
            {/* Resolution glow */}
            <motion.div
              animate={{ opacity: [0.1, 0.25, 0.1] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-primary/10 blur-2xl"
            />
          </motion.div>
        </div>

        {/* Bottom transformation line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-3 sm:mt-4 text-center origin-center"
        >
          <p className="text-xs sm:text-sm text-muted-foreground">
            Same person. Same role. <span className="text-primary font-semibold">Completely different impact.</span>
          </p>
        </motion.div>
      </div>
    </CPSlideContainer>
  );
};

export default PersonaSlide;
