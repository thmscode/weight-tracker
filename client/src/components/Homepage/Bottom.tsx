import { Box, Button, Typography } from '@mui/material';
import { HOMEPAGE_BLURBS } from '../../utils/constants';

type Props = {
  header: string;
  text: string;
};

const Blurb: React.FC<Props> = ({ header, text }) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      gap='.75rem'
    >
      <Typography
        textAlign='center'
        variant='h4'
        fontWeight={600}
      >
        {header}
      </Typography>
      <Typography
        textAlign='center'
        maxWidth='75%'
        lineHeight='1.75rem'
      >
        {text}
      </Typography>
    </Box>
  );
}

const Bottom = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      mb='4rem'
      gap='3rem'
    >
      {HOMEPAGE_BLURBS.map(blurb => <Blurb header={blurb.name} text={blurb.value} />)}
      <Button
        size='large'
        variant='contained'
        href='/signup'
        sx={{ py: '1.25rem', px: '3rem' }}
      >
        Start Tracking Today!
      </Button>
    </Box>
  );
}

export default Bottom;