import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionHeading from '@/components/ui/SectionHeading';
import Accordion from '@/components/ui/Accordion';
import ServiceCTA from '@/components/ui/ServiceCTA';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'SEO Audit Services | Technical & On-Page Analysis | Reputation 500',
  description:
    'Uncover the technical, on-page, and off-page issues holding your site back. Reputation 500 delivers comprehensive SEO audits with prioritized, actionable recommendations.',
  alternates: { canonical: `${SITE_URL}/services/seo/seo-audit` },
  openGraph: {
    title: 'SEO Audit Services | Technical & On-Page Analysis | Reputation 500',
    description:
      'Uncover the technical, on-page, and off-page issues holding your site back. Reputation 500 delivers comprehensive SEO audits with prioritized, actionable recommendations.',
  },
};

const breadcrumbItems = [
  { label: 'Services', href: '/services' },
  { label: 'SEO', href: '/services/seo' },
  { label: 'SEO Audit' },
];

const steps = [
  {
    title: 'Technical Crawl',
    description:
      'We run a full-site crawl to surface indexing issues, broken links, speed bottlenecks, mobile usability problems, and crawl budget waste.',
  },
  {
    title: 'On-Page Analysis',
    description:
      'Every key page is evaluated for title tags, meta descriptions, heading structure, keyword usage, internal linking, and content quality.',
  },
  {
    title: 'Off-Page & Authority Review',
    description:
      'Your backlink profile is analyzed for link quality, toxic signals, anchor text distribution, and competitive authority gaps.',
  },
  {
    title: 'Prioritized Action Plan',
    description:
      'Findings are organized into a prioritized roadmap ranked by impact and effort, so your team knows exactly what to fix first.',
  },
];

const deliverables = [
  'Full technical crawl report (indexation, speed, mobile, Core Web Vitals)',
  'On-page SEO scorecard for top 50 priority pages',
  'Backlink profile analysis with toxic link identification',
  'Competitor benchmarking across 3 to 5 key rivals',
  'Keyword cannibalization and content gap report',
  'Prioritized action plan with estimated impact ratings',
];

const faqs = [
  {
    question: 'How long does a full SEO audit take?',
    answer:
      'A comprehensive audit typically takes 2 to 3 weeks depending on site size. Smaller sites under 500 pages can be completed faster, while enterprise sites with thousands of pages may require additional time for thorough analysis.',
  },
  {
    question: 'What tools do you use for the audit?',
    answer:
      'We combine enterprise-grade tools including Screaming Frog, Ahrefs, SEMrush, Google Search Console, PageSpeed Insights, and proprietary analysis frameworks. No single tool tells the full story, which is why we cross-reference data from multiple sources.',
  },
  {
    question: 'Do you fix the issues you find, or just report them?',
    answer:
      'The audit deliverable is a detailed report with a prioritized action plan. We can also implement the recommended fixes through our ongoing SEO retainer services. Many clients use the audit as a starting point for a longer engagement.',
  },
  {
    question: 'How often should we conduct an SEO audit?',
    answer:
      'We recommend a full audit annually, with lighter quarterly check-ups focused on technical health and Core Web Vitals. Sites undergoing major redesigns, migrations, or traffic drops should audit immediately to catch issues early.',
  },
  {
    question: 'Will the audit cover our competitors as well?',
    answer:
      'Yes. Every audit includes a competitor benchmarking section where we compare your technical health, content coverage, and backlink strength against 3 to 5 of your closest organic competitors. This reveals strategic gaps and opportunities.',
  },
];

export default function SeoAuditPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'SEO Audit Services',
    description: metadata.description,
    provider: {
      '@type': 'Organization',
      name: 'Reputation 500',
      url: SITE_URL,
    },
    serviceType: 'SEO Audit',
    areaServed: 'Worldwide',
    url: `${SITE_URL}/services/seo/seo-audit`,
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
            SEO Audit Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Discover exactly what is holding your site back from higher rankings. Our comprehensive
            audits cover technical health, on-page optimization, and off-page authority with a clear,
            prioritized fix-it plan.
          </p>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <SectionHeading subtitle="The Problem">
                Invisible Issues Silently Sabotage Rankings
              </SectionHeading>
              <p className="text-gray-900 mt-4">
                Crawl errors, slow page speeds, duplicate content, thin pages, and toxic backlinks
                can quietly erode your organic visibility over time. Without a systematic audit, these
                issues compound unnoticed while competitors continue to pull ahead in the search
                results.
              </p>
            </div>
            <div>
              <SectionHeading subtitle="The Solution">
                A Complete Diagnostic With a Clear Fix-It Plan
              </SectionHeading>
              <p className="text-gray-900 mt-4">
                Reputation 500 performs a 360-degree SEO audit that examines your site from the
                perspective of search engines, users, and competitors. We document every issue, grade
                its severity, estimate its impact, and deliver a prioritized action plan your team
                can execute immediately to reclaim lost rankings.
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
      <ServiceCTA serviceName="SEO Audit" />
    </>
  );
}
