import React from "react";
import SkillGrid from "./SkillGrid";
import ExperienceCard from "./EducationList/EducationList";

const Skills = () => {
  return (
    <div className='bg-[#1b1c18] text-white flex justify-center items-center min-h-screen pb-20'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16 lg:mt-40'>
        <div className='pb-5 lg:border-r'>
          <h1 className='text-[24px] uppercase text-center'>
            <i className='fa-brands fa-angellist'></i> Skills
          </h1>
          <div className='mt-10'>
            <SkillGrid />
          </div>
        </div>

        <div>
          <h1 className='text-[24px] lg:text-[28px] text-center'>
            <i className='fa-solid fa-graduation-cap'></i> Experience &
            Education :
          </h1>
          <div className='grid grid-cols-2 lg:text-[20px] lg:mt-16 px-5'>
            <div className='mt-6 lg:text-[20px]'>
              <div className='max-w-md w-full'>
                <ExperienceCard
                  yearRange='Sep 2022 - PRESENT'
                  company='Mintoak Innovation Pvt Ltd'
                  title='Software Engineer'
                />
              </div>
              <div className='max-w-md w-full'>
                <ExperienceCard
                  yearRange='2020 - Aug 2022'
                  company='Technobux'
                  title='Front-end Developer'
                />
              </div>
              <div className='max-w-md w-full'>
                <ExperienceCard
                  yearRange='2020 - 2022'
                  company='Global Logic(client Google)'
                  title='Content Engineer Machine Learning'
                />
              </div>
            </div>
            <div className='mt-6 lg:text-[20px]'>
              <div className='max-w-md w-full'>
                <ExperienceCard
                  yearRange='2023 - PRESENT'
                  company='MCA - Masters of Computer Application'
                  title='IGNOU (SOL)'
                />
              </div>
              <div className='max-w-md w-full'>
                <ExperienceCard
                  yearRange='2016 - 2019'
                  company='BCA - Bachelors of Computer Application'
                  title='IITM (GGSIPU)'
                />
              </div>
              <div className='max-w-md w-full'>
                <ExperienceCard
                  yearRange='2014 - 2016'
                  company='XII'
                  title='Lt Col Mehar School'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
