'use client'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const BlogPost = () => {
  const router = useRouter();
  const slug = router.query;

  // Placeholder data; replace this with actual fetching logic
  const blogPost = {
    title: 'Top 10 Tips for Making Your SaaS Product Sticky',
    date: 'November 12, 2023',
    author: 'John Doe',
    content: `
      <h2>Content Section 1</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
    `,
    imageSrc: '/blog2.png', // Replace with actual image path
    additionalContent: `
      <h2>Content Section 2</h2>
      <p>Quisque tincidunt nisl sit amet magna auctor, nec sagittis quam varius.</p>
    `,
    testimonial: {
      quote: "Using a SaaS product has completely transformed our workflow and productivity.",
      author: "Jane Smith, CEO of Tech Solutions"
    },
    latestBlogs: [
      {
        title: '10 Top Tips for Making Your SaaS Product Sticky',
        slug: 'top-tips-saas-product-sticky',
      },
      {
        title: 'How to Identify Growth KPIs that are Relevant',
        slug: 'identify-growth-kpis',
      },
    ],
  };

  return (
    <div className="px-4 py-8 mx-auto max-w-7xl">
      <h1 className="text-4xl font-bold">{blogPost.title}</h1>
      <div className="flex items-center mt-4">
        <Image
          src="/blog1.png" // Replace with your author image path
          alt={blogPost.author}
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="ml-2 text-sm text-gray-600">{blogPost.author} - {blogPost.date}</span>
      </div>
      
      <div className="mt-6" dangerouslySetInnerHTML={{ __html: blogPost.content }} />

      {/* Image Section */}
      <div className="my-8">
        <Image
          src={blogPost.imageSrc}
          alt={blogPost.title}
          width={800} // Set width as per your design
          height={400} // Set height as per your design
          className="object-cover rounded-lg"
        />
      </div>

      {/* Additional Content Section */}
      <div className="mt-6" dangerouslySetInnerHTML={{ __html: blogPost.additionalContent }} />

      {/* Testimonial Section */}
      <div className="p-4 mt-8 bg-gray-100 border-l-4 border-indigo-600">
        <blockquote className="text-lg italic">"{blogPost.testimonial.quote}"</blockquote>
        <p className="mt-2 text-sm font-semibold">- {blogPost.testimonial.author}</p>
      </div>

      <h3 className="mt-8 text-2xl font-semibold">Latest Blogs</h3>
      <div className="mt-4 space-y-4">
        {blogPost.latestBlogs.map((post, index) => (
          <div key={index} className="pb-2 border-b">
            <Link href={`/articles/${post.slug}`}>
              {post.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
