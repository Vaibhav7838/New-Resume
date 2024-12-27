import Project from "../../images/Project.png"

const Projects = () => {
  return (
    <div className='Project lg:border-b-0 border-b-2 pb-5 rounded-xl mt-5'>
      <div className='header lg:ml-2 px-5 py-5'>
        <div className='flex lg:gap-1 gap-4 mt-[25px]'>
          <div>
            <img src={Project} className='h-[50px]' />
          </div>
          <div>
            <h1 className='text-[24px] mt-6 uppercase lg:ml-3'>Projects :</h1>
          </div>
        </div>
      </div>
      <br />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
        {/** Project Academic */}
        <div className=''>
          <div className=''>
            <p className='lg:ml-16 font-bold lg:text-[22px]'>
              Academic Project :
            </p>
            <div className='list_wrapper lg:ml-16'>
              <br />
              <ul>
                <p>
                  <li>Project 1 : JEERA TICKET MANAGEMENT</li>
                  <li>Tool used: VS code, JavaScript, HTML, CSS</li>
                  <li>Database Used: Firebase, Local Storage (Browser)</li>
                </p>
                <br />
                <p>
                  <li>Project 2: TODO List</li>
                  <li>Tool used: React, JavaScript, HTML, CSS & Vscoder</li>
                  <li>Database Used: Firebase, Local Storage (Browser)</li>
                </p>{" "}
                <br />
                <p>
                  <li>Project 3: Movie App</li>
                  <li>Tool used: React, JavaScript, HTML, CSS & Vscoder</li>
                  <li>Database Used: Firebase, Local Storage (Browser)</li>
                </p>
              </ul>
            </div>
          </div>
        </div>
        {/** END */}
        {/** College Project */}
        <div className=''>
          <div className=''>
            <p className='lg:ml-16 font-bold lg:text-[22px]'>
              College Project’s:
            </p>
            <div className='list_wrapper lg:ml-16'>
              <br />
              <ul>
                <p>
                  <li> Main Project: Uber Clone(Take-Taxi)</li>
                  <li>Android Application (Android Studio)</li>
                  <li>Tool used: Android Studio, Java</li>
                  <li>Database Used: Firebase, Local Storage (Browser)</li>
                </p>
                <br />
                <p>
                  <li> Semi-Main Project: Family Tracker</li>
                  <li>Android Application (Android Studio)</li>
                  <li>Tool used: Android Studio, Java</li>
                  <li>Database Used: Firebase, Local Storage (Browser)</li>
                </p>{" "}
                <br />
              </ul>
            </div>
          </div>
        </div>
        {/** END */}
      </div>
      {/** End */}
    </div>
  );
};
export default Projects;
