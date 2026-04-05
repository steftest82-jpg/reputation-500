import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Reputation Management for Individuals — Blog | ${SITE_NAME}`,
  description:
    'Protect your personal brand, control what Google shows about you, and build a digital presence that opens doors. Expert personal ORM guides from Reputation 500.',
  alternates: { canonical: `${SITE_URL}/blog/for-individuals` },
  openGraph: {
    title: `Reputation Management for Individuals — Blog | ${SITE_NAME}`,
    description: 'Protect your personal brand and control what appears when someone Googles your name.',
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
    title: 'What Shows Up When Someone Googles Your Name? Why It Matters More Than You Think',
    slug: 'what-shows-up-when-someone-googles-your-name',
    excerpt: 'Employers, clients, and partners search your name before they meet you. Learn what they typically find — and why that first impression can make or break opportunities.',
    funnel: 'TOFU',
    tags: ['Google Search', 'First Impressions'],
    published: false,
  },
  {
    title: 'Personal Reputation Management: What It Is and Why Every Professional Needs It',
    slug: 'what-is-personal-reputation-management',
    excerpt: 'Your online reputation isn\'t just for celebrities anymore. From executives to freelancers, learn why managing your digital presence is now essential for career success.',
    funnel: 'TOFU',
    tags: ['ORM Basics', 'Personal Branding'],
    published: false,
  },
  {
    title: 'How Negative Search Results Can Destroy Your Career (And How to Prevent It)',
    slug: 'negative-search-results-destroy-career',
    excerpt: '70% of employers reject candidates based on what they find online. One negative article or old social media post can cost you the job, the deal, or the relationship.',
    funnel: 'TOFU',
    tags: ['Career Impact', 'Google Search'],
    published: false,
  },
  {
    title: 'How AI Assistants Are Defining Your Personal Reputation Without Your Input',
    slug: 'ai-assistants-defining-personal-reputation',
    excerpt: 'Ask ChatGPT or Gemini about someone and you\'ll get an instant answer. If that answer is wrong or negative, it shapes perception for everyone who asks. Here is what to do.',
    funnel: 'TOFU',
    tags: ['AI Visibility', 'Trends'],
    published: false,
  },
  {
    title: 'The Hidden Cost of Ignoring Your Online Reputation as an Individual',
    slug: 'hidden-cost-ignoring-personal-reputation',
    excerpt: 'Lost job offers, failed business deals, relationship damage, and missed opportunities — the real price of letting your online presence manage itself.',
    funnel: 'TOFU',
    tags: ['Career Impact', 'Revenue'],
    published: false,
  },
  {
    title: 'Personal Branding vs. Reputation Management: What Is the Difference?',
    slug: 'personal-branding-vs-reputation-management',
    excerpt: 'Branding is what you build. Reputation management is what you protect. Learn how these two disciplines work together — and when you need each one.',
    funnel: 'TOFU',
    tags: ['Personal Branding', 'ORM Basics'],
    published: false,
  },
  {
    title: 'Why Executives and C-Suite Leaders Need Reputation Management in 2026',
    slug: 'executives-need-reputation-management',
    excerpt: 'A CEO\'s personal reputation directly impacts company valuation, investor confidence, and media coverage. Here is why executive ORM is now a business necessity.',
    funnel: 'TOFU',
    tags: ['Executive Reputation', 'Brand Trust'],
    published: false,
  },
  {
    title: 'How Your Online Reputation Affects Your Earning Potential: The Data',
    slug: 'reputation-affects-earning-potential',
    excerpt: 'Professionals with strong online reputations earn 10-20% more in negotiations. Data shows the direct link between digital presence and personal income.',
    funnel: 'TOFU',
    tags: ['Revenue', 'Career Impact'],
    published: false,
  },
  {
    title: 'The Psychology of Online Reputation: Why People Trust Search Results Over Personal Experience',
    slug: 'psychology-of-online-reputation',
    excerpt: 'Cognitive biases make us trust Google results more than our own interactions. Understanding this psychology is the first step to managing how you\'re perceived.',
    funnel: 'TOFU',
    tags: ['Brand Trust', 'Google Search'],
    published: false,
  },
  {
    title: 'Social Media and Personal Reputation: What Your Posts Really Say About You',
    slug: 'social-media-and-personal-reputation',
    excerpt: 'Every post, comment, and photo contributes to your digital reputation. Learn what employers, clients, and partners are actually looking for — and what raises red flags.',
    funnel: 'TOFU',
    tags: ['Social Media', 'Personal Branding'],
    published: false,
  },

  // ===== MOFU — Consideration (12 articles) =====
  {
    title: 'How to Remove Negative Content About Yourself from Google: A Complete Guide',
    slug: 'remove-negative-content-from-google',
    excerpt: 'From DMCA takedowns to right-to-be-forgotten requests to content suppression — every method available to remove or push down negative content about you.',
    funnel: 'MOFU',
    tags: ['Google Search', 'Content Removal'],
    published: false,
  },
  {
    title: 'How to Build a Personal Brand That Dominates Google\'s First Page',
    slug: 'build-personal-brand-dominate-google',
    excerpt: 'The step-by-step process for creating and optimizing online properties that rank on the first page for your name — pushing everything else down.',
    funnel: 'MOFU',
    tags: ['Personal Branding', 'SEO'],
    published: false,
  },
  {
    title: 'Personal Reputation Monitoring: How to Track What Is Being Said About You Online',
    slug: 'personal-reputation-monitoring',
    excerpt: 'Set up alerts, monitor mentions, and track search results so you\'re never blindsided by negative content. A practical setup guide for ongoing reputation awareness.',
    funnel: 'MOFU',
    tags: ['Reputation Monitoring', 'Tools'],
    published: false,
  },
  {
    title: 'How to Suppress Negative Articles Without Getting Them Removed',
    slug: 'suppress-negative-articles',
    excerpt: 'When removal isn\'t possible, suppression is the strategy. Learn how to create authoritative content that pushes negative results to page two and beyond.',
    funnel: 'MOFU',
    tags: ['Content Suppression', 'SEO'],
    published: false,
  },
  {
    title: 'The Executive\'s Guide to LinkedIn and Online Authority Building',
    slug: 'executives-guide-linkedin-authority',
    excerpt: 'LinkedIn is the most powerful tool for executive reputation. Learn how to optimize your profile, publish thought leadership, and build authority that translates offline.',
    funnel: 'MOFU',
    tags: ['Executive Reputation', 'LinkedIn'],
    published: false,
  },
  {
    title: 'How to Handle a Personal Reputation Crisis: The First Steps That Matter Most',
    slug: 'handle-personal-reputation-crisis',
    excerpt: 'When something damaging goes viral or appears in search results — whether true or false — these are the immediate actions that limit the damage.',
    funnel: 'MOFU',
    tags: ['Crisis Management', 'Strategy'],
    published: false,
  },
  {
    title: 'Getting Featured in Media: How Press Coverage Builds Personal Authority',
    slug: 'press-coverage-builds-personal-authority',
    excerpt: 'A Forbes feature or Entrepreneur interview doesn\'t just boost ego — it dominates search results, builds trust, and opens doors that cold outreach never could.',
    funnel: 'MOFU',
    tags: ['Digital PR', 'Media Coverage'],
    published: false,
  },
  {
    title: 'How to Clean Up Your Social Media History Before It Hurts You',
    slug: 'clean-up-social-media-history',
    excerpt: 'Old tweets, inappropriate photos, and forgotten posts from years ago can resurface at the worst time. A practical guide to auditing and cleaning your social footprint.',
    funnel: 'MOFU',
    tags: ['Social Media', 'Privacy'],
    published: false,
  },
  {
    title: 'Reputation Management for Doctors, Lawyers, and Professionals: Industry-Specific Strategies',
    slug: 'reputation-management-professionals',
    excerpt: 'Healthcare, legal, and financial professionals face unique reputation challenges — from patient reviews to regulatory constraints. Tailored strategies for regulated industries.',
    funnel: 'MOFU',
    tags: ['Industry-Specific', 'Reviews'],
    published: false,
  },
  {
    title: 'How to Optimize Your Personal Website for Reputation Control',
    slug: 'optimize-personal-website-reputation',
    excerpt: 'Your personal website is the one search result you fully control. Learn how to build and optimize it so it ranks #1 for your name — every time.',
    funnel: 'MOFU',
    tags: ['SEO', 'Personal Branding'],
    published: false,
  },
  {
    title: 'Online Privacy and Reputation: How to Protect Your Personal Information',
    slug: 'online-privacy-protect-personal-information',
    excerpt: 'Data brokers, public records, and social media leaks expose more than you think. Learn how to reduce your digital footprint while strengthening your reputation.',
    funnel: 'MOFU',
    tags: ['Privacy', 'Data Protection'],
    published: false,
  },
  {
    title: 'How to Get a Wikipedia or Wikitia Page and Why It Matters for Your Reputation',
    slug: 'wikipedia-wikitia-page-reputation',
    excerpt: 'A Wikipedia or Wikitia page is one of the strongest reputation assets an individual can have. Learn the requirements, process, and how it impacts search results.',
    funnel: 'MOFU',
    tags: ['Authority Building', 'SEO'],
    published: false,
  },

  // ===== BOFU — Decision (8 articles) =====
  {
    title: 'How to Choose a Personal Reputation Management Service: What to Look For',
    slug: 'how-to-choose-personal-reputation-service',
    excerpt: 'From guarantees to transparency to track record — the critical factors that separate effective personal ORM services from those that waste your money.',
    funnel: 'BOFU',
    tags: ['Hiring ORM', 'Service'],
    published: false,
  },
  {
    title: 'What Does Personal Reputation Management Cost? Honest Pricing Guide',
    slug: 'personal-reputation-management-cost',
    excerpt: 'From basic monitoring to full-service management — an honest breakdown of what personal ORM costs and what results you should expect at each investment level.',
    funnel: 'BOFU',
    tags: ['Pricing', 'Hiring ORM'],
    published: false,
  },
  {
    title: 'DIY vs. Professional Reputation Management: When to Hire an Expert',
    slug: 'diy-vs-professional-reputation-management',
    excerpt: 'Some reputation issues you can handle yourself. Others require professional help. Here is how to tell the difference — and what professionals can do that you can\'t.',
    funnel: 'BOFU',
    tags: ['Hiring ORM', 'Strategy'],
    published: false,
  },
  {
    title: 'Case Study: How an Executive Went from Negative Press to Industry Authority in 6 Months',
    slug: 'case-study-executive-negative-press-to-authority',
    excerpt: 'A real story of how strategic content creation, media placements, and search optimization transformed an executive\'s online presence and career trajectory.',
    funnel: 'BOFU',
    tags: ['Case Study', 'Executive Reputation'],
    published: false,
  },
  {
    title: 'Case Study: Removing Defamatory Content and Rebuilding a Doctor\'s Online Reputation',
    slug: 'case-study-doctor-defamatory-content-removal',
    excerpt: 'How a physician went from 2.8 stars and defamatory blog posts to a clean first page and 4.6-star rating through systematic reputation management.',
    funnel: 'BOFU',
    tags: ['Case Study', 'Content Removal'],
    published: false,
  },
  {
    title: 'What Results to Expect from Personal Reputation Management: Realistic Timelines',
    slug: 'personal-reputation-management-results-timeline',
    excerpt: 'Month 1 vs. month 3 vs. month 6 — a transparent look at what changes and when, so you know exactly what you\'re investing in.',
    funnel: 'BOFU',
    tags: ['Expectations', 'Strategy'],
    published: false,
  },
  {
    title: 'How Reputation 500 Protects Personal Reputations: Our Approach Explained',
    slug: 'reputation-500-personal-reputation-approach',
    excerpt: 'From initial audit through ongoing monitoring — an inside look at our methodology for managing and protecting individual reputations across search, AI, and media.',
    funnel: 'BOFU',
    tags: ['Methodology', 'Service'],
    published: false,
  },
  {
    title: 'The ROI of Personal Reputation Management: Career Growth, Deals, and Opportunities',
    slug: 'roi-personal-reputation-management',
    excerpt: 'A framework for understanding how your reputation investment translates to career advancement, business opportunities, and measurable financial outcomes.',
    funnel: 'BOFU',
    tags: ['ROI', 'Revenue'],
    published: false,
  },
]

const funnelLabels: Record<string, { label: string; color: string; bg: string }> = {
  TOFU: { label: 'Awareness', color: 'text-emerald-700', bg: 'bg-emerald-50' },
  MOFU: { label: 'Strategy', color: 'text-amber-700', bg: 'bg-amber-50' },
  BOFU: { label: 'Decision', color: 'text-[#004AAD]', bg: 'bg-[#e8f0fe]' },
}

export default function IndividualsBlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg-dark pt-24 lg:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs
            light
            items={[
              { label: 'Blog', href: '/blog' },
              { label: 'For Individuals' },
            ]}
          />
          <div className="max-w-3xl">
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Reputation Management for Individuals
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Protect your personal brand, suppress negative search results, and build a digital
              presence that opens doors for your career, business, and personal life.
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
                  {stage === 'TOFU' && 'Why Your Personal Reputation Matters'}
                  {stage === 'MOFU' && 'How to Protect and Build Your Reputation'}
                  {stage === 'BOFU' && 'Getting Professional Help'}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stageArticles.map((article) => (
                  <div
                    key={article.slug}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#004AAD]/20 hover:shadow-lg transition-all duration-300 flex flex-col"
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
                      className="text-lg font-bold mb-3 leading-snug"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed flex-1">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className="text-xs font-medium text-gray-400">Coming Soon</span>
                    </div>
                  </div>
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
            Take Control of What People Find About You
          </h2>
          <p className="text-gray-600 mb-6">
            Your online reputation is your first impression. Let our team help you
            make sure it&apos;s the right one.
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
