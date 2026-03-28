import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Accordion from '@/components/ui/Accordion'
import CTABanner from '@/components/ui/CTABanner'
import ServiceCard from '@/components/ui/ServiceCard'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL, SERVICES_DATA } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Performance Marketing That Delivers Measurable ROI | Reputation 500',
  description:
    'ROI-driven performance marketing across Google Ads, Meta Ads, LinkedIn Ads, and programmatic channels. Data-backed paid media campaigns that protect your brand and drive qualified leads.',
  alternates: { canonical: `${SITE_URL}/services/performance-marketing` },
}

const valueProps = [
  {
    icon: 'fa-chart-line',
    title: 'ROI-First Strategy',
    description:
      'Every dollar of ad spend is tied to a measurable business outcome. We optimize for revenue and pipeline, not vanity metrics.',
  },
  {
    icon: 'fa-bullseye',
    title: 'Precision Audience Targeting',
    description:
      'We combine first-party data, intent signals, and lookalike modeling to reach buyers at the exact moment they are ready to act.',
  },
  {
    icon: 'fa-shield-halved',
    title: 'Brand-Safe Campaigns',
    description:
      'Reputation-aware ad placement ensures your brand never appears alongside harmful content or competitor attack ads.',
  },
  {
    icon: 'fa-arrows-rotate',
    title: 'Continuous Optimization',
    description:
      'Real-time bid management, A/B creative testing, and weekly performance reviews keep campaigns improving every cycle.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Audit & Strategy',
    description:
      'We analyze your current ad accounts, competitor landscape, and attribution setup. Then we build a channel strategy aligned with your growth targets and reputation goals.',
  },
  {
    number: '02',
    title: 'Campaign Build & Launch',
    description:
      'Our media buyers create tightly structured campaigns with custom audiences, compelling ad creative, and conversion-optimized landing pages across all selected channels.',
  },
  {
    number: '03',
    title: 'Optimize & Scale',
    description:
      'Weekly optimization sprints refine bidding, audiences, and creative. When we find winning combinations, we scale spend intelligently to maximize return without diminishing efficiency.',
  },
  {
    number: '04',
    title: 'Report & Iterate',
    description:
      'Transparent dashboards show exactly where every dollar goes. Monthly strategy reviews identify new opportunities and align campaigns with evolving business priorities.',
  },
]

const faqs = [
  {
    title: 'How does performance marketing support online reputation management?',
    content:
      'Performance marketing gives you immediate control over what audiences see when they encounter your brand. Branded search ads ensure your messaging appears above organic results, including any negative content. Social ads amplify positive stories, reviews, and case studies. Display retargeting keeps your best content in front of prospects who have already researched your company. Together, these tactics create a paid shield that complements your organic reputation strategy.',
  },
  {
    title: 'What platforms do you run paid campaigns on?',
    content:
      'We manage campaigns across Google Ads (Search, Display, Shopping, YouTube, Performance Max), Meta Ads (Facebook and Instagram), LinkedIn Ads, Microsoft Advertising, TikTok Ads, X Ads, and programmatic display and video networks. Channel selection is based on where your target audience is most active and where we can deliver the strongest return on ad spend.',
  },
  {
    title: 'What kind of budget do I need for performance marketing?',
    content:
      'Effective budgets vary by industry and competitive landscape. Most of our clients invest between EUR 3,000 and EUR 50,000 per month in ad spend, plus management fees. During our free consultation we provide budget recommendations based on your goals, target cost per acquisition, and market conditions so you can plan with confidence.',
  },
  {
    title: 'How quickly will I see results from paid advertising?',
    content:
      'Paid campaigns can be live within 5 to 10 business days of engagement. Initial performance data starts flowing within the first week of launch. Meaningful optimization requires 4 to 6 weeks of data collection. Most clients see their strongest month-over-month improvements between months 2 and 4 as our algorithms and creative testing mature.',
  },
  {
    title: 'How do you measure and report on campaign performance?',
    content:
      'We track key metrics including impressions, click-through rate, cost per click, conversion rate, cost per acquisition, return on ad spend, and brand lift. Every client receives a real-time dashboard plus a monthly performance review with actionable insights. We also implement server-side conversion tracking and multi-touch attribution to ensure accuracy.',
  },
  {
    title: 'Can you take over campaigns I am already running?',
    content:
      'Absolutely. We begin with a comprehensive audit of your existing ad accounts to identify immediate efficiency gains. We then restructure campaigns where needed while preserving historical data and learnings. Most clients see a 20-40% improvement in cost efficiency within the first 60 days of our management.',
  },
]

export default function PerformanceMarketingPage() {
  const subServices = SERVICES_DATA['performance-marketing'].subServices

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Performance Marketing Services',
    description:
      'ROI-driven performance marketing across Google Ads, Meta Ads, LinkedIn Ads, and programmatic channels. Data-backed paid media campaigns that protect your brand and drive qualified leads.',
    provider: {
      '@type': 'Organization',
      name: 'Reputation 500',
      url: SITE_URL,
    },
    areaServed: 'Worldwide',
    serviceType: 'Performance Marketing',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.title,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.content,
      },
    })),
  }

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* ── Hero ── */}
      <section className="bg-white pt-28 lg:pt-36 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: 'Performance Marketing' },
            ]}
          />

          <div className="max-w-3xl reveal">
            <h1
              className="text-4xl lg:text-5xl font-bold text-[#000] mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Performance Marketing That Delivers Measurable ROI
            </h1>
            <p
              className="text-lg text-[#555] leading-relaxed mb-8"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Stop guessing where your ad budget goes. Reputation 500 builds data-driven
              paid media campaigns across Google, Meta, LinkedIn, and programmatic channels
              that turn every euro of spend into trackable revenue, qualified leads, and
              stronger brand perception.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#004AAD] text-white font-semibold rounded-md hover:bg-[#003a8a] transition-colors"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Get a Free Campaign Audit
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-[#004AAD] text-[#004AAD] font-semibold rounded-md hover:bg-[#004AAD] hover:text-white transition-colors"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Value Props ── */}
      <section className="bg-[#F5F7FA] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#000] mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Why Brands Trust Us With Their Ad Spend
            </h2>
            <p className="text-[#555] max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
              Performance marketing without reputation intelligence is just buying clicks.
              We combine media buying expertise with brand-safety controls that protect
              your name while driving growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="bg-white p-6 rounded-xl border border-[#004AAD]/15 hover:border-[#004AAD]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#004AAD]/10 text-[#004AAD] mb-4">
                  <i className={`fas ${prop.icon} text-xl`} />
                </div>
                <h3
                  className="text-lg font-bold text-[#000] mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {prop.title}
                </h3>
                <p className="text-sm text-[#555] leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Content Section (Two Columns) ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-left">
              <h2
                className="text-3xl font-bold text-[#000] mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Paid Media That Protects Your Reputation While Scaling Revenue
              </h2>
              <div className="space-y-4 text-[#555] leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                <p>
                  Paid media is the fastest lever for controlling what people see when they
                  discover your brand. While organic strategies build over months, a
                  well-structured Google Ads campaign can place your best messaging above
                  negative search results within days. A Meta retargeting campaign can
                  re-engage warm prospects with customer testimonials and case studies that
                  reinforce trust.
                </p>
                <p>
                  Our team manages campaigns across every major paid channel from a single,
                  coordinated strategy. We align ad messaging with your broader reputation
                  narrative so that every touchpoint, from the first impression to the final
                  conversion, tells a consistent brand story.
                </p>
                <p>
                  Transparency is non-negotiable. You own every ad account, every pixel, and
                  every piece of creative we produce. Real-time dashboards, clear attribution
                  models, and monthly strategy sessions keep you in control of where your
                  budget goes and why.
                </p>
              </div>
            </div>

            <div className="reveal-right">
              <div className="bg-[#F5F7FA] rounded-xl border border-[#004AAD]/15 aspect-[4/3] flex items-center justify-center">
                <div className="text-center p-8">
                  <i className="fas fa-chart-pie text-5xl text-[#004AAD]/30 mb-4" />
                  <p className="text-sm text-[#555]">Campaign Performance Dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sub-Services Grid ── */}
      <section className="bg-[#F5F7FA] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#000] mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our Performance Marketing Channels
            </h2>
            <p className="text-[#555] max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
              Each channel is managed by certified specialists who understand the platform
              deeply and how it fits into your integrated growth strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {subServices.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.description}
                href={`/services/performance-marketing/${service.slug}`}
                icon="fa-rocket"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Steps ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#000] mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              How We Drive Results in 4 Steps
            </h2>
            <p className="text-[#555] max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
              A proven, transparent process that takes you from audit to scale, with
              continuous optimization at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {processSteps.map((step) => (
              <div key={step.number} className="relative">
                <div className="text-5xl font-bold text-[#004AAD]/10 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  {step.number}
                </div>
                <h3
                  className="text-lg font-bold text-[#000] mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-[#555] leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#F5F7FA] py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#000] mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Performance Marketing FAQs
            </h2>
          </div>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <CTABanner
        title="Ready to Turn Ad Spend Into Predictable Growth?"
        description="Book a free campaign audit and discover how much more ROI your paid media budget can deliver."
        buttonText="Get Your Free Audit"
      />
    </>
  )
}
