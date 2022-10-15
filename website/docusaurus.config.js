// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const editUrlFunction = require('./src/editUrl.js').editLinkUrl
const crossRepoLinksPlugin = require('./src/remark/cross-repo-links');
const codeBlockSnippetsPlugin = require('./src/remark/code-block-snippets').plugin;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hydrom User Documentation',
  tagline: '',
  url: process.env.URL ?? 'https://hydrompages.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',

  organizationName: 'HydromPages', // Usually your GitHub org/user name.
  projectName: 'hydrompages.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: false,
          editUrl: editUrlFunction,
          exclude: ['adrs/README.md', 'adrs/0000-architectural-decision-records.md', 'adrs/template.md'],
          numberPrefixParser: false,
          beforeDefaultRemarkPlugins: [codeBlockSnippetsPlugin],
          remarkPlugins: [crossRepoLinksPlugin],
          routeBasePath: '/',
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    function (context, options) {
      return {
        name: 'webpack-configuration-plugin',
        configureWebpack(config, isServer, utils) {
          return {
            resolve: {
              symlinks: false,
            }
          };
        }
      };
    },
    [
      '@docusaurus/plugin-client-redirects',
      require('./redirects.js'),
    ],
  ],
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexBlog: false,
        docsRouteBasePath: '/',
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Hydrom Instruction',
        logo: {
          alt: 'Hydrom Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            label: 'Use Hydrom',
            to: '/general/',
            activeBaseRegex: '/general/',
            position: 'left',
          },
          {
            label: 'Get Involved',
            to: '/get-involved/',
            position: 'left',
            activeBaseRegex: `/get-involved/`,
          },
          {
            label: 'Run Node',
            to: '/node/',
            activeBaseRegex: '/node/',
            position: 'left',
          },
          {
            label: 'Create dApp',
            to: '/dapp/',
            activeBaseRegex: '/dapp/',
            position: 'left',
          },
          {
            label: 'Build ParaTime',
            to: '/paratime/',
            activeBaseRegex: '/paratime/',
            position: 'left',
          },
          {
            label: 'Develop Core',
            to: '/core/',
            position: 'left',
            activeBaseRegex: `/core/`,
          },
          {
            href: 'https://github.com/Hydromprotocol',
            position: 'right',
            className: 'header-github-link',
            title: 'GitHub repository',
            'aria-label': 'GitHub repository',
          },
          {
            href: 'https://Hydromprotocol.org/',
            position: 'right',
            className: 'header-www-link',
            title: 'Hydrom Protocol Foundation website',
            'aria-label': 'Hydrom Protocol Foundation website',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Support',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/xxx',
              },
            ],
          },
          {
            title: 'Shop',
            items: [
              {
                label: 'Shop',
                href: 'https://hydrom.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bonorum UG. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['rust', 'toml'],
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;

