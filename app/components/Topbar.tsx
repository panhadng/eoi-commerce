import React from "react";
import { FaBell, FaCommentAlt } from "react-icons/fa";
import Logo from "@/app/components/Logo";

const Topbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-3 w-full border-b border-gray-300">
      <Logo />
      <p>Topbar</p>
      <div className="flex space-x-4">
        <FaCommentAlt className="text-xl" />
        <FaBell className="text-xl" />
      </div>
    </div>
  );
};

export default Topbar;
