import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, Unlock } from "lucide-react";
import CPSlideContainer from "@/components/consumer-pitch/CPSlideContainer";
import { SlideNarrationProps } from "@/types/slideProps";
import type { PersonaData } from "@/components/consumer-journey/PersonaSlide";

interface PersonaPanoramaProps extends SlideNarrationProps {
  personas: PersonaData[];
  slideNumber: number;
  groupLabel: string;
}

const avatarGradients = [
  "from-blue-500 to-cyan-400",
  "from-violet-500 to-purple-400",
  "from-amber-500 to-orange-400",
  "from-emerald-500 to-teal-400",
  "from-rose-500 to-pink-400",
  "from-indigo-500 to-blue-400",
];

const PersonaPanorama = ({ personas, slideNumber, groupLabel, ...narrationProps }: PersonaPanoramaProps) => {
  return (
    <CPSlideContainer
      id={`cj-slide-${slideNumber}`}
      title={groupLabel}
      showTitle={false}
      slideNumber={slideNumber}
      {...narrationProps}
    >
      <div className="h-full flex flex-col">
        {/* Group header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-3"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold mb-1">{groupLabel}</p>
          <h2 className="text-lg sm:text-xl font-display font-bold text-foreground">
            From pain to <span className="text-primary">performance</span>
          </h2>
        </motion.div>

        {/* 3 persona cards */}
        <div className="flex-1 grid grid-cols-3 gap-3 min-h-0">
          {personas.map((persona, i) => {
            const Icon = persona.icon;
            const gradient = avatarGradients[(persona.valueChainPosition - 1) % avatarGradients.length];

            return (
              <motion.div
                key={persona.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                className="rounded-xl border border-border bg-card/60 backdrop-blur-sm p-3 flex flex-col min-h-0 overflow-hidden"
              >
                {/* Identity */}
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center shrink-0 shadow-md`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-foreground leading-tight">{persona.name}</p>
                    <p className="text-[9px] text-muted-foreground leading-tight truncate">{persona.role.split("·")[0].trim()}</p>
                  </div>
                </div>

                {/* Pain quote */}
                <p className="text-[10px] text-foreground/70 italic leading-snug mb-2 line-clamp-2">
                  "{persona.painQuote.split('.')[0]}."
                </p>

                {/* Without bullets (compact) */}
                <div className="space-y-1 mb-2">
                  {persona.painBullets.slice(0, 2).map((bullet, j) => (
                    <div key={j} className="flex items-start gap-1">
                      <AlertTriangle className="w-2.5 h-2.5 text-destructive/60 shrink-0 mt-0.5" />
                      <span className="text-[9px] text-destructive/70 leading-tight">{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-border/50 mb-2" />

                {/* With metrics */}
                <div className="space-y-1 mb-2">
                  {persona.metrics.map((metric, j) => (
                    <div key={j} className="flex items-start gap-1">
                      <CheckCircle2 className="w-2.5 h-2.5 text-primary/70 shrink-0 mt-0.5" />
                      <span className="text-[9px] text-foreground leading-tight">
                        <span className="font-bold text-primary">{metric.value}</span>{" "}
                        <span className="text-muted-foreground">{metric.label}</span>
                      </span>
                    </div>
                  ))}
                </div>

                {/* Unlocked actions */}
                <div className="mt-auto pt-1.5 border-t border-border/30">
                  <div className="flex items-center gap-1 mb-1">
                    <Unlock className="w-2.5 h-2.5 text-primary" />
                    <span className="text-[8px] font-bold uppercase tracking-widest text-primary">Unlocked</span>
                  </div>
                  {persona.unlockedActions.slice(0, 1).map((action, j) => (
                    <div key={j} className="flex items-start gap-1">
                      <span className="text-[9px] text-foreground/80 leading-tight">{action.text}</span>
                      <span className="text-[8px] text-muted-foreground whitespace-nowrap shrink-0">via {action.enabledBy}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </CPSlideContainer>
  );
};

export default PersonaPanorama;
