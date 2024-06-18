import React from "react";

const MemberItem = ({
  id,
  img,
  name,
  newperson,
  deluser,
  member,
  setMember,
}) => {
  const isMember = member.some((m) => m.id === id);

  const addMember = () => {
    if (!isMember) {
      setMember([...member, { img, name, id }]);
    }
  };
  const removeMember = () => {
    if (isMember) {
      setMember(member.filter((m) => m.id !== id));
    }
  };

  return (
    <div className="flex items-center h-auto justify-between w-full py-2 px-6">
      <div className="flex items-center justify-end gap-4">
        <img src={img} alt="profile" className="w-12 h-12 rounded-full" />
        <div className="text-lg font-regular">{name}</div>
      </div>
      <div className="">
        {isMember ? (
          <img
            src={deluser}
            alt="remove person"
            onClick={removeMember}
            className="cursor-pointer "
          />
        ) : (
          <img
            src={newperson}
            alt="add person"
            onClick={addMember}
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default MemberItem;
