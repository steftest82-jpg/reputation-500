import Link from 'next/link'
import Accordion from '@/components/ui/Accordion'

const ACCORDION_ITEMS = [
  {
    title: '01/ Reputation Audit',
    content:
      'We begin with a comprehensive audit of your current online presence. Our team analyzes search results, reviews, social mentions, and brand sentiment to identify vulnerabilities and opportunities across every digital touchpoint.',
  },
  {
    title: '02/ Strategy & Execution',
    content:
      'Based on the audit findings, we craft a tailored reputation strategy combining content creation, media placements, SEO optimization, and review management. Our team executes every element with precision, ensuring consistent brand messaging across all channels.',
  },
  {
    title: '03/ Monitoring & Improvement',
    content:
      'Reputation management is an ongoing process. We continuously monitor your digital footprint, track sentiment shifts, and refine our approach to maintain a strong, positive online presence that drives trust and business growth.',
  },
]

export default function ProcessAccordion() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <div className="">
            <h2
              className="text-3xl lg:text-[2.75rem] font-extrabold text-heading leading-tight tracking-tight mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              A proven process to protect and elevate your reputation
            </h2>
            <p
              className="text-gray-500 text-[15px] leading-relaxed mb-4"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Your online reputation is often the first impression you make. We help individuals and businesses take
              control of their digital narrative with a structured, results-driven approach.
            </p>
            <p
              className="text-gray-500 text-[15px] leading-relaxed mb-4"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              From comprehensive audits to ongoing monitoring, our three-step process ensures your brand is represented
              accurately, positively, and prominently across every search result and platform that matters.
            </p>
          </div>

          {/* Right Column */}
          <div className="">
            <Accordion items={ACCORDION_ITEMS} defaultOpen={0} />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link href="/contact" className="btn-outline">
            Book a free consultation
          </Link>
        </div>
      </div>
    </section>
  )
}
