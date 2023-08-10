import { useAuth0 } from "@auth0/auth0-react";
import Stack from '@mui/material/Stack';
import AuthButton from "./AuthButton";
import NavButton from "./NavButton";

const UnauthorizedActions = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Stack direction='row' spacing={3}>
      <AuthButton
        key='login'
        label='login'
        fn={() => loginWithRedirect()}
      />
      <AuthButton
        key='sign-up'
        label='sign-up'
        fn={() => loginWithRedirect({ authorizationParams: { screen_hint: 'signup' } })}
      />
    </Stack>
  );
}

const AuthorizedActions = () => {
  const { logout } = useAuth0();

  return (
    <Stack direction='row' spacing={3}>
      <NavButton
        key='dashboard'
        href='/dashboard'
        label='dashboard'
      />
      <AuthButton
        key='logout'
        label='logout'
        fn={() => logout({ logoutParams: { returnTo: window.location.origin } })}
      />
    </Stack>
  );
}

const UserTools = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <AuthorizedActions /> : <UnauthorizedActions />
}

export default UserTools;