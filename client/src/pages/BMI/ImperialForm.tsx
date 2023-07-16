import { BMIFormValues, BMIFormProps } from '../../types';
import { Box, Button, TextField } from '@mui/material';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { BMI_FORM_VALIDATION } from '../../yup-schemas';

const ImperialForm: React.FC<BMIFormProps> = ({ handler }) => {
  const calculateBMI_IMP = (height: number, weight: number): number => {
    const BMI = (weight / Math.pow(height, 2)) * 703;
    return Math.round(BMI * 10) / 10;
  };

  return (
    <Formik
      initialValues={{ height: 0, weight: 0 }}
      validationSchema={BMI_FORM_VALIDATION}
      onSubmit={(
        values: BMIFormValues,
        { setSubmitting }: FormikHelpers<BMIFormValues>
      ) => {
        const BMI = calculateBMI_IMP(values.height, values.weight);
        handler(BMI);
        setSubmitting(false);
      }}
    >
      {({ errors, touched }) => (
        <Form className='BMI-form'>
          <Box>
            <Field
              label='Height (in)'
              id='height'
              name='height'
              as={TextField}
              variant='standard'
            />
            {errors.height && touched.height ? (
              <div className='error-message'>
                {errors.height}
              </div>
            ) : null}
          </Box>
          <Box>
            <Field
              label='Weight (lbs)'
              id='weight'
              name='weight'
              as={TextField}
              variant='standard'
            />
            {errors.weight && touched.weight ? (
              <div className='error-message'>
                {errors.weight}
              </div>
            ) : null}
          </Box>
          <Button type='submit' variant='contained'>Submit</Button>
        </Form>
      )}
    </Formik>
  );
}

export default ImperialForm;