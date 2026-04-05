import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Reputation Management for Businesses — Blog | ${SITE_NAME}`,
  description:
    'Learn how to protect your brand, improve online ratings, manage crises, and turn your company reputation into a competitive advantage. Expert guides from Reputation 500.',
  alternates: { canonical: `${SITE_URL}/blog/for-businesses` },
  openGraph: {
    title: `Reputation Management for Businesses — Blog | ${SITE_NAME}`,
    description: 'Learn how to protect your brand, improve online ratings, and turn reputation into revenue.',
  },
}

interface Article {
  title: string
  slug: string
  excerpt: string
  funnel: 'TOFU' | 'MOFU' | 'BOFU'
  tags: string[]
  published: boolean
}

const articles: Article[] = [
  // ===== TOFU — Awareness (10 articles) =====
  {
    title: 'What Is Online Reputation Management and Why Does Every Business Need It?',
    slug: 'what-is-online-reputation-management',
    excerpt: 'A comprehensive introduction to ORM — what it covers, why it matters, and how it directly impacts trust, revenue, and growth for businesses of all sizes.',
    funnel: 'TOFU',
    tags: ['ORM Basics', 'Brand Trust'],
    published: true,
  },
  {
    title: 'How Online Reviews Directly Impact Your Revenue: The Data Behind the Stars',
    slug: 'how-online-reviews-impact-revenue',
    excerpt: 'A one-star increase can boost revenue by 5-9%. We break down the statistics proving the direct link between your online ratings and your bottom line.',
    funnel: 'TOFU',
    tags: ['Reviews', 'Revenue'],
    published: true,
  },
  {
    title: 'What Happens When Your Business Has a Bad Online Reputation? Real Costs Exposed',
    slug: 'bad-online-reputation-costs',
    excerpt: '92% of consumers avoid businesses with bad reviews. Discover the hidden costs of ignoring your online reputation — from lost customers to talent drain.',
    funnel: 'TOFU',
    tags: ['Brand Risk', 'Revenue'],
    published: true,
  },
  {
    title: 'How AI Search Is Reshaping Business Reputation: What You Need to Know in 2026',
    slug: 'ai-search-reshaping-business-reputation',
    excerpt: 'ChatGPT, Gemini, and Perplexity are now answering questions about your business. Learn how AI-generated answers affect brand perception and what to do about it.',
    funnel: 'TOFU',
    tags: ['AI Visibility', 'Trends'],
    published: true,
  },
  {
    title: 'Online Reputation Management vs. PR: What Is the Difference and Which Do You Need?',
    slug: 'reputation-management-vs-pr',
    excerpt: 'PR builds awareness. ORM protects and controls perception. Learn when you need one, the other, or both — and how they work together.',
    funnel: 'TOFU',
    tags: ['ORM Basics', 'Digital PR'],
    published: true,
  },
  {
    title: 'The True Cost of Negative Google Search Results for Your Business',
    slug: 'cost-of-negative-google-results',
    excerpt: '74% of consumers won\'t buy from a brand with negative content on the first page. Here is exactly how much those negative results are costing you.',
    funnel: 'TOFU',
    tags: ['Google Search', 'Revenue'],
    published: true,
  },
  {
    title: '10 Warning Signs Your Business Reputation Is at Risk (And You Don\'t Know It)',
    slug: 'warning-signs-reputation-at-risk',
    excerpt: 'Declining leads, fewer reviews, and employee churn can all signal a reputation problem. Learn the 10 red flags that demand immediate attention.',
    funnel: 'TOFU',
    tags: ['Brand Risk', 'Crisis Management'],
    published: true,
  },
  {
    title: 'How Your Online Reputation Affects Your Ability to Attract Top Talent',
    slug: 'reputation-affects-talent-acquisition',
    excerpt: '86% of job seekers research a company\'s reputation before applying. A damaged online presence doesn\'t just cost customers — it costs you your best hires.',
    funnel: 'TOFU',
    tags: ['Employer Brand', 'Brand Trust'],
    published: true,
  },
  {
    title: 'The Business Owner\'s Guide to Google Search Results: What Shows Up and Why',
    slug: 'business-guide-google-search-results',
    excerpt: 'Search results for your brand name are your digital storefront. Understand what controls what appears — and how to influence it.',
    funnel: 'TOFU',
    tags: ['Google Search', 'ORM Basics'],
    published: true,
  },
  {
    title: 'Why Reputation Management Is Now a C-Suite Priority: Industry Data and Trends',
    slug: 'reputation-management-c-suite-priority',
    excerpt: '84% of executives rank reputation risk as their top concern — above cyber threats. Here is why boards and CEOs are investing in ORM like never before.',
    funnel: 'TOFU',
    tags: ['Trends', 'Brand Trust'],
    published: true,
  },

  // ===== MOFU — Consideration (12 articles) =====
  {
    title: 'How to Remove Negative Search Results: A Step-by-Step Guide for Businesses',
    slug: 'how-to-remove-negative-search-results',
    excerpt: 'From legal takedowns to content suppression strategies — a practical framework for pushing negative results off the first page of Google.',
    funnel: 'MOFU',
    tags: ['Google Search', 'Content Suppression'],
    published: true,
  },
  {
    title: 'Review Management Strategy: How to Get More 5-Star Reviews and Handle Negative Ones',
    slug: 'review-management-strategy',
    excerpt: 'A complete playbook for generating authentic positive reviews, responding to criticism, and maintaining a 4.5+ star rating across platforms.',
    funnel: 'MOFU',
    tags: ['Reviews', 'Ratings Optimization'],
    published: true,
  },
  {
    title: 'Business Reputation Crisis Management: The First 48 Hours Playbook',
    slug: 'reputation-crisis-management-playbook',
    excerpt: 'When a reputation crisis hits, speed is everything. This is the exact response framework our team uses in the critical first 48 hours.',
    funnel: 'MOFU',
    tags: ['Crisis Management', 'Brand Protection'],
    published: true,
  },
  {
    title: 'How to Optimize Your Business for AI-Powered Search Engines',
    slug: 'optimize-business-ai-search-engines',
    excerpt: 'AI engines pull answers from your online content. Learn how to ensure your business appears accurately and favorably in ChatGPT, Gemini, and Perplexity results.',
    funnel: 'MOFU',
    tags: ['AI Visibility', 'SEO'],
    published: true,
  },
  {
    title: 'Digital PR for Reputation: How Media Coverage Builds Trust and Authority',
    slug: 'digital-pr-builds-trust-authority',
    excerpt: 'Being featured in Forbes, Entrepreneur, and industry publications does more than boost ego — it directly controls your search results and builds lasting trust.',
    funnel: 'MOFU',
    tags: ['Digital PR', 'Brand Mentions'],
    published: true,
  },
  {
    title: 'How to Build a Proactive Reputation Management Strategy (Not Just Reactive)',
    slug: 'proactive-reputation-management-strategy',
    excerpt: 'Most businesses only think about reputation after something goes wrong. Here is how to build a proactive system that prevents crises before they happen.',
    funnel: 'MOFU',
    tags: ['Brand Protection', 'Strategy'],
    published: true,
  },
  {
    title: 'SEO and Reputation Management: How They Work Together to Control Your Brand Narrative',
    slug: 'seo-and-reputation-management',
    excerpt: 'SEO isn\'t just about traffic — it\'s your most powerful reputation tool. Learn how link building, content, and technical SEO protect your brand online.',
    funnel: 'MOFU',
    tags: ['SEO', 'Content Strategy'],
    published: true,
  },
  {
    title: 'How to Monitor Your Business Reputation: Tools, Metrics, and What to Track',
    slug: 'how-to-monitor-business-reputation',
    excerpt: 'From Google Alerts to sentiment analysis — the essential monitoring setup that lets you catch threats early and measure reputation health over time.',
    funnel: 'MOFU',
    tags: ['Reputation Monitoring', 'Tools'],
    published: true,
  },
  {
    title: 'Brand Mentions: Why Every Mention Matters and How to Control the Narrative',
    slug: 'brand-mentions-control-narrative',
    excerpt: 'Your brand is mentioned in places you don\'t know about. Learn how to discover, track, and influence every conversation happening about your business.',
    funnel: 'MOFU',
    tags: ['Brand Mentions', 'Monitoring'],
    published: true,
  },
  {
    title: 'The Link Between Online Reputation and Conversion Rates: What the Data Shows',
    slug: 'reputation-and-conversion-rates',
    excerpt: 'Businesses with strong reputations convert at 3-5x higher rates. Explore the data connecting trust signals, reviews, and search presence to revenue.',
    funnel: 'MOFU',
    tags: ['Revenue', 'Reviews'],
    published: true,
  },
  {
    title: 'How to Respond to Negative Reviews Without Making It Worse',
    slug: 'how-to-respond-negative-reviews',
    excerpt: 'The wrong response to a bad review can do more damage than the review itself. Learn the psychology and framework behind responses that actually rebuild trust.',
    funnel: 'MOFU',
    tags: ['Reviews', 'Crisis Management'],
    published: true,
  },
  {
    title: 'Reputation Management for Multi-Location Businesses: Unique Challenges and Solutions',
    slug: 'reputation-management-multi-location',
    excerpt: 'Managing reputation across dozens of locations, each with its own reviews and search results, requires a different approach. Here is how to scale ORM effectively.',
    funnel: 'MOFU',
    tags: ['Strategy', 'Reviews'],
    published: true,
  },

  // ===== BOFU — Decision (8 articles) =====
  {
    title: 'How to Choose a Reputation Management Agency: 7 Questions to Ask Before You Hire',
    slug: 'how-to-choose-reputation-management-agency',
    excerpt: 'Not all ORM agencies are equal. Learn the critical questions that separate proven experts from companies that will waste your budget.',
    funnel: 'BOFU',
    tags: ['Hiring ORM', 'Agency'],
    published: true,
  },
  {
    title: 'In-House vs. Agency Reputation Management: Which Is Right for Your Business?',
    slug: 'in-house-vs-agency-reputation-management',
    excerpt: 'Should you build an internal team or hire specialists? A practical comparison of costs, capabilities, and outcomes to help you decide.',
    funnel: 'BOFU',
    tags: ['Hiring ORM', 'Strategy'],
    published: true,
  },
  {
    title: 'What Does Reputation Management Cost? A Transparent Pricing Breakdown',
    slug: 'reputation-management-cost-pricing',
    excerpt: 'From DIY tools to full-service agencies — an honest look at what reputation management costs and what you should expect at each price point.',
    funnel: 'BOFU',
    tags: ['Pricing', 'Hiring ORM'],
    published: true,
  },
  {
    title: 'ROI of Reputation Management: How to Calculate the Revenue Impact for Your Business',
    slug: 'roi-reputation-management',
    excerpt: 'A framework to quantify the return on your reputation investment — from review improvements to search result changes to actual revenue lift.',
    funnel: 'BOFU',
    tags: ['ROI', 'Revenue'],
    published: true,
  },
  {
    title: 'Reputation Management Case Study: How a SaaS Company Recovered from a PR Crisis',
    slug: 'case-study-saas-pr-crisis-recovery',
    excerpt: 'A real-world walkthrough of how strategic ORM helped a technology company go from page-one negative coverage to trusted industry leader in 6 months.',
    funnel: 'BOFU',
    tags: ['Case Study', 'Crisis Management'],
    published: true,
  },
  {
    title: 'Reputation Management Case Study: From 3.2 to 4.7 Stars — A Restaurant Group\'s Turnaround',
    slug: 'case-study-restaurant-ratings-turnaround',
    excerpt: 'How a multi-location restaurant group transformed its online ratings and saw a 23% revenue increase through systematic reputation management.',
    funnel: 'BOFU',
    tags: ['Case Study', 'Reviews'],
    published: true,
  },
  {
    title: 'What to Expect in Your First 90 Days of Reputation Management',
    slug: 'first-90-days-reputation-management',
    excerpt: 'A realistic timeline of what happens when you start working with a reputation management partner — milestones, quick wins, and long-term goals.',
    funnel: 'BOFU',
    tags: ['Onboarding', 'Strategy'],
    published: true,
  },
  {
    title: 'Guaranteed Media Placements: How Reputation 500 Gets Your Brand in Forbes, Entrepreneur & More',
    slug: 'guaranteed-media-placements-forbes-entrepreneur',
    excerpt: 'An inside look at how we secure coverage in 500+ publications — from Forbes and Entrepreneur to industry-specific outlets — and why it matters for your reputation.',
    funnel: 'BOFU',
    tags: ['Digital PR', 'Media Coverage'],
    published: true,
  },
]

const funnelLabels: Record<string, { label: string; color: string; bg: string }> = {
  TOFU: { label: 'Awareness', color: 'text-emerald-700', bg: 'bg-emerald-50' },
  MOFU: { label: 'Strategy', color: 'text-amber-700', bg: 'bg-amber-50' },
  BOFU: { label: 'Decision', color: 'text-[#004AAD]', bg: 'bg-[#e8f0fe]' },
}

export default function BusinessBlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg-dark pt-24 lg:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs
            light
            items={[
              { label: 'Blog', href: '/blog' },
              { label: 'For Businesses' },
            ]}
          />
          <div className="max-w-3xl">
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Reputation Management for Businesses
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Strategies to protect your brand, improve ratings, manage crises, and turn your
              company&apos;s online reputation into a revenue driver. From awareness to action.
            </p>
          </div>
        </div>
      </section>

      {/* Articles by Funnel Stage */}
      {(['TOFU', 'MOFU', 'BOFU'] as const).map((stage) => {
        const stageArticles = articles.filter((a) => a.funnel === stage)
        const { label } = funnelLabels[stage]
        return (
          <section key={stage} className="py-16 border-b border-gray-100 last:border-0">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center gap-3 mb-10">
                <span className={`text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full ${funnelLabels[stage].bg} ${funnelLabels[stage].color}`}>
                  {label}
                </span>
                <h2
                  className="text-2xl font-bold"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {stage === 'TOFU' && 'Why Reputation Matters'}
                  {stage === 'MOFU' && 'How to Manage Your Reputation'}
                  {stage === 'BOFU' && 'Taking Action'}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stageArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/for-businesses/${article.slug}`}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#004AAD]/20 hover:shadow-lg transition-all duration-300 flex flex-col group"
                  >
                    <div className="flex flex-wrap gap-2 mb-3">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium text-gray-500 bg-gray-100 rounded-full px-2.5 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3
                      className="text-lg font-bold mb-3 leading-snug group-hover:text-[#004AAD] transition-colors"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed flex-1">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className="text-sm font-medium text-[#004AAD]">Read article →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA */}
      <section className="bg-[#f8fafc] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Don&apos;t Wait for a Crisis to Act
          </h2>
          <p className="text-gray-600 mb-6">
            Most businesses discover reputation problems after they&apos;ve already lost customers.
            Get ahead of the curve with a free reputation analysis.
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center px-8 py-3.5 text-base font-semibold rounded-lg"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
