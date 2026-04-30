/**
 * Named layouts available inside the GlobalData 2025 PPT Master Template.
 *
 * The numeric values are the `slideLayoutN.xml` filenames inside
 * `src/assets/pptx/gd_master.pptx`. Names below were extracted from each
 * layout's `<p:cSld name="…">` attribute, so they correspond exactly to what
 * a presenter sees in PowerPoint's Layout dropdown.
 *
 * Each consumer-journey slide spec selects one of these via `gdLayout`. The
 * post-processor in `gdMasterMerge.ts` then re-points the slide's relationship
 * file at the matching `slideLayoutN.xml` inside the merged master.
 */
export const GD_LAYOUT = {
  TitleSlide: 1,         // Hero cover with photographic background
  TitleSubtitle2: 2,
  TitleSubtitle3: 3,
  Speakers1: 4,
  Speakers2: 5,
  Speakers3: 6,
  Speakers4: 7,
  Agenda1: 8,
  Agenda2: 9,
  Agenda3: 10,
  ClearSpace: 11,        // Light, full-bleed canvas
  ClearSpaceDark: 12,    // Navy, full-bleed canvas
  Text: 13,              // Title + body text
  Content: 14,           // Title + content area (most flexible default)
  Divider: 15,           // Section divider with eyebrow + statement
  X4Text: 16,            // 4 text blocks
  X4Screenshots: 17,
  X4Screenshots2: 18,
  ProblemStatement: 19,  // Heavy bold statement layout
  X2Column: 20,          // Two-column body
  TextContent: 21,       // Heading + content split
  X4Column: 22,
  X4ColumnX2Row: 23,
  Logos1: 24,
  Logos2: 25,
  Laptop1: 26,
  Laptop2: 27,
  X2ColumnBackground: 28, // Two-column on patterned background (for CTA)
} as const;

export type GdLayoutKey = keyof typeof GD_LAYOUT;

/** Map a layout key → the layout XML filename inside the master pptx. */
export function gdLayoutFile(key: GdLayoutKey): string {
  return `slideLayout${GD_LAYOUT[key]}.xml`;
}
