import { Box, Typography } from '@mui/material';

const UserBMI: React.FC<{ bmi: number | null }> = ({ bmi }) => {
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