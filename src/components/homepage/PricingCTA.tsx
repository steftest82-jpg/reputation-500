'use client'

import { useState } from 'react'
import InquiryModal from '@/components/ui/InquiryModal'

interface PricingCTAProps {
  planName: string
  isPopular: boolean
}

export default function PricingCTA({ planName, isPopular }: PricingCTAProps) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className={`block w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer ${
          isPopular
            ? 'bg-[#004AAD] text-white hover:bg-[#003580] shadow-lg shadow-[#004AAD]/15'
            : 'bg-gray-50 text-gray-900 border border-gray-200 hover:bg-[#004AAD] hover:text-white hover:border-[#004AAD]'
        }`}
      >
        Get Started
      </button>

      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Get Started"
        subtitle={`Tell us about yourself and we will get back to you about the ${planName} package.`}
        inquiryType="package"
        inquiryName={planName}
      />
    </>
  )
}
