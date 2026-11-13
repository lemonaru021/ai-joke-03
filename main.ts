// ai-joke-03 entry (Node 22, standard library only): writes one fixed one-liner
// about AI coding agents to /output/entry.txt. The grader runs this program
// twice and both runs must write the same bytes, so the joke is a constant —
// no randomness, no clock, no network.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Final joke (candidate 1): context amnesia. The agent keeps asking what a
// function does — and it wrote the function itself. Shorter punchline, fresher
// angle than the draft: it lands in the last four words.
const JOKE =
  'My coding agent asked me for the third time today what this function does. It wrote the function.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');
