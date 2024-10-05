// pages/index.js
import ArticleCard from './ArticleCard';

export default function Page() {
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
    {
      title: 'Is it worth it to build a mobile app for your business?',
      category: 'Technology',
      date: 'November 12, 2023',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page from when looking at it layout. The point of using Lorem Ipsum',
      imageSrc: '/blog1.png',
      button_data: ['Marketing', 'Analysis'],
      slug: 'worth-building-mobile-app'
    },
    {
      title: 'How to choose the right app reseller program',
      category: 'Marketing',
      date: 'November 12, 2023',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page from when looking at it layout. The point of using Lorem Ipsum',
      imageSrc: '/blog1.png',
      button_data: ['Marketing', 'Analysis'],
      slug: 'choose-right-app-reseller-program'
    },
    {
      title: '5 Technologies that are true student helpers these days',
      category: 'Technology',
      date: 'November 12, 2023',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page from when looking at it layout. The point of using Lorem Ipsum',
      imageSrc: '/blog1.png',
      button_data: ['Marketing', 'Analysis'],
      slug: 'technologies-student-helpers'
    },
  ];

  return (
    <div className="px-4 py-8 mx-auto max-w-7xl">
      <h1 className="mb-8 text-4xl font-bold text-center dark:text-white">Artificial Intelligence</h1>
      <p className="mb-8 text-center text-gray-500">Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper et pharetra sem.</p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
}
