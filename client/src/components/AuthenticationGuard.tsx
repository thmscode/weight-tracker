import { withAuthenticationRequired } from "@auth0/auth0-react";
import { ComponentType } from 'react';
import LoadingSpinner from "./LoadingSpinner";

type Props = {
  component: ComponentType;
};

const AuthenticationGuard: React.FC<Props> = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <LoadingSpinner />
  });

  return <Component />
}

export default AuthenticationGuard;