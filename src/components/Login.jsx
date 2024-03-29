import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div
            className="flex w-full h-screen"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/LogInBG.jpg)`,
                backgroundSize: "cover",
            }}
        >
            {/** Logo */}
            <div className="w-1/2 flex flex-col items-center justify-center">
                <div className="flex justify-center">
                    <img
                        src="./ChatApp-Logo.png"
                        className="w-1/2"
                        alt="logo"
                    />
                </div>

                <h1 className="text-8xl text-white font-dancingScript">
                    Gup<span className="font-kalam">शप</span>
                </h1>
            </div>

            {/* SignUp Form */}
            <div className="w-3/4 flex flex-col justify-center items-center">
                <h2 className="text-7xl text-white font-macondo">
                    Welcome Back!
                </h2>
                <div className="border rounded-3xl m-4 p-8 px-16 w-2/3 bg-white opacity-80">
                    <h3 className="text-4xl mb-8 font-macondo">LogIn</h3>
                    <form className="mx-8" onSubmit={(e) => e.preventDefault()}>
                        <label className="text-2xl">email</label>
                        <input
                            type="email"
                            className="border-black border-b-2 w-full my-2 p-2 bg-transparent outline-none"
                        />

                        <div className="mt-3">
                            <label className="text-2xl">password</label>
                        </div>
                        <input
                            type="password"
                            className="border-black border-b-2 w-full my-2 p-2 bg-transparent outline-none"
                        />

                        <div className="flex justify-around mt-6">
                            <img
                                src="./google.svg"
                                className="w-6 cursor-pointer"
                                alt="Google"
                            />
                            <img
                                src="./facebook.svg"
                                className="w-6 cursor-pointer"
                                alt="Facebook"
                            />
                            <img
                                src="./github.svg"
                                className="w-6 cursor-pointer"
                                alt="Github"
                            />
                        </div>

                        <div className="flex justify-center">
                            <button className="rounded-md border text-xl border-black mt-8 p-2 w-11/12 bg-sky-400 hover:bg-sky-600">
                                LogIn
                            </button>
                        </div>

                        <h4 className="text-lg text-center mt-8">
                            Don't have an account?{" "}
                            <Link
                                to={"/signup"}
                                className="underline underline-offset-2 hover:font-medium hover:underline-offset-4"
                            >
                                SignUp!
                            </Link>
                        </h4>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
