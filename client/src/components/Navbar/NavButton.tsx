import Button from '@mui/material/Button';

type Props = {
  key: string | number;
  href: string;
  label: string;
}

const NavButton: React.FC<Props> = ({ key, href, label }) => {
  return (
    <Button
      key={key}
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