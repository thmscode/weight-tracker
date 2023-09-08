import { Box, Button } from '@mui/material';
import UserInfoColumn from './UserInfoColumn';
import { UserObj } from '../../../utils/types';
import { useState } from 'react';
import EditUser from '../../forms/EditUser';

const Info: React.FC<{ userData: UserObj }> = ({ userData }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => setOpen(true);

  const handleClose = (): void => setOpen(false);

  return (
    <>
      <Box
        display='flex'
        justifyContent='space-between'
        px='6rem'
        my='2rem'
      >
        <UserInfoColumn
          data={[
            { label: 'Name', info: userData.full_name },
            { label: 'Email', info: userData.email }
          ]}
        />
        <UserInfoColumn
          data={[
            { label: 'Height (in)', info: userData.height },
            { label: 'Weight (lbs)', info: userData.weight }
          ]}
        />
        <UserInfoColumn data={[{ label: 'BMI', info: userData.bmi }]} />
        <Box>
          <Button variant='contained' onClick={handleOpen}>Edit</Button>
        </Box>
      </Box>
      <EditUser
        open={open}
        handleClose={handleClose}
        data={{ height: userData.height, weight: userData.weight }}
      />
    </>
  );
}

export default Info;