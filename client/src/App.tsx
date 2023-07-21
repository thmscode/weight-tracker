import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './layouts/Root';
import ErrorPage from './pages/ErrorPage';
import Homepage from './pages/Homepage';
import BMI from './pages/BMI';
import Exercises from './pages/Exercises';
import Login from './pages/Login';
import Signup from './pages/Signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/bmi", element: <BMI /> },
      { path: "/exercises", element: <Exercises /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    ]
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
