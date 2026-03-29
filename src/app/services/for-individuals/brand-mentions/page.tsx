import type { Metadata } from 'next'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import SectionHeading from '@/components/ui/SectionHeading'
import Accordion from '@/components/ui/Accordion'
import ServiceCTA from '@/components/ui/ServiceCTA'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Brand Mentions for Individuals | Reputation 500',
  description:
    'Monitor and manage every mention of your name across the web. Reputation 500 helps individuals track, amplify, and respond to personal brand mentions in real time.',
}

const faqs = [
  {
    title: 'What platforms do you monitor for brand mentions?',
    content:
      'We monitor a wide range of sources including Google Search, news outlets, blogs, forums, social media platforms, review sites, podcasts, and video platforms. Our tools cover both indexed and non-indexed content to ensure comprehensive tracking.',
  },
  {
    title: 'How quickly will I be notified of a new mention?',
    content:
      'Our monitoring systems run continuously. For high-priority mentions such as negative press or social media escalations, you receive alerts within hours. Standard mention reports are delivered on a weekly or bi-weekly basis depending on your plan.',
  },
  {
    title: 'Can you help increase positive mentions of my name?',
    content:
      'Yes. In addition to monitoring, we run proactive campaigns that generate positive brand mentions through feature articles, interviews, guest contributions, and social media amplification strategies.',
  },
  {
    title: 'What is the difference between brand mentions and backlinks?',
    content:
      'A brand mention occurs when your name is referenced anywhere online, whether or not it includes a link. A backlink specifically includes a clickable link to your website or profile. Both contribute to your online authority, but mentions without links still influence how search engines perceive your reputation.',
  },
  {
    title: 'Do I need brand mention monitoring if I am not a public figure?',
    content:
      'Yes. Anyone with a professional career, business interests, or an active online presence benefits from knowing where their name appears. Negative mentions can surface in search results and affect job prospects, loan applications, or personal relationships.',
  },
]

export default function BrandMentionsIndividualsPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Brand Mentions for Individuals',
    description: metadata.description,
    provider: {
      '@type': 'Organization',
      name: 'Reputation 500',
      url: SITE_URL,
    },
    url: `${SITE_URL}/services/for-individuals/brand-mentions`,
    serviceType: 'Brand Mention Monitoring',
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
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: 'For Individuals', href: '/services/for-individuals' },
              { label: 'Brand Mentions' },
            ]}
          />
          <div className="max-w-3xl">
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Brand Mentions for Individuals
            </h1>
            <p className="text-lg text-gray-800 leading-relaxed">
              Every time your name appears online, it shapes how others perceive you. Our brand mention services help you track every reference to your name across the web, turning passive mentions into active reputation-building opportunities.
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
              title="You Cannot Manage What You Cannot See"
              centered={false}
            />
            <p className="text-text-light text-base leading-relaxed mb-6">
              Your name may appear in places you never expected: an old blog comment, a news article that quotes you out of context, a forum thread where someone mentions your work, or a social media post that tags your profile. Without systematic monitoring, these mentions go unnoticed until they surface in a Google search at the worst possible time.
            </p>
            <p className="text-text-light text-base leading-relaxed mb-6">
              For professionals, executives, and anyone with a public presence, unmonitored brand mentions represent blind spots that can evolve into reputation risks. Conversely, positive mentions that go unacknowledged are missed opportunities to strengthen your personal brand.
            </p>

            <SectionHeading
              label="Our Approach"
              title="Comprehensive Mention Tracking and Strategic Amplification"
              centered={false}
            />
            <p className="text-text-light text-base leading-relaxed">
              Reputation 500 combines advanced monitoring technology with hands-on analysis to give you complete visibility into where your name appears online. We categorize every mention by sentiment, reach, and relevance, then provide actionable recommendations. For positive mentions, we amplify their visibility. For negative ones, we develop response strategies that protect your reputation. The result is a clear, data-driven understanding of your digital footprint.
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
            description="Our structured approach ensures no mention of your name goes undetected or unaddressed."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                step: '01',
                title: 'Baseline Analysis',
                desc: 'We conduct an initial sweep of all existing mentions of your name across search engines, social platforms, news archives, and niche websites to establish your current mention landscape.',
              },
              {
                step: '02',
                title: 'Monitoring Setup',
                desc: 'We deploy monitoring tools configured specifically for your name, common misspellings, and associated keywords to capture mentions in real time across the indexed and social web.',
              },
              {
                step: '03',
                title: 'Analysis & Reporting',
                desc: 'Each mention is evaluated for sentiment, authority of the source, and potential impact on your reputation. You receive clear reports with prioritized action items.',
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
            description="A complete brand mention management system tailored to your personal needs."
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
            {[
              'Comprehensive baseline mention audit report',
              'Real-time monitoring across 100+ source types',
              'Sentiment analysis for every detected mention',
              'Weekly or bi-weekly mention summary reports',
              'Priority alerts for high-impact or negative mentions',
              'Amplification strategies for positive media coverage',
              'Response recommendations for negative references',
              'Quarterly trend analysis and reputation health scores',
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
            description="Common questions about our brand mention services for individuals."
          />
          <Accordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <ServiceCTA serviceName="Brand Mentions" />
    </>
  )
}
