import Link from 'next/link'

interface CTABannerProps {
  title?: string
  description?: string
  buttonText?: string
  buttonHref?: string
}

export default function CTABanner({
  title = 'Ready to Take Control of Your Reputation?',
  description = 'Get a reputation analysis and discover how we can protect and grow your online presence.',
}: CTABannerProps) {
  return (
    <section className="bg-[#F5F7FA] py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          {title}
        </h2>
        <p className="text-gray-600 text-base mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://rep500.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 text-sm bg-[#004AAD] text-white font-semibold rounded-md border-2 border-[#004AAD] hover:bg-[#003580] hover:border-[#003580] transition-colors h-[50px]"
          >
            Get Your Reputation Analysis
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-sm border-2 border-[#004AAD] text-[#004AAD] font-semibold rounded-md hover:bg-[#004AAD] hover:text-white transition-colors h-[50px]"
          >
            Book a free consultation
          </Link>
        </div>
      </div>
    </section>
  )
}
