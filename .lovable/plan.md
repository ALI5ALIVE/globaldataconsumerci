

# Plan: Add Purchasing Persona + Unify Company Context

## Changes

### 1. Add 6th persona — David, Head of Procurement

New persona at position 6, focused on cost reduction, TCO, and supplier consolidation:

- **Name**: David
- **Role**: Head of Procurement · Global FMCG
- **Step**: "Procurement & TCO"
- **Icon**: `Wallet` (from lucide-react)
- **Pain**: "I manage 14 data suppliers. Nobody can tell me what we're actually using. Renewal season is a nightmare."
- **Pain bullets**: 14 overlapping suppliers, No usage visibility, £2.4M annual spend unoptimised
- **Benefit**: "One platform. One contract. TCO down 40%. I went from managing 14 vendors to one strategic partner."
- **Metrics**: 40% TCO reduction · 14→1 suppliers · Best-in-class consolidation
- **Dashboard type**: New `procurement-dashboard` — supplier count waterfall, TCO comparison bar, usage heatmap
- **Value chain position**: 6

### 2. Unify all persona roles to same company

Update all role strings to reference the same company context consistently:
- Sarah: "Head of Strategy · Global FMCG"
- James: "Market Intelligence Lead · Global FMCG"
- Priya: "Competitive Intelligence Analyst · Global FMCG"
- Marcus: "Innovation Director · Global FMCG"
- Elena: "National Account Manager · Global FMCG"
- David: "Head of Procurement · Global FMCG"

Update value chain to show "Step X of 6" instead of "Step X of 5".

### 3. Add procurement dashboard mockup

New `ProcurementDashboard` component in `PersonaDashboard.tsx` showing:
- Supplier count waterfall (14 → 1)
- TCO comparison bars (Before vs After)
- Usage heatmap showing team adoption

### 4. Update hub diagram

Add David/Procurement as 6th node in `CJOneLensHub.tsx` — adjust radial positioning from 5 to 6 nodes.

### 5. Update slides array and narration

- Add slide entry `{ id: "cj-slide-10", label: "The Procurement Lead" }` 
- Shift Teams/Results/CTA to slides 11-13
- Add narration script for David focused on TCO, supplier reduction, best-in-class consolidation
- Update narration indices for shifted slides

## Files to Modify

| File | Change |
|------|--------|
| `src/pages/ConsumerJourneyDeck.tsx` | Add David persona, unify roles to "Global FMCG", update slides array (now 13), fix narration indices |
| `src/components/consumer-journey/PersonaDashboard.tsx` | Add `procurement-dashboard` type + `ProcurementDashboard` component |
| `src/components/consumer-journey/PersonaSlide.tsx` | Update value chain progress to show 6 steps |
| `src/components/consumer-journey/CJOneLensHub.tsx` | Add 6th node for Procurement/David |
| `src/data/consumerJourneyNarration.ts` | Add slide 9 narration for David, shift remaining slideIds |

