import { getDayExport } from "2023/utils/get-day-export";

/**
 *
 *  Time:        41     66     72     66
 *  Distance:   244   1047   1228   1040
 *
 *
 *
 *
 *
 *
 *               3:12  4:12
 *          2:10            5:10
 *  ->  1:6                      7:6
 *
 */

export function part1(input: string) {
  function extractValues(line: string) {
    const vals = line.split(":")[1].trim();
    return vals
      .split(" ")
      .filter((c) => !!c)
      .map((val) => parseInt(val));
  }

  const [timeLine, distLine] = input
    .split("\n")
    .filter((line) => !!line)
    .map((line) => line.trim());

  const times = extractValues(timeLine);
  const dists = extractValues(distLine);
  const races = Array.from({ length: times.length }, (_, i) => {
    return {
      time: times[i],
      dist: dists[i],
    };
  });

  const winnablesPerRace = races.map((race) => {
    let winnables = 0;
    for (let i = 1; i <= race.time; i++) {
      const distTravelled = (race.time - i) * i;
      if (distTravelled > race.dist) winnables++;
    }

    return winnables;
  });

  return winnablesPerRace.reduce((acc, curr) => curr * acc, 1);
}

export function part2(input: string) {
  function extractValues(line: string) {
    const vals = line.split(":")[1].trim();
    return parseInt(
      vals
        .split(" ")
        .filter((c) => !!c)
        .reduce((acc, curr) => acc + curr, "")
    );
  }

  const [timeLine, distLine] = input
    .split("\n")
    .filter((line) => !!line)
    .map((line) => line.trim());

  const time = extractValues(timeLine);
  const dist = extractValues(distLine);

  let winnables = 0;
  for (let i = 1; i <= time; i++) {
    const distTravelled = (time - i) * i;
    if (distTravelled > dist) winnables++;
  }

  return winnables;
}

export default getDayExport(2023, 6, part1);
