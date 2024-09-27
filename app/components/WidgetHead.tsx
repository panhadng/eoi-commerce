"use client";

import React, { FC } from "react";
import { WidgetHeadProps } from "@/app/types/interface";

const WidgetHead: FC<WidgetHeadProps> = ({ title, drill }) => {
  return (
    <div className="flex flex-row justify-between">
      <h2 className="font-bold">{title}</h2>
      {drill && (
        <p className="text-sm text-gray-500 cursor-pointer hover:underline">
          {drill}
        </p>
      )}
    </div>
  );
};

export default WidgetHead;
