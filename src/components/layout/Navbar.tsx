'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '@/lib/constants'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleDropdownEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(label)
  }

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-b border-gray-100'
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative flex-shrink-0 z-10" aria-label="Reputation 500 - Home">
              <Image
                src="/images/logo.png"
                alt="Reputation 500"
                width={200}
                height={36}
                className="h-9 w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-0.5"
              ref={navRef}
              role="navigation"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && handleDropdownEnter(link.label)}
                  onMouseLeave={() => link.children && handleDropdownLeave()}
                >
                  {link.children ? (
                    <>
                      <button
                        className={`inline-flex items-center gap-1.5 px-4 py-2.5 text-base font-medium transition-all duration-200 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 ${
                          activeDropdown === link.label
                            ? 'text-[#004AAD]'
                            : scrolled
                              ? 'text-gray-900 hover:text-[#004AAD]'
                              : 'text-gray-900 hover:text-[#004AAD]'
                        }`}
                        style={{ fontFamily: 'var(--font-heading)' }}
                        onClick={() =>
                          setActiveDropdown(activeDropdown === link.label ? null : link.label)
                        }
                        aria-expanded={activeDropdown === link.label}
                        aria-haspopup="true"
                      >
                        {link.label}
                        <svg
                          className={`w-3 h-3 transition-transform duration-200 ${
                            activeDropdown === link.label ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Dropdown */}
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${
                          activeDropdown === link.label
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-1'
                        }`}
                      >
                        <div className="bg-white rounded-xl shadow-xl shadow-black/[0.05] border border-gray-100 p-2 min-w-[220px]">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="flex items-center px-4 py-2.5 rounded-lg text-sm text-gray-900 hover:bg-[#e8f0fe] hover:text-[#004AAD] transition-all duration-150 font-medium"
                              style={{ fontFamily: 'var(--font-body)' }}
                              onClick={() => setActiveDropdown(null)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="inline-flex items-center px-4 py-2.5 text-base font-medium text-gray-900 hover:text-[#004AAD] transition-all duration-200 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Get Your Reputation Analysis
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden relative z-10 p-2 -mr-2 text-gray-700 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`block h-[2px] w-6 bg-current rounded-full transition-all duration-300 origin-center ${
                    mobileOpen ? 'translate-y-[9px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`block h-[2px] w-6 bg-current rounded-full transition-all duration-300 ${
                    mobileOpen ? 'opacity-0 scale-x-0' : ''
                  }`}
                />
                <span
                  className={`block h-[2px] w-6 bg-current rounded-full transition-all duration-300 origin-center ${
                    mobileOpen ? '-translate-y-[9px] -rotate-45' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileOpen ? 'visible' : 'invisible'
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Mobile Header */}
          <div className="flex items-center justify-between h-20 px-6 border-b border-gray-100">
            <Link href="/" onClick={() => setMobileOpen(false)} aria-label="Reputation 500 - Home">
              <Image
                src="/images/logo.png"
                alt="Reputation 500"
                width={160}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 -mr-2 text-gray-900 hover:text-gray-900 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              aria-label="Close navigation menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" /><path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Nav Links */}
          <nav className="px-4 py-6 space-y-1 overflow-y-auto max-h-[calc(100vh-180px)]" role="navigation" aria-label="Mobile navigation">
            {NAV_LINKS.map((link, i) => (
              <div
                key={link.label}
                className="animate-fade-in"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.children ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between px-4 py-3.5 text-lg font-semibold text-gray-800 rounded-xl hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                      style={{ fontFamily: 'var(--font-heading)' }}
                      onClick={() =>
                        setMobileDropdown(mobileDropdown === link.label ? null : link.label)
                      }
                      aria-expanded={mobileDropdown === link.label}
                    >
                      {link.label}
                      <svg
                        className={`w-4 h-4 text-gray-900 transition-transform duration-300 ${
                          mobileDropdown === link.label ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        mobileDropdown === link.label ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="ml-4 pl-4 border-l-2 border-gray-100 space-y-0.5 py-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-base text-gray-800 hover:text-[#004AAD] font-medium transition-colors rounded-lg"
                            style={{ fontFamily: 'var(--font-body)' }}
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block px-4 py-3.5 text-lg font-semibold text-gray-800 rounded-xl hover:bg-gray-50 transition-colors"
                    style={{ fontFamily: 'var(--font-heading)' }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <div className="pt-6 px-2">
              <Link
                href="/contact"
                className="btn-primary flex items-center justify-center w-full px-6 py-3.5 text-base font-semibold rounded-xl transition-all duration-200"
                style={{ fontFamily: 'var(--font-heading)' }}
                onClick={() => setMobileOpen(false)}
              >
                Get Your Reputation Analysis
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
