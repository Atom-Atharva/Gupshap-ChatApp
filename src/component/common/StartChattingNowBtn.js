import React from "react";
import { Link } from "react-router-dom";

const StartChattingNowBtn = () => {
  return (
    <Link to={"/auth/register"}>
      <div className="w-1/2 text-center bg-primary-btn py-3 px-5 text-white hover:bg-primary-btn-hover rounded-md transition-all">
        Start Chatting Now!
      </div>
    </Link>
  );
};

export default StartChattingNowBtn;
