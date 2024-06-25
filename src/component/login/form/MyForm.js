import React, { useState } from "react";
import InputBox from "../../common/InputBox";
import SignInUpBtn from "../../common/SignInUpBtn";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LOGIN_API } from "../../../utils/apis";
import { useDispatch } from "react-redux";
import { addUser } from "../../../utils/redux/userSlice";
import toast, { Toaster } from "react-hot-toast";

function MyForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(email, password);

    const formData = {
      email: email,
      password: password,
    };
    // Backend Handle
    axios
      .post(LOGIN_API, formData, {
        withCredentials: true,
        credentials: "include",
      })
      .then((response) => {
        // Save in REDUX
        dispatch(addUser(response.data.data));

        // Navigate to Chat Page
        navigate("/chat");
      })
      .catch((error) => {
        console.log(error?.response?.data);
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
        navigate("/auth/login");
      });
  };

  return (
    <form
      className="flex flex-col gap-6 justify-center items-center px-20 py-10"
      onSubmit={handleLogin}
    >
      <Toaster />
      <InputBox
        placeholder="Email*"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputBox
        placeholder="Password*"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <SignInUpBtn signIn={true} />
    </form>
  );
}

export default MyForm;
