import Typography from '@mui/material/Typography';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';

const Logo = () => {
  return (
    <>
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
    </>
  );
}

export default Logo;