import React, { useState } from "react";
import InputBox from "../../common/InputBox";
import SignInUpBtn from "../../common/SignInUpBtn";
import PictureDP from "./PictureDP";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const MyForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState(null);

    const handleSignUp = (event) => {
        event.preventDefault();
        console.log(image, name, email, password);

        if (!image) {
            toast.error("Profile Picture Needed!", {
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

        // Backend Handle

        navigate("/chat");
    };

    return (
        <form
            className="flex flex-col gap-6 items-center"
            onSubmit={handleSignUp}
        >
            <Toaster />
            <PictureDP value={image} onChange={(e) => setImage(e)} />
            <InputBox
                name="Name"
                placeholder="Name*"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <InputBox
                name="Email"
                placeholder="Email*"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <InputBox
                name="Password"
                placeholder="Password*"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <SignInUpBtn signIn={false} type="submit" />
        </form>
    );
};

export default MyForm;
