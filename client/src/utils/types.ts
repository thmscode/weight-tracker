// BMI Page
export type BMIFormValues = {
  height: number;
  weight: number;
};

export type BMIFormProps = {
  handler: (bmi: number) => void;
};

// Constants.ts, src/components/Exercises/Details.tsx
export interface NameValueObj {
  name: string;
  value: string,
};

// Exercises Page
export type Exercise = {
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
};