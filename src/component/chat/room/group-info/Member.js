import React from "react";
import { adminView } from "../ChatData";

const Member = ({ info, isGroupAdmin }) => {
    return (
        <div className="px-6 py-2 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <img src={info.image} className="h-10" alt="DP" />
                <p className="font-semibold">{info.name}</p>
            </div>

            {isGroupAdmin && <img src={adminView.addUser} alt="ADD" />}
        </div>
    );
};

export default Member;
