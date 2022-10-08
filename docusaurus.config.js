// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Espruino Tools',
  tagline: 'A Collection of tools to improve the development experience using espruino devices.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'espruino-tools', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

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
          sidebarPath: require.resolve('./sidebars.js'),
    
        },
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
        title: 'Espruino Tools',
        logo: {
          alt: 'Espruino Tools Logo',
          src: 'img/espruino.png',
        },
        items: [
          {
            label: 'Device Controller',
            to: '/docs/category/device-controller',
          },
          {
            label: 'UART',
            to: '/docs/category/uart',
          },
          {
            label: 'Create Espruino App',
            to: '/docs/category/create-espruino-app',
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
                label: 'Getting Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Getting Started',
                to: '/docs/getting-started/',
              },
              {
                label: 'Device Controller',
                to: '/docs/device-controller/getting-started',
              },
              {
                label: 'UART',
                to: '/docs/uart/getting-started',
              },
              {
                label: 'Create Espruino App',
                to: '/docs/create-espruino-app/getting-started',
              },
            ],
          },
          {
            title: 'Packages',
            items: [
              {
                label: 'NPM - Device Controller',
                href: 'https://www.npmjs.com/package/@espruino-tools/device-controller',
              },
              {
                label: 'NPM - UART',
                href: 'https://www.npmjs.com/package/@espruino-tools/uart',
              },
            ],
          },
          {
            title: 'Repositories',
            items: [
              {
                label: 'GitHub Organisation',
                href: 'https://github.com/espruino-tools',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Callum McLuskey.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
