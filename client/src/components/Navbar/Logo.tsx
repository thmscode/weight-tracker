import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';

const Logo = () => {
  return (
    <Box display='flex' alignItems='center'>
      <MonitorWeightIcon />
      <Typography
        color='inherit'
        variant='h5'
        letterSpacing='0.2rem'
        fontWeight={600}
        component='a'
        href='/'
        sx={{
          textDecoration: 'none',
          fontSize: { xs: '1.125rem', md: '1.5rem' },
          marginRight: { sm: '0.5rem', md: '1rem', lg: '1.5rem' }
        }}
      >
        TRACKER
      </Typography>
    </Box>
  );
}

export default Logo;