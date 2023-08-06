import Stack from '@mui/material/Stack';
import { NAV_ROUTES } from '../../utils/constants';
import NavButton from './NavButton';

const NavRoutes = () => {
  return (
    <Stack direction='row' spacing={3} sx={{ flexGrow: 1 }}>
      {NAV_ROUTES.map((route, index) => (
        <NavButton
          key={index}
          href={route.value}
          label={route.name}
        />
      ))}
    </Stack>
  );
}

export default NavRoutes;