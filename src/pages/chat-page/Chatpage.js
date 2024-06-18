import React from "react";
import Content from "../chat-page/contents/Content.js";
import Default from "./screens/Default.js";
import NewGroup from "./screens/NewGroup.js";
import Room from "./screens/Room.js";

const Chatpage = () => {
  return (
    <div>
      <div className="flex w-full ">
        <Content />
        {/* <Default /> */}
        {/* <NewGroup /> */}
        <Room />
      </div>
    </div>
  );
};

export default Chatpage;
