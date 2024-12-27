import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import { useLocation } from "react-router-dom";
import { CustomLink } from "../CustomLink/CustomLink";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowMenu(false);
  }, [location]);
  return (
    <div className='text-white fixed top-0 left-0 right-0 w-full lg:p-5 text-xl'>
      <div className='block lg:hidden rounded p-2 w-full bg-[#1b1c18]'>
        {showMenu ? (
          <p onClick={()=>setShowMenu(false)}>
            <i className='fa-solid fa-xmark border rounded-full px-3 py-2'></i>
          </p>
        ) : (
          <img
            src='/menuicon.svg'
            className='h-8 cursor-pointer'
            onClick={() => setShowMenu(true)}
          />
        )}
      </div>

      <div className='fixed hidden lg:block top-0 left w-full'>
        <div className='md:mx-10 flex justify-center bg-[#1b1c18] border-b rounded py-10 lg:mx-52 xl:mx-60 pb-5'>
          <ul className='flex gap-20'>
            <li className='cursor-pointer'>
              <CustomLink to={"/"}>Home</CustomLink>
            </li>
            <li className='cursor-pointer'>
              <CustomLink to={"/experience"}>Experience</CustomLink>
            </li>
            <li className='cursor-pointer'>
              <CustomLink to={"/skills"}>Skills</CustomLink>
            </li>
            <li className='cursor-pointer'>
              <CustomLink to={"contact-us"}>Contact us</CustomLink>
            </li>
          </ul>
        </div>
      </div>

      {showMenu && <Menu />}
    </div>
  );
};
