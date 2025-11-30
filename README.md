# Acro Stars Website

This repository contains the Acro Stars website, which has been migrated from a static HTML/CSS site to a modern web application using Next.js, React, and TypeScript.

## Project Structure

- `nextjs-app/` – The new Next.js application
- `archive-old-site/` – The old static HTML/CSS site (archived)

---

## Getting Started

### Prerequisites

- Node.js v18+ (препоръчително)
- npm v8+

### Installation

```bash
# от root на репото
npm install

cd nextjs-app
npm install
```

---

## Running the Application (development)

От root директорията:

```bash
npm run dev
```

Това стартира Next.js dev сървъра:

```
http://localhost:3000
```

---

## Building for Production (static export)

Сайтът използва **static export** чрез:

```js
// nextjs-app/next.config.js
output: "export"
```

Билд:

```bash
npm run build
```

Това генерира:

- `.next/` – продукционен Next билд
- `nextjs-app/out/` – **статичен HTML/CSS/JS сайт**, който ще бъде деплойнат

---

## Preview на продукционната версия локално

```bash
cd nextjs-app
npm run build
npx serve out
```

Отвори:

```
http://localhost:3000/Acro-Stars/
```

> Забележка: `next start` **не се използва**, защото проектът се деплойва като статичен сайт.

---

## Deployment (GitHub Pages)

Проектът се деплойва чрез GitHub Actions:

- Push към `main` стартира workflow
- Прави `npm run build`
- Качва съдържанието на `nextjs-app/out` в branch `gh-pages`
- GitHub Pages сервира сайта от `gh-pages`

Адресът на сайта:

```
https://sunnydineva.github.io/acro-stars/
```

---

## Project Structure

```
nextjs-app/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with Header and Footer
│   ├── page.tsx            # Homepage
│   └── public-documents/   # Public Documents page
│       └── page.tsx
├── components/             # Reusable React components
│   ├── Header.tsx          # Site header with navigation
│   └── Footer.tsx          # Site footer
├── data/                   # Data files
│   └── publicDocuments.ts  # Public documents data
├── public/                 # Static assets
│   └── images/             # Images used in the site
│       ├── heroes/         # Hero section background images
│       └── partners/       # Partner logos
├── styles/                 # CSS styles
│   ├── variables.css       # CSS variables (colors, etc.)
│   ├── globals.css         # Global styles
│   ├── Header.module.css   # Header component styles
│   ├── Footer.module.css   # Footer component styles
│   ├── Home.module.css     # Homepage styles
│   └── PublicDocuments.module.css  # Public Documents page styles
├── package.json            # Project dependencies
└── tsconfig.json           # TypeScript configuration
```

---


