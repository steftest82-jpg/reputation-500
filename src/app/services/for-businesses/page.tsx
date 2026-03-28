import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ui/ServicePageTemplate'
import { SERVICES_DATA } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Reputation Management for Businesses | Reputation 500',
  description:
    'Enterprise-grade corporate reputation management. Protect your brand, manage reviews, handle crises, and build stakeholder trust with proven strategies.',
}

export default function ForBusinessesPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'For Businesses' },
      ]}
      title="Reputation Management for Businesses"
      description="Corporate reputation is a strategic asset that influences customer acquisition, investor confidence, employee recruitment, and long-term enterprise value. Reputation 500 delivers business reputation management solutions that protect and strengthen how your organization is perceived across every digital touchpoint."
      content={[
        'In a connected marketplace, your corporate reputation extends far beyond your own website. It lives in search results, review platforms, social media conversations, news coverage, employee review sites, and increasingly in AI-generated responses. A single negative article, viral complaint, or inaccurate AI summary can erode years of brand equity in hours.',
        'Reputation 500 partners with businesses of every size to build resilient, positive corporate reputations. Our services address the full spectrum of reputation challenges, from proactive brand building and review management to crisis communications and competitive positioning. We work with marketing teams, communications departments, and C-suite leaders to align reputation strategy with broader business objectives.',
        'Our business reputation management process starts with a comprehensive brand audit that evaluates your current standing across search engines, review platforms, social channels, news media, and AI systems. We identify reputation risks, competitive gaps, and untapped opportunities. Based on these findings, we develop a prioritized action plan with clear milestones and measurable outcomes.',
        'Whether you are a startup building credibility from scratch, a growing company managing increasing public visibility, or an established enterprise defending a hard-earned reputation, our team provides the expertise and execution capacity to achieve your goals.',
      ]}
      subServices={SERVICES_DATA['for-businesses'].subServices}
      subServiceBasePath="/services/for-businesses"
      whyChooseUs={[
        {
          title: 'Enterprise-Grade Infrastructure',
          description:
            'Our monitoring systems, reporting dashboards, and project management processes are built for the complexity and scale that businesses require. We handle multi-location, multi-brand, and international reputation programs with ease.',
        },
        {
          title: 'Cross-Functional Integration',
          description:
            'We collaborate directly with your marketing, PR, legal, and executive teams to ensure that reputation strategy is integrated with your broader business operations. This alignment maximizes efficiency and impact.',
        },
        {
          title: 'Measurable Business Impact',
          description:
            'Every initiative is tied to business outcomes. We track metrics that matter to your bottom line, including customer acquisition cost, review conversion rates, branded search trends, and share of voice against competitors.',
        },
      ]}
      faqs={[
        {
          title: 'How does corporate reputation management differ from PR?',
          content:
            'Public relations is one component of reputation management. Corporate reputation management encompasses PR alongside SEO, review management, social media monitoring, AI optimization, crisis preparedness, and competitive analysis. It is a broader, more integrated discipline that addresses every channel where your brand reputation is formed.',
        },
        {
          title: 'Can you manage reviews across multiple locations?',
          content:
            'Yes. We specialize in multi-location review management across Google Business Profile, Yelp, Trustpilot, industry-specific platforms, and dozens of other review sites. Our systems monitor, alert, and facilitate responses at scale while maintaining the authentic, personalized tone that customers expect.',
        },
        {
          title: 'What happens if our company faces a reputation crisis?',
          content:
            'Our crisis management team activates within hours. We provide strategic communications counsel, monitor real-time sentiment, coordinate media responses, implement search suppression tactics, and manage stakeholder communications. We also offer pre-crisis planning to ensure your organization is prepared before an incident occurs.',
        },
        {
          title: 'How do you measure return on investment for reputation management?',
          content:
            'We establish baseline metrics during the audit phase and track improvements over time. Key performance indicators include search result sentiment, review ratings and volume, branded search traffic, media sentiment, AI mention accuracy, and customer acquisition metrics. Quarterly business reviews connect these indicators to revenue and growth outcomes.',
        },
        {
          title: 'Do you work with businesses in regulated industries?',
          content:
            'Yes. We have experience managing reputations in healthcare, financial services, legal, real estate, and other regulated sectors. Our strategies comply with industry-specific advertising, disclosure, and communication regulations while still achieving meaningful reputation improvements.',
        },
      ]}
      schemaName="Reputation Management for Businesses"
      schemaDescription="Corporate reputation management services for businesses including brand monitoring, review management, crisis communications, and competitive analysis."
    />
  )
}
