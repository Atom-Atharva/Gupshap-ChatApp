import React, { useState } from "react";
import Groupimg from "./Groupimg";
import Addmembers from "./Addmembers";
import GrpBtn from "./GrpBtn";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { CREATE_NEW_GROUP } from "../../../../utils/apis";
import { useDispatch } from "react-redux";
import { toggleChatObject } from "../../../../utils/redux/pagesSlice";
import { groupRerender } from "../../../../utils/redux/groupupdateSlice";
import { triggerRerender } from "../../../../utils/redux/homeupdateSlice";

const Maingrpform = ({ friends }) => {
  const [image, setImage] = useState(null);
  const [grpname, setGrpname] = useState("");
  const [member, setMember] = useState([]);
  const dispatch = useDispatch();

  const createNewGroup = (formData) => {
    // On Success (Open that Group Chat --> toggleChatObject --> Redux)
    axios
      .post(CREATE_NEW_GROUP, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
        credentials: "include",
      })
      .then((response) => {
        console.log(response);
        dispatch(toggleChatObject(response?.data?.data));
        dispatch(groupRerender());
        dispatch(triggerRerender());
      })
      .catch((error) => {
        console.log(error);
        toast.error(error?.response?.data?.message, {
          position: "bottom-right",
          style: {
            fontWeight: "600",
            background: "red",
            color: "white",
          },
          iconTheme: {
            primary: "white",
            secondary: "red",
          },
        });
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!image) {
      toast.error("Image is Required", {
        position: "bottom-right",
        style: {
          fontWeight: "600",
          background: "red",
          color: "white",
        },
        iconTheme: {
          primary: "white",
          secondary: "red",
        },
      });
      return;
    }

    if (member.length < 2) {
      toast.error("Atleast 2 Members Required", {
        position: "bottom-right",
        style: {
          fontWeight: "600",
          background: "red",
          color: "white",
        },
        iconTheme: {
          primary: "white",
          secondary: "red",
        },
      });
      return;
    }

    const formData = {
      avatar: image,
      name: grpname,
      members: member,
    };

    console.log("Form Data:", formData);
    // API CALL - CREATE GROUP
    createNewGroup(formData);
  };

  return (
    <form className="flex flex-col  w-full  gap-5 " onSubmit={handleSubmit}>
      <Toaster />
      <Groupimg
        image={image}
        setImage={setImage}
        grpname={grpname}
        setGrpname={setGrpname}
      />
      <Addmembers friends={friends} member={member} setMember={setMember} />
      <GrpBtn />
    </form>
  );
};

export default Maingrpform;
