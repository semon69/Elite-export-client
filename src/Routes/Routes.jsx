import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home/Home";
import Login from "../Components/Login/Login";
import Registration from "../Components/Login/Registration";
import Classes from "../Components/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import MyClass from "../Components/Dashboard/MyClass/MyClass";
import MyEnrollClass from "../Components/Dashboard/MyEnrollClass/MyEnrollClass";
import AllUsers from "../Components/Dashboard/AllUser/AllUser";
import PrivateRoute from "./PrivateRoutes";
import AddAClass from "../Components/Dashboard/AddAClass/AddAClass";
import ManageClasses from "../Components/Dashboard/ManageClasses/ManageClasses";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import InstructorAddedClass from "../Components/Dashboard/InstructorAddedClass/InstructorAddedClass";
import Payment from "../Components/Dashboard/Payment/Payment";
import InstructorPage from "../Components/InstructorPage/InstructorPage";
import AdminRoutes from "./AdminRoutes";
import InstructorRoutes from "./InstructorRoutes";
import PaymentHistory from "../Components/Dashboard/PaymentHistory/PaymentHistory";
import ContactUs from "../Components/ContactUs/ContactUs";

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
            path:'contact',
            element: <ContactUs></ContactUs>
        },
        {
            path: 'user/instructors',
            element:<InstructorPage></InstructorPage>
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
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'myEnrollClass',
                element: <MyEnrollClass></MyEnrollClass>
            },
            {
                path: 'allUsers',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: 'manageClasses',
                element: <AdminRoutes><ManageClasses></ManageClasses></AdminRoutes>
            },
            {
                path: 'addAClass',
                element: <InstructorRoutes><AddAClass></AddAClass></InstructorRoutes>
            },
            
            {
                path: 'instructorClass',
                element: <InstructorRoutes><InstructorAddedClass></InstructorAddedClass></InstructorRoutes>
            }
        ]
    }
  ]);

  export default router;