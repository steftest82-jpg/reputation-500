/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://reputation500.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: './public',
  exclude: [
    '/apple-icon.png',
    '/icon.png',
    '/favicon.ico',
    '/favicon-*.png',
    '/icon-*.png',
    '/site.webmanifest',
  ],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    // Homepage: highest priority
    if (path === '/') {
      return { loc: path, changefreq: 'daily', priority: 1.0, lastmod: new Date().toISOString() }
    }
    // Service pages: high priority
    if (path.startsWith('/services')) {
      return { loc: path, changefreq: 'weekly', priority: 0.8, lastmod: new Date().toISOString() }
    }
    // Blog category pages
    if (path === '/blog' || path === '/blog/for-businesses' || path === '/blog/for-individuals') {
      return { loc: path, changefreq: 'weekly', priority: 0.7, lastmod: new Date().toISOString() }
    }
    // Blog articles
    if (path.startsWith('/blog/')) {
      return { loc: path, changefreq: 'monthly', priority: 0.6, lastmod: new Date().toISOString() }
    }
    // About pages
    if (path.startsWith('/about')) {
      return { loc: path, changefreq: 'monthly', priority: 0.6, lastmod: new Date().toISOString() }
    }
    // Contact
    if (path === '/contact') {
      return { loc: path, changefreq: 'monthly', priority: 0.7, lastmod: new Date().toISOString() }
    }
    // Default
    return { loc: path, changefreq: 'weekly', priority: 0.5, lastmod: new Date().toISOString() }
  },
}
