'use client'

import { useState, FormEvent, useEffect } from 'react'

interface InquiryModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  subtitle?: string
  inquiryType: 'package' | 'service'
  inquiryName: string
}

export default function InquiryModal({ isOpen, onClose, title, subtitle, inquiryType, inquiryName }: InquiryModalProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
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

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 animate-[scaleIn_0.2s_ease-out]"
        style={{ animation: 'scaleIn 0.2s ease-out' }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
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

      <style jsx>{`
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  )
}
