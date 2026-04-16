

# Rebrand Web Slides to GlobalData Template

## Summary

Update the CSS theme, fonts, and Tailwind config so all 12 Consumer Journey slides render with the GlobalData 2025 brand system instead of the current Comply365 blue theme.

## Brand Mapping

| Element | Current (Comply365) | Target (GlobalData) |
|---------|-------------------|---------------------|
| **Font (headings)** | Space Grotesk | Poppins |
| **Font (body)** | Inter | Poppins |
| **Dark background** | `hsl(230 25% 5%)` | `#1F2432` (Navy) |
| **Primary accent** | `#0066FF` | `#293FE1` (Hyper Blue) |
| **Secondary accent** | Sky blue `#00B8D9` | `#09216B` (Mid Blue) |
| **Light slide bg** | White `#FFFFFF` | `#FBF5E9` (Cream) |
| **Card background** | `hsl(230 25% 8%)` | `#2A2F3F` (lighter navy) |
| **Muted text** | `hsl(220 15% 60%)` | `#676B75` (Dark Grey) |
| **Border** | `hsl(230 25% 18%)` | `#3A3F50` |
| **Title accent underline** | Red | Hyper Blue `#293FE1` |
| **Gradients** | Blue-to-sky | Navy-to-Hyper Blue |

## Files Changed

### 1. `src/index.css`
- Replace Google Fonts import: swap `Inter` + `Space Grotesk` for `Poppins` (weights 300-700)
- Update all `:root` CSS custom properties to GlobalData palette:
  - `--background` → Navy `#1F2432`
  - `--primary` → Hyper Blue `#293FE1`
  - `--accent` → Mid Blue `#09216B`
  - `--comply-*` variables renamed/remapped to `--gd-*` equivalents
  - Light slide variant (`slide-light`) uses Cream `#FBF5E9` instead of white
- Update `.title-accent::after` from red to Hyper Blue
- Update gradient utilities to use navy/blue tones
- Update body and heading font-family to Poppins

### 2. `tailwind.config.ts`
- Update `fontFamily.sans` and `fontFamily.display` to `['Poppins', 'sans-serif']`
- Rename `comply` color namespace to `gd` with new values
- Update pyramid/glow colour references

### 3. `src/components/consumer-pitch/CPSlideContainer.tsx`
- Update footer text from "© 2026 GlobalData · Connected Consumer Intelligence" (already correct) — no change needed
- Update `variant === "light"` class to use cream background

### 4. Individual slide components (spot fixes only)
- Any hardcoded hex colours (e.g. `sky-400`, `bg-white`) in slide components get swapped to theme tokens or GlobalData equivalents
- `CJSlide0Title.tsx`: gradient text from `sky-400` → Hyper Blue, ambient glow colour update
- Other slides: replace `bg-white` with `bg-[#FBF5E9]` or theme token for cream

### 5. `src/assets/globaldata-logo-white.svg` 
- Already exists in the project — will be added to the header/title slide in place of the removed Comply365 logo

## Approach

This is primarily a theme-level change — updating CSS variables and font imports covers ~90% of the rebrand. The remaining 10% is replacing hardcoded Tailwind classes (`sky-400`, `bg-white`) in individual slide components with the new palette.

