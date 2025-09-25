import { createBrowserRouter } from 'react-router';
import Home from '../Component/Home/Home';
import Login from '../Component/Login/Login';
import Register from '../Component/Register/Register';
import Root from '../Component/Root/Root';
import SignUp from '../Component/SignUp/SignUp';

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
        },
        {
          path:"/signUp",
          element:<SignUp></SignUp>
        }
    ]
  }
]);

export default Router;