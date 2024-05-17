import React from "react";
import { modelData } from "./heroData";
import ChatBox from "./ChatBox";

const Model = () => {
    const { model_img, circle_hollow, circle_full } = modelData;
    return (
        <div className="relative">
            <img
                src={circle_hollow}
                alt="Model"
                height={404}
                width={422}
                className="z-10 bottom-24 absolute"
            />
            <img
                src={circle_full}
                alt="Model"
                height={404}
                width={422}
                className="z-0 absolute bottom-16 right-14"
            />
            <div className="absolute bottom-56 right-80 w-7/12 z-20">
                <ChatBox />
            </div>
            <img
                src={model_img}
                alt="Model"
                height={560}
                width={389}
                className="z-20 relative"
            />
        </div>
    );
};

export default Model;
