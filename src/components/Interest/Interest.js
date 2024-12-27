import InterestData from "../../data/Interest";
import InterestList from "./InterestList";
import ExperienceList from "./ExperienceList";

const Interest = () => {
  return (
    <div className='lg:py-10 lg:px-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-10 justify-between'>
        <ExperienceList experiences={InterestData.experiences} />
        <InterestList interests={InterestData.interests} />
      </div>
    </div>
  );
};

export default Interest;
