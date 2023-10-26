import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AddNew from "../pages/AddNew/AddNew";
import UpdateExisting from "../pages/UpdateExisting/UpdateExisting";
import CoffeeDetails from "../pages/CoffeeDetails/CoffeeDetails";
import Login from "../pages/LoginSignup/Login";
import Register from "../pages/LoginSignup/Register";
import Users from "../pages/Users/Users";
import Profile from "../pages/Profile/Profile";
import Users2 from "../pages/Users/Users2";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('https://espresso-emporium-auth-server-rootnure.vercel.app/coffee'),
            },
            {
                path: "/addNew",
                element: <AddNew />,
            },
            {
                path: "/updateExisting/:id",
                element: <UpdateExisting />,
                loader: ({ params }) => fetch(`https://espresso-emporium-auth-server-rootnure.vercel.app/coffee/${params.id}`)
            },
            {
                path: "/coffeeDetails/:id",
                element: <CoffeeDetails />,
                loader: ({ params }) => fetch(`https://espresso-emporium-auth-server-rootnure.vercel.app/coffee/${params.id}`),
            },
            {
                path: '/users',
                element: <Users />,
                loader: () => fetch('https://espresso-emporium-auth-server-rootnure.vercel.app/user'),
            },
            {
                path: '/users2',
                element: <Users2 />,
            },
            {
                path: '/profile',
                element: <Profile />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/login',
                element: <Login />,
            },
        ]
    }
]);

export default router;