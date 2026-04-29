export type DeckId = "consumer-journey";
export type ExportMode = "pixel-perfect" | "editable";

export interface BuildOpts {
  onProgress?: (current: number, total: number, label: string) => void;
}
