import Link from 'next/link'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Accordion from '@/components/ui/Accordion'
import CTABanner from '@/components/ui/CTABanner'
import ServiceCard from '@/components/ui/ServiceCard'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL, SERVICES_DATA } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Business Reputation Management | Reputation 500',
  description: 'Protect your company brand, improve star ratings, and turn online trust into revenue. Business reputation management for SMEs, FinTech, and enterprise brands across 21 countries.',
}

const subServices = SERVICES_DATA['for-businesses'].subServices
const subServiceBasePath = '/services/for-businesses'

const FAQ_ITEMS = [
  {
    question: 'Why is business reputation management important for revenue?',
    answer: 'Studies show that a one-star increase in online ratings can lead to a 5 to 9 percent increase in revenue. Your online reputation directly impacts whether prospects trust you enough to become customers. We help businesses improve their ratings, dominate branded search results, and build the kind of digital trust that shortens sales cycles.',
  },
  {
    question: 'How do you handle negative reviews for businesses?',
    answer: 'We use a three-pronged approach: strategic review response that demonstrates professionalism, ethical review generation programs that increase your volume of positive reviews, and suppression of unfair or fake reviews through platform-specific processes. The goal is to improve your overall rating while ensuring future customers see balanced, authentic feedback.',
  },
  {
    question: 'Can you manage reputation across multiple business locations?',
    answer: 'Yes. We manage multi-location reputation campaigns including local SEO, location-specific review management, and Google Business Profile optimization for each branch or office. Our reporting dashboard gives you a unified view of reputation metrics across all locations.',
  },
  {
    question: 'How does digital PR help business reputation?',
    answer: 'Digital PR earns your brand coverage in respected industry publications, news outlets, and authoritative websites. Each placement serves dual purposes: it builds trust with your audience and creates high-authority backlinks that improve your search rankings. This combination makes your brand more visible and more credible simultaneously.',
  },
  {
    question: 'What industries do you specialize in for business reputation management?',
    answer: 'We have deep experience across financial services, FinTech, real estate, SaaS, professional services, healthcare, and luxury brands. Each industry has unique reputation dynamics, and our strategies are tailored to the specific platforms, review sites, and media outlets that matter most in your sector.',
  },
  {
    question: 'How quickly can you improve our business ratings?',
    answer: 'Most businesses see a measurable improvement in their aggregate star ratings within 60 to 90 days through our ethical review generation and response programs. Full reputation transformation, including search result optimization and media placements, typically reaches peak impact within 120 to 180 days.',
  },
]

export default function ForBusinessesPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Business Reputation Management',
    description: 'Comprehensive reputation management services for businesses. Improve ratings, build brand authority, and drive revenue through digital trust.',
    provider: {
      '@type': 'Organization',
      name: 'Reputation 500',
      url: SITE_URL,
    },
    url: `${SITE_URL}/services/for-businesses`,
    areaServed: 'Worldwide',
    serviceType: 'Business Reputation Management',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="bg-white pt-28 lg:pt-36 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'For Businesses' }]} />
          <div className="max-w-3xl">
            <h1
              className="text-3xl lg:text-5xl font-extrabold text-black mb-6 reveal"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Business Reputation Management
            </h1>
            <p
              className="text-gray-500 text-lg max-w-2xl mb-8 reveal"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Your brand reputation is your most powerful growth lever. We help businesses protect
              their online image, improve star ratings, earn media coverage, and convert digital
              trust into measurable revenue.
            </p>
            <div className="flex flex-wrap gap-4 reveal">
              <Link href="/contact" className="btn-primary">
                Get Started
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-[#004AAD] text-[#004AAD] font-semibold rounded-md hover:bg-[#004AAD] hover:text-white transition-colors"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 stagger-children">
            {[
              {
                icon: 'fa-star',
                title: 'Ratings That Convert',
                desc: 'We improve your star ratings across Google, Trustpilot, G2, and industry-specific review platforms through ethical generation and smart response strategies.',
              },
              {
                icon: 'fa-bullhorn',
                title: 'Earned Media Authority',
                desc: 'Strategic digital PR that earns your brand coverage in respected publications, building the third-party validation that prospects trust most.',
              },
              {
                icon: 'fa-link',
                title: 'Domain Authority Growth',
                desc: 'High-quality backlink acquisition from authoritative domains that boosts your search rankings and makes your brand harder to displace.',
              },
              {
                icon: 'fa-bell',
                title: 'Real-Time Brand Intelligence',
                desc: 'Continuous monitoring of reviews, mentions, and sentiment across the web. You will know instantly when something needs your attention.',
              },
            ].map((item, i) => (
              <div key={i} className="border border-[#004AAD]/15 rounded-2xl p-8 bg-white card-lift">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#004AAD]/10 text-[#004AAD] mb-5">
                  <i className={`fas ${item.icon} text-2xl`} />
                </div>
                <h3 className="text-lg font-bold text-black mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-left">
              <h2
                className="text-2xl lg:text-3xl font-bold text-black mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Turn Your Reputation Into a Revenue Engine
              </h2>
              <p className="text-gray-500 mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                Every prospect researches your company before making a buying decision. What they
                find in Google search results, review sites, and AI-generated answers determines
                whether they move forward or choose a competitor. A strong reputation shortens
                sales cycles and increases close rates.
              </p>
              <p className="text-gray-500 mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                Our business reputation management combines brand monitoring, review optimization,
                digital PR, strategic link building, and content marketing into a unified system.
                Every asset we create works double duty, building trust with humans and authority
                with search engines.
              </p>
              <p className="text-gray-500" style={{ fontFamily: 'var(--font-body)' }}>
                From FinTech startups to multinational enterprises, we have helped 78+ clients
                across 21 countries transform their digital reputation into a competitive advantage
                that drives real business outcomes.
              </p>
            </div>
            <div className="reveal-right">
              <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Services Grid */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-2xl lg:text-3xl font-bold text-black text-center mb-4 reveal"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Business Reputation Services
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12 reveal" style={{ fontFamily: 'var(--font-body)' }}>
            A complete toolkit for protecting, building, and leveraging your corporate reputation.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {subServices.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.description}
                href={`${subServiceBasePath}/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-2xl lg:text-3xl font-bold text-black text-center mb-12 reveal"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Our Proven Process for Business Reputation
          </h2>
          <div className="grid md:grid-cols-4 gap-8 stagger-children">
            {[
              { step: '01', title: 'Brand Audit', desc: 'We map your complete digital footprint including search results, reviews, mentions, backlink profile, and competitor positioning to find every vulnerability and opportunity.' },
              { step: '02', title: 'Strategic Roadmap', desc: 'We prioritize actions by impact. Whether it is review recovery, negative suppression, or authority building, every tactic is sequenced for maximum results in minimum time.' },
              { step: '03', title: 'Multi-Channel Execution', desc: 'Our team publishes premium content, earns media placements, optimizes review profiles, builds backlinks, and manages brand mentions in parallel.' },
              { step: '04', title: 'Measure & Scale', desc: 'Monthly reporting tracks ratings, rankings, sentiment, and share of voice. We refine the strategy based on data and scale what works.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#004AAD] text-white flex items-center justify-center text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-black mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2
            className="text-2xl lg:text-3xl font-bold text-black text-center mb-12 reveal"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Frequently Asked Questions
          </h2>
          <div className="reveal">
            <Accordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Ready to Protect and Grow Your Business Reputation?"
        description="Get a free brand reputation analysis. We will audit your search results, review profiles, and media presence, then show you the fastest path to improvement."
        buttonText="Get Your Free Brand Audit"
      />
    </>
  )
}
