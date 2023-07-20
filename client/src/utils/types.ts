// BMI Page
export type BMIFormValues = {
  height: number;
  weight: number;
};

export type BMIFormProps = {
  handler: (bmi: number) => void;
};

// Constants.ts
export interface IOption {
  name: string;
  value: string,
};