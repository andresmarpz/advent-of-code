import { partA } from "2023/src/day01/day01";
import { getDayInput } from "2023/utils/get-day-input";
import { expect, test } from "bun:test";

const exampleData = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

const augmentedExampleData = `
9aaapd2awfd
m2kp88wna9a
a1b92c3d4
x..5y6z7
p8q9r0_
`;

const exampleData2 = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

test("day 1 / part 1", () => {
  const dayInput = getDayInput(2023, 1);
  expect(partA(exampleData)).toBe(142);
  expect(partA(augmentedExampleData)).toBe(272);
});
