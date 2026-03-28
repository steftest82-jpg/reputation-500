export default function TrustBar() {
  const stats = [
    {
      value: '4.8',
      stars: true,
      label: 'Star Rating',
    },
    {
      value: '78+',
      label: 'Global Clients',
    },
    {
      value: '21',
      label: 'Countries',
    },
    {
      value: '32,920+',
      label: 'Articles Published',
    },
  ];

  const badges = [
    { platform: 'Google', rating: '4.7' },
    { platform: 'G2', rating: '4.8' },
    { platform: 'Clutch', rating: '5.0' },
    { platform: 'Trustpilot', rating: '4.5' },
  ];

  return (
    <section className="bg-white py-6 border-b border-gray-100 relative z-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center flex-wrap gap-8 lg:gap-10">
          {stats.map((stat, i) => (
            <div key={i} className="contents">
              {i > 0 && (
                <div className="hidden lg:block w-px h-10 bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
              )}
              <div className="text-center">
                <span
                  className="text-2xl font-medium text-[#0B1E3D] tracking-tight"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {stat.value}
                </span>
                {stat.stars && (
                  <span className="text-[#9a7b2d] text-sm tracking-widest block">
                    ★★★★★
                  </span>
                )}
                <span
                  className="text-sm text-gray-900 uppercase tracking-wider mt-0.5 block"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {stat.label}
                </span>
              </div>
            </div>
          ))}

          {/* Final divider before badges */}
          <div className="hidden lg:block w-px h-10 bg-gradient-to-b from-transparent via-gray-200 to-transparent" />

          {/* Platform badges */}
          <div className="flex gap-2">
            {badges.map((badge) => (
              <span
                key={badge.platform}
                className="bg-gray-50 border border-gray-200/80 rounded-md px-3 py-1.5 text-sm font-semibold text-gray-900 hover:border-[#004AAD]/30 hover:bg-[#e8f0fe]/50 transition-all cursor-default"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {badge.platform} ★ {badge.rating}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
