import * as Yup from "yup";

export const updateUserSchema = Yup.object({
  height: Yup.number().min(1).max(120).required(),
  weight: Yup.number().min(1).max(2000).required(),
});

export const deleteEntrySchema = Yup.object({
  dateArray: Yup.array().of(Yup.number()).min(3).max(3).required(),
});

export const entrySchema = Yup.object({
  weight: Yup.number().min(1).max(2000).required(),
  dateArray: Yup.array().of(Yup.number()).min(3).max(3).required(),
});
