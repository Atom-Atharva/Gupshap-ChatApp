import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { GET_PROFILE_API } from "../../utils/apis";
import { addUser } from "../../utils/redux/userSlice";

const Auth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        // Verify User and Login
        axios
            .get(GET_PROFILE_API, {
                withCredentials: true,
            })
            .then((response) => {
                dispatch(addUser(response.data.data));
                navigate("/chat");
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    }, []);

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Auth;
