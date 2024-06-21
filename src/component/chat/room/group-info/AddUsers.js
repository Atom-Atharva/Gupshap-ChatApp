import React from "react";
import { adminView } from "../ChatData";

const AddUsers = () => {
    return (
        <div className="px-6 py-2 flex gap-4 items-center">
            <img src={adminView.image} className="h-10" alt="Add" />
            <p className="font-semibold">{adminView.msg}</p>
        </div>
    );
};

export default AddUsers;
