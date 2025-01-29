import React from "react";
import PersonalInfo from "./PersonalInfo";
import AboutDescription from "./AboutDescription";
import aboutData from "../../data/About";

const About = () => {
  const { personalInfo, aboutDescription } = aboutData;

  return (
    <div className="bg-[#1b1c18] text-white px-5 lg:py-0 pb-10 lg:px-52 xl:px-60 md:px-40">
      <div className='flex items-center justify-center min-h-screen'>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-20'>
          <PersonalInfo name={personalInfo.name} />
          <AboutDescription description={aboutDescription.description} />
        </div>
      </div>
    </div>
  );
};

export default About;
