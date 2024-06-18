import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { GET_PROFILE_API } from "../../utils/apis";
import { addUser } from "../../utils/redux/userSlice";
import { GoogleOAuthProvider } from "@react-oauth/google";

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
                console.log(response.data.data);
                dispatch(addUser(response.data.data));
                navigate("/chat");
            })
            .catch((err) => {
                console.log(err.response?.data);
            });
    }, []);

    return (
        <div>
            <GoogleOAuthProvider
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            >
                <Outlet />
            </GoogleOAuthProvider>
        </div>
    );
};

export default Auth;
