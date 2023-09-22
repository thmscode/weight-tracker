import Typography from '@mui/material/Typography';

const PageHeader: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Typography
      mb={3}
      textTransform='uppercase'
      letterSpacing='0.125rem'
      sx={{
        fontSize: {
          xs: '1rem',
          sm: '1.25rem',
          md: '1.5rem',
          lg: '1.75rem',
          xl: '2rem'
        }
      }}
    >
      {text}
    </Typography>
  );
}

export default PageHeader;