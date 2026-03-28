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
  { src: '/images/clients/ey.png', alt: 'EY' },
  { src: '/images/clients/cbi.png', alt: 'CBI' },
  { src: '/images/clients/xm.png', alt: 'XM' },
  { src: '/images/clients/eurofast.png', alt: 'Eurofast' },
  { src: '/images/clients/serhant.png', alt: 'Serhant' },
  { src: '/images/clients/deluxe-holiday.png', alt: 'Deluxe Holiday' },
  { src: '/images/clients/uexo.png', alt: 'UEXO' },
  { src: '/images/clients/rcx.png', alt: 'RCX' },
  { src: '/images/clients/livex.png', alt: 'LiveX' },
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
    <section className="relative overflow-hidden bg-[#0B1E3D]">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,74,173,0.15),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,74,173,0.08),_transparent_50%)]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative pt-32 lg:pt-40 pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

            {/* Left Column */}
            <div className="lg:col-span-3 reveal-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/[0.07] backdrop-blur-sm text-white/80 text-xs font-medium px-4 py-1.5 rounded-full border border-white/10 mb-6">
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"
                  style={{ boxShadow: '0 0 6px rgba(52,211,153,0.5)' }}
                />
                <span style={{ fontFamily: 'var(--font-body)' }}>
                  Trusted by 78+ International Companies
                </span>
              </div>

              {/* H1 */}
              <h1
                className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.08] tracking-tight mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Leading Online{' '}
                <span className="relative">
                  Reputation Management
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#C9A84C] to-[#C9A84C]/0 rounded-full" />
                </span>{' '}
                Agency
              </h1>

              {/* Description */}
              <p
                className="text-gray-300/90 text-[15px] leading-relaxed mb-8 max-w-xl"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Reputation 500 is an online reputation management agency helping
                individuals and businesses control what shows up in Google Search,
                reviews, and brand mentions. We combine reputation monitoring,
                ratings optimization, digital PR, link building, and SEO content to
                protect your name, and turn your reputation into a growth asset.
              </p>

              {/* Typing Animation */}
              <div className="flex items-center gap-0">
                <span
                  className="text-gray-400 text-sm"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
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
                  className="text-[#C9A84C] text-sm font-light ml-0.5"
                  style={{ animation: 'cursor-blink 1s step-end infinite' }}
                >
                  |
                </span>
              </div>

              {/* Client Logos */}
              <div className="mt-10 stagger-children">
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-4 items-center">
                  {clientLogos.map((logo) => (
                    <div
                      key={logo.alt}
                      className="relative flex items-center justify-center h-10 lg:h-12"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={120}
                        height={40}
                        className="grayscale brightness-200 opacity-60 hover:grayscale-0 hover:brightness-100 hover:opacity-100 transition-all duration-500 object-contain h-8 lg:h-10 w-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div
              className="lg:col-span-2 reveal-right lg:sticky lg:top-32"
              style={{ transitionDelay: '200ms' }}
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-b from-[#004AAD]/20 to-transparent rounded-3xl blur-xl opacity-50 -z-10" />

                {/* Card */}
                <div className="bg-white rounded-2xl p-7 lg:p-8 shadow-2xl shadow-black/10 border border-white/20 relative">
                  {/* Stars */}
                  <div className="text-center">
                    <div className="text-[#C9A84C] text-xl tracking-[0.2em]">
                      &#9733;&#9733;&#9733;&#9733;&#9733;
                    </div>
                  </div>

                  {/* Stats line */}
                  <p
                    className="text-[10px] font-bold text-gray-400 tracking-[0.15em] uppercase text-center mt-1"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    4.8 Stars &middot; 32,920+ Articles Published
                  </p>

                  {/* Coverage text */}
                  <p
                    className="text-sm text-gray-600 text-center mt-3 mb-6 leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Guaranteed Coverage in Forbes, Entrepreneur, IB Times &amp; More
                  </p>

                  {/* Divider */}
                  <div className="border-t border-gray-100 my-5" />

                  {/* Contact Form */}
                  <ContactForm variant="default" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Cursor blink keyframe */}
      <style jsx>{`
        @keyframes cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}
