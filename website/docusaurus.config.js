// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '☄️ effector patronum ✨',
  tagline: 'Operators library delivering modularity and convenience.',
  url: 'https://patronum.effector.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'effector', // Usually your GitHub org/user name.
  projectName: 'patronum', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: '../src/',
          routeBasePath: '/methods',
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/effector/patronum/tree/main/src/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'effector patronum',
        logo: {
          alt: 'effector patronum',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'methods',
            position: 'left',
            label: 'Methods',
          },
          {
            href: 'https://github.com/effector/patronum',
            label: 'GitHub',
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
                label: 'Installation',
                to: '/docs/installation',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/effector_ru',
              },
              {
                label: 'Telegram EN',
                href: 'https://t.me/effector_en',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/effectorjs',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Dev.to',
                to: 'https://dev.to/effector',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/effector',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Effector Core Team`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
