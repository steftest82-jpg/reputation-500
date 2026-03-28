import Link from 'next/link'
import Image from 'next/image'
import ContactForm from '@/components/ui/ContactForm'

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-white">
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Info */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Let&apos;s start a project together
            </h2>
            <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-lg">
              We work closely with you to understand your risk points, brand goals, and target audience.
              Then we build a practical reputation plan across reviews, search results, PR, and monitoring,
              with clear reporting and measurable outcomes.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:info@reputation500.com"
                className="flex items-start gap-3 group"
              >
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Send us an email:</h4>
                  <p className="text-gray-400 group-hover:text-primary transition-colors">
                    info@reputation500.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <ContactForm variant="footer" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Reputation 500"
                width={160}
                height={32}
                className="h-7 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm text-center">
              &copy; {new Date().getFullYear()} All Rights Reserved by Reputation500, part of ADCX Tech Solutions LTD
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
