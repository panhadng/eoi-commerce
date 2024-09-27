import React from "react";
import { FaBell, FaComment, FaUser } from "react-icons/fa";

const Topbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-5 w-full border-b border-gray-300">
      <FaUser className="text-xl" />
      <p>Topbar</p>
      <div className="flex space-x-4">
        <FaComment className="text-xl" />
        <FaBell className="text-xl" />
      </div>
    </div>
  );
};

export default Topbar;
