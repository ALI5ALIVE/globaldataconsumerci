

## Remove Caption Text from Before/After Illustrations

### Summary

Remove the caption text elements from both SVG illustrations:
- **Before**: "Different Taxonomies • Manual Reconciliation" 
- **After**: "Connected Intelligence • Unified Taxonomy"

---

### Changes Required

#### File 1: `src/components/globaldata-slides/GDBeforeSilosIllustration.tsx`

**Remove caption (lines 237-250):**

Delete this entire text element:
```tsx
{/* Caption */}
<text
  x="230"
  y="148"
  textAnchor="middle"
  fill="hsl(0, 50%, 60%)"
  fontSize="8"
  fontWeight="500"
  fontFamily="'Space Grotesk', sans-serif"
  letterSpacing="0.1em"
  className="uppercase"
>
  Different Taxonomies • Manual Reconciliation
</text>
```

---

#### File 2: `src/components/globaldata-slides/GDAfterConnectedIllustration.tsx`

**Remove caption (lines 264-277):**

Delete this entire text element:
```tsx
{/* Caption */}
<text
  x="230"
  y="145"
  textAnchor="middle"
  fill="hsl(217, 100%, 60%)"
  fontSize="8"
  fontWeight="500"
  fontFamily="'Space Grotesk', sans-serif"
  letterSpacing="0.1em"
  className="uppercase"
>
  Connected Intelligence • Unified Taxonomy
</text>
```

---

### Files Summary

| File | Lines to Remove | Description |
|------|-----------------|-------------|
| `GDBeforeSilosIllustration.tsx` | 237-250 | Remove "Different Taxonomies • Manual Reconciliation" caption |
| `GDAfterConnectedIllustration.tsx` | 264-277 | Remove "Connected Intelligence • Unified Taxonomy" caption |

