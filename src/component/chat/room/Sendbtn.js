import React from "react";
import { send } from "./TextsendData";

const Sendbtn = () => {
  return (
    <div className="flex gap-3 py-3 px-3 bg-primary-btn hover:bg-primary-btn-hover border rounded-lg">
      <img src={send} alt="send" className="w-5 h-5" />
      <h1 className="text-white text-base font-semibold ">Send</h1>
    </div>
  );
};

export default Sendbtn;
