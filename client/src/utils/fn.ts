import { Entry, FormattedEntry } from "../types";

/**
 * getDateArray
 * * Function that accepts a date string and converts it into an array
 * * Used in NewEntryModal.tsx, EditEntryModal.tsx, DeleteModal.tsx
 * * Note: Month value gets 1 subtracted because the Month property of Date objects are 0-indexed
 * @param date Date value in the form of a string - ie. 'YYYY-MM-DD'
 * @returns Array containing 3 elements, each representing a part of a date - ie. [YYYY, MM, DD]
 */
export const getDateArray = (date: string): number[] =>
  date.split("-").map((x, i) => (i === 1 ? parseInt(x) - 1 : parseInt(x)));

/**
 * formatInputValue
 * * Function that formats the values selected by the user via dropdown menus
 * * Used in pages/Exercises.tsx
 * @param string
 * @returns Appropriately formatted string
 */
export const formatInputValue = (string: string): string =>
  string.toLowerCase().split(" ").join("_");

/**
 * constructUrl
 * * Function that constructs an api url using values selected by the user on a set of dropdown menus
 * * Used in pages/Exercises.tsx
 * @param type
 * @param muscle
 * @param difficulty
 * @returns API URL string
 */
export const constructURL = (type: string, muscle: string, difficulty: string): string => {
  const BASE_URL: string = "https://api.api-ninjas.com/v1/exercises";
  if (type === "" && muscle === "" && difficulty === "") return BASE_URL;
  else {
    const typeParam = type !== "" ? `type=${type}&` : "";
    const muscleParam = muscle !== "" ? `muscle=${muscle}&` : "";
    const difficultyParam = difficulty !== "" ? `difficulty=${difficulty}` : "";
    return BASE_URL + "?" + typeParam + muscleParam + difficultyParam;
  }
};

/**
 * formatEntries
 * * Function that accepts an array of Entry values and formats each element so it can be displayed
 * * Used in /components/dashboard/default/Data.tsx
 * @param entries
 * @returns Formatted array of entries
 */
export const formatEntries = (entries: Entry[]): FormattedEntry[] => {
  const format = entries.map((entry) => {
    return {
      date: new Date(entry.date).toISOString().split("T")[0].toString(),
      weight: entry.weight.toString(),
    };
  });
  return format;
};

/**
 * getRecentEntries
 * * Used in /components/dashboard/default/Data.tsx
 * @param entries An array of Entry values
 * @returns A subset of the array
 */
export const getRecentEntries = (entries: Entry[]): FormattedEntry[] => {
  const max = 5;
  const data = formatEntries(entries);

  if (data.length <= max) return data.reverse();
  else {
    const recent = [];
    for (let i = data.length - 1; i > data.length - 1 - max; i--) {
      recent.push(data[i]);
    }
    return recent;
  }
};

/**
 * getMin
 * * Used in /components/dashboard/default/LineChart.tsx
 * @param data
 * @returns The object element that has the smallest weight property value
 */
export const getMin = (data: FormattedEntry[]) =>
  parseInt(
    data.reduce((prev, curr) => (prev.weight < curr.weight ? prev : curr))
      .weight
  );

/**
 * getMax
 * * Used in /components/dashboard/default/LineChart.tsx
 * @param data
 * @returns The object element that has the greatest weight property value
 */
export const getMax = (data: FormattedEntry[]) =>
  parseInt(
    data.reduce((prev, curr) => (prev.weight > curr.weight ? prev : curr))
      .weight
  );
