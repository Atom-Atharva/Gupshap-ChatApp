import React from "react";

const InputBox = ({ placeholder, value, type, onChange }) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        type={type}
        className="px-6 py-4 w-80 rounded border border-black border-opacity-20 font-semibold"
        onChange={onChange}
        value={value}
        required
      />
    </div>
  );
};

export default InputBox;
