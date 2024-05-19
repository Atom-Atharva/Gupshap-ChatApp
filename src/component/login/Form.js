import React from "react";
import Auth from "./form/Auth";
import Line from "./form/Line";
import MyForm from "./form/MyForm";

function Form() {
  return (
    <div className="flex flex-col">
      <Auth />
      <Line />
      <MyForm />
    </div>
  );
}

export default Form;
