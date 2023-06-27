import React from "react";

const ProgressBar = ({ progress }) => {
  const barColor = "#3B82F6"; // Customize the color of the progress bar here
  const dotColor = "#3B82F6"; // Customize the color of the dot here

  const progressStyle = {
    width: `${progress}%`,
    // backgroundColor: barColor,
    borderRadius: 8,
  };

  const containerStyle = {
    padding: 6,
  };

  const dotStyle = {
    backgroundColor: dotColor,
    left: `${progress - 3}%`,
    top: -4,
  };

  return (
    <div className="relative h-5 p-0.5 rounded-full border-2 border-slate-200 ">
      <div
        className="absolute inset-0 w-full h-full relative"
        style={containerStyle}
      >
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500"
          style={progressStyle}
        ></div>
        <div
          className="absolute  left-0 h-5 w-5 rounded-full"
          style={dotStyle}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
