import { Box, Button } from '@mui/material';
import UserInfoColumn from './UserInfoColumn';
import { UserObj } from '../../../utils/types';

const Info: React.FC<{ userData: UserObj }> = ({ userData }) => {
  return (
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
        <Button variant='contained'>Edit</Button>
      </Box>
    </Box>
  );
}

export default Info;