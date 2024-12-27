import React, { useState } from "react";
import { CustomLink } from "../CustomLink/CustomLink";
import About from "../../data/About";
import ContactInfo from "../About/ContactInfo";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className='bg-[#1b1c18] pt-5 lg:pt-0 px-5 lg:px-0 pb-20 text-white min-h-screen flex justify-center items-center md:px-20'>
      <div className='max-w-6xl'>
        <div className='text-center'>
          <h1 className='text-3xl lg:text-5xl pt-10 font-extrabold text-white'>
            GET IN <span className='text-yellow-500'>TOUCH</span>
          </h1>
        </div>

        <div className='grid md:grid-cols-2 gap-12 mt-20'>
          <div>
            <h2 className='text-3xl font-bold text-white mb-4'>
              DON'T BE SHY!
            </h2>
            <p className='text-gray-300 mb-8'>
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>

            <div className='flex space-x-4'>
              <ContactInfo contact={About?.contactInfo}/>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className='space-y-6'>
              <div className='grid md:grid-cols-3 gap-4'>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Your name'
                  className='bg-gray-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
                />
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Your email'
                  className='bg-gray-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
                />
                <input
                  type='text'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder='Your subject'
                  className='bg-gray-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
                />
              </div>

              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Your Message'
                rows={6}
                className='w-full bg-gray-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
              />

              <button
                type='submit'
                className='group relative flex items-center space-x-2 px-6 py-3 border-2 border-yellow-500 text-white rounded-md overflow-hidden'
              >
                <div className='absolute top-0 right-0 h-full w-0 bg-yellow-500 transition-all duration-300 ease-out group-hover:left-0 group-hover:w-full' />
                <span className='relative z-10 transition-colors duration-300 group-hover:text-white'>
                  SEND MESSAGE
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
