import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionHeading from '@/components/ui/SectionHeading';
import Accordion from '@/components/ui/Accordion';
import CTABanner from '@/components/ui/CTABanner';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Google Ads Management Services | PPC That Converts | Reputation 500',
  description:
    'Maximize ROI with expert Google Ads management. Reputation 500 builds, optimizes, and scales Search, Shopping, Display, and YouTube campaigns that deliver measurable results.',
};

const breadcrumbItems = [
  { label: 'Services', href: '/services' },
  { label: 'Performance Marketing', href: '/services/performance-marketing' },
  { label: 'Google Ads' },
];

const steps = [
  {
    title: 'Account Audit & Strategy',
    description:
      'We audit your existing account structure, quality scores, and conversion tracking, then design a strategy aligned with your revenue goals.',
  },
  {
    title: 'Campaign Build & Launch',
    description:
      'Campaigns are built with tight ad group structures, intent-matched keywords, compelling ad copy, and conversion-optimized landing page recommendations.',
  },
  {
    title: 'Ongoing Optimization',
    description:
      'Weekly bid adjustments, search term mining, negative keyword refinement, ad testing, and audience layering keep performance improving month over month.',
  },
  {
    title: 'Reporting & Scaling',
    description:
      'Transparent dashboards track spend, conversions, CPA, and ROAS. When campaigns prove profitable, we scale budgets into new keyword and audience territories.',
  },
];

const deliverables = [
  'Full account audit with opportunity analysis',
  'Search, Shopping, Display, and YouTube campaign builds',
  'Conversion tracking setup and verification (GA4, GTM)',
  'Monthly A/B testing of ad copy and landing pages',
  'Negative keyword management and search term reports',
  'Weekly optimization logs and monthly performance reports',
];

const faqs = [
  {
    question: 'What budget do I need to get started with Google Ads?',
    answer:
      'We typically recommend a minimum monthly ad spend of $3,000 to generate meaningful data for optimization. However, the ideal budget depends on your industry, competition, and goals. We will advise on the right starting budget during our strategy phase.',
  },
  {
    question: 'How quickly will I see results from Google Ads?',
    answer:
      'Google Ads can drive traffic immediately after launch. However, the optimization phase to reach peak efficiency usually takes 4 to 8 weeks as we refine keywords, bids, audiences, and ad copy based on real performance data.',
  },
  {
    question: 'Do you manage Shopping and YouTube campaigns as well?',
    answer:
      'Yes. We manage the full Google Ads ecosystem including Search, Shopping, Performance Max, Display, YouTube, and Discovery campaigns. Our strategy determines which campaign types align best with your objectives.',
  },
  {
    question: 'How do you track conversions and measure ROI?',
    answer:
      'We implement comprehensive conversion tracking through Google Tag Manager, Google Analytics 4, and direct CRM integrations when available. Every lead, sale, and phone call is attributed back to the campaign and keyword that generated it.',
  },
  {
    question: 'Will I own the Google Ads account?',
    answer:
      'Absolutely. Your Google Ads account is yours. We work within your account using manager access, so you retain full ownership of all campaign data, history, and assets if you ever choose to part ways.',
  },
];

export default function GoogleAdsPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Google Ads Management Services',
    description: metadata.description,
    provider: {
      '@type': 'Organization',
      name: 'Reputation 500',
      url: SITE_URL,
    },
    serviceType: 'Google Ads Management',
    areaServed: 'Worldwide',
    url: `${SITE_URL}/services/performance-marketing/google-ads`,
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
            Google Ads Management
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Turn ad spend into predictable revenue. We build and optimize Google Ads campaigns that
            capture high-intent searches, lower your cost per acquisition, and scale profitably as
            your business grows.
          </p>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <SectionHeading subtitle="The Problem">
                Wasted Ad Spend With No Clear Return
              </SectionHeading>
              <p className="text-gray-600 mt-4">
                Too many businesses pour money into Google Ads without a structured strategy. Broad
                keywords bleed budget, poor landing pages tank conversion rates, and a lack of proper
                tracking makes it impossible to know which campaigns actually generate revenue. The
                result is a growing ad bill with shrinking returns.
              </p>
            </div>
            <div>
              <SectionHeading subtitle="The Solution">
                Data-Driven Campaigns Built for ROI
              </SectionHeading>
              <p className="text-gray-600 mt-4">
                Reputation 500 builds Google Ads campaigns from the ground up with profitability as
                the target metric. We focus on high-intent keywords, tight account structures,
                rigorous A/B testing, and full-funnel conversion tracking. Every dollar is accounted
                for, and every optimization decision is backed by data.
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
        title="Ready to Make Google Ads Profitable?"
        description="Get a free account audit and discover how much revenue you are leaving on the table."
        buttonText="Get Your Free Account Audit"
        buttonHref="/contact"
      />
    </>
  );
}
