'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'

interface ContactFormProps {
  variant?: 'default' | 'footer'
  prefilledPackage?: string
}

export default function ContactForm({ variant = 'default', prefilledPackage }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const isFooter = variant === 'footer'

  const inputClass = isFooter
    ? 'w-full px-4 py-2.5 bg-white/[0.07] border border-white/10 rounded-lg text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#004AAD]/60 focus:ring-2 focus:ring-[#004AAD]/20 transition-all duration-300'
    : 'w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-600 focus:outline-none focus:border-[#004AAD] focus:ring-2 focus:ring-[#004AAD]/10 focus:bg-white transition-all duration-300'

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
      package: prefilledPackage || '',
      _gotcha: formData.get('_gotcha') as string,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus('sent')
        ;(e.target as HTMLFormElement).reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        name="name"
        required
        placeholder="Your name"
        className={inputClass}
        style={{ fontFamily: 'var(--font-body)' }}
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Your email address"
        className={inputClass}
        style={{ fontFamily: 'var(--font-body)' }}
      />
      <input
        type="tel"
        name="phone"
        placeholder="+088-234-6849"
        className={inputClass}
        style={{ fontFamily: 'var(--font-body)' }}
      />
      <textarea
        name="message"
        required
        rows={3}
        placeholder="Write your message here..."
        className={`${inputClass} resize-none`}
        style={{ fontFamily: 'var(--font-body)' }}
      />

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          required
          className="mt-0.5 w-4 h-4 rounded accent-[#004AAD] cursor-pointer"
        />
        <label
          className={`text-sm ${isFooter ? 'text-gray-500' : 'text-gray-500'}`}
          style={{ fontFamily: 'var(--font-body)' }}
        >
          I have read and agree to the{' '}
          <Link href="/privacy-policy" className="text-[#004AAD] hover:underline">
            Privacy Policy
          </Link>
        </label>
      </div>

      <input type="text" name="_gotcha" className="hidden" />

      <button
        type="submit"
        disabled={status === 'sending'}
        className={`w-full py-3 rounded-lg font-semibold text-[14px] transition-all duration-300 bg-[#004AAD] text-white hover:bg-[#003580] hover:shadow-lg hover:shadow-[#004AAD]/20 ${
          status === 'sending' ? 'opacity-60 cursor-not-allowed' : ''
        }`}
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {status === 'sending' ? (
          'Sending...'
        ) : (
          <>
            Book Free Consultation
            <i className="fa-solid fa-arrow-right ml-2 text-sm" />
          </>
        )}
      </button>

      {status === 'sent' && (
        <p className="text-emerald-500 text-sm font-medium flex items-center gap-2">
          <i className="fa-solid fa-circle-check" />
          Message sent! We&apos;ll be in touch soon.
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-500 text-sm font-medium">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}
