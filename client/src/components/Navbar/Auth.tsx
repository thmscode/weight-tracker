import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { UNAUTH_ROUTES, AUTH_ROUTES } from '../../utils/constants';
import { useAuth0 } from '@auth0/auth0-react';

const LoggedOutActions = () => {
  return (
    <Stack direction='row' spacing={3}>
      {UNAUTH_ROUTES.map((route, index) => (
        <Button
          key={index}
          href={route.value}
          sx={{
            color: 'inherit',
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

const LoggedInActions = () => {
  return (
    <Stack direction='row' spacing={3}>
      {AUTH_ROUTES.map((route, index) => (
        <Button
          key={index}
          href={route.value}
          sx={{
            color: 'inherit',
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

const Auth = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LoggedInActions /> : <LoggedOutActions />;
}

export default Auth;