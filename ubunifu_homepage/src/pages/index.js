import React, { useEffect, useRef, useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

// ── Animated counter hook ──────────────────────────────────────────────
function useCounter(target, duration = 2000, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return value;
}

// ── Crane SVG background geometry ────────────────────────────────────
function CraneGeometry() {
  return (
    <svg
      className={styles.craneGeo}
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Wing sweep lines - abstract crane wing geometry */}
      <path d="M400 300 Q600 100 780 50" stroke="#FCDC04" strokeWidth="0.6" opacity="0.18" />
      <path d="M400 300 Q620 150 800 120" stroke="#FCDC04" strokeWidth="0.4" opacity="0.12" />
      <path d="M400 300 Q640 200 800 210" stroke="#FCDC04" strokeWidth="0.3" opacity="0.08" />
      <path d="M400 300 Q580 80 750 20" stroke="#FCDC04" strokeWidth="0.5" opacity="0.14" />
      <path d="M400 300 Q560 60 710 0" stroke="#FCDC04" strokeWidth="0.3" opacity="0.09" />
      {/* Body arc */}
      <path d="M400 300 Q350 380 200 420" stroke="#4F2DD4" strokeWidth="0.8" opacity="0.22" />
      <path d="M400 300 Q300 400 100 450" stroke="#4F2DD4" strokeWidth="0.5" opacity="0.15" />
      {/* Crown dots - crane crown feathers */}
      <circle cx="400" cy="160" r="3" fill="#D21034" opacity="0.5" />
      <circle cx="410" cy="148" r="2" fill="#D21034" opacity="0.35" />
      <circle cx="390" cy="150" r="1.5" fill="#D21034" opacity="0.25" />
      {/* Grid structure */}
      <line x1="0" y1="300" x2="800" y2="300" stroke="#4F2DD4" strokeWidth="0.3" opacity="0.12" />
      <line x1="400" y1="0" x2="400" y2="600" stroke="#4F2DD4" strokeWidth="0.3" opacity="0.12" />
    </svg>
  );
}

// ── Ticker strip ───────────────────────────────────────────────────────
function TickerStrip() {
  const items = [
    '53.8% of Uganda startups cite capital as #1 barrier',
    'Uganda tech investment: $67M in 2024 — 145% YoY increase',
    '234 new tech startups registered in Uganda · 2024',
    'Ubunifu SACCO · Est. January 2026 · Uganda',
    'UGX 50,000,000,000 · 5-year programme budget',
    'Member registration: UGX 50,000 · No branch visit required',
  ];
  return (
    <div className={styles.ticker} aria-label="Key statistics">
      <div className={styles.tickerInner}>
        {[...items, ...items].map((item, i) => (
          <span key={i} className={styles.tickerItem}>
            <span className={styles.tickerDot} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Stat card ──────────────────────────────────────────────────────────
function StatCard({ value, suffix, label, delay, started }) {
  const numeric = parseInt(value.replace(/\D/g, ''), 10);
  const counted = useCounter(numeric, 1800, started);
  const display = isNaN(numeric) ? value : `${counted.toLocaleString()}${suffix || ''}`;

  return (
    <div className={styles.statCard} style={{ animationDelay: delay }}>
      <div className={styles.statValue}>{display}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}

// ── Member segment card ────────────────────────────────────────────────
function SegmentCard({ icon, title, body, accent }) {
  return (
    <div className={styles.segCard} data-accent={accent}>
      <div className={styles.segIcon}>{icon}</div>
      <div className={styles.segTitle}>{title}</div>
      <div className={styles.segBody}>{body}</div>
    </div>
  );
}

// ── Pillar card ────────────────────────────────────────────────────────
function PillarCard({ num, title, body }) {
  return (
    <div className={styles.pillarCard}>
      <div className={styles.pillarNum}>{num}</div>
      <div className={styles.pillarTitle}>{title}</div>
      <div className={styles.pillarBody}>{body}</div>
    </div>
  );
}

// ── Main homepage ──────────────────────────────────────────────────────
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Layout title="Ubunifu SACCO — Capital Built for Builders" description="Uganda's first tech-focused financial cooperative. Savings, credit, and community for developers, founders, and digital creatives.">

      {/* ── TICKER ── */}
      <TickerStrip />

      {/* ── HERO ── */}
      <section className={`${styles.hero} ${heroVisible ? styles.heroVisible : ''}`} ref={heroRef}>
        <CraneGeometry />

        {/* Left column */}
        <div className={styles.heroLeft}>
          <div className={styles.heroBadge}>
            <span className={styles.badgePulse} />
            Uganda's First Tech Financial Cooperative
          </div>

          <h1 className={styles.heroHeadline}>
            Capital built<br />
            <em className={styles.heroAccent}>for builders.</em>
          </h1>

          <p className={styles.heroSub}>
            Ubunifu SACCO is the financial cooperative where Uganda's developers, designers, founders,
            and digital creatives save, borrow, and grow — structured for how we actually work.
          </p>

          <div className={styles.heroCtas}>
            <Link to="/docs/intro" className={styles.ctaPrimary}>
              Explore Documentation
              <span className={styles.ctaArrow}>→</span>
            </Link>
            <Link to="/docs/membership/who-we-serve" className={styles.ctaSecondary}>
              Join the SACCO
            </Link>
          </div>

          <div className={styles.heroMeta}>
            <span>Est. Jan 2026</span>
            <span className={styles.metaDot} />
            <span>5-year programme</span>
            <span className={styles.metaDot} />
            <span>UGX 50B budget</span>
          </div>
        </div>

        {/* Right column — terminal card */}
        <div className={styles.heroRight}>
          <div className={styles.terminal}>
            <div className={styles.terminalBar}>
              <span className={styles.termDot} data-c="red" />
              <span className={styles.termDot} data-c="gold" />
              <span className={styles.termDot} data-c="green" />
              <span className={styles.termTitle}>ubunifu-sacco — member portal</span>
            </div>
            <div className={styles.termBody}>
              <div className={styles.termLine}>
                <span className={styles.termPrompt}>$</span>
                <span className={styles.termCmd}> ubunifu join --type developer</span>
              </div>
              <div className={styles.termOut}>✓ Eligibility verified</div>
              <div className={styles.termOut}>✓ Registration: UGX 50,000 paid via MoMo</div>
              <div className={styles.termOut}>✓ Share capital: UGX 100,000 confirmed</div>
              <div className={styles.termOut}>✓ Member ID: UBN-2026-04192</div>
              <div className={styles.termSep} />
              <div className={styles.termLine}>
                <span className={styles.termPrompt}>$</span>
                <span className={styles.termCmd}> ubunifu loan apply --product innovation</span>
              </div>
              <div className={styles.termOut}>→ Savings history: 4 months ✓</div>
              <div className={styles.termOut}>→ Portfolio: github.com/you ✓</div>
              <div className={styles.termOut}>→ IP protection clause: active ✓</div>
              <div className={styles.termOut}><span className={styles.termGold}>→ Approved: UGX 15,000,000</span></div>
              <div className={styles.termOut}>→ Disbursement: MTN MoMo in 48h</div>
              <div className={styles.termSep} />
              <div className={styles.termLine}>
                <span className={styles.termPrompt}>$</span>
                <span className={styles.termCursor}>_</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className={styles.statsSection} ref={statsRef}>
        <div className={styles.statsGrid}>
          <StatCard value="53" suffix="%" label="of Uganda startups cite capital as #1 barrier (2025)" delay="0ms" started={statsVisible} />
          <StatCard value="67" suffix="M" label="USD invested in Uganda tech startups · 2024" delay="120ms" started={statsVisible} />
          <StatCard value="234" suffix="" label="new tech startups registered in Uganda · 2024" delay="240ms" started={statsVisible} />
          <StatCard value="50" suffix="B" label="UGX five-year programme budget" delay="360ms" started={statsVisible} />
        </div>
      </section>

      {/* ── PROBLEM STATEMENT ── */}
      <section className={styles.problemSection}>
        <div className={styles.problemInner}>
          <div className={styles.sectionMark}>The gap we close</div>
          <h2 className={styles.sectionHeadline}>
            Uganda's builders produce billions.<br />
            The system won't lend to them.
          </h2>
          <div className={styles.problemGrid}>
            <div className={styles.problemText}>
              <p>A developer with a thriving GitHub profile, three client references, and $4,000 in pending invoices cannot get a UGX 3M laptop loan from any existing SACCO — because they have no payslip, no land title, and no employer letter.</p>
              <p>Traditional financial cooperatives were designed for salaried employees with predictable income. Uganda's tech community earns differently, owns differently, and builds differently. Ubunifu SACCO was designed around that reality.</p>
            </div>
            <div className={styles.problemQuote}>
              <blockquote className={styles.quoteBlock}>
                <p>"Your code is never collateral."</p>
                <cite>Ubunifu SACCO lending policy, Section 4</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className={styles.segSection}>
        <div className={styles.segInner}>
          <div className={styles.sectionMark}>Who we serve</div>
          <h2 className={styles.sectionHeadline}>Every kind of builder.</h2>
          <div className={styles.segGrid}>
            {[
              { icon: '⌨', title: 'Software Developers', body: 'Freelance, employed, or founder-track. Device finance, cloud credits, income-smoothing savings.', accent: 'cyan' },
              { icon: '⬡', title: 'Startup Founders', body: 'Pre-seed to Series A. Revenue-share loans, milestone disbursement, co-founder-friendly terms.', accent: 'violet' },
              { icon: '◈', title: 'Digital Creatives', body: 'Designers, videographers, animators. Equipment leasing, invoice advance, portfolio fund.', accent: 'gold' },
              { icon: '✦', title: 'Women in Tech', body: 'Lower rates, peer-guarantee model, mentorship pairing through Women in Technology Uganda.', accent: 'red' },
              { icon: '◎', title: 'Student Innovators', body: 'Makerere, Mbarara, Kyambogo. Zero-balance savings, prototype grants, pre-graduation membership.', accent: 'cyan' },
              { icon: '⬙', title: 'Research Commercializers', body: 'Academic innovators going lab-to-market. IP-aware loans that never touch your core work.', accent: 'violet' },
            ].map((s, i) => <SegmentCard key={i} {...s} />)}
          </div>
        </div>
      </section>

      {/* ── FIVE PILLARS ── */}
      <section className={styles.pillarsSection}>
        <div className={styles.pillarsInner}>
          <div className={styles.sectionMark}>What makes this different</div>
          <h2 className={styles.sectionHeadlineLt}>Five pillars. Zero compromises.</h2>
          <div className={styles.pillarsGrid}>
            {[
              { num: '01', title: 'IP Protection', body: 'Ubunifu loan agreements explicitly exclude intellectual property from all collateral schedules. Your codebase, designs, and algorithms are yours — unconditionally.' },
              { num: '02', title: 'Flexible repayment', body: 'Repayment tied to invoice cycles, SaaS MRR, or project milestones. Not a bank calendar designed for someone with a different job than yours.' },
              { num: '03', title: 'Digital-first', body: 'Join, save, borrow, and repay entirely via mobile. MTN MoMo, Airtel Money, member portal. No branch. No queue. No wasted day.' },
              { num: '04', title: 'Ecosystem network', body: 'Structural partnerships with Innovation Village, Outbox, Hive Colab, and Makerere Innovation Centre. Hub membership fast-tracks SACCO onboarding.' },
              { num: '05', title: 'Democratic governance', body: 'One member, one vote. The Loan Committee is constitutionally required to include tech practitioners. Members set rates, approve products, elect the board.' },
            ].map((p, i) => <PillarCard key={i} {...p} />)}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS STRIP ── */}
      <section className={styles.productsSection}>
        <div className={styles.productsInner}>
          <div className={styles.sectionMark}>Financial products</div>
          <h2 className={styles.sectionHeadline}>Named for what they do.</h2>
          <div className={styles.productsList}>
            {[
              { tag: 'NEW', name: 'Cloud & License Fund', desc: 'Finance AWS, GCP, Azure credits and software subscriptions. Repay over 6 months.', rate: 'From 12% APR · Up to UGX 5M' },
              { tag: 'CORE', name: 'Seed Capital Loan', desc: 'Business startup and prototyping. Milestone-based disbursement. Mentorship included.', rate: '14% APR · Up to UGX 20M' },
              { tag: 'NEW', name: 'Freelancer Income Bridge', desc: 'Advance against confirmed invoices. Auto-repays when your client pays.', rate: '3–5% total · 1–3 months' },
              { tag: 'GRANT', name: 'Prototype Fund', desc: 'Non-repayable. No equity taken. Competitive, twice-yearly selection.', rate: 'Non-repayable · Up to UGX 5M' },
              { tag: 'CORE', name: 'Device Upgrade Loan', desc: 'Laptops, monitors, cameras, studio gear. The device is the collateral.', rate: '12% APR · Up to UGX 8M' },
              { tag: 'WOMEN', name: 'Women in Tech Loan', desc: 'Lower rates, peer-guarantee model. No land title required.', rate: 'From 10% APR · Up to UGX 15M' },
            ].map((p, i) => (
              <div key={i} className={styles.productRow}>
                <div className={styles.productTag} data-tag={p.tag}>{p.tag}</div>
                <div className={styles.productName}>{p.name}</div>
                <div className={styles.productDesc}>{p.desc}</div>
                <div className={styles.productRate}>{p.rate}</div>
              </div>
            ))}
          </div>
          <Link to="/docs/products/overview" className={styles.viewAll}>
            View all products and rates →
          </Link>
        </div>
      </section>

      {/* ── ECOSYSTEM PARTNERS ── */}
      <section className={styles.partnersSection}>
        <div className={styles.partnersInner}>
          <div className={styles.sectionMark}>Ecosystem partners</div>
          <p className={styles.partnersSub}>
            Membership in any of these hubs qualifies as professional proof for SACCO membership. No additional documentation required.
          </p>
          <div className={styles.partnersList}>
            {['Innovation Village', 'Outbox Hub', 'Hive Colab', 'Makerere Innovation Centre', 'Women in Technology Uganda', 'Starthub Africa'].map((p, i) => (
              <div key={i} className={styles.partnerChip}>{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaFlag}>
            <span style={{ background: '#222' }} />
            <span style={{ background: '#FCDC04' }} />
            <span style={{ background: '#D21034' }} />
            <span style={{ background: '#222' }} />
            <span style={{ background: '#FCDC04' }} />
            <span style={{ background: '#D21034' }} />
          </div>
          <h2 className={styles.ctaHeadline}>
            Uganda's tech community<br />deserves its own bank.
          </h2>
          <p className={styles.ctaBody}>
            Member-owned. Tech-native. Built to last.
          </p>
          <div className={styles.ctaActions}>
            <Link to="/docs/intro" className={styles.ctaPrimary}>Read the documentation</Link>
            <Link to="/docs/membership/who-we-serve" className={styles.ctaSecondary}>Become a member</Link>
          </div>
          <div className={styles.ctaLegal}>
            UGX 50,000 registration · UGX 100,000 share capital · No branch visit required
          </div>
        </div>
      </section>

    </Layout>
  );
}
