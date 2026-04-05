import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Reputation Management Blog | ${SITE_NAME}`,
  description:
    'Expert insights on online reputation management for businesses and individuals. Learn how to protect your brand, improve search results, and grow trust with proven ORM strategies.',
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: `Reputation Management Blog | ${SITE_NAME}`,
    description: 'Expert insights on online reputation management for businesses and individuals.',
  },
}

const categories = [
  {
    title: 'Reputation Management for Businesses',
    description:
      'Strategies to protect your brand, improve ratings, manage crises, and turn your company\'s online reputation into a revenue driver.',
    href: '/blog/for-businesses',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    articles: 30,
    topics: ['Brand Protection', 'Crisis Management', 'Review Optimization', 'Digital PR', 'AI Visibility'],
  },
  {
    title: 'Reputation Management for Individuals',
    description:
      'Protect your personal brand, suppress negative search results, and build a digital presence that opens doors for your career and personal goals.',
    href: '/blog/for-individuals',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    articles: 30,
    topics: ['Personal Branding', 'Search Result Control', 'Privacy Protection', 'Career Reputation', 'Executive Visibility'],
  },
]

export default function BlogPage() {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Reputation Management Blog',
    description: 'Expert insights on online reputation management for businesses and individuals.',
    url: `${SITE_URL}/blog`,
    publisher: { '@type': 'Organization', name: 'Reputation 500', url: SITE_URL },
  }

  return (
    <>
      <JsonLd data={blogSchema} />
      {/* Hero */}
      <section className="bg-bg-dark pt-24 lg:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs light items={[{ label: 'Blog' }]} />
          <div className="max-w-3xl">
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Reputation Management Insights
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Expert strategies, industry research, and actionable guides to help you
              take control of your online reputation — whether you&apos;re building a business
              or protecting your personal brand.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#004AAD] tracking-wider uppercase mb-3">
              Browse by Category
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Choose Your Focus Area
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group block bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#004AAD]/30 hover:shadow-xl hover:shadow-[#004AAD]/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-[#e8f0fe] text-[#004AAD] flex items-center justify-center mb-6 group-hover:bg-[#004AAD] group-hover:text-white transition-colors duration-300">
                  {cat.icon}
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {cat.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {cat.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {cat.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs font-medium text-[#004AAD] bg-[#e8f0fe] rounded-full px-3 py-1"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-sm font-semibold text-[#004AAD]">
                  Browse {cat.articles} articles
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f8fafc] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Need Help With Your Reputation?
          </h2>
          <p className="text-gray-600 mb-6">
            Our team has helped 78+ clients across 21 countries protect and grow their online
            presence. Get a free reputation analysis today.
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center px-8 py-3.5 text-base font-semibold rounded-lg"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
