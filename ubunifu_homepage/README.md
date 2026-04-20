# Ubunifu SACCO — Homepage Redesign

## What's in this package

| File | Purpose |
|------|---------|
| `src/pages/index.js` | New homepage — drop into your repo |
| `src/pages/index.module.css` | CSS module for homepage sections |
| `src/css/custom.css` | Full Docusaurus theme override (replaces your existing custom.css) |
| `src/css/navbar-join.css` | Navbar join button — add one line to custom.css |
| `docusaurus.config.js` | Updated config with fonts, dark mode, mermaid, footer |

---

## Install steps

### 1. Install Mermaid theme (if not already)

The new docs use Mermaid diagrams extensively. Install the theme:

```bash
npm install --save @docusaurus/theme-mermaid
```

### 2. Copy the files

```bash
# From the package root into your ubunifu_SACCO repo:

cp src/pages/index.js         <your-repo>/src/pages/index.js
cp src/pages/index.module.css <your-repo>/src/pages/index.module.css
cp src/css/custom.css         <your-repo>/src/css/custom.css
```

### 3. Update docusaurus.config.js

Replace your existing `docusaurus.config.js` with the one in this package, or apply these four changes to your existing config:

**a) Add headTags for Google Fonts** (DM Serif Display + DM Mono + Outfit):
```js
headTags: [
  { tagName: 'link', attributes: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
  { tagName: 'link', attributes: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' } },
  { tagName: 'link', attributes: {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400;500&family=Outfit:wght@300;400;500;600;700&display=swap'
  }},
],
```

**b) Enable Mermaid:**
```js
markdown: { mermaid: true },
themes: ['@docusaurus/theme-mermaid'],
```

**c) Force dark mode:**
```js
colorMode: {
  defaultMode: 'dark',
  disableSwitch: true,
  respectPrefersColorScheme: false,
},
```

**d) Add navbar Join button class:**
```js
// In navbar.items:
{ to: '/docs/membership/who-we-serve', label: 'Join the SACCO', position: 'right', className: 'navbar-join-btn' },
```

### 4. Add navbar join button CSS

At the bottom of your `src/css/custom.css`, add:
```css
.navbar-join-btn {
  background: var(--ifm-color-primary) !important;
  color: #fff !important;
  padding: 6px 16px !important;
  border-radius: 3px !important;
  font-weight: 600 !important;
}
.navbar-join-btn:hover { background: #6040E8 !important; }
```

### 5. Run locally

```bash
cd <your-repo>
npm run start
```

Visit http://localhost:3000 — the homepage should show the new design.

---

## Design decisions explained

### Why DM Serif Display?
It is the editorial/institutional weight that signals national credibility — not a tech startup font, but not a government bureaucracy font either. The serif paired with the dark background creates the "reserve bank meets developer tool" tension that makes this design memorable.

### Why is the pillars section gold?
Uganda's national gold (#FCDC04) is used exactly once across the whole page — the five pillars section. This is maximum-impact restraint. The gold section physically interrupts the dark design with a burst of national colour, makes the five differentiators the most memorable section on the page, and then the dark returns. Using gold everywhere would neutralise it.

### Why the terminal card?
Ubunifu's primary audience is developers. A terminal card communicates "this was built by people who understand your work" in a way that no amount of copy can. It shows the entire member journey in developer-native language.

### Why force dark mode (no toggle)?
Brand consistency. Ubunifu SACCO has a strong visual identity that depends on the dark background — the crane geometry, the gold accent, the cyan terminal. A light mode would collapse the hierarchy. This is a deliberate brand decision, not a technical limitation.

---

## Typography stack

| Role | Font | Usage |
|------|------|-------|
| Display / Headings | DM Serif Display | H1, H2, H3, hero headline, stat values |
| Body / UI | Outfit | Paragraphs, nav, labels, body text |
| Monospace / Data | DM Mono | Code, terminal, stat labels, badge text, metadata |

---

## Colour palette — Indigo Crane

| Token | Hex | Usage |
|-------|-----|-------|
| `--ub-bg` | `#07061A` | Page background |
| `--ub-surface` | `#0D0B27` | Cards, sidebar |
| `--ub-violet` | `#4F2DD4` | Primary brand, buttons, borders |
| `--ub-cyan` | `#00C4FF` | Links, accents, terminal, section marks |
| `--ub-gold` | `#FCDC04` | Uganda gold — used once, maximum impact |
| `--ub-red` | `#D21034` | Uganda red — used only for Women in Tech tag |
| `--ub-text` | `#EBE8FF` | Primary text |
| `--ub-muted` | `#8B82BE` | Secondary text, labels |

Named "Indigo Crane" after Uganda's grey crowned crane — the cyan from its blue facial marking, the gold and red from the national flag.
