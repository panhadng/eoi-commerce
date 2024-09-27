"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  FaHome,
  FaSearch,
  FaEnvelopeOpenText,
  FaBookmark,
  FaUser,
} from "react-icons/fa";

const Navbar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex flex-row items-center justify-between p-5 w-full bg-gray-100 border-t">
      <FaHome
        onClick={() => router.push("/")}
        className={`text-xl cursor-pointer ${
          pathname === "/" ? "text-blue-700" : "text-black"
        }`}
      />
      <FaSearch
        onClick={() => router.push("/search")}
        className={`text-xl cursor-pointer ${
          pathname === "/search" ? "text-blue-700" : "text-black"
        }`}
      />
      <FaEnvelopeOpenText
        onClick={() => router.push("/eoi")}
        className={`text-xl cursor-pointer ${
          pathname.startsWith("/eoi") ? "text-blue-700" : "text-black"
        }`}
      />
      <FaBookmark className="text-xl cursor-pointer" />
      <FaUser className="text-xl cursor-pointer" />
    </div>
  );
};

export default Navbar;
