import { getDayExport } from "2023/utils/get-day-export";

// list looks like
// "35  1 14 20 51  4 32"
function getNumbersFromList(list: string) {
  const chunks = [];
  for (let i = 0; i < list.length; i += 3) {
    const end = Math.min(i + 3, list.length);
    chunks.push(parseInt(list.substring(i, end).trim()));
  }

  return chunks;
}

export function part1(input: string): number {
  const lines = input.split("\n").filter(Boolean);

  return lines
    .map((card) => {
      const [, numbers] = card.split(": ");

      const [winning, mine] = numbers.split(" | ");
      const winningNumbers = getNumbersFromList(winning);
      const mineNumbers = getNumbersFromList(mine);

      const matches = mineNumbers.filter((m) =>
        winningNumbers.includes(m)
      ).length;
      return matches ? Math.pow(2, matches - 1) : 0;
    })
    .reduce((prev, acc) => prev + acc, 0);
}

export function part2(input: string): number {
  return 0;
}

export default getDayExport(2023, 4, part1);
