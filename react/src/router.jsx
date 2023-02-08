//import the create browser router function
import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import Users from "./views/Users.jsx";
import NotFound from "./views/NotFound.jsx";
import DefaultLayout from "./components/DefaultLayout.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import Dashboard from "./views/Dashboard.jsx";
import About from "./views/About.jsx";
import Org from "./views/Org.jsx";
import News from "./views/News.jsx";
import Program from "./views/Program.jsx";
import Clubs from "./views/Clubs.jsx";
import UserForm from "./views/UserForm.jsx";



//specify the routes
const router = createBrowserRouter ( [
    {
        path: '/',
        element: <DefaultLayout />,
        //the  views example page user will become childern/child of this component
        children: [
            {
                //if we are trying to access, we direct the users to dashboard page
                path: '/', 
                element: <Navigate to="/users" />
            },
            {
                path: '/dashboard',
                element: <Dashboard /> //from views
            },
            {
                path: '/users',
                element: <Users /> //from views
            },
            {
                path: '/users/new',
                element: <UserForm key="userCreate"/> //from views
            },
            {
                path: '/users/:id',
                element: <UserForm key="userUpdate" /> //from views
            },
            {
                path: '/about',
                element: <About /> //from views
            },
            {
                path: '/news',
                element: <News /> //from views
            },
            {
                path: '/program',
                element: <Program /> //from views
            },
            {
                path: '/org',
                element: <Org /> //from views
            },
            {
                path: '/clubs',
                element: <Clubs /> //from views
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login /> //from views
            },
            {
                path: '/signup',
                element: <Signup /> //from views
            },
        ]
    },
   
   
    //404 PAGE NOT FOUND VIEW
    {
        path: '*',
        element: <NotFound /> 
    }


])

export default router;

//views folder a  react components are associate with routes