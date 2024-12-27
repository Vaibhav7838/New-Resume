import React from "react";
import Navbar from "./Navbar/Navbar";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Interest from "./Interest/Interest";
import { Header } from "./Header";
import { createBrowserRouter } from "react-router-dom";



const Resume = () => {
  return (
    <div className='bg-[#1b1c18] text-white px-20 min-h-screen'>
      <div>
        <Header/>
      </div>
      <div className='ALL_Wrapper '>
        <div className='Wrapper mx-7'>
          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 '>
            <div>
              <div>
                <About />
              </div>

              {/* <div>
                <Experience />
              </div>

              <div>
                <Skills />
              </div>

              <div className='Interest'>
                <Interest />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
