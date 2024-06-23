import React from "react";
import { cut, heading } from "./notificationData";

const Header = ({ notification, setNotification, count = 0 }) => {
    return (
        <div className="flex justify-between items-center">
            <p className="text-2xl font-bold">
                {heading} ({count})
            </p>

            <img
                src={cut}
                className="h-5 cursor-pointer"
                alt="X"
                onClick={() => setNotification(false)}
            />
        </div>
    );
};

export default Header;
