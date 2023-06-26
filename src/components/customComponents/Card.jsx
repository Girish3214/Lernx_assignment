import React from "react";

const Card = ({ children }) => {
  return (
    <div className="w-full bg-white rounded-xl overflow-hdden shadow-lg ">
      {children}
    </div>
  );
};

export default Card;
