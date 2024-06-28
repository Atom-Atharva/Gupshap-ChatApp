import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/home-page/Homepage";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Chatpage from "../pages/chat-page/Chatpage";
import Auth from "../pages/auth/Auth";
import GithubLoading from "../pages/auth/GithubLoading";
import { SocketProvider } from "../utils/socket";

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
                path: "loading",
                element: <GithubLoading />,
            },
            {
                path: "register",
                element: <Signup />,
            },
        ],
    },
    {
        path: "/chat",
        element: (
            // TO GIVE ACCESS FOR SOCKET THROUGH OUT CHATPAGE
            <SocketProvider>
                <Chatpage />
            </SocketProvider>
        ),
    },
]);

export default router;
