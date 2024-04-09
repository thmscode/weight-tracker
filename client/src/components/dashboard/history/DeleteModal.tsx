import {
  Box,
  Button,
  Dialog,
  Typography
} from '@mui/material';
import axios from "axios";
import { Entry, HistoryModalProps } from '../../../types';
import { useAuth0 } from '@auth0/auth0-react';
import { renderErrorToast, renderSuccessToast } from '../../../utils/toasts';
import { getDateArray } from '../../../utils/fn';

const DeleteModal: React.FC<HistoryModalProps> = ({ open, data, handleClose }) => {
  const { user, getAccessTokenSilently } = useAuth0();

  const handleDelete = async (entry: Entry | null) => {
    const dateArray = getDateArray(entry!.date.toString());
    const token = await getAccessTokenSilently();

    return await axios.delete(
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
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box p='2rem'>
        <Typography variant='h5' pb='0.75rem'>Delete Entry?</Typography>
        <Typography pb='0.5rem'>This action is irreversible.</Typography>
        <>
          <Typography>Are you sure you want to</Typography>
          <Typography>delete this entry?</Typography>
        </>
        <Box mt='1rem' display='flex' gap='0.75rem'>
          <Button
            type='submit'
            variant='contained'
            color='error'
            onClick={() => {
              handleDelete(data)
                .then(response => {
                  const { error, msg } = response.data;
                  if (!error) {
                    renderSuccessToast(msg);
                    handleClose();
                    setTimeout(() => window.location.reload(), 1500);
                  } else renderErrorToast(msg);
                })
                .catch(e => renderErrorToast(e.response.data.msg));
            }}
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