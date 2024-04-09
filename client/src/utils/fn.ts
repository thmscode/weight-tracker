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
export const constructURL = (
  type: string,
  muscle: string,
  difficulty: string
): string => {
  const BASE_URL: string = "https://api.api-ninjas.com/v1/exercises";
  if (type === "" && muscle === "" && difficulty === "") return BASE_URL;
  else {
    const typeParam = type !== "" ? `type=${type}&` : "";
    const muscleParam = muscle !== "" ? `muscle=${muscle}&` : "";
    const difficultyParam = difficulty !== "" ? `difficulty=${difficulty}` : "";
    return BASE_URL + "?" + typeParam + muscleParam + difficultyParam;
  }
};
