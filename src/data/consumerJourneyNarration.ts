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
    script: `You're under more pressure than ever. The board wants evidence-based strategy — not PowerPoint promises. Consumer trends are shifting faster than your planning cycles can keep up. And your data? It lives in seven different places. Seven tools. Seven logins. Seven versions of the truth. You're expected to deliver growth, move faster, prove ROI — and do it all with fewer resources. There has to be a better way.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 1,
    title: "Your Monday Morning",
    script: `It's Monday morning. Your inbox is full. The CEO wants a view on plant-based. Sales needs competitive context for a retailer meeting tomorrow. Innovation wants to know if the protein trend has peaked. R&D is asking about clean-label regulations in three markets. You need answers — fast, aligned, defensible. But your data lives in seven different places. Seven tools. Seven logins. Seven versions of the truth. And every one of them is telling you something slightly different.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 2,
    title: "Seven Questions, Seven Sources",
    script: `Here's what your week actually looks like. Strategy is pulling from one provider. Market sizing comes from another. Competitive tracking lives in a third. Innovation runs off trend reports that nobody else sees. And your sales team? They're building their own slides from memory. Seven critical questions. Seven disconnected sources. Seven teams — each confident they have the right answer. But none of them are speaking the same language. So you spend sixty percent of your time not thinking — but reconciling.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 3,
    title: "What It's Costing You",
    script: `And it's not just frustrating — it's expensive. A major CPG company missed the protein snacking wave entirely. Three teams had three different views. By the time they aligned, competitors had claimed the shelf. Twelve weeks to make a decision that should have taken days. Every missed trend is revenue left on the table. Every slow decision is a competitor moving first.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 4,
    title: "Imagine One Lens",
    script: `Now imagine one lens across your entire value chain. Five people. Five roles. One connected platform. Sarah sees what's coming. James sizes it instantly. Priya tracks who's moving. Marcus validates with evidence. Elena closes with conviction. One taxonomy. One truth. From the moment a trend emerges to the moment your product hits the shelf. That's not a dream. It exists. Let me show you how each of them uses it.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 5,
    title: "The Strategist — Trend & Strategy",
    script: `Meet Sarah. Head of Strategy at a top-five FMCG company. Without connected intelligence, she's always twelve months late. By the time she's validated a trend through three different providers, her competitor has already launched. Now look at her dashboard — Strategic Foresight. Emerging trends flagged eighteen months out. Rising and falling indicators across every category. She walks into the board with evidence, not excuses. Eighteen months of foresight. One validated view. Three times faster board prep.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 6,
    title: "The Market Lead — Opportunity Sizing",
    script: `Meet James. Market Intelligence Lead. His job is to size opportunities and forecast demand. Without connected intelligence, he spends three weeks pulling numbers from four different sources. The board still questions them. Now look at his dashboard — Market Sizing. One click. One hundred and ten countries. A twelve point six billion dollar global TAM with eight point three percent CAGR. Numbers the board trusts because everyone sees the same data, drawn from the same taxonomy. Three weeks becomes three minutes.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 7,
    title: "The CI Analyst — Competitive Tracking",
    script: `Meet Priya. Competitive Intelligence Analyst. She's brilliant at pattern recognition. But without connected intelligence, she finds out about competitor moves from trade press — the same time as everyone else. Now look at her dashboard — Competitive Intelligence. Twenty-five thousand companies tracked. Six alternative data signals. Real-time alerts on patent filings, key hires, supply chain shifts. She sees their moves before they announce them.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 8,
    title: "The Innovation Director — Validation",
    script: `Meet Marcus. Innovation Director. He killed a product that would have been a hit. He launched one that flopped. Both decisions were based on gut feel dressed up as insight. Now look at his dashboard — Innovation Validation. Every concept scored against real consumer signals. Probiotic Snack Bar scores eighty-seven. CBD Gummies scores thirty-four — killed early, saving millions. Two times higher launch success rate. Eighteen-month cycles compressed to eight weeks.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 9,
    title: "The Sales Lead — Commercial Execution",
    script: `Meet Elena. National Account Manager. She walks into buyer meetings with slides she made last night. No foresight. No proof points. Now look at her dashboard — Commercial Intelligence. Four intelligence layers — trend data, market sizing, competitive context, and innovation proof points. All unified. All current. The buyer leans in. Because Elena isn't pitching a product — she's presenting a story backed by intelligence. A partnership conversation built on shared evidence.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 10,
    title: "The Procurement Lead — TCO & Consolidation",
    script: `Meet David. Head of Procurement. He manages fourteen overlapping data suppliers. Two point four million pounds a year — and nobody can tell him what's actually being used. Renewal season is a nightmare of duplicate contracts and zero usage visibility. Now look at his dashboard — Procurement Intelligence. Fourteen suppliers consolidated to one. Total cost of ownership down forty percent. Every team's usage tracked. Every pound justified. David went from managing fourteen vendor relationships to one strategic partnership. Best-in-class consolidation — measurable, defensible, and immediate.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 11,
    title: "Connected Intelligence in Action",
    script: `This is what changes everything. Sarah's foresight feeds James's sizing. James's numbers sharpen Priya's competitive signals. Priya's intelligence validates Marcus's innovation pipeline. And Marcus's validated concepts give Elena the evidence-backed story that wins the listing. No single vendor delivers this. No combination of point solutions connects these dots. And David? He consolidates fourteen contracts into one — with forty percent lower total cost of ownership. This is Connected Intelligence in action.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 12,
    title: "Your Teams, Transformed",
    script: `Here's what changes for your people. Today, your teams spend sixty percent of their time reconciling data and only ten percent on actual strategic thinking. With Connected Intelligence, that flips. Reconciliation drops to five percent. Strategic thinking rises to seventy-five percent. Your best people stop being data janitors and start being the strategic advisors they were hired to be. Decision velocity moves from six to eight weeks down to hours.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 13,
    title: "The Results Are Real",
    script: `These aren't projections — they're results. Ferrero replaced five vendors with one connected platform — at thirty percent lower cost. Mondelēz cut decision cycles by seventy percent, responding to consumer shifts before competitors could even see them. Two times higher launch success rates by validating against real consumer signals instead of gut instinct. You're not paying for seven disconnected tools anymore. You're paying for one connected answer.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 14,
    title: "Nothing Like This Exists — Let's Talk",
    script: `Let's be direct. This isn't another dashboard. This isn't an incremental improvement. No one has ever connected strategic foresight, market sizing, competitive tracking, innovation validation, commercial intelligence, and procurement consolidation through a single consumer-connected taxonomy. This is a first. Eight of the top ten FMCG companies already trust it. Ninety days. That's all it takes to go from fourteen disconnected suppliers to one unified platform. Every week of delay is a consumer trend missed, a competitor moving first, a launch window closing. The journey from fragmented to connected starts with one conversation. Let's have it.`,
    voiceId: DEFAULT_VOICE_ID,
  },
];

export const getConsumerJourneyNarration = (slideId: number): SlideNarration | undefined => {
  return consumerJourneyNarrations.find((n) => n.slideId === slideId);
};
