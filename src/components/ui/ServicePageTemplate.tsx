import type { Metadata } from 'next'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import SectionHeading from '@/components/ui/SectionHeading'
import ServiceCard from '@/components/ui/ServiceCard'
import Accordion from '@/components/ui/Accordion'
import CTABanner from '@/components/ui/CTABanner'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

interface SubService {
  slug: string
  title: string
  description: string
}

interface FAQ {
  title: string
  content: string
}

interface ServicePageProps {
  breadcrumbs: { label: string; href?: string }[]
  title: string
  description: string
  content: string[]
  subServices?: SubService[]
  subServiceBasePath?: string
  whyChooseUs?: { title: string; description: string }[]
  faqs: FAQ[]
  schemaName: string
  schemaDescription: string
}

export default function ServicePageTemplate({
  breadcrumbs,
  title,
  description,
  content,
  subServices,
  subServiceBasePath,
  whyChooseUs,
  faqs,
  schemaName,
  schemaDescription,
}: ServicePageProps) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: schemaName,
    description: schemaDescription,
    provider: {
      '@type': 'Organization',
      name: 'Reputation 500',
      url: SITE_URL,
    },
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

      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-20 bg-bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6 max-w-3xl" style={{ fontFamily: 'var(--font-heading)' }}>
            {title}
          </h1>
          <p className="text-lg text-gray-800 max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {content.map((paragraph, i) => (
              <p key={i} className="text-text-light text-base leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-services Grid */}
      {subServices && subServices.length > 0 && (
        <section className="py-16 lg:py-20 bg-bg-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="Our Services"
              title="What We Offer"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subServices.map((service) => (
                <ServiceCard
                  key={service.slug}
                  title={service.title}
                  description={service.description}
                  href={`${subServiceBasePath}/${service.slug}`}
                  icon="fa-check-circle"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      {whyChooseUs && whyChooseUs.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Why Choose Reputation 500"
              description="We bring expertise, proven processes, and measurable results to every engagement."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, i) => (
                <div key={i} className="p-6 border border-border rounded-lg bg-white">
                  <h3 className="text-lg font-bold text-heading mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    {item.title}
                  </h3>
                  <p className="text-text-light text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-bg-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
          />
          <Accordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  )
}
