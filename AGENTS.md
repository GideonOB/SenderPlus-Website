# Sender+ Website — Codex Instructions

## Project purpose

This repository contains **only the public-facing Sender+ company and marketing website**.

Sender+ is a Ghanaian, technology-enabled package delivery company positioned around **intra-regional delivery**: moving packages between pickup and delivery locations within the same Ghanaian region.

The public brand serves a broad market, with two priority customer segments:

1. Students
2. Businesses, merchants, and online sellers

Everyday individual senders are also customers.

Do **not** position Sender+ primarily as a campus package-retrieval startup. The student use case is important and should have a dedicated experience, but the company itself should feel like a serious, scalable delivery brand.

## Hard architectural boundary

The Sender+ standalone application already exists in a separate repository and is outside the scope of this project.

Do not build or recreate any of the following in this repository:

- customer application
- driver/courier application
- operations portal
- admin dashboard
- authentication
- user accounts
- package database
- delivery backend
- package lifecycle management
- payments backend
- notification backend
- operational APIs

The website may link to or hand off to the existing application through centralized configuration such as `NEXT_PUBLIC_APP_URL`.

If future work requires direct API integration, implement it only after an explicit instruction and keep the public website decoupled from the application architecture.

## Product positioning

Primary proposition:

> Send anywhere in your region.

Operational meaning:

> Sender+ is designed to move packages between locations within the same Ghanaian region.

Do not use bureaucratic language as the primary customer-facing explanation. “Intra-regional delivery” is accurate supporting terminology, but customer copy should remain direct and human.

Brand tagline:

> Bridging Ghana One Package at a Time.

The tagline supports the brand. It does not replace the functional value proposition.

## Audience hierarchy

### Students

Relevant use cases include:

- home to campus
- campus to home
- shop to campus
- hostel to hostel
- student-to-student delivery within supported areas
- receiving orders from local businesses

Do not claim university partnerships, campus hubs, or campus-wide operational coverage unless those facts are explicitly configured as verified.

### Businesses

Relevant audiences include:

- SMEs
- online stores
- social-commerce sellers
- WhatsApp merchants
- Instagram sellers
- retail shops
- entrepreneurs making repeated local deliveries

Relevant value themes include:

- convenient pickup
- more professional fulfillment
- delivery visibility
- recipient communication
- proof of delivery where available
- recurring or bulk delivery capabilities where available

Do not present planned business features as live.

### Everyday senders

The website must remain understandable and useful to an individual who simply needs to send a package locally within a supported region.

## Brand foundation

Primary colors:

- Sender Blue / Teal: `#77C4E0`
- Sender Deep Red: `#B22222`

Supporting palette:

- near-black
- white
- warm off-white
- restrained neutral grays

Cardboard brown may appear primarily through package imagery and subtle physical-delivery references. It should not become a dominant UI color.

Brand attributes:

- trustworthy
- fast
- secure
- visible
- modern
- Ghanaian
- warm
- professional
- customer-centered
- technology-enabled

Core values form **ACCESS**:

- Availability
- Customer Care
- Excellence
- Speed
- Security

Do not reduce the homepage to five generic value cards. Let these values shape the experience, interaction design, and copy.

## Design standard

The website should feel like a premium consumer technology and logistics brand.

Aim for:

- strong, confident typography
- generous whitespace
- excellent photography
- clear visual hierarchy
- sophisticated editorial composition
- restrained asymmetry
- intentional use of brand color
- subtle depth
- polished responsive behavior
- restrained micro-interactions

Avoid:

- generic courier templates
- generic SaaS landing-page design
- excessive gradients
- excessive glassmorphism
- neon/glow treatments
- cards everywhere
- excessive rounded rectangles
- excessive icons
- fake dashboards
- fake maps
- excessive animation
- long walls of copy
- cheap or playful visual language

The site must look custom-designed for Sender+.

## Content integrity

Never invent operational facts.

Do not fabricate:

- prices
- guarantees
- delivery times
- active regions
- coverage areas
- statistics
- customer counts
- testimonials
- ratings
- partnerships
- university agreements
- office locations
- phone numbers
- email addresses
- WhatsApp numbers
- social-media accounts
- insurance coverage
- app features

If a fact is not confirmed, omit it, mark it clearly as upcoming where appropriate, or keep it in centralized content/configuration rather than displaying it as live.

Use status-oriented content configuration where useful, for example:

- `active`
- `launching`
- `coming-soon`
- `planned`

## Initial public routes

The intended V1 information architecture is:

- `/` — Homepage
- `/students` — Sender+ for Students
- `/business` — Sender+ for Business
- `/coverage` — Delivery coverage and intra-regional model
- `/about` — Company story, mission, vision, ACCESS values
- `/help` — Help, FAQ, contact options
- `/send` — Marketing bridge into the existing Sender+ app
- `/track` — Marketing bridge into the existing Sender+ app

Do not create `/pricing` until pricing is explicitly approved.

## Technical direction

Preferred stack for a new implementation:

- Next.js
- App Router
- TypeScript
- Tailwind CSS

Guidelines:

- use Server Components by default
- use Client Components only where interaction requires them
- keep dependencies minimal
- centralize site content and external URLs
- favor reusable primitives over duplicated page markup
- keep the marketing site independent from the standalone app
- optimize images through Next.js where appropriate
- use semantic HTML
- preserve accessibility
- design mobile-first, not desktop-first then shrunk

## Suggested project organization

A good structure may include:

```text
src/
  app/
  components/
    layout/
    navigation/
    sections/
    ui/
  content/
  lib/
  styles/
public/
  brand/
  images/
```

Do not create unnecessary abstraction. Adjust the exact structure if the implementation benefits from a simpler organization.

## Application handoff

Use environment configuration rather than hard-coded app URLs.

Expected variable:

```env
NEXT_PUBLIC_APP_URL=
```

Centralize application paths in one helper/configuration module so that links such as Send and Track can be changed without searching through components.

The marketing site must fail gracefully in development when the app URL is not configured.

Do not build fake Send or Track functionality just to make those pages appear functional.

## Quality checks

Before declaring a task complete, perform the checks appropriate to the current project state. Once the Next.js project is scaffolded, this should normally include:

```bash
npm run lint
npm run build
```

Also review:

- mobile layout
- desktop layout
- keyboard navigation
- visible focus states
- heading hierarchy
- image alt text
- link behavior
- content accuracy
- CTA consistency
- app handoff links
- reduced-motion behavior where motion is used

## Working method

Prefer small, reviewable changes.

For major design work:

1. Read this file, `WEBSITE_SPEC.md`, and `BRAND_GUIDE.md`.
2. Implement only the requested scope.
3. Do not opportunistically redesign unrelated sections.
4. Do not introduce new business claims without approval.
5. Run applicable checks.
6. Summarize what changed and any assumptions that still require confirmation.

When an instruction conflicts with these project rules, call out the conflict rather than silently changing the product direction.