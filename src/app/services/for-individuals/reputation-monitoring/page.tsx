import type { Metadata } from 'next'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import SectionHeading from '@/components/ui/SectionHeading'
import Accordion from '@/components/ui/Accordion'
import ServiceCTA from '@/components/ui/ServiceCTA'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Reputation Monitoring for Individuals | Reputation 500',
  description:
    'Real-time alerts and continuous tracking of your online reputation. Reputation 500 monitors search results, reviews, and social mentions so you can respond before problems escalate.',
  alternates: { canonical: 'https://reputation500.com/services/for-individuals/reputation-monitoring' },
  openGraph: {
    title: 'Reputation Monitoring for Individuals | Reputation 500',
    description: 'Real-time alerts and continuous tracking of your online reputation. Reputation 500 monitors search results, reviews, and social mentions so you can respond before problems escalate.',
  },
}

const faqs = [
  {
    title: 'How is reputation monitoring different from brand mention tracking?',
    content:
      'Brand mention tracking focuses on detecting individual references to your name. Reputation monitoring is broader: it tracks search result rankings, review site changes, social media sentiment, and overall perception trends over time, providing a complete picture of your digital reputation health.',
  },
  {
    title: 'What happens when negative content is detected?',
    content:
      'When our systems detect negative content that could affect your reputation, you receive an immediate alert with our assessment of the potential impact and a recommended response plan. If you are on an active management plan, we can begin mitigation immediately.',
  },
  {
    title: 'How often are monitoring reports delivered?',
    content:
      'Standard plans include weekly reports. For high-profile individuals or those in active reputation campaigns, we offer daily reporting. You also receive instant alerts for any high-priority changes, regardless of your plan.',
  },
  {
    title: 'Can monitoring prevent reputation crises?',
    content:
      'Early detection is the most effective form of reputation protection. By identifying emerging negative content before it gains traction, we can implement suppression and response strategies while the content has minimal visibility, preventing it from becoming a crisis.',
  },
  {
    title: 'What search engines and platforms do you monitor?',
    content:
      'We monitor Google, Bing, Yahoo, DuckDuckGo, major social media platforms, review aggregation sites, news outlets, blogs, forums, and AI-powered search tools. Our coverage extends to both English-language and international sources as needed.',
  },
]

export default function ReputationMonitoringIndividualsPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Reputation Monitoring for Individuals',
    description: metadata.description,
    provider: {
      '@type': 'Organization',
      name: 'Reputation 500',
      url: SITE_URL,
    },
    url: `${SITE_URL}/services/for-individuals/reputation-monitoring`,
    serviceType: 'Reputation Monitoring',
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
              { label: 'Reputation Monitoring' },
            ]}
          />
          <div className="max-w-3xl">
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Reputation Monitoring for Individuals
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Your online reputation can change overnight. A new article, review, or social media post can shift search results without warning. Our continuous monitoring service ensures you are always informed and prepared to act before minor issues become major problems.
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
              title="Search Results Change Without Warning"
              centered={false}
            />
            <p className="text-text-light text-base leading-relaxed mb-6">
              Google processes billions of pages daily, and the search results for your name can shift at any moment. A previously buried article can resurface due to algorithm updates. A disgruntled associate can post damaging content that quickly rises in rankings. Without active monitoring, you only discover these changes when someone else brings them to your attention, often at the worst possible time.
            </p>
            <p className="text-text-light text-base leading-relaxed mb-6">
              Many people check their own search results manually and sporadically, creating dangerous gaps in awareness. Between those checks, significant ranking changes can go unnoticed, giving negative content time to gain authority and become more difficult to address.
            </p>

            <SectionHeading
              label="Our Approach"
              title="Always-On Monitoring with Actionable Intelligence"
              centered={false}
            />
            <p className="text-text-light text-base leading-relaxed">
              Reputation 500 operates a continuous monitoring system that tracks your search result positions, detects new content referencing your name, and analyzes sentiment trends across the web. When changes occur, you receive timely alerts with context and recommended actions. Our monitoring goes beyond simple keyword tracking, incorporating AI-driven analysis that distinguishes between routine fluctuations and genuine reputation threats, so you only receive alerts that matter.
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
            description="Our monitoring system is designed for continuous, proactive reputation protection."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                step: '01',
                title: 'Profile Configuration',
                desc: 'We set up monitoring profiles tailored to your name, common variations, and associated keywords to ensure comprehensive coverage across all relevant platforms.',
              },
              {
                step: '02',
                title: 'Continuous Scanning',
                desc: 'Our systems run around the clock, scanning search engines, news sources, social media, review sites, and other digital channels for any content referencing your identity.',
              },
              {
                step: '03',
                title: 'Intelligent Alerts',
                desc: 'Detected changes are analyzed for severity and impact. High-priority issues trigger immediate alerts, while routine updates are compiled into periodic reports.',
              },
              {
                step: '04',
                title: 'Response Recommendations',
                desc: 'Each alert includes a recommended course of action, whether that is amplifying positive content, requesting corrections, or initiating suppression strategies.',
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
            description="Complete monitoring coverage that keeps you informed and in control at all times."
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
            {[
              'Daily search result position tracking for your name',
              'Real-time alerts for new negative or high-impact content',
              'Sentiment trend analysis across all monitored platforms',
              'Weekly reputation health reports with ranking data',
              'Review site monitoring and notification system',
              'Social media sentiment tracking and summaries',
              'Competitor or peer benchmarking where applicable',
              'Quarterly reputation strategy review and recommendations',
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
            description="Common questions about our reputation monitoring services for individuals."
          />
          <Accordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <ServiceCTA serviceName="Reputation Monitoring" />
    </>
  )
}
