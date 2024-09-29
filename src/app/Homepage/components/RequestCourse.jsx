import Image from 'next/image';
import React from 'react';

const RequestCourse = () => {
  return (
    <section className="bg-[#152765] text-white py-24 px-4 relative rounded-lg">
      <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row">
        
        {/* Text and Form Container */}
        <div className="text-center lg:w-1/2 lg:text-left">
          <h2 className="flex justify-center text-3xl">Request Course</h2>
          <p className="flex justify-center text-gray-300">You can contact us for a special course</p>

          {/* Form */}
          <form className="mt-6 space-y-4">
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-300 focus:outline-none"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-300 focus:outline-none"
              />
            </div>

            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <input 
                type="text" 
                placeholder="Mobile" 
                className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-300 focus:outline-none"
              />
              <select 
                className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-300 focus:outline-none"
              >
                <option value="request course" className='text-[#111F51]'>Request Course</option>
                <option value="course 1" className='text-[#111F51]'>Course 1</option>
                <option value="course 2" className='text-[#111F51]'>Course 2</option>
              </select>
            </div>

            <button className="w-full p-2 text-white bg-[#B12E33] rounded-lg">Send</button>
          </form>
        </div>

        {/* Decorative Circles */}
        <div className="absolute hidden top-4 left-4 lg:block">
          <div className="grid grid-cols-4 gap-2">
            {Array(20).fill().map((_, idx) => (
              <div key={idx} className="w-1 h-1 bg-white rounded-full"></div>
            ))}
          </div>
        </div>

        <div className="absolute hidden bottom-4 right-4 lg:block">
          <div className="grid grid-cols-4 gap-2">
            {Array(20).fill().map((_, idx) => (
              <div key={idx} className="w-1 h-1 bg-white rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Circular Profile Images */}
        <div className="absolute top-32 lg:left-8">
        <Image
            src="/1.png" 
            alt="Profile"
            height={50}
            width={50} 
            className="rounded-full"
          />
        </div>

        <div className="absolute bottom-32 left-32">
          <Image
            src="/1.png" 
            alt="Profile"
            height={50}
            width={50} 
            className="rounded-full"
          />
        </div>

        <div className="absolute top-32 right-32">
        <Image
            src="/1.png" 
            alt="Profile"
            height={50}
            width={50} 
            className="rounded-full"
          />
        </div>

        <div className="absolute bottom-32 right-8">
        <Image
            src="/1.png" 
            alt="Profile"
            height={50}
            width={50} 
            className="rounded-full"
          />
        </div>

      </div>
    </section>
  );
};

export default RequestCourse;
