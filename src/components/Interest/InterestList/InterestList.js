import Mental from "../../../images/mental-health.png";

const InterestList = ({ interests }) => {
  return (
    <div className='order-2 pb-5 lg:px-10 rounded-xl'>
      <div className='pb-4'>
        <div className='flex lg:gap-1 gap-4 mt-[25px]'>
          <div>
            <img src={Mental} className='h-[70px]' alt="Mental Health Icon" />
          </div>
          <div>
            <h1 className='text-[24px] mt-6 uppercase lg:ml-3'>Interests :</h1>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mt-10 gap-5 mx-5'>
          {interests.map((interest, index) => (
            <div key={index} className='border rounded-full text-center'>
              <p>{interest.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InterestList;
