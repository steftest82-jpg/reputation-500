import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionHeading from '@/components/ui/SectionHeading';
import CTABanner from '@/components/ui/CTABanner';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: `About Us | ${SITE_NAME}`,
  description:
    'Learn about Reputation 500 — an online reputation management agency with 10+ years of experience protecting businesses and individuals across 21 countries.',
  alternates: { canonical: `${SITE_URL}/about` },
};

const values = [
  {
    title: 'Integrity',
    description:
      'We operate with full transparency, keeping our clients informed at every stage of the reputation management process.',
  },
  {
    title: 'Results-Driven',
    description:
      'Every strategy we craft is measured by tangible outcomes — improved search results, positive sentiment, and lasting brand protection.',
  },
  {
    title: 'Innovation',
    description:
      'We leverage cutting-edge tools and techniques to stay ahead of the ever-changing digital landscape and search engine algorithms.',
  },
  {
    title: 'Client-First',
    description:
      'Your reputation is our priority. We tailor every campaign to the unique needs and goals of each client we serve.',
  },
];

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '500+', label: 'Campaigns Delivered' },
  { value: '78+', label: 'International Clients' },
  { value: '21', label: 'Countries Served' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg-dark pt-24 pb-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <Breadcrumbs items={[{ label: 'About', href: '/about' }]} />
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            About Reputation 500
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            Protecting and elevating brands across the globe since day one.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeading title="Our Story" />
          <div className="mt-8 space-y-5 text-gray-700 leading-relaxed">
            <p>
              Reputation 500 was founded with a single mission: to give
              businesses and individuals the power to control their online
              narrative. In a world where a single search result can make or
              break an opportunity, we recognised the urgent need for a
              dedicated, ethical, and results-driven reputation management
              partner.
            </p>
            <p>
              Over the past decade, we have grown from a specialist consultancy
              into a full-service online reputation management agency, serving
              78+ clients across 21 countries. With more than 32,920 articles
              published and hundreds of successful campaigns behind us, our
              track record speaks for itself.
            </p>
            <p>
              As part of ADCX Tech Solutions LTD, we combine strategic
              communications expertise with advanced technology to deliver
              measurable, lasting results for every client we work with.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">
                  {v.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-14 bg-bg-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-bold">{s.value}</p>
                <p className="mt-2 text-gray-300 text-sm uppercase tracking-wide">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            title="Our Leadership"
            subtitle="Meet the team behind Reputation 500."
          />
          <p className="mt-8 text-gray-500 italic">
            Team profiles coming soon.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
