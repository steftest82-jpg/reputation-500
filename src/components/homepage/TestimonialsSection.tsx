import { TESTIMONIALS } from '@/lib/constants'
import TestimonialCard from '@/components/ui/TestimonialCard'

export default function TestimonialsSection() {
  return (
    <section className="bg-bg-section py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl lg:text-[2.75rem] font-medium text-center mb-14 tracking-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          What our clients say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              text={testimonial.text}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
