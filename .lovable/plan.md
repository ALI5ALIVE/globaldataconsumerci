

# Plan: Consumer-Centric "One Lens" Hub Diagram

## Concept

Replace the current product-module-focused radial diagram with a **consumer-at-the-center** design. "The Consumer" sits at the hub. Around it, six value chain stages flow as a journey ring — each stage labelled with a brand-strategy action (not a product name), connected to its persona.

```text
                        Sarah
                     Discover Trends
                          │
          David ──────────●──────────── James
       Optimise Costs   / | \        Size Opportunity
                       /  |  \
                 THE CONSUMER
              (One Lens · One Truth)
                       \  |  /
                        \ | /
        Elena ──────────●──────────── Priya
       Win at Shelf    Track Competition
                          │
                       Marcus
                   Validate Innovation
```

**Key differences from current:**
- Center says "The Consumer" with "One Lens · One Truth" beneath — not "ONE TRUTH / One Taxonomy"
- Middle ring shows **value chain stages** with brand-strategy verbs: Discover, Size, Track, Validate, Win, Optimise
- Outer ring keeps personas but roles now reference "Global FMCG"
- Connecting arcs between adjacent stages suggest a continuous journey, not isolated spokes
- Hover shows the consumer question each stage answers

## File to Modify

| File | Change |
|------|--------|
| `src/components/consumer-journey/CJOneLensHub.tsx` | Redesign: consumer hub center, value chain stage labels (verb-led), journey arc connectors between adjacent nodes, updated persona roles |

## Details

- Center hub: gradient circle, "THE CONSUMER" (bold), "One Lens · One Truth" (subtitle), consumer silhouette icon
- Ring 1 (r=140): Value chain stage cards with verb labels — "Discover Trends", "Size Opportunity", "Track Competition", "Validate Innovation", "Win at Shelf", "Optimise Costs"
- Ring 2 (r=245): Persona avatars (unchanged layout, updated role text to "· Global FMCG")
- Journey arcs: subtle curved lines connecting adjacent stage nodes (ring 1) to show flow/sequence
- Hover tooltip: shows "What does the consumer need?" framing instead of product questions

