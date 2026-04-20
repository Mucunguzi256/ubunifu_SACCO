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
  ];
  return (
    <div className={styles.ticker}>
      <div className={styles.tickerInner}>
        {items.concat(items).map((item, i) => (
          <span className={styles.tickerItem} key={i}>
            <span className={styles.tickerDot} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// ...rest of the homepage code from redesign package...
