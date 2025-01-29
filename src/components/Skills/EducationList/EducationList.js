import React from "react";

const ExperienceCard = ({
  yearRange,
  title,
  company,
  description,
  iconColor = "#FFC107",
}) => {
  return (
    <div className='flex items-start lg:space-x-4 lg:pt-0 pt-8 lg:py-4 h-[150px]'>
      <div
        className='flex items-center mt-2 justify-center h-5 lg:w-16 lg:h-10 rounded-full'
        style={{ backgroundColor: iconColor }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-3 w-5 lg:h-5 lg:w-5 text-black'
          fill='currentColor'
          viewBox='0 0 20 20'
        >
          <path d='M6 2a1 1 0 00-1 1v2H3a1 1 0 00-1 1v11a1 1 0 001 1h14a1 1 0 001-1V6a1 1 0 00-1-1h-2V3a1 1 0 00-1-1H6zm1 2V3h6v1H7z' />
        </svg>
      </div>

      <div className="px-2">
        <div className='bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full inline-block'>
          {yearRange}
        </div>

        <h3 className='text-white text-sm lg:text-lg font-semibold mt-2'>{company}</h3>

        <p className='text-gray-400 text-sm mt-2'>
          <span className='text-gray-400'>{title}</span>
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
