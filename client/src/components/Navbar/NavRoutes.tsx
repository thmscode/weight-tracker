import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const NAV_ROUTES = [
  { title: 'BMI', href: '/bmi' },
  { title: 'WORKOUTS', href: '/workouts' }
];

const NavRoutes = () => {
  return (
    <Stack direction='row' spacing={3} sx={{ flexGrow: 1 }}>
      {NAV_ROUTES.map(route => (
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

export default NavRoutes;