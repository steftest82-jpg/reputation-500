const services = [
  {
    title: "Online Reputation Management 360",
    description:
      "360 Online Reputation Management, securing your business and/or personal brand's image and sentiment across the entire digital ecosystem, including Google Search, AI engines, listings, and referrals.",
  },
  {
    title: "Digital PR & Brand Mentions",
    description:
      "Earn credible online coverage and brand mentions that build authority. Push positive stories higher in search results while strengthening your brand narrative across the web.",
  },
  {
    title: "Ratings & Review Optimization",
    description:
      "Improve star ratings with ethical review generation, faster responses, and friction-free workflows. Strengthen your Google presence and turn feedback into customer trust.",
  },
  {
    title: "Brand Visibility & Link Building",
    description:
      "Improve what ranks for your brand name with SEO content, link building, and asset promotion. Reduce the impact of negative results by boosting strong, relevant pages.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-[#F5F7FA] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-primary text-sm font-semibold uppercase tracking-wider text-center mb-3">
          Our Services
        </p>
        <h2
          className="text-3xl lg:text-4xl font-bold text-center max-w-2xl mx-auto mb-12"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          We Provide Complete Online Reputation Management
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <h4
                className="text-xl font-bold text-heading mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {service.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
