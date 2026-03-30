import type { Metadata } from 'next'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import SectionHeading from '@/components/ui/SectionHeading'
import Accordion from '@/components/ui/Accordion'
import ServiceCTA from '@/components/ui/ServiceCTA'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Business Reputation Management | Reputation 500',
  description:
    'End-to-end reputation management for companies. Reputation 500 helps businesses control their search presence, manage reviews, and build lasting brand trust online.',
  alternates: { canonical: 'https://reputation500.com/services/for-businesses/business-reputation-management' },
  openGraph: {
    title: 'Business Reputation Management | Reputation 500',
    description: 'End-to-end reputation management for companies. Reputation 500 helps businesses control their search presence, manage reviews, and build lasting brand trust online.',
  },
}

const faqs = [
  {
    title: 'How does business reputation management differ from personal ORM?',
    content:
      'Business reputation management addresses company-level concerns including brand search results, review platform ratings, employee reviews on sites like Glassdoor, industry media coverage, and multi-location reputation consistency. The strategy involves more channels and stakeholders than individual ORM.',
  },
  {
    title: 'Can you manage reputation across multiple locations?',
    content:
      'Yes. We provide multi-location reputation management that ensures brand consistency across all offices, branches, or franchise locations. Each location receives tailored monitoring and review management while maintaining alignment with your overall brand strategy.',
  },
  {
    title: 'How do you handle negative reviews about our company?',
    content:
      'We use a three-part approach: respond professionally to negative reviews to demonstrate accountability, generate authentic positive reviews from satisfied customers to improve overall ratings, and work to resolve or escalate reviews that violate platform guidelines.',
  },
  {
    title: 'What ROI can we expect from reputation management?',
    content:
      'Studies consistently show that improving your star rating by even half a star can increase revenue by 5 to 9 percent. Beyond ratings, a strong search presence reduces customer acquisition costs, improves employee recruitment, and strengthens partnerships. We provide monthly ROI tracking tied to your specific business metrics.',
  },
  {
    title: 'How long does a typical business reputation campaign run?',
    content:
      'Initial campaigns typically run for 6 to 12 months to establish a strong foundation. Many clients continue with ongoing management to maintain results, respond to evolving search trends, and protect against future reputation threats.',
  },
]

export default function BusinessReputationManagementPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Business Reputation Management',
    description: metadata.description,
    provider: {
      '@type': 'Organization',
      name: 'Reputation 500',
      url: SITE_URL,
    },
    url: `${SITE_URL}/services/for-businesses/business-reputation-management`,
    serviceType: 'Business Reputation Management',
    areaServed: 'Worldwide',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.title,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.content,
      },
    })),
  }

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 bg-bg-dark">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs light
            items={[
              { label: 'Services', href: '/services' },
              { label: 'For Businesses', href: '/services/for-businesses' },
              { label: 'Business Reputation Management' },
            ]}
          />
          <div className="max-w-3xl">
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Business Reputation Management
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Your company&apos;s reputation directly impacts revenue, partnerships, and talent acquisition. We deliver comprehensive reputation management that protects your brand across search engines, review platforms, and media channels, turning your online presence into a competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <SectionHeading
              label="The Challenge"
              title="A Damaged Reputation Costs More Than You Think"
              centered={false}
            />
            <p className="text-text-light text-base leading-relaxed mb-6">
              Prospective customers, partners, investors, and employees all research your company online before making decisions. Negative search results, poor review ratings, or unfavorable media coverage can quietly erode trust and drive business to competitors. Research shows that a majority of consumers will avoid a business with a rating below four stars, and negative articles in search results can reduce click-through rates by more than 20 percent.
            </p>
            <p className="text-text-light text-base leading-relaxed mb-6">
              The challenge grows with company size. Enterprise businesses face scrutiny from journalists, analysts, regulators, and the general public. Every customer complaint, employee review, and industry controversy can generate search-visible content that shapes market perception.
            </p>

            <SectionHeading
              label="Our Approach"
              title="A 360-Degree Reputation Strategy Built for Growth"
              centered={false}
            />
            <p className="text-text-light text-base leading-relaxed">
              Reputation 500 combines search engine optimization, strategic content publishing, review management, and digital PR into a unified reputation strategy tailored to your business objectives. We create authoritative content that ranks for your brand terms, manage review generation and response programs, and build media relationships that produce favorable coverage. Every initiative is measured against clear KPIs, ensuring your investment delivers tangible returns.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-20 bg-bg-section">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            label="Process"
            title="How It Works"
            description="Our proven framework transforms how your business appears and is perceived online."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                step: '01',
                title: 'Brand Audit',
                desc: 'A thorough analysis of your search results, review profiles, media mentions, and competitor positioning to identify vulnerabilities and opportunities.',
              },
              {
                step: '02',
                title: 'Strategy & Roadmap',
                desc: 'We develop a custom reputation roadmap with prioritized initiatives, content calendars, review management plans, and measurable milestones.',
              },
              {
                step: '03',
                title: 'Execution',
                desc: 'Our team publishes high-authority content, manages review platforms, coordinates digital PR campaigns, and optimizes your owned digital properties.',
              },
              {
                step: '04',
                title: 'Measurement & Iteration',
                desc: 'Monthly performance reviews track search ranking progress, review rating improvements, mention sentiment, and business impact metrics.',
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-lg p-6 shadow-sm">
                <span className="text-primary font-bold text-2xl mb-3 block">{item.step}</span>
                <h3
                  className="text-lg font-bold text-heading mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {item.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Deliverables */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            label="Deliverables"
            title="What You Receive"
            description="A comprehensive reputation management program designed for measurable business impact."
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
            {[
              'Complete brand reputation audit with competitor benchmarks',
              'Custom reputation management strategy and roadmap',
              'High-authority articles, features, and press coverage',
              'Review generation and response management programs',
              'Search result optimization for branded keywords',
              'Glassdoor and employer brand management',
              'Monthly performance dashboards and ROI reporting',
              'Crisis communication protocols and rapid response plans',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <i className="fas fa-check-circle text-primary mt-1 flex-shrink-0" />
                <p className="text-text-light text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-bg-section">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions"
            description="Common questions about our business reputation management services."
          />
          <Accordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <ServiceCTA serviceName="Business Reputation Management" />
    </>
  )
}
