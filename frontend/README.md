# UBUNIFU SACCO Documentation

Standalone static frontend for the UBUNIFU SACCO Ltd. documentation portal.

## Setup

```bash
cd frontend
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is in `frontend/dist/`. Deploy to GitHub Pages via the included GitHub Actions workflow.

## GitHub Pages

The site deploys automatically to `https://mucunguzi256.github.io/ubunifu-sacco-docs/` on every push to `main`.

To enable:
1. Go to your repo Settings > Pages
2. Set Source to **GitHub Actions**
3. Push to `main` — the workflow handles the rest.
