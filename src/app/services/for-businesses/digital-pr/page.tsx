import type { Metadata } from 'next'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import SectionHeading from '@/components/ui/SectionHeading'
import Accordion from '@/components/ui/Accordion'
import CTABanner from '@/components/ui/CTABanner'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Digital PR Services for Businesses | Reputation 500',
  description:
    'Earn media coverage and build authority through strategic digital public relations. Reputation 500 secures high-authority placements that boost brand visibility, SEO, and trust.',
}

const faqs = [
  {
    title: 'How is digital PR different from traditional PR?',
    content:
      'Traditional PR focuses on print media, broadcast, and event-based publicity. Digital PR specifically targets online publications, news sites, industry blogs, and digital media outlets with the dual goal of building brand awareness and acquiring high-authority backlinks that strengthen your search engine performance.',
  },
  {
    title: 'What types of publications do you target?',
    content:
      'We target a mix of tier-one media outlets, industry-specific publications, respected blogs, and niche digital platforms. The specific targets depend on your industry, audience, and goals. Our media network spans business, technology, finance, lifestyle, and vertical-specific outlets across multiple geographies.',
  },
  {
    title: 'How does digital PR improve SEO?',
    content:
      'When high-authority publications link to your website in their articles, it signals trust and relevance to search engines. These editorial backlinks are among the most valuable ranking factors in SEO, directly improving your domain authority and your ability to rank for competitive keywords.',
  },
  {
    title: 'Can you guarantee media placements?',
    content:
      'We do not guarantee specific publications because editorial decisions are made independently by journalists and editors. However, our established media relationships and proven pitching strategies consistently deliver placements for our clients. We set realistic expectations and typically exceed them.',
  },
  {
    title: 'How do you measure the success of a digital PR campaign?',
    content:
      'We track placements secured, domain authority of linking publications, referral traffic from coverage, backlink quality metrics, brand mention volume, and the impact on your search rankings for branded and non-branded keywords. Monthly reports tie each metric to your business objectives.',
  },
]

export default function DigitalPRPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Digital PR Services',
    description: metadata.description,
    provider: {
      '@type': 'Organization',
      name: 'Reputation 500',
      url: SITE_URL,
    },
    url: `${SITE_URL}/services/for-businesses/digital-pr`,
    serviceType: 'Digital Public Relations',
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
              { label: 'Digital PR' },
            ]}
          />
          <div className="max-w-3xl">
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Digital PR for Businesses
            </h1>
            <p className="text-lg text-gray-800 leading-relaxed">
              Earned media coverage in respected publications builds the authority and trust that paid advertising cannot replicate. Our digital PR campaigns secure strategic placements that elevate your brand, strengthen your search presence, and position your company as an industry leader.
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
              title="Paid Ads Build Awareness, but Earned Media Builds Trust"
              centered={false}
            />
            <p className="text-text-light text-base leading-relaxed mb-6">
              Consumers and business buyers increasingly distrust advertising. They look for third-party validation: articles in reputable publications, features in industry media, and expert commentary that positions a company as a credible authority. Without a digital PR strategy, your brand relies solely on owned and paid channels, limiting the depth of trust you can build with your target market.
            </p>
            <p className="text-text-light text-base leading-relaxed mb-6">
              Additionally, search engines heavily weight editorial links from trusted publications. Companies without earned media coverage struggle to compete for high-value search terms because their domain authority cannot match competitors who invest in digital PR.
            </p>

            <SectionHeading
              label="Our Approach"
              title="Data-Driven Campaigns That Earn Coverage and Links"
              centered={false}
            />
            <p className="text-text-light text-base leading-relaxed">
              Reputation 500 develops digital PR campaigns built on newsworthy content, data-driven storytelling, and established journalist relationships. We identify the stories your brand can credibly tell, package them in formats that editors want to publish, and distribute them to targeted media lists. Every placement is selected not only for brand exposure but also for its SEO value, ensuring that your digital PR investment delivers compounding returns through improved search rankings.
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
            description="Our digital PR process is engineered for both media impact and SEO performance."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                step: '01',
                title: 'Story Mining',
                desc: 'We identify compelling narratives within your business, including data, expertise, milestones, and unique perspectives that journalists and editors want to cover.',
              },
              {
                step: '02',
                title: 'Content Development',
                desc: 'Our editorial team crafts press releases, thought leadership articles, data studies, and expert commentary pieces optimized for media pickup.',
              },
              {
                step: '03',
                title: 'Media Outreach',
                desc: 'We pitch stories to targeted journalists and editors across our established media network, following up strategically to maximize placement rates.',
              },
              {
                step: '04',
                title: 'Tracking & Reporting',
                desc: 'Every placement is documented with full metrics including domain authority, estimated reach, backlink value, and referral traffic impact.',
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
            description="A full-service digital PR program that generates coverage, links, and lasting authority."
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
            {[
              'Media landscape analysis and target publication list',
              'Newsworthy content assets ready for distribution',
              'Journalist relationship building and media outreach',
              'Feature articles in high-authority publications',
              'Expert commentary and thought leadership placements',
              'Editorial backlinks from trusted domains',
              'Monthly placement and performance reports',
              'Reactive PR support for trending news and opportunities',
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
            description="Common questions about our digital PR services for businesses."
          />
          <Accordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Earn the Media Coverage Your Brand Deserves"
        description="Schedule a free consultation and learn how digital PR can build your authority and improve search rankings."
      />
    </>
  )
}
