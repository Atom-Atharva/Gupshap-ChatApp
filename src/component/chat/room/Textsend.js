import React, { useRef, useState } from "react";
import { sendattach, textPlaceholder } from "./ChatData";
import Sendbtn from "./Sendbtn";

const Textsend = () => {
    // const text = useRef();
    const input = useRef();
    const [text, setText] = useState("");

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
            ></input>
            <Sendbtn text={text} setText={setText} />
        </div>
    );
};

export default Textsend;
