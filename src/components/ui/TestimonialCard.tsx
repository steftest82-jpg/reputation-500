interface TestimonialCardProps {
  name: string
  role: string
  text: string
  rating: number
}

export default function TestimonialCard({ name, role, text, rating }: TestimonialCardProps) {
  return (
    <div className="h-full flex flex-col bg-white rounded-2xl p-7 lg:p-8 border border-[#004AAD]/15 card-lift">
      {/* Stars */}
      <div className="flex gap-0.5 mb-5">
        {Array.from({ length: rating }).map((_, i) => (
          <i key={i} className="fa-solid fa-star text-[#C9A84C] text-xs" />
        ))}
      </div>

      {/* Quote */}
      <p
        className="text-gray-500 text-[15px] leading-relaxed flex-1 mb-6"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        &ldquo;{text}&rdquo;
      </p>

      {/* Author */}
      <div className="mt-auto pt-5 border-t border-gray-100">
        <p
          className="text-sm font-bold text-heading tracking-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {name}
        </p>
        <p
          className="text-xs text-gray-400 mt-0.5 leading-relaxed"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {role}
        </p>
      </div>
    </div>
  )
}
