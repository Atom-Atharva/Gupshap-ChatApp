import React from "react";
import { multiChatData, newperson, deluser } from "./formData";
import MemberItem from "./MemberItem";

const Addmembers = ({ member, setMember }) => {
  return (
    <div className="flex flex-col gap-4  items-start self-stretch px-9 w-full">
      <div className="text-xl font-semibold">Add Members</div>
      <div className="flex h-60 flex-col rounded-lg border border-black-opacity-40 overflow-y-auto items-start self-stretch">
        {multiChatData.map((item, index) => (
          <MemberItem
            key={index}
            img={item.img}
            name={item.name}
            id={item.id}
            newperson={newperson}
            deluser={deluser}
            member={member}
            setMember={setMember}
          />
        ))}
      </div>
    </div>
  );
};

export default Addmembers;
