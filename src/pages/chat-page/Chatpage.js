import React from "react";
import Content from "../chat-page/contents/Content.js";
import Default from "./screens/Default.js";

const Chatpage = () => {
    return (
        <div>
            <div className="flex w-full">
                <Content />
                <Default />
            </div>
        </div>
    );
};

export default Chatpage;
