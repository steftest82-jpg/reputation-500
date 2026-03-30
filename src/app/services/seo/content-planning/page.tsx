import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionHeading from '@/components/ui/SectionHeading';
import Accordion from '@/components/ui/Accordion';
import ServiceCTA from '@/components/ui/ServiceCTA';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Content Planning & Strategy Services | SEO Roadmaps | Reputation 500',
  description:
    'Data-driven content planning that maps every article to a business goal. Reputation 500 builds editorial calendars, topic clusters, and keyword roadmaps that accelerate organic growth.',
};

const breadcrumbItems = [
  { label: 'Services', href: '/services' },
  { label: 'SEO', href: '/services/seo' },
  { label: 'Content Planning' },
];

const steps = [
  {
    title: 'Audience & Competitor Analysis',
    description:
      'We research your target audience, map buyer journeys, and dissect competitor content strategies to find untapped opportunities.',
  },
  {
    title: 'Topic Cluster Architecture',
    description:
      'Pillar pages and supporting clusters are designed to build topical authority and create clear internal linking pathways.',
  },
  {
    title: 'Editorial Calendar Creation',
    description:
      'A prioritized publishing schedule aligns content with seasonal trends, product launches, and keyword difficulty timelines.',
  },
  {
    title: 'Performance Tracking & Iteration',
    description:
      'Quarterly reviews measure content performance against KPIs, and the roadmap is adjusted to double down on what works.',
  },
];

const deliverables = [
  'Full keyword universe mapped to buyer journey stages',
  'Topic cluster architecture with pillar and spoke mapping',
  '90-day editorial calendar with publishing priorities',
  'Content gap analysis against top 5 competitors',
  'Internal linking strategy and site architecture recommendations',
  'Quarterly content performance review and roadmap updates',
];

const faqs = [
  {
    question: 'What is the difference between content planning and content writing?',
    answer:
      'Content planning is the strategic layer that decides what to write, why, and when. It covers keyword research, topic prioritization, editorial calendars, and cluster architecture. Content writing is the execution of that plan, turning briefs into finished articles. Both are essential but serve different functions.',
  },
  {
    question: 'How far in advance do you plan content?',
    answer:
      'We typically build a 90-day rolling editorial calendar with a high-level 12-month roadmap. This gives your team enough runway for production while staying flexible enough to respond to trends, algorithm updates, or business pivots.',
  },
  {
    question: 'What data do you use to choose topics?',
    answer:
      'Our planning process combines keyword search volume, competition difficulty, click-through rate potential, competitor gap analysis, audience intent mapping, and your business objectives. Every topic earns its place on the calendar by meeting multiple criteria.',
  },
  {
    question: 'Do you handle content planning for existing blogs with published content?',
    answer:
      'Yes. We start with a content audit to evaluate what you already have, identify refresh opportunities, spot cannibalization issues, and find gaps. The plan then integrates new content production with optimization of your existing library.',
  },
  {
    question: 'How does content planning improve ROI on content writing?',
    answer:
      'Without a plan, teams often publish reactively, targeting low-value keywords or duplicating effort. A strategic plan ensures every piece serves a purpose, targets the right intent, and fits into a broader topical authority structure. This focus dramatically improves ranking speed and reduces wasted production costs.',
  },
];

export default function ContentPlanningPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Content Planning & Strategy Services',
    description: metadata.description,
    provider: {
      '@type': 'Organization',
      name: 'Reputation 500',
      url: SITE_URL,
    },
    serviceType: 'Content Planning',
    areaServed: 'Worldwide',
    url: `${SITE_URL}/services/seo/content-planning`,
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
            Content Planning & Strategy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Stop guessing what to publish next. Our data-driven content plans map every article to a
            keyword opportunity and every keyword to a business goal, so nothing you publish goes to
            waste.
          </p>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <SectionHeading subtitle="The Problem">
                Publishing Without a Plan Burns Budget
              </SectionHeading>
              <p className="text-gray-900 mt-4">
                Many teams publish content based on gut feel or trending topics with no connection to
                search demand. The result is a blog filled with random articles that cannibalize each
                other, miss high-value keywords, and fail to build the topical authority search
                engines reward. Without a roadmap, content marketing becomes an expense rather than
                an investment.
              </p>
            </div>
            <div>
              <SectionHeading subtitle="The Solution">
                A Strategic Roadmap Built on Data
              </SectionHeading>
              <p className="text-gray-900 mt-4">
                Reputation 500 creates content plans grounded in keyword research, competitor
                analysis, and buyer journey mapping. We architect topic clusters that build authority,
                prioritize production based on impact potential, and deliver an editorial calendar
                your team can execute with confidence. Every piece of content has a purpose and a
                measurable target.
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
      <ServiceCTA serviceName="Content Planning" />
    </>
  );
}
