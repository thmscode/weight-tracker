import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const UNAUTH_ROUTES = [
  { title: 'LOGIN', href: '/login' },
  { title: 'REGISTER', href: '/register' }
];

const Unauth = () => {
  return (
    <Stack direction='row' spacing={3}>
      {UNAUTH_ROUTES.map(route => (
        <Button
          href={route.href}
          sx={{
            color: 'inherit',
            fontSize: '1.125rem',
            letterSpacing: '0.1rem'
          }}
        >
          {route.title}
        </Button>
      ))}
    </Stack>
  );
}

export default Unauth;