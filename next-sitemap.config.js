/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://reputation500.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: './public',
}
