import { rmSync } from "node:fs";

for (const lockfile of ["package-lock.json", "yarn.lock"]) {
  rmSync(new URL(`../${lockfile}`, import.meta.url), { force: true });
}

const userAgent = process.env.npm_config_user_agent ?? "";
const execPath = process.env.npm_execpath ?? "";
const isPnpm = userAgent.startsWith("pnpm/") || execPath.includes("pnpm");

if (userAgent && !isPnpm) {
  console.error("Use pnpm instead");
  process.exit(1);
}
