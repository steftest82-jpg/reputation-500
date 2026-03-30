import type { Metadata } from 'next'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import SectionHeading from '@/components/ui/SectionHeading'
import Accordion from '@/components/ui/Accordion'
import ServiceCTA from '@/components/ui/ServiceCTA'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Personal Reputation Management | Reputation 500',
  description:
    'Take control of what people see when they search your name online. Reputation 500 offers personal reputation management services that suppress negative content and build a positive digital presence.',
  alternates: { canonical: 'https://reputation500.com/services/for-individuals/personal-reputation-management' },
  openGraph: {
    title: 'Personal Reputation Management | Reputation 500',
    description: 'Take control of what people see when they search your name online. Reputation 500 offers personal reputation management services that suppress negative content and build a positive digital presence.',
  },
}

const faqs = [
  {
    title: 'How long does it take to improve personal search results?',
    content:
      'Most clients see measurable improvements within 60 to 90 days, though timelines vary depending on the severity of existing negative content and the competitiveness of search results for your name.',
  },
  {
    title: 'Can negative articles actually be removed from Google?',
    content:
      'In some cases, content can be removed through legal requests, platform policies, or de-indexing. When removal is not possible, we use strategic content creation and SEO to push negative results off the first page.',
  },
  {
    title: 'Will people know I hired a reputation management firm?',
    content:
      'No. All work is performed discreetly. The content we create is published under your name or through third-party editorial channels, so there is no visible connection to our agency.',
  },
  {
    title: 'What types of negative content can you address?',
    content:
      'We handle negative news articles, unfavorable blog posts, damaging forum threads, poor review site listings, mugshot websites, and unflattering social media content that appears in search results.',
  },
  {
    title: 'Do I need ongoing management after the initial campaign?',
    content:
      'We recommend ongoing monitoring to maintain results and respond quickly to any new negative content. However, after the initial campaign, many clients transition to a lighter monitoring-only plan.',
  },
]

export default function PersonalReputationManagementPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Personal Reputation Management',
    description: metadata.description,
    provider: {
      '@type': 'Organization',
      name: 'Reputation 500',
      url: SITE_URL,
    },
    url: `${SITE_URL}/services/for-individuals/personal-reputation-management`,
    serviceType: 'Online Reputation Management',
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
              { label: 'For Individuals', href: '/services/for-individuals' },
              { label: 'Personal Reputation Management' },
            ]}
          />
          <div className="max-w-3xl">
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Personal Reputation Management
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Your name is your most valuable asset. When someone searches for you on Google, the results they find shape their perception before you ever get a chance to speak. We help individuals take control of their digital narrative and build a search presence that reflects who they truly are.
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
              title="Negative Search Results Can Derail Your Career and Relationships"
              centered={false}
            />
            <p className="text-text-light text-base leading-relaxed mb-6">
              A single unflattering article, an outdated news story, or a misleading review can appear at the top of Google when someone searches your name. Whether you are a professional, executive, public figure, or private individual, negative search results can cost you job opportunities, business partnerships, and personal relationships.
            </p>
            <p className="text-text-light text-base leading-relaxed mb-6">
              The problem compounds over time. Search engines prioritize content that gets clicks, and negative content tends to attract attention. Without intervention, damaging results can persist for years, defining your online identity in ways that do not represent you accurately.
            </p>

            <SectionHeading
              label="Our Approach"
              title="Strategic Content Creation and Search Optimization"
              centered={false}
            />
            <p className="text-text-light text-base leading-relaxed">
              Reputation 500 deploys a multi-channel strategy that combines high-authority content creation, search engine optimization, and digital asset development to reshape your search landscape. We publish articles, interviews, and profiles across respected platforms, creating a network of positive content that gradually displaces negative results. Every piece of content is crafted to be genuinely valuable and editorially sound, ensuring long-term stability in search rankings.
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
            description="Our four-step process is designed to deliver measurable improvements to your personal search results."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                step: '01',
                title: 'Reputation Audit',
                desc: 'We perform a comprehensive analysis of your current search results, identifying negative content, ranking factors, and opportunities for improvement.',
              },
              {
                step: '02',
                title: 'Strategy Development',
                desc: 'Based on the audit, we create a tailored plan that outlines content targets, publishing channels, SEO tactics, and projected timelines.',
              },
              {
                step: '03',
                title: 'Content Creation & Publishing',
                desc: 'Our editorial team produces high-quality articles, interviews, and digital profiles that are published across authoritative platforms and optimized for search.',
              },
              {
                step: '04',
                title: 'Monitoring & Optimization',
                desc: 'We continuously track search rankings, adjust strategies based on performance data, and respond to any new developments in your search results.',
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
            description="Every engagement includes a comprehensive set of deliverables designed to transform your search presence."
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
            {[
              'Full search landscape audit and competitive analysis',
              'Custom reputation management strategy document',
              'High-authority feature articles and interviews',
              'Optimized social media and Web 2.0 profiles',
              'Dedicated micro-websites for reputation reinforcement',
              'Monthly progress reports with ranking data',
              'Ongoing search result monitoring and alerts',
              'Crisis response protocol for urgent reputation threats',
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
            description="Common questions about our personal reputation management services."
          />
          <Accordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <ServiceCTA serviceName="Personal Reputation Management" />
    </>
  )
}
