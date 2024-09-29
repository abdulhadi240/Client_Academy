import Image from "next/image";
import ServiceCard from "./ServiceCard";

// components/MainContent.js
const MainContent = () => {
    return (
      <div className="flex justify-between gap-8 mt-8 ">
        
        {/* Left Column */}
        <div className="flex flex-col items-start mx-10 space-y-4">
          <Image
            src="/group401.png"
            width={100}
            height={100}
            alt="Laptop meeting"
            className="w-full rounded-lg shadow-lg"
          />
          <h3 className="text-xl font-bold text-gray-800">
            The annual training plan for the courses and programs of the British Academy
          </h3>
          <p className="text-gray-500">
            The annual training plan for the courses and programs of the British Academy
          </p>
          <button className="px-4 py-2 text-white bg-blue-900 rounded-lg">Go to Plan</button>
        </div>
  
        {/* Right Column - Service List */}
        <div className="space-y-2">
          <ServiceCard
            title="Courses with discount"
            description="We provide the latest international courses at suitable prices"
            icon="/path-to-icon/discount.png"
          />
          <ServiceCard
            title="Approved Courses"
            description="The participant with the courses offered by us has many services and features"
            icon="/path-to-icon/approved.png"
          />
          <ServiceCard
            title="Featured Courses"
            description="We update the list of courses according to the needs of the labor market"
            icon="/path-to-icon/featured.png"
          />
          <ServiceCard
            title="Courses by specialization"
            description="More than 20 specializations in many fields"
            icon="/path-to-icon/specialization.png"
          />
          <ServiceCard
            title="Courses by city"
            description="Our favorite cities with attractive attractions"
            icon="/path-to-icon/city.png"
          />
        </div>
      </div>
    );
  };
  

  
  export default MainContent;
  