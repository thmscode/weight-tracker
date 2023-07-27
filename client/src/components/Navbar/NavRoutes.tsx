import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { NAV_ROUTES } from '../../utils/constants';

const NavRoutes = () => {
  return (
    <Stack direction='row' spacing={3} sx={{ flexGrow: 1 }}>
      {NAV_ROUTES.map((route, index) => (
        <Button
          key={index}
          href={route.value}
          color='inherit'
          sx={{
            fontSize: '1.125rem',
            letterSpacing: '0.1rem'
          }}
        >
          {route.name}
        </Button>
      ))}
    </Stack>
  );
}

export default NavRoutes;