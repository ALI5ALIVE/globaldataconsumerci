import { motion } from "framer-motion";
import { LucideIcon, AlertTriangle, CheckCircle2 } from "lucide-react";
import CPSlideContainer from "@/components/consumer-pitch/CPSlideContainer";
import { SlideNarrationProps } from "@/types/slideProps";
import PersonaDashboard, { DashboardType } from "@/components/consumer-journey/PersonaDashboard";

export interface PersonaMetric {
  value: string;
  label: string;
}

export interface PersonaData {
  name: string;
  role: string;
  step: string;
  icon: LucideIcon;
  painQuote: string;
  painDetail: string;
  painBullets: string[];
  benefitQuote: string;
  benefitDetail: string;
  metrics: PersonaMetric[];
  solutionName: string;
  dashboardType: DashboardType;
  valueChainPosition: number;
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
        {/* Value chain progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-2 flex items-center gap-2"
        >
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5, 6].map((pos) => (
              <div key={pos} className="flex items-center">
                <div
                  className={`w-2 h-2 rounded-full transition-all ${
                    pos === persona.valueChainPosition
                      ? "bg-primary scale-150"
                      : pos < persona.valueChainPosition
                      ? "bg-primary/40"
                      : "bg-muted-foreground/20"
                  }`}
                />
                {pos < 6 && (
                  <div
                    className={`w-4 h-0.5 ${
                      pos < persona.valueChainPosition ? "bg-primary/30" : "bg-muted-foreground/10"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground ml-2">
            Step {persona.valueChainPosition} of 6
          </span>
          <span className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">
            {persona.step}
          </span>
        </motion.div>

        {/* Persona intro */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="mb-3"
        >
          <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground">
            Meet <span className="text-primary">{persona.name}</span>
            <span className="text-muted-foreground font-normal text-sm sm:text-base ml-2">
              {persona.role}
            </span>
          </h2>
          <p className="text-xs text-muted-foreground/70 mt-0.5">Same company. Connected team.</p>
        </motion.div>

        {/* 3-column layout */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-3 min-h-0">
          {/* LEFT — Without */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col rounded-xl border border-destructive/25 bg-destructive/5 p-4 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-destructive/50" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-destructive/60 mb-2">
              Without Connected Intelligence
            </span>
            <blockquote className="text-sm font-medium text-foreground leading-snug mb-2 italic">
              "{persona.painQuote}"
            </blockquote>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">
              {persona.painDetail}
            </p>
            <div className="mt-auto space-y-1.5">
              {persona.painBullets.map((bullet, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-1.5"
                >
                  <AlertTriangle className="w-3 h-3 text-destructive/60 shrink-0" />
                  <span className="text-[11px] text-destructive/80">{bullet}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              animate={{ opacity: [0.05, 0.15, 0.05] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-destructive/10 blur-2xl"
            />
          </motion.div>

          {/* CENTER — Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col rounded-xl border border-border bg-card p-3 relative overflow-hidden"
          >
            <div className="text-center mb-2">
              <span className="text-[9px] font-bold uppercase tracking-widest text-primary/70">
                {persona.solutionName}
              </span>
            </div>
            <div className="flex-1 min-h-0">
              <PersonaDashboard type={persona.dashboardType} />
            </div>
          </motion.div>

          {/* RIGHT — With */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-col rounded-xl border border-primary/25 bg-primary/5 p-4 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-primary/50" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-primary/60 mb-2">
              With Connected Intelligence
            </span>
            <blockquote className="text-sm font-medium text-foreground leading-snug mb-2 italic">
              "{persona.benefitQuote}"
            </blockquote>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">
              {persona.benefitDetail}
            </p>
            <div className="mt-auto space-y-1.5">
              {persona.metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 + i * 0.1 }}
                  className="flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3 h-3 text-primary/70 shrink-0" />
                  <span className="text-[11px] text-foreground">
                    <span className="font-bold text-primary">{metric.value}</span>{" "}
                    <span className="text-muted-foreground">{metric.label}</span>
                  </span>
                </motion.div>
              ))}
            </div>
            <motion.div
              animate={{ opacity: [0.05, 0.15, 0.05] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-primary/10 blur-2xl"
            />
          </motion.div>
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="mt-2 text-center"
        >
          <p className="text-xs text-muted-foreground">
            Same person. Same role. <span className="text-primary font-semibold">Completely different impact.</span>
          </p>
        </motion.div>
      </div>
    </CPSlideContainer>
  );
};

export default PersonaSlide;
