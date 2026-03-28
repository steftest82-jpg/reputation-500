import Link from 'next/link'
import Image from 'next/image'
import ContactForm from '@/components/ui/ContactForm'

export default function Footer() {
  return (
    <footer>
      {/* CTA Section */}
      <section className="bg-[#0B1E3D] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column */}
            <div className="reveal-left">
              <h2
                className="text-3xl lg:text-[2.75rem] font-extrabold text-white leading-tight tracking-tight mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Let&apos;s start a project together
              </h2>
              <p
                className="text-gray-400 text-[15px] leading-relaxed mb-10 max-w-lg"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Ready to elevate your brand&apos;s reputation? Get in touch with
                our team and discover how we can help you build lasting trust
                and credibility online.
              </p>

              <a href="mailto:info@reputation500.com" className="inline-block group">
                <span
                  className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1"
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
            <div className="reveal-right">
              <ContactForm variant="footer" />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#081629]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Reputation 500"
                width={140}
                height={28}
                className="brightness-0 invert h-7 w-auto"
              />
            </Link>
            <p
              className="text-gray-500 text-xs"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              &copy; {new Date().getFullYear()} Reputation 500. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
