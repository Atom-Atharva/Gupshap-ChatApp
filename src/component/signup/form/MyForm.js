import React, { useState } from "react";
import InputBox from "../../common/InputBox";
import SignInUpBtn from "../../common/SignInUpBtn";
import PictureDP from "./PictureDP";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { REGISTER_API } from "../../../utils/apis";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../../../utils/redux/userSlice";

const MyForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();

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

        const formData = {
            email: email,
            name: name,
            password: password,
            avatar: image,
        };

        // Backend Handle
        axios
            .post(REGISTER_API, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true,
                credentials: "include",
            })
            .then((response) => {
                // console.log(response);
                // toast.success(response.data.message);

                // Store User in REDUX STORE
                dispatch(addUser(response.data.data));

                // Navigate to Chat Page
                navigate("/chat");
            })
            .catch((error) => {
                console.log(error.response.data);
                toast.error(error.response.data.message, {
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
                navigate("/auth/register");
            });
    };

  return (
    <form className="flex flex-col gap-6 items-center" onSubmit={handleSignUp}>
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

// API RESPONSE AFTER REGISTERING
// const res = {
//     data: {
//         statusCode: 200,
//         data: {
//             avatar: {
//                 public_id:
//                     "ChatApp/profile/yckpawklqnr2ut13yfdw",
//                 url: "http://res.cloudinary.com/dk3rw649k/image/upload/v1718473678/ChatApp/profile/yckpawklqnr2ut13yfdw.jpg",
//             },
//             _id: "666dd3ce3fd89fd020e6086a",
//             email: "user6@email.com",
//             name: "user6",
//             createdAt: "2024-06-15T17:47:58.841Z",
//             updatedAt: "2024-06-15T17:47:58.989Z",
//             __v: 0,
//         },
//         message: "User Registered!",
//         success: true,
//     },
//     status: 200,
//     statusText: "OK",
//     headers: {
//         "content-length": "403",
//         "content-type": "application/json; charset=utf-8",
//     },
//     config: {
//         transitional: {
//             silentJSONParsing: true,
//             forcedJSONParsing: true,
//             clarifyTimeoutError: false,
//         },
//         adapter: ["xhr", "http", "fetch"],
//         transformRequest: [null],
//         transformResponse: [null],
//         timeout: 0,
//         xsrfCookieName: "XSRF-TOKEN",
//         xsrfHeaderName: "X-XSRF-TOKEN",
//         maxContentLength: -1,
//         maxBodyLength: -1,
//         env: {},
//         headers: {
//             Accept: "application/json, text/plain, */*",
//             "Content-Type": "multipart/form-data",
//         },
//         method: "post",
//         url: "http://localhost:8080/api/v1/users/register",
//         data: {},
//     },
//     request: {},
// };
