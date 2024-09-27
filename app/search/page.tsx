import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="container w-full px-4 flex flex-col items-center text-center justify-start h-full">
      <h1 className="font-bold text-lg my-4">Search for the Product</h1>
      <div className="relative w-full max-w-md">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaSearch className="text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default Search;
