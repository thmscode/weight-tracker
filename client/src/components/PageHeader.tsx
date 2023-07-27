import Typography from '@mui/material/Typography';

type Props = {
  text: string;
};

const PageHeader: React.FC<Props> = ({ text }) => {
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