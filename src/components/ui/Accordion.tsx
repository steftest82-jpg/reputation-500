'use client'

import { useState } from 'react'

interface AccordionItem {
  title?: string
  question?: string
  content?: string
  answer?: string
}

interface AccordionProps {
  items: AccordionItem[]
  defaultOpen?: number
}

export default function Accordion({ items, defaultOpen = 0 }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen)

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const heading = item.title || item.question || ''
        const body = item.content || item.answer || ''

        return (
          <div
            key={index}
            className={`border rounded-xl overflow-hidden transition-all duration-300 ${
              isOpen ? 'border-[#004AAD]/30 shadow-sm' : 'border-gray-200'
            }`}
          >
            <button
              className={`w-full flex items-center justify-between px-6 py-5 text-left transition-colors ${
                isOpen ? 'bg-[#004AAD]/5' : 'bg-white hover:bg-gray-50'
              }`}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <h3
                className={`text-base font-bold transition-colors ${
                  isOpen ? 'text-[#004AAD]' : 'text-gray-900'
                }`}
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {heading}
              </h3>
              <span
                className={`flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300 flex-shrink-0 ml-4 ${
                  isOpen
                    ? 'bg-[#004AAD] text-white rotate-180'
                    : 'bg-gray-100 text-gray-500'
                }`}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">
                {body}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
