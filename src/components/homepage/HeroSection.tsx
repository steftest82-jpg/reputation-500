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
  { src: '/images/clients/ey.png', alt: 'EY', w: 80, h: 45 },
  { src: '/images/clients/cbi.png', alt: 'CBI', w: 120, h: 50 },
  { src: '/images/clients/xm.png', alt: 'XM', w: 100, h: 45 },
  { src: '/images/clients/eurofast.png', alt: 'Eurofast', w: 140, h: 35 },
  { src: '/images/clients/serhant.png', alt: 'SERHANT', w: 150, h: 35 },
  { src: '/images/clients/deluxe-holiday.png', alt: 'Deluxe Holiday Homes', w: 110, h: 55 },
  { src: '/images/clients/uexo.png', alt: 'UEXO', w: 100, h: 45 },
  { src: '/images/clients/rcx.png', alt: 'RCX Global', w: 110, h: 45 },
  { src: '/images/clients/livex.png', alt: 'Liv-Ex', w: 110, h: 40 },
  { src: '/images/clients/exness.png', alt: 'Exness', w: 110, h: 38 },
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

            {/* LEFT — 7 cols */}
            <div className="lg:col-span-7">
              {/* H1 */}
              <h1
                className="text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold text-[#000] leading-[1.12] tracking-tight mb-5"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Leading Online Reputation Management Agency
              </h1>

              {/* Description */}
              <p
                className="text-gray-600 text-[15px] lg:text-base leading-relaxed mb-6 max-w-xl"
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

              {/* Client Logos — Full Color, Prominent */}
              <div className="grid grid-cols-5 gap-x-8 gap-y-6 items-center max-w-2xl">
                {clientLogos.map((logo) => (
                  <div key={logo.alt} className="flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.w}
                      height={logo.h}
                      className="object-contain hover:scale-105 transition-transform duration-300"
                      style={{
                        width: 'auto',
                        height: 'auto',
                        maxHeight: `${logo.h}px`,
                        maxWidth: `${logo.w}px`,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — 5 cols — Form Card */}
            <div className="lg:col-span-5" style={{ transitionDelay: '200ms' }}>
              <div className="bg-white rounded-2xl p-6 lg:p-7 shadow-xl shadow-black/[0.06] border border-[#004AAD]/12">
                {/* Stars + Stats */}
                <div className="text-center mb-3">
                  <div className="text-[#C9A84C] text-lg tracking-[0.15em]">★★★★★</div>
                  <p
                    className="text-[10px] font-bold text-[#C9A84C] tracking-[0.12em] uppercase mt-1"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    4.8 Stars · 32,920+ Articles Published
                  </p>
                </div>

                <p
                  className="text-[15px] font-semibold text-gray-800 text-center leading-snug mb-5"
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
