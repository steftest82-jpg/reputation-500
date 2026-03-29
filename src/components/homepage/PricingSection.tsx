import Link from 'next/link'
import { PRICING_PLANS } from '@/lib/constants'
import PricingCTA from '@/components/homepage/PricingCTA'

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.1" />
      <path
        d="M6 10.5L8.5 13L14 7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function PricingSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-[36px] font-medium text-center tracking-tight mb-2"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Online Reputation Management 360 Packages
        </h2>
        <p
          className="text-[#204ABD] text-center mb-14"
          style={{ fontFamily: 'var(--font-body)', fontSize: '20px' }}
        >
          Full Reputation, handled.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.badge === 'POPULAR'

            return (
              <div
                key={plan.name}
                className="relative bg-white rounded-2xl p-7 border border-[#004AAD]/15 h-full flex flex-col card-lift"
              >
                {/* Badge */}
                {isPopular && (
                  <span className="absolute -top-3.5 right-6 bg-primary text-white px-4 py-1 rounded-full text-[12px] font-bold uppercase tracking-wider shadow-lg shadow-primary/20">
                    {plan.badge}
                  </span>
                )}

                {/* Plan Name */}
                <h3
                  className="text-xl font-bold text-[#204ABD] tracking-tight mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-sm font-bold text-gray-900 uppercase tracking-wider">Great for:</p>
                <p
                  className="text-sm text-gray-800 leading-relaxed mb-5"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="text-lg font-semibold text-gray-800">{plan.currency}</span>
                  <span
                    className="text-4xl font-semibold text-heading tracking-tighter"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-sm text-gray-900 ml-1">{plan.period}</span>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100 my-5" />

                {/* Features */}
                <ul className="space-y-3 mb-5">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckIcon />
                      <span
                        className="text-[16px] text-gray-900 leading-relaxed"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="border-t border-gray-100 my-5" />

                {/* Includes */}
                <p className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-1">Includes</p>
                <p
                  className="text-sm text-gray-800 leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {plan.includes}
                </p>

                {/* CTA */}
                <div className="mt-auto pt-5">
                  <PricingCTA planName={plan.name} isPopular={isPopular} />
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-900">
            Note: All deliverables and outcomes are based on a 12-month annual project timeline
          </p>
          <Link
            href="#compare-plans"
            className="text-sm text-primary font-semibold mt-2 block hover:underline"
          >
            Compare packages, details below
          </Link>
          <div className="mt-3 text-primary text-xl">
            <i className="fa-solid fa-angles-down" />
          </div>
        </div>
      </div>
    </section>
  )
}
