export default function ServicesGrid() {
  const services = [
    {
      title: 'Online Reputation Management 360',
      description:
        '360 Online Reputation Management, securing your business and/or personal brand\'s image and sentiment across the entire digital ecosystem, including Google Search, AI engines, listings, and referrals.',
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

  return (
    <section className="bg-bg-section py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="mb-4 text-sm uppercase tracking-wider text-primary">
            Our Services
          </span>
          <h2
            className="max-w-2xl text-3xl font-bold text-heading lg:text-4xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            We Provide Complete Online Reputation Management
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="h-full rounded-lg border border-border bg-white p-6 lg:p-8"
            >
              <h4
                className="mb-3 font-bold text-heading"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {service.title}
              </h4>
              <p className="text-sm text-text-light">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
