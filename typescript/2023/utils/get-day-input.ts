import { readFileSync } from "fs";
import { join } from "path";

export function getDayInput(year: number, day: number): string {
  const fileName = join(
    process.cwd(),
    `${year}/input/day${day < 10 ? "0" : ""}${day}.txt`
  );

  return readFileSync(fileName, "utf8");
}
