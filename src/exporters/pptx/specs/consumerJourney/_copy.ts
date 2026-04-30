/**
 * Single source of truth for editable-PPTX copy on the Consumer Journey deck.
 * These constants mirror the strings used by the on-screen React components.
 * Update both sides together if copy changes.
 */

export const TITLE_SLIDE = {
  badge: "FOR CMOS, CSOS & CATEGORY LEADERS",
  headlineTop: "Connected Intelligence",
  headlineBottom: "for Consumer Brands",
  sub: "What you're about to see isn't just better data. It's a completely new way of working.",
  stats: [
    { value: "8 of 10", label: "Top FMCG companies trust us" },
    { value: "95%", label: "Global GDP coverage" },
    { value: "40+", label: "Years of market intelligence" },
  ],
  quote: "\u201CThe brands that win don't have more data. They have connected intelligence.\u201D",
  eyebrowFooter: "A NEW WAY OF WORKING",
} as const;

export const PRESSURE_SLIDE = {
  eyebrow: "The Pressure",
  titleA: "You're Under More Pressure",
  titleB: "Than Ever.",
  sub: "Your consumers are changing faster than you can track them. And every missed signal is a missed opportunity.",
  cards: [
    { glyph: "↑", title: "Consumer Expectations", desc: "Changing faster than your planning cycles", accent: "primary" as const },
    { glyph: "⚡", title: "Market Velocity", desc: "Competitors move in weeks, you move in quarters", accent: "accent" as const },
    { glyph: "≣", title: "Fragmented View", desc: "Your data lives in 7 different places", accent: "warning" as const },
    { glyph: "◎", title: "First-Mover Risk", desc: "Every missed signal is a missed category", accent: "danger" as const },
  ],
  bridge: "Sound familiar? Picture your typical Monday.",
};

export const MONDAY_SLIDE = {
  eyebrow: "Monday Morning",
  title: "Your Monday Morning",
  sub: "One opportunity. Seven opinions. Zero alignment.",
  emails: [
    { sender: "CEO", subject: "The board wants our plant-based protein position by Friday", time: "9:02 AM" },
    { sender: "Head of Strategy", subject: "Our trend provider says plant-based is peaking — but social data says it's accelerating", time: "9:08 AM" },
    { sender: "Finance / Market Intel", subject: "Finance needs a TAM number. Ours says $1.4B. The consultant says $2.1B", time: "9:14 AM" },
    { sender: "Competitive Intel", subject: "A rival just filed four patents in plant-based protein. Where did that come from?", time: "9:21 AM" },
    { sender: "Innovation Lead", subject: "We have five concepts in the pipeline — which ones should we kill?", time: "9:27 AM" },
    { sender: "Commercial / Sales", subject: "The buyer at our biggest retailer wants a plant-based range proposal by next month", time: "9:33 AM" },
    { sender: "Procurement", subject: "We're paying six vendors for overlapping data. Renewal season is in three weeks", time: "9:41 AM" },
  ],
  footer: "One opportunity. Seven teams. Seven answers. Which one do you trust?",
};

export const SEVEN_SOURCES_SLIDE = {
  eyebrow: "Seven Sources, Seven Signals",
  title: "Same Opportunity. Seven Conflicting Signals.",
  sub: "Every source is telling you something different about plant-based protein.",
  vendors: [
    { name: "Mintel", role: "Trends", signal: "\u201CPlant-based is peaking\u201D" },
    { name: "Euromonitor", role: "Market Sizing", signal: "\u201C$1.4B TAM (or $2.1B?)\u201D" },
    { name: "Innova", role: "Competitive Intel", signal: "\u201CNo significant moves\u201D" },
    { name: "IDEO", role: "External Agency", signal: "\u201CConsumer fatigue detected\u201D" },
    { name: "NielsenIQ", role: "Retail Data", signal: "\u201CRetailer X is demanding it\u201D" },
    { name: "Kantar", role: "Consumer Panel", signal: "\u201CTrial is up, repeat is flat\u201D" },
    { name: "Circana", role: "Internal POS", signal: "\u201COur test market grew 22%\u201D" },
  ],
  stats: [
    { value: "60%", label: "of time reconciling" },
    { value: "10%", label: "on strategy" },
    { value: "12 wks", label: "to decide" },
  ],
  caption: "By the time you reconcile, someone else has launched.",
};

export const COST_SLIDE = {
  eyebrow: "What It's Already Cost You",
  title: "The business cost. The personal cost.",
  sub: "In your category. This year. Personally.",
  business: [
    { glyph: "▼", stat: "£40M Line — Lost", detail: "A competitor saw the same plant-based signals six months ago. They launched. They claimed the shelf. You're still reconciling.", accent: "danger" as const },
    { glyph: "⏱", stat: "12 Weeks to Align", detail: "Strategy, innovation, and commercial each had a different view. By the time they agreed, the buyer had moved on.", accent: "warning" as const },
    { glyph: "⚠", stat: "The Launch That Flopped", detail: "Launched without competitive context. A rival had already saturated the space. You found out from trade press.", accent: "warning" as const },
  ],
  personal: [
    { glyph: "◆", stat: "Your Board Questioned the Numbers — Again", detail: "Three different data sources. Three different stories. Your credibility took the hit.", accent: "primary" as const },
    { glyph: "⏱", stat: "3 Days Building a Deck, Not Strategy", detail: "You spent 60% of your week reconciling spreadsheets instead of shaping the category.", accent: "accent" as const },
    { glyph: "?", stat: "The Call You Didn't Make", detail: "You had the right instinct but no evidence to back it. So you waited. Someone else didn't.", accent: "success" as const },
  ],
  accumulator: {
    revenue: "£63M",
    revenueLabel: "Revenue at risk",
    time: "60% of your week",
    timeLabel: "Time lost",
    caption: "And next quarter, it happens again — unless something changes.",
  },
};

export const ONE_LENS_SLIDE = {
  eyebrow: "Now Imagine One Lens",
  title: "One lens. Six solutions. One AI layer.",
  sub: "Six people. Six solutions. One AI layer. One connected lens — wrapped around the consumer.",
  hubLabel: "THE CONSUMER",
  hubSub: "One Lens · One Truth",
  avaLabel: "AVA — AI INTELLIGENCE LAYER",
  spokes: [
    { name: "Sarah", role: "Head of Strategy", solution: "Strategic Intelligence", subline: "Disruption · Themes · Foresight", glyph: "S" },
    { name: "James", role: "Market Intelligence Lead", solution: "Market Intelligence", subline: "110 countries · 1,000+ segments", glyph: "M" },
    { name: "Priya", role: "CI Analyst", solution: "Competitive Intelligence", subline: "25,000 companies tracked", glyph: "C" },
    { name: "Marcus", role: "Innovation Director", solution: "Innovation Intelligence", subline: "8-week validated sprints", glyph: "I" },
    { name: "Elena", role: "National Account Mgr", solution: "Sales Intelligence", subline: "Evidence-backed listings", glyph: "$" },
    { name: "David", role: "Head of Procurement", solution: "One Vendor, Lower Cost", subline: "1 contract · 30% lower TCO", glyph: "D" },
  ],
  footer: "Meet the team who'll show you how it works.",
};

export const CONNECTED_DECISION_SLIDE = {
  eyebrow: "The Connected Decision",
  title: "One question. Five perspectives. One connected answer.",
  question: "\u201CShould we launch plant-based snacking in Southeast Asia?\u201D",
  personas: [
    { name: "Sarah", role: "Strategy", verdict: "3 converging signals — all accelerating in SEA", solution: "Strategic Intelligence", stat: "92", statLabel: "Convergence", glyph: "S" },
    { name: "James", role: "Market Sizing", verdict: "$2.1B TAM — SEA is the white-space opportunity", solution: "Market Intelligence", stat: "$2.1B", statLabel: "TAM", glyph: "M" },
    { name: "Priya", role: "Competitive Intel", verdict: "Rival accelerating — 4 patents, new hires, building capacity", solution: "Competitive Intelligence", stat: "High", statLabel: "Threat", glyph: "C" },
    { name: "Marcus", role: "Innovation", verdict: "3 of 5 concepts pass — aligned to converging trends", solution: "Innovation Intelligence", stat: "3/5", statLabel: "Pass", glyph: "I" },
    { name: "Elena", role: "Commercial", verdict: "2 of 3 retailers ready for first-mover pitch", solution: "Sales Intelligence", stat: "2/3", statLabel: "Ready", glyph: "$" },
  ],
  verdict: { label: "GO", caption: "Validated in one meeting — not 14 weeks." },
  without: "6 vendors · 14 weeks · 3 conflicting answers",
  withConnected: "1 platform · 1 meeting · 1 connected answer",
};

export const TEAMS_SLIDE = {
  eyebrow: "Your Teams, Transformed",
  title: "What changes when your best people stop being data janitors.",
  sub: "Strategy time goes from 10% \u2192 75%. Decision velocity from weeks \u2192 hours.",
  before: [
    { label: "Reconciling", pct: 60, accent: "danger" as const },
    { label: "Searching", pct: 20, accent: "warning" as const },
    { label: "Reporting", pct: 10, accent: "muted" as const },
    { label: "Strategy", pct: 10, accent: "primarySoft" as const },
  ],
  after: [
    { label: "Reconciling", pct: 5, accent: "muted" as const },
    { label: "Searching", pct: 5, accent: "muted" as const },
    { label: "Reporting", pct: 15, accent: "accent" as const },
    { label: "Strategy", pct: 75, accent: "primary" as const },
  ],
  velocityBefore: "6–8 weeks",
  velocityAfter: "Hours",
  cards: [
    { glyph: "⏱", metric: "7.5×", title: "Time Reclaimed", desc: "75% of time on strategy — not searching, reconciling, or reporting." },
    { glyph: "↑", metric: "Same-day", title: "Decisions Accelerated", desc: "From 6–8 week cycles to evidence-backed decisions in hours." },
    { glyph: "◎", metric: "2×", title: "Launch Success", desc: "Double your innovation hit rate. Kill bad ideas faster, back winners with evidence." },
  ],
};

export const MATURITY_SLIDE = {
  eyebrow: "Intelligence Maturity",
  title: "The Intelligence Maturity Journey",
  sub: "From fragmented data to predictive intelligence.",
  stages: [
    {
      label: "Fragmented",
      tagline: "Seven sources. Seven answers.",
      decisionSpeed: "6–8 weeks",
      reconciliation: 60, analysis: 30, strategy: 10,
      bullets: ["Teams reconcile conflicting data", "No shared taxonomy or language", "Decisions delayed by data debates"],
      accentKey: "stage1" as const,
      isGateway: false,
    },
    {
      label: "Connected",
      tagline: "The Gateway — one taxonomy unlocks everything.",
      decisionSpeed: "2–3 weeks",
      reconciliation: 20, analysis: 45, strategy: 35,
      bullets: ["One consumer taxonomy across all solutions", "Reconciliation drops from 60% to 20%", "Cross-solution intelligence flows begin"],
      accentKey: "primary" as const,
      isGateway: true,
    },
    {
      label: "Optimised",
      tagline: "AI-powered insights across every solution.",
      decisionSpeed: "3–5 days",
      reconciliation: 10, analysis: 35, strategy: 55,
      bullets: ["AI surfaces cross-solution patterns", "Automated alerts on market shifts", "Evidence-based concept scoring"],
      accentKey: "stage3" as const,
      isGateway: false,
    },
    {
      label: "Predictive",
      tagline: "AI anticipates — your team acts first.",
      decisionSpeed: "Hours",
      reconciliation: 5, analysis: 20, strategy: 75,
      bullets: ["Predictive market shift detection", "75% of team time on strategy", "First-mover advantage, every time"],
      accentKey: "stage5" as const,
      isGateway: false,
    },
  ],
};

export const PROOF_SLIDE = {
  eyebrow: "Trusted by the best",
  titleA: "8 of the top 10",
  titleB: "FMCG companies",
  sub: "have already transformed how they work.",
  pillars: [
    { metric: "70%", label: "reduction in time to insight", tagline: "Hours, not weeks", glyph: "⏱" },
    { metric: "3×", label: "faster decisions", tagline: "Evidence, not debate", glyph: "⚡" },
    { metric: "2×", label: "launch success rate", tagline: "Winners, not guesses", glyph: "◎" },
  ],
  logos: ["Ferrero", "Mondelez", "Danone", "Reckitt", "Colgate-Palmolive", "Henkel", "Church & Dwight", "Haleon"],
  quote: "\u201CWe went from seven disconnected data vendors to a single connected platform in 90 days. For the first time, our strategy, innovation, and commercial teams are working from the same intelligence.\u201D",
  attribution: "VP of Consumer Insights · Top 5 Global FMCG Company",
};

export const DIY_SLIDE = {
  eyebrow: "The #1 Objection",
  titleA: "\u201CCan't we just",
  titleAccent: "integrate",
  titleB: "what we have?\u201D",
  diy: [
    { glyph: "⏱", label: "18+ months integration", detail: "Custom APIs, data mapping, ongoing maintenance" },
    { glyph: "$", label: "14 separate contracts", detail: "Overlapping coverage, no volume leverage" },
    { glyph: "≣", label: "No shared taxonomy", detail: "Every tool uses different categories and definitions" },
    { glyph: "⚭", label: "No cross-pollination", detail: "Insights stay siloed in the tool that created them" },
  ],
  connected: [
    { glyph: "⏱", label: "90-day deployment", detail: "Pre-built on 40+ years of analyst-validated intelligence" },
    { glyph: "$", label: "1 platform, 1 contract", detail: "40% TCO reduction through consolidation" },
    { glyph: "≣", label: "One consumer taxonomy", detail: "Unified across 50+ markets · 95% global GDP coverage" },
    { glyph: "⚭", label: "Intelligence flows", detail: "Agentic AI + domain experts accelerate every layer" },
  ],
  callout: "Built on 40+ years of market intelligence · 95% global GDP coverage · Analyst-validated · Real-time",
  closing: "\u201CIntegration connects pipes. GlobalData connects meaning — with the world's deepest consumer intelligence infrastructure behind it.\u201D",
};

export const CTA_SLIDE = {
  eyebrow: "Next Steps",
  titleA: "Your competitors already see",
  titleAccent: "the full picture.",
  sub: "Let's make sure you do too.",
  badge: "8 of the top 10 FMCG companies already trust this platform.",
  options: [
    { glyph: "☎", title: "30-min Discovery Call", desc: "Understand how connected intelligence applies to your specific category challenges.", cta: "Book a call" },
    { glyph: "▤", title: "Intelligence Maturity Assessment", desc: "Score your current setup across all five intelligence layers. Identify the biggest gaps.", cta: "Get assessed" },
    { glyph: "▲", title: "90-Day Pilot", desc: "Deploy connected intelligence in one category. Measurable impact within a quarter.", cta: "Start a pilot" },
  ],
  reassurance: "No commitment. No procurement. Just clarity.",
};
