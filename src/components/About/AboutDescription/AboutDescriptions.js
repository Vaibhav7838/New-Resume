import React from "react";
import { DownloadResume } from "../../DownloadResume";
const AboutDescription = ({ description }) => {
  return (
    <div className='flex justify-center items-center pt-10 '>
      <article>
        <p>
          <span className='lg:mt-4 font-bold'>
            Hello! Welcome to my portfolio. My name is Vaibhav Kumar, I am a
            enthusiastic{" "}
          </span>
          {description}
        </p>
        <div className="hidden lg:block">
          <DownloadResume />
        </div>
      </article>
    </div>
  );
};

export default AboutDescription;
