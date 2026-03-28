import { PRICING_PLANS } from '@/lib/constants'
import Link from 'next/link'

export default function PricingSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl lg:text-4xl font-bold text-center mb-2"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Online Reputation Management 360 Packages
        </h2>
        <h3 className="text-lg text-gray-500 text-center mb-12">
          Full Reputation, handled.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className="relative bg-white border border-gray-200 rounded-xl p-6 h-full flex flex-col"
            >
              {plan.badge && (
                <span className="absolute top-0 right-5 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  {plan.badge}
                </span>
              )}

              <h4
                className="text-xl font-bold text-heading mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {plan.name}
              </h4>

              <p className="mb-4">
                <span className="font-bold text-sm">Great for: </span>
                <span className="text-sm text-gray-500">{plan.description}</span>
              </p>

              <div className="flex items-baseline gap-1">
                <span className="text-lg font-semibold text-gray-400">
                  {plan.currency}
                </span>
                <span
                  className="text-4xl font-bold text-heading"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {plan.price}
                </span>
                <span className="text-sm text-gray-400 ml-1">{plan.period}</span>
              </div>

              <hr className="my-5 border-t border-gray-200" />

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <hr className="my-5 border-t border-gray-200" />

              <div>
                <p className="text-xs font-bold uppercase text-gray-400 mb-1">
                  Includes:
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {plan.includes}
                </p>
              </div>

              <div className="mt-auto pt-4">
                <Link
                  href={`/contact?package=${plan.name}`}
                  className="block w-full text-center py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            Note: All deliverables and outcomes are based on a 12-month annual
            project timeline
          </p>
          <p className="mt-2 text-sm text-primary font-medium">
            Compare packages, details below
          </p>
          <div className="mt-4">
            <i className="fas fa-angle-double-down text-primary text-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
