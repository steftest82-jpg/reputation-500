import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'How Social Media Shapes Your Personal Reputation (And What to Do About It) | Reputation 500',
  description: 'Learn how social media posts affect hiring decisions, client trust, and career growth — and why privacy settings alone are not enough to protect you.',
  alternates: { canonical: `${SITE_URL}/blog/for-individuals/social-media-and-personal-reputation` },
  openGraph: {
    title: 'How Social Media Shapes Your Personal Reputation',
    description: 'Learn how social media posts affect hiring decisions, client trust, and career growth — and why privacy settings alone are not enough to protect you.',
  },
}

export default function ArticlePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How Social Media Shapes Your Personal Reputation (And What to Do About It)',
    description: metadata.description,
    author: { '@type': 'Organization', name: 'Reputation 500', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'Reputation 500', url: SITE_URL },
    datePublished: '2026-04-05',
    dateModified: '2026-04-05',
    url: `${SITE_URL}/blog/for-individuals/social-media-and-personal-reputation`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do employers really check social media before hiring?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. According to CareerBuilder, 70% of employers screen candidates on social media during the hiring process. Of those, 57% have found content that caused them not to hire a candidate. Social media screening is now a standard part of the recruitment workflow at most companies.' },
      },
      {
        '@type': 'Question',
        name: 'Are private social media accounts safe from employer screening?',
        acceptedAnswer: { '@type': 'Answer', text: 'Not entirely. While private settings prevent direct viewing, content can still be screenshotted and shared by connections, cached by search engines before settings were changed, or visible through mutual connections. Additionally, the existence of a private account with a provocative username or bio is itself visible.' },
      },
      {
        '@type': 'Question',
        name: 'Can old social media posts still affect my career?',
        acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Posts from years ago can resurface through shares, screenshots, data breaches, web archives, or search engine caches. Several high-profile professionals have lost positions due to old social media content that was discovered during background checks. The internet has a long memory.' },
      },
      {
        '@type': 'Question',
        name: 'Should I delete all my social media accounts?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. Having no social media presence at all can raise red flags with employers and clients who expect to verify your professional identity online. The better approach is to audit your existing accounts, clean up problematic content, and optimize your profiles to present a professional, consistent image.' },
      },
      {
        '@type': 'Question',
        name: 'How can I use social media to improve my reputation?',
        acceptedAnswer: { '@type': 'Answer', text: 'Strategically managed social media can be a powerful reputation asset. Share industry insights, engage with thought leaders, publish original content, and maintain consistent professional branding across platforms. LinkedIn in particular is a critical tool for building credibility and ranking well in search results for your name.' },
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
            { label: 'Social Media & Reputation' },
          ]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              How Social Media Shapes Your Personal Reputation (And What to Do About It)
            </h1>
            <p className="text-gray-400 text-sm">Published April 5, 2026 · By Reputation 500 Team</p>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Every post, photo, comment, and share on social media contributes to a permanent record that shapes how the world perceives you. What many professionals fail to realize is that <strong>social media content does not just live on social platforms — it ranks in Google, feeds AI training data, and creates impressions that follow you for years</strong>. In a world where 70% of employers screen candidates on social media, your profiles are not personal — they are professional assets that require strategic management.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            According to CareerBuilder, <strong>57% of employers have found social media content that caused them not to hire a candidate</strong>. The reasons range from inappropriate photos and discriminatory comments to complaints about previous employers and evidence of drug use. But even seemingly innocent content — strong political opinions, excessive partying, or unprofessional humor — can disqualify you from opportunities you never know existed.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            What Social Media Reveals About You
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Social media profiles paint a comprehensive picture that goes far beyond your resume or professional bio. Employers, clients, and business partners examine:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>Judgment and professionalism</strong> — The content you post and share reflects your values, judgment, and how you present yourself publicly. Provocative or controversial posts signal risk to employers.</li>
            <li><strong>Communication skills</strong> — How you write, argue, and engage online demonstrates your communication abilities. Poorly written posts, aggressive debates, or frequent typos create negative impressions.</li>
            <li><strong>Cultural fit</strong> — Employers assess whether your online persona aligns with their company culture. Content that conflicts with organizational values can eliminate you from consideration.</li>
            <li><strong>Consistency</strong> — Discrepancies between your resume claims and your social media activity raise credibility concerns. If your resume says you are a strategic thinker but your feed is filled with memes, there is a disconnect.</li>
            <li><strong>Network quality</strong> — Who you follow, who follows you, and the groups you belong to all contribute to perceptions about your professional standing and associations.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            The Employer Screening Reality
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Social media screening is not a fringe practice — it is mainstream. <strong>The Society for Human Resource Management (SHRM) reports that 84% of organizations use social media for recruiting</strong>, and the majority screen candidates&apos; profiles as part of the evaluation process. Some companies use dedicated social media screening services that generate comprehensive reports on candidates&apos; online activity.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The screening does not stop at hiring. Companies increasingly monitor employees&apos; social media activity during employment, particularly for public-facing roles. Posts that conflict with company values, reveal confidential information, or generate negative attention can lead to disciplinary action or termination.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Why Privacy Settings Are Not Enough
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Many professionals believe that setting their social media accounts to private solves the problem. It does not. Here is why:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>Content leaks through connections</strong> — Friends, followers, and connections can screenshot and share your content. Once something is shared, privacy settings are irrelevant.</li>
            <li><strong>Cached and archived content</strong> — Search engines may have cached your content before you changed settings. Web archives like the Wayback Machine can store snapshots of public profiles.</li>
            <li><strong>Platform data sharing</strong> — Social platforms share data with advertisers and partners in ways that may expose information you thought was private.</li>
            <li><strong>A locked profile is itself a signal</strong> — A completely private account with a questionable username or bio sends a message. Employers may wonder what you are hiding.</li>
            <li><strong>Cross-platform exposure</strong> — Even if one account is private, tagged photos, mentions, and links from other users&apos; public profiles can expose your content.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Old Content Resurfacing: The Time Bomb Effect
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            One of the most dangerous aspects of social media is the permanence of content. Posts you made five, ten, or even fifteen years ago are still searchable and shareable. <strong>The average social media user has posted thousands of times across multiple platforms</strong>, creating a massive archive of content that reflects who you were at different stages of life — not necessarily who you are today.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            This archive becomes a liability when old content surfaces at the wrong time. A hiring process, a media interview, a promotion decision — any of these events can trigger someone to dig through your social media history. Content that was perfectly acceptable in one context can be devastating in another.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Turning Social Media Into a Reputation Asset
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Social media does not have to be a liability. When managed strategically, it becomes one of your most powerful reputation tools. <Link href="/services/for-individuals/personal-reputation-management" className="text-[#004AAD] hover:underline">Professional reputation management</Link> includes a social media strategy that transforms your profiles from potential risks into career accelerators:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>Audit and clean</strong> — Review all platforms for content that could be misinterpreted, taken out of context, or reflect poorly on you. Remove or archive anything that does not serve your professional goals.</li>
            <li><strong>Optimize LinkedIn</strong> — As the most important professional social platform, LinkedIn should be treated as a strategic asset with keyword-optimized content, regular publishing, and active engagement.</li>
            <li><strong>Establish consistency</strong> — Ensure your professional narrative, branding, and messaging are consistent across all platforms. Inconsistency breeds distrust.</li>
            <li><strong>Publish thought leadership</strong> — Use social platforms to share insights, comment on industry trends, and demonstrate expertise. This creates positive content that ranks in search results.</li>
            <li><strong>Monitor continuously</strong> — Use <Link href="/services/for-individuals/brand-mentions" className="text-[#004AAD] hover:underline">brand monitoring tools</Link> to track mentions, tags, and references across platforms so you can address potential issues before they escalate.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Reputation 500, we help professionals audit, clean, optimize, and strategically manage their social media presence as part of a comprehensive personal reputation strategy. The goal is not to eliminate your social media footprint — it is to make it work for you instead of against you.
          </p>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mt-16 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">Do employers really check social media before hiring?</h3>
              <p className="text-gray-700">Yes. According to CareerBuilder, 70% of employers screen candidates on social media. Of those, 57% have found content that caused them not to hire a candidate. Social media screening is now standard practice.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">Are private social media accounts safe from employer screening?</h3>
              <p className="text-gray-700">Not entirely. Content can be screenshotted by connections, cached by search engines, or visible through mutual connections. The existence of a private account with a provocative username is itself visible and can raise questions.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">Can old social media posts still affect my career?</h3>
              <p className="text-gray-700">Absolutely. Posts from years ago can resurface through shares, screenshots, data breaches, or web archives. The internet has a long memory, and old content has derailed careers at every level.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">Should I delete all my social media accounts?</h3>
              <p className="text-gray-700">No. Having no social media presence raises red flags with employers and clients. The better approach is to audit existing accounts, clean up problematic content, and optimize profiles to present a professional image.</p>
            </div>
            <div className="pb-6">
              <h3 className="font-bold text-lg mb-2">How can I use social media to improve my reputation?</h3>
              <p className="text-gray-700">Share industry insights, engage with thought leaders, publish original content, and maintain consistent professional branding across platforms. LinkedIn in particular is critical for building credibility and ranking well in search results.</p>
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-[#f8fafc] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Turn Your Social Media Into a Career Asset
          </h2>
          <p className="text-gray-600 mb-6">
            Get a free social media audit and learn how your profiles are shaping your professional reputation.
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
            <Link href="/blog/for-individuals/what-shows-up-when-someone-googles-your-name" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">What Shows Up When Someone Googles Your Name? →</span>
            </Link>
            <Link href="/blog/for-individuals/negative-search-results-destroy-career" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">How Negative Search Results Can Destroy Your Career →</span>
            </Link>
            <Link href="/blog/for-individuals/psychology-of-online-reputation" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">The Psychology of Online Reputation →</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
