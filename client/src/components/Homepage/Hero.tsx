import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Typography } from '@mui/material';

const Hero = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Box
      mt='3rem'
      display='flex'
      justifyContent='space-between'
    >
      <Box maxWidth='49%' py='4rem'>
        <Typography
          fontSize='2.75rem'
          fontWeight={600}
          letterSpacing='0.15rem'
          lineHeight='3.4rem'
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </Typography>
        <Typography
          fontSize='1.125rem'
          lineHeight='1.6rem'
          mt='2rem'
          mb='3rem'
        >
          Et repellat dignissimos, mollitia quidem illum quod sapiente eos qui nisi minima. Omnis sequi nobis facere voluptas ad fugiat explicabo sed alias!
          Tempora aperiam optio quo reiciendis error velit dolores ad.
        </Typography>
        <Button
          variant='contained'
          size='large'
          sx={{ py: '1.125rem', px: '2rem' }}
          onClick={() => loginWithRedirect()}
        >
          Sign Up for Free
        </Button>
      </Box>
      <Box
        flexGrow={1}
        maxWidth='49%'
        component='img'
        borderRadius='3rem'
        alt="Top of a physician's scale"
        src='/picture_of_a_scale.png'
      />
    </Box>
  );
}

export default Hero;