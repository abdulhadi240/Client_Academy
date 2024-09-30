'use client'
import { useState } from 'react';
import SpecializationCard from './SpecializationCard';

// Define your menu items and their associated data
const menuItems = [
  { id: 1, title: 'Service Management', data: Array(12).fill('Service Management') },
  { id: 2, title: 'Media And Relation', data: Array(12).fill('Media And Relation') },
  { id: 3, title: 'Information Technology And Telecommunication', data: Array(12).fill('IT and Telecommunication') },
  { id: 4, title: 'Environment', data: Array(12).fill('Environment') },
  { id: 5, title: 'Accounting, Finance & Banking', data: Array(12).fill('Finance & Banking') },
  { id: 6, title: 'Management', data: Array(12).fill('Management') },
  { id: 7, title: 'Oil And Gas', data: Array(12).fill('Oil And Gas') },
  { id: 8, title: 'Renewable And Clean Energy', data: Array(12).fill('Clean Energy') },
  { id: 9, title: 'Health And Safety', data: Array(12).fill('Health And Safety') },
  { id: 10, title: 'Public Health And Hospital Management', data: Array(12).fill('Hospital Management') },
  { id: 11, title: 'Engineering Maintenance', data: Array(12).fill('Engineering Maintenance') },
];

const SpecializationSection = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(menuItems[0].id); // Initially select the first menu item

  // Function to handle menu item click
  const handleMenuItemClick = (id) => {
    setSelectedMenuItem(id);
  };

  // Find the selected menu item's data
  const selectedItem = menuItems.find((item) => item.id === selectedMenuItem);

  return (
    <section className="py-16">
      <div className="container">
        
        {/* Title and Description */}
        <h2 className="text-2xl font-bold text-center sm:text-3xl">
          Courses <span className="text-red-600">By Specialization</span>
        </h2>
        <div className='flex justify-center'>
        <p className="mt-4 text-sm sm:text-base w-full p-3 sm:p-0 text-center text-gray-500 sm:w-[800px] items-center">
          The British Academy for Training and Development differs from other companies operating in the same field because it is a British-European company with excellence and there are specialized cadres with great practical experience...
        </p>
        </div>
        
        {/* Main Layout - Side Menus and Card Grid */}
        <div className=" md:mx-10 md:flex-row">
          <div className='flex flex-row justify-between gap-4 mx-2 mt-10 '>
          {/* Left Menu */}
          <div className="space-y-4">
            {menuItems.slice(0, 6).map((item) => (
              <SideMenuItem
                key={item.id}
                title={item.title}
                active={item.id === selectedMenuItem}
                onClick={() => handleMenuItemClick(item.id)}
              />
            ))}
          </div>
          
          {/* Center - Grid of Cards */}
          <div className="hidden gap-5 mt-2 sm:grid sm:grid-cols-2 md:grid-cols-4">
            {selectedItem.data.map((title, index) => (
              <SpecializationCard key={index} title={title} />
            ))}
          </div>
          
          {/* Right Menu */}
          <div className="space-y-4">
            {menuItems.slice(6).map((item) => (
              <SideMenuItem
                key={item.id}
                title={item.title}
                active={item.id === selectedMenuItem}
                onClick={() => handleMenuItemClick(item.id)}
              />
            ))}
          </div>
          </div>
          <div className='flex justify-center'>
          <div className="grid grid-cols-2 gap-4 mt-10 md:hidden">
            {selectedItem.data.map((title, index) => (
              <SpecializationCard key={index} title={title} />
            ))}
          </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Side Menu Item Component
const SideMenuItem = ({ title, active, onClick }) => {
  return (
    <div
      className={`md:w-56 h-auto p-3 text-center items-center m-2 mx-auto text-sm font-bold rounded-lg cursor-pointer ${active ? 'bg-[#152765] text-white' : 'bg-gray-100 text-gray-800'}`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};


export default SpecializationSection;
