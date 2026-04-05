import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Personal Reputation Monitoring: How to Track What People Find About You Online | Reputation 500',
  description: 'Set up a comprehensive personal reputation monitoring system using Google Alerts, social listening tools, and name search auditing to protect your online presence.',
  alternates: { canonical: `${SITE_URL}/blog/for-individuals/personal-reputation-monitoring` },
  openGraph: {
    title: 'Personal Reputation Monitoring: How to Track What People Find About You Online',
    description: 'Set up a comprehensive personal reputation monitoring system using Google Alerts, social listening, and name search auditing.',
  },
}

export default function ArticlePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Personal Reputation Monitoring: How to Track What People Find About You Online',
    description: metadata.description,
    author: { '@type': 'Organization', name: 'Reputation 500', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'Reputation 500', url: SITE_URL },
    datePublished: '2026-04-05',
    dateModified: '2026-04-05',
    url: `${SITE_URL}/blog/for-individuals/personal-reputation-monitoring`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How often should I monitor my online reputation?',
        acceptedAnswer: { '@type': 'Answer', text: 'At minimum, conduct a thorough name search audit monthly and review Google Alerts daily. For executives, public figures, or anyone with elevated reputation risk, real-time monitoring through professional tools is recommended. The faster you detect a potential threat, the easier and less expensive it is to address.' },
      },
      {
        '@type': 'Question',
        name: 'Is Google Alerts enough for reputation monitoring?',
        acceptedAnswer: { '@type': 'Answer', text: 'Google Alerts is a useful starting point but has significant limitations. It misses many mentions, does not cover social media, and has delays in reporting. For comprehensive monitoring, combine Google Alerts with social listening tools, image search monitoring, and regular manual search audits.' },
      },
      {
        '@type': 'Question',
        name: 'What should I do if I find negative content about myself online?',
        acceptedAnswer: { '@type': 'Answer', text: 'First, document the content with screenshots and URLs. Assess whether it qualifies for removal through Google\'s policies, DMCA, or legal channels. If removal is not possible, begin a content suppression strategy by creating and optimizing positive web properties. For serious threats, consult with a reputation management professional immediately.' },
      },
      {
        '@type': 'Question',
        name: 'Can I monitor what AI assistants say about me?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Periodically query major AI platforms like ChatGPT, Gemini, and Perplexity with your name to see what information they surface. AI assistants pull from indexed web content, so monitoring and improving your web presence directly impacts how AI represents you.' },
      },
      {
        '@type': 'Question',
        name: 'What tools do professionals use for personal reputation monitoring?',
        acceptedAnswer: { '@type': 'Answer', text: 'Professional reputation monitoring typically involves enterprise tools like Brandwatch, Mention, or Talkwalker for social listening; SEMrush or Ahrefs for search result tracking; Google Alerts for web mentions; and specialized services that monitor data broker sites, court records, and public databases.' },
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
            { label: 'Reputation Monitoring' },
          ]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Personal Reputation Monitoring: How to Track What People Find About You Online
            </h1>
            <p className="text-gray-400 text-sm">Published April 5, 2026 · By Reputation 500 Team</p>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            You cannot protect what you do not monitor. Every day, new content is published online — blog posts, social media mentions, news articles, forum comments, data broker listings — and any of it could contain your name. <strong>78% of people who experienced reputation damage say they did not know about the negative content until it had already caused harm</strong>, whether that was a missed job opportunity, a lost client, or a damaged relationship.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Personal reputation monitoring is the practice of systematically tracking what appears online about you and responding to threats before they escalate. It is not paranoia — it is professional discipline. This guide walks you through setting up a monitoring system that catches problems early and keeps you in control of your narrative.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Google Alerts: The Essential Starting Point
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Google Alerts is free, simple to configure, and should be the first tool in your monitoring stack. Set up alerts for your full name (in quotation marks for exact match), your name with your company, your name with your industry, and common misspellings of your name. Configure alerts for delivery as they happen rather than once daily — <strong>early detection is the single most important factor in reputation damage control</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            However, Google Alerts has significant limitations. It does not monitor social media, misses content behind paywalls, and can have delays of several days. Treat it as a baseline, not a complete solution.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Social Listening: Monitoring Beyond Search Engines
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Social media mentions can spread faster and reach more people than traditional web content. A single tweet or Instagram post can go viral in hours, and by the time it appears in search results, the damage may already be done. Social listening tools monitor mentions of your name across Twitter/X, Facebook, Instagram, Reddit, YouTube, TikTok, and other platforms in real time.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Tools like Mention, Brand24, and Talkwalker offer personal monitoring plans that track your name across social platforms, blogs, forums, and news sites simultaneously. <strong>These tools detect mentions that Google Alerts misses approximately 60% of the time.</strong> For executives and public figures, professional <Link href="/services/for-individuals/brand-mentions" className="text-[#004AAD] hover:underline">brand mention monitoring</Link> is an essential investment.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Name Search Auditing: Your Monthly Reputation Check-Up
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Beyond automated monitoring, conduct a manual search audit of your name at least once per month. Open an incognito browser window (to avoid personalized results), search your name on Google, Bing, and DuckDuckGo, and document what appears on the first two pages. Pay attention to changes — new results appearing, existing results changing positions, and any content shifting in sentiment.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            During your audit, also check Google Images for your name, Google News for recent mentions, and YouTube for video results. <strong>Image search results are often overlooked but can be the first thing someone sees</strong> when they search your name, especially on mobile devices where image carousels are prominently displayed.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            What to Track: The Complete Monitoring Checklist
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            A comprehensive monitoring system should track the following elements:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>Search result positions</strong> — Which results appear on page one for your name, and are they moving up or down?</li>
            <li><strong>New web mentions</strong> — Blog posts, articles, forums, and comments that reference your name</li>
            <li><strong>Social media mentions</strong> — Tags, mentions, shares, and comments across all platforms</li>
            <li><strong>Review sites</strong> — If applicable, monitor professional review platforms like Healthgrades, Avvo, or RateMDs</li>
            <li><strong>Data broker sites</strong> — Whitepages, Spokeo, BeenVerified, and similar sites that publish personal information</li>
            <li><strong>Image results</strong> — Photos associated with your name across Google Images</li>
            <li><strong>AI assistant mentions</strong> — What ChatGPT, Gemini, and Perplexity say when asked about you</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Setting Up Alerts: A Step-by-Step Guide
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Start with Google Alerts at google.com/alerts. Create the following alerts with delivery set to &quot;as-it-happens&quot; and sources set to &quot;automatic&quot;: your full name in quotes, your name plus your company name, your name plus your city or industry, and any known aliases or maiden names. Next, set up a social listening tool — even a free-tier plan from a platform like Mention captures significantly more than Google Alerts alone.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            For comprehensive monitoring that requires no manual effort, <Link href="/services/for-individuals/reputation-monitoring" className="text-[#004AAD] hover:underline">Reputation 500&apos;s monitoring service</Link> provides enterprise-grade tracking across all channels with real-time alerts and monthly reports that show exactly how your online reputation is evolving. Our clients receive immediate notification when anything requires attention.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Responding to What You Find
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Monitoring is only valuable if you act on what you discover. Create a response protocol: positive mentions should be acknowledged and amplified through sharing and engagement. Neutral mentions should be monitored for changes in sentiment. Negative mentions require immediate assessment — is the content removable, or does it need to be suppressed? <strong>Content addressed within the first 48 hours of publication is significantly easier to manage than content that has had time to gain traction and backlinks.</strong>
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            For serious threats — defamatory content, privacy violations, or crisis-level negative coverage — escalate immediately to a professional. The difference between a manageable situation and a reputation crisis often comes down to response time.
          </p>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mt-16 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">How often should I monitor my online reputation?</h3>
              <p className="text-gray-700">At minimum, conduct a thorough name search audit monthly and review Google Alerts daily. For executives or anyone with elevated reputation risk, real-time monitoring through professional tools is recommended.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">Is Google Alerts enough for reputation monitoring?</h3>
              <p className="text-gray-700">Google Alerts is a useful starting point but has significant limitations. It misses many mentions, does not cover social media, and has delays. Combine it with social listening tools and regular manual search audits for comprehensive coverage.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">What should I do if I find negative content about myself online?</h3>
              <p className="text-gray-700">Document the content with screenshots and URLs. Assess whether it qualifies for removal through Google&apos;s policies, DMCA, or legal channels. If removal is not possible, begin a content suppression strategy.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">Can I monitor what AI assistants say about me?</h3>
              <p className="text-gray-700">Yes. Periodically query major AI platforms like ChatGPT, Gemini, and Perplexity with your name. AI assistants pull from indexed web content, so improving your web presence directly impacts how AI represents you.</p>
            </div>
            <div className="pb-6">
              <h3 className="font-bold text-lg mb-2">What tools do professionals use for personal reputation monitoring?</h3>
              <p className="text-gray-700">Professional monitoring uses enterprise tools like Brandwatch, Mention, or Talkwalker for social listening; SEMrush or Ahrefs for search tracking; Google Alerts for web mentions; and specialized services for data broker and public record monitoring.</p>
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-[#f8fafc] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Want Professional Reputation Monitoring?
          </h2>
          <p className="text-gray-600 mb-6">
            Stop guessing what people find when they search your name. Get real-time monitoring and monthly reports that keep you informed and protected.
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
            <Link href="/blog/for-individuals/handle-personal-reputation-crisis" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">How to Handle a Personal Reputation Crisis →</span>
            </Link>
            <Link href="/blog/for-individuals/online-privacy-protect-personal-information" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">Online Privacy: How to Protect Your Personal Information →</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
