import React from "react";
import { multiChatData, newperson } from "./formData";
import MemberItem from "./MemberItem";

const Addmembers = ({ member, setMember }) => {
  return (
    <div className="flex flex-col gap-4  items-center w-full px-9">
      <div className="text-xl w-1/2 font-semibold">Add Members</div>
      <div className="flex h-60 flex-col rounded-lg border px-4 border-black-opacity-40 overflow-y-auto items-start w-1/2 ">
        {multiChatData.map((item, index) => (
          <MemberItem
            key={index}
            img={item.img}
            name={item.name}
            id={item.id}
            newperson={newperson}
            member={member}
            setMember={setMember}
          />
        ))}
      </div>
    </div>
  );
};

export default Addmembers;
