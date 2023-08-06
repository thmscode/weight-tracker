import Button from '@mui/material/Button';

type Props = {
  label: string;
  fn: () => Promise<void>;
};

const AuthButton: React.FC<Props> = ({ label, fn }) => {
  return (
    <Button
      color='inherit'
      sx={{
        fontSize: '1.125rem',
        letterSpacing: '0.1rem'
      }}
      onClick={fn}
    >
      {label}
    </Button>
  );
}

export default AuthButton;