import React from "react";

const singleChat = ({ data }) => {
  const { img, name } = data;
  return (
    <div className="flex px-6 py-2 items-center gap-4">
      <img src={img} alt="dp" width={50} height={50} />
      <h1 className="text-lg font-regular">{name}</h1>
    </div>
  );
};

export default singleChat;
