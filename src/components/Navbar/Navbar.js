import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className=''>
      <nav class='nav flex flex-wrap items-center justify-between px-4'>
        <div class='flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest'>
          <i className='fa-brands fa-connectdevelop text-[#B8D8E7]'></i>
          <span class='font-semibold text-xl tracking-tight'>Vaibhav</span>
        </div>

        <input class='menu-btn hidden' type='checkbox' id='menu-btn' />
        <label
          class='menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none'
          for='menu-btn'
        >
          <span class='navicon bg-grey-darkest flex items-center relative'>
            <i class='fa-solid fa-list-timeline'></i>
          </span>
        </label>

        <ul class='menu md:border-none flex justify-end list-reset m-0 w-full md:w-auto'>
          <li class=' md:border-none'>
            <a
              href='/About'
              class='block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold'
            >
              About
            </a>
          </li>

          <li class='md:border-none'>
            <a
              to='/Skills'
              class='block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker'
            >
              Skills
            </a>
          </li>

          <li class=' md:border-none'>
            <a
              href='/Experience'
              class='block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker'
            >
              Experience
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
