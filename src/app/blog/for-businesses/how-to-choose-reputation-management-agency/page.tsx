import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'How to Choose a Reputation Management Agency: 7 Questions to Ask | Reputation 500',
  description: 'Discover the 7 critical questions to ask before hiring a reputation management agency. Evaluate track record, methods, transparency, and guarantees.',
  alternates: { canonical: `${SITE_URL}/blog/for-businesses/how-to-choose-reputation-management-agency` },
  openGraph: {
    title: 'How to Choose a Reputation Management Agency: 7 Questions to Ask',
    description: 'Discover the 7 critical questions to ask before hiring a reputation management agency. Evaluate track record, methods, and guarantees.',
  },
}

export default function ArticlePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Choose a Reputation Management Agency: 7 Questions to Ask',
    description: metadata.description,
    author: { '@type': 'Organization', name: 'Reputation 500', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'Reputation 500', url: SITE_URL },
    datePublished: '2026-04-05',
    dateModified: '2026-04-05',
    url: `${SITE_URL}/blog/for-businesses/how-to-choose-reputation-management-agency`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What should I look for in a reputation management agency?',
        acceptedAnswer: { '@type': 'Answer', text: 'Look for a proven track record with documented case studies, transparent reporting practices, white-hat methods only, realistic timelines (not overnight promises), clear pricing, and a customized strategy rather than a one-size-fits-all approach.' },
      },
      {
        '@type': 'Question',
        name: 'How do I know if a reputation management company is legitimate?',
        acceptedAnswer: { '@type': 'Answer', text: 'Legitimate agencies will share verifiable case studies, explain their methods in detail, never guarantee specific search engine rankings, provide regular reporting dashboards, and have a track record of working with businesses in your industry or of similar size.' },
      },
      {
        '@type': 'Question',
        name: 'Should a reputation management agency guarantee results?',
        acceptedAnswer: { '@type': 'Answer', text: 'Be cautious of agencies that guarantee specific Google rankings or promise to remove content they cannot legally control. Reputable agencies guarantee their process, deliverables, and effort — such as a specific number of media placements or content assets — rather than outcomes that depend on third-party platforms.' },
      },
      {
        '@type': 'Question',
        name: 'How long should I commit to a reputation management agency?',
        acceptedAnswer: { '@type': 'Answer', text: 'Most reputation management campaigns require a minimum of 6 months to show meaningful results. Initial improvements may appear in 30-60 days, but sustained search result changes and review profile improvement typically take 3-6 months. Avoid agencies that lock you into long contracts without performance benchmarks.' },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between white-hat and black-hat reputation management?',
        acceptedAnswer: { '@type': 'Answer', text: 'White-hat methods include legitimate content creation, earned media placements, authentic review generation, and SEO best practices. Black-hat methods include fake reviews, link manipulation, creating deceptive content, or hacking to remove negative results. Black-hat tactics can result in Google penalties, legal liability, and permanent reputation damage.' },
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
            { label: 'Choosing an Agency' },
          ]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              How to Choose a Reputation Management Agency: 7 Questions to Ask
            </h1>
            <p className="text-gray-400 text-sm">Published April 5, 2026 · By Reputation 500 Team</p>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Hiring a reputation management agency is one of the most consequential marketing decisions a business can make. The right partner protects your brand, drives revenue, and builds lasting authority. The wrong one wastes your budget — or worse, creates new problems. With hundreds of agencies claiming expertise, how do you separate the real operators from the noise?
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            After working with companies across every industry, we have identified <strong>seven questions that consistently separate elite reputation management agencies from mediocre ones</strong>. Ask these before signing any contract.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            1. Can You Show Me Documented Case Studies?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Any agency can make promises. The best agencies prove their work. Ask for <strong>before-and-after evidence</strong>: search result screenshots, review score progression, traffic data, and revenue impact metrics. Generic testimonials are not enough — you need specifics.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Reputation 500, we maintain a library of <Link href="/about/case-studies" className="text-[#004AAD] hover:underline">detailed case studies</Link> showing exactly how we moved the needle for clients across SaaS, healthcare, hospitality, and professional services. If an agency cannot provide similar documentation, that is a red flag.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            2. What Methods Do You Use — and Are They White-Hat Only?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            This is non-negotiable. <strong>Black-hat tactics — fake reviews, link schemes, deceptive content — can result in Google penalties, legal action, and permanent reputational harm.</strong> Yet a surprising number of agencies still rely on them because they produce short-term results.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Demand a clear explanation of every tactic the agency will use. Legitimate methods include original content creation, earned media outreach, authentic review generation programs, technical SEO optimization, and strategic social media management. If an agency is vague about its methods or dismisses your concerns, walk away.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            3. How Transparent Is Your Reporting?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>You should never have to guess what your agency is doing.</strong> The best firms provide monthly (or more frequent) reports that include search result rankings for your brand terms, review score trends across all platforms, content published and its performance, media placements secured, and sentiment analysis.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ask to see a sample report before you sign. If the agency provides only vague summaries or resists sharing data, they are likely hiding underperformance. At <Link href="/services/for-businesses/business-reputation-management" className="text-[#004AAD] hover:underline">Reputation 500</Link>, clients receive real-time dashboards alongside comprehensive monthly reviews — because transparency is how trust is built.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            4. What Do You Actually Guarantee?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Be wary of agencies that guarantee specific Google rankings or promise to &quot;remove&quot; content from websites they do not control. <strong>No agency can guarantee what Google does.</strong> What a credible agency <em>can</em> guarantee are deliverables: a specific number of published articles, media placements in named publications, review generation outreach volumes, and monthly content assets.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Process guarantees are legitimate. Outcome guarantees for things outside the agency&apos;s direct control are a warning sign. The best agencies set realistic expectations and then consistently exceed them.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            5. What Is Your Realistic Timeline for Results?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Reputation management is not instant. Any agency promising dramatic results in two weeks is either lying or using tactics that will backfire. A credible timeline looks like this: <strong>initial audit and strategy in weeks 1-3, early improvements in review scores and content positioning within 60 days, and meaningful search result changes within 3-6 months</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Full reputation transformation — sustained positive search results, strong review profiles, and media authority — typically requires 6-12 months. An honest agency will tell you this upfront rather than overselling speed.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            6. Do You Customize Strategy or Use a Template?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            A restaurant chain facing a Yelp crisis needs a fundamentally different approach than a SaaS company dealing with a negative TechCrunch article. <strong>Cookie-cutter strategies are one of the most common reasons reputation management campaigns fail.</strong>
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ask the agency how they would approach <em>your</em> specific situation. They should be able to articulate a preliminary strategy based on your industry, competitive landscape, current reputation state, and business goals — even before you sign. If they pitch the same package to every prospect, they are not the right fit.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            7. Who Will Actually Work on My Account?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Many agencies sell with senior partners but hand execution to junior staff or offshore teams. Ask to meet the people who will manage your account day-to-day. Understand their experience level, their capacity (how many other clients they manage), and how communication will work.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>The ideal agency assigns a dedicated account strategist</strong> supported by specialists in SEO, content, digital PR, and review management. You should have a direct line to your strategist and regular check-ins — not a support ticket queue.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Red Flags to Watch For
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>Guaranteeing #1 Google rankings</strong> — No one can guarantee this.</li>
            <li><strong>Refusing to explain their methods</strong> — Legitimate agencies are proud to share their approach.</li>
            <li><strong>No case studies or verifiable references</strong> — Track record matters.</li>
            <li><strong>Extremely low pricing</strong> — Quality reputation management requires significant expertise and labor. If the price seems too good to be true, it is.</li>
            <li><strong>Long-term contracts with no performance benchmarks</strong> — You should have clear milestones and the ability to exit if they are not met.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Why Reputation 500 Meets Every Standard
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We built Reputation 500 to be the agency we wish existed when our founders needed reputation management themselves. Every client gets a dedicated strategist, custom-built campaigns, <strong>100% white-hat methods</strong>, real-time reporting dashboards, and guaranteed deliverables including media placements in publications like Forbes and Entrepreneur. Our <Link href="/about/case-studies" className="text-[#004AAD] hover:underline">case studies</Link> document specific outcomes with real data — because we believe the work should speak for itself.
          </p>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mt-16 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">What should I look for in a reputation management agency?</h3>
              <p className="text-gray-700">Look for a proven track record with documented case studies, transparent reporting practices, white-hat methods only, realistic timelines, clear pricing, and a customized strategy rather than a one-size-fits-all approach.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">How do I know if a reputation management company is legitimate?</h3>
              <p className="text-gray-700">Legitimate agencies will share verifiable case studies, explain their methods in detail, never guarantee specific search engine rankings, provide regular reporting dashboards, and have a track record of working with businesses in your industry.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">Should a reputation management agency guarantee results?</h3>
              <p className="text-gray-700">Be cautious of agencies that guarantee specific Google rankings. Reputable agencies guarantee their process and deliverables — such as a specific number of media placements or content assets — rather than outcomes that depend on third-party platforms.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">How long should I commit to a reputation management agency?</h3>
              <p className="text-gray-700">Most campaigns require a minimum of 6 months to show meaningful results. Initial improvements may appear in 30-60 days, but sustained changes typically take 3-6 months. Avoid agencies that lock you into long contracts without performance benchmarks.</p>
            </div>
            <div className="pb-6">
              <h3 className="font-bold text-lg mb-2">What is the difference between white-hat and black-hat reputation management?</h3>
              <p className="text-gray-700">White-hat methods include legitimate content creation, earned media placements, and authentic review generation. Black-hat methods include fake reviews, link manipulation, and deceptive content. Black-hat tactics can result in Google penalties and legal liability.</p>
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-[#f8fafc] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Ready to Work With an Agency That Meets Every Standard?
          </h2>
          <p className="text-gray-600 mb-6">
            Get a free reputation audit and see exactly how Reputation 500 would approach your specific situation — with full transparency, documented methods, and guaranteed deliverables.
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
            <Link href="/blog/for-businesses/in-house-vs-agency-reputation-management" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">In-House vs. Agency Reputation Management: Which Is Right for You? &rarr;</span>
            </Link>
            <Link href="/blog/for-businesses/reputation-management-cost-pricing" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">What Does Reputation Management Cost? A Transparent Pricing Guide &rarr;</span>
            </Link>
            <Link href="/blog/for-businesses/first-90-days-reputation-management" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">The First 90 Days of Reputation Management: What to Expect &rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
