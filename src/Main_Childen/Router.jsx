import { createBrowserRouter } from 'react-router';
import Home from '../Component/Home/Home';
import Login from '../Component/Login/Login';
import Root from '../Component/Root/Root';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<Login></Login>
        }
    ]
  }
]);

export default Router;