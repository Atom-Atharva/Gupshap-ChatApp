import React from "react";

const Singlemsg = ({ message, index }) => {
  return (
    <div
      key={index}
      className={`${
        message.senderName === "Atharva Sugandhi"
          ? " justify-end"
          : " justify-start"
      } flex  items-center`}
    >
      <div
        className={`${
          message.senderName === "Atharva Sugandhi"
            ? "bg-primary-btn text-white"
            : "bg-primary"
        } p-4 rounded-lg min-w-7 max-w-80`}
      >
        <div className="font-regular text-base">{message.message}</div>
      </div>
    </div>
  );
};

export default Singlemsg;
