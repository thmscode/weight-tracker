import * as Yup from 'yup';

export const USER_DATA_VALIDATION = Yup.object().shape({
  height: Yup.number()
    .min(1, 'Please enter a valid height (>1)')
    .max(120, 'Please enter a valid height (<120)')
    .typeError('Height must be a number')
    .required('Height is required'),
  weight: Yup.number()
    .min(1, 'Please enter a valid weight (>1)')
    .max(2000, 'Please enter a valid weight (<2000)')
    .typeError('Height must be a number')
    .required('Weight is required')
});

export const NEW_ENTRY_VALIDATION = Yup.object().shape({
  weight: Yup.number()
    .min(1, 'Please enter a valid weight (>1)')
    .max(2000, 'Please enter a valid weight (<2000)')
    .typeError('Height must be a number')
    .required('Weight is required'),
  date: Yup.date()
    .required('Date is required')
});

export const EDIT_ENTRY_VALIDATION = Yup.object().shape({
  weight: Yup.number()
    .min(1, 'Please enter a valid weight (>1)')
    .max(2000, 'Please enter a valid weight (<2000)')
    .typeError('Height must be a number')
    .required('Weight is required')
});