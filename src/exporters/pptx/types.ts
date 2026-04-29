export type DeckId = "consumer-journey";

export interface BuildOpts {
  onProgress?: (current: number, total: number, label: string) => void;
}
