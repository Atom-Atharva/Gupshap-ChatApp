import React from "react";
import { searchbtn } from "./Mainareadata";

const SearchArea = () => {
  return (
    <div className="py-5 flex justify-center items-center w-[416px]">
      <input
        placeholder="Search Friends"
        type="text"
        className=" py-3 px-2 w-72 rounded border border-black border-opacity-20 text-base font-regular"
        required
      />
      <button className="flex w-16 h-12 justify-center items-center gap-3 bg-secondary">
        <img src={searchbtn} alt="Search" />
      </button>
    </div>
  );
};

export default SearchArea;
