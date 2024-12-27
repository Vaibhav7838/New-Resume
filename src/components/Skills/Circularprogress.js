import React, { useState, useEffect } from "react";

const CircularProgress = ({ percentage, label, color = "#FFC107" }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPercentage((prev) => {
        if (prev < percentage) {
          return prev + 2;
        } else {
          clearInterval(interval);
          return percentage;
        }
      });
    }, 30);
    return () => clearInterval(interval);
  }, [percentage]);

  const circleStyle = {
    background: `conic-gradient(${color} ${currentPercentage * 3.6}deg, #333 ${currentPercentage * 3.6}deg)`,
  };

  return (
    <div className="flex flex-col items-center py-5">
      <div
        className="flex justify-center items-center w-24 h-24 rounded-full"
        style={circleStyle}
      >
        <div className="flex justify-center items-center w-20 h-20 bg-black rounded-full">
          <span className="text-white text-lg font-bold">{currentPercentage}%</span>
        </div>
      </div>
      <p className="mt-2 text-white text-[16px] leading-tight font-bold">{label}</p>
    </div>
  );
};

export default CircularProgress;
