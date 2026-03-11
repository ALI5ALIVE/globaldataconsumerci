import { motion } from "framer-motion";

export type DashboardType = "trend-radar" | "market-sizing" | "competitive-tracker" | "innovation-scorecard" | "commercial-dashboard" | "procurement-dashboard";

interface PersonaDashboardProps {
  type: DashboardType;
}

const PersonaDashboard = ({ type }: PersonaDashboardProps) => {
  switch (type) {
    case "trend-radar":
      return <TrendRadar />;
    case "market-sizing":
      return <MarketSizing />;
    case "competitive-tracker":
      return <CompetitiveTracker />;
    case "innovation-scorecard":
      return <InnovationScorecard />;
    case "commercial-dashboard":
      return <CommercialDashboard />;
    case "procurement-dashboard":
      return <ProcurementDashboard />;
  }
};

/* ── Sarah: Trend Radar ── */
const TrendRadar = () => {
  const trends = [
    { label: "Plant-Based", strength: 85, rising: true },
    { label: "Clean Label", strength: 72, rising: true },
    { label: "Gut Health", strength: 68, rising: true },
    { label: "Keto", strength: 45, rising: false },
    { label: "Low Sugar", strength: 78, rising: true },
  ];
  return (
    <div className="h-full flex flex-col gap-2">
      <div className="grid grid-cols-3 gap-1.5">
        {[
          { label: "Emerging", count: 12, color: "bg-primary/20 text-primary" },
          { label: "Growing", count: 8, color: "bg-chart-2/20 text-chart-2" },
          { label: "Peaking", count: 3, color: "bg-chart-4/20 text-chart-4" },
        ].map((kpi) => (
          <div key={kpi.label} className={`rounded-lg p-2 text-center ${kpi.color}`}>
            <div className="text-lg font-bold">{kpi.count}</div>
            <div className="text-[9px] uppercase tracking-wide opacity-80">{kpi.label}</div>
          </div>
        ))}
      </div>
      <div className="flex-1 space-y-1.5">
        {trends.map((t, i) => (
          <motion.div
            key={t.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.08 }}
            className="flex items-center gap-2"
          >
            <span className="text-[10px] text-muted-foreground w-16 truncate">{t.label}</span>
            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${t.strength}%` }}
                transition={{ delay: 1 + i * 0.1, duration: 0.6 }}
                className="h-full bg-primary/60 rounded-full"
              />
            </div>
            <span className={`text-[10px] font-bold ${t.rising ? "text-chart-2" : "text-destructive"}`}>
              {t.rising ? "↑" : "↓"}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/* ── James: Market Sizing ── */
const MarketSizing = () => {
  const markets = [
    { label: "NA", value: "$4.2B", pct: 90 },
    { label: "EU", value: "$3.8B", pct: 82 },
    { label: "APAC", value: "$2.9B", pct: 63 },
    { label: "LATAM", value: "$1.1B", pct: 24 },
    { label: "MEA", value: "$0.6B", pct: 13 },
  ];
  return (
    <div className="h-full flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-1.5">
        <div className="rounded-lg bg-primary/10 p-2 text-center">
          <div className="text-lg font-bold text-primary">$12.6B</div>
          <div className="text-[9px] uppercase tracking-wide text-muted-foreground">Global TAM</div>
        </div>
        <div className="rounded-lg bg-chart-2/10 p-2 text-center">
          <div className="text-lg font-bold text-chart-2">+8.3%</div>
          <div className="text-[9px] uppercase tracking-wide text-muted-foreground">CAGR</div>
        </div>
      </div>
      <div className="flex-1 space-y-1.5">
        {markets.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 + i * 0.1 }}
            className="flex items-center gap-2"
          >
            <span className="text-[10px] font-bold text-muted-foreground w-10">{m.label}</span>
            <div className="flex-1 h-3 bg-muted rounded overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${m.pct}%` }}
                transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                className="h-full bg-primary/50 rounded"
              />
            </div>
            <span className="text-[10px] font-semibold text-foreground w-10 text-right">{m.value}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/* ── Priya: Competitive Tracker ── */
const CompetitiveTracker = () => {
  const signals = [
    { company: "Competitor A", signal: "Patent Filed", type: "patent", time: "2h ago" },
    { company: "Competitor B", signal: "Key Hire", type: "hiring", time: "5h ago" },
    { company: "Competitor C", signal: "Supply Chain Shift", type: "supply", time: "1d ago" },
    { company: "Competitor A", signal: "New SKU Detected", type: "product", time: "2d ago" },
  ];
  const signalColors: Record<string, string> = {
    patent: "bg-chart-4/20 text-chart-4",
    hiring: "bg-chart-2/20 text-chart-2",
    supply: "bg-primary/20 text-primary",
    product: "bg-destructive/20 text-destructive",
  };
  return (
    <div className="h-full flex flex-col gap-2">
      <div className="grid grid-cols-3 gap-1.5">
        {[
          { label: "Tracked", value: "25K", color: "text-primary" },
          { label: "Signals", value: "6", color: "text-chart-2" },
          { label: "Alerts", value: "14", color: "text-chart-4" },
        ].map((kpi) => (
          <div key={kpi.label} className="rounded-lg bg-muted/50 p-2 text-center">
            <div className={`text-lg font-bold ${kpi.color}`}>{kpi.value}</div>
            <div className="text-[9px] uppercase tracking-wide text-muted-foreground">{kpi.label}</div>
          </div>
        ))}
      </div>
      <div className="flex-1 space-y-1">
        {signals.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.12 }}
            className="flex items-center gap-2 rounded-lg bg-muted/30 p-1.5"
          >
            <div className={`w-1.5 h-1.5 rounded-full ${signalColors[s.type]?.split(" ")[0] || "bg-primary"}`} />
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-semibold text-foreground truncate">{s.company}</div>
              <div className="text-[9px] text-muted-foreground truncate">{s.signal}</div>
            </div>
            <span className="text-[9px] text-muted-foreground/60 shrink-0">{s.time}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/* ── Marcus: Innovation Scorecard ── */
const InnovationScorecard = () => {
  const concepts = [
    { name: "Probiotic Snack Bar", score: 87, status: "pass" },
    { name: "Protein Water+", score: 72, status: "pass" },
    { name: "CBD Gummies", score: 34, status: "fail" },
    { name: "Gut Health Cereal", score: 81, status: "pass" },
  ];
  return (
    <div className="h-full flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-1.5">
        <div className="rounded-lg bg-chart-2/10 p-2 text-center">
          <div className="text-lg font-bold text-chart-2">2×</div>
          <div className="text-[9px] uppercase tracking-wide text-muted-foreground">Launch Success</div>
        </div>
        <div className="rounded-lg bg-primary/10 p-2 text-center">
          <div className="text-lg font-bold text-primary">8wk</div>
          <div className="text-[9px] uppercase tracking-wide text-muted-foreground">Cycle Time</div>
        </div>
      </div>
      <div className="flex-1 space-y-1.5">
        {concepts.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.1 }}
            className="flex items-center gap-2 rounded-lg bg-muted/30 p-1.5"
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
              c.status === "pass" ? "bg-chart-2/15 text-chart-2" : "bg-destructive/15 text-destructive"
            }`}>
              {c.score}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-semibold text-foreground truncate">{c.name}</div>
              <div className="w-full h-1 bg-muted rounded-full mt-1 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${c.score}%` }}
                  transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                  className={`h-full rounded-full ${c.status === "pass" ? "bg-chart-2/60" : "bg-destructive/60"}`}
                />
              </div>
            </div>
            <span className={`text-[10px] font-bold ${c.status === "pass" ? "text-chart-2" : "text-destructive"}`}>
              {c.status === "pass" ? "✓" : "✗"}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/* ── Elena: Commercial Dashboard ── */
const CommercialDashboard = () => {
  const layers = [
    { label: "Trend Data", icon: "📊", ready: true },
    { label: "Market Sizing", icon: "🌍", ready: true },
    { label: "Competitive Context", icon: "🎯", ready: true },
    { label: "Innovation Proof", icon: "💡", ready: true },
  ];
  return (
    <div className="h-full flex flex-col gap-2">
      <div className="rounded-lg bg-primary/10 p-2 text-center">
        <div className="text-[9px] uppercase tracking-wide text-muted-foreground mb-1">Buyer Meeting Ready</div>
        <div className="text-lg font-bold text-primary">Full Story</div>
      </div>
      <div className="flex-1 space-y-1.5">
        {layers.map((l, i) => (
          <motion.div
            key={l.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + i * 0.15 }}
            className="flex items-center gap-2 rounded-lg bg-muted/30 p-2"
          >
            <span className="text-sm">{l.icon}</span>
            <span className="text-[11px] font-medium text-foreground flex-1">{l.label}</span>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2 + i * 0.15, type: "spring" }}
            >
              <div className="w-4 h-4 rounded-full bg-chart-2/20 flex items-center justify-center">
                <span className="text-[9px] text-chart-2 font-bold">✓</span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        <div className="rounded-lg bg-chart-2/10 p-1.5 text-center">
          <div className="text-xs font-bold text-chart-2">4 layers</div>
          <div className="text-[8px] text-muted-foreground">Intelligence</div>
        </div>
        <div className="rounded-lg bg-primary/10 p-1.5 text-center">
          <div className="text-xs font-bold text-primary">1 story</div>
          <div className="text-[8px] text-muted-foreground">Unified</div>
        </div>
      </div>
    </div>
  );
};

/* ── David: Procurement Dashboard ── */
const ProcurementDashboard = () => {
  const suppliers = [
    { label: "Before", count: 14, pct: 100 },
    { label: "Overlap removed", count: 8, pct: 57 },
    { label: "Consolidated", count: 3, pct: 21 },
    { label: "After", count: 1, pct: 7 },
  ];
  const tcoItems = [
    { label: "Before", value: "£2.4M", pct: 100, color: "bg-destructive/50" },
    { label: "After", value: "£1.4M", pct: 58, color: "bg-chart-2/60" },
  ];
  return (
    <div className="h-full flex flex-col gap-2">
      <div className="grid grid-cols-3 gap-1.5">
        {[
          { label: "TCO Saving", value: "40%", color: "text-chart-2" },
          { label: "Suppliers", value: "14→1", color: "text-primary" },
          { label: "ROI Visible", value: "100%", color: "text-chart-4" },
        ].map((kpi) => (
          <div key={kpi.label} className="rounded-lg bg-muted/50 p-2 text-center">
            <div className={`text-lg font-bold ${kpi.color}`}>{kpi.value}</div>
            <div className="text-[9px] uppercase tracking-wide text-muted-foreground">{kpi.label}</div>
          </div>
        ))}
      </div>
      {/* Supplier waterfall */}
      <div className="flex-1 space-y-1">
        <div className="text-[9px] font-bold uppercase tracking-wide text-muted-foreground mb-1">Supplier Consolidation</div>
        {suppliers.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.12 }}
            className="flex items-center gap-2"
          >
            <span className="text-[10px] text-muted-foreground w-20 truncate">{s.label}</span>
            <div className="flex-1 h-3 bg-muted rounded overflow-hidden">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: `${s.pct}%` }}
                transition={{ delay: 1 + i * 0.15, duration: 0.6 }}
                className={`h-full rounded ${i === suppliers.length - 1 ? "bg-chart-2/60" : "bg-primary/40"}`}
              />
            </div>
            <span className="text-[10px] font-bold text-foreground w-4 text-right">{s.count}</span>
          </motion.div>
        ))}
      </div>
      {/* TCO comparison */}
      <div className="space-y-1">
        <div className="text-[9px] font-bold uppercase tracking-wide text-muted-foreground">Total Cost of Ownership</div>
        {tcoItems.map((t, i) => (
          <motion.div
            key={t.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 + i * 0.15 }}
            className="flex items-center gap-2"
          >
            <span className="text-[10px] text-muted-foreground w-10">{t.label}</span>
            <div className="flex-1 h-3 bg-muted rounded overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${t.pct}%` }}
                transition={{ delay: 1.6 + i * 0.15, duration: 0.5 }}
                className={`h-full rounded ${t.color}`}
              />
            </div>
            <span className="text-[10px] font-semibold text-foreground w-10 text-right">{t.value}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PersonaDashboard;
