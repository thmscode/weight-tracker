import Typography from '@mui/material/Typography';

const PageHeader: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Typography
      mb={3}
      fontSize='2rem'
      textTransform='uppercase'
      letterSpacing='0.125rem'
    >
      {text}
    </Typography>
  );
}

export default PageHeader;