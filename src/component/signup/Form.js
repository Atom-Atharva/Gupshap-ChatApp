import React from "react";
import Auth from "./form/Auth";
import Line from "./form/Line";
import MyForm from "./form/MyForm";

const Form = () => {
    return (
        <div className="flex gap-16 items-center">
            <Auth />
            <Line />
            <MyForm />
        </div>
    );
};

export default Form;
