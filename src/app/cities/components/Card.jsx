import Image from "next/image";
import React from "react";
import { BiSolidBadge } from "react-icons/bi";
const Card = ({ image, title, paragraph, country }) => {
  return (
    <div className="flex flex-col items-center gap-3 md:flex-row">
      <div className="relative w-72 md:w-56 h-44">
        <Image src={image} layout="fill" objectFit="cover" className="rounded-2xl" />
      </div>
      <div className="flex flex-col w-auto gap-2 text-center md:text-start">
        <h1 className="font-bold">{title}</h1>
        <p className="text-sm w-72">{paragraph}</p>
        <div className="flex items-center justify-center gap-2 md:justify-start country">
          <div className="icon text-[#49bbbd]">
            <BiSolidBadge />
          </div>
          <div className="text-sm country_name">{country}</div>
        </div>
        <div className="flex flex-col gap-2 mt-6 md:flex-row">
          <button className="px-8 py-2 text-sm text-white rounded-full bg-primary">
            Details
          </button>
          <button className="px-8 py-2 text-sm text-white rounded-full bg-secondary">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
