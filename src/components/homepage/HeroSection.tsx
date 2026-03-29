'use client'

import { useState, useEffect } from 'react'
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
  // Row 1
  { src: '/images/clients/ey.png', alt: 'EY' },
  { src: '/images/clients/cbi.png', alt: 'CBI' },
  { src: '/images/clients/xm.png', alt: 'XM' },
  { src: '/images/clients/eurofast.png', alt: 'Eurofast' },
  { src: '/images/clients/serhant.png', alt: 'SERHANT' },
  // Row 2
  { src: '/images/clients/deluxe-holiday.png', alt: 'Deluxe Holiday Homes' },
  { src: '/images/clients/uexo.png', alt: 'UEXO' },
  { src: '/images/clients/rcx.png', alt: 'RCX Global' },
  { src: '/images/clients/livex.png', alt: 'Liv Ex' },
  { src: '/images/clients/exness.png', alt: 'Exness' },
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
    <section className="bg-white">
      <div className="pt-28 lg:pt-36 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* LEFT: 7 cols */}
            <div className="lg:col-span-7">
              {/* H1 */}
              <h1
                className="text-3xl md:text-4xl lg:text-[2.8rem] font-semibold text-[#000] leading-[1.12] tracking-tight mb-5"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Leading Online Reputation Management Agency
              </h1>

              {/* Description */}
              <p
                className="text-gray-900 text-base lg:text-base leading-relaxed mb-6 max-w-xl"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Reputation 500 is an online reputation management agency helping
                individuals and businesses control what shows up in Google Search,
                reviews, and brand mentions. We combine reputation monitoring,
                ratings optimization, digital PR, link building, and SEO content to
                protect your name, and turn your reputation into a growth asset.
              </p>

              {/* Typing Animation */}
              <div className="flex items-center gap-1 mb-10">
                <span className="text-[#004AAD] text-base font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                  Trusted by{' '}
                </span>
                <span
                  className={`text-[#004AAD] text-base font-bold underline decoration-[#004AAD]/30 underline-offset-4 transition-all duration-300 ${
                    fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
                  }`}
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {rotatingTexts[currentTextIndex]}
                </span>
                <span
                  className="text-[#004AAD] text-base font-light ml-0.5 animate-[cursor-blink_1s_step-end_infinite]"
                >
                  |
                </span>
              </div>

              {/* Client Logos: 5 per row, matching screenshot spacing */}
              <div
                className="grid items-center mt-2"
                style={{
                  gridTemplateColumns: 'repeat(5, 1fr)',
                  gap: '28px 36px',
                  maxWidth: '560px',
                }}
              >
                {clientLogos.map((logo) => (
                  <div
                    key={logo.alt}
                    className="flex items-center justify-center"
                    style={{ height: '58px' }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="object-contain"
                      style={{ maxHeight: logo.alt === 'EY' ? '59px' : '53px', width: 'auto', height: 'auto' }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: 5 cols: Form Card */}
            <div className="lg:col-span-5" style={{ transitionDelay: '200ms' }}>
              <div className="bg-white rounded-2xl p-6 lg:p-7 shadow-xl shadow-black/[0.06] border border-[#204ABD]">
                {/* Stars + Stats */}
                <div className="text-center mb-3">
                  <div className="text-[#9a7b2d] text-lg tracking-[0.15em]">★★★★★</div>
                  <p
                    className="text-[14px] font-bold text-[#9a7b2d] tracking-[0.12em] uppercase mt-1"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    4.8 Stars · 32,920+ Articles Published
                  </p>
                </div>

                <p
                  className="text-[22px] font-semibold text-gray-800 text-center leading-snug mb-5"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Guaranteed Coverage in Forbes, Entrepreneur, IB Times &amp; More
                </p>

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
