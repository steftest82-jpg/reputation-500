'use client';

import { useEffect, useRef } from 'react';

const checklistItems = [
  'Online Reputation Management',
  'Guaranteed Media Publicity',
  'Google 1st Page Ranking',
  'Be in AI Answers / Citations',
  'Push Negative Search Results Away',
  'Results oriented with proven record',
];

const statsData = [
  { target: 10, suffix: '+', label: 'Years of experience' },
  { target: 500, suffix: '+', label: 'Reputation Campaigns Delivered' },
  { target: 78, suffix: '+', label: 'International Clients' },
];

function AnimatedCounter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const startTime = performance.now();

          function easeOutCubic(t: number) {
            return 1 - Math.pow(1 - t, 3);
          }

          function animate(currentTime: number) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutCubic(progress);
            const current = Math.round(easedProgress * target);

            if (el) {
              el.textContent = `${current}${suffix}`;
            }

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          }

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix]);

  return (
    <span
      ref={ref}
      className="text-[28px] font-semibold tracking-tighter"
      style={{
        fontFamily: 'var(--font-heading)',
        color: 'var(--heading, #000)',
      }}
    >
      0{suffix}
    </span>
  );
}

export default function FeaturesChecklist() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT */}
          <div className="">
            <h2
              className="text-[36px] font-semibold leading-tight tracking-tight mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--heading, #000)',
              }}
            >
              Protect, Control &amp; Dominate Your Online Presence
            </h2>
            <p
              className="text-gray-800 text-base leading-relaxed max-w-lg"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              We help businesses and individuals take full control of their
              digital reputation. From suppressing negative search results to
              building authoritative brand coverage, our proven strategies ensure
              your online presence reflects the trust and credibility you
              deserve.
            </p>
          </div>

          {/* RIGHT */}
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {checklistItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-[#004AAD]/15 shadow-sm hover:shadow-md hover:border-[#004AAD]/30 transition-all duration-300"
                >
                  {/* Check icon */}
                  <div className="w-7 h-7 rounded-full bg-[#004AAD] flex items-center justify-center flex-shrink-0">
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5.5L4 8.5L11 1.5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span
                    className="text-sm font-semibold tracking-tight"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--heading, #000)',
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {statsData.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-10 border border-[#004AAD]/15 text-center card-lift"
              >
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                />
                <p
                  className="text-sm text-gray-900 mt-2 font-medium"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
