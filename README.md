# SenderPlus-Website

Public company website for **Sender+**, a Ghanaian technology-enabled package delivery company.

> Bridging Ghana One Package at a Time.

## Project scope

This repository is for the **public marketing website only**.

The existing Sender+ standalone application is maintained separately and is not recreated here.

The website will explain the company, its intra-regional delivery model, its student and business offerings, coverage, and support information, while routing users into the existing app for actions such as sending and tracking packages.

## Product positioning

Sender+ is positioned as an **intra-regional package delivery company**.

Customer-facing proposition:

> Send anywhere in your region.

Priority audiences:

- Students
- Businesses / merchants / online sellers

Everyday individual senders are also part of the market.

## Planned V1 routes

- `/` — Homepage
- `/students` — Sender+ for Students
- `/business` — Sender+ for Business
- `/coverage` — Coverage
- `/about` — About Sender+
- `/help` — Help and Contact
- `/send` — Bridge to existing Sender+ app
- `/track` — Bridge to existing Sender+ app

## Intended stack

The public website should be scaffolded with:

- Next.js
- App Router
- TypeScript
- Tailwind CSS

The application uses Next.js App Router, TypeScript, and Tailwind CSS. Source files live in `src/`, with route files under `src/app` and reusable layout, navigation, section, and UI primitives under `src/components`.

## Repository guidance

Before changing UI or architecture, read:

- `AGENTS.md`
- `WEBSITE_SPEC.md`
- `BRAND_GUIDE.md`

These files define the product scope, positioning, content rules, architecture boundary, and visual direction.

## Environment variables

Use `.env.local` for local values.

Expected initial variable:

```env
NEXT_PUBLIC_APP_URL=
```

Do not commit `.env.local` or other secret-bearing environment files.

See `.env.example` for the committed template.

## Existing app boundary

Do not build the following in this repository:

- authentication
- customer accounts
- delivery database
- driver application
- operations dashboard
- package management backend
- payments backend
- tracking backend

Send and Track experiences on the public website should hand off to the existing application until a future explicit integration task is approved.

## Brand

Primary colors:

- Sender Blue / Teal — `#77C4E0`
- Sender Deep Red — `#B22222`

The design should feel premium, modern, Ghanaian, trustworthy, and technology-enabled.

See `BRAND_GUIDE.md` for the full visual direction.

## Assets

Binary assets are intentionally uploaded separately after the text-only Codex draft PR is created. Use this structure:

```text
public/
  brand/
  images/
```

Recommended initial paths:

```text
public/brand/senderplus-logo.png
public/images/hero-package.jpg
```

## Development

Development workflow:

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Content integrity

Do not invent operational claims such as:

- active service regions
- delivery times
- prices
- customer statistics
- testimonials
- university partnerships
- phone numbers
- email addresses
- guarantees

Use centrally managed configuration for operational information that may change over time.

## Current status

The Next.js foundation, global shell, design tokens, shared UI primitives, and V1 route placeholders are established. Full page design and content remain intentionally out of scope for this scaffold.
