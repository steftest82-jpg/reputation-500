import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionHeading from '@/components/ui/SectionHeading';
import Accordion from '@/components/ui/Accordion';
import CTABanner from '@/components/ui/CTABanner';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Link Building Services | Authority-Driven SEO | Reputation 500',
  description:
    'Build domain authority with ethical, high-impact link building. Reputation 500 secures relevant backlinks from trusted publications to elevate your search rankings.',
};

const breadcrumbItems = [
  { label: 'Services', href: '/services' },
  { label: 'SEO', href: '/services/seo' },
  { label: 'Link Building' },
];

const steps = [
  {
    title: 'Backlink Audit',
    description:
      'We analyze your existing link profile, identify toxic backlinks, and benchmark against competitors to find gaps worth filling.',
  },
  {
    title: 'Prospect Research',
    description:
      'Our team curates a list of high-authority, niche-relevant websites that align with your brand and audience.',
  },
  {
    title: 'Outreach & Placement',
    description:
      'Personalized outreach campaigns secure contextual placements on editorial pages, resource hubs, and industry publications.',
  },
  {
    title: 'Reporting & Refinement',
    description:
      'Monthly reports track new links acquired, domain authority growth, and ranking improvements so we can refine the strategy.',
  },
];

const deliverables = [
  'Comprehensive backlink audit and toxic link disavow file',
  'Curated prospect list of 100+ relevant domains',
  'Monthly editorial link placements from DA 40+ sites',
  'Guest post creation and placement on industry blogs',
  'Digital PR outreach for brand mentions and citations',
  'Monthly link velocity and authority growth reports',
];

const faqs = [
  {
    question: 'How long does it take to see results from link building?',
    answer:
      'Most clients begin to see measurable ranking improvements within 3 to 6 months. Link building is a long-term strategy where authority compounds over time, and early gains accelerate as your domain strength grows.',
  },
  {
    question: 'Do you use any black-hat link building tactics?',
    answer:
      'Absolutely not. We follow Google\'s guidelines strictly. Every link we build is editorially placed on real, relevant websites. We never use PBNs, link farms, or automated schemes that could put your domain at risk.',
  },
  {
    question: 'What types of websites will link back to us?',
    answer:
      'We target niche-relevant publications, industry blogs, news outlets, and authoritative resource pages. Every prospect is vetted for domain authority, traffic quality, and editorial standards before outreach begins.',
  },
  {
    question: 'How do you measure link building success?',
    answer:
      'We track metrics including the number of referring domains acquired, domain authority growth, organic keyword rankings, and referral traffic from placed links. Monthly reports provide full transparency into every link earned.',
  },
  {
    question: 'Can link building help with local SEO?',
    answer:
      'Yes. We incorporate local citations, regional publication placements, and geo-targeted link strategies to strengthen your visibility in local search results alongside broader authority building.',
  },
];

export default function LinkBuildingPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Link Building Services',
    description: metadata.description,
    provider: {
      '@type': 'Organization',
      name: 'Reputation 500',
      url: SITE_URL,
    },
    serviceType: 'Link Building',
    areaServed: 'Worldwide',
    url: `${SITE_URL}/services/seo/link-building`,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-16 bg-bg-dark">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-6 mb-6">
            Link Building Services
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl">
            Earn high-authority backlinks that strengthen your domain, improve rankings, and drive
            qualified referral traffic. Every link we build is relevant, editorial, and built to
            last.
          </p>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <SectionHeading subtitle="The Problem">
                Thin Link Profiles Limit Your Rankings
              </SectionHeading>
              <p className="text-gray-600 mt-4">
                Search engines treat backlinks as votes of confidence. Without a strong, diverse link
                profile, your content struggles to compete regardless of how well-optimized it is.
                Competitors with more authoritative backlinks consistently outrank pages with better
                on-page SEO but weaker off-page signals.
              </p>
            </div>
            <div>
              <SectionHeading subtitle="The Solution">
                Strategic, Authority-Driven Link Acquisition
              </SectionHeading>
              <p className="text-gray-600 mt-4">
                Reputation 500 builds your backlink profile through genuine editorial placements on
                high-authority, relevant websites. Our outreach-driven approach earns links that
                Google values, compounding your domain strength and pushing your most important pages
                to the top of search results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-bg-section">
        <div className="container mx-auto px-4">
          <SectionHeading centered subtitle="Our Process">
            How It Works
          </SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Deliverables */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading centered subtitle="What You Get">
            Key Deliverables
          </SectionHeading>
          <ul className="mt-12 grid md:grid-cols-2 gap-4">
            {deliverables.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">&#10003;</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-bg-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeading centered subtitle="Common Questions">
            Frequently Asked Questions
          </SectionHeading>
          <div className="mt-12">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Ready to Build Authority That Ranks?"
        description="Get a free backlink audit and discover the link gaps holding your site back."
        buttonText="Get Your Free Audit"
        buttonHref="/contact"
      />
    </>
  );
}
