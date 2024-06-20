import React from "react";
import { heading } from "./notificationData";

const Header = ({ count = 0 }) => {
    return (
        <div>
            <p className="text-2xl font-bold">
                {heading} ({count})
            </p>
        </div>
    );
};

export default Header;
