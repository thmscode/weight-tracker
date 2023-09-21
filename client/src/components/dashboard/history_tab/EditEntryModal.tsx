import {
  Box,
  Button,
  Dialog,
  TextField,
  Typography
} from '@mui/material';
import { Field, Form, Formik } from 'formik';
import axios from "axios";
import { Entry } from '../../../utils/types';
import { useAuth0 } from '@auth0/auth0-react';
import { EDIT_ENTRY_VALIDATION } from '../../../utils/yup-schemas';
import { renderErrorToast, renderSuccessToast } from '../../../utils/toasts';

type Props = {
  state: {
    open: boolean,
    data: Entry | null
  };
  handleClose: () => void;
};

const EditEntryModal: React.FC<Props> = ({ state, handleClose }) => {
  const { user, getAccessTokenSilently } = useAuth0();

  const getDateArray = (date: Date) => {
    const temp = (date.toString().split('-')).map((x, i) => i === 1 ? parseInt(x) - 1 : parseInt(x));
    return temp;
  };

  const handleSubmit = async (date: Date | undefined, weight: number | undefined) => {
    const dateArray = getDateArray(date!);

    try {
      const token = await getAccessTokenSilently();
      const response = await axios.post(
        '/api/user/dashboard/updateEntry',
        { dateArray, weight },
        {
          headers: { Authorization: `Bearer ${token}` },
          params: { email: user!.email, id: user!.sub }
        }
      );
      const { error, msg } = response.data;
      if (!error) {
        renderSuccessToast(msg);
        setTimeout(() => window.location.reload(), 1500);
      } else {
        renderErrorToast(msg);
        throw Error();
      }
    } catch (e) {
      console.log(e);
      renderErrorToast('Something went wrong...');
    }
  };

  return (
    <Dialog open={state.open} onClose={handleClose}>
      <Box p='2rem'>
        <Typography variant='h5' pb='0.75rem'>Edit Entry</Typography>
        <Formik
          initialValues={{
            date: state.data?.date,
            weight: state.data?.weight
          }}
          validationSchema={EDIT_ENTRY_VALIDATION}
          onSubmit={(values) => {
            if (values.weight !== state.data?.weight) {
              handleSubmit(values.date, values.weight);
            }
          }}
        >
          {({ errors, touched, isValid }) => (
            <Form className='user-form'>
              <>
                <Field
                  label='Date'
                  id='date'
                  name='date'
                  as={TextField}
                  variant='standard'
                  disabled
                />
              </>
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
              <Box mt='1rem' display='flex' gap='0.5rem'>
                <Button
                  type='submit'
                  variant='contained'
                  onClick={handleClose}
                  disabled={!isValid}
                >
                  Confirm
                </Button>
                <Button
                  variant='contained'
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Dialog>
  );
}

export default EditEntryModal;