import Image from 'next/image'
import React from 'react'

const Feature_Mobile = ({ image, icon, number, heading, text }) => {
  return (
    <div className='mt-32 overflow-hidden'>
        <div className=''>
          {/* Right side with Image */}
          <div>
            <Image src={image} width={100} height={100} alt='image' />
          </div>
          {/* Left side with content */}
          <div className=''>
            <div className='flex justify-between'>
              <h1 className='sm:text-4xl text-2xl'>{number}</h1>
            </div>
            <div className='flex flex-col gap-2 mx-2'>
              <h1 className='font-bold text-xl text-start'>{heading}</h1>
              <p className='text-start'>{text}</p>
            </div>
            <button className='bg-[#152765] p-4 mt-2 w-44 text-white rounded-2xl text-sm text-center'>
              View Your Plans
            </button>
          </div>
        </div>
    </div>
  )
}

export default Feature_Mobile