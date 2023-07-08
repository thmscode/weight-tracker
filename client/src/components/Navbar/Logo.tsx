import Typography from '@mui/material/Typography';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';

const Logo = () => {
  return (
    <>
      <MonitorWeightIcon sx={{ mr: 0.5 }} />
      <Typography
        variant='h5'
        component='a'
        href='/'
        sx={{
          textDecoration: 'none',
          color: 'inherit',
          letterSpacing: '0.2rem',
          fontWeight: 600,
          mr: 4
        }}
      >
        TRACKER
      </Typography>
    </>
  );
}

export default Logo;