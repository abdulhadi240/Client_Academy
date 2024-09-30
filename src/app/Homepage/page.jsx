import Image from "next/image";
import Head from "next/head"; // For SEO-related meta tags
import CourseCard from "./components/CourseCard";
import SearchFilters from "./components/SearchFilters";
import SectionTitle from "./components/SectionTitle";
import MainContent from "./components/MainContent";
import SpecializationSection from "./components/SpecializationSection";
import Carasoul from "./components/Carasoul";
import Training from "./components/Training";
import RequestCourse from "./components/RequestCourse";
import DynamicTabs from "./components/DynamicTabs";
import Team from "./components/Team";
import CustomerCarasoul from "./components/CustomerCarasoul";

const Page = () => {
  return (
    <>
      {/* SEO: Head section for meta tags */}
      <Head>
        <title>British Academy - Courses, Training & Career Opportunities</title>
        <meta name="description" content="Explore a variety of prominent courses offered by the British Academy to enhance your skills and career. Join now for better opportunities." />
        <meta name="keywords" content="British Academy, courses, training, career, personal development, online courses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        {/* Hero Section */}
        <div className="container p-6 overflow-hidden sm:py-16 sm:px-24 bg-[#DEEEFD] sm:flex sm:flex-col-reverse sm:items-center sm:justify-between mx-auto lg:flex-row">
          <div className="w-full space-y-6 text-center lg:w-1/2 lg:text-left">
            <h1 className="text-lg font-bold leading-tight text-gray-800 md:text-4xl sm:text-3xl">
              The Most Prominent Courses That{" "}
              <span className="text-blue-600">We Offer</span> In Our Academy{" "}
              Share With Us To Get Better
            </h1>
            <button className="py-3 px-7 shadow-2xl rounded-full  bg-[#111F51] text-white ">Show Plan</button>

            {/* Course Cards */}
            <div className="hidden sm:grid sm:grid-cols-3 gap-7">
              {[
                { title: "Health & Fitness", desc: "Provides you with the latest" },
                { title: "Personal Develop", desc: "Provides you with the latest" },
                { title: "Management", desc: "Provides you with the latest" },
                { title: "Office Management", desc: "Provides you with the latest" },
                { title: "Marketing", desc: "Provides you with the latest" }
              ].map((course, index) => (
                <CourseCard key={index} title={course.title} desc={course.desc} />
              ))}
            </div>
          </div>

          {/* Image and Button */}
          <div className="relative hidden sm:block">
            <Image
              src="/hero.png"
              height={400}
              width={400}
              alt="Person holding books at the academy"
              className=""
              priority={true} // Ensure hero image loads faster
            />
            
          </div>
        </div>

        {/* Search and Main Content */}
        <div className="container hidden mt-10 sm:block sm:px-4 sm:mt-0 sm:py-16">
          <div className="flex justify-center">
            <SearchFilters />
          </div>
          <SectionTitle title="What is" highlight="BRITISH ACADEMY?" />
          <MainContent />
        </div>

        {/* Specialization Section */}
        <SpecializationSection />

        {/* Courses by Cities Carousel*/} 
        <div className="mt-16">
          <SectionTitle title="Courses by" highlight="Cities" />
          <Carasoul />
        </div>

        {/* Training Section 
        <div className="mt-32">
          <SectionTitle title="British Academy" highlight="For Training" />
          <Training />
        </div>*/}

        {/* Request Course Section */}
        <div className="mt-32">
          <SectionTitle title="Request A" highlight="Course" />
          <RequestCourse />
        </div>

        {/* Latest Publications Section 
        <div className="mt-32">
          <SectionTitle title="Latest" highlight="Publication" />
          <DynamicTabs />
        </div>*/}

        {/* Team Section */}
        <div className="mt-32 team">
          <SectionTitle title="Team" highlight="Work" />
          <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-4 mt-10 overflow-hidden sm:grid-cols-3">
            {[
              { image: "/4.png", name: "Nattasha Julie", designation: "Design, Australia", number: "+1 (378) 400-1234", email: "julie@email.com" },
              { image: "/Photo.png", name: "John Doe", designation: "Developer, USA", number: "+1 (555) 123-4567", email: "john@email.com" },
              { image: "/2.png", name: "Jane Smith", designation: "Marketing, UK", number: "+44 (20) 7000-1234", email: "jane@email.com" }
            ].map((teamMember, index) => (
              <Team
                key={index}
                image={teamMember.image}
                name={teamMember.name}
                designation={teamMember.designation}
                number={teamMember.number}
                email={teamMember.email}
              />
            ))}
          </div>
          </div>
        </div>

        {/* Customer Carousel */}
        <div className="mt-32 customer">
          <SectionTitle title="Most Of" highlight="Our Customers" />
          <CustomerCarasoul />
        </div>
      </section>
    </>
  );
};

export default Page;
