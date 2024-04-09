import Stack from '@mui/material/Stack';
import { NAV_ROUTES } from '../../../constants';
import NavButton from './NavButton';

const PageNavigation = () => {
  return (
    <Stack
      direction='row'
      sx={{
        flexGrow: 1,
        gap: { sm: '0.25rem', lg: '1.5rem' }
      }}
    >
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

export default PageNavigation;