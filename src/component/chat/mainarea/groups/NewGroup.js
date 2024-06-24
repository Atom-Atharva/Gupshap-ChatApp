import React from "react";
import { img, text } from "./NewGroupData";

const NewGroup = () => {
    return (
        <div className="flex px-6 py-2 items-center gap-4">
            <img src={img} alt="dp" className="h-10" />
            <p className="text-lg font-semibold">{text}</p>
        </div>
    );
};

export default NewGroup;
