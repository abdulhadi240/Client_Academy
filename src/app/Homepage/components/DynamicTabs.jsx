'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const tabsData = [
  {
    id: 'videos',
    label: 'Videos',
    title: 'What Is The Marketing?',
    description: `Marketing is one of the most important administrative sciences in all countries and economic fields. Marketing activities have witnessed many notable developments over the years, and the marketing function has become a means of ensuring that businesses achieve career success and sustainability in the business environment. To be used in the market; a range of advertising and promotion methods and methods should be used; thus contributing to the delivery of enterprise products and services to end-users.The modern marketing activities focus on the processes associated with the...`,
    image: '/g1.png',
  },
  {
    id: 'careers',
    label: 'Careers',
    title: 'Career Opportunities in Marketing',
    description: `Marketing is one of the most important administrative sciences in all countries and economic fields. Marketing activities have witnessed many notable developments over the years, and the marketing function has become a means of ensuring that businesses achieve career success and sustainability in the business environment. To be used in the market; a range of advertising and promotion methods and methods should be used; thus contributing to the delivery of enterprise products and services to end-users.The modern marketing activities focus on the processes associated with the...`,
    image: '/g1.png',
  },
  {
    id: 'blogs',
    label: 'Blogs',
    title: 'Latest Blogs on Marketing',
    description: `Marketing is one of the most important administrative sciences in all countries and economic fields. Marketing activities have witnessed many notable developments over the years, and the marketing function has become a means of ensuring that businesses achieve career success and sustainability in the business environment. To be used in the market; a range of advertising and promotion methods and methods should be used; thus contributing to the delivery of enterprise products and services to end-users.The modern marketing activities focus on the processes associated with the...`,
    image: '/g1.png',
  },
  {
    id: 'consultancy',
    label: 'Consultancy',
    title: 'Marketing Consultancy Services',
    description: `Marketing is one of the most important administrative sciences in all countries and economic fields. Marketing activities have witnessed many notable developments over the years, and the marketing function has become a means of ensuring that businesses achieve career success and sustainability in the business environment. To be used in the market; a range of advertising and promotion methods and methods should be used; thus contributing to the delivery of enterprise products and services to end-users.The modern marketing activities focus on the processes associated with the...`,
    image: '/g1.png',
  },
  {
    id: 'workwithus',
    label: 'Work With Us',
    title: 'Join Our Marketing Team',
    description: `Marketing is one of the most important administrative sciences in all countries and economic fields. Marketing activities have witnessed many notable developments over the years, and the marketing function has become a means of ensuring that businesses achieve career success and sustainability in the business environment. To be used in the market; a range of advertising and promotion methods and methods should be used; thus contributing to the delivery of enterprise products and services to end-users.The modern marketing activities focus on the processes associated with the...`,
    image: '/g1.png',
  },
];

const DynamicTabs = () => {
  const [activeTab, setActiveTab] = useState('videos');

  // Find the content of the active tab
  const activeContent = tabsData.find((tab) => tab.id === activeTab);

  return (
    <section className="py-6">
      <div className="container mx-auto">
        {/* Tabs */}
        <div className="flex justify-center m-6 mb-8 space-x-4 shadow-lg rounded-3xl">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 m-3  px-20 rounded-2xl text-sm ${
                activeTab === tab.id ? 'bg-[#152765] text-white' : 'bg-gray-100 text-gray-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Content */}
        <div className="flex flex-col items-center justify-between gap-10 mx-16 mt-32 lg:flex-row">
          {/* Text Content */}
          <div className="space-y-4 lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800">{activeContent.title}</h2>
            <p className="text-gray-600">{activeContent.description}</p>
            <a href="#" className="font-extralight text-xs text-[#152765]">Learn more</a>
          </div>

          {/* Image with Decorative Boxes */}
          <div className="relative mt-6 lg:w-1/2 lg:mt-0">
            {/* Top-left decorative box */}
            <div className='absolute w-32 h-32 -top-6 -left-6 bg-[#152765] rounded-3xl -z-10'/>

            {/* Main Image */}
            <Image
              src={activeContent.image}
              alt={activeContent.title}
              height={500}
              width={500}
              className="z-10 rounded-lg shadow-lg"
            />

            {/* Bottom-right decorative box */}
            <div className='absolute w-32 h-32 -bottom-6 right-5 bg-[#B12E33] rounded-3xl -z-10'/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicTabs;
