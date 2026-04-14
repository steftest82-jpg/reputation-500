import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_NAME, SITE_URL, CONTACT_EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Terms of Service | ${SITE_NAME}`,
  description:
    'Review the terms and conditions governing the use of Reputation 500 services and website.',
  alternates: { canonical: `${SITE_URL}/terms-of-service` },
  openGraph: {
    title: `Terms of Service | ${SITE_NAME}`,
    description:
      'Review the terms and conditions governing the use of Reputation 500 services and website.',
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg-dark pt-24 pb-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <Breadcrumbs
            items={[
              { label: 'Terms of Service', href: '/terms-of-service' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mt-4 text-white">
            Terms of Service
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            Last updated: March 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl prose prose-gray">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using the Reputation 500 website and services, you
            agree to be bound by these Terms of Service. If you do not agree to
            these terms, please do not use our website or services.
          </p>
          <p>
            These terms constitute a legally binding agreement between you and
            ADCX Tech Solutions LTD, trading as Reputation 500.
          </p>

          <h2>2. Services</h2>
          <p>
            Reputation 500 provides online reputation management services
            including, but not limited to, content creation and publication,
            search engine optimisation, review management, crisis
            communications, and brand monitoring.
          </p>
          <p>
            The scope, deliverables, and timeline of any engagement will be
            outlined in a separate service agreement or statement of work
            provided to the client prior to commencement.
          </p>

          <h2>3. Payment Terms</h2>
          <p>
            Fees for our services are outlined in the applicable service
            agreement. Unless otherwise agreed in writing, invoices are due
            within 14 days of issue. Late payments may be subject to interest
            charges in accordance with applicable law.
          </p>
          <p>
            We reserve the right to suspend services in the event of
            non-payment.
          </p>

          <h2>4. Confidentiality</h2>
          <p>
            Both parties agree to keep confidential all non-public information
            disclosed during the course of the engagement. This includes, but is
            not limited to, business strategies, campaign details, proprietary
            methodologies, and client data.
          </p>
          <p>
            Confidentiality obligations survive the termination of any service
            agreement.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Reputation 500
            and ADCX Tech Solutions LTD shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages arising out
            of or related to the use of our services or website.
          </p>
          <p>
            Our total liability for any claim shall not exceed the fees paid by
            the client for the specific services giving rise to the claim.
          </p>

          <h2>6. Governing Law</h2>
          <p>
            These Terms of Service are governed by and construed in accordance
            with the laws of England and Wales. Any disputes arising from these
            terms or our services shall be subject to the exclusive jurisdiction
            of the courts of England and Wales.
          </p>

          <h2>7. Contact</h2>
          <p>
            If you have questions about these Terms of Service, please contact
            us:
          </p>
          <p>
            <strong>Reputation 500</strong> (a division of ADCX Tech Solutions
            LTD)
            <br />
            Email:{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
