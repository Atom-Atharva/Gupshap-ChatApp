import React from "react";
import { brandName, message } from "./DefaultData";

const Defaultcontent = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <img src={brandName} className="w-72 opacity-40 " alt="BrandLogo" />
            <h1 className="text-4xl font-semibold text-center text-black-opacity-40">
                {message}
            </h1>
        </div>
    );
};

export default Defaultcontent;
