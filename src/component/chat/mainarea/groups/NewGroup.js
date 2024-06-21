import React from "react";
import { img, text } from "./NewGroupData";

const NewGroup = () => {
  return (
    <div className="flex px-6 py-2 items-center gap-4">
      <img src={img} alt="dp" width={40} height={40} />
      <h1 className="text-lg font-regular">{text}</h1>
    </div>
  );
};

export default NewGroup;
