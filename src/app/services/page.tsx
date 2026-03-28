import Link from 'next/link'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Accordion from '@/components/ui/Accordion'
import CTABanner from '@/components/ui/CTABanner'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Our Reputation Management Services | Reputation 500',
  description: 'Explore our full suite of reputation management, SEO, performance marketing, and AI optimization services. Trusted by 78+ clients across 21 countries.',
}

const SERVICE_CATEGORIES = [
  {
    title: 'Market Activation',
    description: 'Launch into new markets with strategic positioning, thought leadership placement, and targeted media outreach that builds instant credibility.',
    href: '/services/market-activation',
    icon: 'fa-rocket',
  },
  {
    title: 'For Individuals',
    description: 'Protect and elevate your personal brand. Control what the world sees when they search your name across Google, social media, and AI platforms.',
    href: '/services/for-individuals',
    icon: 'fa-user-shield',
  },
  {
    title: 'For Businesses',
    description: 'Comprehensive corporate reputation management that safeguards your brand, improves ratings, and converts trust into measurable revenue growth.',
    href: '/services/for-businesses',
    icon: 'fa-building-shield',
  },
  {
    title: 'SEO',
    description: 'Data-driven search engine optimization that pushes your brand to the top of Google, drives qualified organic traffic, and dominates your niche.',
    href: '/services/seo',
    icon: 'fa-magnifying-glass-chart',
  },
  {
    title: 'Performance Marketing',
    description: 'ROI-focused paid advertising across Google, Meta, LinkedIn, and programmatic channels that turns ad spend into predictable pipeline.',
    href: '/services/performance-marketing',
    icon: 'fa-chart-line',
  },
  {
    title: 'AI Optimization',
    description: 'Future-proof your brand for AI search. Ensure ChatGPT, Gemini, Perplexity, and other AI assistants recommend your brand by name.',
    href: '/services/ai-optimization',
    icon: 'fa-microchip',
  },
]

const FAQ_ITEMS = [
  {
    question: 'What types of reputation management services do you offer?',
    answer: 'We offer a full 360-degree approach covering personal and business reputation management, SEO, digital PR, content strategy, performance marketing, and AI optimization. Each service is tailored to your specific situation, whether you need to suppress negative search results, build authority through media placements, or improve your star ratings across review platforms.',
  },
  {
    question: 'How long does it take to see results from reputation management?',
    answer: 'Most clients begin seeing measurable improvements within 30 to 60 days, with significant search result changes occurring within 90 to 120 days. The timeline depends on the severity of the issue and the competitiveness of your industry. We provide monthly performance reports so you can track progress every step of the way.',
  },
  {
    question: 'Do you work with clients outside of Europe?',
    answer: 'Absolutely. We serve clients across 21 countries spanning Europe, the Middle East, North America, and Asia-Pacific. Our strategies are localized for each market, ensuring your reputation is protected in every region where your brand operates or is searched.',
  },
  {
    question: 'Can you remove negative articles or reviews from Google?',
    answer: 'While direct removal depends on the platform and legal circumstances, we specialize in suppression strategies that push negative content off the first page of Google. Through strategic content creation, high-authority media placements, and SEO, we replace damaging results with positive, brand-controlled assets.',
  },
  {
    question: 'What makes Reputation 500 different from other agencies?',
    answer: 'We combine reputation management with deep SEO expertise, AI optimization, and performance marketing under one roof. This integrated approach means every piece of content, every backlink, and every campaign works together toward a single goal. Our 4.8-star rating across review platforms and 32,920+ published articles speak to our track record.',
  },
  {
    question: 'How much do your reputation management services cost?',
    answer: 'Our plans start at EUR 1,250 per month for the Essential tier and scale based on the scope and complexity of your needs. Every engagement begins with a free reputation analysis so we can recommend the right plan for your situation. There are no long-term contracts required to get started.',
  },
]

export default function ServicesPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Reputation 500',
    url: SITE_URL,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Reputation Management Services',
      itemListElement: SERVICE_CATEGORIES.map((service, index) => ({
        '@type': 'Offer',
        itemOfferedAs: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
          url: `${SITE_URL}${service.href}`,
        },
        position: index + 1,
      })),
    },
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
          <Breadcrumbs items={[{ label: 'Services' }]} />
          <div className="max-w-3xl">
            <h1
              className="text-3xl lg:text-5xl font-medium text-black mb-6 "
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our Reputation Management Services
            </h1>
            <p
              className="text-gray-800 text-lg max-w-2xl mb-8 "
              style={{ fontFamily: 'var(--font-body)' }}
            >
              From personal brand protection to enterprise-level reputation strategy, we deliver
              measurable results across search engines, review platforms, and AI assistants. Trusted
              by 78+ clients in 21 countries.
            </p>
            <div className="flex flex-wrap gap-4 ">
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
          <h2
            className="text-2xl lg:text-3xl font-bold text-black text-center mb-12 "
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Why Brands Choose Reputation 500
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'fa-shield-halved',
                title: '360-Degree Protection',
                desc: 'We cover Google Search, AI answers, review platforms, social media, and news outlets. No gap in your digital presence goes unmonitored or unmanaged.',
              },
              {
                icon: 'fa-globe',
                title: 'Global Reach, Local Expertise',
                desc: 'Serving 21 countries with market-specific strategies. We understand the nuances of reputation management across cultures, languages, and search ecosystems.',
              },
              {
                icon: 'fa-chart-column',
                title: 'Data-Driven Results',
                desc: 'Every strategy is backed by analytics. Monthly reports show exactly how your search landscape is changing, from keyword rankings to sentiment shifts.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-[#004AAD]/15 rounded-2xl p-8 bg-white card-lift"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#004AAD]/10 text-[#004AAD] mb-5">
                  <i className={`fas ${item.icon} text-2xl`} />
                </div>
                <h3
                  className="text-lg font-bold text-black mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-800 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
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
            <div className="">
              <h2
                className="text-2xl lg:text-3xl font-bold text-black mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                An Integrated Approach That Actually Works
              </h2>
              <p className="text-gray-800 mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                Most agencies treat reputation management, SEO, and marketing as separate silos. We
                combine them into a unified strategy where every article published, every backlink
                earned, and every ad campaign launched reinforces your brand narrative.
              </p>
              <p className="text-gray-800 mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                The result is faster ranking improvements, stronger brand sentiment, and a digital
                footprint that works harder with less spend. Our clients see an average 73%
                improvement in first-page search presence within the first 120 days.
              </p>
              <p className="text-gray-800" style={{ fontFamily: 'var(--font-body)' }}>
                Whether you are a public figure protecting your legacy, a startup building
                credibility, or an enterprise managing crisis communications, our team builds a
                custom playbook designed for your exact situation and goals.
              </p>
            </div>
            <div className="">
              <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center">
                <span className="text-gray-900 text-lg">Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-2xl lg:text-3xl font-bold text-black text-center mb-4 "
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Explore Our Service Categories
          </h2>
          <p className="text-gray-800 text-center max-w-2xl mx-auto mb-12 " style={{ fontFamily: 'var(--font-body)' }}>
            Six specialized practice areas, one unified strategy. Select a category to see how we
            can help.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_CATEGORIES.map((service) => (
              <Link key={service.href} href={service.href} className="group block">
                <div className="h-full p-6 lg:p-8 border border-[#004AAD]/15 rounded-xl hover:border-[#004AAD]/40 hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#004AAD]/10 text-[#004AAD] mb-4 group-hover:bg-[#004AAD] group-hover:text-white transition-colors">
                    <i className={`fas ${service.icon} text-xl`} />
                  </div>
                  <h3
                    className="text-lg font-bold text-black mb-3 group-hover:text-[#004AAD] transition-colors"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-800 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-2xl lg:text-3xl font-bold text-black text-center mb-12 "
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            How We Work
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Free Analysis', desc: 'We audit your current online presence, identify risks, and map every mention across search engines, reviews, and AI platforms.' },
              { step: '02', title: 'Custom Strategy', desc: 'Based on the audit, we build a tailored plan combining the right mix of services to hit your specific goals and timeline.' },
              { step: '03', title: 'Execute & Publish', desc: 'Our team creates high-authority content, secures media placements, builds backlinks, and launches campaigns at scale.' },
              { step: '04', title: 'Monitor & Optimize', desc: 'Continuous tracking and monthly reporting ensure your reputation keeps improving. We adapt the strategy as results come in.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#004AAD] text-white flex items-center justify-center text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                  {item.step}
                </div>
                <h3
                  className="text-lg font-bold text-black mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-800 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
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
            className="text-2xl lg:text-3xl font-bold text-black text-center mb-12 "
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Frequently Asked Questions
          </h2>
          <div className="">
            <Accordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Ready to Take Control of Your Online Reputation?"
        description="Get a free, no-obligation reputation analysis. We will show you exactly what people see when they search your name or brand, and how we can improve it."
        buttonText="Get Your Free Analysis"
      />
    </>
  )
}
