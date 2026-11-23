// Generates the one-line roast submission for the make.fun "Gadget You Use Every Day" bounty
// Reads MAKEFUN_OUTPUT_DIR env var (defaults to /output), creates the directory, and writes entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH = "My doorbell charges six dollars a month to tell me someone's at the door. The window has done it free since 1823.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, PITCH, "utf-8");