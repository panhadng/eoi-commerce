"use client";

import React from "react";
import { useRouter } from "next/navigation";

const EOI = () => {
  const router = useRouter();
  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center">
        <p className="font-bold">Choose the side you are on:</p>
        <div className="flex space-x-4 mt-4">
          <button
            className=" text-white py-2 px-8 rounded-xl border bg-gray-400 hover:bg-gray-700"
            onClick={() => {
              router.push("/eoi/buyer");
            }}
          >
            Buyer
          </button>
          <button
            className=" text-white py-2 px-8 rounded-xl border bg-gray-400 hover:bg-gray-700"
            onClick={() => {
              router.push("/eoi/seller");
            }}
          >
            Seller
          </button>
        </div>
      </div>
    </div>
  );
};

export default EOI;
