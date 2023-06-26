import React from "react";

const Card = ({ children }) => {
  return (
    <div className="w-full bg-white rounded-xl overflow-hdden shadow-md p-4">
      {children}
    </div>
  );
};

export default Card;
