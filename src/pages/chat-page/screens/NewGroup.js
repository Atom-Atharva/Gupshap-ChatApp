import React, { useEffect, useState } from "react";
import Groupdet from "../../../component/chat/groupPage/Groupdet";
import { getMyFriends } from "../../../component/chat/groupPage/form/formData";

const NewGroup = () => {
    const [myFriends, setMyFriends] = useState(null);

    useEffect(() => {
        // Get My Friends Api
        setMyFriends(getMyFriends);
    }, []);

    return (
        <div className="flex flex-col  flex-1 bg-secondary-light  ">
            <Groupdet friends={myFriends} />
        </div>
    );
};

export default NewGroup;
