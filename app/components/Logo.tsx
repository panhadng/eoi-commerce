"use client";

import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div
      className="bg-gray-900 rounded-full h-full w-auto p-2 cursor-pointer"
      onClick={() => {
        router.push("/");
      }}
    >
      <FaDollarSign className="text-xl text-white" />
    </div>
  );
};

export default Logo;
