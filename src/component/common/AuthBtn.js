import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { GITHUB_OAUTH_API, SERVER_GOOGLE_AUTH_API } from "../../utils/apis";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/redux/userSlice";

const AuthBtn = ({ data }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const githubAuth = () => {
        const redirectUri = window.location.origin + "/auth/loading";
        console.log(GITHUB_OAUTH_API + `&redirect_uri=${redirectUri}`);
        window.location.assign(
            GITHUB_OAUTH_API + `&redirect_uri=${redirectUri}`
        );
    };

    const handleGoogleAuth = (code) => {
        // Backend to Handle code
        axios
            .post(
                SERVER_GOOGLE_AUTH_API,
                { code },
                {
                    withCredentials: true,
                    credentials: "include",
                }
            )
            .then((response) => {
                console.log(response);
                dispatch(addUser(response?.data?.data));

                navigate("/chat");
            })
            .catch((err) => {
                console.log(err);
                toast.error("Failed to Google.", {
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

    const googleAuth = useGoogleLogin({
        onSuccess: (response) => {
            console.log(response);
            handleGoogleAuth(response.code);
        },
        onError: (error) => {
            toast.error("Failed to Login.", {
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
            console.log(error);
        },
        flow: "auth-code",
    });

    return data.name === "Google" ? (
        <button
            onClick={() => googleAuth()}
            className="border border-black border-opacity-20 rounded py-2 px-8 flex items-center justify-center gap-2 bg-white w-full hover:bg-secondary hover:text-white transition-all font-semibold"
        >
            <img src={data.svg} alt="icon" className="h-5 w-5" />
            <p>{data.name}</p>
        </button>
    ) : (
        <button
            onClick={() => githubAuth()}
            className="border border-black border-opacity-20 rounded py-2 px-8 flex items-center justify-center gap-2 bg-white w-full hover:bg-secondary hover:text-white transition-all font-semibold"
        >
            <img src={data.svg} alt="icon" className="h-5 w-5" />
            <p>{data.name}</p>
        </button>
    );
};

export default AuthBtn;
