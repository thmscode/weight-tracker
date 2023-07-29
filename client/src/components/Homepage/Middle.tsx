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
          <Typography variant='h6'>Set Your Goals</Typography>
          <GrFlag size={84} />
        </SellingPoint>
        <SellingPoint>
          <Typography variant='h6'>Learn About Exercise</Typography>
          <MdSchool size={84} />
        </SellingPoint>
        <SellingPoint>
          <Typography variant='h6'>Track Your Weight</Typography>
          <BsJournalRichtext size={84} />
        </SellingPoint>
        <SellingPoint>
          <Typography variant='h6'>Achieve Your Goals</Typography>
          <BiLineChartDown size={84} />
        </SellingPoint>
      </Box>
    </Box>
  );
}

export default Middle;