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

// Dashboard Page
export type Entry = {
  date: Date;
  weight: number;
};

export type UserObj = {
  first_name: string;
  last_name: string;
  full_name: string;
  email: string;
  id: string;
  weight: null | number;
  height: null | number;
  bmi: null | number;
  weight_entries: Entry[];
};

export type TabProps = {
  value: number;
  index: number;
};

export type FormattedEntry = {
  date: string,
  weight: string
};