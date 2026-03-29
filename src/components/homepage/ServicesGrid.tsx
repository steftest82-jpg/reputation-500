const services = [
  {
    title: 'Online Reputation Management 360',
    description:
      '360 Online Reputation Management, securing your business and/or personal brand\u2019s image and sentiment across the entire digital ecosystem, including Google Search, AI engines, listings, and referrals.',
  },
  {
    title: 'Digital PR & Brand Mentions',
    description:
      'Earn credible online coverage and brand mentions that build authority. Push positive stories higher in search results while strengthening your brand narrative across the web.',
  },
  {
    title: 'Ratings & Review Optimization',
    description:
      'Improve star ratings with ethical review generation, faster responses, and friction-free workflows. Strengthen your Google presence and turn feedback into customer trust.',
  },
  {
    title: 'Brand Visibility & Link Building',
    description:
      'Improve what ranks for your brand name with SEO content, link building, and asset promotion. Reduce the impact of negative results by boosting strong, relevant pages.',
  },
];

export default function ServicesGrid() {
  return (
    <section
      className="py-10 lg:py-14"
      style={{ backgroundColor: 'var(--bg-section, #F5F7FA)' }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Label */}
        <p
          className="text-sm font-semibold uppercase tracking-[0.15em] text-center mb-4"
          style={{
            fontFamily: 'var(--font-body)',
            color: 'var(--primary, #004AAD)',
          }}
        >
          Our Services
        </p>

        {/* Heading */}
        <h2
          className="text-[36px] lg:text-[36px] font-semibold text-center max-w-2xl mx-auto mb-14 leading-tight tracking-tight"
          style={{
            fontFamily: 'var(--font-heading)',
            color: 'var(--heading, #000)',
          }}
        >
          We Provide Complete Online Reputation Management
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 lg:p-10 border border-[#004AAD]/15 card-lift group cursor-default"
            >
              {/* Decorative accent */}
              <div className="w-10 h-1 rounded-full bg-[#004AAD] mb-6 group-hover:w-16 transition-all duration-500" />

              <h4
                className="text-[22px] font-semibold mb-3 tracking-tight"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--heading, #000)',
                }}
              >
                {service.title}
              </h4>

              <p
                className="text-gray-800 text-base leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
