import Accordion from '@/components/ui/Accordion'
import Link from 'next/link'

const PROCESS_ITEMS = [
  {
    title: '01/ Reputation Audit',
    content:
      'We review Google results, review profiles, brand mentions, and key business listings. You get a comprehensive scorecard plus a prioritized action plan.',
  },
  {
    title: '02/ Strategy & Execution',
    content:
      'We build the right mix of reputation monitoring, ratings optimization, digital PR, link building, SEO content, and brand messaging, based on impact and effort.',
  },
  {
    title: '03/ Monitoring & Improvement',
    content:
      'We track rankings, ratings, sentiment, and mentions continuously. We report progress, react fast to new issues, and keep improving performance.',
  },
]

export default function ProcessAccordion() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Left column */}
          <div className="mb-10 lg:mb-0">
            <h2
              className="text-3xl lg:text-4xl font-bold text-heading mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our Proven Reputation Management Process
            </h2>
            <p className="text-text-light leading-relaxed mb-4">
              Every engagement starts with a clear reputation audit and
              measurable goals. We map what people see across search results,
              reviews, social, news, and then prioritize the fastest wins and the
              highest-impact fixes.
            </p>
            <p className="text-text-light leading-relaxed">
              Some cases require additional steps (crisis response,
              multi-location review workflows, ongoing PR). The method stays
              consistent: diagnose, execute, measure, and protect your reputation
              over time.
            </p>
          </div>

          {/* Right column */}
          <div>
            <Accordion items={PROCESS_ITEMS} />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-block border-2 border-primary text-primary font-semibold px-8 py-3 rounded-md hover:bg-primary hover:text-white transition-colors"
          >
            Book a free consultation
          </Link>
        </div>
      </div>
    </section>
  )
}
