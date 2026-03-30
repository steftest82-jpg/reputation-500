import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionHeading from '@/components/ui/SectionHeading';
import Accordion from '@/components/ui/Accordion';
import ServiceCTA from '@/components/ui/ServiceCTA';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'SEO Content Writing Services | High-Ranking Copy | Reputation 500',
  description:
    'Expert SEO content writing that ranks and converts. Reputation 500 crafts research-backed articles, landing pages, and blog posts optimized for search and readers alike.',
};

const breadcrumbItems = [
  { label: 'Services', href: '/services' },
  { label: 'SEO', href: '/services/seo' },
  { label: 'Content Writing' },
];

const steps = [
  {
    title: 'Keyword & Intent Research',
    description:
      'We identify high-value keywords and map search intent so every piece of content answers what your audience is actually looking for.',
  },
  {
    title: 'Content Briefing',
    description:
      'Detailed briefs outline target keywords, headings, competitor gaps, internal links, and tone guidelines before a word is written.',
  },
  {
    title: 'Expert Writing & Optimization',
    description:
      'Skilled writers craft compelling, well-structured content with natural keyword integration, E-E-A-T signals, and conversion-focused CTAs.',
  },
  {
    title: 'Review & Publishing Support',
    description:
      'Every piece goes through editorial review, SEO validation, and schema markup preparation before it reaches your CMS.',
  },
];

const deliverables = [
  'Long-form blog posts and articles (1,500:3,000+ words)',
  'SEO-optimized landing pages and service pages',
  'Product descriptions with conversion-focused copy',
  'Thought leadership and industry analysis pieces',
  'Content refresh and optimization of existing pages',
  'Meta titles, descriptions, and schema recommendations per piece',
];

const faqs = [
  {
    question: 'How do you ensure content ranks well in search engines?',
    answer:
      'Every piece starts with keyword and intent research. We analyze top-ranking competitors, identify content gaps, and structure each article with proper heading hierarchy, internal linking, and natural keyword placement. We also follow E-E-A-T best practices to build topical authority.',
  },
  {
    question: 'Do you write content for specific industries?',
    answer:
      'Yes. Our writing team includes specialists across technology, finance, healthcare, SaaS, e-commerce, and professional services. For highly technical topics, we pair industry-expert writers with our SEO team to ensure accuracy and optimization.',
  },
  {
    question: 'What is the typical turnaround time for content?',
    answer:
      'Standard blog posts are delivered within 7 to 10 business days from brief approval. Larger projects like pillar pages or whitepapers may take 2 to 3 weeks. Rush delivery is available for time-sensitive campaigns.',
  },
  {
    question: 'Can you update and optimize our existing content?',
    answer:
      'Absolutely. Content refreshes are one of the fastest ways to improve rankings. We audit your existing pages, identify optimization opportunities, update outdated information, improve structure, and add missing keyword coverage.',
  },
  {
    question: 'How many revisions are included?',
    answer:
      'Every content piece includes two rounds of revisions at no additional cost. We work closely with your team during the briefing stage to minimize the need for major changes after delivery.',
  },
];

export default function ContentWritingPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'SEO Content Writing Services',
    description: metadata.description,
    provider: {
      '@type': 'Organization',
      name: 'Reputation 500',
      url: SITE_URL,
    },
    serviceType: 'Content Writing',
    areaServed: 'Worldwide',
    url: `${SITE_URL}/services/seo/content-writing`,
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
          <Breadcrumbs light items={breadcrumbItems} />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-6 mb-6">
            SEO Content Writing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Content that earns rankings and earns trust. We write research-backed, search-optimized
            articles, landing pages, and blog posts that attract organic traffic and convert readers
            into customers.
          </p>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <SectionHeading subtitle="The Problem">
                Generic Content Fails to Rank or Convert
              </SectionHeading>
              <p className="text-gray-900 mt-4">
                Publishing content without a search strategy wastes resources. Thin articles that
                ignore keyword intent sit buried on page five. Meanwhile, keyword-stuffed copy may
                attract clicks but repels the readers you need to convert. The result is a blog full
                of posts that generate neither traffic nor leads.
              </p>
            </div>
            <div>
              <SectionHeading subtitle="The Solution">
                Research-Driven Writing That Serves Both Algorithms and Audiences
              </SectionHeading>
              <p className="text-gray-900 mt-4">
                Reputation 500 combines deep keyword research with expert storytelling. Every piece
                of content is built on a data-driven brief, written by skilled authors, and
                optimized for both search engines and human readers. The outcome is content that
                climbs the rankings and moves your audience to act.
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
                <p className="text-gray-900">{step.description}</p>
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
      <ServiceCTA serviceName="SEO Content Writing" />
    </>
  );
}
