import React from "react";
import { cta } from "./footerData";
import StartChattingNowBtn from "../../common/StartChattingNowBtn";

const CTA = () => {
    const { brandName, tagline } = cta;
    return (
        <div className="w-1/2">
            <div className="flex flex-col items-center gap-5">
                <img src={brandName} alt="BrandLogo" />
                <h2 className="text-4xl font-bold text-center">{tagline}</h2>
            </div>

            <div className="relative left-[25%] my-5 w-1/2">
                <StartChattingNowBtn />
            </div>
        </div>
    );
};

export default CTA;
