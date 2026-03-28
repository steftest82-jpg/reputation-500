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
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = rotatingTexts[currentTextIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText === currentFullText) {
      // Pause before starting to delete
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === '') {
      // Move to next text
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    } else if (isDeleting) {
      // Delete one character
      timeout = setTimeout(() => {
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
      }, 40);
    } else {
      // Type one character
      timeout = setTimeout(() => {
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
      }, 80);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTextIndex]);

  return (
    <section className="bg-bg-dark pt-20 lg:pt-24 pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h1 className="font-heading text-white text-4xl lg:text-5xl font-bold leading-tight">
              Leading Online Reputation Management Agency
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed">
              Reputation 500 is an online reputation management agency helping
              individuals and businesses control what shows up in Google Search,
              reviews, and brand mentions. We combine reputation monitoring,
              ratings optimization, digital PR, link building, and SEO content to
              protect your name, and turn your reputation into a growth asset.
            </p>

            {/* Typing Animation */}
            <div className="text-white text-xl font-medium">
              <span>Trusted by </span>
              <span className="text-gold">
                {displayedText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            {/* Client Logos Grid */}
            <div className="grid grid-cols-5 gap-4 items-center pt-4">
              {clientLogos.map((logo) => (
                <div key={logo.alt} className="relative h-10 w-full">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain grayscale brightness-150 opacity-70 hover:grayscale-0 hover:opacity-100 hover:brightness-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
            {/* Star Rating */}
            <div className="text-center mb-6">
              <div className="text-gold text-2xl tracking-wide mb-1">
                ★★★★★
              </div>
              <p className="text-text-muted text-xs uppercase tracking-wider font-semibold">
                4.8 Stars · 32,920+ Articles Published
              </p>
              <p className="text-heading font-semibold text-base mt-3">
                Guaranteed Coverage in Forbes, Entrepreneur, IB Times &amp; More
              </p>
            </div>

            <ContactForm variant="footer" />
          </div>
        </div>
      </div>
    </section>
  );
}
