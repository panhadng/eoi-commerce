import React from "react";
import { FeaturedProps } from "@/app/types/interface";
import WidgetHead from "./WidgetHead";

const Featured: React.FC<FeaturedProps> = ({ areaTitle, products }) => {
  return (
    <div className="flex flex-col p-4">
      <WidgetHead title={areaTitle} drill="View All" />
      <div className="flex flex-row justify-center">
        {products.map((title, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-center mt-2 min-w-[180px] h-60 mx-2 rounded-2xl border border-gray-300"
          >
            <div className="bg-gray-500 w-full" />
            <div className="text-center p-2">
              <h2 className="text-sm">{title}</h2>
              <p className="text-sm text-blue-700">See details</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
