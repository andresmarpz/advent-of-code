import { readdirSync } from "fs";
import { join } from "path";

async function run() {
  const days = readdirSync(join(process.cwd(), "2023/src")).filter((f) =>
    f.startsWith("day")
  );

  for (const day of days) {
    const dayModule = await import(`./${day}/${day}`);
    dayModule.default();
  }
}

run();
