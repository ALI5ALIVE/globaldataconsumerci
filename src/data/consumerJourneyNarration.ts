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
    title: "The Connected Decision",
    script: `Here's what this looks like in practice. One question: should we launch plant-based snacking in Southeast Asia? Sarah pulls the trend data — plant-based is accelerating at thirty-eight percent year-on-year. James sizes the opportunity — two point one billion dollar TAM by twenty-twenty-seven. Priya flags that Competitor X has filed four patents in this space. Marcus scores five concepts — three pass the evidence threshold. And Elena walks into Tesco with the full story. One meeting. One connected answer. Without this? Six vendors. Fourteen weeks. Three conflicting recommendations. With it? One platform. One meeting. One decision — backed by evidence from every angle. And David? He made it all possible with one contract.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 6,
    title: "Connected Intelligence in Action",
    script: `This is what changes everything. Sarah's foresight feeds James's sizing. James's numbers sharpen Priya's competitive signals. Priya's intelligence validates Marcus's innovation pipeline. And Marcus's validated concepts give Elena the evidence-backed story that wins the listing. No single vendor delivers this. No combination of point solutions connects these dots. And David? He consolidates fourteen contracts into one — with forty percent lower total cost of ownership. This is Connected Intelligence in action.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 7,
    title: "Nothing Like This Exists — Let's Talk",
    script: `Let's be direct. This isn't another dashboard. This isn't an incremental improvement. No one has ever connected strategic foresight, market sizing, competitive tracking, innovation validation, commercial intelligence, and procurement consolidation through a single consumer-connected taxonomy. This is a first. Eight of the top ten FMCG companies already trust it. Ninety days. That's all it takes to go from fourteen disconnected suppliers to one unified platform. Every week of delay is a consumer trend missed, a competitor moving first, a launch window closing. The journey from fragmented to connected starts with one conversation. Let's have it.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 8,
    title: "The Proof",
    script: `These aren't projections — they're results. Ferrero replaced five vendors with one connected platform — at thirty percent lower cost. Mondelēz cut decision cycles by seventy percent, responding to consumer shifts before competitors could even see them. Two times higher launch success rates by validating against real consumer signals instead of gut instinct. You're not paying for seven disconnected tools anymore. You're paying for one connected answer.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 9,
    title: "Your Teams, Transformed",
    script: `Here's what changes for your people. Today, your teams spend sixty percent of their time reconciling data and only ten percent on actual strategic thinking. With Connected Intelligence, that flips. Reconciliation drops to five percent. Strategic thinking rises to seventy-five percent. Your best people stop being data janitors and start being the strategic advisors they were hired to be. Decision velocity moves from six to eight weeks down to hours.`,
    voiceId: DEFAULT_VOICE_ID,
  },
];
export const getConsumerJourneyNarration = (slideId: number): SlideNarration | undefined => {
  return consumerJourneyNarrations.find((n) => n.slideId === slideId);
};
