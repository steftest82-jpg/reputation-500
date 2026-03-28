import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionHeading from '@/components/ui/SectionHeading';
import Accordion from '@/components/ui/Accordion';
import CTABanner from '@/components/ui/CTABanner';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Programmatic Advertising Services | Display & Video Ads | Reputation 500',
  description:
    'Scale brand awareness and conversions with programmatic display, video, and native advertising. Reputation 500 uses DSP technology and data-driven targeting to reach your audience across the open web.',
};

const breadcrumbItems = [
  { label: 'Services', href: '/services' },
  { label: 'Performance Marketing', href: '/services/performance-marketing' },
  { label: 'Programmatic Ads' },
];

const steps = [
  {
    title: 'Audience & Data Strategy',
    description:
      'We layer first-party, second-party, and third-party data segments to build precise audience profiles across the programmatic ecosystem.',
  },
  {
    title: 'DSP Setup & Campaign Design',
    description:
      'Campaigns are configured across demand-side platforms with custom deal IDs, contextual targeting, and brand safety controls tailored to your requirements.',
  },
  {
    title: 'Creative Production & Testing',
    description:
      'HTML5 display ads, pre-roll video, native placements, and connected TV creatives are produced and tested for maximum engagement.',
  },
  {
    title: 'Real-Time Optimization & Reporting',
    description:
      'Algorithms and our team continuously optimize bids, placements, and frequency while transparent dashboards track viewability, reach, and conversions.',
  },
];

const deliverables = [
  'Custom audience segments built from first and third-party data',
  'DSP campaign setup with brand safety and viewability controls',
  'HTML5 display, pre-roll video, and native ad production',
  'Connected TV (CTV) campaign management',
  'Contextual and behavioral targeting strategies',
  'Monthly reporting on reach, frequency, viewability, and attribution',
];

const faqs = [
  {
    question: 'What is programmatic advertising?',
    answer:
      'Programmatic advertising is the automated buying and selling of digital ad inventory in real time using software and data. Instead of negotiating directly with publishers, algorithms bid on impressions across thousands of websites, apps, and connected TV platforms in milliseconds, ensuring your ads reach the right audience at the right moment.',
  },
  {
    question: 'How is programmatic different from Google Display Network?',
    answer:
      'Google Display Network is one inventory source within Google\'s ecosystem. Programmatic advertising accesses inventory across multiple ad exchanges and supply-side platforms, offering far broader reach, more granular audience targeting options, and advanced features like private marketplace deals and connected TV.',
  },
  {
    question: 'What kind of budget is needed for programmatic campaigns?',
    answer:
      'Programmatic campaigns typically require a minimum of $5,000 per month in ad spend to achieve meaningful reach and collect enough data for optimization. Larger budgets allow access to premium inventory, private marketplace deals, and more sophisticated testing.',
  },
  {
    question: 'How do you ensure brand safety in programmatic?',
    answer:
      'We implement multi-layered brand safety measures including pre-bid filtering through partners like IAS or DoubleVerify, curated inclusion and exclusion lists, contextual targeting controls, and post-campaign audits. Your ads appear only in environments that meet your brand standards.',
  },
  {
    question: 'Can programmatic advertising drive direct conversions?',
    answer:
      'Yes. While programmatic excels at awareness and consideration, retargeting campaigns and performance-focused strategies like dynamic creative optimization can drive direct conversions. We structure campaigns across the full funnel and measure attribution from first impression to final conversion.',
  },
];

export default function ProgrammaticAdsPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Programmatic Advertising Services',
    description: metadata.description,
    provider: {
      '@type': 'Organization',
      name: 'Reputation 500',
      url: SITE_URL,
    },
    serviceType: 'Programmatic Advertising',
    areaServed: 'Worldwide',
    url: `${SITE_URL}/services/performance-marketing/programmatic-ads`,
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
            Programmatic Advertising
          </h1>
          <p className="text-xl text-gray-800 max-w-3xl">
            Reach your audience across the entire open web with data-driven programmatic campaigns.
            From display and video to native and connected TV, we deliver precision targeting at
            massive scale.
          </p>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <SectionHeading subtitle="The Problem">
                Walled Gardens Limit Your Reach
              </SectionHeading>
              <p className="text-gray-900 mt-4">
                Relying solely on Google and Meta for digital advertising means competing in
                overcrowded auctions while missing the vast majority of the internet. Your potential
                customers spend time across thousands of websites, apps, and streaming platforms that
                walled-garden platforms simply cannot access. Limited reach means limited growth.
              </p>
            </div>
            <div>
              <SectionHeading subtitle="The Solution">
                Data-Powered Campaigns Across the Open Web
              </SectionHeading>
              <p className="text-gray-900 mt-4">
                Reputation 500 uses demand-side platform technology to place your ads across premium
                publisher inventory worldwide. We combine first-party data, contextual signals, and
                behavioral targeting to find your audience wherever they browse, watch, or listen,
                all with full brand safety controls and transparent reporting.
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
      <CTABanner
        title="Expand Your Reach Beyond Walled Gardens"
        description="Discover how programmatic advertising can put your brand in front of the right audience at scale."
        buttonText="Schedule a Consultation"
        buttonHref="/contact"
      />
    </>
  );
}
