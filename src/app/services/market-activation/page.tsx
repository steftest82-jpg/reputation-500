import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Accordion from '@/components/ui/Accordion'
import ServiceCTA from '@/components/ui/ServiceCTA'
import MediaGallery from '@/components/homepage/MediaGallery'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Market Activation: Enter New Markets with Confidence | Reputation 500',
  description:
    'Reputation-first market entry strategy. We build local credibility through localized PR, review foundations, local SEO, and market research before you launch in a new geography.',
  alternates: { canonical: `${SITE_URL}/services/market-activation` },
  openGraph: {
    title: 'Market Activation: Enter New Markets with Confidence | Reputation 500',
    description:
      'Reputation-first market entry strategy. We build local credibility through localized PR, review foundations, local SEO, and market research before you launch in a new geography.',
  },
}

const valueProps = [
  {
    icon: 'fa-globe',
    title: 'Localized Reputation Building',
    description:
      'We establish your brand presence on the local review platforms, directories, and media outlets that matter in your target market before you open for business.',
  },
  {
    icon: 'fa-newspaper',
    title: 'In-Market PR & Media',
    description:
      'Our network of local journalists and publishers secures coverage in respected regional publications that build trust with your new audience from day one.',
  },
  {
    icon: 'fa-map-location-dot',
    title: 'Local SEO Foundation',
    description:
      'Google Business Profiles, local citations, hreflang implementation, and geo-targeted content ensure you rank for the searches that drive local business.',
  },
  {
    icon: 'fa-chart-bar',
    title: 'Market Intelligence',
    description:
      'Comprehensive competitor mapping, cultural analysis, and search landscape research inform every tactical decision in your activation plan.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Market Research & Audit',
    description:
      'We map the local search landscape, identify key review platforms and media outlets, catalog competitor positioning, and assess cultural considerations that influence brand perception in your target geography.',
  },
  {
    number: '02',
    title: 'Reputation Seeding',
    description:
      'Before you launch, we build your local presence: Google Business Profile, citations on the directories your audience trusts, initial review generation, and foundational PR placements that give early customers confidence in your brand.',
  },
  {
    number: '03',
    title: 'Content Localization & SEO',
    description:
      'Native-speaking specialists create locally resonant content, not machine translations. We optimize for local search engines, implement hreflang tags, and produce thought leadership that positions you as a credible market participant.',
  },
  {
    number: '04',
    title: 'Launch Support & Monitoring',
    description:
      'We support your go-live with coordinated PR, paid media activation, and real-time sentiment monitoring. Post-launch, we transition to continuous reputation management to sustain and grow your local presence.',
  },
]

const faqs = [
  {
    title: 'How far in advance should we start reputation building before entering a new market?',
    content:
      'We recommend beginning market activation 3 to 6 months before your planned launch, depending on the competitiveness of the market and the complexity of local regulations. This lead time allows us to establish local search presence through Google Business Profiles and directory listings, secure media placements in respected regional publications, build citation profiles on the platforms your audience trusts, and generate initial reviews that provide social proof from day one. For highly competitive markets or regulated industries such as financial services or healthcare, starting 6 to 9 months early gives you a stronger foundation and reduces the risk of a slow start. The earlier you begin building local credibility, the more cost-effective your launch advertising becomes, since prospects who find positive search results and reviews convert at significantly higher rates.',
  },
  {
    title: 'Which countries and regions do you support for market activation?',
    content:
      'We support market activation across North America, Europe, the United Kingdom, the Middle East, Asia-Pacific, and Latin America, with active campaigns currently running in over 21 countries. Our network includes in-market specialists in over 30 countries who provide local expertise in language, culture, media landscape, regulatory environment, and consumer behavior, ensuring your activation strategy is authentically localized rather than simply translated. Each market activation plan is built around the specific search engines, review platforms, social networks, and media outlets that dominate in your target geography. If your target market is not listed, contact us and we will assess coverage and timeline for establishing the necessary local partnerships.',
  },
  {
    title: 'Do you handle content translation and cultural localization?',
    content:
      'Yes, and we go far beyond direct translation. Our in-market writers adapt your messaging to reflect local language nuances, cultural expectations, humor, formality levels, and industry-specific terminology that only native speakers understand intuitively. We also conduct local keyword research to ensure your content targets the search terms your audience actually uses, which often differ significantly from direct translations of your English keywords. This ensures your content reads naturally and resonates with the target audience, rather than feeling like a foreign brand that has run its website through a translation tool. The result is locally authentic content that ranks well in regional search engines and builds genuine credibility with your new audience.',
  },
  {
    title: 'What makes a reputation-first market entry different from a standard launch?',
    content:
      'A standard launch focuses on product availability, pricing, and advertising. A reputation-first approach ensures that when your advertising drives people to research your brand, they find positive search results, credible reviews, local media coverage, and consistent information across platforms. Without this foundation, even large ad budgets produce low conversion rates because prospects do not yet trust your brand in their market.',
  },
  {
    title: 'How do you measure market activation success?',
    content:
      'We track local search visibility for target keywords, branded search volume in the new market, review quantity and sentiment on regional platforms, media placement reach and engagement, referral traffic from local sources, Google Business Profile metrics, and AI mention accuracy in the local language. Monthly dashboards provide clear progress against agreed benchmarks so you can quantify the return on your activation investment.',
  },
  {
    title: 'Can you continue managing our reputation after the initial market entry phase?',
    content:
      'Absolutely. Market activation is the first phase of an ongoing reputation strategy. Once your local presence is established, we transition to continuous monitoring, review management, content optimization, competitive analysis, and AI visibility tracking. Most clients retain us on an ongoing basis to sustain momentum and defend their position as the market matures and competitors respond.',
  },
]

export default function MarketActivationPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Market Activation Services',
    description:
      'Reputation-first market activation services that establish local credibility, multilingual content, and brand trust for organizations entering new geographic markets.',
    provider: {
      '@type': 'Organization',
      name: 'Reputation 500',
      url: SITE_URL,
    },
    areaServed: 'Worldwide',
    serviceType: 'Market Activation',
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

      {/* ── Hero ── */}
      <section className="bg-white pt-28 lg:pt-36 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: 'Market Activation' },
            ]}
          />

          <div className="max-w-3xl ">
            <h1
              className="text-4xl lg:text-5xl font-bold text-[#000] mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Market Activation &mdash; Enter New Markets with Confidence
            </h1>
            <p
              className="text-lg text-[#555] leading-relaxed mb-8"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Expanding into a new geography without local credibility is like advertising
              to an audience that does not trust you yet. Reputation 500 builds the local
              search presence, review foundation, and media authority your brand needs so
              that when you launch, customers already believe in you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#004AAD] text-white font-semibold rounded-md hover:bg-[#003a8a] transition-colors"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Plan Your Market Entry
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-[#004AAD] text-[#004AAD] font-semibold rounded-md hover:bg-[#004AAD] hover:text-white transition-colors"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Value Props ── */}
      <section className="bg-[#F5F7FA] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 ">
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#000] mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              A Reputation-First Approach to Market Entry
            </h2>
            <p className="text-[#555] max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
              When you enter a new market, no one knows who you are. We change that before
              your first customer interaction, building the trust signals that accelerate
              sales cycles and reduce customer acquisition costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="bg-white p-6 rounded-xl border border-[#004AAD]/15 hover:border-[#004AAD]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#004AAD]/10 text-[#004AAD] mb-4">
                  <i className={`fas ${prop.icon} text-xl`} />
                </div>
                <h3
                  className="text-lg font-bold text-[#000] mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {prop.title}
                </h3>
                <p className="text-sm text-[#555] leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Content Section (Two Columns) ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl font-bold text-[#000] mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Why Launching Without Local Credibility Costs You More Than You Think
              </h2>
              <div className="space-y-4 text-[#555] leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                <p>
                  When organizations enter unfamiliar markets, they face a fundamental
                  challenge: zero brand awareness and zero digital trust. Search results are
                  empty or dominated by local competitors. Review platforms show no history.
                  AI assistants have nothing positive to reference. Without proactive
                  reputation building, even well-funded brands start from zero and burn
                  through acquisition budgets with poor conversion rates.
                </p>
                <p>
                  Our market activation methodology addresses this systematically. We begin
                  months before your launch with a comprehensive market audit that maps the
                  local search landscape, identifies the review platforms your customers
                  trust, catalogs competitor positioning, and surfaces cultural considerations
                  that influence brand perception in your target geography.
                </p>
                <p>
                  Content localization goes far beyond translation. Our in-market specialists
                  adapt messaging to resonate with local audiences, accounting for cultural
                  norms, industry terminology, and regional search behavior. We create
                  locally relevant thought leadership, secure placements in respected regional
                  publications, and build citation profiles on the platforms that matter most.
                </p>
              </div>
          </div>
        </div>
      </section>

      {/* ── Process Steps ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 ">
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#000] mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              How We Activate Your Brand in a New Market
            </h2>
            <p className="text-[#555] max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
              A proven four-phase framework that takes you from market research to
              launch and beyond, building trust at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.number} className="relative">
                <div className="text-5xl font-bold text-[#004AAD]/10 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  {step.number}
                </div>
                <h3
                  className="text-lg font-bold text-[#000] mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-[#555] leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MediaGallery />

      {/* ── Related Services ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] font-semibold text-center mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
            Explore Related Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link href="/services/for-businesses" className="block p-6 bg-[#F5F7FA] rounded-2xl border border-[#004AAD]/15 hover:border-[#004AAD]/30 transition-all card-lift">
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Business Reputation Management</h3>
              <p className="text-gray-600" style={{ fontSize: '15px' }}>Protect your company brand, improve star ratings, and turn online trust into measurable revenue.</p>
            </Link>
            <Link href="/services/performance-marketing" className="block p-6 bg-[#F5F7FA] rounded-2xl border border-[#004AAD]/15 hover:border-[#004AAD]/30 transition-all card-lift">
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Performance Marketing</h3>
              <p className="text-gray-600" style={{ fontSize: '15px' }}>ROI-driven paid media campaigns across Google, Meta, and LinkedIn that drive qualified leads.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#F5F7FA] py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 ">
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#000] mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Market Activation FAQs
            </h2>
          </div>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <ServiceCTA serviceName="Market Activation" />
    </>
  )
}
