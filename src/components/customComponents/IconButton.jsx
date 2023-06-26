import React from "react";

const IconButton = ({ children }) => {
  return (
    <button
      type="button"
      className="rounded-full  p-1 rounded-md p-2 ml-3 border border-2 border-grey-100 hover:border-black text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    >
      {children}
    </button>
  );
};

export default IconButton;
