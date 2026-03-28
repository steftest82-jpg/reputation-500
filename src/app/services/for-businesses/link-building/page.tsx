import type { Metadata } from 'next'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import SectionHeading from '@/components/ui/SectionHeading'
import Accordion from '@/components/ui/Accordion'
import CTABanner from '@/components/ui/CTABanner'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Link Building Services for Businesses | Reputation 500',
  description:
    'Build high-quality backlinks that boost your domain authority and search rankings. Reputation 500 provides strategic link building through editorial placements, digital PR, and content partnerships.',
}

const faqs = [
  {
    title: 'What types of links do you build?',
    content:
      'We focus exclusively on white-hat, editorial links from real publications and websites. This includes guest contributions on industry blogs, features in news outlets, resource page placements, expert roundups, and digital PR-driven coverage. We never use paid link schemes, private blog networks, or other tactics that violate search engine guidelines.',
  },
  {
    title: 'How do backlinks affect search rankings?',
    content:
      'Backlinks remain one of the top ranking factors in Google search algorithm. When authoritative websites link to your content, it signals to search engines that your site is trustworthy and relevant. Higher domain authority from quality backlinks directly correlates with improved rankings for competitive keywords.',
  },
  {
    title: 'How many links can we expect per month?',
    content:
      'The number of links depends on your plan and industry. Typical campaigns deliver between 8 and 30 high-quality links per month. We prioritize link quality and relevance over volume, as a single link from a domain authority 70-plus publication provides more value than dozens of low-quality links.',
  },
  {
    title: 'Do you provide link building reports?',
    content:
      'Yes. Monthly reports include every link acquired, the domain authority of each linking site, anchor text used, the page where the link appears, and the overall impact on your domain authority and keyword rankings. We maintain full transparency in our link building practices.',
  },
  {
    title: 'Can link building help with reputation management?',
    content:
      'Absolutely. High-authority links to positive content about your brand help that content rank higher in search results. This is a core strategy in reputation management campaigns where we need to promote favorable pages and push down negative results.',
  },
]

export default function LinkBuildingBusinessesPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Link Building for Businesses',
    description: metadata.description,
    provider: {
      '@type': 'Organization',
      name: 'Reputation 500',
      url: SITE_URL,
    },
    url: `${SITE_URL}/services/for-businesses/link-building`,
    serviceType: 'Link Building and SEO',
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
              { label: 'Link Building' },
            ]}
          />
          <div className="max-w-3xl">
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Link Building for Businesses
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              High-quality backlinks are the backbone of search engine authority. Our strategic link building service acquires editorial placements from respected publications that strengthen your domain authority, improve keyword rankings, and establish your business as a trusted voice in your industry.
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
              title="Competing Without Backlinks Means Competing Without Authority"
              centered={false}
            />
            <p className="text-text-light text-base leading-relaxed mb-6">
              Search engines evaluate thousands of signals to determine which pages deserve top rankings. Among the most influential is the quality and quantity of backlinks pointing to your website. Businesses with weak backlink profiles are consistently outranked by competitors who have invested in building relationships with authoritative publications, regardless of how good their on-page content may be.
            </p>
            <p className="text-text-light text-base leading-relaxed mb-6">
              The challenge is that high-quality links cannot be bought or manufactured. They must be earned through genuine editorial merit, making link building one of the most difficult and time-intensive aspects of SEO. Many businesses lack the media relationships, content resources, and strategic expertise required to acquire these links consistently.
            </p>

            <SectionHeading
              label="Our Approach"
              title="Editorial Link Acquisition Through Content and Relationships"
              centered={false}
            />
            <p className="text-text-light text-base leading-relaxed">
              Reputation 500 earns backlinks by creating content that publishers genuinely want to feature. We develop data studies, expert insights, and thought leadership pieces that provide value to target publications and their audiences. Combined with our established network of journalist contacts and editorial partnerships, this approach produces links from domains with real authority, giving your website the trust signals it needs to rank for competitive terms.
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
            description="Our link building methodology delivers sustainable ranking improvements through ethical practices."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                step: '01',
                title: 'Link Profile Audit',
                desc: 'We analyze your current backlink profile, identify toxic links, benchmark against competitors, and uncover the specific link gaps preventing better rankings.',
              },
              {
                step: '02',
                title: 'Target Identification',
                desc: 'We build a prioritized list of publications and websites where editorial links will have the greatest impact on your domain authority and target keyword rankings.',
              },
              {
                step: '03',
                title: 'Content & Outreach',
                desc: 'Our team creates compelling content assets and pitches them to target publications, securing editorial placements that include natural, contextual links to your site.',
              },
              {
                step: '04',
                title: 'Monitoring & Reporting',
                desc: 'Every acquired link is tracked for indexation, authority metrics, and ranking impact. Monthly reports detail all links built and their contribution to your SEO goals.',
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
            description="A results-driven link building program with full transparency and measurable outcomes."
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
            {[
              'Comprehensive backlink profile audit and gap analysis',
              'Competitor link analysis with opportunity mapping',
              'Curated target publication and outreach lists',
              'High-quality editorial content for link acquisition',
              'Monthly link acquisition from high-authority domains',
              'Toxic link identification and disavow recommendations',
              'Domain authority growth tracking and reporting',
              'Monthly link building reports with full link details',
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
            description="Common questions about our link building services for businesses."
          />
          <Accordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Build the Authority Your Rankings Need"
        description="Get a free backlink audit and learn how strategic link building can transform your search performance."
      />
    </>
  )
}
