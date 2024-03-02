import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const App = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/signup",
            element: <SignUp />,
        },
    ]);

    return (
        <div className="font-chakraPetch">
            <RouterProvider router={appRouter} />
        </div>
    );
};

export default App;
