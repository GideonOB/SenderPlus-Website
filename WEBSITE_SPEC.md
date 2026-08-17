# Sender+ Website Product Specification

## 1. Purpose

This repository is the public company website for Sender+.

The website has three jobs:

1. Explain Sender+ clearly and credibly.
2. Convert visitors into customers by directing them into the existing Sender+ app.
3. Build trust with students, businesses, and everyday senders before and during launch.

The website is not the operational delivery application.

## 2. Public positioning

Sender+ should be framed as a modern Ghanaian **intra-regional package delivery company**.

Customer-friendly proposition:

> Send anywhere in your region.

Supporting explanation:

> Sender+ moves packages between pickup and delivery locations within the same Ghanaian region.

The phrase “intra-regional” can appear in supporting content, but the website should prioritize natural customer language.

Brand tagline:

> Bridging Ghana One Package at a Time.

## 3. Audience priority

### Primary audience 1 — Students

The student value proposition is convenience, time savings, visibility, and safer, more structured package movement.

Relevant scenarios include:

- home to campus
- campus to home
- shop to campus
- hostel to hostel
- local student-to-student delivery
- receiving purchases from nearby businesses

The website must not imply that Sender+ has official campus partnerships unless those are confirmed.

### Primary audience 2 — Businesses

The business value proposition is a more professional and dependable local delivery experience.

Relevant segments include:

- SMEs
- online stores
- Instagram sellers
- WhatsApp merchants
- retail shops
- local entrepreneurs

Relevant needs include:

- pickup from the business
- repeated local delivery
- recipient communication
- delivery visibility
- delivery confirmation where available
- bulk or scheduled options where available

### Secondary audience — Everyday senders

Any individual who needs to move a package within a supported region should immediately understand that Sender+ is for them.

## 4. Website architecture

### `/` — Homepage

Primary role:

- establish the brand
- explain the intra-regional proposition
- make Send and Track obvious
- introduce Students and Business as priority audience paths
- establish trust
- explain coverage carefully
- connect visitors to the existing app

Recommended section order:

1. Global navigation
2. Hero
3. Simple delivery journey
4. Students and Business audience split
5. How it works
6. Coverage story
7. Trust / technology
8. Existing app preview / handoff
9. Ghanaian brand story
10. Final CTA
11. Footer

Hero direction:

> Your package. Anywhere in your region. Delivered.

Primary CTA:

> Send a Package

Secondary CTA:

> Track a Package

### `/students` — Sender+ for Students

Primary goal:

Convince students that Sender+ can reduce the friction around moving or receiving packages.

Headline direction:

> Campus life is busy enough. Getting your package shouldn’t be.

Suggested content:

- student pain point
- common student use cases
- how the experience works
- trust and verification
- app handoff
- final CTA

Avoid framing the company as exclusively campus-based.

### `/business` — Sender+ for Business

Primary goal:

Convince small businesses and social-commerce sellers that Sender+ can become their local delivery partner.

Headline direction:

> You sell it. We deliver it.

Suggested content:

- practical business pain points
- merchant workflow
- common use cases
- delivery visibility and professionalism
- future-ready business capabilities, labeled accurately
- final CTA

Primary CTA:

> Start Delivering

Secondary CTA:

> Talk to Sender+

If no direct contact channel is configured, route the secondary CTA to `/help`.

### `/coverage` — Coverage

Primary goal:

Explain the intra-regional model clearly without overstating operational reach.

Headline direction:

> Send anywhere in your region.

Supporting message:

> Sender+ is rolling out region by region.

Coverage data should be centralized in a content/config file and support statuses such as:

- active
- launching
- coming-soon

Do not fabricate live regions.

Suggested FAQ topics:

- What does intra-regional mean?
- Can I send between two different regions?
- How do I know whether my location is covered?
- Will Sender+ expand to more areas?

### `/about` — About Sender+

Primary goal:

Tell a concise, brand-led company story.

Core themes:

- built in Ghana
- local understanding
- smart technology
- customer care
- simple, secure, stress-reduced package movement

Include:

- mission
- vision
- ACCESS values
- tagline

Do not reproduce the internal business plan verbatim.

### `/help` — Help and Contact

Primary goal:

Give visitors a trustworthy place for support information.

Suggested categories:

- Sending
- Tracking
- Coverage
- Students
- Business
- Package handling
- Contact

Contact methods must be centrally configured and only displayed when actual values exist.

Do not create a contact form that pretends to submit if there is no backend or external form service configured.

### `/send` — Send bridge

Primary goal:

Transition visitors into the existing Sender+ application.

Headline direction:

> Where should we take it?

CTA:

> Open Sender+ to Send

Do not recreate the app’s send form.

### `/track` — Track bridge

Primary goal:

Transition visitors into the existing Sender+ application’s tracking flow.

Headline direction:

> Keep up with your package.

CTA:

> Track in Sender+

Do not build a fake tracking API or fake tracking UI.

## 5. CTA hierarchy

Primary site CTA:

> Send a Package

Secondary recurring CTA:

> Track a Package

Audience CTAs:

- Explore Sender+ for Students
- Sender+ for Business

Business CTA:

- Start Delivering
- Talk to Sender+

The primary and secondary CTAs should remain visually distinct and consistent throughout the site.

## 6. Existing app integration

The standalone app already exists.

The public website should treat it as an external product surface.

Expected configuration:

```env
NEXT_PUBLIC_APP_URL=
```

App route paths should live in a single helper/config module so they can be changed later without editing page components.

Example conceptual mapping only:

```text
Send -> existing app send flow
Track -> existing app track flow
Open Sender+ -> app home/login flow
```

Do not assume final paths until explicitly supplied.

## 7. Coverage/content configuration

Centralize changeable operational information, including:

- app URL
- app route paths
- contact methods
- coverage regions
- feature status
- launch status

Avoid scattering operational claims through page components.

Recommended content modules may include:

```text
src/content/site.ts
src/content/coverage.ts
src/content/contact.ts
src/content/features.ts
```

Exact filenames may change if a cleaner implementation emerges.

## 8. Feature-claim policy

Sender+ planning materials include concepts such as:

- real-time tracking
- proof of delivery
- OTP/PIN verification
- business accounts
- bulk delivery
- scheduled pickups
- recipient notifications
- mobile money
- insurance
- campus hubs
- SMS notifications
- GPS tracking

These are not automatically public live claims.

Any feature shown on the site should be assigned a status such as:

- live
- launching
- planned

Use accurate wording:

- Live feature: direct present-tense claim is acceptable.
- Launching feature: “Launching with…” or similar.
- Planned feature: “Planned for Sender+ Business” or omit it.

## 9. Homepage content direction

### Hero

Functional message first.

Recommended direction:

> Your package. Anywhere in your region. Delivered.

Supporting idea:

> Fast, secure, tech-enabled package delivery for students, businesses, and everyday senders in Ghana.

Avoid “nationwide” unless confirmed.

### Simple promise

Three-stage language:

- Pickup — We collect your package.
- Track — Stay informed as it moves.
- Delivered — Securely handed over at its destination.

### Audience split

Students:

> Campus life is busy enough.

Business:

> You sell it. We deliver it.

These should be major storytelling sections rather than small utility cards.

### How it works

Recommended steps:

1. Tell us where
2. We pick it up
3. Follow the journey
4. Delivered

### Coverage

Core message:

> Built to move your region.

Supporting language:

> Sender+ is rolling out region by region.

### App connection

Headline direction:

> Delivery, right in your hands.

Use real app screenshots once supplied. Do not fabricate screens.

### Brand story

Headline direction:

> Built in Ghana. Built for how Ghana moves.

Use the tagline in this section or footer:

> Bridging Ghana One Package at a Time.

### Final CTA

Headline direction:

> Ready to send?

Primary:

> Send a Package

Secondary:

> Track a Package

## 10. SEO direction

Create route-specific metadata for all public routes.

Avoid unsupported claims in titles and descriptions.

The website should eventually include:

- metadata title template
- meta descriptions
- Open Graph defaults
- sitemap
- robots configuration
- canonical strategy if required

SEO copy should prioritize clarity over keyword stuffing.

## 11. Accessibility expectations

The V1 website should include:

- semantic landmarks
- correct heading hierarchy
- keyboard-operable navigation
- visible focus styles
- sufficiently large touch targets
- meaningful alt text
- sufficient color contrast
- accessible mobile navigation
- reduced-motion behavior where motion is used

## 12. Responsive expectations

Design mobile-first.

Representative review widths:

- 375px
- 430px
- 768px
- 1024px
- 1440px
- large desktop

Do not simply collapse desktop layouts. Re-compose major storytelling sections for smaller screens.

## 13. Performance expectations

Prioritize:

- optimized images
- minimal JavaScript
- Server Components where possible
- restrained dependencies
- optimized fonts
- low layout shift
- performant animation

## 14. Explicit V1 exclusions

Do not include unless specifically approved later:

- pricing page
- careers page
- partner logo wall
- press page
- blog/news system
- live customer dashboard
- customer login implementation
- database
- payments
- tracking backend
- delivery booking form
- fake interactive map
- fake testimonials
- fake metrics

## 15. Definition of success

A successful V1 should make a visitor understand within seconds:

1. Sender+ is a package delivery company.
2. It focuses on delivery within the same region.
3. It is built for students, businesses, and everyday senders.
4. It is modern, Ghanaian, and technology-enabled.
5. Sending and tracking happen through the existing Sender+ app.
6. Coverage and capabilities are presented honestly.
7. The site feels premium and custom-designed rather than template-driven.