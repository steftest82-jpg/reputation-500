import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ui/ServicePageTemplate'
import { SERVICES_DATA } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Reputation Management for Individuals | Reputation 500',
  description:
    'Protect and build your personal reputation online. Expert services for executives, professionals, and public figures including personal branding, search result management, and crisis response.',
}

export default function ForIndividualsPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'For Individuals' },
      ]}
      title="Reputation Management for Individuals"
      description="Your personal reputation directly impacts your career, relationships, and opportunities. In an era where a single search result can define first impressions, Reputation 500 provides individuals with the strategies and expertise needed to build, protect, and restore their online presence."
      content={[
        'Every executive, entrepreneur, professional, and public figure has a digital footprint that shapes how others perceive them. Recruiters search candidates before interviews. Investors research founders before meetings. Journalists look up sources before interviews. Clients check professionals before signing contracts. What appears in those search results matters enormously.',
        'Reputation 500 offers a comprehensive suite of personal reputation management services designed to ensure that your online presence accurately reflects your accomplishments, values, and expertise. We work with clients who want to proactively build a strong personal brand, as well as those who need to address negative content, outdated information, or damaging search results.',
        'Our approach begins with a thorough digital audit that examines your current search landscape across Google, Bing, social media platforms, and AI assistants. We identify strengths to amplify, vulnerabilities to address, and opportunities to create new, authoritative content that positions you favorably. Every strategy is customized to your specific goals, whether that means establishing thought leadership in your industry, suppressing unfair or irrelevant negative content, or preparing for a high-profile transition.',
        'Privacy and confidentiality are foundational to our work with individuals. All engagements are protected by strict non-disclosure agreements, and our team operates with the discretion that high-profile clients require.',
      ]}
      subServices={SERVICES_DATA['for-individuals'].subServices}
      subServiceBasePath="/services/for-individuals"
      whyChooseUs={[
        {
          title: 'Complete Confidentiality',
          description:
            'Every individual engagement is protected by strict NDAs and handled by a dedicated team. We understand the sensitivity of personal reputation work and operate with absolute discretion at every stage.',
        },
        {
          title: 'Tailored Personal Strategies',
          description:
            'No two personal reputations are alike. We build custom strategies based on your unique situation, goals, industry, and digital footprint rather than applying generic templates.',
        },
        {
          title: 'Long-Term Brand Building',
          description:
            'We go beyond damage control. Our strategies are designed to build sustainable personal brands that grow in authority and influence over time, creating lasting value for your career and ventures.',
        },
      ]}
      faqs={[
        {
          title: 'What can be done about negative search results for my name?',
          content:
            'We use a combination of content creation, SEO optimization, and strategic publishing to promote positive, accurate content that pushes unfavorable results lower in search rankings. In cases where content is defamatory, false, or violates platform policies, we also pursue removal through legal and platform-specific channels.',
        },
        {
          title: 'How long does personal reputation management take?',
          content:
            'Initial improvements in search results typically become visible within two to four months. Building a robust, resilient personal brand is an ongoing process that strengthens over six to twelve months. We provide monthly progress reports so you can track improvements in real time.',
        },
        {
          title: 'Is personal reputation management only for people with negative press?',
          content:
            'Not at all. Many of our clients engage us proactively to build a strong personal brand, establish thought leadership, or prepare for career transitions, fundraising rounds, or public-facing roles. Proactive reputation building is significantly more effective and less costly than reactive damage control.',
        },
        {
          title: 'Will people know I am using a reputation management service?',
          content:
            'No. We operate with complete discretion. All content we create is published under natural, organic channels. We do not use any branding or attribution that would indicate the involvement of a reputation management firm. Confidentiality is a core principle of our individual services.',
        },
        {
          title: 'Can you help manage my social media profiles as part of reputation management?',
          content:
            'Yes. Social media profiles are a critical component of personal reputation. We offer profile optimization, content strategy, and ongoing management for platforms including LinkedIn, X, Instagram, and others. These efforts are integrated with your broader reputation strategy for maximum impact.',
        },
      ]}
      schemaName="Reputation Management for Individuals"
      schemaDescription="Personal reputation management services for executives, professionals, and public figures including personal branding, search result optimization, content removal, and crisis response."
    />
  )
}
