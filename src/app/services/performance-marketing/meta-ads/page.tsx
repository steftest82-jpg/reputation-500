import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionHeading from '@/components/ui/SectionHeading';
import Accordion from '@/components/ui/Accordion';
import ServiceCTA from '@/components/ui/ServiceCTA';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Meta Ads Management | Facebook & Instagram Advertising | Reputation 500',
  description:
    'Drive leads and sales with expertly managed Meta Ads campaigns. Reputation 500 builds high-converting Facebook and Instagram ad funnels backed by creative testing and audience science.',
};

const breadcrumbItems = [
  { label: 'Services', href: '/services' },
  { label: 'Performance Marketing', href: '/services/performance-marketing' },
  { label: 'Meta Ads' },
];

const steps = [
  {
    title: 'Audience & Funnel Mapping',
    description:
      'We define your ideal customer profiles, map the buyer journey, and build audience segments for prospecting, retargeting, and lookalike expansion.',
  },
  {
    title: 'Creative Development',
    description:
      'Thumb-stopping ad creatives are designed and tested across formats including static images, carousels, video, and Stories to find what resonates.',
  },
  {
    title: 'Campaign Launch & Testing',
    description:
      'Structured testing frameworks pit audiences, creatives, and offers against each other to identify winning combinations quickly and efficiently.',
  },
  {
    title: 'Scale & Optimize',
    description:
      'Winning combinations are scaled with budget increases while underperformers are replaced. Continuous creative refresh prevents audience fatigue.',
  },
];

const deliverables = [
  'Full-funnel campaign architecture (awareness, consideration, conversion)',
  'Custom and lookalike audience builds from first-party data',
  'Creative strategy with monthly ad design production',
  'Meta Pixel and Conversions API setup and verification',
  'A/B testing calendar for creative, audience, and placement',
  'Bi-weekly performance reports with ROAS and CPA tracking',
];

const faqs = [
  {
    question: 'What is the difference between Facebook Ads and Meta Ads?',
    answer:
      'They are the same platform. Meta is the parent company of Facebook, Instagram, WhatsApp, and Messenger. Meta Ads Manager is the unified platform used to run advertising campaigns across Facebook, Instagram, the Audience Network, and Messenger.',
  },
  {
    question: 'Do you create the ad creatives as well?',
    answer:
      'Yes. Our in-house creative team designs static images, carousels, and short-form video ads tailored for Meta placements. We also provide creative direction if you prefer to use your own design team or production resources.',
  },
  {
    question: 'How much should I budget for Meta Ads?',
    answer:
      'We recommend starting with at least $2,500 per month in ad spend to allow sufficient testing across audiences and creatives. Higher budgets accelerate the testing phase and allow us to reach statistical significance faster.',
  },
  {
    question: 'How do you handle the iOS privacy changes affecting Meta tracking?',
    answer:
      'We implement the Meta Conversions API alongside the Pixel to maintain accurate server-side tracking. We also structure campaigns to leverage broad targeting and creative-led strategies that are less dependent on individual user tracking.',
  },
  {
    question: 'Can Meta Ads work for B2B businesses?',
    answer:
      'Absolutely. While Meta is often associated with B2C, its detailed targeting options, lead generation forms, and retargeting capabilities make it effective for B2B demand generation, especially when combined with strong content offers and remarketing sequences.',
  },
];

export default function MetaAdsPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Meta Ads Management Services',
    description: metadata.description,
    provider: {
      '@type': 'Organization',
      name: 'Reputation 500',
      url: SITE_URL,
    },
    serviceType: 'Meta Ads Management',
    areaServed: 'Worldwide',
    url: `${SITE_URL}/services/performance-marketing/meta-ads`,
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
            Meta Ads Management
          </h1>
          <p className="text-xl text-gray-800 max-w-3xl">
            Reach your ideal customers where they scroll most. We create full-funnel Facebook and
            Instagram ad campaigns that combine audience science with scroll-stopping creative to
            deliver measurable leads and sales.
          </p>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <SectionHeading subtitle="The Problem">
                Rising Costs and Declining Ad Performance
              </SectionHeading>
              <p className="text-gray-900 mt-4">
                Many advertisers experience increasing CPMs, creative fatigue, and audience saturation
                on Meta platforms. Without a systematic approach to testing and funnel architecture,
                campaigns plateau quickly and cost-per-lead climbs. Privacy changes have added
                another layer of complexity to tracking and optimization.
              </p>
            </div>
            <div>
              <SectionHeading subtitle="The Solution">
                Creative-Led Campaigns With Full-Funnel Strategy
              </SectionHeading>
              <p className="text-gray-900 mt-4">
                Reputation 500 combats rising costs with a creative-first approach. We continuously
                test new visuals, copy angles, and formats while building multi-stage funnels that
                nurture cold audiences into paying customers. Server-side tracking ensures accurate
                attribution even after iOS privacy changes.
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
      <ServiceCTA serviceName="Meta Ads" />
    </>
  );
}
