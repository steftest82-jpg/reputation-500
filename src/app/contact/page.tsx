import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from '@/components/ui/ContactForm';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_NAME, SITE_URL, CONTACT_EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Contact Us | ${SITE_NAME}`,
  description:
    'Get in touch with Reputation 500. Speak to our team about online reputation management, crisis response, or a free consultation.',
  alternates: { canonical: `${SITE_URL}/contact` },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Reputation 500',
  description:
    'Online reputation management agency with 10+ years of experience serving 78+ international clients across 21 countries.',
  url: SITE_URL,
  email: CONTACT_EMAIL,
  parentOrganization: {
    '@type': 'Organization',
    name: 'ADCX Tech Solutions LTD',
  },
  areaServed: {
    '@type': 'GeoShape',
    name: 'Worldwide',
  },
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: 10,
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />

      {/* Hero */}
      <section className="bg-bg-dark pt-24 pb-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <Breadcrumbs items={[{ label: 'Contact', href: '/contact' }]} />
          <h1 className="text-4xl md:text-5xl font-bold mt-4 text-white">Contact Us</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Ready to take control of your online reputation? Get in touch with
            our team today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <div>
              <SectionHeading title="Get in Touch" />
              <div className="mt-8 space-y-6 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-primary hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Office</h3>
                  <p>ADCX Tech Solutions LTD</p>
                  <p className="text-gray-500 text-sm mt-1">
                    Serving clients across 21 countries worldwide.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Business Hours
                  </h3>
                  <p>Monday &ndash; Friday: 9:00 AM &ndash; 6:00 PM (GMT)</p>
                  <p className="text-gray-500 text-sm mt-1">
                    We aim to respond within 24 hours.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Free Consultation
                  </h3>
                  <p>
                    Not sure where to start? Request a free, no-obligation
                    reputation audit and one of our specialists will walk you
                    through your options.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <SectionHeading title="Send Us a Message" />
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
