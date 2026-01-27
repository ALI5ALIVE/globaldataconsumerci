

# Update Market Intelligence & Strategic Intelligence Definitions

## Overview
Refine the content in Slide 4 (Connected Intelligence) and Slide 5 (Value Chain) to better differentiate between Market Intelligence and Strategic Intelligence based on the authoritative definitions provided.

## Key Distinctions to Apply

| Aspect | Market Intelligence | Strategic Intelligence |
|--------|---------------------|------------------------|
| **Core Purpose** | Source of truth on how markets are evolving | Decision-guidance layer—where to act next |
| **Strength** | Breadth, consistency, credibility | Foresight and actionability |
| **Answers** | "What's happening" and "how big is it" | "Why it matters" and "what we should do" |
| **Outputs** | Data, benchmarks, forecasts | Risks, opportunities, scenarios, options |
| **Powered By** | Market size, category dynamics, industry trends, performance comparisons | Thematic Intelligence (AI, sustainability, regulation, geopolitics, demographics) |
| **Enables** | Planning, investment cases, go-to-market decisions with defensible facts | Faster, more confident, future-proof strategic decisions |

---

## Files to Update

### 1. `src/data/solutionDeepDives.ts`
The core data file powering both slides. Update the JTBD, Pain-to-Outcome, and examples for both solutions.

**Market Intelligence (id: "market") - Changes:**
- **JTBD "When"**: "When I need to quantify an opportunity or ground a plan in evidence"
- **JTBD "I want to"**: "access authoritative market size, growth, and performance benchmarks"
- **JTBD "So that"**: "teams align around a shared, defensible view of what's happening and how big it is"
- **Pain 1**: "Plans built on estimates and assumptions" → Capability: "Authoritative market data & forecasts" → Outcome: "Investment cases with defensible market facts"
- **Pain 2**: "Teams misaligned on category dynamics" → Capability: "Shared source of truth across regions" → Outcome: "Faster consensus on go-to-market decisions"
- **Pain 3**: "Performance comparisons scattered across sources" → Capability: "Cross-company, brand, and geo benchmarks" → Outcome: "Credible competitive positioning in 24 hours"
- **Example**: Update to emphasize quantifying opportunity with defensible data
- **Capabilities**: "Market size & growth forecasts", "Category & consumer dynamics", "Industry trend tracking", "Cross-company benchmarks", "Geographic performance comparison"

**Strategic Intelligence (id: "strategic") - Changes:**
- **JTBD "When"**: "When I need to anticipate change and determine where to act next"
- **JTBD "I want to"**: "understand what's emerging, converging, and becoming material"
- **JTBD "So that"**: "I make faster, more confident, future-proof strategic decisions"
- **Pain 1**: "Blindsided by macro forces (AI, regulation, sustainability)" → Capability: "Thematic Intelligence tracking high-impact forces" → Outcome: "Material implications identified 12+ months ahead"
- **Pain 2**: "Strategy disconnected from emerging risks" → Capability: "Scenario planning & strategic options" → Outcome: "Board-ready risk/opportunity frameworks"
- **Pain 3**: "Knowing what's happening but not what it means for us" → Capability: "Industry and value chain implication mapping" → Outcome: "Clear 'so what' for every major trend"
- **Example**: Update to emphasize synthesizing Market + Competitive + Thematic into strategic options
- **Capabilities**: "Thematic Intelligence tracking", "Scenario & strategic options", "Risk & opportunity framing", "Value chain implication mapping", "Future-proof decision guidance"

---

### 2. `src/components/globaldata-slides/GDSlide5ValueChain.tsx`
Update the workflow stage solution mappings to reflect the clearer roles:

**Current Stage 1 (Trend & Strategy)**:
- Keep Strategic + Market pairing
- Update combination name/description to emphasize: Market provides the "size of the prize" data; Strategic synthesizes it into "where to act"

**Refine solution combo descriptions**:
- **"Where to Play"** (Strategic + Market): "Market Intelligence quantifies opportunities; Strategic Intelligence translates them into priority actions"
- **"How to Win"** (Innovation + Competitive): Keep as-is (not affected by this update)
- **"How to Execute"** (Sales + Market): Keep as-is

---

### 3. `src/components/globaldata-slides/ConnectedIntelligenceWheel.tsx`
Minor update to ensure segment ordering and positioning emphasizes Market as "foundational data" and Strategic as "decision-guidance layer":
- Optionally adjust segment ordering so Market precedes Strategic visually (if flow makes sense)
- No major structural changes needed—the visual already works well

---

### 4. `src/components/globaldata-slides/SolutionValuePanel.tsx`
No code changes needed—it pulls from `solutionDeepDives.ts`, so the content will update automatically once the data file is changed.

---

## Summary of Content Updates

| Solution | Before | After |
|----------|--------|-------|
| **Market Intelligence** | Focused on trend detection and validation | Focused on authoritative data, benchmarks, and quantifying opportunity |
| **Strategic Intelligence** | Focused on portfolio priorities and category shifts | Focused on thematic forces, foresight, and decision-guidance |

---

## Implementation Steps
1. Update `src/data/solutionDeepDives.ts` with refined JTBD, pain-to-capability, examples, and capabilities for both Market and Strategic Intelligence
2. Update `src/components/globaldata-slides/GDSlide5ValueChain.tsx` combo descriptions to reflect the clearer relationship
3. Verify Connected Intelligence Wheel displays correctly with updated content
4. Test both slides to ensure panels display the updated content without overflow

---

## Outcome
- **Market Intelligence** is clearly positioned as the "authoritative source of truth" providing data, benchmarks, and forecasts
- **Strategic Intelligence** is clearly positioned as the "decision-guidance layer" providing foresight, scenarios, and actionable options
- The relationship between them is clear: Market provides the "what" and "how big"; Strategic synthesizes and answers "why it matters" and "what to do"

