import { motion } from "framer-motion";
import { Brain, Compass, BarChart3, Radar, Lightbulb, ShoppingCart } from "lucide-react";
import CPSlideContainer from "./CPSlideContainer";
import { SlideNarrationProps } from "@/types/slideProps";

const solutions = [
  {
    icon: Compass,
    title: "Strategic Foresight",
    desc: "Flagged plant-based as an accelerating macro theme — 18 months ahead of your trend report",
    angle: -90,
    color: "border-sky-500/40 bg-sky-500/10",
    iconColor: "text-sky-400",
    lineColor: "from-sky-500/60",
  },
  {
    icon: BarChart3,
    title: "Market Sizing",
    desc: "One click: $2.1B TAM across 110 countries — no more conflicting numbers",
    angle: -18,
    color: "border-emerald-500/40 bg-emerald-500/10",
    iconColor: "text-emerald-400",
    lineColor: "from-emerald-500/60",
  },
  {
    icon: Radar,
    title: "Competitive Intelligence",
    desc: "Spotted four rival patents in plant-based protein before they were announced",
    angle: 54,
    color: "border-amber-500/40 bg-amber-500/10",
    iconColor: "text-amber-400",
    lineColor: "from-amber-500/60",
  },
  {
    icon: Lightbulb,
    title: "Innovation Validation",
    desc: "Scored your five concepts against real consumer signals — three passed, two killed early",
    angle: 126,
    color: "border-violet-500/40 bg-violet-500/10",
    iconColor: "text-violet-400",
    lineColor: "from-violet-500/60",
  },
  {
    icon: ShoppingCart,
    title: "Commercial Intelligence",
    desc: "Built the buyer story with trend, sizing, and competitive proof — in one click",
    angle: 198,
    color: "border-pink-500/40 bg-pink-500/10",
    iconColor: "text-pink-400",
    lineColor: "from-pink-500/60",
  },
];

// Positions for the 5 cards in a radial layout (responsive)
const cardPositions = [
  { top: "2%", left: "50%", translate: "-50%, 0" },       // Strategic — top centre
  { top: "28%", right: "2%", translate: "0, 0" },          // Market — right
  { bottom: "8%", right: "10%", translate: "0, 0" },       // Competitive — bottom-right
  { bottom: "8%", left: "10%", translate: "0, 0" },        // Innovation — bottom-left
  { top: "28%", left: "2%", translate: "0, 0" },           // Sales — left
];

const CPSlide5Platform = (props: SlideNarrationProps) => {
  return (
    <CPSlideContainer
      id="cj-slide-5"
      title="The Platform"
      subtitle="Five solutions. One AI agent. One taxonomy. Here's how they work together on your plant-based opportunity."
      slideNumber={5}
      {...props}
    >
      <div className="h-full flex flex-col items-center justify-center relative">
        {/* Mobile: stacked layout */}
        <div className="flex flex-col gap-3 w-full max-w-md sm:hidden">
          {/* Ava centre - mobile */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 p-4 rounded-xl border border-primary/40 bg-primary/10"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">Ava</p>
              <p className="text-xs text-muted-foreground">Your AI Intelligence Partner</p>
            </div>
          </motion.div>

          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
              className={`p-3 rounded-xl border ${sol.color}`}
            >
              <div className="flex items-center gap-2 mb-1">
                <sol.icon className={`w-5 h-5 ${sol.iconColor}`} />
                <p className="text-sm font-semibold text-foreground">{sol.title}</p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{sol.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Desktop: radial layout */}
        <div className="hidden sm:block relative w-full max-w-4xl aspect-square max-h-[min(70vh,600px)]">
          {/* Ava centre hub */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <div className="relative flex flex-col items-center">
              {/* Outer glow ring */}
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-28 h-28 rounded-full bg-primary/20 -top-4 left-1/2 -translate-x-1/2"
              />
              {/* Inner ring */}
              <div className="w-20 h-20 rounded-full bg-card border-2 border-primary/60 flex items-center justify-center relative">
                <Brain className="w-9 h-9 text-primary" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-primary/30"
                />
              </div>
              <p className="mt-2 text-sm font-bold text-foreground whitespace-nowrap">Ava</p>
              <p className="text-[10px] text-muted-foreground whitespace-nowrap">Your AI Intelligence Partner</p>
            </div>
          </motion.div>

          {/* Connection lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 600 600">
            {[
              { x: 300, y: 60 },   // Strategic top
              { x: 540, y: 210 },  // Market right
              { x: 470, y: 480 },  // Competitive bottom-right
              { x: 130, y: 480 },  // Innovation bottom-left
              { x: 60, y: 210 },   // Sales left
            ].map((pos, i) => (
              <motion.line
                key={i}
                x1={300}
                y1={300}
                x2={pos.x}
                y2={pos.y}
                stroke="hsl(var(--primary))"
                strokeOpacity={0.25}
                strokeWidth={1.5}
                strokeDasharray="6 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.6 }}
              />
            ))}
          </svg>

          {/* Solution cards */}
          {solutions.map((sol, i) => {
            const pos = cardPositions[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                className={`absolute z-20 w-48 p-4 rounded-xl border ${sol.color}`}
                style={{
                  top: pos.top,
                  bottom: (pos as any).bottom,
                  left: pos.left,
                  right: (pos as any).right,
                  transform: `translate(${pos.translate})`,
                }}
              >
                <sol.icon className={`w-6 h-6 ${sol.iconColor} mb-2`} />
                <p className="text-xs font-semibold text-foreground mb-1">{sol.title}</p>
                <p className="text-[10px] text-muted-foreground leading-relaxed">{sol.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Taxonomy bar */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-4 w-full max-w-4xl h-1.5 rounded-full bg-gradient-to-r from-sky-500 via-primary to-pink-500 origin-left"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="text-center text-xs text-muted-foreground mt-2"
        >
          One Consumer-Connected Taxonomy
        </motion.p>
      </div>
    </CPSlideContainer>
  );
};

export default CPSlide5Platform;
