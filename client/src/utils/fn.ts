/*
  Function that turns a date string and converts it into an array
  ie. Input - '2023-09-27' | Output - [2023, 08, 27]

  Used In: NewEntryModal.tsx, EditEntryModal.tsx, DeleteModal.tsx
  Note: Month value has 1 subtracted from it because the Month property of Date objects are 0-indexed
*/
export const getDateArray = (date: string): number[] => date.split('-').map((x, i) => i === 1 ? parseInt(x) - 1 : parseInt(x));
