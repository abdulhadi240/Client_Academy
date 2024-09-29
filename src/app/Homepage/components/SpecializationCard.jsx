import React from 'react';
import { HiMiniSquare3Stack3D } from "react-icons/hi2";

const SpecializationCard = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-white group-hover:transition-colors rounded-lg group shadow-md w-36 h-28 hover:bg-[#152765] hover:text-white"> {/* Reduced padding */}
      <div className="flex items-center justify-center"> {/* Reduced margin */}
        <div className="flex items-center justify-center p-2   bg-[#152765] rounded-full"> {/* Adjusted icon container size */}
          <span className="text-lg font-bold">
            <HiMiniSquare3Stack3D color="white" />
          </span>
        </div>
      </div>
      <h4 className="mt-4 text-sm text-[#152765] group-hover:text-white group-hover:transition-colors">{title}</h4>
    </div>
  );
};

export default SpecializationCard;
