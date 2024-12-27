import Experience2 from "../../../images/ExperienceIMG.png";
import GL from "../../../images/GL.png";
import Technobux from "../../../images/technobux.jpeg";
import Mintoak from "../../../images/mintoak.svg"

const ExperienceList = ({ experiences }) => {
  const companyImages = {
    "Global Logic": GL,
    "Technobux": Technobux,
    "Mintoak" : Mintoak
  };

  return (
    <div className='order-1 lg:pl-3 pb-5 rounded-xl'>
      <div className='flex lg:gap-1 gap-4 mt-[25px]'>
        <div>
          <img src={Experience2} className='h-[50px] rounded-full' alt="Experience Icon" />
        </div>
        <div>
          <h1 className='text-[24px] mt-3 uppercase lg:ml-3'>Experience :</h1>
        </div>
      </div>
      <div className='lg:mt-10 gap-2 mx-5'>
        {experiences.map((experience, index) => (
          <div className="my-5" key={index}>
            <div className='lg:text-[18px] text-left'>
              <img
                src={companyImages[experience.company]} 
                className='h-[50px]' 
                alt={experience.company} 
              />
              <p>{experience.company} :</p>
            </div>
            <div className='text-left'>
              <p>{experience.years}</p>
              <p>{experience.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceList;
