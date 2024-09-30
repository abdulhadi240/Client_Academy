'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const tabsData = [
  {
    id: 'videos',
    label: 'Videos',
    title: 'What Is The Marketing?',
    description: `Marketing is one of the most important administrative sciences in all countries and economic fields. Marketing activities have witnessed many notable developments over the years, and the marketing function has become a means of ensuring that businesses achieve career success and sustainability in the business environment.`,
    image: '/g1.png',
  },
  {
    id: 'careers',
    label: 'Careers',
    title: 'Career Opportunities in Marketing',
    description: `Marketing is one of the most important administrative sciences in all countries and economic fields. Marketing activities have witnessed many notable developments over the years, and the marketing function has become a means of ensuring that businesses achieve career success and sustainability in the business environment.`,
    image: '/g1.png',
  },
  {
    id: 'blogs',
    label: 'Blogs',
    title: 'Latest Blogs on Marketing',
    description: `Marketing is one of the most important administrative sciences in all countries and economic fields. Marketing activities have witnessed many notable developments over the years, and the marketing function has become a means of ensuring that businesses achieve career success and sustainability in the business environment.`,
    image: '/g1.png',
  },
  {
    id: 'consultancy',
    label: 'Consultancy',
    title: 'Marketing Consultancy Services',
    description: `Marketing is one of the most important administrative sciences in all countries and economic fields. Marketing activities have witnessed many notable developments over the years, and the marketing function has become a means of ensuring that businesses achieve career success and sustainability in the business environment.`,
    image: '/g1.png',
  },
  {
    id: 'workwithus',
    label: 'Work With Us',
    title: 'Join Our Marketing Team',
    description: `Marketing is one of the most important administrative sciences in all countries and economic fields. Marketing activities have witnessed many notable developments over the years, and the marketing function has become a means of ensuring that businesses achieve career success and sustainability in the business environment.`,
    image: '/g1.png',
  },
];

const WorkWithUsForm = () => {
  const [name, setName] = useState('');
  const [degree, setDegree] = useState('');
  const [residence, setResidence] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Handle form submission logic here
    const formData = new FormData();
    formData.append('name', name);
    formData.append('degree', degree);
    formData.append('residence', residence);
    formData.append('specialization', specialization);
    if (file) {
      formData.append('cv', file);
    }

    // Here you can implement a fetch request to send the formData to your server
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className="container mx-auto sm:p-6">
      <form onSubmit={handleSubmit} className="p-3 bg-white rounded-lg shadow-md sm:p-6">
        <h2 className="mb-4 text-xl font-semibold">Application Form</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="degree">The highest scientific degree</label>
          <input
            type="text"
            id="degree"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="residence">Place of residence</label>
          <input
            type="text"
            id="residence"
            value={residence}
            onChange={(e) => setResidence(e.target.value)}
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="specialization">Specialization</label>
          <input
            type="text"
            id="specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="cv">Upload CV</label>
          <input
            type="file"
            id="cv"
            onChange={handleFileChange}
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="flex justify-between mt-6">
          <button type="submit" className="bg-[#152765] text-white text-sm font-light py-2 px-4 rounded-lg">
            Accept
          </button>
          <button type="button" className="bg-[#152765] text-white text-sm  font-light py-2 px-4 rounded-lg">
            Upload CV
          </button>
        </div>
      </form>
    </div>
  );
};

const DynamicTabs = () => {
  const [activeTab, setActiveTab] = useState('videos');

  // Find the content of the active tab
  const activeContent = tabsData.find((tab) => tab.id === activeTab);

  return (
    <section className="py-6 overflow-hidden">
      <div className="container sm:mx-auto">
        {/* Tabs Navigation */}
        <nav className="p-4 mb-8 space-x-4 sm:p-0 rounded-3xl">
          <div className='grid grid-cols-2 gap-3 text-center sm:grid-cols-4 md:grid-cols-5 '>
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-5 sm:px-16 w-full text-center items-center rounded-2xl text-sm ${
                activeTab === tab.id ? 'bg-[#152765] text-white' : 'bg-gray-100 text-gray-800'
              }`}
              role="tab"
              aria-selected={activeTab === tab.id}
            >
              {tab.label}
            </button>
          ))}
          </div>
        </nav>

        {/* Dynamic Content */}
        <div className="flex flex-col items-center justify-between gap-10 mx-3 mt-32 sm:mx-6 md:mx-16 lg:flex-row">
          {/* Text Content */}
          <div className="space-y-4 lg:w-1/2">
            {activeTab === 'workwithus' ? (
              <WorkWithUsForm /> // Render custom component for "Work With Us" tab
            ) : (
              <>
                <h2 className="text-3xl font-bold text-gray-800">{activeContent.title}</h2>
                <p className="text-gray-600">{activeContent.description}</p>
                <a href="#" className="font-extralight text-xs text-[#152765]">Learn more</a>
              </>
            )}
          </div>

          {/* Image with Decorative Boxes */}
          <div className="relative mt-6 lg:w-1/2 lg:mt-0">
            {/* Top-left decorative box */}
            <div className="absolute w-32 h-32 -top-6 -left-6 bg-[#152765] rounded-3xl -z-10" />

            {/* Main Image */}
            <Image
              src={activeContent.image}
              alt={activeContent.title}
              height={500}
              width={500}
              className="z-10 rounded-lg shadow-lg"
              loading="lazy" // Use lazy loading for better performance
            />

            {/* Bottom-right decorative box */}
            <div className="absolute w-32 h-32 -bottom-6 right-5 bg-[#B12E33] rounded-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicTabs;
