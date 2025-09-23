import { createBrowserRouter } from 'react-router';
import Home from '../Component/Home/Home';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  }
]);

export default Router;