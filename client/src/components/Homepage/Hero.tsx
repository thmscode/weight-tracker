import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Typography } from '@mui/material';
import { HERO_HEADER, HERO_TEXT } from '../../constants';

const Header = () => {
  return (
    <Typography
      fontWeight={600}
      letterSpacing='0.15rem'
      sx={{
        fontSize: {
          xs: '1.3rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2.75rem'
        },
        textAlign: { xs: 'center', md: 'start' },
        lineHeight: {
          xs: '1.75rem',
          sm: '2.25rem',
          md: '2.5rem',
          lg: '3rem',
          xl: '3.4rem'
        }
      }}
    >
      {HERO_HEADER}
    </Typography>
  );
}

const Subtext = () => {
  return (
    <Typography
      lineHeight='1.6rem'
      sx={{
        fontSize: { xs: '1rem', lg: '1.125rem' },
        textAlign: { xs: 'center', md: 'start' },
        my: { xs: '1rem', md: '1.5rem', xl: '2rem' }
      }}
    >
      {HERO_TEXT}
    </Typography>
  );
}

const Hero = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Box
      display='flex'
      justifyContent='space-between'
      sx={{
        flexDirection: { xs: 'column', md: 'row' },
        marginTop: { md: '3rem' }
      }}
    >
      <Box
        py='4rem'
        display='flex'
        flexDirection='column'
        sx={{
          maxWidth: { xs: '100%', md: '49%' },
          alignItems: { xs: 'center', md: 'start' }
        }}
      >
        <Header />
        <Subtext />
        <Button
          variant='contained'
          size='small'
          onClick={() => loginWithRedirect()}
          sx={{
            py: { xs: '0.75rem', sm: '1.125rem' },
            px: '2rem',
            mt: '1rem'
          }}
        >
          Get Started for Free
        </Button>
      </Box>
      <Box
        flexGrow={1}
        maxWidth='49%'
        component='img'
        borderRadius='3rem'
        alt="Top of a physician's scale"
        src='/picture_of_a_scale.png'
        sx={{
          display: {
            xs: 'none',
            md: 'inline'
          }
        }}
      />
    </Box>
  );
}

export default Hero;