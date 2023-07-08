import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './layouts/Root';
import ErrorPage from './pages/ErrorPage';
import Homepage from './pages/Homepage';
import BMI from './pages/BMI';
import Workouts from './pages/Workouts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/bmi", element: <BMI /> },
      { path: "/workouts", element: <Workouts /> },
    ]
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
