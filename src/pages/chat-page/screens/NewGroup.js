import React, { useEffect, useState } from "react";
import Groupdet from "../../../component/chat/groupPage/Groupdet";
// import { getMyFriends } from "../../../component/chat/groupPage/form/formData";
import axios from "axios";
import { GET_MY_FRIENDS_API } from "../../../utils/apis";

const NewGroup = () => {
    const [myFriends, setMyFriends] = useState(null);

    const getMyFriends = () => {
        axios
            .get(GET_MY_FRIENDS_API, {
                withCredentials: true,
                credentials: "include",
            })
            .then((response) => {
                setMyFriends(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        // Get My Friends Api
        getMyFriends();
    }, []);

    return (
        <div className="flex flex-col  flex-1 bg-secondary-light  ">
            <Groupdet friends={myFriends} />
        </div>
    );
};

export default NewGroup;
