import Link from 'next/link'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Accordion from '@/components/ui/Accordion'
import ServiceCTA from '@/components/ui/ServiceCTA'
import ServiceCard from '@/components/ui/ServiceCard'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL, SERVICES_DATA } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'SEO Services That Drive Rankings & Revenue | Reputation 500',
  description: 'Data-driven SEO services including link building, content writing, content planning, and technical audits. Increase organic traffic and dominate your niche in search.',
}

const subServices = SERVICES_DATA.seo.subServices
const subServiceBasePath = '/services/seo'

const FAQ_ITEMS = [
  {
    question: 'How long does it take to see results from SEO?',
    answer: 'Most clients see initial ranking improvements within 4 to 8 weeks, with significant organic traffic growth occurring at the 3 to 6 month mark. SEO is a compounding investment where results accelerate over time. We provide monthly reports so you can track progress from day one, and our strategies are designed to deliver quick wins while building long-term authority.',
  },
  {
    question: 'What is included in your SEO audit?',
    answer: 'Our comprehensive SEO audit covers technical health (site speed, crawlability, indexation), on-page optimization (title tags, meta descriptions, heading structure, content quality), off-page authority (backlink profile analysis, competitor comparison), and content gap analysis. You receive a prioritized action plan with estimated impact for each recommendation.',
  },
  {
    question: 'How does link building improve search rankings?',
    answer: 'Backlinks from authoritative websites signal to Google that your content is trustworthy and valuable. Our link building focuses on earning high-quality, relevant links from respected publications and industry sites, not low-quality directories. This approach builds sustainable authority that improves your rankings across your entire site, not just individual pages.',
  },
  {
    question: 'Do you write SEO content in-house or outsource it?',
    answer: 'All content is produced by our in-house editorial team with deep experience in SEO copywriting. We combine keyword research, search intent analysis, and competitive content gaps to create articles that rank and convert. Every piece goes through editorial review for quality, accuracy, and brand voice alignment before publication.',
  },
  {
    question: 'Can SEO work together with reputation management?',
    answer: 'Absolutely, and that is one of our biggest advantages. SEO and reputation management share the same battlefield: Google search results. Our integrated approach means that every piece of content, every backlink, and every technical optimization serves both your ranking goals and your reputation strategy. This dual-purpose approach delivers faster results at lower cost than running separate campaigns.',
  },
  {
    question: 'How much do your SEO services cost?',
    answer: 'Our SEO services are included as part of our reputation management plans starting at EUR 1,250 per month. For standalone SEO engagements, pricing depends on the scope of work, competitiveness of your target keywords, and current state of your site. We always start with a free SEO analysis to scope the opportunity before recommending an investment level.',
  },
]

export default function SEOPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'SEO Services',
    description: 'Data-driven SEO services including link building, content writing, content strategy, and technical SEO audits. Increase organic traffic and dominate search rankings.',
    provider: {
      '@type': 'Organization',
      name: 'Reputation 500',
      url: SITE_URL,
    },
    url: `${SITE_URL}/services/seo`,
    areaServed: 'Worldwide',
    serviceType: 'Search Engine Optimization',
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
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'SEO' }]} />
          <div className="max-w-3xl">
            <h1
              className="text-3xl lg:text-5xl font-medium text-black mb-6 "
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              SEO Services That Drive Rankings & Revenue
            </h1>
            <p
              className="text-gray-800 text-lg max-w-2xl mb-8 "
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Stop leaving organic traffic on the table. Our data-driven SEO strategies combine
              technical excellence, premium content, and strategic link building to put your brand
              at the top of Google where your customers are already searching.
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
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: 'fa-arrow-trend-up',
                title: 'Rank Higher, Faster',
                desc: 'Proven strategies that move your target keywords to page one of Google. We focus on high-intent terms that drive revenue, not vanity metrics.',
              },
              {
                icon: 'fa-pen-nib',
                title: 'Content That Converts',
                desc: 'In-house editorial team creating SEO-optimized articles, landing pages, and thought leadership pieces that rank, engage, and convert visitors.',
              },
              {
                icon: 'fa-link',
                title: 'Authority-Building Links',
                desc: 'Strategic backlink acquisition from respected publications and industry sites. Every link strengthens your domain authority and competitive moat.',
              },
              {
                icon: 'fa-gear',
                title: 'Technical Excellence',
                desc: 'Comprehensive site health management covering speed, crawlability, structured data, core web vitals, and mobile optimization.',
              },
            ].map((item, i) => (
              <div key={i} className="border border-[#004AAD]/15 rounded-2xl p-8 bg-white card-lift">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#004AAD]/10 text-[#004AAD] mb-5">
                  <i className={`fas ${item.icon} text-2xl`} />
                </div>
                <h3 className="text-lg font-bold text-black mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
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
          <div className="max-w-3xl mx-auto">
              <h2
                className="text-2xl lg:text-3xl font-bold text-black mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                SEO That Works Harder Because It Is Integrated
              </h2>
              <p className="text-gray-800 mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                Most SEO agencies operate in a vacuum. They chase rankings without considering how
                those rankings affect your brand perception, reputation, or conversion rates. At
                Reputation 500, every SEO action is part of a larger strategy that builds authority,
                trust, and revenue simultaneously.
              </p>
              <p className="text-gray-800 mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                Our team has published over 32,920 articles and built backlink profiles for clients
                across financial services, technology, real estate, and professional services. We
                know what it takes to rank in competitive verticals because we do it every day.
              </p>
              <p className="text-gray-800" style={{ fontFamily: 'var(--font-body)' }}>
                Whether you need a full-service SEO engagement or targeted support with link
                building, content production, or a technical audit, we scale our services to match
                your goals and budget.
              </p>
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
            Our SEO Services
          </h2>
          <p className="text-gray-800 text-center max-w-2xl mx-auto mb-12 " style={{ fontFamily: 'var(--font-body)' }}>
            Four specialized disciplines that work together to dominate your search landscape.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
            Our SEO Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Deep Analysis', desc: 'Technical audit, keyword research, competitor analysis, and content gap mapping. We identify every opportunity and obstacle before writing a single word.' },
              { step: '02', title: 'Strategy & Planning', desc: 'We build a prioritized SEO roadmap with clear milestones. Content calendars, link building targets, and technical fixes are all mapped out with timelines.' },
              { step: '03', title: 'Create & Build', desc: 'Our team produces optimized content, secures high-authority backlinks, implements technical improvements, and optimizes on-page elements in parallel.' },
              { step: '04', title: 'Track & Refine', desc: 'Weekly ranking monitoring, monthly traffic reports, and quarterly strategy reviews. We double down on what is working and adjust what is not.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#004AAD] text-white flex items-center justify-center text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-black mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
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
      <ServiceCTA serviceName="SEO Services" />
    </>
  )
}
