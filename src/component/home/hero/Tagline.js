import React from "react";
import { taglineData } from "./heroData";
import StartChattingNowBtn from "../../common/StartChattingNowBtn";

const Tagline = () => {
    const { headline, description } = taglineData;
    return (
        <div className="w-1/2">
            <h1 className="text-5xl font-semibold mb-9">{headline}</h1>
            <p className="text-xl mb-9">{description}</p>

            <div className="w-1/2">
                <StartChattingNowBtn />
            </div>
        </div>
    );
};

export default Tagline;
