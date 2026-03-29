import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionHeading from '@/components/ui/SectionHeading';
import Accordion from '@/components/ui/Accordion';
import ServiceCTA from '@/components/ui/ServiceCTA';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'LinkedIn Ads Management | B2B Advertising Experts | Reputation 500',
  description:
    'Generate qualified B2B leads with precision-targeted LinkedIn Ads. Reputation 500 builds campaigns that reach decision-makers by title, company, industry, and seniority.',
};

const breadcrumbItems = [
  { label: 'Services', href: '/services' },
  { label: 'Performance Marketing', href: '/services/performance-marketing' },
  { label: 'LinkedIn Ads' },
];

const steps = [
  {
    title: 'ICP Definition & Targeting',
    description:
      'We define your ideal customer profile and build laser-focused audience segments using LinkedIn\'s unmatched professional targeting filters.',
  },
  {
    title: 'Campaign Architecture',
    description:
      'Multi-format campaigns are structured across Sponsored Content, Message Ads, Lead Gen Forms, and Document Ads to match where prospects are in their journey.',
  },
  {
    title: 'Creative & Copy Testing',
    description:
      'Professional ad creatives and copy variations are tested systematically to identify which value propositions and formats drive the most qualified engagement.',
  },
  {
    title: 'Lead Nurture & Optimization',
    description:
      'Retargeting sequences keep your brand top of mind while bid and audience refinements lower your cost per qualified lead over time.',
  },
];

const deliverables = [
  'Ideal customer profile and audience segmentation strategy',
  'Campaign builds across Sponsored Content, Message, and Lead Gen formats',
  'Professional ad creative production (static, carousel, video)',
  'LinkedIn Insight Tag installation and conversion tracking',
  'Matched Audiences and Account-Based Marketing (ABM) list uploads',
  'Monthly performance reports with lead quality scoring',
];

const faqs = [
  {
    question: 'Why are LinkedIn Ads more expensive than other platforms?',
    answer:
      'LinkedIn\'s higher CPMs reflect the premium value of its professional audience data. You can target by job title, company size, seniority, industry, and skills, something no other platform offers with the same precision. The cost per lead may be higher, but the lead quality and deal sizes in B2B typically justify the investment.',
  },
  {
    question: 'What budget do you recommend for LinkedIn Ads?',
    answer:
      'We recommend a minimum monthly ad spend of $3,000 to $5,000 for meaningful testing and results. LinkedIn\'s auction is competitive, and smaller budgets limit audience reach and the speed at which we can optimize toward high-performing segments.',
  },
  {
    question: 'Which LinkedIn ad formats work best for lead generation?',
    answer:
      'Lead Gen Forms consistently deliver the best cost per lead because users can submit their information without leaving LinkedIn. Sponsored Content with compelling visuals drives strong awareness, while Document Ads and Conversation Ads work well for mid-funnel engagement.',
  },
  {
    question: 'Can you run Account-Based Marketing campaigns on LinkedIn?',
    answer:
      'Yes. ABM is one of LinkedIn\'s greatest strengths. We upload target account lists, build matched audiences, and create personalized ad experiences for specific companies and decision-maker roles within those organizations.',
  },
  {
    question: 'How do you measure LinkedIn Ads success beyond leads?',
    answer:
      'We track cost per lead, lead-to-opportunity conversion rate, pipeline influenced, and cost per qualified opportunity. By integrating with your CRM, we connect ad spend to actual revenue so you can see true return on investment, not just lead volume.',
  },
];

export default function LinkedInAdsPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'LinkedIn Ads Management Services',
    description: metadata.description,
    provider: {
      '@type': 'Organization',
      name: 'Reputation 500',
      url: SITE_URL,
    },
    serviceType: 'LinkedIn Ads Management',
    areaServed: 'Worldwide',
    url: `${SITE_URL}/services/performance-marketing/linkedin-ads`,
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
            LinkedIn Ads Management
          </h1>
          <p className="text-xl text-gray-800 max-w-3xl">
            Reach the decision-makers who matter most. Our LinkedIn Ads campaigns target prospects by
            job title, company, and seniority to fill your B2B pipeline with qualified leads.
          </p>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <SectionHeading subtitle="The Problem">
                B2B Leads Are Hard to Find on Consumer Platforms
              </SectionHeading>
              <p className="text-gray-900 mt-4">
                Running B2B campaigns on platforms designed for consumer audiences leads to wasted
                impressions and unqualified leads. Interest-based targeting cannot match the precision
                needed to reach specific job titles, industries, and company sizes. Sales teams end
                up chasing leads that were never a fit in the first place.
              </p>
            </div>
            <div>
              <SectionHeading subtitle="The Solution">
                Precision Targeting on the World's B2B Network
              </SectionHeading>
              <p className="text-gray-900 mt-4">
                Reputation 500 leverages LinkedIn's professional data to put your message in front of
                exactly the right people. We combine job-title targeting, company lists, and ABM
                strategies with compelling creative to generate leads that your sales team actually
                wants to call. Every campaign is built to deliver quality over quantity.
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
      <ServiceCTA serviceName="LinkedIn Ads" />
    </>
  );
}
