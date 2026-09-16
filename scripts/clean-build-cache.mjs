import { rmSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL(".", import.meta.url)), "..");

for (const target of [".next", "tsconfig.tsbuildinfo"]) {
  rmSync(join(root, target), { recursive: true, force: true });
}
