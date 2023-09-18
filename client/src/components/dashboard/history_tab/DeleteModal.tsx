import {
  Box,
  Button,
  Dialog,
  Typography
} from '@mui/material';
import axios from "axios";
import { Entry } from '../../../utils/types';
import { useAuth0 } from '@auth0/auth0-react';

type Props = {
  state: {
    open: boolean,
    data: Entry | null
  };
  handleClose: () => void;
};

const DeleteModal: React.FC<Props> = ({ state, handleClose }) => {
  const { user, getAccessTokenSilently } = useAuth0();

  const getDateArray = (entry: Entry) => {
    const temp = (entry.date.toString().split('-')).map((x, i) => i === 1 ? parseInt(x) - 1 : parseInt(x));
    return temp;
  };

  const handleDelete = async (entry: Entry | null) => {
    const dateArray = getDateArray(entry!);

    try {
      const token = await getAccessTokenSilently();
      const response = await axios.delete(
        '/api/user/dashboard/deleteEntry',
        {
          headers: { Authorization: `Bearer ${token}` },
          params: { email: user!.email, id: user!.sub },
          data: {
            dateArray,
            weight: entry!.weight
          }
        }
      );
      const { error, data } = response.data;
      if (!error) {
        console.log(data);
        window.location.reload();
      } else throw Error();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Dialog open={state.open} onClose={handleClose}>
      <Box p='2rem'>
        <Typography variant='h5' pb='0.75rem'>Delete Entry?</Typography>
        <Typography>This action is irreversible.</Typography>
        <Typography>Are you sure you want to delete this entry?</Typography>
        <Box mt='1rem' display='flex' gap='0.5rem'>
          <Button
            type='submit'
            variant='contained'
            color='error'
            onClick={() => handleDelete(state.data)}
          >
            Delete
          </Button>
          <Button
            variant='contained'
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}

export default DeleteModal;