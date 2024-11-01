import { part1, part2 } from "2023/src/day06/day06";
import { expect, test } from "bun:test";

const exampleData = `
  Time:      7  15   30
  Distance:  9  40  200
  `;

test("day 6 / part 1", () => {
  expect(part1(exampleData)).toBe(288);
});

test("day 6 / part 2", () => {
  const exampleData = `
  Time:      7  15   30
  Distance:  9  40  200
  `;

  expect(part2(exampleData)).toBe(71503);
});
