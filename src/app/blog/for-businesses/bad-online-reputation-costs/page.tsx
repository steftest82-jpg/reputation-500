import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'What Happens When Your Business Has a Bad Online Reputation? Real Costs Exposed | Reputation 500',
  description: '92% of consumers avoid businesses with bad reviews. Discover the hidden costs of a damaged reputation — from lost customers to talent drain to higher ad spend.',
  alternates: { canonical: `${SITE_URL}/blog/for-businesses/bad-online-reputation-costs` },
  openGraph: {
    title: 'What Happens When Your Business Has a Bad Online Reputation? Real Costs Exposed',
    description: '92% of consumers avoid businesses with bad reviews. Discover the hidden costs of a damaged reputation.',
  },
}

export default function ArticlePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Happens When Your Business Has a Bad Online Reputation? Real Costs Exposed',
    description: metadata.description,
    author: { '@type': 'Organization', name: 'Reputation 500', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'Reputation 500', url: SITE_URL },
    datePublished: '2026-04-05',
    dateModified: '2026-04-05',
    url: `${SITE_URL}/blog/for-businesses/bad-online-reputation-costs`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much money does a bad reputation cost a business?',
        acceptedAnswer: { '@type': 'Answer', text: 'A restaurant with $1 million in annual revenue can lose approximately $180,000 per year due to a poor online reputation. More broadly, businesses with ratings below 3 stars lose up to 86% of prospective customers. The total cost includes lost sales, higher customer acquisition costs, reduced talent pool, and damaged partner relationships.' },
      },
      {
        '@type': 'Question',
        name: 'How many customers does one negative review cost?',
        acceptedAnswer: { '@type': 'Answer', text: 'A single negative review can cost up to 30 potential customers. The damage scales rapidly: three negative reviews increase customer loss risk to 59%, and four or more negative articles push it to 70%. The compounding effect means early intervention is critical.' },
      },
      {
        '@type': 'Question',
        name: 'Can a bad online reputation be fixed?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes, but it requires a strategic, sustained effort. Professional reputation management can improve ratings, suppress negative search results, and rebuild trust through media coverage and positive content. Most businesses see measurable improvement within 3-6 months, with significant transformation in 6-12 months.' },
      },
      {
        '@type': 'Question',
        name: 'Does a bad reputation affect hiring?',
        acceptedAnswer: { '@type': 'Answer', text: '69% of job seekers would not accept a position at a company with a bad reputation, even if they were unemployed. This forces businesses with damaged reputations to offer higher salaries, extend hiring timelines, and settle for less qualified candidates — all of which increase costs.' },
      },
    ],
  }

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />

      <section className="bg-bg-dark pt-24 lg:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs light items={[
            { label: 'Blog', href: '/blog' },
            { label: 'For Businesses', href: '/blog/for-businesses' },
            { label: 'Costs of Bad Reputation' },
          ]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              What Happens When Your Business Has a Bad Online Reputation? Real Costs Exposed
            </h1>
            <p className="text-gray-400 text-sm">Published April 5, 2026 · By Reputation 500 Team</p>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Most business owners know that a bad reputation is not ideal. What they do not know is exactly how much it is costing them — in dollars, in talent, in partnerships, and in opportunities they never even see. The damage from a poor online reputation is not limited to a few lost customers. It is a systemic drain on every part of your business, and it compounds over time.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>92% of consumers actively avoid businesses with bad reviews.</strong> That is not a soft preference — it is a hard filter. Before a potential customer ever contacts you, they have already decided whether to trust you based on what Google, review sites, and AI assistants say about your company.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            The Direct Revenue Impact
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The financial consequences of a damaged reputation are not abstract. A single negative review can cost your business <strong>up to 30 potential customers</strong>. Scale that across months and the numbers become alarming:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li>Three negative reviews increase the risk of lost customers to <strong>59.2%</strong></li>
            <li>Four or more negative articles push customer loss risk to <strong>70%</strong></li>
            <li>A restaurant with $1 million in annual revenue loses approximately <strong>$180,000 per year</strong> from a poor reputation</li>
            <li>Negative reviews can reduce <Link href="/blog/for-businesses/reputation-and-conversion-rates" className="text-[#004AAD] hover:underline">conversion rates</Link> by as much as <strong>40%</strong></li>
            <li>Businesses below a 3-star rating lose <strong>86% of prospective customers</strong> before any interaction occurs</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            These are not worst-case scenarios. They are the documented average impact across thousands of businesses studied by researchers at Harvard Business School, UC Berkeley, and independent analytics firms.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            The Hidden Cost: Higher Customer Acquisition Expenses
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            When trust is low, you have to spend more to earn each customer. Businesses with poor reputations consistently report higher cost-per-click on paid ads, lower organic click-through rates, and worse conversion rates across all channels. You are essentially paying a &quot;reputation tax&quot; on every marketing dollar.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Consider two competitors running identical <Link href="/services/performance-marketing/google-ads" className="text-[#004AAD] hover:underline">Google Ads</Link> campaigns. The one with a 4.7-star rating and strong reviews will convert at 2-3x the rate of the one with a 3.2-star rating. Same ad spend, dramatically different results. The low-rated business needs to spend 2-3x more to achieve the same revenue — money that could have been invested in growth instead of compensation for trust deficits.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            The Talent Drain You Cannot See
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            A damaged reputation does not just repel customers — it repels the people you need to build your business. <strong>69% of job seekers would not accept a position at a company with a bad reputation, even if they were currently unemployed.</strong> The implications are severe:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li>Longer hiring timelines as top candidates self-select out</li>
            <li>Higher salary demands from those willing to take the risk</li>
            <li>Lower employee morale and higher turnover among existing staff who see negative coverage</li>
            <li>Reduced quality of applicant pool, forcing compromises on talent standards</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Platforms like Glassdoor and LinkedIn have made employer reputation transparent. A potential hire will read your company reviews alongside your customer reviews, and both feed into their decision. Companies investing in <Link href="/services/for-businesses/business-reputation-management" className="text-[#004AAD] hover:underline">business reputation management</Link> are not just protecting revenue — they are protecting their ability to build strong teams.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            The Partnership and Investor Impact
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Before a potential partner, investor, or enterprise client agrees to work with you, they will search your company name. If the first page of Google shows negative press, customer complaints, or a rating below industry standards, the conversation often ends before it begins.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            This due diligence effect is especially damaging because you never know about the opportunities you missed. The investor who moved on, the enterprise client who chose a competitor, the strategic partner who decided the reputational risk was not worth it — these losses are invisible but often larger than direct customer losses.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            The AI Amplification Effect
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            In 2026, AI assistants are amplifying reputation damage in ways that were not possible even two years ago. When someone asks ChatGPT or Gemini about your company, the AI synthesizes information from across the web — including negative reviews, critical articles, and complaint forums. Unlike Google, where negative results can be buried on page two, <strong>AI delivers a single summary that reflects the overall sentiment</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            If your reputation is predominantly negative, that is what AI will report to every person who asks. And unlike search results, users take AI answers at face value. <Link href="/blog/for-businesses/ai-search-reshaping-business-reputation" className="text-[#004AAD] hover:underline">Managing your AI visibility</Link> is now an essential part of reputation recovery.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            How to Stop the Bleeding
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The good news is that reputation damage is reversible. But it requires professional strategy and sustained execution. At <Link href="/services/for-businesses" className="text-[#004AAD] hover:underline">Reputation 500</Link>, the recovery process begins with a comprehensive audit to quantify the damage, followed by a multi-channel strategy that addresses search results, reviews, media coverage, and AI visibility simultaneously.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The sooner you act, the less it costs. Reputation damage compounds over time — every day with negative content on page one means more lost customers, more missed opportunities, and a deeper hole to climb out of.
          </p>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mt-16 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">How much money does a bad reputation cost a business?</h3>
              <p className="text-gray-700">A restaurant with $1 million in annual revenue can lose approximately $180,000 per year due to a poor online reputation. The total cost includes lost sales, higher customer acquisition costs, reduced talent pool, and damaged partner relationships.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">How many customers does one negative review cost?</h3>
              <p className="text-gray-700">A single negative review can cost up to 30 potential customers. Three negative reviews increase loss risk to 59%, and four or more negative articles push it to 70%.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">Can a bad online reputation be fixed?</h3>
              <p className="text-gray-700">Yes, with strategic, sustained effort. Professional reputation management can improve ratings, suppress negative results, and rebuild trust. Most businesses see measurable improvement within 3-6 months.</p>
            </div>
            <div className="pb-6">
              <h3 className="font-bold text-lg mb-2">Does a bad reputation affect hiring?</h3>
              <p className="text-gray-700">69% of job seekers would not accept a position at a company with a bad reputation, even if unemployed. This forces higher salaries, longer timelines, and lower talent quality.</p>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-[#f8fafc] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Find Out What Your Reputation Is Really Costing You
          </h2>
          <p className="text-gray-600 mb-6">
            Our team will audit your online presence and quantify the revenue impact. Most business owners are surprised by what they find.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center px-8 py-3.5 text-base font-semibold rounded-lg">
            Book a Free Consultation
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Related Articles</h2>
          <div className="space-y-4">
            <Link href="/blog/for-businesses/how-online-reviews-impact-revenue" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">How Online Reviews Directly Impact Your Revenue →</span>
            </Link>
            <Link href="/blog/for-businesses/cost-of-negative-google-results" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">The True Cost of Negative Google Search Results →</span>
            </Link>
            <Link href="/blog/for-businesses/warning-signs-reputation-at-risk" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">10 Warning Signs Your Business Reputation Is at Risk →</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
