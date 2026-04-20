import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Ubunifu SACCO Docs',
  tagline: 'Technical reference and implementation documentation',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://mucunguzi256.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ubunifu_SACCO/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Mucunguzi256',
  projectName: 'ubunifu_SACCO',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    format: 'md',
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/Mucunguzi256/ubunifu_SACCO/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Ubunifu SACCO',
      logo: {
        alt: 'Ubunifu SACCO Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/docs/home', label: 'Start Here', position: 'left'},
        {
          href: 'https://mucunguzi256.github.io/ubunifu_SACCO/source.pdf',
          label: 'Reference PDF',
          position: 'left',
        },
        {
          href: 'https://github.com/Mucunguzi256/ubunifu_SACCO',
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
              label: 'Home',
              to: '/docs/home',
            },
            {
              label: 'Reference PDF',
              href: 'https://mucunguzi256.github.io/ubunifu_SACCO/source.pdf',
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'Repository',
              href: 'https://github.com/Mucunguzi256/ubunifu_SACCO',
            },
            {label: 'Issues', href: 'https://github.com/Mucunguzi256/ubunifu_SACCO/issues'},
          ],
        },
        {
          title: 'Navigation',
          items: [
            {label: 'All Docs', to: '/docs/home'},
            {label: 'Methodology', to: '/docs/methodology-feasibility-study'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ubunifu SACCO. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
