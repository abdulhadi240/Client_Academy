// components/SectionTitle.js
const SectionTitle = ({ title, highlight }) => {
  return (
    <h2 className="my-6 mt-24 text-3xl font-bold text-center text-gray-800">
      {title} <span className="text-[#B12E33]">{highlight}</span>
      <div className="w-16 mx-auto mt-2 border-b-4 border-[#B12E33]"></div>
    </h2>
  );
};

export default SectionTitle;