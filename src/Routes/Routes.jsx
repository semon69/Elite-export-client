import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home/Home";
import Login from "../Components/Login/Login";
import Registration from "../Components/Login/Registration";
import Classes from "../Components/Classes/Classes";
import Instructors from "../Components/Instructors/Instructors";
import Dashboard from "../Layout/Dashboard";
import MyClass from "../Components/Dashboard/MyClass/MyClass";
import MyEnrollClass from "../Components/Dashboard/MyEnrollClass/MyEnrollClass";

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
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'myClass',
                element: <MyClass></MyClass>
            },
            {
                path: 'myEnrollClass',
                element: <MyEnrollClass></MyEnrollClass>
            }
        ]
    }
  ]);

  export default router;