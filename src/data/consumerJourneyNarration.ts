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
    title: "Your Monday Morning",
    script: `It's Monday morning. Your inbox is full. The CEO wants a view on plant-based. Sales needs competitive context for a retailer meeting tomorrow. Innovation wants to know if the protein trend has peaked. R&D is asking about clean-label regulations in three markets. You need answers — fast, aligned, defensible. But your data lives in seven different places. Seven tools. Seven logins. Seven versions of the truth. And every one of them is telling you something slightly different.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 1,
    title: "Seven Questions, Seven Sources",
    script: `Here's what your week actually looks like. Strategy is pulling from one provider. Market sizing comes from another. Competitive tracking lives in a third. Innovation runs off trend reports that nobody else sees. And your sales team? They're building their own slides from memory. Seven critical questions. Seven disconnected sources. Seven teams — each confident they have the right answer. But none of them are speaking the same language. So you spend sixty percent of your time not thinking — but reconciling.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 2,
    title: "What It's Costing You",
    script: `And it's not just frustrating — it's expensive. A major CPG company missed the protein snacking wave entirely. Three teams had three different views. By the time they aligned, competitors had claimed the shelf. Twelve weeks to make a decision that should have taken days. Every missed trend is revenue left on the table. Every slow decision is a competitor moving first.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 3,
    title: "The Strategist — Trend & Strategy",
    script: `Meet Sarah. Head of Strategy at a top-five FMCG company. Without connected intelligence, she's always twelve months late. By the time she's validated a trend through three different providers, her competitor has already launched. She's not stupid — she's stranded. Her board wants foresight. She delivers hindsight with a time lag. Now imagine Sarah with Connected Intelligence. Strategic foresight flags emerging themes eighteen months before they hit her category. She walks into the board with evidence, not excuses. Same person. Same role. Completely different impact.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 4,
    title: "The Market Lead — Opportunity Sizing",
    script: `Meet James. Market Intelligence Lead. His job is to size opportunities and forecast demand. Without connected intelligence, he spends three weeks pulling numbers from four different sources. The board still questions them. Because everyone in the room has a different number from a different provider. He's not wrong — he's outnumbered by conflicting data. Now imagine James with Connected Intelligence. One click. One hundred and ten countries. Numbers the board trusts — because everyone sees the same data, drawn from the same taxonomy. Three weeks becomes three minutes. James stops defending numbers and starts shaping strategy.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 5,
    title: "The CI Analyst — Competitive Tracking",
    script: `Meet Priya. Competitive Intelligence Analyst. She's brilliant at pattern recognition. But without connected intelligence, she finds out about competitor moves from trade press — the same place the whole industry finds out. By then, it's too late to respond. She's always reactive. Always a step behind. Now imagine Priya with Connected Intelligence. She tracks twenty-five thousand companies using six alternative data signals — patent filings, job postings, supply chain shifts. She sees their moves before they announce them. The boardroom doesn't just hear what happened. They hear what's coming.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 6,
    title: "The Innovation Director — Validation",
    script: `Meet Marcus. Innovation Director. He killed a product that would have been a hit. He launched one that flopped. Both decisions were based on gut feel dressed up as insight. Without connected intelligence, every concept is a gamble. Consumer research takes months. By the time results arrive, the market has moved. Now imagine Marcus with Connected Intelligence. Every concept is scored against real consumer signals — search trends, social sentiment, purchase behaviour. Eighteen-month cycles compress to eight weeks. His launch success rate doubled. Not because he got smarter — because his evidence got connected.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 7,
    title: "The Sales Lead — Commercial Execution",
    script: `Meet Elena. National Account Manager. She walks into buyer meetings with slides she made last night. No foresight. No proof points. Just enthusiasm and a price list. The buyer has better data than she does — and they both know it. Without connected intelligence, she's bringing a knife to a gunfight. Now imagine Elena with Connected Intelligence. She walks in with the full picture — trend data, market sizing, competitive context, and innovation proof points. All unified. All current. The buyer leans in. Because Elena isn't pitching a product — she's presenting a story backed by intelligence.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 8,
    title: "Imagine One Lens",
    script: `Five people. Five roles. Five completely different days — transformed by one connected platform. Sarah sees what's coming. James sizes it instantly. Priya tracks who's moving. Marcus validates with evidence. Elena closes with conviction. One taxonomy. One truth. From the moment a trend emerges to the moment your product hits the shelf. That's not a dream. It exists.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 9,
    title: "Your Teams, Transformed",
    script: `Here's what changes for your people. Today, your teams spend sixty percent of their time reconciling data and only ten percent on actual strategic thinking. With Connected Intelligence, that flips. Reconciliation drops to five percent. Strategic thinking rises to seventy-five percent. Your best people stop being data janitors and start being the strategic advisors they were hired to be. Decision velocity moves from six to eight weeks down to hours.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 10,
    title: "The Results Are Real",
    script: `These aren't projections — they're results. Ferrero replaced five vendors with one connected platform — at thirty percent lower cost. Mondelēz cut decision cycles by seventy percent, responding to consumer shifts before competitors could even see them. Two times higher launch success rates by validating against real consumer signals instead of gut instinct. You're not paying for seven disconnected tools anymore. You're paying for one connected answer.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 11,
    title: "Nothing Like This Exists — Let's Talk",
    script: `Let's be direct. This isn't another dashboard. This isn't an incremental improvement. No one has ever connected strategic foresight, market sizing, competitive tracking, innovation validation, and commercial intelligence through a single consumer-connected taxonomy. This is a first. Eight of the top ten FMCG companies already trust it. Ninety days. That's all it takes to go from seven disconnected sources to one unified platform. Every week of delay is a consumer trend missed, a competitor moving first, a launch window closing. The journey from fragmented to connected starts with one conversation. Let's have it.`,
    voiceId: DEFAULT_VOICE_ID,
  },
];

export const getConsumerJourneyNarration = (slideId: number): SlideNarration | undefined => {
  return consumerJourneyNarrations.find((n) => n.slideId === slideId);
};
