import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Review Management Strategy: Get More 5-Star Reviews | Reputation 500',
  description: 'Build a review management strategy that generates more 5-star reviews, handles negative feedback professionally, and boosts revenue across all platforms.',
  alternates: { canonical: `${SITE_URL}/blog/for-businesses/review-management-strategy` },
  openGraph: {
    title: 'Review Management Strategy: Get More 5-Star Reviews',
    description: 'Build a review management strategy that generates more 5-star reviews, handles negative feedback professionally, and boosts revenue across all platforms.',
  },
}

export default function ArticlePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Review Management Strategy: How to Get More 5-Star Reviews and Handle Negative Feedback',
    description: metadata.description,
    author: { '@type': 'Organization', name: 'Reputation 500', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'Reputation 500', url: SITE_URL },
    datePublished: '2026-04-05',
    dateModified: '2026-04-05',
    url: `${SITE_URL}/blog/for-businesses/review-management-strategy`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the best time to ask customers for a review?',
        acceptedAnswer: { '@type': 'Answer', text: 'The optimal timing is within 24-48 hours of a positive customer experience, such as a completed purchase, successful service delivery, or a positive customer support interaction. Sending requests during mid-week (Tuesday through Thursday) between 10am and 2pm tends to yield the highest response rates.' },
      },
      {
        '@type': 'Question',
        name: 'How should you respond to a negative review?',
        acceptedAnswer: { '@type': 'Answer', text: 'Respond within 24 hours with empathy and professionalism. Acknowledge the customer\'s experience, apologize for any shortcomings, and offer a specific resolution. Avoid being defensive or arguing with the reviewer. Take the conversation offline by providing a direct contact method, and follow up to ensure the issue is resolved.' },
      },
      {
        '@type': 'Question',
        name: 'How many reviews does a business need to be trusted?',
        acceptedAnswer: { '@type': 'Answer', text: 'Research shows that consumers need to see at least 10 reviews before they trust a business. However, the quality and recency of reviews matter as much as quantity. A business with 40 recent reviews averaging 4.5 stars will outperform one with 500 reviews averaging 3.8 stars. Aim for a steady stream of recent reviews rather than focusing solely on total count.' },
      },
      {
        '@type': 'Question',
        name: 'Should you respond to positive reviews too?',
        acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Responding to positive reviews increases customer loyalty, encourages future reviews from other customers, and signals to search engines that your business is actively engaged. A simple, personalized thank-you that mentions specific details from the review is sufficient. Businesses that respond to all reviews see a 12% increase in review volume.' },
      },
      {
        '@type': 'Question',
        name: 'Is it legal to incentivize customers for reviews?',
        acceptedAnswer: { '@type': 'Answer', text: 'You can encourage customers to leave reviews, but you cannot offer incentives specifically for positive reviews. The FTC and platforms like Google prohibit exchanging money, discounts, or gifts for reviews. You can offer incentives for leaving any review (positive or negative) as long as the incentive is disclosed, but the safest approach is to simply make the review process easy and ask at the right time.' },
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
            { label: 'Review Management Strategy' },
          ]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Review Management Strategy: How to Get More 5-Star Reviews and Handle Negative Feedback
            </h1>
            <p className="text-gray-400 text-sm">Published April 5, 2026 · By Reputation 500 Team</p>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Online reviews are not just social proof — they are one of the most powerful revenue drivers in modern business. Research shows that <strong>93% of consumers say online reviews influence their purchasing decisions</strong>, and a one-star improvement on Google can increase revenue by 5-9%. Yet most businesses leave their review profile to chance, resulting in a skewed picture that over-represents unhappy customers.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            A deliberate review management strategy changes that equation. By systematically generating positive reviews, responding to feedback with precision, and diversifying across platforms, you can build a review profile that accurately reflects your business quality and directly drives growth.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Why Most Businesses Have a Review Problem
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Without a structured review strategy, businesses face a fundamental asymmetry: unhappy customers are <strong>2-3 times more likely to leave a review</strong> than satisfied ones. This means your review profile naturally skews negative, creating a gap between your actual customer satisfaction and your online perception.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The consequences are measurable. Businesses with ratings below 4 stars lose up to <strong>70% of potential customers</strong> before they ever make contact. Even a drop from 4.5 to 4.0 stars can reduce click-through rates by 25%. The goal is not to manipulate reviews — it is to ensure that the silent majority of satisfied customers are represented in your review profile.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Building a Review Generation System
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Consistent review generation requires a system, not sporadic effort. The most effective <Link href="/services/for-businesses/ratings-optimization" className="text-[#004AAD] hover:underline">review generation systems</Link> incorporate three elements: timing, ease, and channel selection.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Timing is everything.</strong> The optimal moment to request a review is within 24-48 hours of a positive interaction — a completed purchase, a resolved support ticket, a successful service delivery, or a compliment from the customer. Asking too early feels premature; asking too late misses the emotional peak. For service businesses, the ideal trigger is the moment the customer expresses satisfaction. For e-commerce, it is 2-3 days after delivery.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Reduce friction ruthlessly.</strong> Every additional click or step between your request and the review submission reduces completion rates by approximately <strong>20%</strong>. The best approach is a direct link that opens the review form on your preferred platform with one tap. Include this link in post-purchase emails, SMS follow-ups, and even printed materials with QR codes.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Choose your platforms strategically.</strong> Google Business Profile should be your primary target because Google reviews appear directly in search results and influence local rankings. Beyond Google, prioritize platforms where your customers already look — Trustpilot for e-commerce, Yelp for local services, G2 or Capterra for software, and Healthgrades or Zocdoc for healthcare.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Handling Negative Reviews: The 24-Hour Framework
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Negative reviews are inevitable, but how you respond determines whether they damage or strengthen your reputation. Research from Harvard Business Review found that <strong>businesses that respond to negative reviews see an average rating increase of 0.12 stars</strong> — a small number that translates to significant revenue impact at scale.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Follow this response framework within 24 hours of any negative review:
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>Acknowledge and empathize</strong> — Begin by thanking the reviewer and acknowledging their experience. Never dismiss or minimize their concern.</li>
            <li><strong>Apologize specifically</strong> — A genuine apology that addresses the specific issue shows accountability. Avoid generic responses.</li>
            <li><strong>Offer resolution</strong> — Provide a concrete next step. This could be a replacement, refund, re-service, or escalation to a manager.</li>
            <li><strong>Take it offline</strong> — Provide a direct phone number or email so the conversation can move to a private channel.</li>
            <li><strong>Follow up</strong> — After resolving the issue, ask the customer if they would consider updating their review. Studies show <strong>33% of reviewers will revise a negative review</strong> after a satisfactory resolution.</li>
          </ol>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Response Templates That Work
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            While every response should be personalized, having a framework ensures consistency across your team. The best responses share common traits: they are specific (referencing details from the review), empathetic (validating the customer&apos;s feelings), and action-oriented (offering a clear next step).
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            For <strong>positive reviews</strong>, personalize beyond a generic thank-you. Reference specific aspects the customer mentioned and express genuine appreciation. This encourages other customers to leave detailed reviews and signals to prospects that you pay attention.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            For <strong>negative reviews</strong>, avoid corporate-sounding language. Write as a real person who genuinely cares about the customer&apos;s experience. Never blame the customer, argue with their account, or make excuses. Even if the review seems unfair, your response is being read by hundreds of future customers making purchasing decisions.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Platform Diversification Strategy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Relying on a single review platform is risky. Algorithm changes, policy shifts, or review filtering can dramatically alter your profile overnight. A diversified review presence protects against platform risk and maximizes your visibility across the entire customer journey.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Reputation 500, we recommend maintaining active review profiles on at least four platforms. Your primary platform (typically Google) should receive the majority of review requests. Secondary platforms should align with your industry and customer behavior. Monitoring tools from our <Link href="/services/for-businesses/reputation-monitoring" className="text-[#004AAD] hover:underline">reputation monitoring</Link> service track all platforms simultaneously, ensuring no review goes unseen or unanswered.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Measuring Review Performance
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Track these key metrics monthly to evaluate the health of your review management strategy:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>Review velocity</strong> — The number of new reviews per month. A healthy business should generate at least 5-10 new reviews monthly on its primary platform.</li>
            <li><strong>Average rating trend</strong> — Track your rolling 90-day average to identify whether your rating is improving, stable, or declining.</li>
            <li><strong>Response rate and time</strong> — Aim for 100% response rate with an average response time under 24 hours.</li>
            <li><strong>Review conversion rate</strong> — The percentage of review requests that result in a published review. Industry benchmarks range from 5-15%.</li>
            <li><strong>Sentiment analysis</strong> — Categorize reviews by theme to identify operational strengths and weaknesses that can be addressed to improve future reviews organically.</li>
          </ul>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mt-16 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">What is the best time to ask customers for a review?</h3>
              <p className="text-gray-700">The optimal timing is within 24-48 hours of a positive customer experience. Sending requests during mid-week between 10am and 2pm tends to yield the highest response rates.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">How should you respond to a negative review?</h3>
              <p className="text-gray-700">Respond within 24 hours with empathy and professionalism. Acknowledge the experience, apologize specifically, offer a resolution, and take the conversation offline. Never be defensive or argue with the reviewer.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">How many reviews does a business need to be trusted?</h3>
              <p className="text-gray-700">Consumers need to see at least 10 reviews before they trust a business. However, recency and quality matter as much as quantity. A steady stream of recent reviews averaging 4.5 stars outperforms a large volume of older reviews with lower ratings.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">Should you respond to positive reviews too?</h3>
              <p className="text-gray-700">Yes. Responding to positive reviews increases customer loyalty, encourages future reviews, and signals active engagement to search engines. Businesses that respond to all reviews see a 12% increase in review volume.</p>
            </div>
            <div className="pb-6">
              <h3 className="font-bold text-lg mb-2">Is it legal to incentivize customers for reviews?</h3>
              <p className="text-gray-700">You can encourage reviews but cannot offer incentives specifically for positive reviews. The FTC and platforms like Google prohibit paying for reviews. The safest approach is to make the review process easy and ask at the right time.</p>
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-[#f8fafc] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Ready to Build a Review Profile That Drives Revenue?
          </h2>
          <p className="text-gray-600 mb-6">
            Get a free review audit and a custom strategy to generate more 5-star reviews across every platform that matters.
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
            <Link href="/blog/for-businesses/how-online-reviews-impact-revenue" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">How Online Reviews Directly Impact Your Revenue →</span>
            </Link>
            <Link href="/blog/for-businesses/how-to-respond-negative-reviews" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">How to Respond to Negative Reviews Professionally →</span>
            </Link>
            <Link href="/blog/for-businesses/reputation-and-conversion-rates" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">How Your Online Reputation Affects Conversion Rates →</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
