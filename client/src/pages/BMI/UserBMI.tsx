import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type Props = {
  bmi: number | null;
};

const UserBMI: React.FC<Props> = ({ bmi }) => {
  return (
    <Box sx={{
      alignSelf: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
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