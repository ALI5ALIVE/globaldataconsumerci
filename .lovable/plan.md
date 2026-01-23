

## Double Level 2 (MANAGED Silos) Images and Copy

### Current Values

| Element | Current Size | Location |
|---------|-------------|----------|
| Icon container | `width="48" height="48"` | Line 375 |
| Icon class | `w-10 h-10` | Line 377 |
| Main label | `fontSize="16"` | Line 381 |
| Sublabel | `fontSize="12"` | Line 384 |
| Icon Y offset | `-55` from center | Line 375 |

### New Values (doubled)

| Element | New Size |
|---------|----------|
| Icon container | `width="96" height="96"` |
| Icon class | `w-20 h-20` |
| Main label | `fontSize="32"` |
| Sublabel | `fontSize="24"` |
| Icon Y offset | `-90` (adjusted for larger icon) |
| Label Y positions | Adjusted to accommodate spacing |

---

### Technical Changes

**File:** `src/components/globaldata-slides/GDPyramid3D.tsx`

**Line 375 - Icon container:**
```tsx
// Current
<foreignObject x={sectionCenterX - 24} y={foundationCenterY - 55} width="48" height="48" ...>

// New (doubled)
<foreignObject x={sectionCenterX - 48} y={foundationCenterY - 90} width="96" height="96" ...>
```

**Line 377 - Icon size:**
```tsx
// Current
<IconComponent className="w-10 h-10 text-white/90" strokeWidth={2} />

// New (doubled)
<IconComponent className="w-20 h-20 text-white/90" strokeWidth={2} />
```

**Line 381 - Main label:**
```tsx
// Current
fontSize="16"

// New (doubled)
fontSize="32"
```

**Line 384 - Sublabel:**
```tsx
// Current
fontSize="12"

// New (doubled)
fontSize="24"
```

**Y position adjustments:**
- Main label Y: `foundationCenterY + 4` → `foundationCenterY + 20`
- Sublabel Y: `foundationCenterY + 26` → `foundationCenterY + 54`

---

### Summary

| Component | Before | After |
|-----------|--------|-------|
| Icon size | 40x40px | 80x80px |
| Icon container | 48x48px | 96x96px |
| Main label font | 16px | 32px |
| Sublabel font | 12px | 24px |

### File to Modify
- `src/components/globaldata-slides/GDPyramid3D.tsx` (lines 375-386)

