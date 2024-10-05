"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BiSolidQuoteLeft } from "react-icons/bi";
import ArticleCard from "../ArticleCard";
import Link from "next/link";

const articles = [
  {
    title: '10 Top tips for making your SaaS product sticky',
    category: 'Marketing',
    date: 'November 12, 2023',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page from when looking at it layout. The point of using Lorem Ipsum',
    imageSrc: '/blog1.png',
    button_data: ['Marketing', 'Analysis'],
    slug: 'top-tips-saas-product-sticky'
  },
  {
    title: 'How to identify growth KPIs that are relevant',
    category: 'Marketing',
    date: 'November 12, 2023',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page from when looking at it layout. The point of using Lorem Ipsum',
    imageSrc: '/blog1.png',
    button_data: ['Marketing', 'Analysis'],
    slug: 'identify-growth-kpis'
  },
  
];


const BlogPost = () => {
  const router = useRouter();

  // Placeholder data; replace this with actual fetching logic
  const blogPost = {
    title: "Top 10 Tips for Making Your SaaS Product Sticky",
    date: "November 12, 2023",
    author: "John Doe",
  };

  return (
    <div className="p-4 md:mx-12 lg:mx-24 xl:mx-48">
      <div className="flex justify-center">
        <Image
          src="/blog.png"
          alt="hero"
          height={800}
          width={800}
          className="w-full h-auto rounded-3xl"
          priority
        />
      </div>
      <div className="px-4 py-8 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row">
          <h1 className="text-2xl md:text-4xl font-bold md:w-[500px]">
            {blogPost.title}
          </h1>
          <div className="flex items-center mt-4 md:mt-0 md:ml-4">
            <Image
              src="/blog1.png"
              alt={blogPost.author}
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="ml-2 text-sm text-gray-600 dark:text-white/70">
              {blogPost.author} - {blogPost.date}
            </span>
          </div>
        </div>
        <hr className="my-20" />
        <div className="mx-4 md:mx-10 lg:mx-20">
          <p className="text-xs text-black/70 dark:text-white">
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          </p>
          <br />
          <h1 className="mt-10 text-lg font-semibold md:text-xl">
            How to choose the right app reseller program
          </h1>
          <p className="mt-4 text-xs text-black/70 dark:text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <ul className="pl-5 text-xs list-disc">
            <li className="mt-4">
              There are many variations of passages of Lorem Ipsum
              available.
            </li>
            <li className="mt-4">
              Majority have suffered alteration in some form, by injected
              humour.
            </li>
            <li className="mt-4">
              If you are going to use a passage of Lorem Ipsum.
            </li>
            <li className="mt-4">
              It uses a dictionary of over 200 Latin words, combined with a
              handful
            </li>
          </ul>
          <p className="mt-4 text-xs text-black/70 dark:text-white">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>

          <h1 className="mt-10 text-lg font-semibold md:text-xl">
            Why a productivity app can change your work performance
          </h1>
          <p className="mt-4 text-xs text-black/70 dark:text-white">
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't embarrassing hidden in the middle of the text. All
            the Lorem Ipsum generators on the Internet tend to repeat predefined
            chunks as necessary, making this the first true generator on the
            Internet.
          </p>
          <div className="flex justify-center my-8">
            <Image
              src="/blog1.png"
              width={600}
              height={600}
              alt="blog"
              className="w-full h-auto rounded-3xl"
            />
          </div>
          <h1 className="flex justify-center -mt-4 text-xs text-center dark:text-white/70 text-primary">
            Making this the first true generator on the Internet.
          </h1>

          <h1 className="mt-10 text-lg font-semibold md:text-xl">
            Why a productivity app can change your work performance
          </h1>
          <p className="mt-4 text-xs text-black/70 dark:text-white">
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't embarrassing hidden in the middle of text. All the
            Lorem Ipsum generators on the Internet tend to repeat predefined
            chunks as necessary, making this the first true generator on the
            Internet.
          </p>

          <ul className="pl-5 text-xs list-disc text-black/70 dark:text-white">
            <li className="mt-4">
              There are many variations of passages of Lorem Ipsum available.
            </li>
            <li className="mt-4">
              Majority have suffered alteration in some form, by injected
              humour.
            </li>
            <li className="mt-4">
              If you are going to use a passage of Lorem Ipsum.
            </li>
            <li className="mt-4">
              It uses a dictionary of over 200 Latin words, combined with a
              handful.
            </li>
          </ul>

          <div className="flex items-center justify-center my-8">
            <div className="shadow-xl flex flex-col md:flex-row w-full md:w-[500px] h-auto md:h-56 rounded-3xl">
              <div className="flex items-center justify-center w-full p-4 md:w-1/4 bg-primary rounded-t-3xl md:rounded-t-none md:rounded-l-3xl">
                <BiSolidQuoteLeft size={50} color="white" />
              </div>
              <div className="w-full md:w-3/4 bg-[#F9F9F9] dark:text-black items-center flex justify-center text-center p-6 text-xs rounded-b-3xl md:rounded-b-none md:rounded-r-3xl">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage.
              </div>
            </div>
          </div>

          <h1 className="mt-10 text-lg font-semibold md:text-xl">
            What is your favorite productivity SaaS?
          </h1>
          <p className="mt-4 text-xs text-black/70 dark:text-white">
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't embarrassing hidden in the middle of the text. All
            the Lorem Ipsum generators on the Internet tend to repeat predefined
            chunks as necessary, making this the first true generator on the
            Internet.
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <h1 className="mt-10 mb-10 text-3xl font-bold tracking-wider">Latest Blog</h1>
      </div>
      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            category={article.category}
            date={article.date}
            description={article.description}
            imageSrc={article.imageSrc}
            button_data={article.button_data}
            slug={article.slug} // Pass the slug to ArticleCard
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
