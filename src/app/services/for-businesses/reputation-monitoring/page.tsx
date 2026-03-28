import type { Metadata } from 'next'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import SectionHeading from '@/components/ui/SectionHeading'
import Accordion from '@/components/ui/Accordion'
import CTABanner from '@/components/ui/CTABanner'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Reputation Monitoring for Businesses | Reputation 500',
  description:
    'Continuous monitoring and real-time alerts for your business reputation. Reputation 500 tracks search results, reviews, media coverage, and social sentiment so you can respond fast and stay protected.',
}

const faqs = [
  {
    title: 'What does business reputation monitoring cover?',
    content:
      'Our monitoring covers Google and Bing search results for your brand terms, review platforms including Google Business Profile, Trustpilot, and industry-specific sites, social media mentions, news and media coverage, forum and blog discussions, employee review sites like Glassdoor, and emerging AI-powered search results.',
  },
  {
    title: 'How do you prioritize alerts?',
    content:
      'We use a severity-based system that evaluates each detected change based on the authority of the source, the nature of the content (positive, negative, or neutral), the visibility of the change, and the potential business impact. Critical alerts are delivered immediately, while lower-priority updates are compiled into regular reports.',
  },
  {
    title: 'Can monitoring integrate with our existing tools?',
    content:
      'Yes. We can deliver alerts and reports via email, Slack, Microsoft Teams, or through custom integrations with your existing dashboards and project management tools. We adapt to your internal workflows rather than requiring you to adopt new systems.',
  },
  {
    title: 'What is the minimum monitoring plan duration?',
    content:
      'We recommend a minimum of three months to establish baseline data and identify meaningful trends. Month-to-month plans are available, but reputation monitoring delivers the greatest value as a continuous, ongoing service.',
  },
  {
    title: 'Do you monitor our competitors as well?',
    content:
      'Yes. Competitive monitoring is included in our business plans. Tracking competitor search results, review ratings, and media coverage provides benchmarks for your own performance and reveals opportunities to differentiate your brand.',
  },
]

export default function ReputationMonitoringBusinessesPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Reputation Monitoring for Businesses',
    description: metadata.description,
    provider: {
      '@type': 'Organization',
      name: 'Reputation 500',
      url: SITE_URL,
    },
    url: `${SITE_URL}/services/for-businesses/reputation-monitoring`,
    serviceType: 'Business Reputation Monitoring',
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
              { label: 'For Businesses', href: '/services/for-businesses' },
              { label: 'Reputation Monitoring' },
            ]}
          />
          <div className="max-w-3xl">
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Reputation Monitoring for Businesses
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              In the digital age, a reputation crisis can develop in hours. Our continuous monitoring service watches your brand across search engines, review platforms, news outlets, and social media around the clock, delivering real-time alerts and actionable intelligence so you can respond to threats before they escalate.
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
              title="Reputation Threats Do Not Wait for Business Hours"
              centered={false}
            />
            <p className="text-text-light text-base leading-relaxed mb-6">
              A negative article published on a Friday evening, a viral social media complaint over the weekend, or a coordinated review attack during a holiday can cause significant damage before your team becomes aware of the situation. Manual monitoring is unreliable, inconsistent, and leaves dangerous gaps in your awareness.
            </p>
            <p className="text-text-light text-base leading-relaxed mb-6">
              For businesses operating across multiple markets, the complexity multiplies. Each geography, product line, and executive brings unique monitoring requirements. Without an automated, comprehensive system, critical developments in your reputation landscape go undetected until the damage is already done.
            </p>

            <SectionHeading
              label="Our Approach"
              title="Enterprise-Grade Monitoring with Intelligent Alerting"
              centered={false}
            />
            <p className="text-text-light text-base leading-relaxed">
              Reputation 500 deploys an always-on monitoring infrastructure that scans hundreds of sources for any content that could affect your brand perception. Our system goes beyond keyword matching, using contextual analysis to evaluate the potential impact of each change and prioritize alerts accordingly. You receive only the intelligence that requires attention, delivered through the channels your team already uses, with clear recommendations for response.
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
            description="Our monitoring process provides 360-degree visibility into your business reputation at all times."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                step: '01',
                title: 'Scope Definition',
                desc: 'We map all brand terms, executive names, product names, and competitive keywords that require monitoring, along with the platforms and geographies relevant to your business.',
              },
              {
                step: '02',
                title: 'System Deployment',
                desc: 'Monitoring tools are configured and calibrated to your specific requirements, with alert thresholds, escalation rules, and reporting schedules tailored to your operations.',
              },
              {
                step: '03',
                title: 'Continuous Monitoring',
                desc: 'Our systems scan search engines, review sites, news outlets, social media, forums, and AI search platforms around the clock, detecting changes as they occur.',
              },
              {
                step: '04',
                title: 'Reporting & Response',
                desc: 'Critical changes trigger immediate alerts with impact assessments and recommended actions. Regular reports provide trend analysis, competitive benchmarks, and strategic insights.',
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
            description="Enterprise-grade reputation monitoring with the intelligence and speed your business demands."
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
            {[
              'Always-on monitoring across search, social, reviews, and news',
              'Real-time alerts for critical reputation changes',
              'Severity-based alert prioritization and routing',
              'Review platform monitoring with response recommendations',
              'Competitor reputation tracking and benchmarking',
              'Integration with Slack, Teams, email, or custom systems',
              'Weekly reputation health dashboards and trend analysis',
              'Quarterly strategic reviews with forward-looking recommendations',
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
            description="Common questions about our reputation monitoring services for businesses."
          />
          <Accordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Never Be Caught Off Guard Again"
        description="Start with a free reputation scan and see what your monitoring dashboard could look like."
      />
    </>
  )
}
