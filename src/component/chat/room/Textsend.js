import React from "react";
import { sendattach, send, text } from "./TextsendData";
import Sendbtn from "./Sendbtn";

const Textsend = () => {
  return (
    <div className="flex py-4 px-5 justify-center items-center gap-4 border-t border-black-opacity-20 ">
      <img src={sendattach} alt="sendattach" className="w-10 h-10" />
      <input
        className="border border-black-opacity-20 w-[800px] py-3 px-4 "
        placeholder={text}
      ></input>
      <Sendbtn />
    </div>
  );
};

export default Textsend;
