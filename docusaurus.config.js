// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Omm Docs',
  tagline: 'Learn how to use Omm, a liquid staking protocol on the ICON blockchain.',
  favicon: 'img/favicon-32x32.png',

  // Set the production url of your site here
  url: 'https://docs.omm.finance/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'description', content: 'Learn how to use Omm, a liquid staking protocol on the ICON blockchain.'},
        {property: 'og:title', content: 'Omm Docs'},
        {property: 'og:description', content: 'Learn how to use Omm, a liquid staking protocol on the ICON blockchain.'},
        {property: 'og:image', content: 'https://docs.omm.finance/img/documentation-social-card.png'},
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: 'https://docs.omm.finance/'},
        {name: 'twitter:card', content: 'summary_large_image'},
      ],
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Documentation',
        logo: {
          alt: 'Omm',
          src: 'img/omm-wordmark.svg',
          srcDark: 'img/omm-wordmark-dark.svg',
          },

        items: [
          {
            href: 'https://omm.finance',
            label: 'Website',
            position: 'right',
          },
          {
            href: 'https://forum.omm.finance/',
            label: 'Forum',
            position: 'right',
          },
          {
            href: 'https://app.omm.finance/',
            label: 'Go to app',
            position: 'right',
            class: 'button text-center',
          },
          {
            type: 'search',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: `© Omm ${new Date().getFullYear()}. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
