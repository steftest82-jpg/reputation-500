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
    ? 'w-full px-4 py-3.5 bg-white/[0.07] border border-white/10 rounded-xl text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm'
    : 'w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-heading placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 focus:bg-white transition-all duration-300'

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
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <input
        type="text"
        name="name"
        required
        placeholder="Your name"
        className={inputClass}
        style={{ fontFamily: 'var(--font-body)' }}
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        required
        placeholder="Your email"
        className={inputClass}
        style={{ fontFamily: 'var(--font-body)' }}
      />

      {/* Phone */}
      <input
        type="tel"
        name="phone"
        placeholder="Your phone (optional)"
        className={inputClass}
        style={{ fontFamily: 'var(--font-body)' }}
      />

      {/* Message */}
      <textarea
        name="message"
        required
        rows={4}
        placeholder="Tell us about your project..."
        className={`${inputClass} resize-none`}
        style={{ fontFamily: 'var(--font-body)' }}
      />

      {/* Privacy Checkbox */}
      <div className="flex items-start gap-2.5">
        <input
          type="checkbox"
          required
          className="mt-0.5 w-4 h-4 rounded accent-primary cursor-pointer"
        />
        <label
          className="text-[13px] text-gray-500"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          I agree to the{' '}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
        </label>
      </div>

      {/* Honeypot */}
      <input type="text" name="_gotcha" className="hidden" />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'sending'}
        className={`w-full py-3.5 rounded-xl font-semibold text-[14px] transition-all duration-300 bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20 ${
          status === 'sending' ? 'opacity-60 cursor-not-allowed' : ''
        }`}
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {status === 'sending' ? (
          'Sending...'
        ) : (
          <>
            Book Free Consultation
            <i className="fa-solid fa-arrow-right ml-2 text-xs" />
          </>
        )}
      </button>

      {/* Success Message */}
      {status === 'sent' && (
        <p className="mt-3 text-emerald-400 text-sm font-medium flex items-center gap-2">
          <i className="fa-solid fa-circle-check" />
          Message sent successfully! We&apos;ll be in touch soon.
        </p>
      )}

      {/* Error Message */}
      {status === 'error' && (
        <p className="mt-3 text-red-400 text-sm font-medium">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  )
}
