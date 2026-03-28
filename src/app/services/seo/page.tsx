import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ui/ServicePageTemplate'
import { SERVICES_DATA } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'SEO Services | Reputation 500',
  description:
    'Results-driven SEO services that improve search visibility and protect your online reputation. Technical SEO, content strategy, link building, and local search optimization.',
}

export default function SEOPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'SEO' },
      ]}
      title="SEO Services"
      description="Search engine optimization is the foundation of online reputation. When people search for your name or brand, the results they see shape their perception instantly. Reputation 500 delivers SEO strategies that improve visibility, control the narrative in search results, and drive qualified organic traffic to your most important digital assets."
      content={[
        'Search engines remain the primary channel through which people discover and evaluate brands, professionals, and organizations. Ranking on the first page of Google is not just a traffic strategy; it is a reputation strategy. The content that appears for branded and industry-relevant searches determines whether prospects trust you, competitors outposition you, or negative content defines you.',
        'Our SEO services are built specifically for reputation impact. While traditional SEO agencies focus solely on traffic volume, we optimize for the quality and sentiment of search results as well as their ranking position. This means prioritizing content that accurately represents your brand, suppressing unfavorable results through ethical white-hat techniques, and building a search presence that reinforces trust and authority.',
        'We cover every dimension of modern SEO. Our technical SEO audits identify and resolve crawlability issues, site speed problems, mobile usability gaps, and structured data opportunities. Our content strategies produce authoritative, engaging material that ranks for high-value keywords and establishes thought leadership. Our link-building campaigns earn placements on respected, relevant websites that strengthen domain authority and referral visibility.',
        'Local SEO is equally critical for businesses with physical locations or regional service areas. We optimize Google Business Profiles, build consistent local citations, manage location-based reviews, and ensure that your business appears prominently in map packs and local search results.',
        'Every SEO engagement is grounded in data. We provide transparent reporting that tracks keyword rankings, organic traffic, search result sentiment, backlink growth, and conversion metrics. Our strategies evolve continuously based on algorithm updates, competitive shifts, and your changing business priorities.',
      ]}
      subServices={SERVICES_DATA.seo.subServices}
      subServiceBasePath="/services/seo"
      whyChooseUs={[
        {
          title: 'Reputation-Focused SEO',
          description:
            'Unlike generalist SEO agencies, we optimize for both visibility and sentiment. Every tactic is evaluated not just for its ranking impact but for how it shapes the overall perception of your brand in search results.',
        },
        {
          title: 'White-Hat Methodology',
          description:
            'We use only ethical, search-engine-compliant techniques that deliver sustainable results. Our strategies are built to withstand algorithm updates and grow in effectiveness over time, never putting your domain or reputation at risk.',
        },
        {
          title: 'Full-Stack SEO Capabilities',
          description:
            'From technical infrastructure and content production to link acquisition and local optimization, we handle every aspect of SEO in-house. This eliminates coordination gaps and ensures that all elements of your SEO strategy work together seamlessly.',
        },
      ]}
      faqs={[
        {
          title: 'How is reputation-focused SEO different from standard SEO?',
          content:
            'Standard SEO aims to increase traffic volume. Reputation-focused SEO also considers the sentiment, accuracy, and brand alignment of the content that ranks in search results. We optimize to ensure that the top results for your brand present a positive, accurate picture while still driving meaningful traffic and conversions.',
        },
        {
          title: 'How long does it take for SEO to produce results?',
          content:
            'SEO is a medium- to long-term investment. Technical improvements can show impact within weeks. Content and link-building efforts typically begin producing measurable ranking improvements within three to six months. We set realistic timelines during strategy development and provide monthly reporting to track progress.',
        },
        {
          title: 'Can SEO help push down negative search results?',
          content:
            'Yes. One of the most effective applications of SEO in reputation management is search result suppression. By creating and optimizing high-quality, positive content that outranks negative results, we can significantly reduce the visibility of unfavorable content on the first page of search results.',
        },
        {
          title: 'Do you work with our existing website or create new properties?',
          content:
            'We do both. We optimize your existing website for maximum search performance while also developing supplementary web properties, profiles, and content assets that expand your search footprint and provide additional ranking opportunities for branded queries.',
        },
      ]}
      schemaName="SEO Services"
      schemaDescription="Reputation-focused SEO services including technical SEO, content strategy, link building, and local search optimization for individuals and businesses."
    />
  )
}
