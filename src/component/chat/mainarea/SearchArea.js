import React from "react";
import { searchbtn } from "./homeData";

const SearchArea = ({ Search, setSearchQuery }) => {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="py-5 flex justify-center items-center w-[416px]">
      <input
        placeholder={Search}
        type="text"
        className="py-3 px-2 w-72 rounded border border-black border-opacity-20 text-base font-regular"
        onChange={handleSearchChange}
        required
      />
      <button className="flex w-16 h-12 justify-center items-center gap-3 bg-secondary hover:bg-primary-btn-hover">
        <img src={searchbtn} alt="Search" className="w-6" />
      </button>
    </div>
  );
};

export default SearchArea;
