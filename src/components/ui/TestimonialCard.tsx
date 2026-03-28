interface TestimonialCardProps {
  name: string
  role: string
  text: string
  rating: number
}

export default function TestimonialCard({ name, role, text, rating }: TestimonialCardProps) {
  return (
    <div className="h-full flex flex-col p-6 lg:p-8 border border-border rounded-lg bg-white">
      {/* Stars */}
      <div className="flex gap-1 mb-4 text-gold">
        {Array.from({ length: rating }).map((_, i) => (
          <i key={i} className="fas fa-star text-sm" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-text-light text-sm leading-relaxed flex-1 mb-6">
        {text}
      </p>

      {/* Author */}
      <div className="mt-auto">
        <h6 className="text-heading font-bold text-sm" style={{ fontFamily: 'var(--font-heading)' }}>
          {name}
        </h6>
        <span className="text-text-muted text-xs">
          {role}
        </span>
      </div>
    </div>
  )
}
