import React from "react";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

const Mobile = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-row items-center justify-center bg-gray-900 h-screen w-full">
      <div className="w-[430px] h-[932px] mx-auto bg-slate-100 text-black flex flex-col justify-between overflow-hidden">
        <Topbar />
        {children}
        <Navbar />
      </div>
    </div>
  );
};

export default Mobile;
