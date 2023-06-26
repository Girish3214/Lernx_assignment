import React from "react";

const SmallIcon = ({ children, det }) => {
  return (
    <div
      className={`rounded-full p-2 text-white max-w-max h-max ${
        det ? "bg-violet-300 " : "bg-violet-500 "
      }`}
    >
      {children}
    </div>
  );
};

export default SmallIcon;
