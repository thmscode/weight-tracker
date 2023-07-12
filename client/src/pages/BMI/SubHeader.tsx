import Typography from '@mui/material/Typography';

type Props = {
  text: string
};

const SubHeader: React.FC<Props> = ({ text }) => {
  return (
    <Typography
      variant='h5'
      mb={1}
      sx={{ textDecoration: 'underline' }}
    >
      {text}
    </Typography>
  );
}

export default SubHeader;