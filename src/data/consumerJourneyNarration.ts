export interface SlideNarration {
  slideId: number;
  title: string;
  script: string;
  voiceId: string;
}

const DEFAULT_VOICE_ID = "JBFqnCBsd6RMkjVDRZzb"; // George

export const consumerJourneyNarrations: SlideNarration[] = [
  {
    slideId: 0,
    title: "The Pressure You're Under",
    script: `You're under more pressure than ever. The board wants evidence — not intuition. Consumer trends are shifting faster than your planning cycles. And your data? It lives in seven different places. There has to be a better way. Let me show you what Monday actually looks like.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 1,
    title: "Your Monday Morning",
    script: `It's Monday morning and your inbox is already on fire. The board wants your plant-based protein position by Friday. Your trend provider says the category is peaking — but social listening says it's accelerating. Finance has two different TAM numbers. A rival just filed four patents and nobody on your team saw it coming. One opportunity. Seven teams. Seven answers. Which one do you trust? Here's why that keeps happening.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 2,
    title: "Seven Sources, Seven Signals",
    script: `Every team is pulling from a different source — and every source tells them something different about the same opportunity. So your people spend sixty percent of their time not thinking — but reconciling. Ten percent on actual strategy. And twelve weeks to make a decision that should take days. That's not a workflow problem. It's a structural one. And it's already cost you.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 3,
    title: "What It's Costing You",
    script: `A competitor saw the same plant-based signal six months ago. They launched. They claimed the shelf. You were still reconciling data. One of your concepts scored low on gut-feel — no evidence, just instinct. A competitor launched something almost identical. It's now a forty million pound line. This is what fragmentation costs you — in this category, this year. But it doesn't have to work this way.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 4,
    title: "One Lens, One New Way of Working",
    script: `Imagine seeing that same opportunity through one connected lens. Sarah sees the signal first — validated, not debated. James sizes it instantly — one number, one methodology. Priya tracks every competitive move in real time. Marcus scores concepts against real evidence. And Elena walks into the buyer meeting with the full story — trend, sizing, competitive context — in one click. One taxonomy. One truth. From signal to shelf. Let me show you how it works in practice.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 5,
    title: "The Connected Decision",
    script: `One question: should you launch plant-based snacking in Southeast Asia? With Connected Intelligence — Sarah pulls the Strategic Intelligence data: thirty-eight percent year-on-year growth. James sizes it: two point one billion dollar opportunity. Priya flags four rival patents. Marcus scores five concepts — three pass. Elena walks into the retailer with the full story. One platform. One meeting. One decision — backed by evidence from every angle. Without it? Six vendors. Fourteen weeks. Three conflicting recommendations. Now — what does this mean for your teams?`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 6,
    title: "Teams Transformed",
    script: `Today your best people are data janitors. Searching, reconciling, reporting. With Connected Intelligence, strategy time goes from ten percent to seventy-five percent. And decision velocity? Six to eight weeks — down to hours. That's not incremental improvement. That's transformation. And there's a clear path to get there.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 7,
    title: "The Intelligence Maturity Journey",
    script: `Most teams are stuck at Stage One — Fragmented. The gateway is Stage Two: Connected. One taxonomy. Reconciliation drops from sixty to twenty percent. Decisions compress to weeks. From there, AI begins surfacing cross-solution patterns — Stage Three, Optimised. And at Stage Four — Predictive — AI anticipates market shifts before they happen. But here's the critical insight: you can't skip to Predictive without first being Connected. The taxonomy is the foundation. And the results speak for themselves.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 8,
    title: "The Proof",
    script: `Leading global FMCG companies are already seeing this. Three times faster decisions. Seventy percent reduction in time to insight. Double the launch success rate. Forty percent lower total cost of ownership. This is Connected Intelligence — proven and delivering. So you might be wondering — why not just build this yourself?`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 9,
    title: "Why Not DIY?",
    script: `Eighteen months of integration. Fourteen separate contracts. No shared taxonomy. No cross-pollination of insights. With Connected Intelligence — ninety-day deployment, one platform, one contract, and intelligence that flows from trend to shelf. The question isn't whether to connect your intelligence. It's how fast you want to move.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 10,
    title: "Next Steps",
    script: `Here's what I'd suggest. Let's map your current intelligence landscape — where you are on the maturity curve, where the quick wins are, and what Connected Intelligence would look like for your team. No commitment. Just clarity. Shall we book that in?`,
    voiceId: DEFAULT_VOICE_ID,
  },
];

export const getConsumerJourneyNarration = (slideId: number): SlideNarration | undefined => {
  return consumerJourneyNarrations.find((n) => n.slideId === slideId);
};
