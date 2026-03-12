import { motion } from "framer-motion";
import { Compass, BarChart3, Radar, Lightbulb, ShoppingCart, Wallet, CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import CPSlideContainer from "@/components/consumer-pitch/CPSlideContainer";

interface CJSlideConnectedDecisionProps {
  isPlaying?: boolean;
  isLoading?: boolean;
  progress?: number;
  hasCompleted?: boolean;
  onPlay?: () => void;
  onPause?: () => void;
  onNextSlide?: () => void;
}

/* ── Mini Dashboard Thumbnails ── */
const MiniTrendLine = () => (
  <div className="w-full bg-muted/30 rounded border border-border/40 p-1.5 flex flex-col gap-1">
    <div className="flex justify-between items-center">
      <span className="text-[7px] text-muted-foreground font-medium">THEMES</span>
      <span className="text-[7px] text-primary font-bold">2 MACRO · 4 MICRO</span>
    </div>
    <svg viewBox="0 0 80 24" className="w-full h-[18px]">
      <polyline points="0,20 15,16 30,18 45,10 60,8 75,3" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" />
      <polyline points="0,22 15,20 30,19 45,17 60,16 75,14" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="0.8" strokeLinecap="round" strokeDasharray="2,2" />
    </svg>
    <div className="flex justify-between items-center">
      <span className="text-[6px] text-muted-foreground font-medium">CONVERGENCE</span>
      <span className="text-[7px] text-primary font-bold">92/100</span>
    </div>
    {/* Macro → Micro theme hierarchy */}
    <div className="space-y-[3px]">
      <div>
        <span className="text-[6px] text-foreground font-semibold">Health & Wellness</span>
        <div className="flex gap-0.5 flex-wrap ml-1 mt-[1px]">
          {["Plant Protein", "Clean Label", "Gut Health"].map(l => (
            <span key={l} className="text-[5px] bg-primary/15 text-primary rounded px-1 py-[1px] font-medium">{l}</span>
          ))}
        </div>
      </div>
      <div>
        <span className="text-[6px] text-foreground font-semibold">Sustainability</span>
        <div className="flex gap-0.5 flex-wrap ml-1 mt-[1px]">
          <span className="text-[5px] bg-primary/15 text-primary rounded px-1 py-[1px] font-medium">Ethical Sourcing</span>
        </div>
      </div>
    </div>
    <div className="flex items-center gap-1 mt-0.5">
      <div className="w-1 h-1 rounded-full bg-chart-4" />
      <span className="text-[6px] text-muted-foreground">3 brands entered in last 6 months</span>
    </div>
  </div>
);

const MiniBarChart = () => (
  <div className="w-full bg-muted/30 rounded border border-border/40 p-1.5 flex flex-col gap-1">
    <div className="flex justify-between items-center">
      <span className="text-[7px] text-muted-foreground font-medium">TAM</span>
      <span className="text-[7px] text-primary font-bold">$2.1B</span>
    </div>
    <div className="flex items-end gap-[3px] h-[18px]">
      {[40, 65, 85, 55, 30].map((h, i) => (
        <div key={i} className={`flex-1 rounded-t ${i === 2 ? "bg-primary" : "bg-primary/40"}`} style={{ height: `${h}%` }} />
      ))}
    </div>
    <div className="flex justify-between">
      {["NA", "EU", "SEA", "LA", "ME"].map((l, i) => (
        <span key={l} className={`text-[5px] ${i === 2 ? "text-primary font-bold" : "text-muted-foreground"}`}>{l}</span>
      ))}
    </div>
    <div className="bg-primary/10 rounded px-1 py-0.5">
      <span className="text-[6px] text-primary font-semibold">SEA $820M · CAGR 14.2%</span>
    </div>
    <div className="flex items-center gap-1">
      <div className="w-1 h-1 rounded-full bg-chart-4" />
      <span className="text-[6px] text-muted-foreground">42% of snacking occasions unaddressed</span>
    </div>
  </div>
);

const MiniCompetitorTimeline = () => (
  <div className="w-full bg-muted/30 rounded border border-border/40 p-1.5 flex flex-col gap-1">
    <div className="flex justify-between items-center">
      <span className="text-[7px] text-muted-foreground font-medium">ACTIVITY</span>
      <span className="text-[7px] text-destructive font-bold">High</span>
    </div>
    <div className="space-y-[3px]">
      {[
        { label: "Patent ×4", time: "2w", color: "bg-destructive" },
        { label: "SC Lead hire", time: "1mo", color: "bg-chart-4" },
        { label: "Supply chain", time: "3mo", color: "bg-primary" },
        { label: "SKU launch", time: "6mo", color: "bg-muted-foreground" },
      ].map(s => (
        <div key={s.label} className="flex items-center gap-1">
          <div className={`w-1.5 h-1.5 rounded-full ${s.color}/70 shrink-0`} />
          <span className="text-[6px] text-foreground flex-1 truncate">{s.label}</span>
          <span className="text-[5px] text-muted-foreground shrink-0">{s.time}</span>
        </div>
      ))}
    </div>
    <div className="bg-destructive/10 rounded px-1 py-0.5 text-center">
      <span className="text-[6px] text-destructive font-semibold">Threat: High — accelerating</span>
    </div>
  </div>
);

const MiniScorecard = () => (
  <div className="w-full bg-muted/30 rounded border border-border/40 p-1.5 flex flex-col gap-1">
    <div className="flex justify-between items-center">
      <span className="text-[7px] text-muted-foreground font-medium">CONCEPTS</span>
      <span className="text-[7px] text-chart-2 font-bold">3/5 ✓</span>
    </div>
    <div className="space-y-[2px]">
      {[
        { name: "Crispy Bites", score: 87, pass: true },
        { name: "Protein Bar", score: 72, pass: true },
        { name: "Gut Shot", score: 34, pass: false },
        { name: "Plant Jerky", score: 81, pass: true },
        { name: "Seaweed Crisp", score: 55, pass: false },
      ].map(c => (
        <div key={c.name} className="flex items-center gap-1">
          <span className="text-[6px] text-muted-foreground flex-1 truncate">{c.name}</span>
          <span className={`text-[7px] font-bold ${c.pass ? "text-chart-2" : "text-destructive"}`}>{c.score}</span>
          <span className="text-[6px]">{c.pass ? "✓" : "✗"}</span>
        </div>
      ))}
    </div>
    <div className="bg-chart-2/10 rounded px-1 py-0.5 flex items-center gap-1">
      <div className="flex gap-[2px] flex-1">
        {[1,2,3,4,5].map(i => (
          <div key={i} className={`h-1 flex-1 rounded-full ${i <= 3 ? "bg-chart-2" : "bg-muted-foreground/30"}`} />
        ))}
      </div>
      <span className="text-[6px] text-chart-2 font-semibold">3/5 above threshold</span>
    </div>
  </div>
);

const MiniRetailerList = () => (
  <div className="w-full bg-muted/30 rounded border border-border/40 p-1.5 flex flex-col gap-1">
    <div className="flex justify-between items-center">
      <span className="text-[7px] text-muted-foreground font-medium">BUYERS</span>
      <span className="text-[7px] text-primary font-bold">Ready</span>
    </div>
    <div className="space-y-[3px]">
      {[
        { name: "Tesco", gap: "12%", status: "Gap confirmed", sentiment: "positive" },
        { name: "Carrefour", gap: "8%", status: "Review Q3", sentiment: "neutral" },
        { name: "Walmart", gap: "15%", status: "Pending", sentiment: "positive" },
      ].map((r, i) => (
        <div key={r.name} className="flex items-center gap-1">
          <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${r.sentiment === "positive" ? "bg-chart-2" : "bg-chart-4"}`} />
          <span className="text-[6px] text-foreground font-medium">{r.name}</span>
          <span className="text-[5px] text-muted-foreground flex-1 truncate">{r.status}</span>
          <span className="text-[6px] text-primary font-semibold">{r.gap}</span>
        </div>
      ))}
    </div>
    <div className="bg-chart-2/10 rounded px-1 py-0.5 text-center">
      <span className="text-[6px] text-chart-2 font-semibold">Pitch readiness: 2 of 3 ready</span>
    </div>
  </div>
);

const dashboardMap: Record<string, React.FC> = {
  Strategy: MiniTrendLine,
  "Market Sizing": MiniBarChart,
  "Competitive Intel": MiniCompetitorTimeline,
  Innovation: MiniScorecard,
  Commercial: MiniRetailerList,
};

const personas = [
  {
    name: "Sarah",
    role: "Strategy",
    icon: Compass,
    verdict: "3 converging signals — all accelerating in SEA",
    solution: "Strategic Intelligence",
    color: "from-blue-500/20 to-blue-600/20",
    border: "border-blue-500/30",
    accent: "text-blue-400",
  },
  {
    name: "James",
    role: "Market Sizing",
    icon: BarChart3,
    verdict: "$2.1B TAM — SEA is the white-space opportunity",
    solution: "Market Intelligence",
    color: "from-emerald-500/20 to-emerald-600/20",
    border: "border-emerald-500/30",
    accent: "text-emerald-400",
  },
  {
    name: "Priya",
    role: "Competitive Intel",
    icon: Radar,
    verdict: "Rival accelerating — 4 patents, new hires, building capacity",
    solution: "Competitive Intelligence",
    color: "from-amber-500/20 to-amber-600/20",
    border: "border-amber-500/30",
    accent: "text-amber-400",
  },
  {
    name: "Marcus",
    role: "Innovation",
    icon: Lightbulb,
    verdict: "3 of 5 concepts pass — aligned to converging trends",
    solution: "Innovation Intelligence",
    color: "from-purple-500/20 to-purple-600/20",
    border: "border-purple-500/30",
    accent: "text-purple-400",
  },
  {
    name: "Elena",
    role: "Commercial",
    icon: ShoppingCart,
    verdict: "2 of 3 retailers ready for first-mover pitch",
    solution: "Sales Intelligence",
    color: "from-rose-500/20 to-rose-600/20",
    border: "border-rose-500/30",
    accent: "text-rose-400",
  },
];

const CJSlideConnectedDecision = ({
  isPlaying, isLoading, progress, hasCompleted, onPlay, onPause, onNextSlide,
}: CJSlideConnectedDecisionProps) => {
  return (
    <CPSlideContainer
      id="cj-slide-decision"
      title="The Connected Decision"
      subtitle="One question. Five perspectives. One connected answer."
      slideNumber={7}
      isPlaying={isPlaying}
      isLoading={isLoading}
      progress={progress}
      hasCompleted={hasCompleted}
      onPlay={onPlay}
      onPause={onPause}
      onNextSlide={onNextSlide}
    >
      <div className="h-full flex flex-col gap-2">
        {/* The Question */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary/10 border border-primary/30 rounded-lg px-4 py-2 text-center"
        >
          <p className="text-[10px] uppercase tracking-widest text-primary mb-0.5 font-semibold">The Question</p>
          <p className="text-sm sm:text-base font-bold text-foreground">
            "Should we launch plant-based snacking in Southeast Asia?"
          </p>
        </motion.div>

        {/* Persona verdict chain */}
        <div className="grid grid-cols-5 gap-2 flex-1 min-h-0">
          {personas.map((persona, i) => {
            const Icon = persona.icon;
            return (
              <motion.div
                key={persona.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-gradient-to-b ${persona.color} border ${persona.border} rounded-lg p-2 flex flex-col items-center text-center overflow-hidden`}
              >
                <div className={`w-6 h-6 rounded-full bg-card/50 flex items-center justify-center mb-1 ${persona.accent}`}>
                  <Icon className="w-3 h-3" />
                </div>
                <p className="text-xs font-bold text-foreground">{persona.name}</p>
                <p className={`text-[9px] ${persona.accent} font-medium mb-1`}>{persona.role}</p>
                {(() => {
                  const Dashboard = dashboardMap[persona.role];
                  return Dashboard ? <Dashboard /> : null;
                })()}
                <p className="text-[8px] text-muted-foreground leading-snug mt-1">"{persona.verdict}"</p>
                <p className={`text-[8px] mt-1 ${persona.accent} font-semibold uppercase tracking-wider`}>{persona.solution}</p>
                {i < personas.length - 1 && (
                  <div className="absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 hidden sm:block">
                    <ArrowRight className="w-3 h-3 text-muted-foreground" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Verdict bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="bg-emerald-500/15 border border-emerald-500/40 rounded-lg px-4 py-2 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <div>
              <p className="text-sm font-bold text-emerald-400">GO</p>
              <p className="text-[10px] text-muted-foreground">Validated in one meeting — not 14 weeks</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
            <Wallet className="w-3.5 h-3.5 text-primary" />
            <span className="font-medium text-foreground">David:</span>
            <span>"One platform. One contract. All of this."</span>
          </div>
        </motion.div>

        {/* Without vs With */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 gap-2"
        >
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg px-3 py-2 flex items-start gap-2">
            <XCircle className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] font-bold text-destructive mb-0.5">WITHOUT</p>
              <p className="text-[10px] text-muted-foreground">6 vendors · 14 weeks · 3 conflicting answers</p>
            </div>
          </div>
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-3 py-2 flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] font-bold text-emerald-400 mb-0.5">WITH</p>
              <p className="text-[10px] text-muted-foreground">1 platform · 1 meeting · 1 connected answer</p>
            </div>
          </div>
        </motion.div>
      </div>
    </CPSlideContainer>
  );
};

export default CJSlideConnectedDecision;
