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
    script: `Welcome. This is GlobalData Connected Intelligence — a platform built for CMOs, Chief Strategy Officers, and category leaders at the world's largest consumer brands.

Over the next few minutes, I'll walk you through how the brands winning today — Unilever, PepsiCo, Nestlé, Mondelēz — aren't winning because they have more data. They're winning because they have connected intelligence that lets them move faster, align better, and act with conviction.

Let's begin.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 1,
    title: "Hook",
    script: `Here's the question every consumer brand needs to answer: How do you turn constant change into faster, more confident growth and better category performance?

Your consumers are changing faster than your insights can track. The brands that win aren't guessing — they're operating with a unified view that connects every signal, every team, and every decision.

This presentation is built for CMOs, CSOs, and category leaders. And the insight we'll share is trusted by eight of the top ten FMCG companies globally.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 2,
    title: "Journey Overview",
    script: `Let me set the stage for what we'll cover today. Think of this as a journey — from understanding the market pressure you face, through the intelligence gap that's costing you growth, to the connected intelligence platform that closes it.

We'll start with why markets reward speed. Then we'll look at where growth is actually lost — the Intelligence Gap. We'll show you the transformation from fragmented to connected. Then we'll introduce the five dimensions of connected intelligence, walk through the value chain, assess your maturity, and finish with the return on investment and your next steps.

Nine stops. One clear thread: how to turn intelligence into competitive advantage.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 3,
    title: "Markets Reward Speed",
    script: `Here's the growth reality every consumer brand faces.

Consumer behaviour shifts three times faster than insight cycles can track. Innovation and go-to-market windows are forty percent narrower than five years ago. And competitors scale twice as fast with fewer assets.

Here's a case in point. In 2023, a major CPG company missed the protein snacking wave entirely. Their insight, innovation, and sales teams had three different views of the opportunity. By the time they aligned, Grenade and Barebells had claimed the shelf.

This is the paradox: organisations have more insight than ever, yet less confidence to act. Data abundance hasn't created clarity — it's created noise, debate, and missed windows.

What do the winners do differently? Unilever, PepsiCo, and Nestlé don't have more data. They have unified truth — connected intelligence that moves the entire organisation together.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 4,
    title: "Where Growth Is Lost",
    script: `So where exactly is growth being lost? We call it the Intelligence Gap — and it manifests across four dimensions.

First, breadth. Signals fragment across tools, teams, and vendors. The average decision involves three to five conflicting data sources with no single source of truth.

Second, alignment. Leaders debate data instead of committing to direction. The result? Forty percent of launches miss their optimal window. That's analysis paralysis at enterprise scale.

Third, speed. Decisions arrive late — twelve-plus weeks of average decision latency. By the time you act, the window has closed.

And fourth, confidence. Sixty-eight percent of teams lack the conviction to act decisively. They hedge instead of committing, and action gets diluted.

Here's a real example. A top-ten FMCG company spent twelve weeks preparing for a quarterly business review — not generating insight, but reconciling Nielsen, Kantar, and Mintel into one coherent story.

When leaders debate data instead of making decisions, windows close and competitors move. That's where confidence dies.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 5,
    title: "From Fragmented to Connected",
    script: `Let's look at what transformation actually looks like. This is Ferrero's story — from fragmented intelligence to connected decisions.

Before: twelve-plus weeks to decision. Three to five sources to reconcile. Siloed insights fragmented across tools. Different taxonomies, no common language, manual reconciliation, time-consuming alignment. The result? Slow, debated decisions and analysis paralysis.

After: days to decision. One source of truth. Shared taxonomy, embedded workflows, automated orchestration. The result? Confident, fast action and aligned decisions.

And here's the consolidation advantage: replace Nielsen, Kantar, Mintel, Euromonitor, and Circana with one connected platform — at thirty percent lower total cost of ownership. That's not just efficiency. That's competitive advantage.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 6,
    title: "Connected Intelligence: Sales",
    script: `Now let me introduce Connected Consumer Intelligence — one solution that moves faster, aligns better, and acts with confidence.

We'll start with Sales Intelligence — and I want to introduce you to Ava, your AI intelligence partner. Unlike generic AI, Ava understands your category dynamics. She's built on analyst-validated consumer data across one hundred and ten markets, with ninety-five percent global GDP coverage, a single taxonomy, and real-time updates.

The job to be done is clear: when you're preparing a sell-in pitch for Tesco or Carrefour, you want to know exactly what story will land with that buyer — so you maximise listings and get the shelf placement you need.

The pain? Generic sell-in decks that don't resonate with buyers. The solution? Retailer-specific insights and stories. The result? Twenty-five percent higher listing success.

Here's a real example: a multinational snack company secured one hundred percent of target listings. Tesco gave them premium placement. Carrefour added them to a health-focused end-cap. That's what connected sales intelligence delivers.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 7,
    title: "Connected Intelligence: Strategic",
    script: `Strategic Intelligence — the second dimension of Connected Consumer Intelligence.

The job to be done: when you need to anticipate change and determine where to act next, you want to understand what's emerging, converging, and becoming material — so you make faster, more confident, future-proof strategic decisions.

The pain? Being blindsided by macro forces — AI regulation, sustainability shifts, geopolitical disruption. The solution? Thematic intelligence tracking high-impact forces. The result? Material implications identified twelve-plus months ahead.

Real example: a top-five global beverage company prioritised sustainability compliance eighteen months ahead of regulation. They avoided fifty million euros in rushed reformulation costs. That's foresight turning into competitive advantage.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 8,
    title: "Connected Intelligence: Market",
    script: `Market Intelligence — the third dimension.

The job to be done: when you need to quantify an opportunity or ground a plan in evidence, you want to access authoritative market size, growth, and performance benchmarks — so that teams align around a shared, defensible view.

The pain? Plans built on estimates and assumptions. The solution? Authoritative market data and forecasts. The result? Investment cases built on defensible market facts.

Real example: a European personal care leader aligned all regions in one week. The board approved a twenty-five million euro investment with ninety percent confidence in the total addressable market. No debate. No reconciliation. Just aligned action.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 9,
    title: "Connected Intelligence: Competitive",
    script: `Competitive Intelligence — the fourth dimension.

The job to be done: when a competitor launches a new SKU or runs a promotion, you want to know their strategy and likely next moves — so you can respond, or pre-empt, before you lose share.

The pain? Finding out about a competitor launch from a retailer, not from your own team. The solution? Real-time competitive tracking. The result? Three weeks of earlier competitor visibility.

Real example: a global confectionery company spotted a competitor reformulating their hero SKU. They responded with clean label claims at ten percent lower price and recovered two-and-a-half points of share in six months. That's intelligence in action.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 10,
    title: "Connected Intelligence: Innovation",
    script: `Innovation Intelligence — the fifth and final dimension.

The job to be done: when you have five product concepts competing for R and D budget, you want to validate which resonates most with target consumers — so you don't waste twelve months and two million pounds on a concept that flops at launch.

The pain? Gut-feel NPD decisions that lead to forty percent launch failures. The solution? Consumer-validated concept screening. The result? Two times NPD success rate.

Real example: a leading European dairy company used innovation intelligence to launch high-protein and kids variants. Both hit top five in their category within twelve weeks of launch. That's connected intelligence compounding across the value chain.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 11,
    title: "Value Chain Stage 1: Strategic",
    script: `Now let's see how these five intelligence dimensions work together across the value chain. I'll tell you a real story.

A leading beverage company spotted energy drinks trending among Gen Z wellness seekers. Here's how connected intelligence took them from trend signal to shelf presence in sixteen weeks.

Stage one: Strategic Intelligence. The question: is this trend material, or noise?

The job: anticipate change and determine where to act next. The challenge: being blindsided by macro forces. The solution: thematic intelligence tracking high-impact forces. The result: material implications identified twelve-plus months ahead.

Strategic Intelligence spotted the trend. Now let's validate it.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 12,
    title: "Value Chain Stage 2: Market",
    script: `Stage two: Market Intelligence. The question: where's the demand strongest?

The job: quantify the opportunity and ground the plan in evidence. The challenge: plans built on estimates and assumptions. The solution: authoritative market data and forecasts. The result: investment cases with defensible market facts.

Germany and the UK lead. Grocery is three times the opportunity. Market Intelligence validated the demand. Now let's test what will win.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 13,
    title: "Value Chain Stage 3: Innovation",
    script: `Stage three: Innovation Intelligence. The question: what product will win?

The job: validate which concept resonates most with target consumers. The challenge: gut-feel NPD decisions that lead to forty percent launch failure. The solution: consumer-validated concept screening. The result: two times NPD success rate.

Clean-label, low-sugar, functional claims win. Innovation Intelligence tested what will win. Now let's find the competitive gap.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 14,
    title: "Value Chain Stage 4: Competitive",
    script: `Stage four: Competitive Intelligence. The question: where's the gap to exploit?

The job: know a competitor's strategy and likely next moves. The challenge: finding out about a competitor launch from a retailer. The solution: real-time competitive tracking. The result: three weeks of earlier competitive visibility.

No player owns natural energy in the convenience channel. Competitive Intelligence found the white space competitors missed. Now let's land the listings.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 15,
    title: "Value Chain Stage 5: Sales",
    script: `Stage five: Sales Intelligence. The question: how do we win listings?

The job: know exactly what story will land with each buyer. The challenge: generic sell-in decks that don't resonate. The solution: retailer-specific insights and stories. The result: twenty-five percent higher listing success.

Tesco responds to sustainability data. Carrefour responds to Gen Z insights. Sales Intelligence lands the listings.

From trend signal to shelf presence in sixteen weeks. That's the power of intelligence that compounds across the value chain. Each stage builds on the last, and the cumulative effect is what separates market leaders from market followers.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 16,
    title: "Maturity Stage 1: Fragmented",
    script: `Now let's talk about where you are on the intelligence maturity journey — because the further you progress, the faster your intelligence compounds.

Stage one: Fragmented. This is where most organisations start. Hunting for answers with siloed intelligence. Multiple data sources with no unified view. Teams working in silos with conflicting insights, spending more time reconciling than deciding.

Key capabilities at this stage: siloed analytics tools per function, manual data reconciliation across sources, periodic monthly or quarterly reporting cycles, team-specific dashboards and definitions, five-plus vendor contracts to manage, separate taxonomies per data source, and insights shared via email and PowerPoint.

Decision velocity: six to eight weeks. Time allocation: fifty percent reconciliation, thirty-five percent analysis, and just fifteen percent strategic thinking.

Strong tools — but siloed. The intelligence exists, it just can't flow.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 17,
    title: "Maturity Stage 2: Connected",
    script: `Stage two: Connected. Working from one truth with a unified platform.

This is where the magic happens. A unified data platform delivering one source of truth. All teams access the same intelligence in real-time, eliminating reconciliation entirely.

Key capabilities: single taxonomy across all data sources, real-time data integration and updates, cross-functional self-service dashboards, and a unified market and category view.

The platform shift: one platform replacing multiple vendors, consistent definitions and hierarchies, and self-service analytics for all teams.

Decision velocity drops to two to three weeks. Time allocation shifts dramatically: only twenty percent reconciliation, forty percent analysis, and forty percent strategic thinking.

This is the platform shift — and it's where most of the cost savings and alignment improvements happen.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 18,
    title: "Maturity Stage 3: Optimized",
    script: `Stage three: Optimised. Deciding in days, with intelligence in action.

This is where Ava — your AI intelligence partner — becomes central. She anticipates shifts and surfaces insights before you ask for them.

Key capabilities: automated anomaly and trend detection, AI-generated insight summaries, workflow triggers and smart alerts, and predictive recommendations for action.

The platform at this stage: Ava AI assistant embedded in workflows, custom alert rules and thresholds, and automated reporting and distribution.

Decision velocity: three to five days. Time allocation: just ten percent reconciliation, thirty percent analysis, and sixty percent strategic thinking.

You're no longer reacting. You're deciding at the speed of the market.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 19,
    title: "Maturity Stage 4: Predictive",
    script: `Stage four: Predictive. Anticipating the market with AI-driven foresight.

AI anticipates market shifts and recommends actions before competitors move. Ava anticipates shifts. Strategy becomes proactive, not reactive.

Key capabilities: market trend and disruption forecasting, competitive move prediction six-plus weeks ahead, scenario modelling and simulation, and prescriptive recommendations with confidence scores.

The platform at this stage: predictive AI models trained on your specific market, strategic foresight dashboards, and an early warning system for market shifts.

Decision velocity: hours, not weeks. Time allocation: just five percent reconciliation, twenty percent analysis, and seventy-five percent strategic thinking.

This is the destination. And every stage on the journey compounds the value of the one before it.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 20,
    title: "Why GlobalData",
    script: `So why GlobalData? What makes this different from every other intelligence provider?

Three things.

First: high-impact data. Real-time, trusted, and actionable. Coverage of ninety-five percent of global GDP. Analyst-validated and unified into a single taxonomy. Earlier signals, clearer context, and decisions you can trust.

Second: AI that accelerates execution. This isn't AI that generates reports. This is agentic AI that acts — forecasting competitor moves, surfacing answers in seconds, and guiding your teams to act when timing matters most.

Third: domain experts who turn insight into impact. Industry specialists, journalists, and advisors embedded in your workflows — decoding complexity and transforming intelligence into confident action.

Data, AI, and human expertise. Connected. That's why eight of the top ten FMCG companies — including Nestlé, Unilever, PepsiCo, and Mondelēz — trust GlobalData.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 21,
    title: "The Return",
    script: `Let's talk about the return: speed, success, and savings.

Speed to decision: Mondelēz cut decision cycles from six weeks to days. Seventy percent faster decision cycles.

Launch success: bets informed by connected data, not siloed opinions. Two times higher launch success rate.

Cost of intelligence: one contract, one taxonomy, one source of truth. Thirty percent lower total cost of ownership.

When Mondelēz consolidated their intelligence stack, they measured impact across all three dimensions — and the value compounded as they climbed the maturity curve. From fragmented to connected to optimised to predictive, each stage multiplied the returns of the previous one.

This isn't theoretical. This is measured, proven impact.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 22,
    title: "Get Connected",
    script: `The first step is to get connected. Escape the fragmentation trap and unlock thirty percent cost savings.

The shift from fragmented to connected is where the transformation begins — ninety days to unified intelligence.

What changes? Five vendors become one platform. Total cost of ownership drops by thirty percent. Decision cycles accelerate from twelve-plus weeks to days. Debate and reconciliation become confidence and alignment. Siloed insights become unified intelligence.

Every week of delay compounds. The brands that move first define the category. The brands that wait, follow.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 23,
    title: "Let's Begin",
    script: `Let's embed foresight into your strategy.

Together, we can turn foresight into measurable advantage — ensuring every decision compounds long-term competitive advantage.

The journey starts with a single conversation. Let's have it.

Thank you for your time.`,
    voiceId: DEFAULT_VOICE_ID,
  },
];

export const getSalesPitchNarration = (slideId: number): SlideNarration | undefined => {
  return salesPitchNarrations.find((n) => n.slideId === slideId);
};
