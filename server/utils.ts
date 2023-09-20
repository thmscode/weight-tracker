export const calculateBMI = (h: number, w: number): number => {
  const BMI = (w / Math.pow(h, 2)) * 703;
  return Math.round(BMI * 10) / 10;
};

export const formatEntries = (entries: { date: Date, weight: number }[]) => {
  if (entries.length === 0) return [];

  const formatted = entries.map((entry) => {
    return {
      date: new Date(entry.date).toISOString().split('T')[0].toString(),
      weight: entry.weight.toString()
    }
  });

  return formatted;
};

export const arrayToDate = (array: number[]): Date => new Date(array[0], array[1], array[2]);

