import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_NAME, SITE_URL, CONTACT_EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description:
    'Read the Reputation 500 privacy policy to understand how we collect, use, and protect your personal information.',
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg-dark pt-24 pb-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <Breadcrumbs
            items={[{ label: 'Privacy Policy', href: '/privacy-policy' }]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mt-4 text-white">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Last updated: March 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl prose prose-gray">
          <h2>1. Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide
            when you contact us, subscribe to our newsletter, or use our
            services. This may include your name, email address, phone number,
            company name, and any other details you choose to share.
          </p>
          <p>
            We also automatically collect certain technical information when you
            visit our website, such as your IP address, browser type, operating
            system, referring URLs, and pages visited.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Respond to your enquiries and support requests</li>
            <li>
              Send you relevant updates, marketing communications, and service
              notifications (with your consent)
            </li>
            <li>Analyse website usage to improve the user experience</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. Data Protection</h2>
          <p>
            We implement appropriate technical and organisational measures to
            protect your personal data against unauthorised access, alteration,
            disclosure, or destruction. While no system is completely secure, we
            take reasonable steps to ensure the safety of your information.
          </p>

          <h2>4. Cookies</h2>
          <p>
            Our website may use cookies and similar tracking technologies to
            enhance your browsing experience, analyse site traffic, and
            understand where our visitors come from. You can control cookie
            preferences through your browser settings at any time.
          </p>

          <h2>5. Third-Party Services</h2>
          <p>
            We may share your information with trusted third-party service
            providers who assist us in operating our website and delivering our
            services. These providers are contractually obligated to protect your
            data and use it only for the purposes we specify.
          </p>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have the right to access,
            correct, delete, or restrict the processing of your personal data.
            You may also have the right to data portability and to withdraw
            consent at any time.
          </p>
          <p>
            To exercise any of these rights, please contact us using the details
            below.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at:
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
