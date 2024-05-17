import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/home-page/Homepage";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Chatpage from "../pages/chat-page/Chatpage";
import Auth from "../pages/auth/Auth";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/auth",
        element: <Auth />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Signup />,
            },
        ],
    },
    {
        path: "/chat",
        element: <Chatpage />,
    },
]);

export default router;
