import React from "react";
import { CustomLink } from "../CustomLink/CustomLink";
import { DownloadResume } from "../DownloadResume";

const Menu = () => {
  return (
    <div className='fixed left-0 top-15 w-[50%]'>
      <div className='md:mx-10 px-10 py-5 bg-[#1b1c18] pb-5 min-h-screen'>
        <ul>
          <li className='cursor-pointer py-5 border-b rounded'>
            <CustomLink to={"/"}>Home</CustomLink>
          </li>
          <li className='cursor-pointer py-5 border-b rounded'>
            <CustomLink to={"/experience"}>Experience</CustomLink>
          </li>
          <li className='cursor-pointer py-5 border-b rounded'>
            <CustomLink to={"/skills"}>Skills</CustomLink>
          </li>
          <li className='cursor-pointer py-5 border-b rounded'>
            <CustomLink to={"contact-us"}>Contact us</CustomLink>
          </li>
        </ul>
      </div>
      <div className='fixed bottom-0'>
        <div className="px-10 md:px-28 py-5">
          <DownloadResume />
        </div>
      </div>
    </div>
  );
};

export default Menu;
