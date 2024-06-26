import { Box, Typography } from '@mui/material';
import { GrFlag } from 'react-icons/gr';
import { MdSchool } from 'react-icons/md';
import { BsJournalRichtext } from 'react-icons/bs';
import { BiLineChartDown } from 'react-icons/bi';

const Highlight: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      gap='0.75rem'
    >
      {children}
    </Box>
  );
}

const Subheader: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Typography
      variant='h6'
      sx={{
        textTransform: 'capitalize',
        fontSize: { xs: '1rem', md: '1.25rem', lg: '1.5rem' }
      }}
    >
      {text}
    </Typography>
  );
}

const SellingPoints = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
    >
      <Typography
        textAlign='center'
        variant='h4'
        fontWeight={600}
        sx={{ fontSize: { xs: '1.5rem', md: '1.75rem', lg: '2rem' } }}
      >
        Learn. Track. Lose.
      </Typography>
      <Box
        mt='2rem'
        display='flex'
        sx={{
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: '2rem', sm: '8rem', md: '4rem' },
        }}
      >
        <Box
          display='flex'
          gap='2rem'
          sx={{
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: '2rem', md: '4rem' }
          }}
        >
          <Highlight>
            <Subheader text='set your goals' />
            <GrFlag className='homepage-icon' />
          </Highlight>
          <Highlight>
            <Subheader text='learn about exercise' />
            <MdSchool className='homepage-icon' />
          </Highlight>
        </Box>
        <Box
          display='flex'
          gap='2rem'
          sx={{
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: '2rem', md: '4rem' }
          }}
        >
          <Highlight>
            <Subheader text='track your weight' />
            <BsJournalRichtext className='homepage-icon' />
          </Highlight>
          <Highlight>
            <Subheader text='achieve your goals' />
            <BiLineChartDown className='homepage-icon' />
          </Highlight>
        </Box>
      </Box>
    </Box>
  );
}

export default SellingPoints;