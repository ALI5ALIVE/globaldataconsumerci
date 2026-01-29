

# Revised Plan: Slide 7 - "The Intelligence Maturity Ladder"

## Strategic Positioning

The key insight from your feedback: **AI is available at all stages 2-5, but its value is fundamentally different.**

| Stage | AI Status | The Reality |
|-------|-----------|-------------|
| **1 - Fragmented** | AI Blocked | Can't use AI - no connected data to learn from |
| **2 - Managed** | AI Siloed | AI automates individual tools but can't learn across functions |
| **3 - Connected** | AI Aligned | AI works across 5 best-in-class solutions with one taxonomy |
| **4 - Optimised** | AI Operational | AI embedded in workflows, recommending actions |
| **5 - Predictive** | AI Agentic | AI anticipates and acts proactively |

The core message: **As you climb, the value of your intelligence compounds. Not just faster—fundamentally different capability.**

---

## Distinct Objectives: Slide 7 vs Slide 8

| Aspect | Slide 7 (Pyramid) | Slide 8 (Curve) |
|--------|-------------------|-----------------|
| **Question** | "Where are you now?" | "How does work change as you climb?" |
| **Focus** | Position & capability diagnosis | Operational transformation journey |
| **AI Message** | AI exists at 2-5 but value is siloed until Stage 3 | How AI changes daily workflows at each stage |
| **Key Insight** | Stage 3 = 5 best-in-class solutions, one taxonomy | Time allocation shift (60% reconciliation → 75% strategy) |

---

## Files to Modify

### 1. `src/components/globaldata-slides/GDSlide6ValuePyramid.tsx`

**Title & Subtitle Changes:**
- **Title:** `"The Intelligence Maturity Ladder: Where Are You?"`
- **Subtitle:** `"The higher you climb, the more your intelligence compounds—critical for future success."`

**layersData Updates:**

**Stage 1 (FRAGMENTED):**
- `whyItMatters`: "AI cannot function on fragmented data—you're locked out of the intelligence advantage entirely. This is where most organisations start, but staying here guarantees falling behind."

**Stage 2 (MANAGED):**
- Add AI context to `whatItLooksLike`: "AI may exist within individual tools—but it's siloed. It automates what you already have, not enabling new ways of working."
- `whyItMatters`: "AI at this stage just automates silos—it can't learn across the organisation. You're optimising fragments while competitors build connected advantages."

**Stage 3 (CONNECTED):**
- Emphasize the 5 solutions + taxonomy in `whatItLooksLike`:
  - "Five best-in-class intelligence solutions—Market, Consumer, Competitive, Innovation, Commercial—unified under one taxonomy"
  - "The depth and quality of intelligence, not just the connection"
  - "AI can finally learn across functions—enabling truly aligned AI strategy"
- `whyItMatters`: "This is where AI becomes truly valuable. Five best-in-class solutions sharing one taxonomy means AI can learn across your entire intelligence landscape—not just automate individual tools. This is the foundation for a truly aligned AI strategy."

**Stage 4 (OPTIMISED):**
- `whatItLooksLike`: Add "AI is no longer siloed—it's orchestrating across all five intelligence domains"
- `whyItMatters`: "Intelligence becomes operational. AI doesn't just surface insights—it recommends actions across the connected system. New ways of working become possible."

**Stage 5 (PREDICTIVE):**
- `whyItMatters`: "The intelligence value compounds exponentially. Ava anticipates across all five domains simultaneously—unlocking value that's impossible at lower stages. This is the capability that defines future category leaders."

---

### 2. `src/components/globaldata-slides/GDDetailsPanel.tsx`

**Update AI Readiness Badges:**

Current labels are too binary (Blocked/Enabled/Optimized). Update to reflect the nuance:

| Level | Current Badge | New Badge | Color |
|-------|--------------|-----------|-------|
| 1 | AI Blocked | AI Blocked | Red |
| 2 | AI Blocked | AI Siloed | Orange |
| 3 | AI Enabled | AI Aligned | Green |
| 4 | AI Optimized | AI Operational | Gold |
| 5 | AI Optimized | AI Agentic | Gold |

This communicates that AI exists at Stage 2 but is siloed—matching your feedback.

---

### 3. `src/data/globalDataNarration.ts` (slideId: 6)

**Revised Narration Script:**

```text
Now let's assess where your organisation actually is. This is the Intelligence Maturity Ladder—and here's the critical insight: the higher you climb, the more your intelligence compounds. Not just faster decisions—fundamentally different capability.

At the base: Fragmented and Reactive. Insight requests handled ad hoc. Multiple disconnected tools. Decisions made with incomplete data. At this stage, AI simply can't help you—there's no connected data for it to learn from. You're locked out of the intelligence advantage entirely.

Stage two: Managed but Siloed. You've got strong systems in specific domains. Brand has a tracker. Innovation has a pipeline tool. Competitive has a monitor. And yes—AI may exist within each of these tools. But here's the limitation: it's siloed. AI at this stage just automates what you already have. It can't learn across functions. It can't enable new ways of working. You're optimising fragments while competitors are building connected advantages.

Stage three: Connected and Governed. This is where everything changes. Five best-in-class intelligence solutions—Market, Consumer, Competitive, Innovation, Commercial—unified under one taxonomy. It's not just the connection that matters. It's the depth and quality of intelligence, governed and aligned. AI can finally learn across your entire organisation. This is where a truly aligned AI strategy becomes possible. Reconciliation time drops sixty percent—because there's one truth.

Stage four: Operational Intelligence. Now AI isn't just informed—it's embedded in your workflows. Automated alerts when market conditions shift. Proactive recommendations across all five domains. The intelligence system doesn't wait to be asked—it surfaces what matters. Decisions in days, not weeks.

And at the apex: Predictive and Adaptive. Ava anticipates market shifts across all five intelligence domains simultaneously. It recommends which products to defend, which opportunities to pursue, which threats to monitor. The value compounds exponentially—because every insight builds on every other. This is the capability that will define future category leaders.

Most organisations are at stage one or two. The question isn't whether AI exists in your tools—it probably does. The question is: how fast can you climb to where AI truly compounds your intelligence?
```

---

### 4. Update STAGE_MARKERS for Narration Sync

Update marker phrases in `GDSlide6ValuePyramid.tsx` to match the new script:

```typescript
const STAGE_MARKERS = [
  { stage: "FRAGMENTED", phrase: "At the base: Fragmented and Reactive." },
  { stage: "MANAGED", phrase: "Stage two: Managed but Siloed." },
  { stage: "CONNECTED", phrase: "Stage three: Connected and Governed." },
  { stage: "OPTIMISED", phrase: "Stage four: Operational Intelligence." },
  { stage: "PREDICTIVE", phrase: "And at the apex: Predictive and Adaptive." },
];
```

---

## Key Messaging Summary

### Slide 7 Core Messages:
1. **AI exists at stages 2-5** — but its value is siloed until Stage 3
2. **Stage 3 is the unlock** — 5 best-in-class solutions, one taxonomy, depth + quality
3. **Intelligence value compounds as you climb** — critical for future success
4. **The question isn't "do you have AI?"** — it's "how fast can you climb to where AI truly compounds?"

### What Makes This a Key Reference Point:
- Memorable name: "The Intelligence Maturity Ladder"
- Self-assessment hook: "Where are you now?"
- Urgency: "competitors are building connected advantages"
- Future-proof: "critical for future success"
- Referenceable: Can return to this slide throughout sales conversations

---

## Summary of Changes

| File | Changes |
|------|---------|
| `GDSlide6ValuePyramid.tsx` | Update title, subtitle, `layersData` (especially stages 2, 3, 4, 5 with AI nuance), update `STAGE_MARKERS` |
| `GDDetailsPanel.tsx` | Update `AIReadinessIndicator` with new labels: Blocked → Siloed → Aligned → Operational → Agentic |
| `globalDataNarration.ts` | Replace slideId: 6 script with revised version emphasizing AI value progression and Stage 3's 5 solutions + taxonomy |

