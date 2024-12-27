/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Experience2 from "../Images/ExperienceIMG.png";
import experienceJson from "../../data/Experience";
import {
  MintoakExperience,
  TechnoBuxExperience,
  GlobalLogicExperience,
} from "./ExperienceItem";

const Experience = () => {
  return (
    <div className='bg-[#1b1c18] pt-10 min-h-screen pb-10 text-white lg:py-32 md:px-10 lg:px-52 xl:px-60'>
      <div className='flex lg:gap-1 gap-4 pt-[25px] px-5'>
        <div>
          <img src={Experience2} className='h-[50px] rounded-full' />
        </div>
        <div>
          <h1 className='text-[24px] mt-3 uppercase lg:ml-3'>Experience :</h1>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6'>
        <MintoakExperience />
        <TechnoBuxExperience />
        <GlobalLogicExperience />
      </div>
    </div>
  );
};

export default Experience;
