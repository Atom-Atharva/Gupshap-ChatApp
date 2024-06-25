import React, { useState } from "react";
import { checkPerson, newperson } from "./formData";

const MemberItem = ({ id, img, name, member, setMember }) => {
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        if (selected) {
            const updatedMembers = member.filter((user) => user !== id);
            setMember(updatedMembers);
            setSelected(false);
        } else {
            const updatedMembers = [...member, id];
            setMember(updatedMembers);
            setSelected(true);
        }
    };
    
    return (
        <div
            className={`flex items-center h-auto justify-between w-full py-2 px-6 cursor-pointer ${
                selected && "bg-secondary-darker"
            }`}
            onClick={() => handleClick(id)}
        >
            <div className="flex items-center justify-end gap-4">
                <img
                    src={img}
                    alt="profile"
                    className="w-12 h-12 rounded-full"
                />
                <div className="text-lg font-regular">{name}</div>
            </div>
            <div>
                {selected ? (
                    <img
                        src={checkPerson}
                        alt="selected"
                        className=" h-6 w-6"
                    />
                ) : (
                    <img src={newperson} alt="add" className=" h-6 w-6" />
                )}
            </div>
        </div>
    );
};

export default MemberItem;
