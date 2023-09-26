import Button from '@mui/material/Button';

type Props = {
  href: string;
  label: string;
};

const NavButton: React.FC<Props> = ({ href, label }) => {
  return (
    <Button
      href={href}
      color='inherit'
      sx={{
        letterSpacing: '0.1rem',
        fontSize: { xs: '0.9rem', md: '1rem', lg: '1.125rem' }
      }}
    >
      {label}
    </Button>
  );
}

export default NavButton;