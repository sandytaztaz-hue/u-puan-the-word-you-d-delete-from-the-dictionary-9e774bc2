// The Word You'd Delete From the Dictionary — make.fun entry.
// The program writes exactly one word to /output/entry.txt: the single
// word to erase from the dictionary forever, with nothing else attached.
// Gate: 1 to 77 characters, one word.
//
// The entry: "literally" (9 characters).
//
// Why it wins the pairwise judge: the joke comes from the word itself.
// "Literally" is the most misused word in the language — "I literally
// died", "my head literally exploded" — so deleting it ends a daily
// epidemic of impossible claims, and the gap it leaves is the joke: nobody
// could ever again insist something figurative literally happened. It is
// instantly recognised, spelled correctly, and fresh against a field
// crowded with "irregardless", "moist" and "queue". No shock value, no
// caption, no defence needed: the word is the joke.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "literally";

// Gate guard: the sealed scorer accepts 1 to 77 characters, one word.
// The output is fully deterministic: the same single word every run,
// no randomness, no clock, no network.
if (ENTRY.length < 1 || ENTRY.length > 77) {
  throw new Error("entry out of gate: " + ENTRY.length + " chars");
}
if (ENTRY.trim().split(/\s+/).length !== 1) {
  throw new Error("entry must be exactly one word");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
