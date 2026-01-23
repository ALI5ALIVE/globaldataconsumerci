

## Pivot from "Shopper" to "Consumer" Intelligence Terminology

### Summary
Update the GlobalData slide deck to shift terminology from "shopper insights" to "consumer insights" level, making the narrative sharper and more focused on:
1. **The Intelligence Gap** - the core problem consumer brands face
2. **Connected Intelligence** - the unified solution GlobalData provides
3. **Tangible Brand Outcomes** - what the brand actually gets
4. **Clear Solution Descriptions** - how each module delivers value

---

### Terminology Mapping

| Current (Shopper-centric) | New (Consumer-centric) |
|---------------------------|------------------------|
| "shopper" | "consumer" |
| "shopper journey" | "consumer journey" |
| "shopper truth" | "consumer truth" |
| "shopper signals" | "consumer signals" |
| "shopper insights" | "consumer insights" |
| "basket drop" | "purchase decision" or "market action" |
| "shopper intelligence" | "consumer intelligence" |

---

### Files to Update

#### Slide Components (10 files)

| File | Key Changes |
|------|-------------|
| `GDSlide0Title.tsx` | Headline: "Your Shoppers" → "Your Consumers"; agenda summaries; executive takeaway |
| `GDSlide1GrowthReality.tsx` | Pain points: "Your Shopper Switched" → "Your Consumer Switched"; "Shopper Paradox" → "Consumer Paradox" |
| `GDSlide2IntelligenceGap.tsx` | Definition: "shopper signals" → "consumer signals"; detail: "shopper truth" → "consumer truth" |
| `GDSlide3BeforeAfter.tsx` | Labels: "Shopper signals scattered" → "Consumer signals scattered"; metrics |
| `GDSlide4Proposition.tsx` | Title, subtitle, replaces list, bottom callout |
| `GDSlide5ValueChain.tsx` | Title: "From Shopper Insight to Basket Drop" → "From Consumer Insight to Market Action"; questions; callout |
| `GDSlide6ValuePyramid.tsx` | Stage headlines and descriptions containing "shopper" |
| `GDSlide8ROI.tsx` | Pillar descriptions: "Shopper-validated" → "Consumer-validated" |
| `GDSlide9WhyGlobalData.tsx` | Differentiators, closing truths, final takeaway |
| `GDSlide10Solutions.tsx` | No shopper references found |

#### Data Files (2 files)

| File | Key Changes |
|------|-------------|
| `src/data/globalDataNarration.ts` | All 9+ narration scripts need terminology updates |
| `src/data/solutionDeepDives.ts` | JTBD statements, pain points, examples, use cases |

---

### Slide-by-Slide Changes

#### Slide 0 - Title
```typescript
// Headline
"Your Shoppers Are Changing" → "Your Consumers Are Changing"

// Agenda items
"Your shoppers are changing faster" → "Your consumers are changing faster"
"One shopper truth, faster wins" → "One consumer truth, faster wins"
"See the full shopper journey" → "See the full consumer journey"

// Executive takeaway
"they see the shopper's journey as one connected story" 
→ "they see the consumer's journey as one connected story"
```

#### Slide 1 - Growth Reality
```typescript
// Pain points
{ title: "Your Shopper Switched" → "Your Consumer Switched" }

// Paradox box
"The Shopper Paradox" → "The Consumer Paradox"
"more shopper data" → "more consumer data"
"Your shopper insights" → "Your consumer insights"

// Bottom callout
"full shopper journey" → "full consumer journey"
```

#### Slide 2 - Intelligence Gap
```typescript
// Definition
"shopper signals you collect" → "consumer signals you collect"

// Root causes
"Incomplete shopper picture" → "Incomplete consumer picture"
"Gut feel replaces shopper truth" → "Gut feel replaces consumer truth"
```

#### Slide 3 - Before/After
```typescript
// Before items
"Shopper signals scattered" → "Consumer signals scattered"
"Conflicting shopper views" → "Conflicting consumer views"

// After items
"One shopper truth" → "One consumer truth"
"Test with real shoppers first" → "Test with real consumers first"

// Metrics
"Shopper-tested" → "Consumer-tested"
```

#### Slide 4 - Proposition
```typescript
// Title & subtitle
"See the Full Shopper Journey. Act First." 
→ "See the Full Consumer Journey. Act First."

"Understand your shopper faster" → "Understand your consumer faster"

// Replaces list
"See the full shopper journey—from trend emergence to basket drop"
→ "See the full consumer journey—from trend emergence to purchase decision"

// Central value prop
"one connected view of your shopper"
→ "one connected view of your consumer"

// Bottom callout
"understanding your shopper faster than anyone else"
→ "understanding your consumer faster than anyone else"
```

#### Slide 5 - Value Chain
```typescript
// Title
"From Shopper Insight to Basket Drop"
→ "From Consumer Insight to Market Action"

// Stage questions
"Which shoppers are switching?" → "Which consumers are switching?"
"Will shoppers pay more for clean-label?" → "Will consumers pay more for clean-label?"

// Callout
"same shopper" → "same consumer"

// Stats
"1 Shopper truth" → "1 Consumer truth"
```

#### Slide 6 - Value Pyramid (Maturity Curve)
```typescript
// Multiple stage descriptions
"shopper intelligence maturity" → "consumer intelligence maturity"
"One Shopper Truth Emerges" → "One Consumer Truth Emerges"
"shared shopper truth" → "shared consumer truth"
"shopper insights" → "consumer insights"
"Your Shopper Data Doesn't Connect" → "Your Consumer Data Doesn't Connect"
// (15+ instances in layersData)
```

#### Slide 8 - ROI
```typescript
// Pillar descriptions
"Shopper-validated" → "Consumer-validated"
"more products shoppers reach for" → "more products consumers choose"
"don't resonate with shoppers" → "don't resonate with consumers"
```

#### Slide 9 - Why GlobalData
```typescript
// Differentiators
"The same shopper language" → "The same consumer language"
"One shopper truth across your entire value chain" → "One consumer truth across your entire value chain"
"40 years of shopper, category, and competitive intelligence" → "40 years of consumer, category, and competitive intelligence"

// Closing truths
"Shopper insight alone" → "Consumer insight alone"
"Connected shopper intelligence" → "Connected consumer intelligence"

// Final takeaway
"see shoppers as one connected journey" → "see consumers as one connected journey"
"see shopper change first" → "see consumer change first"
```

#### Data: solutionDeepDives.ts
```typescript
// Innovation Intelligence
"target shoppers" → "target consumers"
"Shopper-validated concept screening" → "Consumer-validated concept screening"
"real shoppers" → "real consumers"
"shopper preferences" → "consumer preferences"
"shopper data" → "consumer data"

// Market Intelligence
"real shopper demand" → "real consumer demand"
"underserved shopper segments" → "underserved consumer segments"

// Sales Intelligence
"shopper acquisition data" → "consumer acquisition data"
```

#### Data: globalDataNarration.ts
All narration scripts (slides 0-9+) need the same terminology updates to maintain consistency between what users see and what they hear.

---

### Sharpening the Narrative

Beyond the terminology swap, the following messaging refinements will make the value proposition crisper:

| Element | Sharpened Focus |
|---------|-----------------|
| **Intelligence Gap** | Emphasize the 4 dimensions (Breadth, Alignment, Speed, Confidence) as the core problem |
| **Connected Intelligence** | Position as the single unified solution that closes all 4 gaps |
| **Brand Outcomes** | Lead with what brands get: faster decisions, higher hit rates, fewer failed launches, category leadership |
| **Solutions** | Each module maps to a specific gap and delivers a measurable outcome |

---

### Implementation Order

1. **Slide components** (GDSlide0 → GDSlide9) - Update all visible copy
2. **Data files** - Update narration scripts and solution deep dives
3. **Verify consistency** - Ensure spoken narration matches visual content

---

### Technical Details

**Total files to modify**: 12 files
- 10 slide components in `src/components/globaldata-slides/`
- 2 data files in `src/data/`

**No structural changes** - This is purely a copy/terminology update. All existing functionality, animations, and layouts remain unchanged.

**Estimated changes**: ~100+ string replacements across all files

