import Button from '@mui/material/Button';

const AuthButton: React.FC<{ label: string; fn: () => Promise<void> }> = ({ label, fn }) => {
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