import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { NameValueObj } from '../../utils/types';

type Props = {
  muscle: string;
  equipment: string;
  difficulty: string;
};

const Details: React.FC<Props> = ({ muscle, equipment, difficulty }) => {
  const exerciseDetails: NameValueObj[] = [
    { name: 'Targets:', value: muscle },
    { name: 'Required Equipment:', value: equipment.split('_').join(' ') },
    { name: 'Difficulty:', value: difficulty },
  ];

  return (
    <Box
      display='flex'
      justifyContent='space-between'
      mb='1rem'
    >
      {exerciseDetails.map((detail, index) =>
        <Box key={`exercise-${index}`} sx={{ display: 'flex', gap: '0.5rem' }}>
          <Typography textTransform='uppercase' letterSpacing='0.15rem'>{detail.name}</Typography>
          <Typography textTransform='uppercase' fontWeight={600}>{detail.value}</Typography>
        </Box>
      )}
    </Box>
  );
}

export default Details;