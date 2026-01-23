

## Rename "Speed Gap" to "Intelligence Gap" While Preserving Core Messaging

### Summary
Rename the primary concept from "Speed Gap" to "Intelligence Gap" while retaining speed as the central consequence, and adding three additional dimensions: **breadth of intelligence**, **alignment**, and **confidence**. The change is primarily text/copy updates with minimal structural changes.

---

### The New Framework: The Intelligence Gap

**Definition (Updated):**
> The Intelligence Gap is the disconnect between the shopper signals you collect and the confident, aligned action you take—measured in speed, breadth, alignment, and confidence.

**Four Dimensions of the Gap:**

| Dimension | What It Means | Symptom |
|-----------|---------------|---------|
| **Speed** | Time from trend to shelf | "We saw it 12 weeks too late" |
| **Breadth** | Coverage across the shopper journey | "POS says one thing, panels another" |
| **Alignment** | Cross-functional agreement | "R&D and commercial have different views" |
| **Confidence** | Decision conviction | "We launched on gut feel, not shopper truth" |

---

### Changes by File

#### 1. GDSlide0Title.tsx (Agenda Item)
**Line 8 - Update agenda label:**
- Current: `{ num: 2, label: "Intelligence Gap", summary: "From trend to shelf—too slow" }`
- New: `{ num: 2, label: "Intelligence Gap", summary: "Speed, breadth, alignment, confidence" }`

---

#### 2. GDSlide2IntelligenceGap.tsx (Main Slide)

**Title Update (Line 44):**
- Current: `"The Speed Gap: From Trend to Shelf—Too Slow"`
- New: `"The Intelligence Gap: Faster, Broader, Aligned, Confident"`

**Subtitle Update (Line 45):**
- Current: `"The hidden cost between seeing an opportunity and owning it"`
- New: `"The four dimensions separating insight from action"`

**Definition Box Update (Lines 58-65):**
- Current label: `"The Speed Gap"`
- New label: `"The Intelligence Gap"`
- Current definition: `"The delay between spotting a consumer trend and owning it on shelf."`
- New definition: `"The disconnect between the shopper signals you collect and the confident, aligned action you take—measured in speed, breadth, alignment, and confidence."`

**Root Causes Update (Lines 5-24):**
Update the three root causes to map to the four dimensions:

| Current | Updated |
|---------|---------|
| "First: Shopper Signals Fragment" | "First: Breadth—Signals Fragment" |
| "Consumer insights in one system, POS in another" | Keep same |
| "No single shopper truth" | "Incomplete shopper picture" |
| "Then: Teams Debate Sources" | "Then: Alignment—Teams Debate Sources" |
| "Which data do we trust for this launch?" | Keep same |
| "Innovation stalls" | "No shared truth to act on" |
| "Finally: The Shelf Window Closes" | "Finally: Speed—The Shelf Window Closes" |
| "Competitor launched while you validated" | Keep same |
| "Category share lost" | "Confidence eroded" |

**Impacts Update (Lines 26-30):**
Add a fourth impact for "Confidence":

| Current | Updated |
|---------|---------|
| "12wks = 2 missed seasonal windows" | Keep (Speed) |
| "3-5 sources to reconcile" | Keep (Breadth) |
| "40% of NPD misses the moment" | Keep (Alignment) |
| — | Add: "68% of teams lack confidence to act fast" |

---

#### 3. GDSlide3BeforeAfter.tsx (Before/After Slide)

**Before Column Label (Line 54):**
- Current: `"Before: Fragmented Intelligence"`
- New: `"Before: The Intelligence Gap"` (optional, keeps consistency)

**After Column Label (Line 94):**
- Current: `"After: Connected Intelligence"`
- Keep as is (reinforces the solution)

---

#### 4. globalDataNarration.ts (Narration Scripts)

**Slide 0 Script (Lines 14-21):**
- Replace: `"That gap has a name. We call it the speed gap."`
- With: `"That gap has a name. We call it the intelligence gap—and it's measured in four dimensions: speed, breadth, alignment, and confidence."`

**Slide 2 Title (Line 39):**
- Replace: `"The Speed Gap"`
- With: `"The Intelligence Gap"`

**Slide 2 Script (Lines 40-51):**
Update to reference all four dimensions:

```
script: `So where exactly does your brand fall behind? The intelligence gap shows up in four ways.

First, there's a breadth problem. Shopper signals fragment. Consumer insights in one system. POS in another. Social listening somewhere else. You can't see the full shopper journey.

Then there's an alignment problem. Teams debate sources. Your innovation team and commercial team have different views of the same shopper. No shared truth to act on.

Next, there's a confidence problem. Without unified intelligence, you can't commit with conviction. Sixty-eight percent of teams say they lack the confidence to act fast.

And finally, there's the speed problem. The shelf window closes. Your competitor launched while you were still validating.

Twelve weeks of decision latency. Three to five sources to reconcile. Forty percent of new product launches miss the consumer moment.

A global snack brand spent nine months validating a 'protein plus gut health' concept. By launch, three competitors had already captured the position. The insight was right. The intelligence wasn't connected. That's the intelligence gap.`
```

**Slide 3 Script (Line 56):**
- Replace: `"But here's what happens when you close that speed gap."`
- With: `"But here's what happens when you close the intelligence gap."`

---

### Visual Summary of the Four Dimensions

The root causes section can optionally use visual badges or icons to label each dimension:

```text
[BREADTH]    Signals Fragment     → Incomplete picture
[ALIGNMENT]  Teams Debate Sources → No shared truth  
[CONFIDENCE] Decisions Stall      → Gut feel, not data
[SPEED]      Shelf Window Closes  → Category share lost
```

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/components/globaldata-slides/GDSlide0Title.tsx` | Update agenda item 2 summary |
| `src/components/globaldata-slides/GDSlide2IntelligenceGap.tsx` | Update title, subtitle, definition, root causes, impacts |
| `src/data/globalDataNarration.ts` | Update Slide 0, 2, and 3 narration scripts |

---

### Key Messaging Preserved

| Concept | Status |
|---------|--------|
| **Speed** | Retained as one of four dimensions and the primary consequence |
| **Breadth of Intelligence** | Added as first dimension (signals fragmenting) |
| **Alignment** | Added as second dimension (teams debating sources) |
| **Confidence** | Added as third dimension (inability to act with conviction) |
| **Consumer/Shopper Focus** | Fully preserved in all examples and language |

---

### Optional Enhancements (Minimal Additional Work)

1. **Add dimension badges** to the root causes cards (e.g., a small "BREADTH" label on the first card)
2. **Update the impacts grid** to show 4 items (add "68% lack confidence") in a 2x2 layout instead of 3 columns

