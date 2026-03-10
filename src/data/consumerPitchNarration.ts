export interface SlideNarration {
  slideId: number;
  title: string;
  script: string;
  voiceId: string;
}

const DEFAULT_VOICE_ID = "JBFqnCBsd6RMkjVDRZzb"; // George - professional British male

export const consumerPitchNarrations: SlideNarration[] = [
  {
    slideId: 0,
    title: "Your Monday Morning",
    script: `It's Monday morning. Your inbox is full. The CEO wants a view on plant-based. Sales needs competitive context for a retailer meeting tomorrow. Innovation wants to know if the protein trend has peaked. R&D is asking about clean-label regulations in three markets. You need answers — fast, aligned, defensible. But your data lives in seven different places. Seven tools. Seven logins. Seven versions of the truth. And every one of them is telling you something slightly different.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 1,
    title: "Seven Questions, Seven Sources",
    script: `Here's what your week actually looks like. Strategy is pulling from one provider. Market sizing comes from another. Competitive tracking lives in a third. Innovation runs off trend reports that nobody else sees. And your sales team? They're building their own slides from memory. Seven critical questions. Seven disconnected sources. Seven teams — each confident they have the right answer. But none of them are speaking the same language. So you spend sixty percent of your time not thinking — but reconciling. Cross-checking. Debating whose numbers are right. That's not insight. That's bureaucracy.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 2,
    title: "What It's Costing You",
    script: `And it's not just frustrating — it's expensive. A major CPG company missed the protein snacking wave entirely. Three teams had three different views. By the time they aligned, competitors had claimed the shelf. Twelve weeks to make a decision that should have taken days. Sixty-eight percent of insight teams say they lack the confidence to act on what they have. Not because the data isn't there — but because they can't trust it's complete, connected, or current. Every missed trend is revenue left on the table. Every slow decision is a competitor moving first.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 3,
    title: "Imagine One Lens",
    script: `Now imagine this. One place where every question — strategic, competitive, market, innovation, commercial — gets answered through the same lens. No reconciliation. No conflicting numbers. No twelve-week wait. Your strategy team sees the same consumer signals as your sales team. Your innovation pipeline is validated against the same market data your board sees. One taxonomy. One truth. From the moment a trend emerges to the moment your product hits the shelf. That's not a dream. It exists.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 4,
    title: "Connected Intelligence",
    script: `This is Connected Consumer Intelligence. Five solutions — Strategic, Market, Competitive, Innovation, and Sales intelligence — unified by a single consumer-connected taxonomy. Every insight speaks the same language. Every decision draws from the same foundation. Strategic Intelligence scans macro themes twelve months before they hit your category. Market Intelligence sizes and forecasts across one hundred and ten countries. Competitive Intelligence tracks twenty-five thousand companies using six alternative data signals. Innovation Intelligence compresses eighteen-month cycles into eight-week validated sprints. And Sales Intelligence arms your commercial teams with stories backed by foresight, not fragments.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 5,
    title: "From Idea to Shelf",
    script: `Watch how it flows. A consumer health trend emerges. Strategic Intelligence flags it eighteen months early. Market Intelligence sizes the opportunity across your priority markets. Competitive Intelligence shows you who's already moving and where the white space is. Innovation Intelligence validates your concept against real consumer signals and scores it through evidence-based launch gates. Sales Intelligence packages the entire story for your buyer meeting — foresight, sizing, competitive context, and innovation proof points. One connected chain. From idea to shelf. Every team aligned. Every decision faster.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 6,
    title: "Your Teams, Transformed",
    script: `Here's what changes for your people. Today, your teams spend sixty percent of their time reconciling data and only ten percent on actual strategic thinking. With Connected Intelligence, that flips. Reconciliation drops to five percent. Strategic thinking rises to seventy-five percent. Your best people stop being data janitors and start being the strategic advisors they were hired to be. Decision velocity moves from six to eight weeks down to hours. Not because you're cutting corners — but because your foundation is unified. Every capability compounds on the one before it.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 7,
    title: "The Results Are Real",
    script: `These aren't projections — they're results. Ferrero replaced five vendors with one connected platform — at thirty percent lower cost. Mondelēz cut decision cycles by seventy percent, responding to consumer shifts before competitors could even see them. Two times higher launch success rates by validating against real consumer signals instead of gut instinct. And the total cost of ownership? Thirty percent lower. Because you're not paying for seven disconnected tools anymore. You're paying for one connected answer.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 8,
    title: "Nothing Like This Exists",
    script: `Let's be direct. This isn't another dashboard. This isn't an incremental improvement on what you already have. No one has ever connected strategic foresight, market sizing, competitive tracking, innovation validation, and commercial intelligence through a single consumer-connected taxonomy. This is a first. Not a rebundle. Not a portal with five tabs. A genuinely unified intelligence platform where every solution makes every other solution smarter. Eight of the top ten FMCG companies already trust it. The question isn't whether this works. It's whether you can afford to keep working without it.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 9,
    title: "One Conversation",
    script: `Ninety days. That's all it takes. Ninety days to go from seven disconnected sources to one unified consumer intelligence platform. Your teams stop reconciling and start reading consumers. Your decisions get faster, sharper, and backed by evidence your board can trust. Every week of delay is a consumer trend missed, a competitor moving first, a launch window closing. The journey from fragmented to connected starts with one conversation. Let's have it.`,
    voiceId: DEFAULT_VOICE_ID,
  },
];

export const getConsumerPitchNarration = (slideId: number): SlideNarration | undefined => {
  return consumerPitchNarrations.find((n) => n.slideId === slideId);
};
