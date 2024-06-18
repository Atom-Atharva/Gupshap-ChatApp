import React from "react";
// import { Heading } from "./Mainareadata";

const Mainheading = ({ Heading }) => {
  return (
    <div className="py-4 px-5  border-b border-black-opacity-20">
      <h1 className="text-4xl font-bold ">{Heading}</h1>
    </div>
  );
};

export default Mainheading;
