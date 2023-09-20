import {
  Box,
  Button,
  Dialog,
  TextField,
  Typography
} from "@mui/material";
import { Field, Form, Formik } from 'formik';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { NEW_ENTRY_VALIDATION } from "../../../utils/yup-schemas";

type Props = {
  open: boolean;
  handleClose: () => void;
};

const NewEntryModal: React.FC<Props> = ({ open, handleClose }) => {
  const { user, getAccessTokenSilently } = useAuth0();
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
  const day = date.getDate();

  const handleSubmit = async (value: { weight: number, date: string }) => {
    const { weight, date } = value;
    const dateArray = date.split('-').map((x: string, i: number) => i === 1 ? parseInt(x) - 1 : parseInt(x));

    try {
      const token = await getAccessTokenSilently();
      const response = await axios.post(
        '/api/user/dashboard/newEntry',
        { weight, dateArray },
        {
          headers: { Authorization: `Bearer ${token}` },
          params: { email: user!.email, id: user!.sub }
        }
      );
      const { error, data } = response.data;
      if (!error) {
        console.log(data);
        window.location.reload();
      }
      else throw Error();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box p='2rem'>
        <Typography variant='h5' pb='0.75rem'>New Weight Entry</Typography>
        <Formik
          initialValues={{
            weight: 0,
            date: `${year}-${month}-${day}`
          }}
          validationSchema={NEW_ENTRY_VALIDATION}
          onSubmit={(value) => handleSubmit(value)}
        >
          {({ errors, touched, isValid }) => (
            <Form className='user-form'>
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
              <Box>
                <Field
                  id='date'
                  name='date'
                  as={TextField}
                  type='date'
                />
                {errors.date && touched.date ? (
                  <div className='error-message'>
                    {errors.date}
                  </div>
                ) : null}
              </Box>
              <Box display='flex' justifyContent='center' gap='0.75rem'>
                <Button
                  type='submit'
                  variant='contained'
                  onClick={handleClose}
                  disabled={!isValid}
                >
                  Submit
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

export default NewEntryModal;