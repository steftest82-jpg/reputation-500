import type { Metadata } from 'next'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import SectionHeading from '@/components/ui/SectionHeading'
import Accordion from '@/components/ui/Accordion'
import ServiceCTA from '@/components/ui/ServiceCTA'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Brand Mentions for Businesses | Reputation 500',
  description:
    'Track and amplify your brand mentions across the digital landscape. Reputation 500 monitors every reference to your company and turns them into growth opportunities.',
  alternates: { canonical: 'https://reputation500.com/services/for-businesses/brand-mentions' },
  openGraph: {
    title: 'Brand Mentions for Businesses | Reputation 500',
    description: 'Track and amplify your brand mentions across the digital landscape. Reputation 500 monitors every reference to your company and turns them into growth opportunities.',
  },
}

const faqs = [
  {
    title: 'What is a brand mention and why does it matter?',
    content:
      'A brand mention is any reference to your company name, products, or key personnel across the web, whether it includes a link or not. Brand mentions influence how search engines evaluate your authority and affect consumer perception. Monitoring them allows you to respond to feedback, amplify positive coverage, and address negative references before they spread.',
  },
  {
    title: 'Can unlinked mentions be converted into backlinks?',
    content:
      'Yes. Unlinked brand mentions are one of the most reliable sources of link building opportunities. When a publication mentions your company without linking to your website, we reach out to request a link addition. Because the mention already exists, conversion rates are significantly higher than cold outreach.',
  },
  {
    title: 'How do you track brand mentions across the web?',
    content:
      'We use a combination of enterprise-grade monitoring platforms, custom alerts, and manual searches to ensure comprehensive coverage. Our tools scan news outlets, blogs, forums, social media, review platforms, podcasts, and video content for mentions of your brand name and related terms.',
  },
  {
    title: 'Do you monitor competitor brand mentions?',
    content:
      'Yes. Understanding how and where your competitors are mentioned provides valuable competitive intelligence. We track competitor mentions to identify publication opportunities, content gaps, and market positioning insights that inform your own brand strategy.',
  },
  {
    title: 'How often will we receive brand mention reports?',
    content:
      'Standard reporting is delivered weekly. For brands with high mention volume or active campaigns, we offer daily summaries. Urgent mentions, particularly negative ones in high-authority publications, trigger immediate notifications regardless of your reporting schedule.',
  },
]

export default function BrandMentionsBusinessesPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Brand Mentions for Businesses',
    description: metadata.description,
    provider: {
      '@type': 'Organization',
      name: 'Reputation 500',
      url: SITE_URL,
    },
    url: `${SITE_URL}/services/for-businesses/brand-mentions`,
    serviceType: 'Brand Mention Monitoring and Management',
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
              { label: 'Brand Mentions' },
            ]}
          />
          <div className="max-w-3xl">
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Brand Mentions for Businesses
            </h1>
            <p className="text-lg text-gray-800 leading-relaxed">
              Every reference to your company across the internet is an opportunity or a risk. Our brand mention services give you complete visibility into how and where your business is discussed online, with actionable strategies to amplify positive coverage and mitigate negative references.
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
              title="Your Brand Is Being Discussed Whether You Know It or Not"
              centered={false}
            />
            <p className="text-text-light text-base leading-relaxed mb-6">
              Customers, journalists, competitors, and industry commentators reference your brand across social media, blogs, news sites, forums, and review platforms every day. Without systematic monitoring, you miss critical feedback, fail to capitalize on positive coverage, and remain unaware of negative narratives forming around your business.
            </p>
            <p className="text-text-light text-base leading-relaxed mb-6">
              Unlinked brand mentions also represent missed SEO opportunities. Every time your company is mentioned without a link, you lose the domain authority that an editorial backlink would provide. Over time, these missed opportunities compound into a significant competitive disadvantage.
            </p>

            <SectionHeading
              label="Our Approach"
              title="End-to-End Brand Mention Management"
              centered={false}
            />
            <p className="text-text-light text-base leading-relaxed">
              Reputation 500 provides comprehensive brand mention monitoring that goes beyond basic alerts. We categorize every mention by source authority, sentiment, reach, and link status. Positive mentions are amplified through social sharing and content syndication. Negative mentions receive tailored response strategies. Unlinked mentions are converted into backlinks through professional outreach. The result is a fully managed brand mention program that maximizes every reference to your business.
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
            description="Our structured process ensures every brand mention is tracked, analyzed, and acted upon."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                step: '01',
                title: 'Mention Discovery',
                desc: 'We configure monitoring tools for your brand name, product names, executive names, and common misspellings across all major digital channels and source types.',
              },
              {
                step: '02',
                title: 'Analysis & Classification',
                desc: 'Each mention is analyzed for sentiment, source authority, audience reach, and link status. Mentions are categorized into actionable groups for efficient management.',
              },
              {
                step: '03',
                title: 'Action & Amplification',
                desc: 'Positive mentions are amplified through social sharing and syndication. Negative mentions receive response strategies. Unlinked mentions are targeted for backlink conversion.',
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
            description="A complete brand mention management system that turns online references into business value."
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
            {[
              'Enterprise-grade monitoring across all digital channels',
              'Sentiment analysis and classification for every mention',
              'Unlinked mention identification and backlink outreach',
              'Competitor mention tracking and comparative analysis',
              'Immediate alerts for high-impact or negative mentions',
              'Positive mention amplification through social and syndication',
              'Weekly mention summary reports with trend analysis',
              'Quarterly brand perception reports and strategic reviews',
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
            description="Common questions about our brand mention services for businesses."
          />
          <Accordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <ServiceCTA serviceName="Brand Mentions" />
    </>
  )
}
