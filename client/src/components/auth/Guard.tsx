import { withAuthenticationRequired } from "@auth0/auth0-react";
import { ComponentType } from 'react';
import LoadingSpinner from "../ux/LoadingSpinner";

const Guard: React.FC<{ component: ComponentType }> = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <LoadingSpinner />
  });

  return <Component />
}

export default Guard;