import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ui/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Our Reputation Management Services | Reputation 500',
  description:
    'Explore our full suite of reputation management services for individuals and businesses. From SEO and performance marketing to AI optimization and market activation.',
}

export default function ServicesPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={[{ label: 'Services' }]}
      title="Our Reputation Management Services"
      description="Reputation 500 delivers measurable results across every dimension of your online presence. Whether you need to protect a personal brand, strengthen a corporate identity, or expand into new markets, our specialized teams combine deep expertise with proven methodologies to build, manage, and defend reputations at scale."
      content={[
        'Your reputation is your most valuable asset in the digital economy. Every search result, review, social mention, and AI-generated summary shapes how the world perceives you or your organization. At Reputation 500, we take a comprehensive, data-driven approach to reputation management that addresses every channel where opinions are formed.',
        'Our services span six core disciplines, each led by subject-matter experts who collaborate to deliver integrated strategies. From proactive brand building to crisis response, from organic search dominance to paid media precision, we ensure that the narrative surrounding your name or brand is accurate, favorable, and resilient.',
        'We serve executives, public figures, entrepreneurs, startups, enterprises, and multinational corporations. No matter the size of the challenge, our team applies the same rigor: thorough audits, tailored strategies, transparent reporting, and continuous optimization. Every engagement begins with a confidential consultation to understand your goals and craft a plan that delivers lasting results.',
        'Explore our service categories below to learn how Reputation 500 can help you take control of the conversation.',
      ]}
      subServices={[
        {
          slug: 'for-individuals',
          title: 'Reputation Management for Individuals',
          description:
            'Protect and elevate your personal brand with tailored strategies for executives, professionals, and public figures.',
        },
        {
          slug: 'for-businesses',
          title: 'Reputation Management for Businesses',
          description:
            'Strengthen your corporate reputation, manage reviews, and build stakeholder trust with enterprise-grade solutions.',
        },
        {
          slug: 'seo',
          title: 'SEO Services',
          description:
            'Dominate search results with technical SEO, content optimization, and link-building strategies designed for reputation impact.',
        },
        {
          slug: 'performance-marketing',
          title: 'Performance Marketing Services',
          description:
            'Drive qualified traffic and conversions through paid search, social advertising, and data-driven campaign management.',
        },
        {
          slug: 'ai-optimization',
          title: 'AI Optimization Services',
          description:
            'Shape how AI assistants and large language models represent your brand in generated responses and recommendations.',
        },
        {
          slug: 'market-activation',
          title: 'Market Activation Services',
          description:
            'Enter new geographic markets with a reputation-first strategy that builds trust and credibility from day one.',
        },
      ]}
      subServiceBasePath="/services"
      whyChooseUs={[
        {
          title: 'Integrated Expertise Across Channels',
          description:
            'Our teams work together across SEO, paid media, AI optimization, and PR to deliver cohesive strategies rather than siloed tactics. This integrated approach ensures consistent messaging and maximum impact.',
        },
        {
          title: 'Transparent, Data-Driven Results',
          description:
            'Every campaign is measured against clear KPIs with regular reporting dashboards. You always know exactly what we are doing, why we are doing it, and the results it is producing.',
        },
        {
          title: 'Proven Track Record at Scale',
          description:
            'From Fortune 500 companies to high-profile individuals, we have managed reputations across industries and continents. Our case studies demonstrate consistent, measurable improvements in brand perception and search visibility.',
        },
      ]}
      faqs={[
        {
          title: 'What types of clients does Reputation 500 work with?',
          content:
            'We work with individuals including executives, entrepreneurs, and public figures, as well as businesses ranging from startups to multinational corporations. Our services are tailored to the specific needs, scale, and objectives of each client.',
        },
        {
          title: 'How long does it take to see results from reputation management?',
          content:
            'Timelines vary depending on the scope of the engagement. Some improvements, such as review response strategies, can show results within days. SEO-driven reputation changes typically take three to six months for significant movement. We set realistic expectations during our initial consultation and provide ongoing progress reports.',
        },
        {
          title: 'Can you help with an active reputation crisis?',
          content:
            'Yes. We offer rapid-response crisis management services that include real-time monitoring, strategic communications, search result suppression, and media outreach. Our crisis team is available to begin work within 24 hours of engagement.',
        },
        {
          title: 'How is Reputation 500 different from other reputation management firms?',
          content:
            'We combine six specialized disciplines under one roof, ensuring that every aspect of your online presence is addressed in a coordinated strategy. Our approach is fully transparent, data-driven, and built on long-term partnerships rather than quick fixes.',
        },
        {
          title: 'Do you offer international reputation management?',
          content:
            'Yes. Our market activation services are specifically designed for organizations entering new geographic markets. We also support multilingual SEO, international media relations, and region-specific review management across dozens of countries.',
        },
      ]}
      schemaName="Our Reputation Management Services"
      schemaDescription="Comprehensive reputation management services including personal branding, corporate reputation, SEO, performance marketing, AI optimization, and market activation."
    />
  )
}
