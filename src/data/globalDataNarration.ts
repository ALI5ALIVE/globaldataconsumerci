export interface SlideNarration {
  slideId: number;
  title: string;
  script: string;
  voiceId: string;
}

const DEFAULT_VOICE_ID = "JBFqnCBsd6RMkjVDRZzb"; // George - professional British male

export const globalDataNarrations: SlideNarration[] = [
  {
    slideId: 0,
    title: "Your Shoppers Are Changing",
    script: `Let me ask you something. When did your shopper last switch to a competitor—and when did you find out?

For most consumer brands, there's a gap. Not a small one. A gap measured in weeks, sometimes months, between seeing a trend and having a product on shelf.

That gap has a name. We call it the speed gap. And the brands winning shelf space, share of stomach, and consumer loyalty right now? They've already closed it.

Over the next few minutes, I'm going to show you exactly how—and why it matters more for your brand right now than ever before.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 1,
    title: "Your Shoppers Are Changing Faster",
    script: `Here's what's actually happening in your category right now.

Your shopper switched to a competitor—and you found out twelve weeks later. Sixty-seven percent of Gen Z shoppers say they'll switch brands if a competitor is more relevant to their values. And the average trend window? Eighteen months before it peaks. That's the runway you have to own it.

Meanwhile, your competitor's limited-edition SKU just captured three percent share while you were still validating the concept.

The paradox is striking: you have more shopper data than ever—POS, panels, social listening—yet less confidence in your next move. Your shopper insights say one thing. Your sales data says another. And your competitor just launched anyway.

The brands winning right now don't just see trends first. They see the full shopper journey and act before competitors can react.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 2,
    title: "The Speed Gap",
    script: `So where exactly does your brand fall behind? There's a pattern we see with consumer companies again and again.

First, shopper signals fragment. Consumer insights live in one system. POS data in another. Social listening somewhere else. Every NPD decision starts with "which data source should we trust?"

Then, instead of acting, teams debate sources. Your innovation team and commercial team have different views of the same shopper.

And finally—inevitably—the shelf window closes. Your competitor launched while you were still validating.

Look at these numbers. Twelve weeks of decision latency equals two missed seasonal windows. Three to five sources to reconcile per NPD decision. Forty percent of new product launches miss the consumer moment they were designed for.

A global snack brand spent nine months validating a 'protein plus gut health' concept. By launch, three competitors had already captured the position. The insight was right. The timing was wrong. That's the speed gap.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 3,
    title: "One Shopper Truth",
    script: `But here's what happens when you close that speed gap.

Look at the left side of your screen—this is where most brands are today. Shopper signals scattered across POS, panels, and social. Conflicting views of the same consumer. Weeks spent validating while competitors launch.

Now look at the right side. One shopper truth. Unified across every touchpoint. Trend to concept in days, not weeks. Validated before you commit. First to shelf.

The transformation isn't marginal—it's the difference between owning the category moment and watching your competitor take it.

Twelve weeks becomes three days to validate a flavour concept—before your competitor locks in the shelf space. Gut-feel launches become shopper-tested launches with double the success rate. And innovation waste? Thirty percent less unsold inventory because you tested with real shoppers first.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 4,
    title: "See the Full Shopper Journey",
    script: `This is what it looks like when you see the full shopper journey—and act first.

It's not another consumer panel you can't connect to your other data. Not another dashboard that conflicts with what you already have. Not another point solution that creates more reconciliation work.

This is about seeing your shopper from trend emergence to basket drop. Knowing why a product is winning—or losing—across every touchpoint. Aligning brand, innovation, and commercial teams around the same consumer truth.

What you're looking at is the end of fragmented shopper views. The end of weeks spent reconciling data before you can even start the strategy conversation.

This isn't about better data. It's about understanding your shopper faster than anyone else—and acting on it before they've moved on to the next thing.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 5,
    title: "From Shopper Insight to Basket Drop",
    script: `Now let me show you the questions your brand actually asks—and how this answers them across the entire journey.

Look at this flow. Five stages. The real questions consumer brands face every day.

In Strategy and Portfolio: Which categories are premiumizing? Where should we play in plant-based? Which shoppers are switching and why?

In Innovation and Product: What flavour and format combinations are trending with our target demo? What's the unmet need in protein snacks? Will shoppers actually pay more for clean-label?

In Brand, Pricing and Claims: Can we credibly claim both 'high protein' and 'clean label' at this price point? How do we position against competitors who got there first?

In Go-to-Market and Sales: Which retailer indexes highest for this SKU? What's the right launch story for Tesco versus Carrefour? What sell-in materials actually convert?

And In-Market Performance: Why did this SKU underperform in Tesco but overperform in Carrefour? How do we respond to a competitor promo? Which SKUs should we delist?

See that connecting line? That's what changes everything. R&D, marketing, and commercial all see the same shopper—so the product you develop, the claims you make, and the story you tell retailers all reinforce each other.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 6,
    title: "Where Is Your Brand Today?",
    script: `Now let's get honest about where your brand actually is. What you're looking at is a framework for assessing your shopper intelligence maturity.

We start at the base. Stage five: Firefighting. This is where most consumer brands are. Your brand manager is using a deck from last quarter about last quarter's shopper. POS says one thing, consumer panel says another, social listening says a third. You found out about the trend after your competitor launched.

Move up to stage four: Structured Silos. Strong tools within each function—market, innovation, consumer, competitive. But they don't connect. Your innovation team and commercial team have different views of the same shopper. Better data, but the same debates.

Stage three is where connection begins. Connected. One shopper truth starts to emerge—shared by R&D, marketing, and retail execution. Reconciliation time drops sixty percent. Teams stop debating data and start acting on shoppers.

Stage two: Embedded. Shopper intelligence isn't a report you request—it's in the workflow. Trend to concept in days, not weeks. NPD decisions validated against consistent shopper truth.

And at the apex—stage one: Agentic. This is the vision. AI that detects signals and orchestrates recommendations while humans approve the strategic moves. Detect, Human, Execute—in continuous loops. You're not reacting to trends anymore. You're seeing what shoppers want next before they search for it.

Most brands are at stage five or four. The question is: how fast can you climb?`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 7,
    title: "From Trend-Spotting to First-Mover",
    script: `So what does the journey actually look like over time? This is your roadmap from trend-spotting to first-mover.

Watch the curve. At stage one—Firefighting—you're at the bottom. Your shopper data doesn't connect. You're finding out about trends after competitors have already launched. High effort, missed shelf windows.

By stage two—Structured Silos—you've got structure. See the curve starting to rise? But you're still reconciling across sources. The debates about "which data is right" continue.

Stage three—Connected—is where the breakthrough happens. Notice the curve accelerating? One shopper truth emerges. R&D and retail see the same consumer. This is the platform shift.

Stage four—Embedded—is transformational. Look at that hockey stick starting to form. Shopper intelligence is in the workflow. Twelve weeks becomes three days to validate a concept.

And stage five—Agentic—that's the exponential curve shooting upward. AI detects what shoppers want next. Humans approve the strategic moves. You're on shelf before competitors even see the opportunity.

Here's what I want you to understand: most brands don't need more shopper data. They need a clear path from seeing trends to owning them. This curve is that path. And the sooner you start climbing, the more category moments you own.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 8,
    title: "Fewer Failed SKUs. Faster Wins.",
    script: `Let's talk about what this means for your brand in real terms. Because the value isn't theoretical—it's measurable. And it starts immediately.

Look at these three pillars.

First, speed to shelf. Months to validate becomes days to act. Seventy percent faster from trend to launch. Think about what that means: responding to a competitive launch in days, not months. Validating a flavour concept before your competitor locks in the shelf space.

Second, fewer failed SKUs. Gut-feel launches become shopper-validated launches. Double the success rate. Fewer products that sit on shelf. More products that shoppers actually reach for.

Third, leaner innovation. Wasted R&D becomes a focused pipeline. Thirty percent less unsold inventory. Less capital misallocated on concepts that don't resonate with shoppers.

And here's what compounds: every stage up the maturity curve means faster time-to-shelf, fewer failed launches, and more shelf space won. The sooner you start, the more category moments you own. This isn't a five-year transformation story. This is measurable value in six months.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 9,
    title: "Trusted by Leading Consumer Brands",
    script: `Now, why GlobalData? Why are we the partner for your brand?

Look at these three differentiators.

First—and this is what makes everything else possible—the unified taxonomy. The same shopper language used by eight of the top ten global FMCG companies. One truth across your entire value chain. No more reconciling data sources. No more debates about whose numbers are right.

Second—the proprietary data. Forty years of shopper, category, and competitive intelligence across two hundred plus markets. Data no competitor can replicate. This isn't aggregated third-party data. This is what the world's leading consumer brands already rely on.

Third—Ava plus a thousand analysts. AI that's analyzed ten million plus consumer data points, amplified by human expertise. Insights your team would take months to find—delivered in hours.

Here's the imperative for consumer brand leaders: the brands that see shoppers as one connected journey—from trend to shelf to basket—will own the next generation of category moments. The ones that don't? They'll keep finding out about trends after competitors have already launched.

The brands that win will be the ones who see shopper change first, act together, and own the shelf before competitors react.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 10,
    title: "From Weak Signal to Winning Launch",
    script: `Let me show you exactly how this works for a real consumer brand challenge.

Imagine you're a global FMCG brand. You've spotted an opportunity in high-protein on-the-go snacking. The segment is growing fourteen percent year over year, but three competitors already have two or more SKUs each. You need to move fast—and get it right.

Here's your target shopper: urban European commuters, twenty-five to forty, health-conscious but time-poor.

Watch how the intelligence connects.

Strategic Intelligence defines the question: Where can we launch with confidence in the next twelve months? This sets the direction.

Market Intelligence identifies the opportunity. Savory, high-protein snacks for urban commuters. A fast-growing segment that's under-served by current offerings.

Competitive Intelligence maps where competitors are positioned—and where the gaps are. Three competitors, but none with clean-label positioning at an accessible price point.

Innovation Intelligence recommends the product. A savory protein crisp with clean-label credentials. Validated with real shoppers before you commit a single R&D dollar.

Sales Intelligence generates the enablement. Retailer-specific stories for Tesco versus Carrefour. Sell-in materials that show exactly why this SKU wins with their shoppers.

The result? Launched in six months versus the typical fourteen. Captured number two position in the segment within eight weeks.

That's the difference between fragmented point solutions and connected shopper intelligence. That's what we're here to help you build.`,
    voiceId: DEFAULT_VOICE_ID,
  },
  {
    slideId: 11,
    title: "Explore Your Intelligence Needs",
    script: `Now let's get specific. What you're looking at are deep dives into each of our five core intelligence solutions—with real consumer brand examples and exact pain-to-capability mapping.

Click on any solution tab to explore. Let me walk you through the pattern.

Each solution starts with a Job to Be Done. When you're facing a specific challenge—like setting portfolio priorities or preparing a retailer pitch—what do you actually need? What outcome are you trying to achieve?

Then we map the pains you're feeling today to the specific capabilities that solve them—and the measurable outcomes you can expect.

Take Strategic Intelligence. The pain: portfolio decisions based on outdated category reports. The capability: real-time category growth tracking. The outcome: six-month earlier visibility into category shifts.

And we show you exactly how a real consumer brand used this. A top-five beverage company needed to prioritize between functional hydration and alcohol-free spirits. They used Strategic Intelligence to map demand curves and competitor signals across twelve markets. Result: captured four percent category share in eighteen months.

The same pattern applies across all five solutions. Market Intelligence for trend validation. Competitive Intelligence for anticipating competitor moves. Innovation Intelligence for shopper-validated concept screening. Sales Intelligence for retailer-specific sell-in stories.

Explore each tab. See which solutions map to your most urgent priorities. And when you're ready—let's discuss how to build your roadmap.`,
    voiceId: DEFAULT_VOICE_ID,
  },
];

export const getGlobalDataNarration = (slideId: number): SlideNarration | undefined => {
  return globalDataNarrations.find((narration) => narration.slideId === slideId);
};
