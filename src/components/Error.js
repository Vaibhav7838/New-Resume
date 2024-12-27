import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError()
  return (
    <div className='bg-[#1B1C18] h-screen w-full px-5 flex items-center justify-center'>
      <div className={`text-center transition-all`}>
        <img src='/Not_Found.jpg' className='lg:h-60 w-120 mx-auto ' />
        <p className='text-white font-bold text-xl md:text-3xl my-5'>
          We couldn't find the page you are looking for {err.status}
        </p>
        <p className='text-white text-xs md:text-base mb-0'>
          You are seeing this page because this URL does not exist.
        </p>
        <p className='text-white text-xs md:text-base mb-0'>
          Please report to us if you think this is an error. {err.statusText}
        </p>
        <div className='flex justify-center mt-8'>
          <Link to='/'>
            <button className='px-2 py-2 text-md lg:p-3 text-white font-bold rounded-2xl bg-[#FFC107]'>
              Go to Homepage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
