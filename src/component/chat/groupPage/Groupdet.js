import React from "react";
import Maingrpform from "./form/Maingrpform";

const Groupdet = ({ friends }) => {
    return (
        <div className="flex flex-col gap-12 justify-center items-center  h-screen ">
            <div className="text-5xl font-semibold text-center">
                Create New Group
            </div>
            <Maingrpform friends={friends} />
        </div>
    );
};

export default Groupdet;
