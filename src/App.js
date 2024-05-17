import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./navigation/AppRouter";

const App = () => {
    return (
        <div className="font-web-site">
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
