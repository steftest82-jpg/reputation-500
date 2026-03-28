'use client';

import { useEffect, useRef, useState } from 'react';

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M13.3 4.3L6 11.6L2.7 8.3"
        stroke="#004AAD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AnimatedCounter({
  target,
  suffix = '',
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const startTime = performance.now();

          function animate(currentTime: number) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));

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
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function FeaturesChecklist() {
  const checklistItems = [
    'Online Reputation Management',
    'Guaranteed Media Publicity',
    'Google 1st Page Ranking',
    'Be in AI Answers / Citations',
    'Push Negative Search Results Away',
  ];

  const stats = [
    { value: 10, suffix: '+', label: 'Years of experience' },
    { value: 500, suffix: '+', label: 'Reputation Campaigns Delivered' },
    { value: 78, suffix: '+', label: 'International Clients' },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left part - text content */}
          <div>
            <h2
              className="text-3xl font-bold text-heading lg:text-4xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Protect, Control &amp; Dominate Your Online Presence
            </h2>
            <p className="mt-6 text-text-light">
              We work closely with you to understand your risk points, brand
              goals, and target audience. Then we build a practical reputation
              plan across reviews, search results, PR, and monitoring, with
              clear reporting and measurable outcomes.
            </p>
          </div>

          {/* Right part - checklist grid */}
          <div className="grid grid-cols-2 gap-4 content-start">
            {checklistItems.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckIcon />
                <span className="text-sm font-medium text-heading">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats counter bar */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-border p-6 text-center"
            >
              <div
                className="text-4xl font-bold text-heading"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-text-light">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
