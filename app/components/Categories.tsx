import React from "react";
import WidgetHead from "./WidgetHead";

const Categories = () => {
  const categories = ["Electronics", "Fashion", "Home", "Sports"];
  return (
    <div className="flex flex-col p-4">
      <WidgetHead title="Categories" drill="View All" />
      <div className="flex flex-row justify-center">
        {categories.map((title, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-center px-4 mt-4"
          >
            <div className="w-16 h-16 bg-gray-300 rounded-full mb-2" />
            <p className="text-xs">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
