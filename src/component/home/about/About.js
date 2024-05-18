import React from "react";
import { AboutData } from "./AboutData";
import LeftAbout from "./leftAbout";
import RightAbout from "./rightAbout";

const About = () => {
  return (
    <div className="flex flex-col items-start shrink-0">
      {AboutData.map((data, index) => {
        if (index % 2 === 0) {
          return (
            <LeftAbout
              key={index}
              img={data.img}
              title={data.title}
              description={data.description}
            />
          );
        } else {
          return (
            <RightAbout
              key={index}
              img={data.img}
              title={data.title}
              description={data.description}
            />
          );
        }
      })}
    </div>
  );
};

export default About;
