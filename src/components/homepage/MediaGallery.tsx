'use client'

import { useState } from 'react'
import Image from 'next/image'

const TABS = [
  'ALL',
  'BUSINESS',
  'FASHION',
  'TECH',
  'WEB 3',
  'HEALTH',
  'FINANCE',
  'LIQUOR',
  'REAL ESTATE',
  'LIFESTYLE',
  'ENTERTAINMENT',
]

const MEDIA_LOGOS = [
  { src: '/images/media/the-brag.webp', alt: 'The Brag' },
  { src: '/images/media/village-voice.webp', alt: 'Village Voice' },
  { src: '/images/media/womens-journal.webp', alt: "Women's Journal" },
  { src: '/images/media/us-business-news.webp', alt: 'US Business News' },
  { src: '/images/media/the-standard.webp', alt: 'The Standard' },
  { src: '/images/media/the-advocate.webp', alt: 'The Advocate' },
  { src: '/images/media/denver-gazette.webp', alt: 'Denver Gazette' },
]

export default function MediaGallery() {
  const [activeTab, setActiveTab] = useState('ALL')

  return (
    <section className="bg-bg-section py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-2xl lg:text-3xl font-extrabold text-center mb-3 tracking-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          We get your article and/or interview featured in
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-6 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider cursor-pointer rounded-full transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {MEDIA_LOGOS.map((logo) => (
            <div
              key={logo.alt}
              className="bg-white rounded-xl p-5 flex items-center justify-center h-20 border border-[#004AAD]/15 hover:shadow-lg hover:border-[#004AAD]/30 transition-all duration-300 group"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 object-contain max-h-10 w-auto"
              />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <button className="bg-white border border-gray-200 rounded-full px-8 py-2.5 text-[13px] font-semibold text-gray-500 hover:text-primary hover:border-primary/30 hover:shadow-sm transition-all">
            Load More
          </button>
        </div>
      </div>
    </section>
  )
}
