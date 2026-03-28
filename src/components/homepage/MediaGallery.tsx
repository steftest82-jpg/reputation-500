const PUBLICATIONS = [
  'The Brag',
  'Village Voice',
  "Women's Journal",
  'US Business News',
  'The Standard',
  'The Advocate',
  'Denver Gazette',
  'Forbes',
  'Entrepreneur',
  'IB Times',
  'Yahoo Finance',
  'Bloomberg',
]

export default function MediaGallery() {
  return (
    <section className="bg-bg-section py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl font-bold text-heading text-center mb-12"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          We get your article and/or interview featured in
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {PUBLICATIONS.map((name) => (
            <div
              key={name}
              className="bg-white border border-border rounded-lg p-4 flex items-center justify-center h-20 grayscale hover:grayscale-0 transition duration-300"
            >
              <span className="text-xs font-semibold text-text-light text-center leading-tight">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
