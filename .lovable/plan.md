

## Align "Why It Exists" and "Quantified Impact" Box Proportions

### Summary
Make both columns' individual cards the same height so they align horizontally, creating a visually balanced mirrored layout.

---

### Current Issue

The two columns already have equal widths (50/50 via `lg:grid-cols-2`), but the individual cards don't match in height:

| Why It Exists (Root Causes) | Quantified Impact |
|-----------------------------|-------------------|
| `p-4` padding | `p-3` padding |
| More text content | Less text content |
| ~100px height per card | ~70px height per card |

---

### Proposed Fix

Adjust the impact cards to match the height of the root cause cards by:

1. **Standardize padding**: Change impact cards from `p-3` to `p-4` to match root causes
2. **Add minimum height**: Use `min-h-[84px]` (or similar) on both card types to ensure they align
3. **Center content vertically**: Add `items-center` to ensure content is vertically centered in both card types

---

### Technical Changes

**File**: `src/components/globaldata-slides/GDSlide2IntelligenceGap.tsx`

**Line 87** - Root cause cards (add explicit min-height):
```tsx
className="flex items-start gap-3 bg-card/50 border border-border/50 rounded-lg p-4 min-h-[84px] group hover:border-destructive/30 transition-all"
```

**Line 115** - Impact cards (increase padding and add min-height):
```tsx
className="bg-gradient-to-r from-destructive/10 to-transparent border border-destructive/20 rounded-lg p-4 min-h-[84px] flex items-center gap-3"
```

---

### Visual Result

After the change, both columns will have cards of equal height, creating a clean horizontal alignment:

```
+---------------------------+  +---------------------------+
| BREADTH                   |  | 3-5 sources               |
| First: Breadth—Signals... |  | to reconcile per NPD...   |
+---------------------------+  +---------------------------+
+---------------------------+  +---------------------------+
| ALIGNMENT                 |  | 40% of NPD                |
| Then: Alignment—Teams...  |  | misses the consumer...    |
+---------------------------+  +---------------------------+
+---------------------------+  +---------------------------+
| SPEED                     |  | 12wks                     |
| Next: Speed—The Shelf...  |  | 2 missed seasonal...      |
+---------------------------+  +---------------------------+
+---------------------------+  +---------------------------+
| CONFIDENCE                |  | 68% of teams              |
| Finally: Confidence—...   |  | lack confidence to...     |
+---------------------------+  +---------------------------+
```

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/components/globaldata-slides/GDSlide2IntelligenceGap.tsx` | Update line 87 and line 115 to add consistent `min-h-[84px]` and `p-4` padding |

