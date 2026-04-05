import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'How to Optimize Your Personal Website for Reputation Management | Reputation 500',
  description: 'Learn how to build and optimize a personal website that ranks #1 for your name on Google. Domain selection, SEO fundamentals, content strategy, and schema markup.',
  alternates: { canonical: `${SITE_URL}/blog/for-individuals/optimize-personal-website-reputation` },
  openGraph: {
    title: 'How to Optimize Your Personal Website for Reputation Management',
    description: 'Build and optimize a personal website that ranks #1 for your name on Google with the right domain, SEO, content, and schema markup.',
  },
}

export default function ArticlePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Optimize Your Personal Website for Reputation Management',
    description: metadata.description,
    author: { '@type': 'Organization', name: 'Reputation 500', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'Reputation 500', url: SITE_URL },
    datePublished: '2026-04-05',
    dateModified: '2026-04-05',
    url: `${SITE_URL}/blog/for-individuals/optimize-personal-website-reputation`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What domain should I use for my personal website?',
        acceptedAnswer: { '@type': 'Answer', text: 'Your exact name as a .com domain (e.g., johnsmith.com) is the strongest choice for reputation management. If the .com is taken, alternatives like .co, .me, or adding your middle initial or profession (e.g., johnsmithmd.com) work well. The key is matching your name as closely as possible since Google uses domain names as a strong relevance signal.' },
      },
      {
        '@type': 'Question',
        name: 'How long does it take for a personal website to rank #1 for my name?',
        acceptedAnswer: { '@type': 'Answer', text: 'For individuals with uncommon names, a well-optimized personal website can rank on the first page within 2-4 weeks and reach the #1 position within 2-3 months. For common names, it may take 4-6 months with consistent SEO effort. Factors that speed up ranking include a name-based domain, quality backlinks, and regular content publishing.' },
      },
      {
        '@type': 'Question',
        name: 'What content should I put on my personal website?',
        acceptedAnswer: { '@type': 'Answer', text: 'Essential content includes a professional biography, your areas of expertise, career accomplishments with specific metrics, media features and press mentions, a blog or articles section demonstrating thought leadership, professional headshots, and contact information. The more unique, high-quality content your site has, the better it will rank.' },
      },
      {
        '@type': 'Question',
        name: 'What is Person schema markup and why does it matter?',
        acceptedAnswer: { '@type': 'Answer', text: 'Person schema (schema.org/Person) is structured data that tells search engines your website is the authoritative source about a specific individual. It includes your name, job title, employer, education, social media profiles, and other identifying information. Implementing Person schema helps Google understand who you are and can improve your chances of appearing in knowledge panels.' },
      },
      {
        '@type': 'Question',
        name: 'Do I need a blog on my personal website?',
        acceptedAnswer: { '@type': 'Answer', text: 'A blog significantly improves your website\'s ranking potential. Regular content publication signals to Google that your site is active and authoritative. Blog posts targeting industry keywords also create additional entry points for search traffic and provide shareable content that attracts backlinks naturally.' },
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
            { label: 'Optimize Personal Website' },
          ]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              How to Optimize Your Personal Website for Reputation Management
            </h1>
            <p className="text-gray-400 text-sm">Published April 5, 2026 · By Reputation 500 Team</p>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Your personal website is the single most important digital asset you own for reputation management. Unlike social media profiles where you are subject to platform rules and algorithm changes, your website is entirely under your control. <strong>A properly optimized personal website should rank in the top three Google results for your name</strong> — and ideally at the number one position — giving you the ability to shape what the world sees first when they look you up.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Yet most personal websites fail at this fundamental objective. They are built as static digital business cards that lack the SEO fundamentals needed to compete in search results. This guide covers everything you need to build a personal website that not only looks professional but dominates Google for your name.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Domain Selection: Your Most Important Decision
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your domain name is the strongest signal you can send to Google about the relevance of your website to name-based searches. <strong>A domain that exactly matches your name (yourname.com) has a significant ranking advantage</strong> over any other domain format. When Google sees a domain that matches the search query, it treats the site as inherently relevant.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            If your exact name .com is not available, consider these alternatives in order of effectiveness: yourname.co, yourfullname.com (including middle name or initial), yournameprofession.com (e.g., johnsmithmd.com), or yourname.me. Avoid hyphens, numbers, or creative spellings that deviate from your actual name. The closer the domain matches the search query, the better.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            SEO Fundamentals for Personal Websites
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Search engine optimization for a personal website follows the same principles as any other site, with a specific focus on name-based keywords. Essential <Link href="/services/seo" className="text-[#004AAD] hover:underline">SEO elements</Link> include:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>Title tags</strong> — Your homepage title should lead with your full name followed by a professional descriptor (e.g., &quot;John Smith | Marketing Executive &amp; Speaker&quot;)</li>
            <li><strong>Meta descriptions</strong> — Write compelling descriptions that include your name and key credentials</li>
            <li><strong>Header tags</strong> — Use H1 tags with your name on the homepage and H2s for key sections of your biography</li>
            <li><strong>URL structure</strong> — Keep URLs clean and descriptive (e.g., yourname.com/about, yourname.com/media)</li>
            <li><strong>Image optimization</strong> — Name all image files with your name (e.g., john-smith-headshot.jpg) and include alt text</li>
            <li><strong>Mobile responsiveness</strong> — Google uses mobile-first indexing, so your site must perform flawlessly on phones</li>
            <li><strong>Page speed</strong> — Aim for under 3 seconds load time; slow sites are penalized in rankings</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Content Strategy: What Your Website Needs
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            A personal website with only a homepage and contact page will not outrank established web properties. To rank number one for your name, your site needs substantial, unique content. Essential pages include a detailed professional biography (not a resume — a narrative that showcases your journey, expertise, and philosophy), a portfolio or accomplishments page, a media and press page linking to any features or interviews, and a blog or insights section.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The blog is particularly important. <strong>Personal websites with active blogs rank significantly higher than static sites</strong> because Google rewards fresh content and consistent publishing signals. Write about your industry, share professional insights, and create content that demonstrates your expertise. Our <Link href="/services/seo/content-writing" className="text-[#004AAD] hover:underline">content writing team</Link> specializes in creating this type of authority-building content for individuals.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Schema Markup: Speaking Google&apos;s Language
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Person schema markup (schema.org/Person) is structured data that explicitly tells Google your website is the authoritative source about a specific individual. When implemented correctly, Person schema provides Google with your name, job title, employer, education, social media profiles, professional affiliations, and other identifying details in a format optimized for machine reading.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Websites with properly implemented Person schema are significantly more likely to trigger Google Knowledge Panels</strong> — the informational sidebar that appears in search results for notable individuals. Even if you do not currently have a Knowledge Panel, Person schema establishes the foundation for one and helps Google connect your website to your identity across the web.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Why Your Website Should Rank Number One
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            When your personal website ranks at the top of search results, you control the first impression. The number one position receives <strong>approximately 31.7% of all clicks</strong> for a search query, meaning nearly a third of everyone who searches your name will visit a page you fully control. That is an extraordinary advantage for reputation management — you decide what they see, what message they receive, and where they go next.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            A top-ranking personal website also pushes everything else down. If a negative article currently sits at position three, getting your website to position one shifts that article to position four, reducing its click-through rate by approximately 60%. At Reputation 500, every personal website we build is engineered with one goal: ranking number one for our client&apos;s name.
          </p>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mt-16 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">What domain should I use for my personal website?</h3>
              <p className="text-gray-700">Your exact name as a .com domain is the strongest choice. If unavailable, .co, .me, or adding your profession work well. The key is matching your name as closely as possible.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">How long does it take for a personal website to rank #1?</h3>
              <p className="text-gray-700">For uncommon names, 2-3 months with good optimization. For common names, 4-6 months with consistent SEO effort. Quality backlinks and regular content publishing accelerate the timeline.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">What content should I put on my personal website?</h3>
              <p className="text-gray-700">Include a detailed biography, areas of expertise, career accomplishments, media features, a blog section, professional headshots, and contact information.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">What is Person schema markup and why does it matter?</h3>
              <p className="text-gray-700">Person schema is structured data that tells search engines your website is authoritative about a specific individual. It improves ranking potential and can trigger Google Knowledge Panels.</p>
            </div>
            <div className="pb-6">
              <h3 className="font-bold text-lg mb-2">Do I need a blog on my personal website?</h3>
              <p className="text-gray-700">A blog significantly improves ranking potential. Regular publishing signals authority to Google and creates additional search traffic entry points and backlink opportunities.</p>
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-[#f8fafc] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Want a Personal Website That Ranks Number One?
          </h2>
          <p className="text-gray-600 mb-6">
            We build and optimize personal websites engineered to dominate Google search results for your name.
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
            <Link href="/blog/for-individuals/build-personal-brand-dominate-google" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">How to Build a Personal Brand That Dominates Google →</span>
            </Link>
            <Link href="/blog/for-individuals/suppress-negative-articles" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">How to Suppress Negative Articles When Removal Is Not an Option →</span>
            </Link>
            <Link href="/blog/for-individuals/executives-guide-linkedin-authority" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">The Executive&apos;s Guide to LinkedIn Authority →</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
