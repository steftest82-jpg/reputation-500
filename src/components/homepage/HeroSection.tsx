'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import ContactForm from '@/components/ui/ContactForm'

const rotatingTexts = [
  'Real Estate Businesses',
  'Trading Brokers',
  'Banks & Finance',
  'SaaS Companies',
  'Corporate Services',
  'Top Tier Companies',
]

const clientLogos = [
  { src: '/images/clients/ey.png', alt: 'EY', w: 60 },
  { src: '/images/clients/cbi.png', alt: 'CBI', w: 90 },
  { src: '/images/clients/xm.png', alt: 'XM', w: 80 },
  { src: '/images/clients/eurofast.png', alt: 'Eurofast', w: 110 },
  { src: '/images/clients/serhant.png', alt: 'SERHANT', w: 120 },
  { src: '/images/clients/deluxe-holiday.png', alt: 'Deluxe Holiday', w: 90 },
  { src: '/images/clients/uexo.png', alt: 'UEXO', w: 80 },
  { src: '/images/clients/rcx.png', alt: 'RCX', w: 90 },
  { src: '/images/clients/livex.png', alt: 'LiveX', w: 90 },
  { src: '/images/clients/exness.png', alt: 'Exness', w: 90 },
]

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length)
        setFade(true)
      }, 300)
    }, 2750)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-[#0B1E3D]">
      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,74,173,0.12),_transparent_50%)]" />

      <div className="relative pt-28 lg:pt-36 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

            {/* LEFT — 7 cols */}
            <div className="lg:col-span-7 reveal-left">
              {/* H1 */}
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.12] tracking-tight mb-5"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Leading Online Reputation Management Agency
              </h1>

              {/* Description */}
              <p
                className="text-gray-300 text-[15px] leading-relaxed mb-6 max-w-xl"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Reputation 500 is an online reputation management agency helping
                individuals and businesses control what shows up in Google Search,
                reviews, and brand mentions. We combine reputation monitoring,
                ratings optimization, digital PR, link building, and SEO content to
                protect your name, and turn your reputation into a growth asset.
              </p>

              {/* Typing Animation */}
              <div className="flex items-center gap-1 mb-8">
                <span className="text-gray-400 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  Trusted by{' '}
                </span>
                <span
                  className={`text-[#C9A84C] text-sm font-semibold transition-all duration-300 ${
                    fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
                  }`}
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {rotatingTexts[currentTextIndex]}
                </span>
                <span
                  className="text-[#C9A84C] text-sm font-light ml-0.5 animate-[cursor-blink_1s_step-end_infinite]"
                >
                  |
                </span>
              </div>

              {/* Client Logos Grid */}
              <div className="grid grid-cols-5 gap-x-6 gap-y-5 items-center max-w-lg">
                {clientLogos.map((logo) => (
                  <div key={logo.alt} className="flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.w}
                      height={36}
                      className="object-contain transition-all duration-400"
                      style={{
                        width: 'auto',
                        height: 'auto',
                        maxHeight: '32px',
                        maxWidth: `${logo.w}px`,
                        filter: 'grayscale(1) brightness(5) contrast(0.5)',
                        opacity: 0.6,
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.filter = 'grayscale(0) brightness(1) contrast(1)'
                        e.currentTarget.style.opacity = '1'
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.filter = 'grayscale(1) brightness(5) contrast(0.5)'
                        e.currentTarget.style.opacity = '0.6'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — 5 cols — Form Card */}
            <div className="lg:col-span-5 reveal-right" style={{ transitionDelay: '200ms' }}>
              <div className="bg-white rounded-2xl p-6 shadow-2xl shadow-black/10 border border-[#004AAD]/10">
                {/* Stars + Stats */}
                <div className="text-center mb-4">
                  <div className="text-[#C9A84C] text-lg tracking-[0.15em]">★★★★★</div>
                  <p
                    className="text-[10px] font-bold text-gray-400 tracking-[0.12em] uppercase mt-1"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    4.8 Stars · 32,920+ Articles Published
                  </p>
                </div>

                <p
                  className="text-[13px] text-gray-500 text-center leading-relaxed mb-4"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Guaranteed Coverage in Forbes, Entrepreneur, IB Times &amp; More
                </p>

                <div className="border-t border-[#004AAD]/10 mb-4" />

                <ContactForm variant="default" />
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}
