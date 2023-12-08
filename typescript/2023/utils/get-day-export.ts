import { getDayInput } from "2023/utils/get-day-input";

export function getDayExport(year: number, day: number, ...parts: Function[]) {
  return () => {
    const input = getDayInput(year, day);

    for (const part of parts) {
      console.time();
      console.log(
        `Day ${day} / Part ${parts.indexOf(part) + 1}: ${part(input)}`
      );
      console.timeEnd();
    }
  };
}
