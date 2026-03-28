import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionHeading from '@/components/ui/SectionHeading';
import CTABanner from '@/components/ui/CTABanner';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Case Studies | ${SITE_NAME}`,
  description:
    'Explore how Reputation 500 has helped businesses across Real Estate, FinTech, and Corporate sectors reclaim and protect their online reputation.',
  alternates: { canonical: `${SITE_URL}/about/case-studies` },
};

const caseStudies = [
  {
    industry: 'Real Estate',
    title: 'Restoring Trust for a Leading Property Developer',
    description:
      'A top-tier real estate firm faced damaging search results following a high-profile dispute. We implemented a multi-channel content strategy that displaced negative coverage and rebuilt stakeholder confidence within six months.',
  },
  {
    industry: 'FinTech',
    title: 'Protecting a FinTech Startup Before Launch',
    description:
      'A pre-revenue financial technology company needed to establish a credible online presence ahead of its Series A funding round. We created an authoritative digital footprint that impressed investors and early adopters alike.',
  },
  {
    industry: 'Corporate',
    title: 'Crisis Management for a Multinational Corporation',
    description:
      'After an internal controversy went public, a multinational corporation engaged Reputation 500 to manage the fallout. Our rapid-response strategy contained negative sentiment and restored the brand narrative across key markets.',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg-dark pt-24 pb-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <Breadcrumbs
            items={[
              { label: 'About', href: '/about' },
              { label: 'Case Studies', href: '/about/case-studies' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mt-4">Case Studies</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            Real results from real campaigns — see how we have delivered for
            clients worldwide.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Featured Campaigns"
            subtitle="A look at some of the industries we serve."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <div
                key={cs.title}
                className="border border-gray-200 rounded-lg p-6 flex flex-col"
              >
                <span className="inline-block self-start text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 rounded px-3 py-1">
                  {cs.industry}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {cs.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed flex-1">
                  {cs.description}
                </p>
                <span className="mt-6 inline-block self-start text-sm font-medium text-gray-400 bg-gray-100 rounded px-3 py-1">
                  Coming Soon
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
