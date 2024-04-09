import { Box, Button } from '@mui/material';
import UserInfoColumn from './UserInfoColumn';
import { UserObj } from '../../../types';
import { useState } from 'react';
import EditUserModal from './EditUserModal';

const Info: React.FC<{ userData: UserObj }> = ({ userData }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => setOpen(true);

  const handleClose = (): void => setOpen(false);

  return (
    <>
      <Box
        display='flex'
        sx={{
          marginY: { xs: '1rem', sm: '2rem' },
          paddingX: { md: '6rem' },
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: { xs: 'start', sm: 'space-between' },
          gap: { xs: '0.25rem', sm: '0rem' }
        }}
      >
        <UserInfoColumn
          data={[
            { label: 'Name', info: userData.full_name },
            { label: 'Email', info: userData.email }
          ]}
        />
        <UserInfoColumn
          data={[
            { label: 'Height(in)', info: userData.height },
            { label: 'Weight(lbs)', info: userData.weight }
          ]}
        />
        <UserInfoColumn data={[{ label: 'BMI', info: userData.bmi }]} />
        <Box sx={{ alignSelf: { sm: 'center' } }}>
          <Button variant='contained' onClick={handleOpen}>Edit</Button>
        </Box>
      </Box>
      <EditUserModal
        open={open}
        handleClose={handleClose}
        data={{ height: userData.height, weight: userData.weight }}
      />
    </>
  );
}

export default Info;