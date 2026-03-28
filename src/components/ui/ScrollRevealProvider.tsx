'use client'

import { useEffect } from 'react'

export default function ScrollRevealProvider() {
  useEffect(() => {
    // Mark body as JS-ready so reveal animations activate
    document.body.classList.add('js-ready')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
    )

    // Observe after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children')
      targets.forEach((el) => observer.observe(el))
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  return null
}
