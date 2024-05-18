import React from "react";
import { featureData } from "./featureData";
import Card from "./Card";

function FeatureCard() {
  return (
    <div className="flex justify-center items-center gap-3 ">
      {featureData.map((feature, index) => (
        <Card
          key={index}
          svg={feature.svg}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}

export default FeatureCard;
