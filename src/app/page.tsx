import type { Metadata } from 'next'
import HeroSection from '@/components/homepage/HeroSection'
import TrustBar from '@/components/homepage/TrustBar'
import ServicesGrid from '@/components/homepage/ServicesGrid'
import FeaturesChecklist from '@/components/homepage/FeaturesChecklist'
import MediaGallery from '@/components/homepage/MediaGallery'
import ProcessAccordion from '@/components/homepage/ProcessAccordion'
import TestimonialsSection from '@/components/homepage/TestimonialsSection'
import PricingSection from '@/components/homepage/PricingSection'
import CTABanner from '@/components/ui/CTABanner'

export const metadata: Metadata = {
  title: 'Reputation 500 | Leading Online Reputation Management Agency',
  description: 'Reputation 500 is an online reputation management agency helping individuals and businesses control what shows up in Google Search, reviews, and brand mentions. Trusted by 78+ clients across 21 countries.',
  openGraph: {
    title: 'Reputation 500 | Leading Online Reputation Management Agency',
    description: 'Online reputation management for individuals and businesses. PR, SEO, review management, and brand protection.',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <CTABanner
        title="Ready to Take Control of Your Reputation?"
        description="Get a free reputation analysis and discover how we can protect and grow your online presence."
      />
      <FeaturesChecklist />
      <MediaGallery />
      <ProcessAccordion />
      <TestimonialsSection />
      <PricingSection />
    </>
  )
}
