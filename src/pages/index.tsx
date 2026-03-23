import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero ubn-hero', styles.heroBanner)}>
      <div className="container ubn-hero-grid">
        <div>
          <p className="ubn-kicker">Ubunifu SACCO</p>
          <Heading as="h1" className="hero__title ubn-title">
            Technical Documentation Portal
          </Heading>
          <p className="hero__subtitle ubn-subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/home">
              Explore Documentation
            </Link>
            <Link
              className="button button--secondary button--lg"
              href="https://mucunguzi256.github.io/ubunifu_SACCO/source.pdf">
              Open Reference PDF
            </Link>
          </div>
        </div>
        <div className="ubn-stat-card">
          <h3>Coverage</h3>
          <ul>
            <li>Project overview</li>
            <li>Methodology and implementation</li>
            <li>Budget, risk and sustainability</li>
            <li>Products and strategic targets</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Ubunifu SACCO documentation for architecture, implementation, budget, and strategic planning.">
      <HomepageHeader />
      {/* Cards/features section removed as requested */}
    </Layout>
  );
}
