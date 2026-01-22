export interface SlideNarration {
  slideId: number;
  title: string;
  script: string;
  voiceId: string;
}

const DEFAULT_VOICE_ID = "JBFqnCBsd6RMkjVDRZzb"; // George - professional British male

export const globalDataNarrations: SlideNarration[] = [
  {
    slideId: 0,
    title: "The Intelligence Gap",
    script: "Welcome. The Intelligence Gap is costing you category performance — and how the world's best consumer brands are closing it. Here's the core insight: category performers don't have better data. They have connected intelligence — and it changes everything. Over the next ten slides, we'll explore the market reality, the intelligence gap, the transformation, and the measurable returns it delivers.",
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 1,
    title: "Market Reality",
    script: "The market has changed. Has your intelligence? Speed and conviction win. Most organisations have neither. Can you see it coming? Consumer trends evolve faster than insight cycles. Can you move fast enough? Innovation windows are shorter and less forgiving. Can you compete lean? Competitive moves now scale with fewer assets. Here's the paradox: organizations have more insight than ever, yet less confidence. Category performers don't just have better data — they have connected intelligence that enables faster, unified action.",
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 2,
    title: "The Intelligence Gap",
    script: "The Intelligence Gap: where performance falls behind. This is the silent tax on every decision you make. First, signals fragment across tools, teams, and vendors. Then, leaders debate data instead of committing to direction. Finally, decisions arrive too late to matter. The average decision latency is twelve weeks or more. Organizations consult three to five conflicting data sources per decision. And forty percent of launches miss optimal windows. This gap is where growth stalls, relevance erodes, and performance is lost.",
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 3,
    title: "The Transformation",
    script: "The Transformation: One Platform, One Truth. What changes when intelligence works together? Before Connected Intelligence: siloed insights, different taxonomies, manual reconciliation, and slow, debated decisions. After Connected Intelligence: a unified system with shared truth, embedded workflows, and confident, fast action. The change is measurable. Decision cycles move from weeks to days — seventy percent faster. Launch success doubles. And total cost of intelligence drops by thirty percent.",
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 4,
    title: "Introducing Connected Intelligence",
    script: "Introducing Connected Intelligence — the operating system for category performance. Five intelligence domains. One governing taxonomy. Decisions that compound — not conflict. This replaces tool sprawl, manual reconciliation, and conflicting answers. This is not another dataset or dashboard. This is intelligence designed to drive decisions end-to-end.",
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 5,
    title: "Intelligence in the Workflow",
    script: "Intelligence in the Workflow, Not the Inbox. Every function. Every decision. One truth. In Strategy and Portfolio: where to play, category prioritization, investment focus. In Innovation and Product: trend discovery, whitespace identification, concept screening. In Brand, Pricing, and Claims: positioning, pricing strategy, claims validation. In Go-to-Market and Sales: channel strategy, launch planning, enablement. And in In-Market Performance: post-launch monitoring, competitive response, portfolio optimization. Every function operates from the same shared truth, so decisions reinforce each other.",
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 6,
    title: "The Intelligence Capability Stack",
    script: "The Intelligence Capability Stack. A framework for assessing where you are today. The journey progresses through five stages. Stage one is Firefighting — insight exists, but trust doesn't. Stage two is Structured Silos — better data, same debates. Stage three is Connected — one truth emerges across domains. Stage four is Embedded — intelligence operates in the workflow. Stage five is Predictive — category performance unlocked through foresight. The value logic is simple: alignment enables speed. Speed enables outcomes. Outcomes enable impact. Most organizations sit at stage one or two. Our role is to accelerate them to stage four and five.",
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 7,
    title: "Your Roadmap to Category Performance",
    script: "Your Roadmap to Category Performance. How value accelerates as you climb. Stage one is Firefighting — disconnected tools, no shared taxonomy, slow decisions. Stage two is Structured Silos — better processes but still manual handoffs. Stage three is Connected — unified truth emerges. Reconciliation time drops sixty percent. Stage four is Embedded — intelligence in the workflow. Decisions happen in days, not weeks. Stage five is Predictive — AI-led orchestration. You see disruption before it hits. Most organizations don't need more data. They need a clear, credible path forward. This is that path.",
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 8,
    title: "The Returns Start Immediately",
    script: "The returns start immediately. Speed. Outcomes. Cost. All measurable within six months. First, speed to decision: decision cycles shrink from weeks to days — seventy percent faster. Second, better growth outcomes: higher-quality bets, fewer failed launches, and reduced misallocations — two times higher launch success rates. Third, lower cost of intelligence: less duplication, fewer tools, and less manual reconciliation — thirty percent reduction in total cost of ownership. ROI compounds as organizations move up the maturity curve. The sooner you start, the faster value accumulates.",
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 9,
    title: "Only GlobalData Can Deliver This",
    script: "Only GlobalData can deliver this. Proprietary data. Unified taxonomy. AI that amplifies expertise. Three defensible differentiators. First: a unified taxonomy across all intelligence domains — this is the unlock that enables true connection. Second: unmatched proprietary market and consumer data that no competitor can replicate — this is the fuel. Third: human analyst expertise at scale, amplified by Ava, our enterprise-grade AI research analyst — this is the engine. Here's the imperative: organizations that close the Intelligence Gap and operate intelligence as a connected system will define the next generation of category performers. The future belongs to organizations that turn change into decisions — earlier, together, and with conviction.",
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 10,
    title: "One Platform. Five Solutions. Compounding Returns.",
    script: "One Platform. Five Solutions. Compounding Returns. See how it works for a global FMCG brand. They wanted to win growth in the high-protein on-the-go segment without another failed launch. Strategic Intelligence defined the question: Where can we launch with confidence in the next twelve months? Market Intelligence identified a fast-growing, under-served pocket: savory, high-protein snacks for urban European commuters. Competitive Intelligence mapped competitor positioning and identified gaps. Innovation Intelligence recommended a savory protein crisp with clean-label positioning and optimal price point. Sales Intelligence generated retail-specific sell-in stories and contextual enablement. If bought separately: insights sit in decks, decisions are isolated, enablement is generic, value resets each cycle. If bought as a connected platform: insights directly shape decisions, decisions are validated upfront, enablement is opportunity-specific, value compounds every cycle. This is the difference between buying point solutions and operating a connected system.",
    voiceId: DEFAULT_VOICE_ID,
  },
];

export const getGlobalDataNarration = (slideId: number): SlideNarration | undefined => {
  return globalDataNarrations.find((narration) => narration.slideId === slideId);
};
