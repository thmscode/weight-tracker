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
        fontSize: '1.125rem',
        letterSpacing: '0.1rem'
      }}
    >
      {label}
    </Button>
  );
}

export default NavButton;