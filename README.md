# XENedion&trade; Marketing Website (Light Theme)

> **Tagline:** Business, Connected.  
> **Positioning:** The cloud ERP for growing multi-branch businesses: sell at the counter or by quotation, track stock in every branch, and stay tax-ready, all in one system.

---

## 1. Overview & Brand Identity

This repository hosts the official marketing website for **XENedion**, an enterprise cloud ERP built for multi-branch retailers and distributors (1 to 50 branches).

The website has been styled in a **pure, premium Light Theme** derived directly from the official 3D metallic chrome and polished liquid gold logo:
- **Base Background:** Clean white (`#FFFFFF`) with subtle light slate accents (`#F8FAFC`, `#F1F5F9`).
- **Brand Colors:**
  - **Polished Gold / Amber (`#F5A623` to `#FFC247`):** Primary buttons, interactive badges, active indicators, and glowing highlights.
  - **Brushed Steel / Titanium Chrome (`#1E293B` to `#475569`):** High-contrast typography, structure, and borders.
- **Home Page Background:** Ambient warm gold & steel light gradient mesh with subtle high-tech grid pattern and an interactive hub-and-spoke branch canvas.

---

## 2. Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS with custom light theme design tokens
- **Animations:**
  - **Framer Motion:** Word-by-word reveal headlines, hover lifts, modal & dropdown transitions
  - **GSAP + ScrollTrigger:** Pinned multi-step visual sequence ("One system, every branch")
  - **Lenis:** Smooth inertia scroll with `prefers-reduced-motion` detection
  - **HTML5 Canvas:** Interactive branch network on light background
- **Forms & Validation:** React Hook Form + Zod with honeypot spam protection and Route Handlers
- **SEO & Compliance:** JSON-LD, OpenGraph, sitemap.xml, robots.txt, and WCAG AA accessibility

---

## 3. Getting Started

### Installation:
```bash
npm install
```

### Running Locally:
```bash
npm run dev
# Server will be accessible at http://localhost:3000
```

### Production Build:
```bash
npm run build
npm run start
```
