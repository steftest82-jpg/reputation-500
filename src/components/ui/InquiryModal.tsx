'use client'

import { useState, FormEvent, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'

interface InquiryModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  subtitle?: string
  inquiryType: 'package' | 'service'
  inquiryName: string
}

function ModalContent({ onClose, title, subtitle, inquiryType, inquiryName }: Omit<InquiryModalProps, 'isOpen'>) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }, [onClose])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [onClose])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    e.stopPropagation()
    setStatus('sending')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      ...(inquiryType === 'package'
        ? { package: inquiryName }
        : { service: inquiryName }
      ),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus('sent')
        // Amplitude event tracking
        import('@amplitude/unified').then((amp) => {
          amp.track('Form Submitted', { form_type: inquiryType, inquiry_name: inquiryName })
        }).catch(() => {})
        // Google Ads conversion tracking
        if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
          (window as any).gtag('event', 'conversion', {
            send_to: 'AW-18063988632/cLXqCMyoqPcBEJivyqVD',
            event_category: 'Lead',
            event_label: inquiryName,
          })
        }
        setTimeout(() => {
          onClose()
          setStatus('idle')
        }, 2500)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{ zIndex: 99999, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
      onClick={handleBackdropClick}
      onMouseMove={(e) => e.stopPropagation()}
      onMouseOver={(e) => e.stopPropagation()}
      onMouseEnter={(e) => e.stopPropagation()}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', zIndex: 1 }}
      />

      {/* Modal Card */}
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8"
        style={{ position: 'relative', zIndex: 2 }}
        onClick={(e) => e.stopPropagation()}
        onMouseMove={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          style={{ zIndex: 3 }}
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18" /><path d="M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-6">
          <div
            className="inline-block px-3 py-1 rounded-full text-[#004AAD] bg-[#004AAD]/10 font-semibold mb-3"
            style={{ fontSize: '13px' }}
          >
            {inquiryName}
          </div>
          <h3
            className="text-2xl font-semibold"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {title}
          </h3>
          {subtitle && (
            <p className="text-gray-500 mt-1" style={{ fontSize: '15px' }}>
              {subtitle}
            </p>
          )}
        </div>

        {status === 'sent' ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
              <i className="fa-solid fa-check text-emerald-600 text-2xl" />
            </div>
            <p className="text-lg font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>Thank you!</p>
            <p className="text-gray-500 mt-1" style={{ fontSize: '15px' }}>We will be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Smith"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#004AAD] focus:ring-2 focus:ring-[#004AAD]/10 transition-all"
                style={{ fontSize: '15px' }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
              <input
                type="email"
                name="email"
                required
                placeholder="john@company.com"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#004AAD] focus:ring-2 focus:ring-[#004AAD]/10 transition-all"
                style={{ fontSize: '15px' }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
              <input
                type="text"
                name="company"
                placeholder="Your Company"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#004AAD] focus:ring-2 focus:ring-[#004AAD]/10 transition-all"
                style={{ fontSize: '15px' }}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full py-3.5 rounded-xl font-semibold text-white transition-all ${
                status === 'sending'
                  ? 'bg-[#004AAD]/60 cursor-not-allowed'
                  : 'bg-[#004AAD] hover:bg-[#003580] hover:shadow-lg hover:shadow-[#004AAD]/20'
              }`}
              style={{ fontSize: '15px', fontFamily: 'var(--font-heading)' }}
            >
              {status === 'sending' ? 'Submitting...' : 'Submit Inquiry'}
            </button>

            {status === 'error' && (
              <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
            )}
          </form>
        )}
      </div>
    </div>
  )
}

export default function InquiryModal({ isOpen, ...props }: InquiryModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!isOpen || !mounted) return null

  return createPortal(
    <ModalContent {...props} />,
    document.body
  )
}
