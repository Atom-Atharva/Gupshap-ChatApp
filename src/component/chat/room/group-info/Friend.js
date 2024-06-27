import React from "react";
import { adminView } from "../ChatData";

const Friend = ({ info }) => {
    return (
        <div className="h-full w-full flex justify-between px-6 py-2 items-center cursor-pointer">
            <div className="flex gap-3 items-center">
                <img
                    src={info?.avatar?.url}
                    className="h-12 w-12 rounded-full"
                    alt="DP"
                />

                <div className="font-semibold">{info.name}</div>
            </div>
            <img
                src={adminView.addUser}
                className="h-6 w-6 rounded-full"
                alt="DP"
            />
        </div>
    );
};

export default Friend;
