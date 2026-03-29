import type { Metadata } from 'next'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import SectionHeading from '@/components/ui/SectionHeading'
import Accordion from '@/components/ui/Accordion'
import ServiceCTA from '@/components/ui/ServiceCTA'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Ratings Optimization for Businesses | Reputation 500',
  description:
    'Improve your star ratings with ethical review generation and professional response strategies. Reputation 500 helps businesses earn more positive reviews and manage feedback across all platforms.',
  alternates: { canonical: 'https://reputation500.com/services/for-businesses/ratings-optimization' },
  openGraph: {
    title: 'Ratings Optimization for Businesses | Reputation 500',
    description: 'Improve your star ratings with ethical review generation and professional response strategies. Reputation 500 helps businesses earn more positive reviews and manage feedback across all platforms.',
  },
}

const faqs = [
  {
    title: 'Is it legal and ethical to solicit reviews from customers?',
    content:
      'Yes. Asking satisfied customers to share their experience is an accepted and encouraged business practice. What we never do is create fake reviews, offer incentives for specific ratings, or manipulate reviews in any way that violates platform terms of service. Our approach is fully compliant with the guidelines of Google, Trustpilot, Yelp, and other major review platforms.',
  },
  {
    title: 'Can negative reviews be removed?',
    content:
      'Reviews that violate a platform terms of service, such as fake reviews, spam, or reviews containing threats, can often be flagged and removed through the platform appeal process. Legitimate negative reviews generally cannot be removed, but they can be addressed through professional responses and offset by generating more positive reviews.',
  },
  {
    title: 'Which review platforms do you manage?',
    content:
      'We manage reviews across Google Business Profile, Trustpilot, G2, Clutch, Yelp, TripAdvisor, Glassdoor, industry-specific platforms, and any other review site relevant to your business. Our approach is tailored to the platforms that matter most for your industry and target audience.',
  },
  {
    title: 'How quickly can we expect rating improvements?',
    content:
      'Most businesses see meaningful rating improvements within 60 to 90 days of launching a review generation program. The speed of improvement depends on your current review volume, rating baseline, and the velocity at which we can generate new authentic reviews from satisfied customers.',
  },
  {
    title: 'Do you respond to reviews on our behalf?',
    content:
      'Yes. We craft and publish professional responses to both positive and negative reviews on your behalf. All responses are aligned with your brand voice and approved according to your preferred workflow. Thoughtful review responses demonstrate attentiveness and can positively influence potential customers reading the reviews.',
  },
]

export default function RatingsOptimizationPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Ratings Optimization',
    description: metadata.description,
    provider: {
      '@type': 'Organization',
      name: 'Reputation 500',
      url: SITE_URL,
    },
    url: `${SITE_URL}/services/for-businesses/ratings-optimization`,
    serviceType: 'Review and Rating Management',
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
              { label: 'Ratings Optimization' },
            ]}
          />
          <div className="max-w-3xl">
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Ratings Optimization for Businesses
            </h1>
            <p className="text-lg text-gray-800 leading-relaxed">
              Star ratings are the first thing potential customers see when evaluating your business. Our ratings optimization service helps you systematically earn more positive reviews, manage negative feedback professionally, and build the social proof that drives purchasing decisions.
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
              title="Low Ratings Drive Customers Straight to Competitors"
              centered={false}
            />
            <p className="text-text-light text-base leading-relaxed mb-6">
              Star ratings are one of the most influential factors in consumer decision-making. Research consistently shows that the vast majority of consumers read online reviews before visiting a business, and most will not consider a company with a rating below four stars. A half-star difference in average rating can shift revenue by 5 to 9 percent.
            </p>
            <p className="text-text-light text-base leading-relaxed mb-6">
              The problem is that dissatisfied customers are far more likely to leave reviews than satisfied ones. This natural negativity bias means that businesses without active review management programs are disproportionately represented by their unhappiest customers, creating a misleading picture of overall customer satisfaction.
            </p>

            <SectionHeading
              label="Our Approach"
              title="Systematic Review Generation and Professional Response Management"
              centered={false}
            />
            <p className="text-text-light text-base leading-relaxed">
              Reputation 500 implements ethical review generation programs that encourage your satisfied customers to share their experiences on the platforms that matter most. We design custom review solicitation workflows, craft professional responses to all reviews, and monitor rating trends across every relevant platform. Our strategies are fully compliant with platform guidelines and focused on generating genuine, authentic feedback that accurately reflects the quality of your business.
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
            description="Our ratings optimization framework systematically improves your review profile across all platforms."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                step: '01',
                title: 'Review Audit',
                desc: 'We analyze your current ratings, review volume, sentiment patterns, and competitive positioning across all relevant review platforms.',
              },
              {
                step: '02',
                title: 'Strategy Design',
                desc: 'We design custom review solicitation workflows, response templates, and escalation procedures tailored to your business operations and customer touchpoints.',
              },
              {
                step: '03',
                title: 'Review Generation',
                desc: 'We implement automated and manual review request systems that reach customers at optimal moments, maximizing the likelihood of positive review completion.',
              },
              {
                step: '04',
                title: 'Response & Monitoring',
                desc: 'Every new review receives a professional response within your defined timeline. We monitor rating trends and adjust strategies to maintain upward momentum.',
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
            description="A complete review management program that builds trust and drives business growth."
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
            {[
              'Multi-platform review audit with competitive benchmarks',
              'Custom review solicitation workflow and email templates',
              'Automated review request system implementation',
              'Professional review response management across all platforms',
              'Negative review escalation and resolution protocols',
              'Platform policy violation review flagging and appeals',
              'Monthly review analytics and rating trend reports',
              'Quarterly strategy reviews and optimization adjustments',
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
            description="Common questions about our ratings optimization services for businesses."
          />
          <Accordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <ServiceCTA serviceName="Ratings Optimization" />
    </>
  )
}
