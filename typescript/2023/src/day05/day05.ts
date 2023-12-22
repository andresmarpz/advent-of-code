import { getDayExport } from "2023/utils/get-day-export";

type TMap = {
  type: string;
  ranges: Range[];
};

type Range = {
  sourceStart: number;
  destinationStart: number;
  rangeLength: number;
};

export function part1(input: string): number {
  const lines = input.split("\n");

  const seeds = lines[0].split(" ").slice(1).map(Number);
  let minLocation = -1;

  const filteredMapLines = lines.filter((l) => l.includes("map"));
  const mapLines = filteredMapLines.map((line) => lines.indexOf(line));

  const maps: TMap[] = [];

  mapLines.forEach((start, index) => {
    const type = lines[start].split(" map:")[0];

    const s = start + 1;
    const e =
      index === filteredMapLines.length - 1
        ? lines.length - 1
        : lines.indexOf(
            filteredMapLines[Math.min(index + 1, filteredMapLines.length - 1)]
          ) - 2;

    const ranges: Range[] = [];
    for (let i = s; i <= e; i++) {
      const [destinationStart, sourceStart, rangeLength] = lines[i]
        .split(" ")
        .map(Number);

      ranges.push({
        destinationStart,
        sourceStart,
        rangeLength,
      });
    }

    maps.push({
      type,
      ranges,
    });
  });

  const res = seeds.map((seed) => mapSourceToDestination(maps, seed, 0));
  // const res = mapSourceToDestination(maps, seeds[0], 0);

  return res.reduce((prev, acc) => (acc < prev ? acc : prev), Infinity);
  // return res;
}

function mapSourceToDestination(
  maps: TMap[],
  source: number,
  pos: number
): any {
  const map = maps[pos];

  const currentRange = map.ranges.find(
    (range) =>
      range.sourceStart <= source &&
      range.sourceStart + range.rangeLength >= source
  );

  const newPos = Math.min(pos + 1, maps.length);
  const shouldRerun = newPos < maps.length;

  if (currentRange) {
    const diff = currentRange?.destinationStart - currentRange?.sourceStart;

    const finalValue = source + diff;
    return shouldRerun
      ? mapSourceToDestination(maps, finalValue, newPos)
      : finalValue;
  } else
    return shouldRerun ? mapSourceToDestination(maps, source, newPos) : source;
}

export default getDayExport(2023, 5, part1);
