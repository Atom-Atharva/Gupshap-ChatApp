import React from "react";

const OrLine = ({ position }) => {
    return (
        <div className={`flex opacity-20 ${position}`}>
            <div className="border border-black translate-y-3 w-40 h-0"></div>
            <p className="font-semibold mx-1">OR</p>
            <div className="border border-black translate-y-3 w-40 h-0"></div>
        </div>
    );
};

export default OrLine;
