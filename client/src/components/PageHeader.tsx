import Typography from '@mui/material/Typography';

type Props = {
  text: string;
};

const PageHeader: React.FC<Props> = ({ text }) => {
  return (
    <Typography
      mb={3}
      sx={{
        textTransform: 'uppercase',
        fontSize: '2rem',
        letterSpacing: '0.125rem'
      }}
    >
      {text}
    </Typography>
  );
}

export default PageHeader;