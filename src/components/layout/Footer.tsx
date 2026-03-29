import Link from 'next/link'
import ContactForm from '@/components/ui/ContactForm'

export default function Footer() {
  return (
    <footer className="bg-black">
      {/* CTA + Form Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <div>
            <h2
              className="text-3xl lg:text-4xl font-semibold leading-tight mb-5"
              style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}
            >
              Let&apos;s start a project together
            </h2>
            <p
              className="text-gray-400 leading-relaxed mb-8"
              style={{ fontFamily: 'var(--font-body)', fontSize: '16px' }}
            >
              We work closely with you to understand your risk points, brand goals,
              and target audience. Then we build a practical reputation plan across
              reviews, search results, PR, and monitoring, with clear reporting and
              measurable outcomes.
            </p>

            <div className="mb-2">
              <span
                className="text-gray-500 uppercase tracking-widest block mb-1"
                style={{ fontSize: '11px', fontFamily: 'var(--font-heading)' }}
              >
                Send us an email:
              </span>
              <a
                href="mailto:info@reputation500.com"
                className="text-white font-medium hover:text-[#004AAD] transition-colors"
                style={{ fontSize: '16px' }}
              >
                info@reputation500.com
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div>
            <ContactForm variant="footer" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" aria-label="Reputation 500 Home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.png"
                alt="Reputation 500"
                className="h-6 w-auto brightness-0 invert"
              />
            </Link>

            {/* Copyright */}
            <p
              className="text-gray-500 text-center sm:text-right"
              style={{ fontSize: '12px', fontFamily: 'var(--font-body)' }}
            >
              &copy; Copyright {new Date().getFullYear()}, All Rights Reserved by Reputation500, part of ADCX Tech Solutions LTD
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
