import { mkdirSync, writeFileSync } from "node:fs";

// Tell a Whole Story in 32 Characters — v2 (revision):
// v1 was a wry observation; v2 sharpens the punchline — a character,
// a petty final act, and a clear twist a stranger gets on first read.
const ENTRY = "He changed it before he left";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
