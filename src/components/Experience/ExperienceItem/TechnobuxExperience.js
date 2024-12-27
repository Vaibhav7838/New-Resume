import React from "react";
import TechnobuxImage from "../../../images/technobux.jpeg";

export const TechnoBuxExperience = () => {
  return (
    <div className='px-5 lg:px-20 lg:mt-5'>
      <div className='flex gap-2'>
        <img
          src={TechnobuxImage}
          className='h-[40px] lg:h-[50px] rounded-full'
          alt='company'
        />
        <p className='font-extrabold mt-1.5  lg:text-[22px] text-[18px]'>
          Technobux Pvt Ltd(Startup)
        </p>
      </div>

      <div className='list_wrapper lg:px-10'>
        <div>
          <p className='font-bold my-6'>Front-end Developer</p>
        </div>

        <div>
          <ul className='px-2 lg:px-8'>
            <li>
              <span>&#8226;</span> Played a key role in the development project
              from scratch and help to build new dynamic pages using reactjs and
              tailwind css.
            </li>
            <li>
              <span>&#8226;</span> Consistently closed Jira tickets ahead of
              deadline while maintaining the high-quality standards in a
              fast-paced, deadline-driven environment.
            </li>
            <li className='font-bold'>
              <span>&#8226;</span> Consistently push code and maintain a good
              bitbucket repository.
            </li>
            <li>
              <span>&#8226;</span> Use grape js to built drag and drop website
              for the user.
            </li>
            <li>
              <span>&#8226;</span> Optimized the codebase for performance,
              adhered to best practices, and ensured a responsive, user-centric
              interface with high-quality CSS implementations.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
