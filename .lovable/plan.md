

# Enhanced Narration Script for Slide 5: "Intelligence That Compounds Across the Value Chain"

## Current Problem
The existing narration script (slideId: 5) is too generic and doesn't:
1. **Name each solution directly** (Strategic, Market, Competitive, Innovation, Sales Intelligence)
2. **Explain the value proposition** of each solution combination
3. **Show how combinations resolve specific pains** and create new intelligence opportunities
4. **Walk through the value chain** in a way that matches the visual highlighting

## Current Script Analysis
The current script mentions workflow stages but uses vague language like "Strategy and Portfolio" instead of naming the actual solutions (Strategic + Market Intelligence). It doesn't explain WHY the combinations matter.

---

## Revised Narration Script

Here is the enhanced script that explicitly names each solution, its combination, and the value it creates:

```
Connected Intelligence works across the full value chain. Let me show you how each solution combines to create compounding value.

Stage one: Trend and Strategy. Here, Strategic Intelligence and Market Intelligence work together—we call this combination "Where to Play." Market Intelligence quantifies the opportunity: how big is it, how fast is it growing, what's the trajectory. Strategic Intelligence translates that into priority actions: which forces are shaping this category, what should we do about it. Together, they resolve a critical pain—investment decisions built on assumptions instead of evidence—and create confident, future-proof portfolio choices.

Stage two: White Space. Now Market, Innovation, and Competitive Intelligence combine for "Opportunity Discovery." Market Intelligence shows where growth is. Competitive Intelligence reveals where rivals aren't. Innovation Intelligence validates whether consumers actually want what you're considering. The pain resolved? Gut-feel NPD decisions that lead to forty percent launch failures. The opportunity created? A validated pipeline of whitespace opportunities before R&D commits a single pound.

Stage three: Concept Screening. Here Innovation and Competitive Intelligence combine as "How to Win." Innovation Intelligence tests which concepts resonate with real consumers. Competitive Intelligence ensures your positioning exploits gaps competitors can't easily close. The pain resolved? Products that R&D develops but consumers don't actually want. The opportunity? Two times NPD success rate, with optimal claims validated before creative spend.

Stage four: Market Entry. Sales, Market, and Competitive Intelligence combine for "How to Execute." Sales Intelligence generates retailer-specific sell-in stories—different for Tesco, different for Carrefour. Market Intelligence provides the defensible TAM and growth facts buyers need. Competitive Intelligence shows exactly where you'll differentiate on shelf. The pain resolved? Generic pitches that don't resonate with buyers. The opportunity? Twenty-five percent higher listing success and premium placement.

Stage five: Post-Launch. Sales, Competitive, and Market Intelligence combine for "Continuous Intelligence." Sales Intelligence tracks promo effectiveness and distribution performance. Competitive Intelligence monitors rival responses and pricing moves. Market Intelligence benchmarks share shifts against category dynamics. The pain resolved? Reacting to competitive threats after share is already lost. The opportunity? Thirty percent faster response to market changes, and continuous portfolio optimisation.

The key insight? Each stage builds on the last. The intelligence you generate in Trend and Strategy flows into White Space. The concepts you validate in Screening inform your Market Entry story. And Post-Launch performance feeds back into next year's Strategy. Five stages. Five solution combinations. One connected system where intelligence compounds.
```

---

## Technical Implementation

### File to Modify
`src/data/globalDataNarration.ts`

### Changes Required
Update the `slideId: 5` entry with the new script:

| Line | Change |
|------|--------|
| 82-97 | Replace the existing script with the enhanced version above |

### Timing Synchronization
The visual highlighting in `GDSlide5ValueChain.tsx` already has these timings:
- Stage 0 (Trend & Strategy): 12%
- Stage 1 (White Space): 28%
- Stage 2 (Concept Screening): 45%
- Stage 3 (Market Entry): 62%
- Stage 4 (Post-Launch): 78%

The new script is structured to match this pacing. Each stage is clearly introduced so the visual highlight will sync with when the narrator says "Stage one...", "Stage two...", etc.

---

## Word Count and Timing
- **New script**: ~400 words
- **Estimated duration at 140 wpm**: ~2.9 minutes
- **Current script**: ~95 words (~40 seconds)

This is a significant expansion, which gives proper time to highlight each stage and explain the value. If you want a shorter version, we can trim the "pain resolved / opportunity created" language, but I recommend keeping it for the executive audience.

---

## Summary of What the New Script Achieves

| Stage | Solutions Named | Combination Name | Pain Resolved | Opportunity Created |
|-------|-----------------|------------------|---------------|---------------------|
| Trend & Strategy | Strategic + Market | Where to Play | Investment on assumptions | Confident portfolio choices |
| White Space | Market + Innovation + Competitive | Opportunity Discovery | Gut-feel NPD failures | Validated pipeline |
| Concept Screening | Innovation + Competitive | How to Win | Products consumers don't want | 2x NPD success |
| Market Entry | Sales + Market + Competitive | How to Execute | Generic pitches | 25% higher listings |
| Post-Launch | Sales + Competitive + Market | Continuous Intelligence | Reactive to threats | 30% faster response |

The script ends with a "compounding" message that reinforces the slide's core theme: intelligence generated at each stage flows into the next, creating exponential value.

