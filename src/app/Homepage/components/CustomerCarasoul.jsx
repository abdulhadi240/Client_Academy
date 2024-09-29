import React from 'react';
import Marquee from "react-fast-marquee";
import MyComponent from './MyComponent';

const CustomerCarasoul = () => {
  return (
    <div className="flex items-center justify-center w-full mt-10">
      <div className="w-[70%]">
        <Marquee gradient pauseOnHover autoFill>
          <MyComponent image={'/logo1.png'} />
          <MyComponent image={'/logo2.png'} />
          <MyComponent image={'/logo3.png'} />
          <MyComponent image={'/logo5.png'} />
          <MyComponent image={'/logo6.png'} />

        </Marquee>
      </div>
    </div>
  );
}

export default CustomerCarasoul;
