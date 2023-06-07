import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home/Home";
import Login from "../Components/Login/Login";
import Registration from "../Components/Login/Registration";
import Classes from "../Components/Classes/Classes";
import Instructors from "../Components/Instructors/Instructors";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: 'registration',
            element: <Registration></Registration>
        },
        {
            path:'classes',
            element: <Classes></Classes>
        },
        {
            path: 'instructors',
            element:<Instructors></Instructors>
        }
      ]
    },
  ]);

  export default router;