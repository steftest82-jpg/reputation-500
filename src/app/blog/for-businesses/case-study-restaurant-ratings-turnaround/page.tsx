import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Case Study: Restaurant Group Goes From 3.2 to 4.7 Stars With 23% Revenue Increase | Reputation 500',
  description: 'How a multi-location restaurant group improved ratings from 3.2 to 4.7 stars and increased revenue 23% through review management and reputation strategy.',
  alternates: { canonical: `${SITE_URL}/blog/for-businesses/case-study-restaurant-ratings-turnaround` },
  openGraph: {
    title: 'Case Study: Restaurant Group Goes From 3.2 to 4.7 Stars With 23% Revenue Increase',
    description: 'How a multi-location restaurant group improved ratings from 3.2 to 4.7 stars and increased revenue 23%.',
  },
}

export default function ArticlePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Case Study: Restaurant Group Goes From 3.2 to 4.7 Stars With 23% Revenue Increase',
    description: metadata.description,
    author: { '@type': 'Organization', name: 'Reputation 500', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'Reputation 500', url: SITE_URL },
    datePublished: '2026-04-05',
    dateModified: '2026-04-05',
    url: `${SITE_URL}/blog/for-businesses/case-study-restaurant-ratings-turnaround`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How can a restaurant improve its online ratings quickly?',
        acceptedAnswer: { '@type': 'Answer', text: 'The fastest path to improving restaurant ratings involves three simultaneous efforts: respond professionally to every existing negative review (this signals to potential customers that you care), implement a systematic review generation program that encourages satisfied diners to leave reviews, and address the operational issues identified in negative feedback. Most restaurants see meaningful rating improvements within 60-90 days with a structured approach.' },
      },
      {
        '@type': 'Question',
        name: 'What is the impact of star ratings on restaurant revenue?',
        acceptedAnswer: { '@type': 'Answer', text: 'Research consistently shows that a one-star increase on platforms like Yelp or Google can boost restaurant revenue by 5-9%. Restaurants with ratings above 4.0 stars see significantly higher reservation rates, and those above 4.5 stars often command a premium on pricing. Conversely, restaurants with ratings below 3.5 stars lose an estimated 30-50% of potential first-time customers.' },
      },
      {
        '@type': 'Question',
        name: 'How should restaurants respond to negative reviews?',
        acceptedAnswer: { '@type': 'Answer', text: 'Respond within 24-48 hours with empathy and professionalism. Acknowledge the concern, apologize for the experience without making excuses, explain any corrective action taken, and invite the reviewer to return for a better experience. Never argue publicly, blame the customer, or offer compensation in the review response (handle that privately). Professional responses to negative reviews actually improve perception among potential customers reading them.' },
      },
      {
        '@type': 'Question',
        name: 'How many reviews does a restaurant need to improve its rating?',
        acceptedAnswer: { '@type': 'Answer', text: 'The number depends on your current review volume and rating. For a restaurant with 100 reviews at 3.2 stars, approximately 150-200 new 5-star reviews are needed to reach 4.5 stars. However, the key is consistency — generating a steady flow of 15-25 reviews per month per location creates sustainable improvement rather than a suspicious spike that platforms may flag.' },
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
            { label: 'Restaurant Ratings Turnaround' },
          ]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Case Study: Restaurant Group Goes From 3.2 to 4.7 Stars With 23% Revenue Increase
            </h1>
            <p className="text-gray-400 text-sm">Published April 5, 2026 · By Reputation 500 Team</p>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A four-location restaurant group in the Southeastern United States was struggling. Despite excellent food and a loyal local following, their Google ratings across all four locations averaged <strong>3.2 stars</strong>. New customers were choosing competitors. Revenue had plateaued. The owner knew the reviews did not reflect the quality of the dining experience — but did not know how to fix it.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Within eight months of partnering with Reputation 500, their average rating reached <strong>4.7 stars</strong>, total review volume increased by <strong>340%</strong>, and revenue across all locations grew by <strong>23%</strong>. Here is exactly how we did it.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 italic text-sm border-l-4 border-gray-300 pl-4">
            Note: Client details have been anonymized. The strategies and results are based on a real engagement.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            The Problem: Great Food, Terrible Online Presence
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our initial audit revealed a pattern common to many restaurant groups:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>Low review volume:</strong> Each location averaged only 45-60 Google reviews, meaning a handful of negative experiences had an outsized impact on the overall rating</li>
            <li><strong>No review response system:</strong> Fewer than 10% of reviews — positive or negative — had received any response from management</li>
            <li><strong>Inconsistent profiles:</strong> Two locations had outdated hours, one had the wrong phone number, and menus were either missing or out of date across all platforms</li>
            <li><strong>No review generation process:</strong> Satisfied customers were not being prompted to share their experiences online</li>
            <li><strong>Negative reviews clustered around solvable issues:</strong> Wait times, reservation confusion, and one specific service issue at the busiest location</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Phase 1: Foundation (Weeks 1-4)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Before generating new reviews, we needed to fix the fundamentals:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>Profile optimization:</strong> Updated all Google Business Profiles, Yelp listings, TripAdvisor pages, and OpenTable profiles with accurate information, professional photos, current menus, and complete business details</li>
            <li><strong>Review response system:</strong> Created response templates and trained the management team to respond to every review within 24 hours — positive reviews with gratitude, negative reviews with empathy and resolution</li>
            <li><strong>Operational improvements:</strong> Worked with the client to address the specific service issues identified in negative reviews, including a reservation system upgrade and additional training for the busiest location&apos;s front-of-house team</li>
            <li><strong><Link href="/services/for-businesses/reputation-monitoring" className="text-[#004AAD] hover:underline">Monitoring setup</Link>:</strong> Deployed real-time alerts for any new reviews or mentions across all platforms</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Phase 2: Review Generation (Months 2-4)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            With the foundation in place, we launched a systematic <Link href="/services/for-businesses/ratings-optimization" className="text-[#004AAD] hover:underline">review generation program</Link>:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>Post-dining follow-up:</strong> Automated text and email follow-ups sent 2 hours after each dining experience, with a direct link to leave a Google review</li>
            <li><strong>Staff training:</strong> Servers and hosts were trained to mention reviews naturally during positive interactions — not scripted pitches, but genuine conversations about sharing their experience</li>
            <li><strong>Table cards and receipts:</strong> Subtle physical prompts at each location with QR codes linking directly to the Google review page</li>
            <li><strong>Loyalty program integration:</strong> Existing loyalty members received personalized review requests referencing their most recent visit</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Results after 90 days:</strong> Review volume increased from an average of 52 reviews per location to 178 reviews per location. New reviews averaged <strong>4.8 stars</strong> because the operational improvements had already addressed the key complaint areas. Average ratings climbed from 3.2 to 4.1 stars across all locations.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Phase 3: Sustained Growth (Months 5-8)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            With ratings improving, we expanded the strategy to build long-term reputation equity:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>Local PR:</strong> Secured features in three local publications and two food blogs highlighting the restaurant group&apos;s seasonal menus and community involvement</li>
            <li><strong>Social proof amplification:</strong> Created a system to share the best customer reviews across social media, building social proof and encouraging more reviews</li>
            <li><strong>Platform diversification:</strong> Extended the review generation program to Yelp, TripAdvisor, and OpenTable to build strength across all platforms</li>
            <li><strong>Competitive monitoring:</strong> Tracked competitor ratings and reviews to identify opportunities and maintain the competitive advantage</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            The Results After 8 Months
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The numbers tell the story:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>Average Google rating:</strong> 3.2 stars → <strong>4.7 stars</strong></li>
            <li><strong>Total review volume:</strong> 208 reviews → <strong>916 reviews</strong> (340% increase)</li>
            <li><strong>Review response rate:</strong> Less than 10% → <strong>100%</strong></li>
            <li><strong>Revenue increase:</strong> <strong>23% growth</strong> across all four locations</li>
            <li><strong>New customer acquisition:</strong> Google Maps clicks-to-call increased by <strong>67%</strong></li>
            <li><strong>Reservation volume:</strong> Online reservations grew by <strong>41%</strong></li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            The most significant finding: <strong>the revenue increase was almost entirely driven by new customers</strong>. The existing loyal customer base continued their regular visits, but the improved online presence attracted diners who had previously been choosing higher-rated competitors.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Key Lessons for Restaurant Operators
          </h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>Fix the product first</strong> — Review generation without operational improvement just accelerates negative reviews. Address the complaints, then generate volume.</li>
            <li><strong>Respond to everything</strong> — Consistent review responses signal that you care. Potential customers read management responses even more carefully than the reviews themselves.</li>
            <li><strong>Volume dilutes negatives</strong> — A restaurant with 50 reviews and 5 negative ones looks risky. A restaurant with 250 reviews and 5 negative ones looks excellent. Review volume is as important as rating.</li>
            <li><strong>Make it easy</strong> — Every friction point in the review process costs you reviews. Direct links, QR codes, and timely follow-ups remove barriers.</li>
            <li><strong>It compounds</strong> — Higher ratings attract more customers, which generates more reviews, which improves ratings further. The flywheel effect is real.</li>
          </ol>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mt-16 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">How can a restaurant improve its online ratings quickly?</h3>
              <p className="text-gray-700">Respond to every review, implement a systematic review generation program that encourages satisfied diners to share, and address the operational issues identified in negative feedback. Most restaurants see improvements within 60-90 days.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">What is the impact of star ratings on restaurant revenue?</h3>
              <p className="text-gray-700">A one-star increase on Google or Yelp can boost restaurant revenue by 5-9%. Restaurants below 3.5 stars lose an estimated 30-50% of potential first-time customers.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">How should restaurants respond to negative reviews?</h3>
              <p className="text-gray-700">Respond within 24-48 hours with empathy. Acknowledge the concern, apologize without excuses, explain corrective actions, and invite the reviewer to return. Never argue publicly or offer compensation in the review response.</p>
            </div>
            <div className="pb-6">
              <h3 className="font-bold text-lg mb-2">How many reviews does a restaurant need to improve its rating?</h3>
              <p className="text-gray-700">It depends on current volume and rating. Generating a steady flow of 15-25 reviews per month per location creates sustainable improvement. Consistency matters more than a sudden spike, which platforms may flag.</p>
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-[#f8fafc] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Ready to Transform Your Restaurant&apos;s Online Ratings?
          </h2>
          <p className="text-gray-600 mb-6">
            Get a free reputation audit and see exactly where your ratings stand — and how quickly we can move them.
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
            <Link href="/blog/for-businesses/review-management-strategy" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">Building a Review Management Strategy That Actually Works &rarr;</span>
            </Link>
            <Link href="/blog/for-businesses/how-online-reviews-impact-revenue" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">How Online Reviews Directly Impact Your Revenue &rarr;</span>
            </Link>
            <Link href="/blog/for-businesses/roi-reputation-management" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">The ROI of Reputation Management: How to Calculate the Business Impact &rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
