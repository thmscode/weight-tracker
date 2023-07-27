import { Box, Typography } from '@mui/material';

type Props = {
  bmi: number | null;
};

const UserBMI: React.FC<Props> = ({ bmi }) => {
  return (
    <Box
      alignSelf='center'
      display='flex'
      flexDirection='column'
      alignItems='center'
    >
      <Typography variant='h5' sx={{ textDecoration: 'underline' }}>
        Your BMI
      </Typography>
      <Typography variant='h5'>
        {bmi ? bmi : 'N/A'}
      </Typography>
    </Box>
  );
}

export default UserBMI;