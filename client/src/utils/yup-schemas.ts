import * as Yup from 'yup';

export const BMI_FORM_VALIDATION = Yup.object().shape({
  height: Yup.number()
    .min(1, 'Please enter a valid height')
    .required('Height is required')
    .typeError('Height must be a number'),
  weight: Yup.number()
    .min(1, 'Please enter a valid weight')
    .required('Weight is required')
    .typeError('Weight must be a number')
});

export const USER_DATA_FORM_VALIDATION = Yup.object().shape({
  height: Yup.number()
    .min(1, 'Please enter a valid height')
    .max(120, 'Please enter a valid height')
    .typeError('Height must be a number'),
  weight: Yup.number()
    .min(1, 'Please enter a valid weight')
    .max(2000, 'Please enter a valid weight')
    .typeError('Height must be a number')
});