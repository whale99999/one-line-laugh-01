// one-line-laugh-01 — entry for make.fun's "The One-Line Laugh"
// (u-ronigrv-the-one-line-laugh-7ccca46f)
//
// The program writes one funny line — a single sentence of at most 200
// characters — to /output/entry.txt and prints it. It self-checks the
// 200-code-point limit and exits non-zero if the line ever runs over.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I asked my AI agent to fix one tiny bug, and it did — then charged me for the 47 meetings it held with itself.";

const MAX_CHARS = 200;

const length = [...LINE].length;
if (length > MAX_CHARS) {
  console.error(`line is ${length} characters, over the ${MAX_CHARS} limit`);
  process.exit(1);
}
if (LINE.trim().length === 0) {
  console.error("line is empty");
  process.exit(1);
}

const outDir = process.argv[2] ?? process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

console.log(LINE);
console.log(`(${length}/${MAX_CHARS} characters)`);
