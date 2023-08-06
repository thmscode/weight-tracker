import Typography from '@mui/material/Typography';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import { Box } from '@mui/material';

const Logo = () => {
  return (
    <Box display='flex' alignItems='center'>
      <MonitorWeightIcon sx={{ mr: 0.5 }} />
      <Typography
        color='inherit'
        variant='h5'
        letterSpacing='0.2rem'
        fontWeight={600}
        mr={4}
        component='a'
        href='/'
        sx={{ textDecoration: 'none' }}
      >
        TRACKER
      </Typography>
    </Box>
  );
}

export default Logo;