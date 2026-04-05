import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Online Privacy: How to Protect Your Personal Information and Reduce Your Digital Footprint | Reputation 500',
  description: 'Learn how to remove personal information from data brokers, opt out of public records sites, reduce your digital footprint, and exercise your GDPR and CCPA privacy rights.',
  alternates: { canonical: `${SITE_URL}/blog/for-individuals/online-privacy-protect-personal-information` },
  openGraph: {
    title: 'Online Privacy: How to Protect Your Personal Information and Reduce Your Digital Footprint',
    description: 'Remove personal information from data brokers, opt out of public records sites, and exercise your GDPR and CCPA privacy rights.',
  },
}

export default function ArticlePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Online Privacy: How to Protect Your Personal Information and Reduce Your Digital Footprint',
    description: metadata.description,
    author: { '@type': 'Organization', name: 'Reputation 500', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'Reputation 500', url: SITE_URL },
    datePublished: '2026-04-05',
    dateModified: '2026-04-05',
    url: `${SITE_URL}/blog/for-individuals/online-privacy-protect-personal-information`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are data brokers and how do they get my information?',
        acceptedAnswer: { '@type': 'Answer', text: 'Data brokers are companies that collect, aggregate, and sell personal information. They obtain data from public records (property, court, voter registration), social media profiles, purchase histories, online activity tracking, loyalty programs, and other data brokers. Major data brokers include Spokeo, Whitepages, BeenVerified, Intelius, and PeopleFinder.' },
      },
      {
        '@type': 'Question',
        name: 'Can I remove my information from all data broker sites?',
        acceptedAnswer: { '@type': 'Answer', text: 'Most data brokers are legally required to honor opt-out requests, though the process varies by site. There are over 200 major data broker sites, and each requires a separate opt-out request. The process is time-consuming and must be repeated periodically as data brokers re-acquire information from public sources.' },
      },
      {
        '@type': 'Question',
        name: 'What rights do I have under GDPR and CCPA?',
        acceptedAnswer: { '@type': 'Answer', text: 'Under GDPR (EU residents), you have the right to access your data, request correction or deletion, restrict processing, and object to data use. Under CCPA (California residents), you have the right to know what data is collected, request deletion, opt out of data sales, and cannot be discriminated against for exercising these rights. Several other US states have enacted similar privacy laws.' },
      },
      {
        '@type': 'Question',
        name: 'How often should I check for my personal information online?',
        acceptedAnswer: { '@type': 'Answer', text: 'Conduct a thorough personal information audit at least quarterly. Search your name, phone number, email address, and home address on Google and major data broker sites. Data brokers frequently re-populate removed information from public records, so ongoing monitoring is essential for maintaining privacy.' },
      },
      {
        '@type': 'Question',
        name: 'Is it possible to completely remove yourself from the internet?',
        acceptedAnswer: { '@type': 'Answer', text: 'Complete removal is extremely difficult and rarely practical. Public records, cached content, and the interconnected nature of data sharing make total removal nearly impossible. However, you can significantly reduce your digital footprint by removing data broker listings, tightening privacy settings, and minimizing the personal information you share online going forward.' },
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
            { label: 'Online Privacy Protection' },
          ]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Online Privacy: How to Protect Your Personal Information and Reduce Your Digital Footprint
            </h1>
            <p className="text-gray-400 text-sm">Published April 5, 2026 · By Reputation 500 Team</p>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Your personal information is scattered across the internet in ways you probably do not realize. Data broker websites publish your home address, phone number, age, relatives&apos; names, and estimated income for anyone to find with a simple search. <strong>There are over 4,000 data broker companies operating globally</strong>, and the average American adult has personal data listed on more than 200 websites. This information is used by marketers, scammers, stalkers, and anyone else who wants to know about you.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Online privacy is not just about convenience — it is about safety, security, and reputation. Personal information exposed online can be used for identity theft, targeted phishing attacks, doxxing, and harassment. For professionals, exposed personal details can undermine the professional image they have worked to build. Protecting your information is a fundamental part of reputation management.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Data Brokers: The Hidden Threat to Your Privacy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Data brokers collect information from public records (property deeds, court filings, voter registration), social media profiles, purchase histories, online activity, and other data brokers. They compile comprehensive profiles and make them freely searchable — or sell them to anyone willing to pay. Sites like Spokeo, Whitepages, BeenVerified, Intelius, and PeopleFinder are among the most visible, but they represent a fraction of the total ecosystem.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>When someone searches your name on Google, data broker listings frequently appear on the first page.</strong> These results typically show your age, address, phone number, and associated family members — information you probably never intended to be public. For executives, public figures, and anyone concerned about personal safety, these listings pose a significant risk.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Opt-Out Guides: Removing Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Most data brokers are legally required to honor opt-out requests, though the process varies dramatically by site. Some require a simple online form. Others require email verification, photo ID uploads, or even written letters sent by mail. The process for removing your information from the major data broker sites involves:
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>Search for your listing</strong> on the data broker&apos;s website using your name, city, and state</li>
            <li><strong>Locate the opt-out page</strong> — this is often buried in the site&apos;s footer or privacy policy</li>
            <li><strong>Submit the opt-out request</strong> following the site&apos;s specific process</li>
            <li><strong>Verify the request</strong> through email or other confirmation methods</li>
            <li><strong>Monitor for re-listing</strong> — data brokers frequently re-acquire your information from public records</li>
          </ol>
          <p className="text-gray-700 leading-relaxed mb-6">
            With over 200 major data broker sites, manual opt-out is extraordinarily time-consuming. <Link href="/services/for-individuals/personal-reputation-management" className="text-[#004AAD] hover:underline">Reputation 500</Link> handles data broker removal comprehensively, submitting opt-out requests across all major platforms and monitoring for re-listing on an ongoing basis.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Digital Footprint Reduction
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Beyond data brokers, your digital footprint includes every piece of information you have shared online — forum posts, old social media accounts, comment histories, app permissions, newsletter subscriptions, and account registrations. <strong>Reducing your digital footprint means systematically identifying and minimizing the personal information that is publicly accessible.</strong>
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Start by searching your email addresses, phone numbers, and usernames across Google to see where they appear. Delete accounts on platforms you no longer use. Revoke app permissions that access your social media or contacts. Unsubscribe from data collection services and marketing lists. Each piece of information you remove reduces the raw material available to data brokers and bad actors.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            GDPR, CCPA, and Your Privacy Rights
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Privacy legislation is giving individuals more power over their personal data. The EU&apos;s <strong>General Data Protection Regulation (GDPR)</strong> grants European residents the right to access their data, request correction or deletion, restrict processing, and object to data use. Companies that fail to comply face fines of up to 4% of annual global revenue.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            In the United States, California&apos;s <strong>Consumer Privacy Act (CCPA)</strong> provides similar rights for California residents, including the right to know what data is collected, request deletion, and opt out of data sales. Virginia, Colorado, Connecticut, and several other states have enacted comparable legislation. Even if you do not live in these jurisdictions, many companies apply these protections broadly to simplify compliance.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Exercise these rights proactively. Send data deletion requests to companies that hold your information. Opt out of data sales on every platform that offers the option. <Link href="/services/for-individuals/reputation-monitoring" className="text-[#004AAD] hover:underline">Monitor your digital presence regularly</Link> to catch new exposures before they become entrenched.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Ongoing Privacy Maintenance
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Privacy protection is not a one-time project. Data brokers re-acquire information from public records continuously, new data breaches expose additional personal details regularly, and the digital footprint you leave through daily online activity is constantly growing. Effective privacy maintenance requires quarterly audits, ongoing monitoring, and a conscious effort to minimize the personal information you share online.
          </p>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mt-16 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">What are data brokers and how do they get my information?</h3>
              <p className="text-gray-700">Data brokers collect and sell personal information obtained from public records, social media, purchase histories, and online tracking. Major examples include Spokeo, Whitepages, and BeenVerified.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">Can I remove my information from all data broker sites?</h3>
              <p className="text-gray-700">Most data brokers honor opt-out requests, but there are over 200 major sites, each requiring separate requests. The process must be repeated periodically as data brokers re-acquire information.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">What rights do I have under GDPR and CCPA?</h3>
              <p className="text-gray-700">GDPR grants data access, correction, deletion, and processing objection rights. CCPA provides similar rights including knowing what data is collected, requesting deletion, and opting out of data sales.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">How often should I check for my personal information online?</h3>
              <p className="text-gray-700">Conduct thorough audits at least quarterly. Search your name, phone number, and email on Google and major data broker sites, as removed information is frequently re-populated.</p>
            </div>
            <div className="pb-6">
              <h3 className="font-bold text-lg mb-2">Is it possible to completely remove yourself from the internet?</h3>
              <p className="text-gray-700">Complete removal is extremely difficult due to public records and data sharing. However, you can significantly reduce your digital footprint through data broker removal, privacy settings, and minimizing information sharing.</p>
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-[#f8fafc] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Want to Protect Your Personal Information Online?
          </h2>
          <p className="text-gray-600 mb-6">
            Get a comprehensive privacy audit and learn exactly where your personal information is exposed — and how to remove it.
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
            <Link href="/blog/for-individuals/clean-up-social-media-history" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">How to Clean Up Your Social Media History →</span>
            </Link>
            <Link href="/blog/for-individuals/personal-reputation-monitoring" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">Personal Reputation Monitoring: How to Track What People Find About You →</span>
            </Link>
            <Link href="/blog/for-individuals/remove-negative-content-from-google" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">How to Remove Negative Content from Google →</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
