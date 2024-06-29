// components/VerticalLine.js
import React from "react";

const VerticalLine = ({
  height = "h-full",
  width = "w-px",
  color = "bg-gray-300",
  className = "",
}) => {
  return <div className={`${height} ${width} ${color} ${className}`}></div>;
};

export default VerticalLine;
