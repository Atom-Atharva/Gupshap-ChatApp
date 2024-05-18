import React from "react";
import Navigator from "../header/Navigator";
import BrandLogo from "../header/BrandLogo";

const Middle = () => {
    return (
        <div className="flex justify-between py-4 px-20">
            <BrandLogo />
            <Navigator />
        </div>
    );
};

export default Middle;
