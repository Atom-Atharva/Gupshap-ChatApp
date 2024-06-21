import React from "react";
import { friendtobeaddData, newperson } from "./Friendtoadddata";

import Singlefriend from "./Singlefriend";

const AllFRiends = () => {
  return (
    <div className="flex flex-col gap-5 items-start overflow-y-scroll">
      {friendtobeaddData.map((chat, index) => {
        return <Singlefriend key={index} data={chat} newperson={newperson} />;
      })}
    </div>
  );
};

export default AllFRiends;
