import type { Metadata } from 'next'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import CTABanner from '@/components/ui/CTABanner'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: `About Us | ${SITE_NAME}`,
  description: 'Reputation 500 is an online reputation management agency founded by Savvas Agathangelou, Stefanos Moschopoulos, and Alexandros Tzoulis. With 10+ years of experience, 78+ clients across 21 countries, and 32,920+ articles published, we protect and elevate brands worldwide.',
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: `About Reputation 500 | Online Reputation Management Agency`,
    description: 'Meet the team behind Reputation 500. Founded by Savvas Agathangelou, Stefanos Moschopoulos, and Alexandros Tzoulis to help businesses and individuals take control of their online narrative.',
  },
}

const founders = [
  {
    name: 'Savvas Agathangelou',
    role: 'Co-Founder & CEO',
    bio: 'Savvas leads the strategic direction of Reputation 500 with over a decade of hands-on experience in digital PR, online reputation management, and brand positioning. His ability to connect PR strategy with measurable business outcomes has earned the trust of executives, fund managers, and multinational brands across EMEA, the UK, and the US.',
  },
  {
    name: 'Stefanos Moschopoulos',
    role: 'Co-Founder & CTO',
    bio: 'Stefanos drives the technology and data infrastructure behind Reputation 500. With deep expertise in SEO engineering, AI optimization, and analytics platforms, he ensures every campaign is built on solid technical foundations and measurable performance data.',
  },
  {
    name: 'Alexandros Tzoulis',
    role: 'Co-Founder & COO',
    bio: 'Alexandros oversees operations and client delivery at Reputation 500. His background in project management, media relations, and process optimization ensures that every engagement runs smoothly, on time, and with the level of quality our clients expect.',
  },
]

const values = [
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Integrity',
    description: 'We operate with full transparency, keeping our clients informed at every stage of the reputation management process.',
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Results Driven',
    description: 'Every strategy we craft is measured by tangible outcomes: improved search results, positive sentiment, and lasting brand protection.',
  },
  {
    icon: 'fa-solid fa-lightbulb',
    title: 'Innovation',
    description: 'We leverage cutting-edge tools and techniques to stay ahead of the ever-changing digital landscape and search engine algorithms.',
  },
  {
    icon: 'fa-solid fa-users',
    title: 'Client First',
    description: 'Your reputation is our priority. We tailor every campaign to the unique needs and goals of each client we serve.',
  },
]

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '500+', label: 'Campaigns Delivered' },
  { value: '78+', label: 'International Clients' },
  { value: '21', label: 'Countries Served' },
  { value: '32,920+', label: 'Articles Published' },
  { value: '4.8', label: 'Star Rating' },
]

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Reputation 500',
  url: SITE_URL,
  description: 'Reputation 500 is an online reputation management agency helping individuals and businesses control what shows up in Google Search, reviews, and brand mentions.',
  foundingDate: '2016',
  founders: [
    { '@type': 'Person', name: 'Savvas Agathangelou', jobTitle: 'Co-Founder & CEO' },
    { '@type': 'Person', name: 'Stefanos Moschopoulos', jobTitle: 'Co-Founder & CTO' },
    { '@type': 'Person', name: 'Alexandros Tzoulis', jobTitle: 'Co-Founder & COO' },
  ],
  parentOrganization: {
    '@type': 'Organization',
    name: 'ADCX Tech Solutions LTD',
  },
  numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 10, maxValue: 50 },
  areaServed: { '@type': 'GeoShape', name: '21 countries worldwide' },
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutSchema} />

      {/* Hero */}
      <section className="bg-bg-dark pt-28 lg:pt-36 pb-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumbs light items={[{ label: 'About Us', href: '/about' }]} />
          <h1
            className="text-4xl lg:text-5xl font-semibold mt-4 text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            About Reputation 500
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300" style={{ fontFamily: 'var(--font-body)' }}>
            An online reputation management agency founded to give businesses and individuals the power to control their digital narrative.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-[32px] font-semibold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Who We Are
              </h2>
              <div className="space-y-5 text-gray-800 leading-relaxed" style={{ fontFamily: 'var(--font-body)', fontSize: '18px' }}>
                <p>
                  Reputation 500 is an online reputation management agency that helps individuals, executives, and businesses take full control of what appears when someone searches their name or brand. We combine digital PR, SEO content, review management, link building, and AI optimization into a single, measurable reputation strategy.
                </p>
                <p>
                  Founded by Savvas Agathangelou, Stefanos Moschopoulos, and Alexandros Tzoulis, Reputation 500 was built on the belief that every person and business deserves to be represented accurately and positively online. We have grown from a specialist consultancy into a full-service reputation management agency, serving 78+ clients across 21 countries with more than 32,920 articles published.
                </p>
                <p>
                  As part of ADCX Tech Solutions LTD, we combine strategic communications expertise with advanced technology to deliver measurable, lasting results. Our clients include Fortune 500 executives, FinTech companies, real estate firms, trading brokers, and high-profile individuals across Europe, the Middle East, and North America.
                </p>
              </div>
            </div>
            <div className="bg-[#F5F7FA] rounded-2xl p-10 border border-[#004AAD]/15">
              <h3 className="text-[24px] font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Our Mission
              </h3>
              <p className="text-gray-800 leading-relaxed mb-6" style={{ fontSize: '18px' }}>
                To empower businesses and individuals to take control of their online reputation through ethical, transparent, and results-driven strategies that protect brand value and unlock growth.
              </p>
              <h3 className="text-[24px] font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Our Vision
              </h3>
              <p className="text-gray-800 leading-relaxed" style={{ fontSize: '18px' }}>
                To be the world&apos;s most trusted online reputation management partner, setting the standard for ethical practices, measurable results, and client-first service in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-[#004AAD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-semibold text-white" style={{ fontFamily: 'var(--font-heading)' }}>{s.value}</p>
                <p className="mt-1 text-blue-100 uppercase tracking-wider" style={{ fontSize: '11px' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-[32px] font-semibold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              The Founders Behind Reputation 500
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: '18px' }}>
              A team of specialists in digital PR, technology, and operations working together to protect and elevate brands worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder) => (
              <div key={founder.name} className="bg-white rounded-2xl p-8 border border-[#004AAD]/15 card-lift">
                <div className="w-16 h-16 rounded-full bg-[#004AAD]/10 flex items-center justify-center mb-5">
                  <i className="fa-solid fa-user text-[#004AAD] text-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                  {founder.name}
                </h3>
                <p className="text-[#004AAD] font-medium mb-4" style={{ fontSize: '14px' }}>
                  {founder.role}
                </p>
                <p className="text-gray-700 leading-relaxed" style={{ fontSize: '16px' }}>
                  {founder.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-[32px] font-semibold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              What We Stand For
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: '18px' }}>
              The principles that guide every campaign, every client relationship, and every decision we make.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-7 border border-[#004AAD]/15 card-lift">
                <div className="w-12 h-12 rounded-xl bg-[#004AAD]/10 flex items-center justify-center mb-5">
                  <i className={`${v.icon} text-[#004AAD] text-lg`} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  {v.title}
                </h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontSize: '16px' }}>
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] font-semibold mb-6 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
            What We Do
          </h2>
          <div className="space-y-5 text-gray-800 leading-relaxed text-center" style={{ fontSize: '18px' }}>
            <p>
              Reputation 500 delivers a comprehensive, 360-degree approach to online reputation management. We monitor what people see when they search for your brand across Google, AI engines, review platforms, and social media. We then execute data-driven strategies to improve your digital footprint, push down negative content, earn authoritative media coverage, and build a lasting positive presence.
            </p>
            <p>
              Our services span digital PR and guaranteed media placements, SEO and link building, ratings and review optimization, AI optimization for platforms like ChatGPT, Claude, and Perplexity, performance marketing, brand monitoring, and crisis management. Every engagement starts with a reputation audit and ends with clear, measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  )
}
