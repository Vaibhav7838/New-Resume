import React from "react";
import CircularProgress from "../Circularprogress";

const SkillGrid = () => {
  return (
    <div>
      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <CircularProgress percentage={92} label='Next.js' color='#FFC107' />
        <CircularProgress percentage={100} label='React.js' color='#FFC107' />
        <CircularProgress percentage={100} label='Javscript' color='#FFC107' />
        <CircularProgress percentage={100} label='HTML' color='#FFC107' />
        <CircularProgress percentage={100} label='CSS' color='#FFC107' />
        <CircularProgress
          percentage={100}
          label='Tailwind CSS'
          color='#FFC107'
        />
        <CircularProgress
          percentage={100}
          label='Materail UI'
          color='#FFC107'
        />
        <CircularProgress percentage={100} label='Bitbucket' color='#FFC107' />
        <CircularProgress percentage={100} label='Jira' color='#FFC107' />
      </div>
    </div>
  );
};

export default SkillGrid;
