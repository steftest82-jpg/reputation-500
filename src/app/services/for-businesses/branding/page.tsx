import type { Metadata } from 'next'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import SectionHeading from '@/components/ui/SectionHeading'
import Accordion from '@/components/ui/Accordion'
import ServiceCTA from '@/components/ui/ServiceCTA'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Branding Services for Businesses | Reputation 500',
  description:
    'Build a strong, consistent brand identity that resonates with your audience. Reputation 500 helps businesses develop brand strategies that drive recognition, trust, and growth.',
  alternates: { canonical: 'https://reputation500.com/services/for-businesses/branding' },
  openGraph: {
    title: 'Branding Services for Businesses | Reputation 500',
    description: 'Build a strong, consistent brand identity that resonates with your audience. Reputation 500 helps businesses develop brand strategies that drive recognition, trust, and growth.',
  },
}

const faqs = [
  {
    title: 'What is the difference between branding and reputation management?',
    content:
      'Branding focuses on proactively defining and communicating your company identity: your visual identity, messaging, values, and market positioning. Reputation management is more reactive, addressing how your brand is perceived based on search results, reviews, and media coverage. The two disciplines work together because a strong brand provides a foundation that makes reputation management more effective.',
  },
  {
    title: 'Do you create logos and visual identity systems?',
    content:
      'Our branding services focus on strategic brand positioning, messaging frameworks, and digital brand execution rather than traditional graphic design. We partner with design agencies when visual identity work is needed, ensuring that creative execution aligns with the strategic foundation we establish.',
  },
  {
    title: 'How does branding impact search engine performance?',
    content:
      'Consistent branding increases branded search volume, improves click-through rates in search results, and builds domain authority through brand recognition. When users recognize and trust your brand, they are more likely to click on your listings, share your content, and link to your website, all of which improve SEO performance.',
  },
  {
    title: 'How long does a branding engagement typically last?',
    content:
      'A brand strategy and messaging framework can be developed in 4 to 8 weeks. Implementation and digital brand execution typically continue for 3 to 6 months. Many clients maintain ongoing brand management to ensure consistency as their business evolves.',
  },
  {
    title: 'Can you rebrand an existing company?',
    content:
      'Yes. We work with established businesses that need to reposition, modernize, or evolve their brand. This includes brand audits, competitive repositioning, messaging updates, and digital brand migration strategies that preserve existing equity while moving toward a new direction.',
  },
]

export default function BrandingPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Branding Services',
    description: metadata.description,
    provider: {
      '@type': 'Organization',
      name: 'Reputation 500',
      url: SITE_URL,
    },
    url: `${SITE_URL}/services/for-businesses/branding`,
    serviceType: 'Brand Strategy and Development',
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
              { label: 'Branding' },
            ]}
          />
          <div className="max-w-3xl">
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Branding for Businesses
            </h1>
            <p className="text-lg text-gray-800 leading-relaxed">
              A strong brand is the foundation of every successful business. We help companies define their market position, craft compelling messaging, and build a digital brand presence that earns trust, drives recognition, and outperforms the competition.
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
              title="Without a Clear Brand, Your Business Blends In"
              centered={false}
            />
            <p className="text-text-light text-base leading-relaxed mb-6">
              In crowded markets, businesses without differentiated branding compete solely on price. Prospects cannot distinguish your company from competitors, leading to longer sales cycles, higher customer acquisition costs, and lower loyalty rates. Inconsistent messaging across digital channels further erodes trust and confuses potential customers.
            </p>
            <p className="text-text-light text-base leading-relaxed mb-6">
              The digital landscape amplifies this problem. Your website, social profiles, search results, and review presence all communicate your brand, whether intentionally or not. Without a cohesive strategy, each channel tells a slightly different story, undermining the clarity and confidence that drive purchasing decisions.
            </p>

            <SectionHeading
              label="Our Approach"
              title="Strategic Brand Development for the Digital Age"
              centered={false}
            />
            <p className="text-text-light text-base leading-relaxed">
              Reputation 500 builds brand strategies grounded in market research, competitive analysis, and audience insights. We define your unique value proposition, develop messaging frameworks that resonate with your target audience, and ensure brand consistency across every digital touchpoint. From your website copy and social media voice to your media presence and search result appearance, every element reinforces a unified brand narrative that differentiates your business and builds lasting market authority.
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
            description="Our branding process translates business objectives into a compelling digital brand presence."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                step: '01',
                title: 'Discovery & Research',
                desc: 'We analyze your market, competitors, target audience, and existing brand perception to identify positioning opportunities and gaps.',
              },
              {
                step: '02',
                title: 'Brand Strategy',
                desc: 'We define your brand positioning, value proposition, messaging pillars, and tone of voice in a comprehensive brand strategy document.',
              },
              {
                step: '03',
                title: 'Digital Execution',
                desc: 'We implement brand messaging across your website, social media profiles, content marketing, and digital PR channels for maximum consistency.',
              },
              {
                step: '04',
                title: 'Brand Monitoring',
                desc: 'We track brand perception, search visibility, and audience engagement to refine strategy and maintain brand coherence over time.',
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
            description="A complete brand strategy and execution framework ready for immediate implementation."
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
            {[
              'Competitive landscape and market positioning analysis',
              'Brand strategy document with value proposition and pillars',
              'Messaging framework with tone of voice guidelines',
              'Website copy audit and optimization recommendations',
              'Social media brand voice and content direction',
              'Content marketing strategy aligned with brand positioning',
              'Brand consistency audit across all digital channels',
              'Quarterly brand health assessments and strategy reviews',
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
            description="Common questions about our branding services for businesses."
          />
          <Accordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <ServiceCTA serviceName="Branding" />
    </>
  )
}
