"use client";

import { useEffect, useRef, useState } from "react";

const checklistItems = [
  "Online Reputation Management",
  "Guaranteed Media Publicity",
  "Google 1st Page Ranking",
  "Be in AI Answers / Citations",
  "Push Negative Search Results Away",
];

const stats = [
  { target: 10, suffix: "+", label: "Years of experience" },
  { target: 500, suffix: "+", label: "Reputation Campaigns Delivered" },
  { target: 78, suffix: "+", label: "International Clients" },
];

function AnimatedCounter({
  target,
  suffix,
  label,
}: {
  target: number;
  suffix: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
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
    <div
      ref={ref}
      className="bg-white border border-gray-200 rounded-xl p-8 text-center"
    >
      <p
        className="text-5xl font-bold text-heading mb-2"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {count}
        {suffix}
      </p>
      <p className="text-sm text-gray-500 mt-1">{label}</p>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      className="w-6 h-6 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill="#004AAD" />
      <path
        d="M7.5 12.5L10.5 15.5L16.5 9.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FeaturesChecklist() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-heading leading-tight mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Protect, Control &amp; Dominate Your Online Presence
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              We work closely with you to understand your risk points, brand
              goals, and target audience. Then we build a practical reputation
              plan across reviews, search results, PR, and monitoring, with
              clear reporting and measurable outcomes.
            </p>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-2 gap-4 lg:gap-5">
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

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
