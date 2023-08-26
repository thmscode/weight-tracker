import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Exercise } from '../../utils/types';
import Details from './Details';

const Card: React.FC<{ exercise: Exercise }> = ({ exercise }) => {
  const BASE_YT_URL: string = 'https://www.youtube.com/results?search_query=';

  return (
    <Box
      borderRadius='1.25rem'
      py={2}
      px={4}
      boxShadow={3}
    >
      <Typography
        textTransform='uppercase'
        fontSize='1.5rem'
        letterSpacing='0.25rem'
        fontWeight={600}
      >
        {exercise.name}
      </Typography>
      <Divider sx={{ mt: '0.5rem', mb: '1rem' }} />
      <Details
        muscle={exercise.muscle}
        equipment={exercise.equipment}
        difficulty={exercise.difficulty}
      />
      <>
        <Typography
          textTransform='uppercase'
          letterSpacing='0.15rem'
          sx={{ textDecoration: 'underline' }}
        >
          Instructions
        </Typography>
        <Typography>{exercise.instructions}</Typography>
      </>
      <Divider sx={{ mt: '0.5rem', mb: '1rem' }} />
      <>
        <Link
          textTransform='uppercase'
          letterSpacing='0.15rem'
          target="_blank"
          rel="noopener"
          href={`${BASE_YT_URL}${exercise.name.split(' ').join('+')}`}
        >
          YouTube Search
        </Link>
      </>
    </Box>
  );
}

export default Card;