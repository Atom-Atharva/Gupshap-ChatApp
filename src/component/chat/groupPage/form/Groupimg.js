import React from "react";
import PictureDP from "../../../signup/form/PictureDP";

const Groupimg = ({ image, setImage, grpname, setGrpname }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 ">
      <PictureDP value={image} onChange={(e) => setImage(e)} />
      <input
        placeholder="Group name"
        type="text"
        value={grpname}
        onChange={(e) => setGrpname(e.target.value)}
        className=" py-4 px-6 w-80 rounded border border-black border-opacity-20 text-base font-regular"
        required
      />
    </div>
  );
};

export default Groupimg;
