// docusaurus.config.js — Ubunifu SACCO
// Drop-in replacement for your existing config.
// Key changes over the default:
//   1. noIndex removed (you want Google to find this)
//   2. DM Serif Display + DM Mono + Outfit loaded via headTags
//   3. Dark theme forced (no light/dark toggle — brand decision)
//   4. Footer redesigned with Ugandan national context
//   5. Prism theme aligned with dark palette
//   6. Mermaid enabled for all the flow diagrams in the new docs

// @ts-check
const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ubunifu SACCO',
  tagline: "Uganda's First Tech-Focused Financial Cooperative",
  favicon: 'img/favicon.ico',

  url: 'https://mucunguzi256.github.io',
  baseUrl: '/ubunifu_SACCO/',

  organizationName: 'Mucunguzi256',
  projectName: 'ubunifu_SACCO',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // ── Mermaid diagrams ──────────────────────────────────────────────
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  // ── Google Fonts ──────────────────────────────────────────────────
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400;500&family=Outfit:wght@300;400;500;600;700&display=swap',
      },
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Mucunguzi256/ubunifu_SACCO/tree/main/',
          showLastUpdateTime: true,
        },
        blog: false, // No blog needed
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // ── Force dark theme ────────────────────────────────────────
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,   // Remove light/dark toggle — brand decision
        respectPrefersColorScheme: false,
      },

      // ── Open Graph ──────────────────────────────────────────────
      image: 'img/og-image.png',

      // ── Mermaid theming ─────────────────────────────────────────
      mermaid: {
        theme: {
          dark: 'dark',
        },
        options: {
          themeVariables: {
            darkMode: true,
            background: '#07061A',
            primaryColor: '#4F2DD4',
            primaryTextColor: '#EBE8FF',
            primaryBorderColor: '#4F2DD4',
            lineColor: '#8B82BE',
            secondaryColor: '#0D0B27',
            tertiaryColor: '#161336',
            edgeLabelBackground: '#0D0B27',
            clusterBkg: '#0D0B27',
            titleColor: '#EBE8FF',
            nodeBorder: '#4F2DD4',
            mainBkg: '#161336',
            fontFamily: 'Outfit, system-ui, sans-serif',
          },
        },
      },

      // ── Navbar ──────────────────────────────────────────────────
      navbar: {
        title: 'Ubunifu SACCO',
        logo: {
          alt: 'Ubunifu SACCO Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mainSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/docs/products/overview',
            label: 'Products',
            position: 'left',
          },
          {
            to: '/docs/membership/who-we-serve',
            label: 'Join the SACCO',
            position: 'right',
            className: 'navbar-join-btn',
          },
          {
            href: 'https://github.com/Mucunguzi256/ubunifu_SACCO',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      // ── Footer ──────────────────────────────────────────────────
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              { label: 'Introduction', to: '/docs/intro' },
              { label: 'Executive Summary', to: '/docs/executive-summary' },
              { label: 'The Problem', to: '/docs/the-problem' },
              { label: 'Member Journey', to: '/docs/membership/member-journey' },
            ],
          },
          {
            title: 'Products',
            items: [
              { label: 'Financial Products', to: '/docs/products/overview' },
              { label: 'Tech-Native Products', to: '/docs/products/tech-native' },
              { label: 'Grants & Subsidies', to: '/docs/products/grants' },
            ],
          },
          {
            title: 'Organisation',
            items: [
              { label: 'Governance', to: '/docs/governance' },
              { label: 'Ecosystem Partners', to: '/docs/partnerships' },
              { label: 'Five-Year Roadmap', to: '/docs/roadmap' },
              {
                label: 'GitHub',
                href: 'https://github.com/Mucunguzi256/ubunifu_SACCO',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ubunifu SACCO Ltd. · Uganda's First Tech-Focused Financial Cooperative · Est. January 2026`,
      },

      // ── Prism syntax highlighting ────────────────────────────────
      prism: {
        theme: prismThemes.vsDark,
        darkTheme: prismThemes.vsDark,
        additionalLanguages: ['bash', 'yaml', 'json', 'solidity', 'typescript'],
      },

      // ── Algolia DocSearch (add when ready) ──────────────────────
      // algolia: {
      //   appId: 'YOUR_APP_ID',
      //   apiKey: 'YOUR_SEARCH_API_KEY',
      //   indexName: 'ubunifu_sacco',
      // },
    }),
};

module.exports = config;
