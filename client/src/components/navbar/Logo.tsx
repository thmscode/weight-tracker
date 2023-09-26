import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';

const Logo = () => {
  return (
    <Box display='flex' alignItems='center'>
      <MonitorWeightIcon className='logo-icon' />
      <Typography
        color='inherit'
        variant='h5'
        letterSpacing='0.2rem'
        component='a'
        href='/'
        sx={{
          textDecoration: 'none',
          fontSize: { xs: '0.9rem', sm: '1.125rem', md: '1.5rem' },
          marginRight: { sm: '0.5rem', md: '1rem', lg: '1.5rem' },
          fontWeight: { md: '600' },
        }}
      >
        TRACKER
      </Typography>
    </Box>
  );
}

export default Logo;