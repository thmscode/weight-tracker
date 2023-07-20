import { BMIFormValues, BMIFormProps } from '../../utils/types';
import { Box, Button, TextField } from '@mui/material';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { BMI_FORM_VALIDATION } from '../../utils/yup-schemas';

const MetricForm: React.FC<BMIFormProps> = ({ handler }) => {
  const calculateBMI_MET = (height: number, weight: number): number => {
    const BMI = weight / Math.pow(height / 100, 2);
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
        const BMI = calculateBMI_MET(values.height, values.weight);
        handler(BMI);
        setSubmitting(false);
      }}
    >
      {({ errors, touched }) => (
        <Form className='BMI-form'>
          <Box>
            <Field
              label='Height (cm)'
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
              label='Weight (kg)'
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

export default MetricForm;