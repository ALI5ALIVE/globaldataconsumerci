import type { BuildOpts, DeckId } from "./types";

export const DECK_BUILDERS: Record<DeckId, (opts: BuildOpts) => Promise<Blob>> = {
  "consumer-journey": (opts) =>
    import("./buildConsumerJourneyDeck").then((m) => m.buildConsumerJourneyDeck(opts)),
};

export type { BuildOpts, DeckId };
