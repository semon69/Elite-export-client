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
import AllUsers from "../Components/Dashboard/AllUser/AllUser";
import PrivateRoute from "./PrivateRoutes";
import AddAClass from "../Components/Dashboard/AddAClass/AddAClass";
import ManageClasses from "../Components/Dashboard/ManageClasses/ManageClasses";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import InstructorAddedClass from "../Components/Dashboard/InstructorAddedClass/InstructorAddedClass";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: 'myClass',
                element: <MyClass></MyClass>
            },
            {
                path: 'myEnrollClass',
                element: <MyEnrollClass></MyEnrollClass>
            },
            {
                path: 'allUsers',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'addAClass',
                element: <AddAClass></AddAClass>
            },
            {
                path: 'manageClasses',
                element: <ManageClasses></ManageClasses>
            },
            {
                path: 'instructorClass',
                element: <InstructorAddedClass></InstructorAddedClass>
            }
        ]
    }
  ]);

  export default router;