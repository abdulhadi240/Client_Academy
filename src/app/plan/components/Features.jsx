import Image from 'next/image';
import React from 'react';

const Features = ({ image, icon, number, heading, text, right }) => {
  return (
    <div className='mt-32 overflow-hidden'>
      {right ? (
        <div className='sm:flex flex-col sm:flex-row justify-between sm:mx-16 lg:mx-44 mx-2 overflow-hidden'>
          {/* Left side with Image */}
          <div>
            <Image src={image} width={300} height={300} alt='image' />
          </div>
          {/* Right side with content */}
          <div className='w-80 flex flex-col gap-4'>
            <div className='flex justify-between items-center'>
              <Image src={icon} width={50} height={50} alt='icon' />
              <h1 className='sm:text-4xl text-2xl'>{number}</h1>
            </div>
            <div className='flex flex-col gap-2'>
              <h1 className='font-bold text-xl'>{heading}</h1>
              <p>{text}</p>
            </div>
            <button className='bg-[#152765] p-4 w-44 text-white rounded-2xl text-sm text-center'>
              View Your Plans
            </button>
          </div>
        </div>
      ) : (
        <div className='sm:flex flex-col sm:flex-row-reverse justify-between sm:mx-44 lg:mx-44 mx-2 overflow-hidden'>
          {/* Right side with Image */}
          <div>
            <Image src={image} width={300} height={300} alt='image' />
          </div>
          {/* Left side with content */}
          <div className='w-80 flex flex-col gap-4'>
            <div className='flex justify-between items-center'>
              <Image src={icon} width={50} height={50} alt='icon' />
              <h1 className='sm:text-4xl text-2xl'>{number}</h1>
            </div>
            <div className='flex flex-col gap-2'>
              <h1 className='font-bold text-xl'>{heading}</h1>
              <p>{text}</p>
            </div>
            <button className='bg-[#152765] p-4 w-44 text-white rounded-2xl text-sm text-center'>
              View Your Plans
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Features;
