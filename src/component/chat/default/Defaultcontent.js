import React from "react";
import { brandName, message } from "./DefaultData";

const Defaultcontent = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <img src={brandName} className="w-60 h-64 " alt="BrandLogo" />
      <h1 className="text-4xl font-semibold text-center text-black-opacity-40">
        {message}
      </h1>
    </div>
  );
};

export default Defaultcontent;
