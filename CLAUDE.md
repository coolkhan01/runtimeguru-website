# Runtime Gurus — Project Docs

**YouTube automation agency website** for international creators and brands. Premium dark-themed UI with SSR, contact form email delivery, and full SEO.

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript 5 — strict mode |
| Styling | Tailwind CSS v4 (CSS-first, no `tailwind.config.ts`) |
| Animation | Framer Motion |
| Forms | React Hook Form + Zod |
| UI Primitives | Radix UI (Accordion, Dialog, Tabs) |
| Icons | lucide-react 1.17.0 |
| Email | Nodemailer via SMTP |
| Font | Inter via `next/font/google` |

## Dev Commands

```bash
npm run dev      # Turbopack dev server → http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint
npx next typegen # Regenerate PageProps / LayoutProps helpers
```

## Directory Structure

```
runtime-gurus/
├── app/
│   ├── layout.tsx              # Root layout — metadata, Navbar, Footer
│   ├── page.tsx                # Home — composes all section components
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── pricing/page.tsx
│   ├── portfolio/page.tsx
│   ├── contact/
│   │   ├── page.tsx            # Server component wrapper
│   │   └── ContactForm.tsx     # "use client" — React Hook Form
│   ├── api/contact/route.ts    # POST — Nodemailer SMTP
│   ├── robots.ts
│   ├── sitemap.ts
│   └── globals.css             # Tailwind import + CSS vars + utility classes
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/               # Homepage sections (all Server Components)
│       ├── Hero.tsx
│       ├── Stats.tsx
│       ├── Services.tsx
│       ├── Process.tsx
│       ├── PortfolioPreview.tsx
│       ├── Testimonials.tsx
│       ├── FAQ.tsx
│       └── CTA.tsx
├── lib/
│   └── utils.ts                # cn() for conditional Tailwind merging
└── public/                     # Static SVG assets
```

## Design System

All design tokens are CSS custom properties in `globals.css`:

| Variable | Value | Role |
|----------|-------|------|
| `--bg-base` | `#07070E` | Page background |
| `--bg-card` | `#0F0F1A` | Card backgrounds |
| `--bg-card-hover` | `#141428` | Card hover state |
| `--border` | `#1E1E3A` | Default borders |
| `--primary` | `#7C3AED` | Brand purple |
| `--primary-light` | `#A855F7` | Lighter purple |
| `--primary-glow` | `rgba(124,58,237,0.3)` | Glow shadows |
| `--accent` | `#F59E0B` | Gold accent |
| `--text-primary` | `#F8FAFC` | Body text |
| `--text-secondary` | `#94A3B8` | Muted text |
| `--success` | `#10B981` | Success states |

Reference in Tailwind: `bg-[#07070E]` or `text-[var(--text-secondary)]`.

Global utility classes (defined in `globals.css` — do not recreate with Tailwind):

| Class | Purpose |
|-------|---------|
| `.gradient-text` | Purple → gold gradient text |
| `.gradient-text-gold` | Gold gradient text |
| `.glow-purple` | Large purple box-shadow glow |
| `.glow-purple-sm` | Small purple glow |
| `.glass-card` | Frosted glass card (blur + border) |
| `.animated-gradient` | Slow shifting dark background |
| `.section-divider` | 1px horizontal gradient rule |
| `.noise` | Subtle noise texture overlay (pseudo-element) |
| `.orb-1` / `.orb-2` | Floating orb animations |

## Environment Variables

Required in `.env.local` (never commit — gitignored):

```env
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
CONTACT_EMAIL=hello@runtimegurus.com
```

See `.env.local.example` for the template.

## Common Patterns

**New page:**
1. Create `app/<route>/page.tsx` as a Server Component
2. Export `metadata` for per-page SEO
3. Add route to Navbar links

**New section component:**
1. Create `components/sections/MySection.tsx` — Server Component by default
2. Add `"use client"` only if it needs `useState`, event handlers, or browser APIs
3. Wrap Framer Motion `motion.*` usage inside a Client Component

**Conditional classes:** Always use `cn()` from `lib/utils.ts`, never string concatenation.

## SEO

- Global metadata (title template, OG tags, Twitter card) in `app/layout.tsx`
- Per-page metadata via `export const metadata` in each `page.tsx`
- Sitemap: `app/sitemap.ts` — update when adding/removing routes
- Robots: `app/robots.ts`
- Production domain: `https://runtimegurus.com`

## Hard Constraints — DO NOTs

- **No `tailwind.config.ts`** — Tailwind v4 is fully configured via `globals.css`
- **No `any` types** — strict mode; use generics or precise types
- **No lucide-react social icons** — they don't exist in v1.17.0; use: YouTube→`Play`, Twitter→`AtSign`, Instagram→`Camera`, LinkedIn→`Briefcase`
- **No `nodemailer` in Client Components** — SMTP runs only in `app/api/`
- **No page-level `"use client"`** — keep pages as Server Components; push the boundary to leaf components
- **Always `await` `params` and `searchParams`** — they are Promises in Next.js 16
- **Always `await` `cookies()`, `headers()`, `draftMode()`** — also async in Next.js 16
- **No inline `style={{}}` props** — use Tailwind utilities or `globals.css` classes
- **No default exports for components** — named exports only (except `page.tsx`, `layout.tsx`, `route.ts` which Next.js requires as default)
