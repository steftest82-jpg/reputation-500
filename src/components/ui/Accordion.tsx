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
      {items.map((item, index) => (
        <div key={index} className="border border-border rounded-lg overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <h3 className="text-base font-bold text-heading" style={{ fontFamily: 'var(--font-heading)' }}>
              {item.title || item.question}
            </h3>
            <i className={`fas fa-${openIndex === index ? 'minus' : 'plus'} text-primary text-sm`} />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="px-6 pb-4 text-text-light text-sm leading-relaxed">
              {item.content || item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
