import React from "react";
import CTA from "./CTA";
import Middle from "./Middle";
import Bottom from "./Bottom";

const Footer = () => {
    return (
        <div className="w-full ">
            <div className="flex flex-col items-center px-20">
                <CTA />
            </div>

            <Middle />
            <Bottom />
        </div>
    );
};

export default Footer;
