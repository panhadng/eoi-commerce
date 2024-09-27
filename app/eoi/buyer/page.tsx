"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Buyer = () => {
  const router = useRouter();
  return (
    <div className="container flex flex-col items-center justify-center">
      <div className="container p-4">
        <button
          onClick={() => router.push("/eoi/buyer/create")}
          className="w-full flex flex-col text-center justify-center items-center bg-gray-300 p-4 h-40 rounded-xl my-4 hover:bg-gray-400 transition duration-300 ease-in-out"
        >
          <p>Create New EOI</p>
        </button>
        <button
          onClick={() => router.push("/eoi/buyer/seller")}
          className="w-full flex flex-col text-center justify-center items-center bg-gray-300 p-4 h-40 rounded-xl my-4 hover:bg-gray-400 transition duration-300 ease-in-out"
        >
          <p>Current EOI</p>
        </button>
      </div>
    </div>
  );
};

export default Buyer;
