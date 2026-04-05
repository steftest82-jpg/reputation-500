import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'The First 90 Days of Reputation Management: What to Expect | Reputation 500',
  description: 'A realistic timeline of what happens in the first 90 days of a reputation management campaign. Week-by-week milestones from audit to first results.',
  alternates: { canonical: `${SITE_URL}/blog/for-businesses/first-90-days-reputation-management` },
  openGraph: {
    title: 'The First 90 Days of Reputation Management: What to Expect',
    description: 'A realistic timeline of what happens in the first 90 days of a reputation management campaign.',
  },
}

export default function ArticlePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The First 90 Days of Reputation Management: What to Expect',
    description: metadata.description,
    author: { '@type': 'Organization', name: 'Reputation 500', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'Reputation 500', url: SITE_URL },
    datePublished: '2026-04-05',
    dateModified: '2026-04-05',
    url: `${SITE_URL}/blog/for-businesses/first-90-days-reputation-management`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What happens in the first week of a reputation management campaign?',
        acceptedAnswer: { '@type': 'Answer', text: 'The first week focuses on a comprehensive reputation audit: analyzing your current search results for brand terms, reviewing your profiles across all major platforms, assessing review scores and sentiment, monitoring AI-generated responses about your brand, and identifying immediate threats and opportunities. This audit forms the foundation for the entire strategy.' },
      },
      {
        '@type': 'Question',
        name: 'How soon can I expect to see results from reputation management?',
        acceptedAnswer: { '@type': 'Answer', text: 'Initial results typically appear within 30-60 days, including improved review response rates, new positive reviews, initial content published and indexed, and monitoring systems active. Meaningful search result changes usually take 60-90 days. Significant transformation of page-one results requires 3-6 months of sustained effort.' },
      },
      {
        '@type': 'Question',
        name: 'What should a reputation management strategy include?',
        acceptedAnswer: { '@type': 'Answer', text: 'A comprehensive strategy includes search result optimization (controlling what appears on Google page one), review management (generation and response), content creation and SEO, digital PR and media placements, brand monitoring across all channels, crisis preparedness protocols, AI visibility management, and regular reporting with clear KPIs tied to business outcomes.' },
      },
      {
        '@type': 'Question',
        name: 'What does a reputation audit cover?',
        acceptedAnswer: { '@type': 'Answer', text: 'A thorough reputation audit covers Google search results for your brand name and key personnel, review profiles across all relevant platforms (Google, Yelp, G2, Glassdoor, etc.), social media presence and sentiment, media coverage and news mentions, competitor reputation benchmarking, AI visibility in platforms like ChatGPT and Gemini, and a backlink profile analysis of existing search results.' },
      },
      {
        '@type': 'Question',
        name: 'Can reputation management guarantee results in 90 days?',
        acceptedAnswer: { '@type': 'Answer', text: 'No reputable agency guarantees specific search rankings or review scores within 90 days. What you should expect in 90 days includes a complete strategy deployed and executing, initial improvements in review scores and response rates, first pieces of content and media placements published, monitoring and reporting systems fully operational, and early movement in search result positioning. Transformative results typically require 6-12 months.' },
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
            { label: 'First 90 Days' },
          ]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              The First 90 Days of Reputation Management: What to Expect
            </h1>
            <p className="text-gray-400 text-sm">Published April 5, 2026 · By Reputation 500 Team</p>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            You have decided to invest in <Link href="/services/for-businesses/business-reputation-management" className="text-[#004AAD] hover:underline">professional reputation management</Link>. Now what? One of the biggest sources of frustration for businesses is not knowing what to expect. Without realistic milestones, it is easy to feel anxious about whether your investment is working.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            This article provides a <strong>week-by-week roadmap of what a professional reputation management engagement looks like in the first 90 days</strong> — based on how we structure engagements at Reputation 500. Use it to set expectations, measure your agency&apos;s performance, and understand when patience is warranted versus when to ask hard questions.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Weeks 1-2: The Reputation Audit
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Everything begins with a thorough audit of your current online reputation. This is not a cursory Google search — it is a deep-dive analysis covering:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>Search result analysis</strong> — Documenting every result on pages 1-3 of Google for your brand name, executive names, and brand + keyword combinations. Each result is categorized as positive, neutral, or negative.</li>
            <li><strong>Review profile assessment</strong> — Current ratings, review volume, sentiment trends, and response rates across Google, Yelp, Trustpilot, G2, Glassdoor, and industry-specific platforms.</li>
            <li><strong>Media and social monitoring</strong> — Existing media coverage, social media sentiment, forum discussions, and blog mentions.</li>
            <li><strong>AI visibility check</strong> — How your brand appears when people ask ChatGPT, Gemini, Perplexity, and other AI assistants about your company or industry.</li>
            <li><strong>Competitor benchmarking</strong> — How your reputation compares to direct competitors across all of the above dimensions.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>What you should receive:</strong> A comprehensive audit report with visual documentation (search result screenshots, rating comparisons), clear identification of threats and opportunities, and a prioritized list of issues ranked by impact. At Reputation 500, our audits typically run 25-40 pages and serve as the baseline for measuring all future progress.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Weeks 3-4: Strategy Development
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Based on the audit findings, your agency should present a custom strategy that addresses your specific situation. A credible strategy includes:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>Clear objectives</strong> — Specific, measurable goals: target review scores, search result composition targets, content publication volumes, and media placement goals</li>
            <li><strong>Prioritized action plan</strong> — What gets done first, second, and third, with rationale for the sequence</li>
            <li><strong>Content calendar</strong> — A 90-day plan of articles, media pitches, and content assets with topics and target publications</li>
            <li><strong>Review management plan</strong> — Response protocols, generation campaigns, and platform optimization steps</li>
            <li><strong>Reporting framework</strong> — What metrics will be tracked, how often you will receive updates, and what the dashboard will include</li>
            <li><strong>Crisis preparedness</strong> — Protocols for handling emerging threats, including response templates and escalation procedures</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>What you should receive:</strong> A strategy document you can understand and evaluate, a content calendar for the next 90 days, access to a reporting dashboard, and a clear communication schedule with your account team.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Month 2: Execution Begins
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Month two is when the real work kicks in. Multiple workstreams should be running simultaneously:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>Content production</strong> — First articles published on your blog and guest platforms, all SEO-optimized for brand-relevant search terms</li>
            <li><strong>Digital PR outreach</strong> — Media pitches sent to target publications, initial journalist relationships being built</li>
            <li><strong>Review management</strong> — Response system live and running, review generation campaigns launched, profile optimization completed across all platforms</li>
            <li><strong>SEO and link building</strong> — Technical optimization of owned properties, initial link building to strengthen positive content</li>
            <li><strong>Monitoring active</strong> — Real-time alerts for new reviews, media mentions, and search result changes</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Realistic milestones by day 60:</strong> 4-8 articles published and indexed by Google, review response rate at 100%, initial new review generation (10-30 new positive reviews depending on your industry), first media outreach completed with pitches in progress, and monitoring systems showing daily or weekly data updates.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Month 3: First Measurable Results
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            By the end of month three, you should see tangible evidence that the strategy is working:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>Search results shifting</strong> — New positive content beginning to appear on page one for your brand name. Negative results may have moved down 1-3 positions.</li>
            <li><strong>Review scores improving</strong> — Average ratings should show a measurable uptick, especially if review generation campaigns are active.</li>
            <li><strong>First media placements</strong> — One to three articles published in target publications, with more in the pipeline.</li>
            <li><strong>Content indexed</strong> — 8-12+ pieces of content indexed by Google and beginning to rank for brand-related terms.</li>
            <li><strong>Baseline metrics established</strong> — Clear before-and-after data showing progress against the audit baseline.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Important reality check:</strong> Month three is when you see the direction, not the destination. Dramatic search result transformations typically take 4-6 months. If your agency is showing clear directional improvement at day 90, the campaign is on track. If there is no measurable progress at all, that is the time to have a serious conversation about what is not working.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            What Comes After 90 Days
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The first 90 days build the foundation. Months 4-6 are where the compounding effects kick in: content gains authority and climbs in rankings, review profiles strengthen with continued generation, media placements accumulate and create a wall of positive search results, and the overall narrative around your brand shifts from reactive to proactive.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>By month six, most Reputation 500 clients see their brand search results dominated by positive content</strong>, review scores above 4.5 stars, and measurable improvements in lead generation and customer acquisition costs. By month twelve, the reputation becomes a genuine competitive advantage rather than just an absence of problems.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Red Flags: Signs Your Campaign Is Not on Track
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>No audit completed by week 2</strong> — Strategy without data is guesswork</li>
            <li><strong>No content published by day 45</strong> — The most critical asset in reputation management is content; delays here delay everything</li>
            <li><strong>No reporting by day 30</strong> — If your agency is not sharing data, they may not be tracking it</li>
            <li><strong>Vague progress updates</strong> — You should see specific metrics: number of articles published, review scores, search result positions, not just qualitative summaries</li>
            <li><strong>No media outreach activity</strong> — If digital PR was promised but no pitches have been sent by month two, the campaign is behind</li>
          </ul>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mt-16 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">What happens in the first week of a reputation management campaign?</h3>
              <p className="text-gray-700">The first week focuses on a comprehensive reputation audit: analyzing search results, reviewing all profiles, assessing review scores, monitoring AI responses, and identifying immediate threats and opportunities.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">How soon can I expect to see results from reputation management?</h3>
              <p className="text-gray-700">Initial results appear within 30-60 days, including improved review responses and new content. Meaningful search result changes take 60-90 days. Significant page-one transformation requires 3-6 months.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">What should a reputation management strategy include?</h3>
              <p className="text-gray-700">A comprehensive strategy includes search result optimization, review management, content creation and SEO, digital PR, brand monitoring, crisis preparedness, AI visibility management, and regular reporting with clear KPIs.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">What does a reputation audit cover?</h3>
              <p className="text-gray-700">A thorough audit covers Google search results, review profiles across all platforms, social media sentiment, media coverage, competitor benchmarking, AI visibility, and backlink analysis.</p>
            </div>
            <div className="pb-6">
              <h3 className="font-bold text-lg mb-2">Can reputation management guarantee results in 90 days?</h3>
              <p className="text-gray-700">No reputable agency guarantees specific outcomes in 90 days. You should expect a deployed strategy, initial improvements in reviews and content, monitoring systems active, and early search result movement. Full transformation takes 6-12 months.</p>
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-[#f8fafc] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Ready to Start Your First 90 Days?
          </h2>
          <p className="text-gray-600 mb-6">
            Get a free reputation audit and a clear roadmap showing exactly what the first 90 days will look like for your business.
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
            <Link href="/blog/for-businesses/how-to-choose-reputation-management-agency" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">How to Choose a Reputation Management Agency: 7 Questions to Ask &rarr;</span>
            </Link>
            <Link href="/blog/for-businesses/what-is-online-reputation-management" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">What Is Online Reputation Management and Why Does Every Business Need It? &rarr;</span>
            </Link>
            <Link href="/blog/for-businesses/proactive-reputation-management-strategy" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">Building a Proactive Reputation Management Strategy &rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
