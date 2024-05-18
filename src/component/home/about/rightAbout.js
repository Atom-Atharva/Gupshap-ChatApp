import React from "react";
import { Link } from "react-router-dom";

function rightAbout({ img, title, description }) {
  return (
    <div className="flex px-48 py-14 items-start gap-6 bg-secondary-light justify-between ">
      <div className="flex flex-col justify-center items-start gap-6">
        <p className="text-3xl font-bold">{title}</p>
        <p className="text-lg ">{description}</p>
        <Link to={"/auth/register"}>
          <div className=" flex items-center justify-center w-80 bg-primary-btn py-3 px-5 text-white hover:bg-primary-btn-hover rounded-md transition-all">
            Start Chatting Now!
          </div>
        </Link>
      </div>
      <img src={img} className="w-[416px] h-[258px] rounded-md" alt={title} />
    </div>
  );
}

export default rightAbout;
