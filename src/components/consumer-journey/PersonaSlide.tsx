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

const avatarGradients = [
  "from-blue-500 to-cyan-400",
  "from-violet-500 to-purple-400",
  "from-amber-500 to-orange-400",
  "from-emerald-500 to-teal-400",
  "from-rose-500 to-pink-400",
  "from-indigo-500 to-blue-400",
];

const PersonaSlide = ({ persona, slideNumber, ...narrationProps }: PersonaSlideProps) => {
  const Icon = persona.icon;
  const gradientClass = avatarGradients[(persona.valueChainPosition - 1) % avatarGradients.length];

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

        {/* Persona identity header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="mb-3 flex items-center gap-4"
        >
          <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${gradientClass} flex items-center justify-center shrink-0 shadow-lg`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
          <div className="min-w-0">
            <h2 className="text-lg sm:text-xl font-display font-bold text-foreground leading-tight">
              <span className="text-primary">{persona.name}</span>
              <span className="text-muted-foreground font-normal text-sm ml-2">{persona.role}</span>
            </h2>
            <p className="text-sm text-foreground/80 italic leading-snug mt-1">
              "{persona.painQuote}"
            </p>
          </div>
        </motion.div>

        {/* 2-column: stacked cards | dashboard */}
        <div className="flex-1 grid grid-cols-[260px_1fr] lg:grid-cols-[280px_1fr] gap-3 min-h-0">
          {/* LEFT — Stacked pain + benefit cards */}
          <div className="flex flex-col gap-2 min-h-0">
            {/* Without card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="rounded-xl border border-destructive/25 bg-destructive/5 p-3 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-destructive/50" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-destructive/60 mb-2 block pl-2">
                Without
              </span>
              <div className="space-y-1.5 pl-2">
                {persona.painBullets.map((bullet, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className="flex items-start gap-1.5"
                  >
                    <AlertTriangle className="w-3 h-3 text-destructive/60 shrink-0 mt-0.5" />
                    <span className="text-[11px] text-destructive/80 leading-tight">{bullet}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Benefit quote divider */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-[10px] text-primary/70 italic text-center px-2 leading-snug"
            >
              "{persona.benefitQuote}"
            </motion.p>

            {/* With card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="rounded-xl border border-primary/25 bg-primary/5 p-3 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary/50" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-primary/60 mb-2 block pl-2">
                With Connected Intelligence
              </span>
              <div className="space-y-1.5 pl-2">
                {persona.metrics.map((metric, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 + i * 0.08 }}
                    className="flex items-start gap-1.5"
                  >
                    <CheckCircle2 className="w-3 h-3 text-primary/70 shrink-0 mt-0.5" />
                    <span className="text-[11px] text-foreground leading-tight">
                      <span className="font-bold text-primary">{metric.value}</span>{" "}
                      <span className="text-muted-foreground">{metric.label}</span>
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="rounded-xl border border-border bg-card p-3 relative overflow-hidden flex flex-col min-h-0"
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
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
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
