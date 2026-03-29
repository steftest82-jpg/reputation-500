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
  buttonText,
  buttonHref = '/contact',
}: CTABannerProps) {
  return (
    <section className="bg-bg-section py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-heading mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          {title}
        </h2>
        <p className="text-text-light text-base mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={buttonHref}
            className="inline-flex items-center px-8 py-3.5 text-sm bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition-colors"
          >
            {buttonText || 'Get Your Reputation Analysis'}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 text-sm border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-white transition-colors"
          >
            Book a free consultation
          </Link>
        </div>
      </div>
    </section>
  )
}
