
require("dotenv").config({
  path: `.env.production`,
})

module.exports = {
  title: 'GECKO Docs',
  tagline: '',
  url: 'https://geckodocs.github.io',
  baseUrl: '/docs/',
  favicon: 'img/geckoWhite.png',
  organizationName: 'GECKODocs', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'GECKO',
      hideOnScroll: true, // set this to false if wanna keep the scrollbar fixed
      logo: {
        alt: 'My Site Logo',
        src: 'img/geck0.png',
        srcDark : 'img/blue.png',
      },
      items: [
        {
          to: 'docs/gs1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          to: 'docs/api1',
          label: 'API',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/gs1',
            },
            {
              label: 'Project',
              to: 'docs/pr1',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/gecko-limited',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/geckogovernance',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GECKO`,
    },

    algolia: {
      apiKey: process.env.ALGOLIA_KEY,
      indexName: process.env.ALGOLIA_INDEX,

      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // un comment the line below to allow the user to make changes to pages in github
          //editUrl:'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
