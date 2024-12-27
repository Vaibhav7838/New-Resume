import React from "react";
import resume from "../Pdf/Vaibhav_Kumar_Frontend_developer.pdf";

export const DownloadResume = () => {
  const downloadAction = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Vaibhav_Kumar_Software_Developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="lg:py-5">
      <button
        className='group text-[15px] px-5 py-2 relative flex items-center lg:space-x-2 lg:px-6 lg:py-3 border-2 border-yellow-500 text-white rounded-md overflow-hidden'
        onClick={() => downloadAction()}
      >
        <div className='absolute top-0 right-0 h-full w-0 bg-yellow-500 transition-all duration-300 ease-out group-hover:left-0 group-hover:w-full' />
        <span className='relative z-10 transition-colors duration-300 group-hover:text-white'>
          Download CV
        </span>
      </button>
    </div>
  );
};
