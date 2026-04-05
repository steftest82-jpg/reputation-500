import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'How Reputation Affects Talent Acquisition: Why Top Candidates Research Your Company | Reputation 500',
  description: 'Discover why 86% of job seekers research company reputation before applying and how a negative online presence costs you top talent and increases hiring costs.',
  alternates: { canonical: `${SITE_URL}/blog/for-businesses/reputation-affects-talent-acquisition` },
  openGraph: {
    title: 'How Reputation Affects Talent Acquisition: Why Top Candidates Research Your Company',
    description: 'Discover why 86% of job seekers research company reputation before applying and how a negative online presence costs you top talent.',
  },
}

export default function ArticlePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How Reputation Affects Talent Acquisition: Why Top Candidates Research Your Company',
    description: metadata.description,
    author: { '@type': 'Organization', name: 'Reputation 500', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'Reputation 500', url: SITE_URL },
    datePublished: '2026-04-05',
    dateModified: '2026-04-05',
    url: `${SITE_URL}/blog/for-businesses/reputation-affects-talent-acquisition`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does company reputation affect hiring?',
        acceptedAnswer: { '@type': 'Answer', text: 'Company reputation directly impacts hiring success. Research shows that 86% of job seekers research a company\'s reputation before applying, and 69% would reject an offer from a company with a bad reputation even if they were unemployed. A poor reputation forces companies to offer 10% or higher salary premiums to attract comparable talent.' },
      },
      {
        '@type': 'Question',
        name: 'What platforms do job seekers use to research employers?',
        acceptedAnswer: { '@type': 'Answer', text: 'Job seekers primarily use Glassdoor, LinkedIn, Google search results, Indeed company pages, and social media platforms to research potential employers. Glassdoor is the most influential, with 86% of job seekers reading company reviews before deciding whether to apply. Google search results also play a major role, as candidates search the company name to see news articles, reviews, and overall sentiment.' },
      },
      {
        '@type': 'Question',
        name: 'How much does a bad reputation increase hiring costs?',
        acceptedAnswer: { '@type': 'Answer', text: 'A bad reputation can increase hiring costs by at least 10% per hire in additional salary requirements alone. Companies with poor reputations also experience longer time-to-fill metrics, higher recruiter fees, increased turnover in the first year, and greater spending on job advertising to generate sufficient applicant volume.' },
      },
      {
        '@type': 'Question',
        name: 'Can reputation management help with recruiting?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Professional reputation management improves employer branding by ensuring positive content dominates search results, managing review profiles on platforms like Glassdoor, securing media coverage that highlights company culture, and building a consistent brand narrative across all digital touchpoints. Companies that invest in employer reputation see up to 50% more qualified applicants.' },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to improve employer reputation online?',
        acceptedAnswer: { '@type': 'Answer', text: 'Improving employer reputation is a gradual process. Initial improvements to Glassdoor ratings and search results can appear within 60-90 days. Meaningful shifts in candidate perception typically take 6-12 months of consistent effort across review management, content creation, and employer branding initiatives.' },
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
            { label: 'Reputation & Talent Acquisition' },
          ]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              How Reputation Affects Talent Acquisition: Why Top Candidates Research Your Company
            </h1>
            <p className="text-gray-400 text-sm">Published April 5, 2026 · By Reputation 500 Team</p>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Your next best employee is researching your company right now. Before they apply, before they respond to your recruiter&apos;s message, before they even consider your job listing, they are Googling your company name, reading Glassdoor reviews, and scrolling through your LinkedIn presence. What they find will determine whether they pursue the opportunity or move on to your competitor. <strong>86% of job seekers research a company&apos;s reputation and reviews before deciding where to apply</strong>, according to Glassdoor research. Your online reputation is no longer just a customer-facing concern — it is a talent acquisition strategy.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            The Numbers That Should Alarm Every Hiring Manager
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The relationship between reputation and recruiting is not theoretical. The data paints an unambiguous picture:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>69% of job seekers would reject a job offer from a company with a bad reputation</strong>, even if they were currently unemployed. The talent shortage is real, but candidates would rather wait than join an organization they perceive negatively.</li>
            <li><strong>Companies with poor reputations must offer at least a 10% salary premium</strong> to attract candidates who would otherwise accept a comparable role elsewhere. For a company hiring 100 employees at an average salary of $75,000, that translates to $750,000 in additional annual payroll.</li>
            <li><strong>50% of candidates say they would not work for a company with a bad reputation even for a pay increase.</strong> For half the talent pool, no amount of money compensates for perceived organizational dysfunction.</li>
            <li><strong>Companies with strong employer brands see 50% more qualified applicants</strong> and reduce their cost-per-hire by up to 43%. Reputation does not just attract more candidates — it attracts better ones.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Where Candidates Research Your Company
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Understanding where candidates form their impressions is critical to managing your employer reputation. The research journey typically follows a predictable path across several key platforms.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Glassdoor remains the most influential platform for employer reputation.</strong> With over 55 million monthly visitors, Glassdoor functions as the Yelp of the employment world. Candidates read current and former employee reviews, examine salary data, and evaluate CEO approval ratings. A company with a Glassdoor rating below 3.3 stars faces a significant disadvantage in recruiting, as most candidates filter out employers below that threshold.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>LinkedIn shapes perception at scale.</strong> Beyond job listings, LinkedIn company pages show employee count trends, recent hires, departures, and employee-shared content. A company with visibly declining headcount or minimal employee engagement signals instability. Conversely, active employee advocacy and a growing workforce signal momentum.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Google search results provide the first impression.</strong> When a candidate searches your company name, page one tells a story. If that story includes negative news articles, complaints on consumer review sites, or lawsuit coverage, many candidates exit the hiring process immediately. A clean, authoritative search presence — featuring your website, positive media coverage, and strong social profiles — sets the right tone before a candidate even visits your careers page.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Indeed company pages and social media round out the picture.</strong> Indeed&apos;s company review section reaches a broad candidate audience, while platforms like X (formerly Twitter), Reddit, and even TikTok increasingly influence perception among younger professionals. A viral employee complaint video or a trending Reddit thread about toxic culture can undo years of employer branding investment overnight.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            The Hidden Costs Beyond Salary Premiums
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The salary premium is only the most visible cost of a poor employer reputation. The cascading effects reach deeper into your organization:
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Longer time-to-fill drains productivity.</strong> When qualified candidates self-select out, your open positions stay vacant longer. Every week a critical role goes unfilled costs the organization in delayed projects, overburdened teams, and missed opportunities. Research from the Society for Human Resource Management shows the average cost of a vacant position is one to three times the daily salary of that role — per day it remains open.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Higher turnover compounds the problem.</strong> Employees hired despite reputation concerns often leave within the first year when their experience confirms what the reviews warned about. This creates a costly cycle of recruiting, onboarding, and replacing talent — with each departure generating new negative reviews that further damage the reputation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Recruiter effectiveness drops.</strong> Even the best executive recruiters struggle when candidates Google the client company and find red flags. Senior candidates who are successful in their current roles have the luxury of being selective, and <Link href="/blog/for-businesses/bad-online-reputation-costs" className="text-[#004AAD] hover:underline">a bad online reputation</Link> is often the deciding factor that takes your company off their shortlist.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            How to Build an Employer Reputation That Attracts Top Talent
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Improving your employer reputation requires a coordinated strategy across multiple fronts. At Reputation 500, we work with companies to implement a comprehensive approach that addresses every touchpoint in the candidate research journey.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Actively manage your review profiles.</strong> Encourage satisfied employees to share their experiences on Glassdoor and Indeed. Respond professionally to negative reviews — not defensively, but with genuine acknowledgment and action. Candidates pay close attention to how leadership handles criticism. A company that responds thoughtfully to negative reviews often earns more trust than one with only five-star ratings.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Control your Google search results.</strong> Your <Link href="/services/for-businesses/business-reputation-management" className="text-[#004AAD] hover:underline">business reputation management</Link> strategy should ensure that page one of Google for your company name features your website, positive media coverage, strong social profiles, and authoritative content. If negative or outdated results appear, professional suppression strategies can push them below the fold where fewer than 5% of searchers will see them.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Invest in employer branding content.</strong> Company culture videos, employee spotlight articles, thought leadership from executives, and behind-the-scenes social media content all contribute to a compelling employer narrative. <Link href="/services/for-businesses/branding" className="text-[#004AAD] hover:underline">Strategic branding</Link> ensures these assets are discoverable, consistent, and aligned with the experience candidates will actually have when they join.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Align internal reality with external perception.</strong> No amount of reputation management can permanently mask a genuinely poor workplace. The most sustainable approach combines authentic cultural improvement with strategic communication. When your workplace is genuinely strong but your online presence fails to reflect that, reputation management bridges the gap. When real issues exist, addressing them creates the foundation for lasting reputational improvement.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Reputation as a Competitive Advantage in Hiring
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            In a labor market where skilled professionals have multiple options, reputation is the tiebreaker. Two companies can offer identical salaries, similar benefits, and comparable career paths — but the one with stronger Glassdoor reviews, more positive search results, and a more visible employer brand will win the candidate. <strong>92% of employees would consider leaving their current job if offered a position at a company with an excellent corporate reputation</strong>, according to Corporate Responsibility Magazine research.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The companies that treat reputation as a talent acquisition strategy — not just a marketing concern — build a compounding advantage. Every great hire strengthens the organization, generates positive reviews, and reinforces the employer brand, creating a virtuous cycle that makes future hiring easier and less expensive.
          </p>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mt-16 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">How does company reputation affect hiring?</h3>
              <p className="text-gray-700">Company reputation directly impacts hiring success. Research shows that 86% of job seekers research a company&apos;s reputation before applying, and 69% would reject an offer from a company with a bad reputation even if they were unemployed. A poor reputation forces companies to offer 10% or higher salary premiums to attract comparable talent.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">What platforms do job seekers use to research employers?</h3>
              <p className="text-gray-700">Job seekers primarily use Glassdoor, LinkedIn, Google search results, Indeed company pages, and social media platforms. Glassdoor is the most influential, with 86% of job seekers reading company reviews before deciding whether to apply.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">How much does a bad reputation increase hiring costs?</h3>
              <p className="text-gray-700">A bad reputation can increase hiring costs by at least 10% per hire in additional salary requirements. Companies also experience longer time-to-fill metrics, higher recruiter fees, increased first-year turnover, and greater job advertising spend.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">Can reputation management help with recruiting?</h3>
              <p className="text-gray-700">Yes. Professional reputation management improves employer branding by ensuring positive content dominates search results, managing review profiles on Glassdoor, securing positive media coverage, and building a consistent brand narrative. Companies that invest in employer reputation see up to 50% more qualified applicants.</p>
            </div>
            <div className="pb-6">
              <h3 className="font-bold text-lg mb-2">How long does it take to improve employer reputation online?</h3>
              <p className="text-gray-700">Initial improvements to Glassdoor ratings and search results can appear within 60-90 days. Meaningful shifts in candidate perception typically take 6-12 months of consistent effort across review management, content creation, and employer branding initiatives.</p>
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-[#f8fafc] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Ready to Turn Your Reputation Into a Recruiting Advantage?
          </h2>
          <p className="text-gray-600 mb-6">
            Get a free reputation audit and discover what top candidates see when they research your company online.
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
            <Link href="/blog/for-businesses/bad-online-reputation-costs" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">What Happens When Your Business Has a Bad Online Reputation? &rarr;</span>
            </Link>
            <Link href="/blog/for-businesses/what-is-online-reputation-management" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">What Is Online Reputation Management and Why Does Every Business Need It? &rarr;</span>
            </Link>
            <Link href="/blog/for-businesses/reputation-management-c-suite-priority" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">Why Reputation Management Is a C-Suite Priority &rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
