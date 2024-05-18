import React from "react";
import Tagline from "./Tagline";
import Model from "./Model";

const Hero = () => {
    return (
        <div className="flex justify-between items-center px-20">
            <Tagline />
            <Model />
        </div>
    );
};

export default Hero;
