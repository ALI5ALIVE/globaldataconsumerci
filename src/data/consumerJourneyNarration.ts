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
    script: `It's Monday morning and your inbox is already on fire. The board wants your plant-based protein position by Friday. Your trend provider says the category is peaking — but social listening says it's accelerating. Finance needs a TAM number, and you've got two: one point four billion from your team, two point one billion from the consultant. A rival just filed four patents in plant-based protein and nobody on your team saw it coming. You have five concepts in the pipeline. Which ones should you kill? Which ones should you fast-track? And the buyer at your biggest retailer? They want a plant-based range proposal by next month. One opportunity. Seven teams. Seven answers. Which one do you trust?`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 2,
    title: "Seven Sources, Seven Conflicting Signals",
    script: `Here's the problem. Every team is pulling from a different source — and every source is telling them something different about the same opportunity. Your trend report says plant-based is peaking. Your consumer panel says trial is up but repeat is flat. Your internal data says your test market grew twenty-two percent. Your competitive database says no significant moves — but your sales team says the buyer is demanding it. Seven sources. Seven conflicting signals. So your team spends sixty percent of their time not thinking — but reconciling. Ten percent on actual strategy. And twelve weeks to make a decision that should take days. By the time you reconcile, someone else has launched.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 3,
    title: "What It's Costing You",
    script: `And this isn't hypothetical. A competitor saw the same plant-based signals six months ago. They launched. They claimed the shelf. You're still reconciling data. Your strategy, innovation, and commercial teams each had a different view. By the time they agreed, the buyer had moved on. One of your five plant-based concepts scored low on gut-feel — no evidence, just instinct. A competitor launched something almost identical. It's now a forty million pound line. Another concept made it to market — but without competitive context. A rival had already saturated the space. You found out from trade press. This is what fragmentation costs you. In this category. This year.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 4,
    title: "Imagine One Lens",
    script: `Now imagine seeing that same plant-based opportunity through one connected lens. Five people. Five roles. One platform. Sarah sees the signal first — and it's validated, not debated. James sizes it instantly — one number, one methodology, no reconciliation. Priya tracks every competitive move in real time. Marcus scores your concepts against real evidence, not gut-feel. And Elena walks into the buyer meeting with the full story — trend, sizing, competitive context, validated concepts — in one click. One taxonomy. One truth. From the first signal to the shelf. That's not a vision. It exists. Let me show you.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 5,
    title: "The Connected Decision",
    script: `Here's what this looks like in practice. One question: should you launch plant-based snacking in Southeast Asia? Sarah pulls the trend data — plant-based is accelerating at thirty-eight percent year-on-year across the region. James sizes the opportunity — two point one billion dollar TAM by twenty-twenty-seven, twelve point six percent CAGR. Priya flags that a rival has filed four patents in this exact space. Marcus scores five concepts against the evidence — three pass the threshold. And Elena walks into the retailer with the full story. One meeting. One connected answer. Without this? Six vendors. Fourteen weeks. Three conflicting recommendations. With it? One platform. One meeting. One decision — backed by evidence from every angle.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 6,
    title: "Connected Intelligence in Action",
    script: `This is what changes everything. Sarah validates the plant-based signal. That feeds directly into James's sizing model — no manual handoff, no reconciliation. James's two point one billion dollar number sharpens Priya's competitive scan — she flags four rival patents you would have missed. Priya's intelligence feeds into Marcus's innovation scoring — three of your five concepts pass because they account for what competitors are actually doing. And Marcus's validated concepts give Elena the evidence-backed story that wins the listing. No single vendor delivers this. No combination of point solutions connects these dots. And David? He consolidates fourteen contracts into one — with forty percent lower total cost of ownership. This is Connected Intelligence in action.`,
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
