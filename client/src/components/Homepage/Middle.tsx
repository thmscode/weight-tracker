import { Box, Typography } from '@mui/material';
import { GrFlag } from 'react-icons/gr';
import { MdSchool } from 'react-icons/md';
import { BsJournalRichtext } from 'react-icons/bs';
import { BiLineChartDown } from 'react-icons/bi';

const SellingPoint: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
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
    <Typography variant='h6' sx={{ textTransform: 'capitalize' }}>{text}</Typography>
  );
}

const Middle = () => {
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
      >
        Learn. Track. Lose.
      </Typography>
      <Box
        mt='2rem'
        display='flex'
        gap='8rem'
      >
        <SellingPoint>
          <Subheader text='set your goals' />
          <GrFlag size={84} />
        </SellingPoint>
        <SellingPoint>
          <Subheader text='learn about exercise' />
          <MdSchool size={84} />
        </SellingPoint>
        <SellingPoint>
          <Subheader text='track your weight' />
          <BsJournalRichtext size={84} />
        </SellingPoint>
        <SellingPoint>
          <Subheader text='achieve your goals' />
          <BiLineChartDown size={84} />
        </SellingPoint>
      </Box>
    </Box>
  );
}

export default Middle;