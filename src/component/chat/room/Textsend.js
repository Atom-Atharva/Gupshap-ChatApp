import React, { useEffect, useRef, useState } from "react";
import { sendattach, textPlaceholder } from "./ChatData";
import Sendbtn from "./Sendbtn";
import { useSelector } from "react-redux";
import { useGetSocket } from "../../../utils/socket";

const Textsend = () => {
  // const text = useRef();
  const input = useRef();
  const [text, setText] = useState("");
  const socket = useGetSocket();

  const chatId = useSelector((store) => store.pages.chatObject._id);

  const handleClick = () => {
    // console.log(text);

    // TODO : CONSTANTS IN Constant.js

    socket.emit("NEW_MESSAGE", {
      chatID: chatId,
      content: text,
    });

    setText("");
    input.current.focus();
  };

  // Automatically focus on the text input when the component mounts
  useEffect(() => {
    if (input.current) {
      input.current.focus();
    }
  }, []);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="flex py-3 px-5 justify-between items-center gap-4 border-t border-black-opacity-20 ">
      <img src={sendattach} alt="sendattach" className="w-8 h-8" />
      <input
        className="border border-black-opacity-20 w-11/12 py-2 px-4 "
        placeholder={textPlaceholder}
        value={text}
        ref={input}
        onChange={() => {
          setText(input.current.value);
        }}
        onKeyDown={handleKeyDown}
      ></input>
      <Sendbtn handleClick={handleClick} />
    </div>
  );
};

export default Textsend;
