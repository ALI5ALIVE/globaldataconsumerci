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
    script: `Consumers are moving faster than ever. They're switching brands in seconds, reshaping categories overnight, and rewriting the rules of loyalty with every scroll. The companies that see it first, win. The ones that don't, lose shelf space, market share, and relevance. This is GlobalData Connected Intelligence — the platform that turns consumer signals into competitive advantage before your rivals even see them coming.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 1,
    title: "Hook",
    script: `Here's the question every CMO and strategy leader is wrestling with: how do you turn constant market change into faster, more confident growth? The brands winning today don't have more data — they have connected intelligence. And that changes everything. So where exactly is growth being lost?`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 2,
    title: "Journey",
    script: `Today we'll take a nine-stop journey — from the market forces creating urgency, through the intelligence gap costing you growth, to the connected platform that closes it. One thread connects every stop: turning fragmented data into a decisive competitive advantage.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 3,
    title: "Market Speed",
    script: `Markets reward speed and punish delay. Consumer behaviour now shifts three times faster than insight cycles. In 2023, a major CPG company missed the protein snacking wave — three teams had three different views. By the time they aligned, Grenade and Barebells had claimed the shelf. More data than ever, yet less confidence to act. So where exactly is growth being lost?`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 4,
    title: "Intelligence Gap",
    script: `Growth is lost in the Intelligence Gap — across four dimensions. Breadth: three to five conflicting sources per decision. Alignment: forty percent of launches miss their window. Speed: twelve-plus weeks of decision latency. Confidence: sixty-eight percent of teams lack conviction to act. A top-ten FMCG company spent twelve weeks reconciling data for one quarterly review. When leaders debate data instead of strategy, windows close. But what does it look like when this gap closes?`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 5,
    title: "Transformation",
    script: `It looks like Ferrero's transformation. Before: twelve weeks to decision, five sources to reconcile, siloed insights. After: days to decision, one source of truth, aligned action across every market. They replaced Nielsen, Kantar, Mintel, Euromonitor, and Circana with one connected platform — at thirty percent lower cost. How? Through the Connected Intelligence Platform — five best-in-class solutions, unified by one consumer-connected taxonomy. Every insight speaks the same language, every team works from the same truth. Let's see how each solution builds on the next.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 6,
    title: "Strategic Intel",
    script: `The first solution is Strategic Intelligence — thematic foresight for the connected platform. Your AI partner Ava scans converging macro themes — health and wellness, sustainability, premiumisation — and surfaces implications twelve months before they hit your category. Because it shares the same taxonomy as every other solution, those signals flow directly into sizing, positioning, and innovation. A top-five beverage company avoided fifty million euros in rushed reformulation by acting eighteen months early. But foresight needs to be sized. That's where the second solution comes in.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 7,
    title: "Market Intel",
    script: `The second solution is Market Intelligence — category sizing and forecasting across one hundred and ten countries and over a thousand segments. Quarterly-updated forecasts replace annual syndicated cycles, and one consistent methodology gives you true cross-market comparability. All built on the same unified taxonomy, so every team aligns around defensible facts, not opinions. A European personal care leader aligned all regions in one week and secured board approval for a twenty-five million euro investment with ninety percent confidence. But sizing a market means nothing if you can't see what competitors are doing inside it.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 8,
    title: "Competitive Intel",
    script: `The third solution is Competitive Intelligence — predictive competitor tracking across twenty-five thousand companies using six alternative data signals: patents, job postings, deals, filings, news, and social sentiment. Thematic scorecards reveal which rivals are investing ahead of the curve — and because the taxonomy is shared, every competitive move maps directly to your strategic priorities and market opportunities. A global confectionery company spotted a competitor reformulating their hero SKU. They responded with clean-label claims at ten percent lower price and recovered two-and-a-half points of share in six months. Knowing where to play is powerful — but the fourth solution tells you what to build.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 9,
    title: "Innovation Intel",
    script: `The fourth solution is Innovation Intelligence — an end-to-end platform covering over one hundred categories across forty-two countries. AI-powered trend scanning, consumer signal validation, evidence-scored launch gates, and post-launch tracking from week one — compressing eighteen-month stage-gate cycles into eight-week validated sprints. Because it draws from the same connected taxonomy, innovation decisions are grounded in the strategic, market, and competitive context you've already built. A leading European dairy company used it to launch high-protein and kids variants — both hit top five in their category within twelve weeks. Great products need great sell-in stories. That's where the fifth solution completes the chain.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 10,
    title: "Sales Intel",
    script: `The fifth solution is Sales Intelligence — it arms your commercial teams with buyer-specific stories that land. Because every insight flows from one unified taxonomy, your sales team walks into Tesco or Carrefour with a story backed by strategic foresight, market data, competitive context, and innovation proof points. A multinational snack company secured one hundred percent of target listings — twenty-five percent higher listing success. Five solutions, one unified taxonomy, one connected decision chain. The question is: how mature is your organisation's ability to do this?`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 11,
    title: "Fragmented",
    script: `Now you've seen what connected intelligence delivers. The question is — where are you today? Stage one: Fragmented. Multiple data sources, no unified view. Teams spend sixty percent of their time reconciling data, thirty percent on analysis, and just ten percent on strategy. Decision velocity: six to eight weeks. At this stage, AI can't help you — it just automates the fragmentation. The path to Optimised and Predictive starts with one move: getting Connected.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 12,
    title: "Connected",
    script: `Stage two: Connected. This is the gateway. One source of truth, one taxonomy, five solutions speaking the same language. Reconciliation drops to twenty percent. Analysis rises to forty percent. Strategy doubles to twenty percent. Decision velocity: two to three weeks. But here's what matters most — Connected is the unlock. Without it, Optimised and Predictive intelligence are impossible. With it, every capability compounds from here.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 13,
    title: "Optimised",
    script: `Stage three: Optimised — and this is only possible because Connected gave you the unified foundation. Now Ava works across your entire intelligence chain — anticipating shifts, surfacing cross-solution insights before you ask. Reconciliation falls to ten percent. Strategic thinking rises to forty percent. Decision velocity: three to five days. Your teams stop reconciling and start leading. And from here, you move from reactive to predictive.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 14,
    title: "Predictive",
    script: `Stage four: Predictive — the compound payoff of Connected Intelligence. AI anticipates market shifts across all five solutions and recommends actions before competitors move. Reconciliation: just five percent. Strategic thinking: seventy-five percent. Decision velocity: hours, not weeks. None of this is possible without the Connected foundation. Every stage builds on the one before — and this is what GlobalData was built to deliver.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 15,
    title: "Why GlobalData",
    script: `Why GlobalData? Three things no one else combines. First: high-impact data — ninety-five percent global GDP coverage, analyst-validated, single taxonomy. Second: agentic AI that acts — not just answers questions, but forecasts moves and surfaces what matters. Third: domain experts embedded in your workflows. That's why eight of the top ten FMCG companies trust GlobalData. Now let's talk about the return.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 16,
    title: "The Return",
    script: `The return is measured, not promised. Mondelēz cut decision cycles from six weeks to days — seventy percent faster. Two times higher launch success. Thirty percent lower total cost of ownership. Value compounds as you climb the maturity curve. This isn't theoretical — it's proven. So what does getting started look like?`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 17,
    title: "Get Connected",
    script: `Ninety days to unified intelligence. Five vendors become one platform. Cost drops thirty percent. Decisions accelerate from weeks to days. Every week of delay compounds the gap between you and the brands already moving. The first step is simple.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 18,
    title: "CTA",
    script: `Let's embed foresight into your strategy. Together, we turn connected intelligence into measurable advantage — ensuring every decision compounds long-term competitive strength. The journey starts with a single conversation. Let's have it. Thank you.`,
    voiceId: DEFAULT_VOICE_ID,
  },
];

export const getSalesPitchNarration = (slideId: number): SlideNarration | undefined => {
  return salesPitchNarrations.find((n) => n.slideId === slideId);
};
