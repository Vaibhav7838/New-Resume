import React from "react";
import { CustomLink } from "../../CustomLink/CustomLink";

const ContactInfo = ({ contact }) => {
  return (
    <div className='flex justify-center'>
      <div className='text-left'>
        <div>
          {contact.map((item, index) => (
            <p key={index}>
              <i className={item.icon + " text-[#B8D8E7]"}></i>
              {item.link ? (
                <CustomLink
                  to={item.link}
                  className='ml-5 text-[16px] lg:text-[20px] underline'
                >
                  {item.text}
                </CustomLink>
              ) : (
                <span className='ml-5 text-[16px] lg:text-[20px]'>
                  {item.text}
                </span>
              )}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
