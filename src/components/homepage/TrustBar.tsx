const stats = [
  {
    value: '4.8',
    hasStars: true,
    label: 'Star Rating',
  },
  {
    value: '78+',
    hasStars: false,
    label: 'Global Clients',
  },
  {
    value: '21',
    hasStars: false,
    label: 'Countries',
  },
  {
    value: '32,920+',
    hasStars: false,
    label: 'Articles Published',
  },
];

const platformRatings = [
  { name: 'Google', rating: '4.7' },
  { name: 'G2', rating: '4.8' },
  { name: 'Clutch', rating: '5.0' },
  { name: 'Trustpilot', rating: '4.5' },
];

function Divider() {
  return (
    <div className="hidden md:block w-px h-10 bg-gray-200 flex-shrink-0" />
  );
}

export default function TrustBar() {
  return (
    <section className="bg-white py-7 px-10 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-6 md:gap-9">
        {/* Stats */}
        {stats.map((stat, index) => (
          <div key={stat.label} className="contents">
            {index > 0 && <Divider />}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-bold text-[#0B1E3D]">
                  {stat.value}
                </span>
                {stat.hasStars && (
                  <span className="text-gold text-sm">★★★★★</span>
                )}
              </div>
              <span className="text-xs text-text-muted">{stat.label}</span>
            </div>
          </div>
        ))}

        <Divider />

        {/* Platform Rating Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {platformRatings.map((platform) => (
            <span
              key={platform.name}
              className="inline-flex items-center gap-1 bg-gray-100 border border-gray-200 rounded px-3 py-1.5 text-xs font-semibold text-heading"
            >
              {platform.name}{' '}
              <span className="text-gold">★</span>{' '}
              {platform.rating}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
