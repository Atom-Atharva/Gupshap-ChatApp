import React from "react";
import { mainHeading } from "./featureData";
import FeatureCard from "./FeatureCard";

const Features = () => {
    const { title } = mainHeading;
    return (
        <div
            className="flex flex-col items-center justify-center py-14 px-44 gap-12 bg-secondary-light"
            id="features"
        >
            {/* heading */}
            <p className="text-3xl font-bold ">{title}</p>
            {/* features */}
            <FeatureCard />
        </div>
    );
};

export default Features;
