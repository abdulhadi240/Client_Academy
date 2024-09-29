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
        <div className="container py-16 px-16 bg-[rgba(157,204,255,0.3)] flex flex-col-reverse items-center justify-between mx-auto lg:flex-row">
          <div className="space-y-6 text-center lg:w-1/2 lg:text-left">
            <h1 className="text-4xl font-bold leading-tight text-gray-800">
              The Most Prominent Courses That{" "}
              <span className="text-blue-600">We Offer</span> In Our Academy{" "}
              <br /> Share With Us To Get Better
            </h1>

            {/* Course Cards */}
            <div className="grid grid-cols-3 gap-7">
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
          <div className="relative">
            <Image
              src="/hero-image.webp"
              height={400}
              width={400}
              alt="Person holding books at the academy"
              className="rounded-full"
              priority={true} // Ensure hero image loads faster
            />
            <button className="absolute bottom-0 left-0 px-6 py-3 text-white bg-blue-600 rounded-lg shadow-lg">
              Show Plan
            </button>
          </div>
        </div>

        {/* Search and Main Content */}
        <div className="container px-4 py-16">
          <div className="flex justify-center">
            <SearchFilters />
          </div>
          <SectionTitle title="What is" highlight="BRITISH ACADEMY?" />
          <MainContent />
        </div>

        {/* Specialization Section */}
        <SpecializationSection />

        {/* Courses by Cities Carousel */}
        <div className="mt-16">
          <SectionTitle title="Courses by" highlight="Cities" />
          <Carasoul />
        </div>

        {/* Training Section */}
        <div className="mt-32">
          <SectionTitle title="British Academy" highlight="For Training" />
          <Training />
        </div>

        {/* Request Course Section */}
        <div className="mt-32">
          <SectionTitle title="Request A" highlight="Course" />
          <RequestCourse />
        </div>

        {/* Latest Publications Section */}
        <div className="mt-32">
          <SectionTitle title="Latest" highlight="Publication" />
          <DynamicTabs />
        </div>

        {/* Team Section */}
        <div className="mt-32 team">
          <SectionTitle title="Team" highlight="Work" />
          <div className="flex justify-center gap-4 mt-10 overflow-hidden">
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
