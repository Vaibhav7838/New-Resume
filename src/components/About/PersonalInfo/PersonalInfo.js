import React from "react";
import Vaibhav from "../../../images/Vaibhav.png";
const PersonalInfo = ({ name }) => {
  return (
    <div>
      <div className='lg:py-10'>
        <p className="text-center">
          <i className='fa-brands fa-connectdevelop'></i>
          <span className='text-[29px] font-bold'> {name}</span>
        </p>
      </div>
      <div className='Vaibhav_img pt-5'>
        <img
          src={Vaibhav}
          alt='vaibhav'
          className='lg:h-[350px] h-[250px] md:h-[300px] mx-auto rounded-full border-2 border-[#F1F1F1]'
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
