import React from 'react';
import Image from 'next/image';
import { IoIosSearch } from "react-icons/io";
const Page = () => {
  const courses = [
    {
      id: 1,
      name: "Egypt",
      image: "/image.webp", // Replace with actual image path
    },
    {
      id: 2,
      name: "Egypt",
      image: "/image.webp", // Replace with actual image path
    },
    {
      id: 3,
      name: "Egypt",
      image: "/image.webp", // Replace with actual image path
    },
    {
      id: 4,
      name: "Egypt",
      image: "/image.webp", // Replace with actual image path
    },
    {
      id: 5,
      name: "Egypt",
      image: "/image.webp", // Replace with actual image path
    },
    {
      id: 6,
      name: "Egypt",
      image: "/image.webp", // Replace with actual image path
    },
  ];

  return (
    <div className="container p-4 mx-auto">
      {/* Heading and World Map */}
      <section className="mt-12 mb-12 text-center">
        <h2 className="text-2xl font-bold text-[#1B2559]">
          Courses By <span className="text-secondary">City</span>
        </h2>
        <div className="flex justify-center my-6">
          <Image
            src="/map.png" // Replace with actual world map image
            alt="World Map"
            width={1000}
            height={200}
          />
        </div>
      </section>

      {/* Search Bar (Visible on Mobile Only) */}
      <div className="flex items-center pl-2 mb-8 rounded-lg lg:hidden border-primary bg-primary">
        <IoIosSearch size={25} color='white'/>
        <input
          type="text"
          placeholder="Search City"
          className="w-full p-2 text-white border rounded-md placeholder:text-white border-primary bg-primary focus:outline-none focus:ring-primary"
        />
      </div>

      {/* Courses Grid */}
      <div className='flex justify-center'>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div key={course.id} className="w-64 p-2 bg-white rounded-lg shadow-md ">
            <Image
              src={course.image}
              alt={course.name}
              width={300}
              height={200}
              className="w-64 rounded-lg h-72 brightness-75"
            />
            <div className="mt-4 text-start">
              <h3 className="text-sm font-semibold">{course.name}</h3>
              <div className='flex justify-center mb-4'>
              <button className="flex justify-center w-auto px-20 py-2 mx-4 mt-2 text-sm text-center text-white rounded bg-primary hover:bg-secondary">
                Accept
              </button>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
