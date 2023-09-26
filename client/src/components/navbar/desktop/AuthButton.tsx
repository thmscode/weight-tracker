import Button from '@mui/material/Button';

type Props = {
  label: string;
  fn: () => Promise<void>;
};

const AuthButton: React.FC<Props> = ({ label, fn }) => {
  return (
    <Button
      color='inherit'
      onClick={fn}
      sx={{
        letterSpacing: '0.1rem',
        fontSize: { xs: '0.9rem', md: '1rem', lg: '1.125rem' }
      }}
    >
      {label}
    </Button>
  );
}

export default AuthButton;