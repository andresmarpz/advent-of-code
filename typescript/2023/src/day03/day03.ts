import { getDayExport } from "2023/utils/get-day-export";

const isNumber = (i: string) => i.match(/\d/);

type Part = {
  start: number;
  end: number;
  number: number;
  line: number;
  valid: boolean;
};

/**
 *
 * The engine schematic (your puzzle input) consists of a visual representation of the engine. There are lots of numbers and symbols you don't really understand, but apparently any number adjacent to a symbol, even diagonally, is a "part number" and should be included in your sum. (Periods (.) do not count as a symbol.)
 * Two numbers are not part numbers because they are not adjacent to a symbol. Every other number is adjacent to a symbol and so is a part number.
 */
export function part1(input: string): number {
  const lines = input.split("\n").filter((s) => !!s);

  const potencialParts: Part[] = [];

  lines.forEach((line, lineNumber) => {
    let start: number | undefined, end: number | undefined;
    let number: string = "";

    const chars = line.split("");
    chars.forEach((char, i) => {
      if (isNumber(char)) {
        if (start === undefined) {
          start = i;
          end = i;
        } else {
          end = i;
        }

        number += char;
      }

      if (!isNumber(char) || i === chars.length - 1) {
        if (!!number && start !== undefined && end !== undefined) {
          potencialParts.push({
            start,
            end,
            number: parseInt(number),
            line: lineNumber,
            valid: false,
          });
        }

        start = undefined;
        end = undefined;
        number = "";
      }
    });

    return 0;
  });

  potencialParts.forEach((part) => {
    const fromL = Math.max(part.line - 1, 0);
    const toL = Math.min(part.line + 1, lines.length - 1);

    for (let i = fromL; i <= toL; i++) {
      const scan = lines[i];

      const from = Math.max(part.start - 1, 0);
      const to = Math.min(part.end + 1, scan.length - 1);

      for (let i = from; i <= to; i++) {
        const char = scan[i];
        if (!isNumber(char) && char !== ".") {
          part.valid = true;
        }
      }
    }
  });

  return potencialParts
    .filter((part) => part.valid)
    .reduce((prev, acc) => prev + acc.number, 0);
}

export default getDayExport(2023, 3, part1);

//  .....
//  .....
//  4
//  .....
//  .....
