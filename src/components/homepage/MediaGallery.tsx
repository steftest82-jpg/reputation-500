'use client'

import { useState, useMemo } from 'react'
import { MEDIA_PUBLICATIONS, MEDIA_CATEGORIES } from '@/lib/media-data'

const ITEMS_PER_PAGE = 21

function LogoCard({ name, domain }: { name: string; domain: string }) {
  const [imgError, setImgError] = useState(false)
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`

  return (
    <div
      className="bg-white rounded-xl border border-[#004AAD]/10 flex flex-col items-center justify-center px-3 py-5 hover:shadow-lg hover:border-[#004AAD]/25 transition-all duration-300 group cursor-default"
      style={{ minHeight: '110px' }}
    >
      <div className="flex items-center justify-center h-10 mb-2">
        {!imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={faviconUrl}
            alt={name}
            width={32}
            height={32}
            className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div
            className="w-10 h-10 rounded-lg bg-[#004AAD]/10 flex items-center justify-center"
          >
            <span className="text-[#004AAD] font-bold" style={{ fontSize: '16px', fontFamily: 'var(--font-heading)' }}>
              {name.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <span
        className="text-gray-800 text-center leading-tight font-semibold group-hover:text-[#004AAD] transition-colors"
        style={{ fontSize: '12px', fontFamily: 'var(--font-heading)' }}
      >
        {name}
      </span>
    </div>
  )
}

export default function MediaGallery() {
  const [activeTab, setActiveTab] = useState('ALL')
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)

  const filtered = useMemo(() => {
    if (activeTab === 'ALL') return MEDIA_PUBLICATIONS
    return MEDIA_PUBLICATIONS.filter((pub) => pub.categories.includes(activeTab))
  }, [activeTab])

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  function handleTabChange(tab: string) {
    setActiveTab(tab)
    setVisibleCount(ITEMS_PER_PAGE)
  }

  return (
    <section className="bg-[#F5F7FA] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-2xl lg:text-3xl font-semibold text-center mb-3 tracking-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          We get your article and/or interview featured in
        </h2>
        <p className="text-gray-600 text-center mb-8" style={{ fontSize: '16px' }}>
          Access to 3,500+ premium media outlets worldwide
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {MEDIA_CATEGORIES.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? 'bg-[#004AAD] text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
              style={{ fontSize: '12px', letterSpacing: '0.05em', fontFamily: 'var(--font-heading)' }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3">
          {visible.map((pub) => (
            <LogoCard key={pub.name} name={pub.name} domain={pub.domain} />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          {hasMore ? (
            <button
              onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
              className="bg-white border border-gray-200 rounded-full px-8 py-2.5 font-semibold text-gray-600 hover:text-[#004AAD] hover:border-[#004AAD]/30 hover:shadow-sm transition-all cursor-pointer"
              style={{ fontSize: '14px', fontFamily: 'var(--font-heading)' }}
            >
              Load More ({filtered.length - visibleCount} remaining)
            </button>
          ) : (
            <p className="text-gray-400" style={{ fontSize: '13px' }}>
              Showing all {filtered.length} publications
              {activeTab !== 'ALL' && ` in ${activeTab}`}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
