import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'How to Clean Up Your Social Media History: Audit, Delete, and Protect Your Reputation | Reputation 500',
  description: 'Learn how to audit old social media posts, delete damaging content, adjust privacy settings, and protect your personal reputation from your own digital history.',
  alternates: { canonical: `${SITE_URL}/blog/for-individuals/clean-up-social-media-history` },
  openGraph: {
    title: 'How to Clean Up Your Social Media History: Audit, Delete, and Protect Your Reputation',
    description: 'Learn how to audit old social media posts, delete damaging content, and protect your reputation from your own digital history.',
  },
}

export default function ArticlePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Clean Up Your Social Media History: Audit, Delete, and Protect Your Reputation',
    description: metadata.description,
    author: { '@type': 'Organization', name: 'Reputation 500', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'Reputation 500', url: SITE_URL },
    datePublished: '2026-04-05',
    dateModified: '2026-04-05',
    url: `${SITE_URL}/blog/for-individuals/clean-up-social-media-history`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Should I delete all my old social media posts?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. A complete purge can look suspicious and removes positive content that helps your reputation. Instead, selectively remove posts that are controversial, offensive, unprofessional, or no longer reflect who you are. Keep posts that demonstrate expertise, positive relationships, and professional accomplishments.' },
      },
      {
        '@type': 'Question',
        name: 'Can employers see my deleted social media posts?',
        acceptedAnswer: { '@type': 'Answer', text: 'Once properly deleted from the platform, posts are generally not accessible. However, content may still exist in Google\'s cache, the Internet Archive, or screenshots taken by others. Acting quickly to delete problematic content before it is cached or screenshotted is important. For cached content, you can request Google remove outdated URLs.' },
      },
      {
        '@type': 'Question',
        name: 'How far back should I audit my social media?',
        acceptedAnswer: { '@type': 'Answer', text: 'Audit everything. Posts from over a decade ago have been used against professionals in hiring decisions, political campaigns, and media investigations. Go back to the very beginning of each account and review all content. Pay special attention to content from your teens and early twenties, when judgment may have been less refined.' },
      },
      {
        '@type': 'Question',
        name: 'What tools can help me clean up social media history?',
        acceptedAnswer: { '@type': 'Answer', text: 'Tools like TweetDelete, Redact, and Jumbo can automate bulk deletion on platforms like Twitter/X and Facebook. Each major platform also offers data download features that let you review all your content before deciding what to remove. For a thorough professional audit, reputation management firms use specialized tools to identify problematic content across all platforms.' },
      },
      {
        '@type': 'Question',
        name: 'Should I delete old social media accounts I no longer use?',
        acceptedAnswer: { '@type': 'Answer', text: 'It depends. If the account contains embarrassing content or uses an unprofessional handle, delete it. If the account is clean and uses your real name, keep it — inactive social media profiles still rank on Google and occupy valuable search result positions that might otherwise be filled by less favorable content.' },
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
            { label: 'Clean Up Social Media' },
          ]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              How to Clean Up Your Social Media History: Audit, Delete, and Protect Your Reputation
            </h1>
            <p className="text-gray-400 text-sm">Published April 5, 2026 · By Reputation 500 Team</p>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Your social media history is a time capsule — and not always a flattering one. Posts, photos, and comments from years or even decades ago remain publicly accessible unless you take action. <strong>According to recent surveys, 70% of employers screen candidates&apos; social media profiles</strong>, and 57% have decided not to hire someone based on what they found. What you posted in college, during a political debate, or after a bad day at work could be the first thing a future employer, client, or partner sees about you.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Cleaning up your social media history is not about erasing your past — it is about curating a digital presence that reflects who you are today. This guide walks you through auditing your accounts, deciding what to keep and what to remove, and configuring privacy settings that protect you going forward.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Auditing Your Social Media: Where to Start
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Begin with a complete inventory of every social media account you have ever created. This includes major platforms like Facebook, Instagram, Twitter/X, TikTok, and LinkedIn, but also older or forgotten accounts on platforms like Tumblr, MySpace, Reddit, and forum sites. <strong>The average person has created 8-10 social media accounts over their lifetime</strong>, and many forget about accounts that still contain searchable content.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Search your name on Google, Bing, and DuckDuckGo to identify which accounts are publicly visible. Check Google Images for photos linked to your social profiles. Use the data download feature available on most major platforms (Facebook, Twitter, Instagram, and LinkedIn all offer this) to get a complete archive of your posting history for thorough review.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            What to Delete: The Red Flag Checklist
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Not everything needs to go. Focus your cleanup on content that falls into these high-risk categories:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>Political rants or extreme opinions</strong> — Content that is divisive, regardless of your position, can alienate employers, clients, and partners</li>
            <li><strong>Inappropriate photos or videos</strong> — Party photos, provocative images, or anything that does not align with your professional image</li>
            <li><strong>Negative comments about employers or colleagues</strong> — Past complaints about bosses, coworkers, or companies signal a pattern to future employers</li>
            <li><strong>Offensive humor or insensitive remarks</strong> — Jokes that seemed acceptable years ago may not meet current standards</li>
            <li><strong>Personal disputes made public</strong> — Arguments, call-outs, or confrontational exchanges</li>
            <li><strong>Content involving substance use</strong> — Photos or posts referencing drugs or excessive alcohol consumption</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Deletion Strategies: Platform by Platform
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Each platform handles deletion differently. Facebook allows you to manage posts through the Activity Log, where you can delete or change the audience of individual posts. Use the &quot;Manage Activity&quot; feature to bulk-archive old content. Twitter/X does not offer built-in bulk deletion, but third-party tools like TweetDelete and Semiphemeral can automate the process. Instagram allows individual post deletion or archiving, which hides content from public view without permanently removing it.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            For accounts on platforms you no longer use, consider full account deletion. At <Link href="/services/for-individuals/personal-reputation-management" className="text-[#004AAD] hover:underline">Reputation 500</Link>, we help clients conduct comprehensive social media audits across all platforms, identifying and addressing every piece of content that could pose a reputation risk.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Privacy Settings: Your Ongoing Defense
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            After cleaning up existing content, lock down your privacy settings to prevent future exposure. On Facebook, set your default post visibility to &quot;Friends&quot; and limit who can see your friends list. On Instagram, consider switching personal accounts to private while maintaining a separate public professional account. Review and restrict what information is visible on your profile — phone numbers, email addresses, and location data should not be public.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Review tagged photos and mentions settings.</strong> On most platforms, you can require approval before tagged content appears on your profile. Enable this feature on every platform that offers it. A single tagged photo from a friend&apos;s account can undo hours of careful cleanup work.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            What to Keep: Content That Helps Your Reputation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Social media cleanup is not about creating a blank slate. Keep content that reinforces your professional reputation: posts about career achievements, industry insights, community involvement, awards and recognitions, and positive personal moments that present you in a favorable light. <strong>A social media history that shows genuine personality alongside professional competence is more trustworthy</strong> than an account that appears sterile or newly created.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Consider your <Link href="/services/for-individuals/reputation-monitoring" className="text-[#004AAD] hover:underline">ongoing social media monitoring</Link> as part of your reputation strategy. Regular check-ins on what is publicly visible, combined with thoughtful content creation going forward, ensure that your social media history works for you rather than against you.
          </p>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mt-16 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">Should I delete all my old social media posts?</h3>
              <p className="text-gray-700">No. Selectively remove posts that are controversial, offensive, or unprofessional. Keep posts that demonstrate expertise, positive relationships, and professional accomplishments.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">Can employers see my deleted social media posts?</h3>
              <p className="text-gray-700">Once properly deleted, posts are generally not accessible. However, content may still exist in Google&apos;s cache or screenshots. Acting quickly before content is cached is important.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">How far back should I audit my social media?</h3>
              <p className="text-gray-700">Audit everything from the very beginning of each account. Posts from over a decade ago have been used against professionals in hiring decisions and media investigations.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">What tools can help me clean up social media history?</h3>
              <p className="text-gray-700">Tools like TweetDelete, Redact, and Jumbo can automate bulk deletion. Each major platform also offers data download features for thorough review before deciding what to remove.</p>
            </div>
            <div className="pb-6">
              <h3 className="font-bold text-lg mb-2">Should I delete old social media accounts I no longer use?</h3>
              <p className="text-gray-700">If the account contains embarrassing content, delete it. If it is clean and uses your real name, keep it — inactive profiles still rank on Google and occupy valuable search result positions.</p>
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-[#f8fafc] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Need Help Cleaning Up Your Digital History?
          </h2>
          <p className="text-gray-600 mb-6">
            Get a comprehensive social media audit that identifies every piece of content that could affect your reputation.
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
            <Link href="/blog/for-individuals/social-media-and-personal-reputation" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">How Social Media Shapes Your Personal Reputation →</span>
            </Link>
            <Link href="/blog/for-individuals/online-privacy-protect-personal-information" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">Online Privacy: How to Protect Your Personal Information →</span>
            </Link>
            <Link href="/blog/for-individuals/what-shows-up-when-someone-googles-your-name" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">What Shows Up When Someone Googles Your Name? →</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
