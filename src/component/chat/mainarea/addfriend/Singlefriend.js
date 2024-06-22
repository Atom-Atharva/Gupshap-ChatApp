import React from "react";

const Singlefriend = ({ data, newperson }) => {
  const { img, name } = data;
  return (
    <div className="flex px-6 py-2 justify-between items-center w-full ">
      <div className="flex  items-center justify-end gap-4">
        <img src={img} alt="dp" width={50} height={50} />
        <p className="text-lg font-semibold">{name}</p>
      </div>
      <div>
        <img src={newperson} alt="dp" width={24} height={24} />
      </div>
    </div>
  );
};

export default Singlefriend;
