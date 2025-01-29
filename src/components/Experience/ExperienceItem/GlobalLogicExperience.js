import GLImage from "../../../images/GL.png";
import { CustomLink } from "../../CustomLink";

export const GlobalLogicExperience = () => {
  return (
    <div className='px-5 lg:px-20 mt-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-between w-full'>
        <div className='flex gap-2'>
          <img
            src={GLImage}
            className='h-[40px] lg:h-[50px] rounded-full'
            alt='company'
            loading='lazy'
          />
          <CustomLink to={"https://www.globallogic.com/"}>
            <p className='font-extrabold mt-1.5 lg:text-[22px] text-[18px]'>
              Global logic( client-Google Inc)
            </p>
          </CustomLink>
        </div>

        <div className='px-12 md:text-right md:mt-3 font-bold'>
          March,2020 - April,2022
        </div>
      </div>

      <div className='list_wrapper lg:px-10'>
        <div>
          <p className='font-bold my-6'>Content Engineer Machine Learning</p>
        </div>

        <div>
          <ul className='px-2 lg:px-8'>
            <li>
              <span>&#8226;</span> Experience in developing Web-based
              applications using JavaScript, CSS(BootStrap,tailwindcss), HTML5 &
              React
            </li>
            <li>
              <span>&#8226;</span> Skilled in client-side web technologies like
              HTML5, CSS, JavaScript.
            </li>
            <li className='font-bold'>
              <span>&#8226;</span> Consistently push code and maintain a good
              bitbucket repository.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
