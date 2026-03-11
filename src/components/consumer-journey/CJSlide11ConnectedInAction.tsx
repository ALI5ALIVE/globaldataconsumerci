import { motion } from "framer-motion";
import { Compass, BarChart3, Radar, Lightbulb, ShoppingCart, Wallet, Zap } from "lucide-react";
import { SlideNarrationProps } from "@/types/slideProps";
import SlidePlayButton from "@/components/SlidePlayButton";
import type { LucideIcon } from "lucide-react";

interface ChainPersona {
  name: string;
  icon: LucideIcon;
  output: string;
}

const chain: ChainPersona[] = [
  { name: "Sarah", icon: Compass, output: "Trend signals" },
  { name: "James", icon: BarChart3, output: "Sized opportunities" },
  { name: "Priya", icon: Radar, output: "Competitive context" },
  { name: "Marcus", icon: Lightbulb, output: "Validated concepts" },
  { name: "Elena", icon: ShoppingCart, output: "Full buyer story" },
];

const outcomes = [
  {
    title: "Trend-sized innovation pipeline",
    personas: "Sarah + James + Marcus",
    description: "Foresight feeds sizing feeds validation — concepts are market-ready before competitors even see the trend.",
  },
  {
    title: "Competitor-validated launches",
    personas: "Priya + Marcus",
    description: "Competitive signals sharpen innovation scoring — every launch accounts for what rivals are doing.",
  },
  {
    title: "Evidence-backed buyer stories",
    personas: "Sarah + James + Priya + Elena",
    description: "The full intelligence chain flows into one compelling narrative that wins the listing.",
  },
];

const avatarColors = [
  "from-blue-500 to-cyan-400",
  "from-emerald-500 to-teal-400",
  "from-violet-500 to-purple-400",
  "from-amber-500 to-yellow-400",
  "from-rose-500 to-pink-400",
];

const CJSlide11ConnectedInAction = (props: SlideNarrationProps) => {
  return (
    <section className="h-screen w-full snap-start snap-always flex-shrink-0 relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      <div className="h-full w-full flex flex-col items-center justify-center px-6 md:px-12 py-10 max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-2">Connected Intelligence</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            What happens when intelligence <span className="text-primary">connects</span>
          </h2>
        </motion.div>

        {/* Persona Chain */}
        <div className="relative w-full flex items-center justify-center gap-0 mb-6">
          {chain.map((persona, i) => (
            <div key={persona.name} className="flex items-center">
              {/* Avatar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.4 }}
                className="flex flex-col items-center"
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${avatarColors[i]} flex items-center justify-center shadow-lg relative`}>
                  <persona.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  {/* Pulse ring */}
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${avatarColors[i]} opacity-30`}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                  />
                </div>
                <span className="text-[10px] md:text-xs font-semibold text-foreground mt-1.5">{persona.name}</span>
                <span className="text-[9px] md:text-[10px] text-muted-foreground max-w-[80px] text-center leading-tight">{persona.output}</span>
              </motion.div>

              {/* Arrow connector */}
              {i < chain.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.1, duration: 0.3 }}
                  className="flex items-center mx-1 md:mx-3 origin-left"
                >
                  <div className="w-8 md:w-14 h-[2px] bg-gradient-to-r from-primary/60 to-primary relative">
                    {/* Animated pulse dot */}
                    <motion.div
                      className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]"
                      animate={{ left: ["-4px", "calc(100% + 4px)"] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
                    />
                  </div>
                  <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-primary" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Cross-pollination outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="w-full mb-5"
        >
          <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium text-center mb-3">
            Cross-pollination unlocks
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {outcomes.map((outcome, i) => (
              <motion.div
                key={outcome.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + i * 0.15, duration: 0.4 }}
                className="rounded-xl border border-primary/20 bg-primary/5 p-4 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <h3 className="text-sm font-bold text-foreground">{outcome.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-2">{outcome.description}</p>
                <p className="text-[10px] text-primary/70 font-medium">{outcome.personas}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* David consolidation bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="w-full rounded-xl border border-border bg-card/80 backdrop-blur-sm p-4 flex flex-col md:flex-row items-center justify-between gap-3"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-600 to-slate-400 flex items-center justify-center">
              <Wallet className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">David consolidates it all</p>
              <p className="text-xs text-muted-foreground">Head of Procurement · Global FMCG</p>
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <div className="text-center">
              <p className="text-lg font-bold text-primary">14→1</p>
              <p className="text-[10px] text-muted-foreground">suppliers</p>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <p className="text-lg font-bold text-primary">40%</p>
              <p className="text-[10px] text-muted-foreground">TCO reduction</p>
            </div>
          </div>
        </motion.div>

        {/* Killer line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.7, duration: 0.6 }}
          className="text-sm md:text-base font-semibold text-foreground/80 text-center mt-4 italic"
        >
          "No combination of point solutions can deliver this."
        </motion.p>
      </div>

      <SlidePlayButton
        isPlaying={props.isPlaying ?? false}
        isLoading={props.isLoading ?? false}
        progress={props.progress ?? 0}
        hasCompleted={props.hasCompleted}
        onPlay={props.onPlay ?? (() => {})}
        onPause={props.onPause ?? (() => {})}
        onNextSlide={props.onNextSlide}
      />
    </section>
  );
};

export default CJSlide11ConnectedInAction;
