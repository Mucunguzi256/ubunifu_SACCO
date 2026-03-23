import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Overview',
      items: [
        'README',
        'about-company-profile',
        'about-vision-mission',
        'about-core-services',
        'about-strategic-objectives',
        'objectives-diagram',
      ],
    },
    {
      type: 'category',
      label: 'Implementation',
      items: [
        'implementation-schedule',
        'implementation-phases',
        'implementation-key-activities',
        'implementation-deliverables',
      ],
    },
    {
      type: 'category',
      label: 'Products',
      items: [
        'business-model',
        'products-financial-products',
        'products-value-proposition',
        'products-customer-segments',
        'products-channels',
        'products-revenue-streams',
        'products-key-resources',
        'products-impact-metrics',
      ],
    },
    {
      type: 'category',
      label: 'Methodology',
      items: [
        'methodology-literature-review',
        'methodology-feasibility-study',
        'methodology-needs-assessment',
        'methodology-stakeholder-analysis',
        'methodology-data-collection',
      ],
    },
    {
      type: 'category',
      label: 'Strategy',
      items: [
        'strategy-results',
      ],
    },
    {
      type: 'category',
      label: 'HR & Governance',
      items: [
        'hr-staffing',
        'hr-organogram',
        'hr-motivation-plan',
      ],
    },
    {
      type: 'category',
      label: 'Budget & Risk',
      items: [
        'budget',
        'risk-management',
      ],
    },
    {
      type: 'category',
      label: 'Sustainability',
      items: [
        'sustainability',
      ],
    },
    {
      type: 'category',
      label: 'References',
      items: [
        'references',
      ],
    },
  ],
};

export default sidebars;
