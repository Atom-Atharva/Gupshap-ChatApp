import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SERVER_GITHUB_AUTH_API } from "../../utils/apis";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/redux/userSlice";

const GithubLoading = () => {
    const [params] = useSearchParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = (code) => {
        // Send Code to Backend
        // console.log(code);

        axios
            .post(
                SERVER_GITHUB_AUTH_API,
                { code },
                {
                    withCredentials: true,
                    credentials: "include",
                }
            )
            .then((response) => {
                // console.log(response);
                dispatch(addUser(response.data.data));
                navigate("/chat");
            })
            .catch((error) => {
                console.log(error);
                navigate("/auth/register");
            });
    };

    useEffect(() => {
        const code = params.get("code");
        if (!code) {
            navigate("/auth/register");
            return;
        }

        //Operate on Backend
        handleLogin(code);
    }, []);

    return (
        <div className="flex h-screen justify-center items-center bg-secondary-light">
            <p className="text-6xl">All Eyes on GitHub, Please Wait...</p>
        </div>
    );
};

export default GithubLoading;
