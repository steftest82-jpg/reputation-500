'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ContactForm from '@/components/ui/ContactForm';

const rotatingTexts = [
  'Real Estate Businesses',
  'Trading Brokers',
  'Banks & Finance',
  'SaaS Companies',
  'Corporate Services',
  'Top Tier Companies',
];

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
];

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2750);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#0B1E3D] w-full pt-28 lg:pt-36 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-start">
          {/* Left Column - ~60% */}
          <div className="lg:col-span-3 space-y-6">
            <h1 className="font-heading text-white text-3xl lg:text-5xl font-bold leading-tight">
              Leading Online Reputation Management Agency
            </h1>

            <p className="text-gray-300 text-base leading-relaxed">
              Reputation 500 is an online reputation management agency helping
              individuals and businesses control what shows up in Google Search,
              reviews, and brand mentions. We combine reputation monitoring,
              ratings optimization, digital PR, link building, and SEO content to
              protect your name, and turn your reputation into a growth asset.
            </p>

            {/* Typing Animation */}
            <div className="text-lg font-medium">
              <span className="text-white">Trusted by </span>
              <span className="text-[#C9A84C]">
                {rotatingTexts[currentTextIndex]}
              </span>
              <span className="text-white animate-pulse">|</span>
            </div>

            {/* Client Logos Grid */}
            <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 items-center pt-4">
              {clientLogos.map((logo) => (
                <div key={logo.alt} className="relative h-8 lg:h-12 w-full">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain grayscale brightness-[200%] opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - ~40% */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-xl">
              {/* Stars */}
              <div className="text-center mb-1">
                <div className="text-[#C9A84C] text-lg tracking-widest">
                  ★★★★★
                </div>
              </div>

              {/* Rating Text */}
              <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                4.8 Stars · 32,920+ ARTICLES PUBLISHED
              </p>

              {/* Guarantee Text */}
              <p className="text-center text-sm text-gray-600 mb-6">
                Guaranteed Coverage in Forbes, Entrepreneur, IB Times &amp; More
              </p>

              {/* Contact Form */}
              <ContactForm variant="default" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
