import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionHeading from '@/components/ui/SectionHeading';
import CTABanner from '@/components/ui/CTABanner';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { SITE_NAME, SITE_URL, TESTIMONIALS } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Client Testimonials | ${SITE_NAME}`,
  description:
    'Read what our clients say about working with Reputation 500. Real results from real businesses across the globe.',
  alternates: { canonical: `${SITE_URL}/about/testimonials` },
};

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg-dark pt-24 pb-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <Breadcrumbs
            items={[
              { label: 'About', href: '/about' },
              { label: 'Testimonials', href: '/about/testimonials' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Client Testimonials
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            Hear directly from the businesses and individuals we have helped
            reclaim their online reputation.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Trusted by 78+ clients across 21 countries."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
