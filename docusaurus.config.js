module.exports = {
  title: 'Fathym Cloud',
  tagline: 'Accelerate Solutions | Control the Cloud',
  url: 'https://www.fathym.com',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'fathym', // Usually your GitHub org/user name.
  projectName: 'public-web-docs', // Usually your repo name.
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,
    },
    navbar: {
      title: 'Cloud Documentation',
      logo: {
        alt: 'Fathym',
        src: 'img/Fathym-logo-white-01.png',
      },
      items: [
        {
          href: 'https://www.fathym.com/',
          label: 'Home',
          position: 'left',
          target: '_top',
        },
        {
          href: 'https://www.fathym.com/pricing',
          label: 'Pricing',
          position: 'right',
          target: '_top',
        },
        {
          href: 'https://www.fathym.com/blog',
          label: 'Blog',
          position: 'right',
          target: '_top',
        },
        {
          href: 'https://www.fathym.com/dashboard',
          label: 'Sign In',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Next Steps',
          items: [
            {
              label: 'Getting Started',
              to: 'https://www.fathym.com/dashboard',
            },
            {
              label: 'Pricing',
              to: 'https://www.fathym.com/pricing',
            },
            {
              label: 'Support',
              to: '/docs/introduction/support',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/fathym',
            },
            //{
            //  label: 'Discord',
            //  href: 'https://discordapp.com/invite/fathym',
            //},
            {
              label: 'Twitter',
              href: 'https://twitter.com/fathym',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fathym, Inc`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
