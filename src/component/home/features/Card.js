import React from "react";

function Card({ svg, title, description }) {
  return (
    <div className="flex flex-col py-8 px-8 justify-center items-start gap-4 rounded-md shadow-lg bg-white h-48 w-80 ">
      <div className="flex items-center gap-3">
        <img src={svg} alt={title} />
        <p className="text-lg font-bold">{title}</p>
      </div>
      <p className="text-lg font-regular">{description}</p>
    </div>
  );
}

export default Card;
