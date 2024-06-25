import React from "react";
import MemberItem from "./MemberItem";

const Addmembers = ({ member, setMember, friends }) => {
    return (
        <div className="flex flex-col gap-4  items-center w-full px-9">
            <div className="text-xl w-1/2 font-semibold">Add Members</div>
            <div className="flex h-60 flex-col rounded-lg border border-black-opacity-40 overflow-y-auto items-start w-1/2 ">
                {friends ? (
                    friends.length === 0 ? (
                        <div className="flex h-full w-full items-center justify-center font-semibold opacity-40">
                            Add Friends To Make Group.
                        </div>
                    ) : (
                        friends.map((friend) => (
                            <MemberItem
                                key={friend?._id}
                                img={friend?.avatar?.url}
                                name={friend?.name}
                                id={friend?._id}
                                member={member}
                                setMember={setMember}
                            />
                        ))
                    )
                ) : (
                    <div className="flex h-full w-full items-center justify-center font-semibold opacity-40">
                        Your Friends Will Appear Here.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Addmembers;
