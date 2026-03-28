import { PRICING_PLANS } from '@/lib/constants'
import Link from 'next/link'

export default function PricingSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl font-bold text-heading text-center mb-2"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Online Reputation Management 360 Packages
        </h2>
        <h3 className="text-lg text-text-light text-center mb-12">
          Full Reputation, handled.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className="border border-border rounded-lg p-6 bg-white relative h-full flex flex-col"
            >
              {/* Badge */}
              {plan.badge && (
                <span className="absolute top-0 right-4 bg-primary text-white px-3 py-1 text-xs font-bold uppercase rounded-b-md">
                  {plan.badge}
                </span>
              )}

              {/* Plan name */}
              <h4
                className="text-lg font-bold text-heading mb-1"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {plan.name}
              </h4>

              {/* Description */}
              <p className="text-sm text-text-light mb-4">{plan.description}</p>

              {/* Price */}
              <div className="mb-4">
                <span className="text-sm text-text-muted align-top">
                  {plan.currency}
                </span>
                <span
                  className="text-3xl font-bold text-heading"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {plan.price}
                </span>
                <span className="text-sm text-text-muted ml-1">
                  {plan.period}
                </span>
              </div>

              <hr className="border-border mb-4" />

              {/* Features */}
              <ul className="space-y-2 mb-4 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <i className="fas fa-check text-primary mt-0.5 text-xs" />
                    <span className="text-text">{feature}</span>
                  </li>
                ))}
              </ul>

              <hr className="border-border mb-4" />

              {/* Includes */}
              <p className="text-xs text-text-muted mb-6">
                <span className="font-semibold">Includes:</span>{' '}
                {plan.includes}
              </p>

              {/* CTA */}
              <div className="mt-auto">
                <Link
                  href="/contact"
                  className="block w-full bg-primary text-white py-3 rounded-md text-center font-semibold hover:opacity-90 transition-opacity"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-text-muted text-center mt-8">
          Note: All deliverables and outcomes are based on a 12-month annual
          project timeline
        </p>
      </div>
    </section>
  )
}
