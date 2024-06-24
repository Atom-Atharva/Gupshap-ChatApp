import React from "react";
import { noDataMsg } from "./notificationData";
import SingleNotification from "./SingleNotification";

const List = ({ data }) => {
    return !data ? (
        <div>{noDataMsg}</div>
    ) : (
        <div className="flex flex-col overflow-auto gap-4">
            {data.map((notification) => {
                return (
                    <SingleNotification
                        notification={notification}
                        key={notification._id}
                    />
                );
            })}
        </div>
    );
};

export default List;
