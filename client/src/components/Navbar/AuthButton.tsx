import Button from '@mui/material/Button';

type Props = {
  key: string;
  label: string;
  fn: () => Promise<void>;
}

const AuthButton: React.FC<Props> = ({ key, label, fn }) => {
  return (
    <Button
      key={key}
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