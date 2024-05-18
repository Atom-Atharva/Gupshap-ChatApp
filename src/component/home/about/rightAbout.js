import React from "react";
import StartChattingNowBtn from "../../common/StartChattingNowBtn";

function rightAbout({ img, title, description }) {
    return (
        <div className="flex px-48 py-14 items-start gap-6 bg-secondary-light justify-between ">
            <div className="flex flex-col justify-center items-start gap-6">
                <p className="text-3xl font-bold">{title}</p>
                <p className="text-lg ">{description}</p>
                <div className="w-1/2">
                    <StartChattingNowBtn />
                </div>
            </div>
            <img
                src={img}
                className="w-[416px] h-[258px] rounded-md"
                alt={title}
            />
        </div>
    );
}

export default rightAbout;
