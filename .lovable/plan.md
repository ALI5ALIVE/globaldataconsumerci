

# Update Interlinking Circles Labels

## Summary
The quintuple loop visualization (interlinking circles) on the Value Pyramid slide needs two label changes to align with the correct intelligence terminology.

## Current State
The five circles are currently labeled:
- Market
- Innovation
- Consumer ← incorrect
- Competitive
- Commercial ← incorrect

## Required Changes
Update labels to:
- Market (unchanged)
- Innovation (unchanged)
- **Strategic** (was "Consumer")
- Competitive (unchanged)
- **Sales** (was "Commercial")

## File to Update
`src/components/globaldata-slides/GDQuintupleLoop.tsx`

### Change Details
Update the modules array (lines 7-13):

**Before:**
```typescript
const modules = [
  { id: "market", label: "Market" },
  { id: "innovation", label: "Innovation" },
  { id: "consumer", label: "Consumer" },
  { id: "competitive", label: "Competitive" },
  { id: "commercial", label: "Commercial" },
];
```

**After:**
```typescript
const modules = [
  { id: "market", label: "Market" },
  { id: "innovation", label: "Innovation" },
  { id: "strategic", label: "Strategic" },
  { id: "competitive", label: "Competitive" },
  { id: "sales", label: "Sales" },
];
```

## Visual Result
The five interlinking circles on the pyramid's "Connected" layer (Stage 3) will display:
**Market → Innovation → Strategic → Competitive → Sales**

This aligns with the "Unified Taxonomy" concept where these five intelligence domains connect through a single governed platform.

