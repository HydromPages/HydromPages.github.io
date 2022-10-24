/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hydrom Instructions',
  tagline: 'The tagline Hydrom Instructions',
  url: 'https://hydrompages.github.io',
  baseUrl: '/',
  baseUrlIssueBanner: true,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'en',

    locales:['en'],//, 'de', 'it', 'es', 'fr', 'nl', 'pt', 'sw', 'fi'],
  },
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hydrompages.github.io', // Usually your GitHub org/user name.
  projectName: 'HydromPages.github.io', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/HydromPages/HydromPages.github.io',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/HydromPages/HydromPages.github.io',
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
        title: 'Hydrom',
        logo: {
          alt: 'Hydrom Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Instruction',

          },
          {
            type: 'localeDropdown',
          },
          {to: 'blog', label: 'Blog', position: 'left'},
          {
            type: 'doc',
            docId: 'FAQ',
            position: 'left',
            label: 'FAQ',

          },
          {
            href: 'https://hydrom.canny.io/feature-requrest',
            label: 'Feature Request',
            position: 'left',
          },
          
          // Please keep GitHub link to the right for consistency.
          {
            href: 'https://github.com/HydromPages/HydromPages.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Shop',
                href: 'https://stackoverflow.com/questions/tagged/hydrom',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/hydrom',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Hydromio1',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/Hydromio',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/hydrom_io/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/HydromPages/HydromPages.github.io',
              },
            ],
          },
          {
            title: 'Legal',
            // Please do not remove the privacy and terms, it's a legal requirement.
            items: [
              {
                label: 'Privacy',
                href: 'https://hydrom.io/policies/privacy-policy',
              },
              {
                label: 'Terms',
                href: 'https://hydrom.io/policies/terms-of-service',
              },
            ],
          },
        ],
        logo: {
          alt: 'Meta Open Source Logo',
          // This default includes a positive & negative version, allowing for
          // appropriate use depending on your site's style.
          src: '/img/meta_opensource_logo_negative.svg',
          href: 'https://opensource.fb.com',
        },
        // Please do not remove the credits, help to publicize Docusaurus :)
        copyright: `Copyright © ${new Date().getFullYear()} Meta Platforms, Inc. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
