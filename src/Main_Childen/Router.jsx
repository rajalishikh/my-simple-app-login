import { createBrowserRouter } from 'react-router';
import Home from '../Component/Home/Home';
import Login from '../Component/Login/Login';
import Register from '../Component/Register/Register';
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
        },
        {
          path:"/register",
          element:<Register></Register>
        }
    ]
  }
]);

export default Router;