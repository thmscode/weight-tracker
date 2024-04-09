import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Root from './layouts/Root';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import BMI from './pages/BMI';
import Exercises from './pages/Exercises';
import AuthenticationGuard from './components/AuthenticationGuard';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bmi", element: <BMI /> },
      { path: "/exercises", element: <Exercises /> },
      { path: "/dashboard", element: <AuthenticationGuard component={Dashboard} /> },
    ]
  },
]);

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) return <LoadingSpinner />

  return (
    <RouterProvider router={router} />
  );
}

export default App;