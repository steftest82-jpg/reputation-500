export const SITE_NAME = 'Reputation 500'
export const SITE_DESCRIPTION = 'Reputation 500 is an online reputation management agency helping individuals and businesses control what shows up in Google Search, reviews, and brand mentions.'
export const SITE_URL = 'https://reputation500.com'
export const CONTACT_EMAIL = 'info@reputation500.com'
export const LOGO_URL = '/images/logo.png'

export const NAV_LINKS = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Market Activation', href: '/services/market-activation' },
      { label: 'For Individuals', href: '/services/for-individuals' },
      { label: 'Personal Reputation Management', href: '/services/for-individuals/personal-reputation-management' },
      { label: 'Brand Mentions (Individuals)', href: '/services/for-individuals/brand-mentions' },
      { label: 'Reputation Monitoring (Individuals)', href: '/services/for-individuals/reputation-monitoring' },
      { label: 'For Businesses', href: '/services/for-businesses' },
      { label: 'Business Reputation Management', href: '/services/for-businesses/business-reputation-management' },
      { label: 'Branding', href: '/services/for-businesses/branding' },
      { label: 'Digital PR', href: '/services/for-businesses/digital-pr' },
      { label: 'Link Building', href: '/services/for-businesses/link-building' },
      { label: 'Brand Mentions (Businesses)', href: '/services/for-businesses/brand-mentions' },
      { label: 'Ratings Optimization', href: '/services/for-businesses/ratings-optimization' },
      { label: 'Reputation Monitoring (Businesses)', href: '/services/for-businesses/reputation-monitoring' },
      { label: 'SEO', href: '/services/seo' },
      { label: 'SEO Link Building', href: '/services/seo/link-building' },
      { label: 'Content Writing', href: '/services/seo/content-writing' },
      { label: 'Content Planning', href: '/services/seo/content-planning' },
      { label: 'SEO Audit', href: '/services/seo/seo-audit' },
      { label: 'Performance Marketing', href: '/services/performance-marketing' },
      { label: 'Google Ads', href: '/services/performance-marketing/google-ads' },
      { label: 'Meta Ads', href: '/services/performance-marketing/meta-ads' },
      { label: 'LinkedIn Ads', href: '/services/performance-marketing/linkedin-ads' },
      { label: 'Programmatic Ads', href: '/services/performance-marketing/programmatic-ads' },
      { label: 'AI Optimization', href: '/services/ai-optimization' },
    ],
  },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Testimonials', href: '/about/testimonials' },
      { label: 'Case Studies', href: '/about/case-studies' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export const SERVICES_DATA = {
  'for-individuals': {
    title: 'Reputation Management for Individuals',
    description: 'Protect and enhance your personal brand online. We help individuals control their digital narrative across Google, social media, and review platforms.',
    subServices: [
      { slug: 'personal-reputation-management', title: 'Personal Reputation Management', description: 'Take control of what people see when they search your name online.' },
      { slug: 'brand-mentions', title: 'Brand Mentions', description: 'Monitor and manage every mention of your name across the web.' },
      { slug: 'reputation-monitoring', title: 'Reputation Monitoring', description: 'Real-time alerts and tracking of your online reputation.' },
    ],
  },
  'for-businesses': {
    title: 'Reputation Management for Businesses',
    description: 'Comprehensive business reputation management that protects your brand, improves ratings, and drives growth through trust.',
    subServices: [
      { slug: 'business-reputation-management', title: 'Business Reputation Management', description: 'End-to-end reputation management for your company brand.' },
      { slug: 'branding', title: 'Branding', description: 'Build a strong, consistent brand identity that resonates with your audience.' },
      { slug: 'digital-pr', title: 'Digital PR', description: 'Earn media coverage and build authority through strategic digital public relations.' },
      { slug: 'link-building', title: 'Link Building (Backlinks)', description: 'Build high-quality backlinks that boost your domain authority and search rankings.' },
      { slug: 'brand-mentions', title: 'Brand Mentions', description: 'Track and amplify your brand mentions across the digital landscape.' },
      { slug: 'ratings-optimization', title: 'Ratings Optimization', description: 'Improve star ratings with ethical review generation and response strategies.' },
      { slug: 'reputation-monitoring', title: 'Reputation Monitoring', description: 'Continuous monitoring and alerts for your business reputation.' },
    ],
  },
  seo: {
    title: 'SEO Services',
    description: 'Data-driven SEO strategies that improve your search rankings, drive organic traffic, and establish your brand as an authority in your industry.',
    subServices: [
      { slug: 'link-building', title: 'Link Building', description: 'Strategic link acquisition from high-authority domains.' },
      { slug: 'content-writing', title: 'Content Writing', description: 'SEO-optimized content that ranks and converts.' },
      { slug: 'content-planning', title: 'Content Planning', description: 'Strategic content calendars aligned with your business goals.' },
      { slug: 'seo-audit', title: 'SEO Audit', description: 'Comprehensive technical and content SEO analysis.' },
    ],
  },
  'performance-marketing': {
    title: 'Performance Marketing',
    description: 'Results-driven paid advertising campaigns across Google, Meta, LinkedIn, and programmatic channels that maximize ROI and accelerate growth.',
    subServices: [
      { slug: 'google-ads', title: 'Google Ads', description: 'Search, display, and shopping campaigns that drive qualified traffic.' },
      { slug: 'meta-ads', title: 'Meta Ads', description: 'Facebook and Instagram advertising for brand awareness and conversions.' },
      { slug: 'linkedin-ads', title: 'LinkedIn Ads', description: 'B2B advertising that reaches decision-makers on LinkedIn.' },
      { slug: 'programmatic-ads', title: 'Programmatic Ads', description: 'Automated, data-driven display advertising at scale.' },
    ],
  },
}

export const TESTIMONIALS = [
  {
    name: 'Kostis',
    role: 'Owner @ RM International (Greece and EMEA)',
    text: 'Unparalleled ability to translate the intricate dynamics of the luxury real estate and financial markets into compelling and accessible content. Great Content distribution and writing. Highly recommended.',
    rating: 5,
  },
  {
    name: 'Talia',
    role: 'Team Leader @ SERHANT Real Estate (New York, USA)',
    text: "Thank you for the AMAZING article writing and distribution, I've gotten such great feedback on it and my mom is also OVER the moon with her shout out. Really great. Thank you!",
    rating: 5,
  },
  {
    name: 'Niloufar',
    role: 'Secretary General @ Euro Nordic Funding Alliance (Scandinavia and EMEA)',
    text: 'I had a wonderful experience with Savvas and his team. He was very welcoming from the moment we met and very professional throughout our process. The article was very professional with a good pen and it had a good effect on my name search.',
    rating: 5,
  },
  {
    name: 'Hassan',
    role: 'COO @ Trading Broker (UK, AUS & EMEA)',
    text: "Working with Savvas has been an absolute pleasure. He has given us valuable insight on how our ORM has been performing and has gone above and beyond in his duties. We couldn't be happier with the results achieved due to his excellent insight and the team behind him.",
    rating: 5,
  },
  {
    name: 'Andreas',
    role: 'Executive Director – (Funds, CIFs, EMIs, CASPs)',
    text: 'I had the pleasure of working with Savvas on developing the PR launch strategy for my B2B company targeting high-net-worth individuals (HNWIs) in the trust fund space. I was genuinely impressed by his ability to "spider-connect" the PR angle with a comprehensive trust marketing strategy.',
    rating: 5,
  },
  {
    name: 'Giovani',
    role: 'Board Director & Strategic Advisor @ Commercial Bank International',
    text: 'Savvas is a great curator of style with substance, a great legacy story teller and a great marketing strategist. I don\'t usually do recommendations, but I\'m making an exception because I have been genuinely impressed in a way that I haven\'t before when it comes to working with brands. Highly recommended!',
    rating: 5,
  },
]

export const PRICING_PLANS = [
  {
    name: 'Essential',
    price: '1,250',
    currency: '€',
    period: 'per month',
    description: 'Building brand foundation, personal reputation push & SMEs with publicity, trust & sales KPIs.',
    features: [
      '350+ Content & Digital Assets',
      '12 Premium Feature Articles & Interviews',
      '3+ Web 2.0 profiles generating authority',
      '2 Micro-Websites (reputation purpose)',
      'Youtube Channel Management, Social media & content strategy',
      '1 VIP premium Interview feature',
    ],
    includes: 'On & off page SEO and AIO optimisation, strategic link building, content strategy, fixing search rankings + News tap. 360 approach',
    badge: null,
  },
  {
    name: 'Enhanced',
    price: '2,500',
    currency: '€',
    period: 'per month',
    description: 'Minor Reputation concerns, politicians, growing SMEs, Fintech, negative results push.',
    features: [
      '582+ Content & Digital Assets',
      '24 High-end Feature Articles & Interviews',
      '6+ Web 2.0 profiles generating authority',
      '3 Micro-websites (reputation purpose)',
      'Youtube Channel Management, Social media & content strategy',
      '3 VIP premium Interview features',
    ],
    includes: 'Everything in Essential Plus: 3+ VIP feature Interview, Search results strategy to push negative search results away from 1st page of Google and AI answers',
    badge: 'POPULAR',
  },
  {
    name: 'Elite',
    price: '3,600',
    currency: '€',
    period: 'per month',
    description: 'Major monobrands, Upper scale national companies B2B, B2B2C, B2C, & FinTech.',
    features: [
      '709+ Content & Digital Assets',
      '30 High-end Feature Articles & Interviews',
      '8+ Web 2.0 profiles generating authority',
      '4 Micro-websites (reputation purpose)',
      'Youtube Channel Management, Social media & content strategy',
      '1 VIP digital cover + 3 VIP Interviews',
    ],
    includes: 'Everything in Enhanced Plus: Image Advisory for VIP features plus at least one Magazine Digital Cover',
    badge: null,
  },
  {
    name: 'Ultimate',
    price: '5,800',
    currency: '€',
    period: 'per month',
    description: 'Multinational companies and high risk industry businesses with 100+ employees',
    features: [
      '1,131+ Content & Digital Assets',
      '36 High-end Feature Articles & Interviews',
      '9+ Web 2.0 profiles generating authority',
      '3 Micro-websites (reputation purpose)',
      'Wikipedia page submission, Information panel & Forbes Nomination',
      '1 VIP digital cover + 3 VIP Interviews',
    ],
    includes: 'Everything in Elite Plus: Profile in expert media outreach platforms, Wikipedia Backlink, and VIP podcast shortlist to become a guest',
    badge: null,
  },
]

export const STATS = [
  { value: '4.8', label: 'Star Rating' },
  { value: '78+', label: 'Global Clients' },
  { value: '21', label: 'Countries' },
  { value: '32,920+', label: 'Articles Published' },
]

export const PLATFORM_RATINGS = [
  { name: 'Google', rating: '4.7' },
  { name: 'G2', rating: '4.8' },
  { name: 'Clutch', rating: '5.0' },
  { name: 'Trustpilot', rating: '4.5' },
]
