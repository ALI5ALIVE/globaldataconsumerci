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
    title: "Welcome",
    script: `Connected Intelligence for Consumer Brands. What you're about to see is a new way of working — one where the brands that win don't have more data — they have connected intelligence.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 1,
    title: "The Pressure You're Under",
    script: `You're under more pressure than ever. The board wants evidence — not intuition. Consumer trends are shifting faster than your planning cycles. And your data? It lives in seven different places. There has to be a better way. Sound familiar? Picture your typical Monday.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 2,
    title: "Your Monday Morning",
    script: `It's Monday morning and your inbox is already on fire. The board wants your plant-based protein position by Friday. Your trend provider says the category is peaking — but social listening says it's accelerating. Finance has two different TAM numbers. A rival just filed four patents and nobody on your team saw it coming. One opportunity. Seven teams. Seven answers. Which one do you trust? If that feels familiar, you're not alone. And there's a reason it keeps happening.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 3,
    title: "Seven Sources, Seven Signals",
    script: `Every team is pulling from a different source — and every source tells them something different about the same opportunity. So your people spend sixty percent of their time not thinking — but reconciling. Ten percent on actual strategy. And twelve weeks to make a decision that should take days. That's not a workflow problem. It's a structural one. And it's already cost you.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 4,
    title: "What It's Costing You",
    script: `A competitor saw the same plant-based signal six months ago. They launched. They claimed the shelf. You were still reconciling data. One of your concepts scored low on gut-feel — no evidence, just instinct. A competitor launched something almost identical. It's now a forty million pound line. This is what fragmentation costs you — in this category, this year. You already know this doesn't have to be the way it works.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 5,
    title: "One Lens, One New Way of Working",
    script: "Imagine seeing that same opportunity through one connected lens. Five solutions \u2014 each best-in-class \u2014 working together for the first time. Sarah, your Head of Strategy, uses Strategic Intelligence to spot macro forces and the micro signals converging beneath them \u2014 giving you predictive foresight before the market shifts. James gets one definitive sizing from Market Intelligence across every market you care about. Priya tracks every competitive move in real time. Marcus tests concepts against real evidence with Innovation Intelligence. And Elena walks into every buyer meeting armed with the full story from Sales Intelligence. Connecting all of them is Ava \u2014 our AI intelligence layer \u2014 surfacing patterns no single team would spot alone. David wraps it into one contract at thirty percent lower cost. Six people. One platform. That\u2019s what Connected Intelligence is. Now let\u2019s see how it works in practice.",
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 6,
    title: "The Connected Decision",
    script: `One question: should you launch plant-based snacking in Southeast Asia? Sarah pulls the Strategic Intelligence data — two macro themes — Health and Wellness, and Sustainability — with four micro signals converging beneath them: plant protein, clean label, gut health, and ethical sourcing — all accelerating in Southeast Asia. Convergence score: ninety-two out of a hundred. Three competitors have already entered in the last six months. James sizes the opportunity: two point one billion dollars globally, but Southeast Asia alone is eight hundred and twenty million — growing at fourteen percent. And forty-two percent of snacking occasions in the region are completely unaddressed. Priya's competitive radar is flashing. A rival filed four patents in the last two weeks. They've hired a regional supply chain lead. They're building capacity. Threat level: high and accelerating. Marcus runs five concepts through Innovation Intelligence. Crispy Bites scores eighty-seven. Protein Bar, seventy-two. Gut Shot fails at thirty-four. Three of five pass the evidence threshold — and crucially, they're the three aligned to the converging trends Sarah identified. Elena walks into the Tesco meeting with everything: confirmed category gap, twelve percent shelf space available, buyer sentiment positive. Two of three target retailers are ready for a first-mover pitch. One platform. One meeting. One decision — backed by evidence from every angle. Without it? Six vendors. Fourteen weeks. Three conflicting recommendations. Imagine what that speed does to your competitors' confidence.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 7,
    title: "Teams Transformed",
    script: `Today your best people are data janitors. Searching, reconciling, reporting. With Connected Intelligence, strategy time goes from ten percent to seventy-five percent. Decision velocity drops from six to eight weeks to hours. But here's what really changes — your innovation hit rate doubles. Your teams spot opportunities months before competitors. And your best talent? They stay — because they're finally doing the work they were hired to do. That's not incremental improvement. That's a fundamentally different way of working. And there's a clear path to get there.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 8,
    title: "The Intelligence Maturity Journey",
    script: `Most teams are stuck at Stage One — Fragmented. The gateway is Stage Two: Connected. One taxonomy. Reconciliation drops from sixty to twenty percent. Decisions compress to weeks. From there, AI begins surfacing cross-solution patterns — Stage Three, Optimised. And at Stage Four — Predictive — AI anticipates market shifts before they happen. You'll recognise the pattern — you can't skip to Predictive without first being Connected. The taxonomy is the foundation. And the results speak for themselves.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 9,
    title: "Why Not DIY?",
    script: `Eighteen months of integration. Fourteen separate contracts. No shared taxonomy. No cross-pollination of insights. With Connected Intelligence — ninety-day deployment, one platform, one contract, and intelligence that flows from trend to shelf. Built on forty years of analyst-validated market intelligence covering ninety-five percent of global GDP. You already know the intelligence needs to be connected. The real question is how quickly you want to get there.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 10,
    title: "The Proof",
    script: `Leading global FMCG companies are already seeing this. Three times faster decisions. Seventy percent reduction in time to insight. Double the launch success rate. Thirty percent lower total cost of ownership. This is Connected Intelligence — proven and delivering. And if you're thinking — could we just build this ourselves? — you wouldn't be the first.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 11,
    title: "Next Steps",
    script: `The companies who've made this shift aren't just faster — they're winning categories they used to chase. If any of this resonated, here's a thought. Let's map your current intelligence landscape — where you are on the maturity curve, where the quick wins are, and what Connected Intelligence would look like for your team. No commitment. Just clarity. Would that be useful?`,
    voiceId: DEFAULT_VOICE_ID,
  },
];

export const getConsumerJourneyNarration = (slideId: number): SlideNarration | undefined => {
  return consumerJourneyNarrations.find((n) => n.slideId === slideId);
};
