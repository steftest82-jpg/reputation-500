import { SITE_URL } from '@/lib/constants'

const businessArticles = [
  { slug: 'what-is-online-reputation-management', title: 'What Is Online Reputation Management and Why Does Every Business Need It?' },
  { slug: 'how-online-reviews-impact-revenue', title: 'How Online Reviews Directly Impact Your Revenue: The Data Behind the Stars' },
  { slug: 'bad-online-reputation-costs', title: 'What Happens When Your Business Has a Bad Online Reputation? Real Costs Exposed' },
  { slug: 'ai-search-reshaping-business-reputation', title: 'How AI Search Is Reshaping Business Reputation in 2026' },
  { slug: 'reputation-management-vs-pr', title: 'Online Reputation Management vs. PR: What Is the Difference?' },
  { slug: 'cost-of-negative-google-results', title: 'The True Cost of Negative Google Search Results for Your Business' },
  { slug: 'warning-signs-reputation-at-risk', title: '10 Warning Signs Your Business Reputation Is at Risk' },
  { slug: 'reputation-affects-talent-acquisition', title: 'How Your Online Reputation Affects Your Ability to Attract Top Talent' },
  { slug: 'business-guide-google-search-results', title: "The Business Owner's Guide to Google Search Results" },
  { slug: 'reputation-management-c-suite-priority', title: 'Why Reputation Management Is Now a C-Suite Priority' },
  { slug: 'how-to-remove-negative-search-results', title: 'How to Remove Negative Search Results: A Step-by-Step Guide' },
  { slug: 'review-management-strategy', title: 'Review Management Strategy: How to Get More 5-Star Reviews' },
  { slug: 'reputation-crisis-management-playbook', title: 'Business Reputation Crisis Management: The First 48 Hours Playbook' },
  { slug: 'optimize-business-ai-search-engines', title: 'How to Optimize Your Business for AI-Powered Search Engines' },
  { slug: 'digital-pr-builds-trust-authority', title: 'Digital PR for Reputation: How Media Coverage Builds Trust and Authority' },
  { slug: 'proactive-reputation-management-strategy', title: 'How to Build a Proactive Reputation Management Strategy' },
  { slug: 'seo-and-reputation-management', title: 'SEO and Reputation Management: How They Work Together' },
  { slug: 'how-to-monitor-business-reputation', title: 'How to Monitor Your Business Reputation: Tools, Metrics, and What to Track' },
  { slug: 'brand-mentions-control-narrative', title: 'Brand Mentions: Why Every Mention Matters and How to Control the Narrative' },
  { slug: 'reputation-and-conversion-rates', title: 'The Link Between Online Reputation and Conversion Rates' },
  { slug: 'how-to-respond-negative-reviews', title: 'How to Respond to Negative Reviews Without Making It Worse' },
  { slug: 'reputation-management-multi-location', title: 'Reputation Management for Multi-Location Businesses' },
  { slug: 'how-to-choose-reputation-management-agency', title: 'How to Choose a Reputation Management Agency' },
  { slug: 'in-house-vs-agency-reputation-management', title: 'In-House vs. Agency Reputation Management' },
  { slug: 'reputation-management-cost-pricing', title: 'What Does Reputation Management Cost? A Transparent Pricing Breakdown' },
  { slug: 'roi-reputation-management', title: 'ROI of Reputation Management: How to Calculate the Revenue Impact' },
  { slug: 'case-study-saas-pr-crisis-recovery', title: 'Case Study: How a SaaS Company Recovered from a PR Crisis' },
  { slug: 'case-study-restaurant-ratings-turnaround', title: "Case Study: From 3.2 to 4.7 Stars — A Restaurant Group's Turnaround" },
  { slug: 'first-90-days-reputation-management', title: 'What to Expect in Your First 90 Days of Reputation Management' },
  { slug: 'guaranteed-media-placements-forbes-entrepreneur', title: 'Guaranteed Media Placements: Forbes, Entrepreneur & More' },
]

const individualArticles = [
  { slug: 'what-shows-up-when-someone-googles-your-name', title: 'What Shows Up When Someone Googles Your Name?' },
  { slug: 'what-is-personal-reputation-management', title: 'Personal Reputation Management: What It Is and Why Every Professional Needs It' },
  { slug: 'negative-search-results-destroy-career', title: 'How Negative Search Results Can Destroy Your Career' },
  { slug: 'ai-assistants-defining-personal-reputation', title: 'How AI Assistants Are Defining Your Personal Reputation' },
  { slug: 'hidden-cost-ignoring-personal-reputation', title: 'The Hidden Cost of Ignoring Your Online Reputation as an Individual' },
  { slug: 'personal-branding-vs-reputation-management', title: 'Personal Branding vs. Reputation Management: What Is the Difference?' },
  { slug: 'executives-need-reputation-management', title: 'Why Executives and C-Suite Leaders Need Reputation Management' },
  { slug: 'reputation-affects-earning-potential', title: 'How Your Online Reputation Affects Your Earning Potential' },
  { slug: 'psychology-of-online-reputation', title: 'The Psychology of Online Reputation' },
  { slug: 'social-media-and-personal-reputation', title: 'Social Media and Personal Reputation' },
  { slug: 'remove-negative-content-from-google', title: 'How to Remove Negative Content About Yourself from Google' },
  { slug: 'build-personal-brand-dominate-google', title: "How to Build a Personal Brand That Dominates Google's First Page" },
  { slug: 'personal-reputation-monitoring', title: 'Personal Reputation Monitoring: How to Track What Is Being Said About You' },
  { slug: 'suppress-negative-articles', title: 'How to Suppress Negative Articles Without Getting Them Removed' },
  { slug: 'executives-guide-linkedin-authority', title: "The Executive's Guide to LinkedIn and Online Authority Building" },
  { slug: 'handle-personal-reputation-crisis', title: 'How to Handle a Personal Reputation Crisis' },
  { slug: 'press-coverage-builds-personal-authority', title: 'Getting Featured in Media: How Press Coverage Builds Personal Authority' },
  { slug: 'clean-up-social-media-history', title: 'How to Clean Up Your Social Media History Before It Hurts You' },
  { slug: 'reputation-management-professionals', title: 'Reputation Management for Doctors, Lawyers, and Professionals' },
  { slug: 'optimize-personal-website-reputation', title: 'How to Optimize Your Personal Website for Reputation Control' },
  { slug: 'online-privacy-protect-personal-information', title: 'Online Privacy and Reputation: How to Protect Your Personal Information' },
  { slug: 'wikipedia-wikitia-page-reputation', title: 'How to Get a Wikipedia or Wikitia Page and Why It Matters' },
  { slug: 'how-to-choose-personal-reputation-service', title: 'How to Choose a Personal Reputation Management Service' },
  { slug: 'personal-reputation-management-cost', title: 'What Does Personal Reputation Management Cost?' },
  { slug: 'diy-vs-professional-reputation-management', title: 'DIY vs. Professional Reputation Management' },
  { slug: 'case-study-executive-negative-press-to-authority', title: 'Case Study: Executive — From Negative Press to Industry Authority' },
  { slug: 'case-study-doctor-defamatory-content-removal', title: "Case Study: Removing Defamatory Content and Rebuilding a Doctor's Reputation" },
  { slug: 'personal-reputation-management-results-timeline', title: 'What Results to Expect from Personal Reputation Management' },
  { slug: 'reputation-500-personal-reputation-approach', title: 'How Reputation 500 Protects Personal Reputations' },
  { slug: 'roi-personal-reputation-management', title: 'The ROI of Personal Reputation Management' },
]

export async function GET() {
  const pubDate = new Date('2026-04-05').toUTCString()

  const allItems = [
    ...businessArticles.map((a) => ({
      ...a,
      url: `${SITE_URL}/blog/for-businesses/${a.slug}`,
      category: 'Reputation Management for Businesses',
    })),
    ...individualArticles.map((a) => ({
      ...a,
      url: `${SITE_URL}/blog/for-individuals/${a.slug}`,
      category: 'Reputation Management for Individuals',
    })),
  ]

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Reputation 500 Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Expert insights on online reputation management for businesses and individuals.</description>
    <language>en-us</language>
    <lastBuildDate>${pubDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/blog/feed.xml" rel="self" type="application/rss+xml"/>
${allItems
  .map(
    (item) => `    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.url}</link>
      <guid isPermaLink="true">${item.url}</guid>
      <pubDate>${pubDate}</pubDate>
      <category>${item.category}</category>
    </item>`
  )
  .join('\n')}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
