# TRIIBE Web Platform

The digital infrastructure powering [TRIIBE](https://www.triibe.org/), a global non-profit initiative connecting early-stage, under-30 non-profit founders with growth capital, institutional networks, and global summit platforms.

---

### Core Architecture

- **Next-Gen Summit Hub:** Dynamic schedules, speaker directories, multi-tier ticketing, and VIP gala programming.
- **TRIIBE 100 Index:** Public data-backed directory profiling top early-stage impact entrepreneurs globally.
- **Global Chapters:** Regional leadership hubs across New York, London, Ranchi, Singapore, and West Africa.
- **Ecosystem Portals:** Fellowship onboarding, TRIIBE Talks event series, and philanthropic partner activations.

---

### Tech Stack

| Layer | Technologies |
|:---|:---|
| **Core** | Next.js 14+ (App Router), TypeScript, React |
| **Styling** | Tailwind CSS, PostCSS, Framer Motion, Lucide Icons |
| **Integrations** | Google Tag Manager, Google Analytics, Luma API, Givebutter, Google Maps API |
| **Infra & Security** | Vercel CI/CD, Custom CSP Hardening (DoubleClick, GTM, Meta) |

---

### Repository Layout

```text
├── app/                  # App Router: layouts, pages, and API endpoints
├── components/           # UI library: navigation, badges, cards, and modal systems
├── hooks/                # Custom React lifecycle and state hooks
├── lib/                  # Utilities, API integrations, and helper clients
├── public/               # Static assets, vector icons, and team media
├── styles/               # Global CSS and stylesheet definitions
├── types/                # Shared TypeScript contracts and schema interfaces
├── middleware.ts         # Route rewrites and edge request handlers
└── next.config.js        # Next.js engine setup and strict CSP rules
