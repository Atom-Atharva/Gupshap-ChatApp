import React from "react";
import { copywrite } from "./footerData";

const Bottom = () => {
    const { cpr, tags } = copywrite;
    return (
        <div className="flex justify-between py-4 border border-t-2 border-black border-opacity-20 border-x-0 px-20 text-copywrite">
            <p>{cpr}</p>
            <div className="flex gap-10">
                {tags.map((tag, index) => {
                    return <p key={index}>{tag}</p>;
                })}
            </div>
        </div>
    );
};

export default Bottom;
