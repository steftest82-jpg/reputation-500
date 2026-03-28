'use client'

import { useState, FormEvent } from 'react'

interface ContactFormProps {
  variant?: 'default' | 'footer'
  prefilledPackage?: string
}

export default function ContactForm({ variant = 'default', prefilledPackage }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

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

  const isFooter = variant === 'footer'
  const inputClass = isFooter
    ? 'w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors'
    : 'w-full px-4 py-3 bg-white border border-border rounded-md text-text placeholder-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors'

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your name"
        required
        className={inputClass}
      />
      <input
        type="email"
        name="email"
        placeholder="Your email address"
        required
        className={inputClass}
      />
      <input
        type="tel"
        name="phone"
        placeholder="+088-234-6849"
        className={inputClass}
      />
      <textarea
        name="message"
        placeholder="Write your message here..."
        rows={4}
        required
        className={inputClass + ' resize-none'}
      />
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          required
          className="mt-1 w-4 h-4 accent-primary"
        />
        <label className={`text-sm ${isFooter ? 'text-gray-400' : 'text-text-light'}`}>
          I have read and agree to the{' '}
          <a href="/privacy-policy" target="_blank" className="text-primary hover:underline">
            Privacy Policy
          </a>
        </label>
      </div>

      {/* Hidden honeypot */}
      <input type="text" name="_gotcha" className="hidden" />

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center px-8 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition-colors disabled:opacity-50"
        >
          {status === 'sending' ? 'Sending...' : 'Book Free Consultation'}
        </button>
      </div>

      {status === 'sent' && (
        <p className="text-green-500 text-sm font-medium">Thank you! We&apos;ll get back to you shortly.</p>
      )}
      {status === 'error' && (
        <p className="text-red-500 text-sm font-medium">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}
