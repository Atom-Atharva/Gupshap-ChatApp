import React, { useState } from "react";
import Groupimg from "./Groupimg";
import Addmembers from "./Addmembers";
import GrpBtn from "./GrpBtn";
import toast, { Toaster } from "react-hot-toast";

const Maingrpform = ({ friends }) => {
    const [image, setImage] = useState(null);
    const [grpname, setGrpname] = useState("");
    const [member, setMember] = useState([]);

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
            image,
            grpname,
            member,
        };

        console.log("Form Data:", formData);
        // API CALL - CREATE GROUP

        // TODO: On Success (Open that Group Chat --> toggleChatObject --> Redux) 
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
            <Addmembers
                friends={friends}
                member={member}
                setMember={setMember}
            />
            <GrpBtn />
        </form>
    );
};

export default Maingrpform;
