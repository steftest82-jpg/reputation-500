import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ui/ServicePageTemplate'
import { SERVICES_DATA } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Performance Marketing Services | Reputation 500',
  description:
    'Data-driven performance marketing that drives qualified leads and protects your brand. Paid search, social advertising, programmatic display, and conversion optimization.',
}

export default function PerformanceMarketingPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Performance Marketing' },
      ]}
      title="Performance Marketing Services"
      description="Performance marketing turns advertising spend into measurable business outcomes. Reputation 500 combines paid media expertise with reputation management intelligence to run campaigns that drive qualified traffic, generate leads, and reinforce a positive brand image across every paid channel."
      content={[
        'Paid media is one of the fastest ways to influence what people see when they encounter your brand online. Unlike organic strategies that build over months, performance marketing delivers immediate visibility on search engines, social platforms, display networks, and video channels. When integrated with a reputation strategy, paid campaigns ensure that your best content and messaging reach the right audiences at the right time.',
        'Our performance marketing team manages campaigns across Google Ads, Microsoft Advertising, Meta, LinkedIn, X, TikTok, programmatic display networks, and video platforms. Every campaign is built on rigorous audience research, competitive analysis, and conversion tracking. We do not just drive clicks; we drive outcomes that align with your reputation and business goals.',
        'Reputation-aware performance marketing requires a specialized approach. We use branded search campaigns to ensure that your ads appear above any negative organic results. We deploy social advertising to amplify positive stories, testimonials, and thought leadership content. We leverage retargeting to keep your brand top-of-mind with audiences who have already expressed interest. And we continuously test creative, messaging, and targeting to optimize return on ad spend.',
        'Transparency is central to our approach. You receive detailed reporting on impressions, clicks, conversions, cost per acquisition, return on ad spend, and brand sentiment metrics. We provide clear attribution models so you understand exactly how your investment translates into results.',
      ]}
      subServices={SERVICES_DATA['performance-marketing'].subServices}
      subServiceBasePath="/services/performance-marketing"
      whyChooseUs={[
        {
          title: 'Reputation-Integrated Campaigns',
          description:
            'Our campaigns are designed with brand perception in mind. We coordinate paid messaging with your broader reputation strategy so that every ad reinforces the narrative you want to build, not just the conversions you want to capture.',
        },
        {
          title: 'Cross-Platform Expertise',
          description:
            'We manage campaigns across all major paid channels from a single, coordinated strategy. This ensures consistent messaging, efficient budget allocation, and comprehensive audience coverage without duplication or wasted spend.',
        },
        {
          title: 'Continuous Optimization',
          description:
            'We treat every campaign as a living system. Through A/B testing, bid optimization, audience refinement, and creative iteration, we continuously improve performance metrics and adapt to market changes in real time.',
        },
      ]}
      faqs={[
        {
          title: 'How does performance marketing support reputation management?',
          content:
            'Performance marketing provides immediate control over what people see when they search for or encounter your brand. Branded search ads ensure your messaging appears above organic results, including any negative content. Social ads amplify positive stories. Display campaigns reinforce brand recognition. Together, these tactics give you direct influence over brand perception.',
        },
        {
          title: 'What platforms do you manage campaigns on?',
          content:
            'We manage paid campaigns across Google Ads, Microsoft Advertising, Meta (Facebook and Instagram), LinkedIn, X, TikTok, YouTube, programmatic display networks, and native advertising platforms. We recommend platform selection based on where your target audiences are most active and responsive.',
        },
        {
          title: 'What is a realistic budget for performance marketing?',
          content:
            'Budgets vary significantly based on industry, competitive landscape, and campaign objectives. We work with clients across a wide range of investment levels and structure campaigns to maximize impact within your budget. During our initial consultation, we provide budget recommendations based on your goals and market conditions.',
        },
        {
          title: 'How quickly can performance marketing campaigns launch?',
          content:
            'Standard campaigns can be live within one to two weeks of engagement, including audience research, creative development, and platform setup. Urgent reputation-related campaigns, such as branded search defense, can launch within 48 hours when needed.',
        },
        {
          title: 'How do you measure campaign success?',
          content:
            'We track key performance indicators including impressions, click-through rate, cost per click, conversion rate, cost per acquisition, return on ad spend, and brand lift metrics. All data is presented in clear dashboards with regular performance reviews to ensure campaigns remain aligned with your objectives.',
        },
      ]}
      schemaName="Performance Marketing Services"
      schemaDescription="Data-driven performance marketing services including paid search, social advertising, programmatic display, and conversion optimization for reputation-conscious brands."
    />
  )
}
