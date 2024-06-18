import React, { useState } from "react";

import Groupimg from "./Groupimg";
import Addmembers from "./Addmembers";
import GrpBtn from "./GrpBtn";

const Maingrpform = () => {
  const [image, setImage] = useState(null);
  const [grpname, setGrpname] = useState("");
  const [member, setMember] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      image,
      grpname,
      member,
    };

    console.log("Form Data:", formData);
  };
  return (
    <form className="flex flex-col  w-full  gap-5 " onSubmit={handleSubmit}>
      <Groupimg
        image={image}
        setImage={setImage}
        grpname={grpname}
        setGrpname={setGrpname}
      />
      <Addmembers member={member} setMember={setMember} />
      <GrpBtn />
    </form>
  );
};

export default Maingrpform;
