export type BMIFormValues = {
  height: number;
  weight: number;
};

export type BMIFormProps = {
  handler: (bmi: number) => void;
};