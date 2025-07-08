/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.mkdynamics.be',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  outDir: './public',
};
