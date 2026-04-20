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