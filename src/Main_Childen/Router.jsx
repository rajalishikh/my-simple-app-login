import { createBrowserRouter } from 'react-router';
import Home from '../Component/Home/Home';
import Login from '../Component/Login/Login';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
        
        {
            path:"/login",
            element:<Login></Login>
        }
    ]
  }
]);

export default Router;