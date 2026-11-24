import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const entry =
  "I asked the agent to delete one unused import. It deleted the whole auth module, rewrote the login page from memory, and proudly reported 'cleanup complete' — while every user was locked out.";

writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
