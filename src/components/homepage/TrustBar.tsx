export default function TrustBar() {
  return (
    <section className="bg-white py-5 border-b border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]">
      <div className="max-w-6xl mx-auto px-4 overflow-x-auto">
        <div className="flex items-center justify-center gap-5 min-w-max">
          {/* 4.8 + Stars */}
          <div className="text-center">
            <div className="text-xl font-semibold text-[#0B1E3D]" style={{ fontFamily: 'var(--font-heading)' }}>4.8</div>
            <div className="text-[#9a7b2d] text-[11px] tracking-widest leading-none">★★★★★</div>
            <div style={{ fontSize: '10px' }} className="text-gray-600 uppercase tracking-wider mt-0.5 font-medium">Star Rating</div>
          </div>

          <div className="w-px h-9 bg-gray-200" />

          {/* 78+ */}
          <div className="text-center">
            <div className="text-xl font-semibold text-[#0B1E3D]" style={{ fontFamily: 'var(--font-heading)' }}>78+</div>
            <div style={{ fontSize: '10px' }} className="text-gray-600 uppercase tracking-wider mt-0.5 font-medium">Global Clients</div>
          </div>

          <div className="w-px h-9 bg-gray-200" />

          {/* 21 */}
          <div className="text-center">
            <div className="text-xl font-semibold text-[#0B1E3D]" style={{ fontFamily: 'var(--font-heading)' }}>21</div>
            <div style={{ fontSize: '10px' }} className="text-gray-600 uppercase tracking-wider mt-0.5 font-medium">Countries</div>
          </div>

          <div className="w-px h-9 bg-gray-200" />

          {/* 32,920+ */}
          <div className="text-center">
            <div className="text-xl font-semibold text-[#0B1E3D]" style={{ fontFamily: 'var(--font-heading)' }}>32,920+</div>
            <div style={{ fontSize: '10px' }} className="text-gray-600 uppercase tracking-wider mt-0.5 font-medium">Articles Published</div>
          </div>

          <div className="w-px h-9 bg-gray-200" />

          {/* Platform badges - inline */}
          <div className="flex items-center gap-2">
            {[
              { name: 'Google', rating: '4.7' },
              { name: 'G2', rating: '4.8' },
              { name: 'Clutch', rating: '5.0' },
              { name: 'Trustpilot', rating: '4.5' },
            ].map((b) => (
              <span
                key={b.name}
                className="bg-gray-50 border border-gray-200 rounded px-2.5 py-1 font-semibold text-gray-800 whitespace-nowrap"
                style={{ fontSize: '12px', fontFamily: 'var(--font-body)' }}
              >
                {b.name} ★ {b.rating}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
