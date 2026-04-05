import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'What Shows Up When Someone Googles Your Name? | Reputation 500',
  description: 'Discover what employers, clients, and partners find when they Google your name and why 70% of hiring managers reject candidates based on search results.',
  alternates: { canonical: `${SITE_URL}/blog/for-individuals/what-shows-up-when-someone-googles-your-name` },
  openGraph: {
    title: 'What Shows Up When Someone Googles Your Name?',
    description: 'Discover what employers, clients, and partners find when they Google your name and why 70% of hiring managers reject candidates based on search results.',
  },
}

export default function ArticlePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Shows Up When Someone Googles Your Name?',
    description: metadata.description,
    author: { '@type': 'Organization', name: 'Reputation 500', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'Reputation 500', url: SITE_URL },
    datePublished: '2026-04-05',
    dateModified: '2026-04-05',
    url: `${SITE_URL}/blog/for-individuals/what-shows-up-when-someone-googles-your-name`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How can I check what appears when someone Googles my name?',
        acceptedAnswer: { '@type': 'Answer', text: 'Open an incognito or private browsing window and search your full name in Google. This removes personalization bias and shows you results closer to what others see. Try variations including your name with your city, profession, or company for a complete picture.' },
      },
      {
        '@type': 'Question',
        name: 'How long do negative search results stay on Google?',
        acceptedAnswer: { '@type': 'Answer', text: 'Negative content can remain in Google search results indefinitely. News articles, court records, and social media posts do not expire and can continue appearing for years or even decades unless proactively addressed through reputation management strategies.' },
      },
      {
        '@type': 'Question',
        name: 'Can I remove negative information from Google search results?',
        acceptedAnswer: { '@type': 'Answer', text: 'In most cases, you cannot force Google to remove accurate content. However, professional reputation management can suppress negative results by building stronger, more authoritative positive content that outranks the negative material on page one.' },
      },
      {
        '@type': 'Question',
        name: 'Do employers actually Google candidates before hiring?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. According to multiple surveys, over 90% of employers conduct online searches on candidates during the hiring process. Nearly 70% have rejected a candidate based on what they found online, making your Google results a critical factor in career advancement.' },
      },
      {
        '@type': 'Question',
        name: 'What should ideally appear when someone Googles my name?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ideally, your search results should include a professional LinkedIn profile, a personal website or portfolio, positive media mentions, industry publications or speaking engagements, and professional social media profiles that reinforce your expertise and credibility.' },
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
            { label: 'For Individuals', href: '/blog/for-individuals' },
            { label: 'Googling Your Name' },
          ]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              What Shows Up When Someone Googles Your Name?
            </h1>
            <p className="text-gray-400 text-sm">Published April 5, 2026 · By Reputation 500 Team</p>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Every day, people are forming opinions about you before you ever meet them. Employers research candidates before interviews. Clients look up consultants before signing contracts. Business partners investigate potential collaborators before committing to deals. And in every case, their first stop is the same place: Google.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            What they find in those search results shapes their perception of you — often permanently. According to CareerBuilder, <strong>70% of employers have rejected a candidate based on what they found online</strong>. That statistic alone should make everyone pay attention to their digital footprint. Yet most people have never searched their own name in an incognito window to see what the world sees.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Who Is Searching for You — and Why
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The list of people who Google your name is longer than you might think. <strong>Hiring managers and recruiters</strong> search candidates as a standard part of the vetting process — over 90% of employers admit to doing this. But it does not stop there. Potential clients research service providers before making contact. Investors look up founders before taking meetings. Journalists search sources before quoting them. Even dates routinely Google the person they are about to meet.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Each of these audiences is looking for signals of credibility, professionalism, and trustworthiness. They are also looking for red flags — and a single negative result can override dozens of positive impressions built over years of hard work.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            What Typically Appears in Personal Search Results
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            When someone Googles your name, the results typically include a mix of the following:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>Social media profiles</strong> — LinkedIn, Facebook, Instagram, and X (Twitter) profiles are among the most common results. The content, photos, and activity on these profiles create an immediate impression of who you are.</li>
            <li><strong>News articles and media mentions</strong> — Any press coverage, whether positive or negative, tends to rank highly in search results due to the authority of news websites.</li>
            <li><strong>Public records</strong> — Court records, property records, business filings, and other government documents can surface in search results, sometimes revealing information you would prefer to keep private.</li>
            <li><strong>Data broker profiles</strong> — Sites like Spokeo, BeenVerified, and WhitePages aggregate personal data and create profiles that frequently appear on the first page of Google results.</li>
            <li><strong>Professional directories and review sites</strong> — For professionals in fields like law, medicine, or real estate, directory listings and client reviews can dominate search results.</li>
            <li><strong>Old or irrelevant content</strong> — Blog posts from a decade ago, forum comments, or photos tagged by others can resurface and create misleading impressions.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Why the First Page Is the Only Page That Matters
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Research shows that <strong>75% of users never scroll past the first page of Google results</strong>. This means the ten or so links on page one are, for all practical purposes, your entire online identity in the eyes of most people. If a negative article, embarrassing photo, or inaccurate data broker listing occupies one of those spots, it effectively defines how others perceive you.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The primacy effect — a well-documented cognitive bias — means that the first pieces of information someone encounters about you carry disproportionate weight. A negative result in position one or two will color how they interpret everything else they find, even if the remaining results are overwhelmingly positive.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            The Growing Role of AI in Personal Reputation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Beyond traditional search, AI assistants like ChatGPT, Gemini, and Perplexity are increasingly being used to research people. When someone asks an AI about you, the response is synthesized from web content — and you have even less control over how that information is presented. Inaccurate or negative information from any indexed source can become part of the AI&apos;s answer, repeated to every person who asks.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            This is why <Link href="/services/for-individuals/personal-reputation-management" className="text-[#004AAD] hover:underline">personal reputation management</Link> now extends beyond Google to include AI visibility. At Reputation 500, we help individuals ensure their digital presence is accurate and favorable across both search engines and AI platforms.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            How to Take Control of Your Search Results
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The good news is that your Google results are not set in stone. With a strategic approach to <Link href="/services/for-individuals/reputation-monitoring" className="text-[#004AAD] hover:underline">reputation monitoring</Link> and content creation, you can reshape what appears when someone searches your name. The process typically involves:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>Auditing your current results</strong> — Understanding exactly what appears and identifying both threats and opportunities.</li>
            <li><strong>Building authoritative positive content</strong> — Creating and optimizing profiles, websites, articles, and media mentions that rank for your name.</li>
            <li><strong>Suppressing negative or irrelevant content</strong> — Using SEO strategies to push unfavorable results off page one by outranking them with stronger content.</li>
            <li><strong>Ongoing monitoring</strong> — Setting up alerts and tracking tools to catch new mentions and results before they become problems.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            The professionals and executives who take their search results seriously are the ones who consistently land better opportunities, close bigger deals, and build stronger professional networks. Those who ignore their digital presence leave their reputation — and their career — to chance.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            The Cost of Doing Nothing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Every day that negative or irrelevant content sits on page one of your search results, it is silently costing you opportunities. You will never know about the recruiter who passed on your resume, the client who chose a competitor, or the partnership that never materialized — all because of what Google showed them about you. <strong>The average person is Googled by name over 10 times per month</strong> by people making decisions that affect their career and livelihood.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Reputation 500, we work with individuals across industries to build search results that reflect their true professional value. Whether you need to address a specific negative result or build a comprehensive personal brand from scratch, the first step is understanding what people currently find when they search your name.
          </p>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mt-16 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">How can I check what appears when someone Googles my name?</h3>
              <p className="text-gray-700">Open an incognito or private browsing window and search your full name in Google. This removes personalization bias and shows you results closer to what others see. Try variations including your name with your city, profession, or company for a complete picture.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">How long do negative search results stay on Google?</h3>
              <p className="text-gray-700">Negative content can remain in Google search results indefinitely. News articles, court records, and social media posts do not expire and can continue appearing for years or even decades unless proactively addressed through reputation management strategies.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">Can I remove negative information from Google search results?</h3>
              <p className="text-gray-700">In most cases, you cannot force Google to remove accurate content. However, professional reputation management can suppress negative results by building stronger, more authoritative positive content that outranks the negative material on page one.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">Do employers actually Google candidates before hiring?</h3>
              <p className="text-gray-700">Yes. Over 90% of employers conduct online searches on candidates during the hiring process. Nearly 70% have rejected a candidate based on what they found online, making your Google results a critical factor in career advancement.</p>
            </div>
            <div className="pb-6">
              <h3 className="font-bold text-lg mb-2">What should ideally appear when someone Googles my name?</h3>
              <p className="text-gray-700">Ideally, your search results should include a professional LinkedIn profile, a personal website or portfolio, positive media mentions, industry publications or speaking engagements, and professional social media profiles that reinforce your expertise and credibility.</p>
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-[#f8fafc] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Find Out What Google Says About You
          </h2>
          <p className="text-gray-600 mb-6">
            Get a free personal reputation audit and discover exactly what employers, clients, and partners see when they search your name.
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
            <Link href="/blog/for-individuals/what-is-personal-reputation-management" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">What Is Personal Reputation Management? →</span>
            </Link>
            <Link href="/blog/for-individuals/negative-search-results-destroy-career" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">How Negative Search Results Can Destroy Your Career →</span>
            </Link>
            <Link href="/blog/for-individuals/hidden-cost-ignoring-personal-reputation" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">The Hidden Cost of Ignoring Your Personal Reputation →</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
