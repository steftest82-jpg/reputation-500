import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionHeading from '@/components/ui/SectionHeading';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Blog | ${SITE_NAME}`,
  description:
    'Stay up to date with the latest reputation management insights, strategies, and industry news from the Reputation 500 team.',
  alternates: { canonical: `${SITE_URL}/blog` },
};

const posts = [
  {
    title: 'Why Online Reputation Management Matters More Than Ever in 2026',
    excerpt:
      'In an era of instant search results and AI-powered answers, your digital reputation is often the first impression you make. Here is why proactive ORM is no longer optional.',
    date: 'Coming Soon',
  },
  {
    title: '5 Steps to Recover from a Reputation Crisis',
    excerpt:
      'When negative content dominates your search results, swift action is essential. Learn the five-step framework our team uses to restore brand trust after a crisis.',
    date: 'Coming Soon',
  },
  {
    title: 'The Role of Content Marketing in Reputation Management',
    excerpt:
      'Publishing high-quality, authoritative content is one of the most effective ways to build and protect your online reputation. Discover how to get started.',
    date: 'Coming Soon',
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg-dark pt-24 pb-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }]} />
          <h1 className="text-4xl md:text-5xl font-bold mt-4 text-white">
            Reputation Management Insights
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            Expert advice, industry trends, and actionable strategies from our
            team.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Latest Articles"
            subtitle="Insights from the Reputation 500 team."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div
                key={post.title}
                className="border border-gray-200 rounded-lg p-6 flex flex-col"
              >
                <span className="text-sm text-gray-400">{post.date}</span>
                <h3 className="mt-3 text-xl font-semibold text-gray-900">
                  {post.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <span className="mt-6 inline-block self-start text-sm font-medium text-gray-400 bg-gray-100 rounded px-3 py-1">
                  Coming Soon
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
