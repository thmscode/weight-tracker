import { Box, Button, TextField, Typography } from '@mui/material';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import UserBMI from './UserBMI';
import BMIChart from './BMIChart';

type Props = {
  value: number;
  index: number;
};

type Values = {
  height: number;
  weight: number;
}

const FORM_VALIDATION = Yup.object().shape({
  height: Yup.number()
    .min(1, 'Please enter a valid height')
    .required('Height is required'),
  weight: Yup.number()
    .min(1, 'Please enter a valid weight')
    .required('Weight is required')
})

const Imperial: React.FC<Props> = ({ value, index }) => {
  const [bmi, setBMI] = useState<number | null>(null);

  const calculateBMI = (height: number, weight: number): number => {
    const BMI = (weight / Math.pow(height, 2)) * 703;
    return Math.round(BMI * 10) / 10;
  };

  return (
    <Box hidden={value !== index}>
      {value === index && (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Formik
            initialValues={{ height: 0, weight: 0 }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(
              values: Values,
              { setSubmitting }: FormikHelpers<Values>
            ) => {
              const BMI = calculateBMI(values.height, values.weight);
              setBMI(BMI);
              setSubmitting(false);
            }}
          >
            {({ errors, touched }) => (
              <Form className='BMI-form'>
                <Box>
                  <Field label='Height (in)' id='height' name='height' as={TextField} variant='standard' />
                  {errors.height && touched.height ? (
                    <div className='error-message'>
                      {errors.height}
                    </div>
                  ) : null}
                </Box>
                <Box>
                  <Field label='Weight (lbs)' id='weight' name='weight' as={TextField} variant='standard' />
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
          <UserBMI bmi={bmi} />
          <BMIChart />
        </Box>
      )}
    </Box>
  );
}

export default Imperial;