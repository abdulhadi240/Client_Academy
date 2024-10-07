import Image from 'next/image';
import Link from 'next/link';
import { FaYoutube, FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Course_card = () => {
  return (
    <div className="max-w-sm mx-auto overflow-hidden bg-white shadow-lg rounded-xl">
      {/* Image Section */}
      <Image
        src="/123.png" // Replace with the actual image path
        width={300}
        height={300}
        alt="Zoom-friendly edtech solution"
        className="object-cover w-full h-48"
      />

      {/* Content Section */}
      <div className="p-6">
        {/* Date */}
        <div className="flex items-center mb-2 text-xs text-gray-500 dark:text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 011-1h6a1 1 0 011 1v1h2a1 1 0 011 1v2a1 1 0 01-1 1h-1v9a2 2 0 01-2 2H6a2 2 0 01-2-2V6H3a1 1 0 01-1-1V3a1 1 0 011-1h2V2zM5 7v9a1 1 0 001 1h8a1 1 0 001-1V7H5z"
              clipRule="evenodd"
            />
          </svg>
          2020-12-30 10:30:55
        </div>
        {/* Title */}
        <h2 className="mb-3 font-semibold dark:text-black ">
          Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution
        </h2>
        {/* Social Icons */}
        <div className="flex mb-4 space-x-2">
          <Link href="#" className="text-red-600">
            <FaYoutube size={20} />
          </Link>
          <Link href="#" className="text-pink-500">
            <FaInstagram size={20} />
          </Link>
          <Link href="#" className="text-blue-400">
            <FaTwitter size={20} />
          </Link>
          <Link href="#" className="text-blue-700">
            <FaLinkedin size={20} />
          </Link>
          <Link href="#" className="text-blue-600">
            <FaFacebook size={20} />
          </Link>
        </div>
        {/* Details Button */}
        <button className="w-full px-6 py-2 text-sm text-white transition-all rounded-md bg-primary hover:bg-primary">
          Details
        </button>
      </div>
    </div>
  );
};

export default Course_card;