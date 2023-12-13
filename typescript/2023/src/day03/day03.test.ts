import { part1, part2 } from "2023/src/day03/day03";
import { expect, test } from "bun:test";

const exampleData = `
467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..
`;

const exampleExtra = `
............*............+..............................
......67.595...599.........442...997..187...............
266@.............-..713.....*....*.......=..783...564*..
`;

const exampleExtra2 = `
.......*............680.....*......876.........86
....615.......*....%.....151.........*....#802...
..............3.................637..493.........
...&...336......922............*..........370....
...50..*.........*...........978...453.....*.....
...................................*........534..
`;

test("day 3 / part 1", () => {
  expect(part1(exampleData)).toBe(4361);
  expect(part1(exampleExtra)).toBe(3650);
  expect(part1(exampleExtra2)).toBe(7900);
});

test("day 3 / part 2", () => {
  expect(part2(exampleData)).toBe(467835);
});
