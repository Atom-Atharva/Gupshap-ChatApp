import React from "react";

const InputBox = ({ placeholder, type }) => {
    return (
        <div>
            <input
                placeholder={placeholder}
                type={type}
                className="px-6 py-4 w-80 rounded border border-black border-opacity-20 font-semibold"
            />
        </div>
    );
};

export default InputBox;
