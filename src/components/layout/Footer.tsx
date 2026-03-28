import Link from 'next/link'
import Image from 'next/image'
import ContactForm from '@/components/ui/ContactForm'

export default function Footer() {
  return (
    <footer>
      {/* CTA Section */}
      <section className="bg-black py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column */}
            <div>
              <h2
                className="text-3xl lg:text-4xl font-medium leading-tight mb-6 text-white"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Let&apos;s start a project together
              </h2>
              <p
                className="text-gray-400 text-sm leading-relaxed mb-10 max-w-lg"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Ready to elevate your brand&apos;s reputation? Get in touch with
                our team and discover how we can help you build lasting trust
                and credibility online.
              </p>

              <a href="mailto:info@reputation500.com" className="inline-block group">
                <span
                  className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-1"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Send us an email:
                </span>
                <span
                  className="text-white font-medium hover:text-primary transition-colors"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  info@reputation500.com
                </span>
              </a>
            </div>

            {/* Right Column */}
            <div>
              <ContactForm variant="footer" />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Reputation 500"
                width={140}
                height={24}
                className="brightness-0 invert h-6 w-auto"
              />
            </Link>
            <p
              className="text-gray-500 text-sm"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              &copy; Copyright 2026, All Rights Reserved by Reputation500, part of ADCX Tech Solutions LTD
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
