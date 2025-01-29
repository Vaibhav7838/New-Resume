import React from "react";
import MintoakSvg from "../../../images/mintoak.svg";
import { CustomLink } from "../../CustomLink";

export const MintoakExperience = () => {
  return (
    <div className='px-5 lg:px-20 mt-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-between w-full'>
        <div className='flex gap-2'>
          <img
            src={MintoakSvg}
            className='h-[40px] lg:h-[50px] rounded-full'
            alt='company'
            loading='lazy'
          />

          <CustomLink to={"https://uat.mintoak.com/"}>
            <p className='font-extrabold mt-2 md:mt-3 lg:text-[22px] text-[18px]'>
              Mintoak Innovations Pvt Ltd
            </p>
          </CustomLink>
        </div>
        <div className='px-10 md:text-right md:mt-3 font-bold'>
          September,2022 - Present
        </div>
      </div>

      <div className='list_wrapper lg:px-10'>
        <div>
          <p className='font-bold my-6'>Software Development Engineer</p>
        </div>

        <div>
          <p className='font-bold'>
            {" "}
            <span className='text-sm text-white'>★</span> Smarthub Vyapaar –
            (Nextjs, Reactjs, Tailwind css) : client HDFC
          </p>
          <ul className='px-2 lg:px-8 py-5'>
            <li>
              <span>&#8226;</span> End-to-End Development: Led the development
              of a project from scratch, building dynamic pages with Next.js,
              Tailwind CSS, and Redux, while ensuring{" "}
              <span className='font-bold'>pixel-perfect </span>
              implementation from{" "}
              <span className='font-bold'>Figma designs</span>.
            </li>
            <li>
              <span>&#8226;</span> Integrated advanced features like{" "}
              <span className='font-bold'>reCaptcha </span>
              and a <span className='font-bold'>virtual keyboard </span> for
              enhanced security and utilized third-party libraries such as React
              Date Picker and Headless UI to optimize user experience.
            </li>
            <li className='font-bold'>
              <span>&#8226;</span> Partnered with the backend team to create
              seamless API integration, improving issue resolution efficiency by
              30% through a streamlined end-to-end workflow.
            </li>
            <li>
              <span>&#8226;</span> Successfully managed and delivered multiple
              projects, including SmartHub, Admin Portal, and Website, providing
              consistent updates to stakeholders and showcasing outcomes through
              impactful demos.
            </li>
            <li>
              <span>&#8226;</span> Optimized the codebase for performance,
              adhered to best practices, and ensured a responsive, user-centric
              interface with high-quality CSS implementations.
            </li>
          </ul>
        </div>
        <div>
          <p className='font-bold'>
            <span className='text-sm text-white'>★</span> Smarthub Vyapaar
            sub-project - Poss/Soundbox– (Nextjs, Reactjs, Tailwind css) :
            client HDFC
          </p>

          <ul className='px-2 lg:px-8 py-5'>
            <li>
              <span>&#8226;</span> Spearheaded the development of a
              mobile-focused application from scratch, creating dynamic,
              responsive pages using Next.js and React.js.
            </li>
            <li className='font-bold'>
              <span>&#8226;</span> Worked on multiple comprenhensive task like
              multiselect, coupon managing, coupon appling, filteration of the
              coupon eligibility and price after all the deduction.
            </li>
            <li>
              <span>&#8226;</span> Implemented clean, maintainable CSS with
              Tailwind CSS to achieve pixel-perfect designs based on Figma
              prototypes.
            </li>
            <li>
              <span>&#8226;</span> Prioritized a mobile-first strategy to
              enhance user experience across devices.
            </li>
          </ul>
        </div>
        <div>
          <p className='font-bold'>
            <span className='text-sm text-white'>★ </span>Website Main –
            (Nextjs, Reactjs, Pure CSS & Tailwind css, Strapi CMS)
          </p>

          <ul className='px-2 lg:px-8 py-5'>
            <li>
              <span>&#8226;</span> Enhanced the website using Tailwind CSS and
              pure CSS, ensuring alignment with updated Figma designs and
              delivering a polished, responsive interface.
            </li>
            <li>
              <span>&#8226;</span> Designed schemas, generated APIs using Strapi
              CMS, and integrated multiple APIs to build clean, reusable
              components while maintaining code quality.
            </li>
            <li>
              <span>&#8226;</span> Mentored and managed 2–3 interns, resolving
              technical queries and aligning their contributions with project
              goals, ensuring timely and high-quality project delivery.
            </li>
            <li>
              <span>&#8226;</span> Consistently resolved Jira tickets ahead of
              deadlines, maintaining high standards in a fast-paced,
              deadline-driven environment.
            </li>
          </ul>
        </div>
        <div>
          <p className='font-bold'>
            <span className='text-sm text-white'>★ </span>Admin Portal –
            (Nextjs, Reactjs, Tailwindcss) : client Axis, Yesbank
          </p>

          <ul className='px-2 lg:px-8 py-5'>
            <li>
              <span>&#8226;</span> Team Collaboration & Project Management:
              Collaborated with the team to develop a portal and successfully
              managed multiple projects, including SmartHub, Admin Portal, and
              Website, ensuring timely delivery.
            </li>
            <li>
              <span>&#8226;</span> Security & Presentation: Enhanced login
              security by implementing reCaptcha and delivered impactful demos
              and presentations to showcase project achievements and technical
              contributions.
            </li>
            <li className='font-bold'>
              <span>&#8226;</span> Efficiency & Quality: Consistently resolved
              Jira tickets ahead of deadlines, maintaining high-quality
              standards in a fast-paced, deadline-driven environment.
            </li>
          </ul>
        </div>
        <div>
          <p className='font-bold'>
            <span className='text-sm text-white'>★ </span>Ecommerce – (Nextjs,
            Reactjs, Tailwindcss, Redux, SWR)
          </p>

          <ul className='px-2 lg:px-8 py-5'>
            <li>
              <span>&#8226;</span> Ecommerce Development: Played a pivotal role
              in developing an eCommerce website from scratch, building dynamic,
              responsive pages using Next.js, Tailwind CSS, and Redux, with a
              focus on user-friendly design.
            </li>
            <li>
              <span>&#8226;</span> Advanced Features: Designed and implemented
              advanced functionalities, including product filtering, coupon
              application, robust login systems, and comprehensive error
              handling.
            </li>
            <li>
              <span>&#8226;</span> Streamlined Processes: Established efficient
              workflows for bug reporting, ticket creation, and resolution,
              consistently meeting deadlines and maintaining high-quality
              standards.
            </li>
            <li>
              <span>&#8226;</span> User Experience Optimization: Utilized modern
              front-end technologies to create intuitive user interfaces,
              enhancing usability and overall user experience.
            </li>
            <li>
              <span>&#8226;</span> Presentations & Impact: Delivered impactful
              demos and presentations, highlighting successful project
              completion and key technical contributions.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
