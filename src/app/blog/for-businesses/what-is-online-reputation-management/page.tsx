import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'What Is Online Reputation Management and Why Does Every Business Need It? | Reputation 500',
  description: 'Learn what online reputation management (ORM) is, how it works, and why 97% of consumers check reviews before buying. A complete guide for business owners.',
  alternates: { canonical: `${SITE_URL}/blog/for-businesses/what-is-online-reputation-management` },
  openGraph: {
    title: 'What Is Online Reputation Management and Why Does Every Business Need It?',
    description: 'Learn what online reputation management (ORM) is, how it works, and why 97% of consumers check reviews before buying.',
  },
}

export default function ArticlePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Is Online Reputation Management and Why Does Every Business Need It?',
    description: metadata.description,
    author: { '@type': 'Organization', name: 'Reputation 500', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'Reputation 500', url: SITE_URL },
    datePublished: '2026-04-05',
    dateModified: '2026-04-05',
    url: `${SITE_URL}/blog/for-businesses/what-is-online-reputation-management`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does online reputation management include?',
        acceptedAnswer: { '@type': 'Answer', text: 'ORM includes monitoring brand mentions across search engines, review platforms, and social media; managing and responding to customer reviews; creating positive content to dominate search results; suppressing negative or misleading content; and building authority through digital PR and media placements.' },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to see results from reputation management?',
        acceptedAnswer: { '@type': 'Answer', text: 'Initial improvements in review scores and search result positioning typically appear within 30-60 days. Significant changes to page-one search results usually take 3-6 months. Full reputation transformation — including sustained positive coverage and review improvement — generally requires 6-12 months of consistent effort.' },
      },
      {
        '@type': 'Question',
        name: 'Is online reputation management only for companies with a bad reputation?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. Proactive ORM is actually most valuable for businesses with good reputations that want to protect and strengthen them. Waiting until a crisis hits is far more expensive and difficult than maintaining a positive presence continuously. The best ORM strategies are preventive, not reactive.' },
      },
      {
        '@type': 'Question',
        name: 'How does online reputation management affect revenue?',
        acceptedAnswer: { '@type': 'Answer', text: 'A one-star increase on platforms like Google or Yelp can boost revenue by 5-9%. Businesses with ratings above 4 stars earn up to 28% more revenue than competitors with lower ratings. Conversely, 94% of consumers have avoided a business because of negative reviews, directly translating to lost sales.' },
      },
      {
        '@type': 'Question',
        name: 'Can small businesses benefit from reputation management?',
        acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Small businesses often benefit the most because they rely heavily on local search and word-of-mouth. A single negative review has a proportionally larger impact on a small business than on a global corporation. Even basic ORM practices like responding to reviews and monitoring Google results can significantly impact a small business\'s customer acquisition.' },
      },
    ],
  }

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="bg-bg-dark pt-24 lg:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs light items={[
            { label: 'Blog', href: '/blog' },
            { label: 'For Businesses', href: '/blog/for-businesses' },
            { label: 'What Is ORM?' },
          ]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              What Is Online Reputation Management and Why Does Every Business Need It?
            </h1>
            <p className="text-gray-400 text-sm">Published April 5, 2026 · By Reputation 500 Team</p>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Before a customer visits your website, walks into your store, or picks up the phone to call you, they have already formed an opinion about your business. That opinion comes from Google search results, online reviews, social media mentions, and — increasingly — answers from AI assistants like ChatGPT and Gemini. <strong>Online reputation management (ORM)</strong> is the discipline of shaping what people find when they look you up.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            According to recent data, <strong>97% of consumers read online reviews before making a purchase decision</strong>, and 85% say a business&apos;s average star rating is a top factor in whether they engage. If your online presence doesn&apos;t reflect the quality of your business, you are losing customers before you even get a chance to compete.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            What Online Reputation Management Actually Involves
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            ORM is not a single tactic — it is an integrated strategy that covers every digital touchpoint where your business appears. At Reputation 500, we break it into five core pillars:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>Search result optimization</strong> — Controlling what appears on the first page of Google when someone searches your brand name. This includes creating authoritative content, building high-quality backlinks, and suppressing negative or irrelevant results.</li>
            <li><strong>Review management</strong> — Generating authentic positive reviews, responding to negative feedback professionally, and maintaining ratings above 4.5 stars across platforms like Google, Trustpilot, and industry-specific sites.</li>
            <li><strong>Brand monitoring</strong> — Tracking every mention of your business across the web, social media, news outlets, and forums so you can respond quickly to threats and opportunities.</li>
            <li><strong>Digital PR and media coverage</strong> — Securing features in respected publications like Forbes, Entrepreneur, and industry outlets to build authority and dominate search results with positive coverage.</li>
            <li><strong>AI visibility management</strong> — Ensuring your business appears accurately and favorably when AI assistants answer questions about your industry, products, or services.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Why Reputation Management Is No Longer Optional
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            A decade ago, reputation management was something only large corporations worried about. Today, businesses of every size are vulnerable. The shift happened because of three converging forces:
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Search engines are the new storefront.</strong> When a potential customer searches your business name, Google&apos;s first page is their first impression. If that page contains negative reviews, unflattering news articles, or outdated information, <strong>74% of consumers will not proceed with a purchase</strong>. Your search results are your most visible marketing asset — or your biggest liability.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Reviews drive revenue directly.</strong> Research consistently shows that a one-star increase on platforms like Yelp or Google can boost revenue by 5-9%. Businesses with ratings between 3.5 and 4.5 stars earn <strong>28% more revenue</strong> than those with lower ratings. Conversely, 86% of consumers would pass on a great deal from a company with negative reviews.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>AI is rewriting the rules.</strong> With the rise of ChatGPT, Gemini, and Perplexity, consumers are getting instant answers about businesses without ever visiting a website. If AI platforms are pulling from outdated, negative, or inaccurate sources, your reputation is being shaped without your input. <Link href="/services/ai-optimization" className="text-[#004AAD] hover:underline">AI optimization</Link> is now a critical component of any ORM strategy.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            The Real Cost of Ignoring Your Online Reputation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The financial impact of a neglected reputation is measurable. A single negative review can cost a business up to 30 potential customers. Three or more negative reviews increase the risk of losing customers to <strong>59%</strong>. Four or more negative articles push that number to 70%.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            But lost customers are only the beginning. A <Link href="/blog/for-businesses/bad-online-reputation-costs" className="text-[#004AAD] hover:underline">damaged online reputation</Link> also means higher customer acquisition costs (you spend more on ads to compensate for low trust), difficulty attracting talent (69% of job seekers reject companies with bad reputations), and reduced bargaining power with partners and investors who conduct their own due diligence online.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Proactive vs. Reactive Reputation Management
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Most businesses only think about their reputation after something goes wrong — a viral complaint, a negative news article, or a sudden drop in ratings. This reactive approach is significantly more expensive and less effective than proactive management.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Proactive ORM</strong> builds a foundation of positive content, strong review profiles, and authoritative media coverage <em>before</em> a crisis hits. When negative content does appear, it competes against a wall of established positive results rather than dominating an empty or weak search presence. Think of it as reputation insurance — the investment is modest compared to the cost of recovery.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            At <Link href="/services/for-businesses/business-reputation-management" className="text-[#004AAD] hover:underline">Reputation 500</Link>, our approach combines both: we build proactive defenses while maintaining real-time monitoring and rapid response capabilities for emerging threats.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            How ORM Works in Practice
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            A professional reputation management engagement typically follows a structured process:
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>Reputation audit</strong> — A thorough analysis of your current online presence, including search results, reviews, social media, and AI mentions. This establishes a baseline and identifies immediate threats and opportunities.</li>
            <li><strong>Strategy development</strong> — Based on the audit, a customized plan that addresses weaknesses and builds on strengths. This includes content creation, <Link href="/services/seo" className="text-[#004AAD] hover:underline">SEO strategy</Link>, review generation workflows, and media outreach targets.</li>
            <li><strong>Execution</strong> — Implementation across all channels: publishing authoritative content, securing <Link href="/services/for-businesses/digital-pr" className="text-[#004AAD] hover:underline">media placements</Link>, optimizing review profiles, building backlinks, and creating assets that rank for your brand name.</li>
            <li><strong>Monitoring and refinement</strong> — Continuous tracking of search results, review scores, mention sentiment, and AI visibility with monthly reporting and strategy adjustments based on performance data.</li>
          </ol>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Industries That Need Reputation Management Most
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            While every business benefits from ORM, certain industries face heightened reputation risks: <strong>healthcare</strong> (patient reviews and regulatory scrutiny), <strong>financial services</strong> (trust is the product), <strong>real estate</strong> (high-value decisions driven by agent reputation), <strong>hospitality</strong> (review-dependent booking decisions), and <strong>professional services</strong> (clients research extensively before engaging). If your business operates in a high-trust industry, reputation management is not a luxury — it is a competitive necessity.
          </p>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mt-16 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">What does online reputation management include?</h3>
              <p className="text-gray-700">ORM includes monitoring brand mentions across search engines, review platforms, and social media; managing and responding to customer reviews; creating positive content to dominate search results; suppressing negative or misleading content; and building authority through digital PR and media placements.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">How long does it take to see results from reputation management?</h3>
              <p className="text-gray-700">Initial improvements in review scores and search result positioning typically appear within 30-60 days. Significant changes to page-one search results usually take 3-6 months. Full reputation transformation generally requires 6-12 months of consistent effort.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">Is online reputation management only for companies with a bad reputation?</h3>
              <p className="text-gray-700">No. Proactive ORM is actually most valuable for businesses with good reputations that want to protect and strengthen them. Waiting until a crisis hits is far more expensive and difficult than maintaining a positive presence continuously.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">How does online reputation management affect revenue?</h3>
              <p className="text-gray-700">A one-star increase on platforms like Google or Yelp can boost revenue by 5-9%. Businesses with ratings above 4 stars earn up to 28% more revenue than competitors. Conversely, 94% of consumers have avoided a business because of negative reviews.</p>
            </div>
            <div className="pb-6">
              <h3 className="font-bold text-lg mb-2">Can small businesses benefit from reputation management?</h3>
              <p className="text-gray-700">Absolutely. Small businesses often benefit the most because they rely heavily on local search and word-of-mouth. A single negative review has a proportionally larger impact on a small business than on a global corporation.</p>
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-[#f8fafc] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Ready to Take Control of Your Online Reputation?
          </h2>
          <p className="text-gray-600 mb-6">
            Get a free reputation audit and discover exactly what customers, partners, and AI engines see when they search for your business.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center px-8 py-3.5 text-base font-semibold rounded-lg">
            Book a Free Consultation
          </Link>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Related Articles</h2>
          <div className="space-y-4">
            <Link href="/blog/for-businesses/how-online-reviews-impact-revenue" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">How Online Reviews Directly Impact Your Revenue →</span>
            </Link>
            <Link href="/blog/for-businesses/bad-online-reputation-costs" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">What Happens When Your Business Has a Bad Online Reputation? →</span>
            </Link>
            <Link href="/blog/for-businesses/ai-search-reshaping-business-reputation" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">How AI Search Is Reshaping Business Reputation →</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
