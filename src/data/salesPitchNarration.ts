export interface SlideNarration {
  slideId: number;
  title: string;
  script: string;
  voiceId: string;
}

const DEFAULT_VOICE_ID = "JBFqnCBsd6RMkjVDRZzb"; // George - professional British male

export const salesPitchNarrations: SlideNarration[] = [
  {
    slideId: 0,
    title: "Title",
    script: `Consumers are switching brands in seconds, reshaping categories overnight, and rewriting the rules of loyalty with every scroll. The companies that see it first, win. This is GlobalData Connected Intelligence — turning consumer signals into competitive advantage before your rivals even see them coming.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 1,
    title: "Hook",
    script: `How do you turn constant market change into faster, more confident growth? The brands winning today don't have more data — they have connected intelligence. So where is growth being lost?`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 2,
    title: "Journey",
    script: `We'll take a nine-stop journey — from the forces creating urgency, through the intelligence gap costing you growth, to the connected platform that closes it.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 3,
    title: "Market Speed",
    script: `Markets reward speed and punish delay. Consumer behaviour now shifts three times faster than insight cycles. In 2023, a major CPG company missed the protein snacking wave — three teams, three views. By the time they aligned, competitors had claimed the shelf.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 4,
    title: "Intelligence Gap",
    script: `Growth is lost in the Intelligence Gap — four dimensions. Breadth: three to five conflicting sources per decision. Alignment: forty percent of launches miss their window. Speed: twelve-plus weeks of decision latency. Confidence: sixty-eight percent of teams lack conviction to act. When leaders debate data instead of strategy, windows close.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 5,
    title: "Transformation",
    script: `Ferrero replaced five vendors with one connected platform — at thirty percent lower cost. Twelve weeks to decision became days. Five siloed sources became one truth. How? The Connected Intelligence Platform — five solutions unified by one consumer-connected taxonomy. Every insight speaks the same language. Let's see how each builds on the next.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 6,
    title: "Strategic Intel",
    script: `First: Strategic Intelligence. Your AI partner Ava scans converging macro themes — health, sustainability, premiumisation — and surfaces implications twelve months before they hit your category. Because it shares the platform taxonomy, signals flow directly into sizing, positioning, and innovation. A top-five beverage company avoided fifty million euros in rushed reformulation by acting eighteen months early.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 7,
    title: "Market Intel",
    script: `Second: Market Intelligence. Category sizing and forecasting across one hundred and ten countries. Quarterly-updated forecasts replace annual syndicated cycles. One consistent methodology gives true cross-market comparability. A European personal care leader aligned all regions in one week and secured board approval with ninety percent confidence.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 8,
    title: "Competitive Intel",
    script: `Third: Competitive Intelligence. Predictive tracking across twenty-five thousand companies using six alternative data signals: patents, job postings, deals, filings, news, and sentiment. Thematic scorecards reveal who's investing ahead of the curve. A global confectionery company spotted a competitor reformulating — responded with clean-label claims and recovered two-and-a-half points of share in six months.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 9,
    title: "Innovation Intel",
    script: `Fourth: Innovation Intelligence. AI-powered trend scanning, consumer signal validation, and evidence-scored launch gates — compressing eighteen-month cycles into eight-week validated sprints. A European dairy company used it to launch two variants that hit top five in their category within twelve weeks.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 10,
    title: "Sales Intel",
    script: `Fifth: Sales Intelligence. Your commercial teams walk into buyers with stories backed by foresight, market data, competitive context, and innovation proof points — all from one taxonomy. A multinational snack company achieved twenty-five percent higher listing success. Five solutions, one connected decision chain. How mature is your organisation's ability to do this?`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 11,
    title: "Fragmented",
    script: `Stage one: Fragmented. Multiple sources, no unified view. Sixty percent of time on reconciliation, ten percent on strategy. Decision velocity: six to eight weeks. AI can't help here — it just automates the fragmentation. The path forward starts with one move: getting Connected.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 12,
    title: "Connected",
    script: `Stage two: Connected. This is the gateway. One source of truth, one taxonomy, five solutions speaking the same language. Reconciliation drops to twenty percent. Strategy doubles. Decision velocity: two to three weeks. Connected is the unlock — without it, Optimised and Predictive are impossible. With it, every capability compounds.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 13,
    title: "Optimised",
    script: `Stage three: Optimised — only possible because Connected gave you the unified foundation. Ava works across your entire intelligence chain, surfacing cross-solution insights before you ask. Reconciliation: ten percent. Strategic thinking: forty percent. Decision velocity: three to five days.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 14,
    title: "Predictive",
    script: `Stage four: Predictive — the compound payoff. AI anticipates market shifts across all five solutions and recommends actions before competitors move. Reconciliation: five percent. Strategic thinking: seventy-five percent. Decision velocity: hours. None of this is possible without the Connected foundation.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 15,
    title: "Why GlobalData",
    script: `Why GlobalData? Three things no one else combines. High-impact data: ninety-five percent global GDP coverage, single taxonomy. Agentic AI that forecasts and acts. Domain experts embedded in your workflows. Eight of the top ten FMCG companies trust GlobalData.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 16,
    title: "The Return",
    script: `The return is measured. Mondelēz cut decision cycles by seventy percent. Two times higher launch success. Thirty percent lower total cost of ownership. Value compounds as you climb the maturity curve.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 17,
    title: "Get Connected",
    script: `Ninety days to unified intelligence. Five vendors become one platform. Cost drops thirty percent. Decisions accelerate from weeks to days. Every week of delay compounds the gap.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 18,
    title: "CTA",
    script: `Let's embed foresight into your strategy — turning connected intelligence into measurable advantage. The journey starts with a single conversation. Let's have it.`,
    voiceId: DEFAULT_VOICE_ID,
  },
];
export const getSalesPitchNarration = (slideId: number): SlideNarration | undefined => {
  return salesPitchNarrations.find((n) => n.slideId === slideId);
};
