import * as Yup from 'yup';

export const BMI_FORM_VALIDATION = Yup.object().shape({
  height: Yup.number()
    .min(1, 'Please enter a valid height')
    .required('Height is required'),
  weight: Yup.number()
    .min(1, 'Please enter a valid weight')
    .required('Weight is required')
});