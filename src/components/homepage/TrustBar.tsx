export default function TrustBar() {
  return (
    <section className="bg-white py-7 px-4 lg:px-10">
      <div className="max-w-5xl mx-auto flex items-center justify-center flex-wrap gap-6 lg:gap-9">
        {/* 4.8 Star Rating */}
        <div className="text-center">
          <div className="flex items-baseline gap-1.5 justify-center">
            <span className="font-bold text-2xl text-[#0B1E3D]">4.8</span>
            <span className="text-[#C9A84C] text-sm tracking-widest">★★★★★</span>
          </div>
          <span className="text-xs text-gray-400 mt-0.5 block">Star Rating</span>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-10 bg-gray-200" />

        {/* 78+ Global Clients */}
        <div className="text-center">
          <span className="font-bold text-2xl text-[#0B1E3D] block">78+</span>
          <span className="text-xs text-gray-400">Global Clients</span>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-10 bg-gray-200" />

        {/* 21 Countries */}
        <div className="text-center">
          <span className="font-bold text-2xl text-[#0B1E3D] block">21</span>
          <span className="text-xs text-gray-400">Countries</span>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-10 bg-gray-200" />

        {/* 32,920+ Articles Published */}
        <div className="text-center">
          <span className="font-bold text-2xl text-[#0B1E3D] block">32,920+</span>
          <span className="text-xs text-gray-400">Articles Published</span>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-10 bg-gray-200" />

        {/* Platform Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="bg-gray-100 border border-gray-200 rounded px-3 py-1.5 text-xs font-semibold text-gray-700">
            Google ★ 4.7
          </span>
          <span className="bg-gray-100 border border-gray-200 rounded px-3 py-1.5 text-xs font-semibold text-gray-700">
            G2 ★ 4.8
          </span>
          <span className="bg-gray-100 border border-gray-200 rounded px-3 py-1.5 text-xs font-semibold text-gray-700">
            Clutch ★ 5.0
          </span>
          <span className="bg-gray-100 border border-gray-200 rounded px-3 py-1.5 text-xs font-semibold text-gray-700">
            Trustpilot ★ 4.5
          </span>
        </div>
      </div>
    </section>
  );
}
