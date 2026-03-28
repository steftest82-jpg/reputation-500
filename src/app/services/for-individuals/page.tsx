import Link from 'next/link'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Accordion from '@/components/ui/Accordion'
import CTABanner from '@/components/ui/CTABanner'
import ServiceCard from '@/components/ui/ServiceCard'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL, SERVICES_DATA } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Personal Reputation Management | Reputation 500',
  description: 'Take control of what people see when they Google your name. Personal reputation management for executives, professionals, and public figures across 21 countries.',
}

const subServices = SERVICES_DATA['for-individuals'].subServices
const subServiceBasePath = '/services/for-individuals'

const FAQ_ITEMS = [
  {
    question: 'What is personal reputation management and who needs it?',
    answer: 'Personal reputation management is the practice of controlling and improving what appears when someone searches your name online. It is essential for executives, entrepreneurs, public figures, job seekers, and anyone whose career or opportunities depend on a strong digital first impression. Over 85% of people Google someone before a meeting, interview, or business deal.',
  },
  {
    question: 'Can you remove negative search results about me from Google?',
    answer: 'We use proven suppression strategies to push unwanted content off the first page of Google by building and promoting high-authority positive assets. While direct removal depends on the platform, our approach has successfully moved negative results out of the top 10 for the majority of our individual clients within 90 to 120 days.',
  },
  {
    question: 'How do you protect my personal brand on AI platforms like ChatGPT?',
    answer: 'AI platforms pull information from publicly available sources to form their answers. We ensure those sources contain accurate, positive information about you by publishing authoritative content, securing high-quality media placements, and optimizing your digital footprint so AI assistants reference you favorably.',
  },
  {
    question: 'How long does personal reputation management take to show results?',
    answer: 'Initial improvements typically appear within 30 to 60 days as new content gets indexed by Google. Significant changes to your first-page search results usually occur within 90 to 120 days. We provide monthly progress reports with clear metrics so you always know where things stand.',
  },
  {
    question: 'Is personal reputation management confidential?',
    answer: 'Absolutely. Confidentiality is fundamental to our service. We use strict NDAs and privacy protocols for every engagement. Your involvement in any reputation campaign is never disclosed, and all communications are handled through secure channels.',
  },
  {
    question: 'What does a personal reputation management plan cost?',
    answer: 'Plans for individuals start at EUR 1,250 per month. The exact investment depends on the complexity of your situation, the competitiveness of your search landscape, and how quickly you need results. We offer a free reputation analysis so you can see exactly what needs to be addressed before committing.',
  },
]

export default function ForIndividualsPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Personal Reputation Management',
    description: 'Professional reputation management services for individuals, executives, and public figures. Control your Google search results and digital narrative.',
    provider: {
      '@type': 'Organization',
      name: 'Reputation 500',
      url: SITE_URL,
    },
    url: `${SITE_URL}/services/for-individuals`,
    areaServed: 'Worldwide',
    serviceType: 'Personal Reputation Management',
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
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'For Individuals' }]} />
          <div className="max-w-3xl">
            <h1
              className="text-3xl lg:text-5xl font-extrabold text-black mb-6 "
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Personal Reputation Management
            </h1>
            <p
              className="text-gray-500 text-lg max-w-2xl mb-8 "
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Your name is your most valuable asset. We help executives, entrepreneurs, and public
              figures control what the world sees when they search for you, across Google, AI
              platforms, and social media.
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
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'fa-search',
                title: 'Own Your Search Results',
                desc: 'We build and promote a wall of positive, authoritative content so your first page of Google reflects who you truly are, not outdated or unfair content.',
              },
              {
                icon: 'fa-newspaper',
                title: 'Premium Media Placements',
                desc: 'Get featured in respected publications and industry outlets. Every article strengthens your authority and pushes unwanted results further down.',
              },
              {
                icon: 'fa-eye',
                title: '24/7 Monitoring & Alerts',
                desc: 'Real-time tracking across Google, social media, news sites, and AI platforms. You will know the moment anything new appears about you online.',
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
            <div className="">
              <h2
                className="text-2xl lg:text-3xl font-bold text-black mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Your Digital First Impression Matters More Than Ever
              </h2>
              <p className="text-gray-500 mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                Before a handshake, a meeting, or a contract, people search your name. What they
                find shapes their opinion in seconds. A single negative article, an outdated profile,
                or a lack of online presence can cost you opportunities you never even knew existed.
              </p>
              <p className="text-gray-500 mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                Our personal reputation management service builds a robust, positive digital identity
                around your name. We combine strategic content creation, high-authority media
                placements, and technical SEO to ensure that every search result on page one works in
                your favor.
              </p>
              <p className="text-gray-500" style={{ fontFamily: 'var(--font-body)' }}>
                Whether you are a C-suite executive navigating a career transition, a professional
                dealing with unfair press, or a public figure looking to strengthen your narrative, we
                have managed it successfully for clients across 21 countries.
              </p>
            </div>
            <div className="">
              <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center">
                <span className="text-gray-600 text-lg">Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Services Grid */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-2xl lg:text-3xl font-bold text-black text-center mb-4 "
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Services for Individuals
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12 " style={{ fontFamily: 'var(--font-body)' }}>
            Each service is designed to address a specific aspect of your personal online reputation.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            className="text-2xl lg:text-3xl font-bold text-black text-center mb-12 "
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            How We Restore and Build Your Reputation
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Reputation Audit', desc: 'We analyze every search result, mention, and profile tied to your name across Google, social media, news, and AI platforms.' },
              { step: '02', title: 'Strategy Design', desc: 'We build a custom plan targeting your weakest points first, mapping out the content, placements, and profiles needed to reshape your search landscape.' },
              { step: '03', title: 'Content & Placement', desc: 'Our editorial team creates premium articles, secures media features, and builds authoritative web properties that rank for your name.' },
              { step: '04', title: 'Ongoing Protection', desc: 'Continuous monitoring, monthly reports, and proactive content updates ensure your reputation stays strong and any new threats are addressed immediately.' },
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
        title="Take Control of Your Personal Brand Today"
        description="Get a free, confidential reputation analysis. We will show you exactly what appears when people Google your name, and how we can improve it."
        buttonText="Get Your Free Analysis"
      />
    </>
  )
}
