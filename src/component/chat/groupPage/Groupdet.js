import React from "react";
import Maingrpform from "./form/Maingrpform";

const Groupdet = () => {
  return (
    <div className="flex flex-col gap-12 justify-center items-center  h-screen ">
      <div className="text-5xl font-semibold text-center">Create new Group</div>
      <Maingrpform />
    </div>
  );
};

export default Groupdet;
