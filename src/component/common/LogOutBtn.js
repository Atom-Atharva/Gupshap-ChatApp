import React from "react";
import { LOGOUT_API } from "../../utils/apis";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../../utils/redux/userSlice";
const LogOutBtn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    axios
      .post(
        LOGOUT_API,
        {},
        {
          withCredentials: true,
          credentials: "include",
        }
      )
      .then((response) => {
        dispatch(removeUser());
        navigate("/");
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
      });
  };
  return (
    <div>
      <Toaster />
      <div
        className="text-center w-52 bg-red-500 py-3 px-5 text-white hover:bg-red-600 rounded-md transition-all"
        onClick={logoutHandler}
      >
        Logout
      </div>
    </div>
  );
};

export default LogOutBtn;
