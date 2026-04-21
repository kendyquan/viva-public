# FIVIVA Landing Next.js 16 Implementation Strategy

## 1. Scope and current state

- Source design: `viva-public/docs/1.FIVIVA WEB ( Temporary landing page) 2024.pdf`
- Target stack: `Next.js 16`
- Current frontend status: `viva-public` does not contain a Next.js app yet. At the moment it only has static/legal files and docs.
- Goal: create an implementation strategy for a temporary landing site that matches the PDF as closely as possible, stays visually polished, and avoids overbuilding.
- Backend review scope: `viva-api`

This document is intentionally written for a project that has **not** started implementation yet. It should be used as the baseline for scaffolding, API integration, and UI decisions.

## 2. What the PDF actually contains

The PDF has 7 pages:

- Page 1: desktop home
- Page 2: desktop reviews
- Page 3: desktop help
- Page 4: mobile home
- Page 5: mobile menu drawer
- Page 6: mobile reviews
- Page 7: mobile help

### 2.1 Shared visual language

- White header with centered navigation
- FIVIVA logo on the left
- Language switcher on the right with US flag + `English`
- Large blue hero/banner using soft wave overlays, not a flat color
- Serif headline and serif italic subheadline
- Minimal footer with copyright on the left and designer credit on the right
- Review cards use a very light gray background and large rounded corners
- Blue stars are a core visual accent

### 2.2 Home page

- Hero headline: `REAL ESTATE APPS`
- Subheadline: `Agents - Owners - Bankers - Buyers`
- Two app install CTAs: App Store and Google Play
- Media strip:
  - one large center image
  - two faded side images on desktop
  - red play button overlay
- Review summary block:
  - title `REAL REVIEWS FROM REAL GUESTS`
  - `23 Reviews`
  - overall stars
  - two metric columns on desktop
  - stacked metrics on mobile
- Testimonial list with avatar/name/location on the left and content card on the right
- Numeric pagination with left/right circular arrows

### 2.3 Reviews page

- Reuses header and footer
- Blue banner with title `Reviews`
- Review summary repeated
- Long testimonial list
- Pagination at bottom

### 2.4 Help page

- Reuses header and footer
- Blue banner with title `Hi, How can we help?`
- Large centered search box
- FAQ accordion list
- Expanded item uses `x` icon
- Collapsed items use `+` icon
- Pagination at bottom

### 2.5 Mobile-specific behavior

- Mobile browser chrome in the PDF is presentation only and should not be implemented
- Real mobile header should be logo + hamburger
- Menu opens as a right-side sheet/drawer
- Home media becomes one large image with dot indicators
- Review cards become full width
- Reviewer info moves above each card
- Footer is simplified on mobile

## 3. Product interpretation

This is not a product web app. It is a **small public marketing site** with 3 real content pages:

- `/`
- `/reviews`
- `/help`

The nav also shows:

- `/about`
- `/contest`
- `/jobs`

But the PDF does not provide real page designs for those three routes, so phase 1 should treat them as lightweight placeholders or short static pages.

## 4. Implementation principles

### 4.1 Match the design, not the imagination

- Do not add unrelated sections such as features, pricing, newsletter, stats counters, blog, or property listings.
- Do not redesign this into a generic startup landing page.
- Keep the composition from the PDF, then modernize only the rough edges:
  - spacing consistency
  - cleaner typography scale
  - better responsive behavior
  - better hover/focus states

### 4.2 Optimize token in both engineering and runtime

For this project, “optimize token” should mean two things:

1. AI/dev token optimization

- Do not keep re-reading the full PDF in every task.
- Convert the PDF once into a stable section map and use this doc as the single source of implementation truth.
- Keep component count small and meaningful.
- Keep content contracts centralized instead of scattering copy across many files.

2. Runtime/data optimization

- Home page should use at most 2 main public fetches:
  - landing content
  - testimonials
- Reviews page should use 1 main fetch:
  - testimonials
- Help page should use 1 main fetch:
  - landing content
- FAQ search should be local client filtering in phase 1, not server-side live search.
- Avoid large client libraries for carousel/state/data fetching unless truly necessary.

### 4.3 Static-first, public-read-only

- Treat the site as a public read-only marketing frontend.
- Use server components by default.
- Use client components only for:
  - mobile drawer
  - gallery slider dots
  - FAQ accordion
  - optional review card expand/collapse

## 5. Recommended Next.js 16 app shape

## 5.1 Route structure

```text
src/app/
  (marketing)/
    layout.tsx
    page.tsx
    reviews/page.tsx
    help/page.tsx
    about/page.tsx
    contest/page.tsx
    jobs/page.tsx
  globals.css
```

## 5.2 Component structure

Keep the component inventory lean:

```text
src/components/marketing/
  marketing-header.tsx
  mobile-nav-drawer.tsx
  hero-banner.tsx
  hero-store-buttons.tsx
  media-gallery.tsx
  review-summary.tsx
  testimonial-list.tsx
  testimonial-card.tsx
  faq-search.tsx
  faq-accordion.tsx
  marketing-pagination.tsx
  marketing-footer.tsx
```

Do **not** split trivial pieces into tiny components unless reuse is real.

## 5.3 Data layer

```text
src/lib/marketing/
  content.ts
  testimonials.ts
  dto.ts
  mapper.ts
  constants.ts
```

Use one mapping layer from API DTO -> UI model so page components stay clean.

## 6. Design-to-UI mapping

### 6.1 Header

- Desktop:
  - left logo
  - centered nav
  - right language switcher
- Mobile:
  - logo
  - hamburger
  - right drawer with nav items and language switcher pinned near bottom

### 6.2 Hero and blue banners

- Use CSS gradient + radial overlays
- Avoid rasterizing the entire hero background from the PDF
- Typography guidance:
  - serif for hero titles and page banner titles
  - serif italic for hero subtitle
  - readable sans for navigation/body/cards

### 6.3 Home media block

- Desktop:
  - center image is dominant
  - left/right images are faded and partially visible
- Mobile:
  - one large image
  - dot indicators
- No heavy carousel package is needed in phase 1

### 6.4 Review summary

- Keep the title centered
- Keep overall review count + stars on a single row for desktop
- Use 2 metric columns on home desktop
- Use 3 metric columns on reviews desktop if it improves fidelity
- Stack metrics vertically on mobile

### 6.5 Testimonial cards

- Desktop:
  - reviewer column left
  - content card right
- Mobile:
  - reviewer row above card
  - card full width
- `View more` can be implemented as:
  - line clamp + inline expand on client
  - or full text always shown if copy length is short

### 6.6 Help page accordion

- Accordion item container should feel calm and airy
- Search is a local filter over already-fetched FAQs
- Keep the icon treatment close to PDF:
  - `x` for open
  - `+` for closed

## 7. UI/UX guardrails

- Do not use dark mode in phase 1
- Do not introduce flashy motion
- Use motion only where it supports the layout:
  - drawer slide
  - FAQ expand/collapse
  - optional fade for gallery slide
- Preserve generous whitespace
- Improve accessibility beyond the PDF:
  - keyboard focus states
  - semantic nav
  - accordion aria states
  - meaningful alt text

## 8. API review result in `viva-api`

## 8.1 Existing backend capabilities

Before changes, the backend already had:

- `AdminService`
  - FAQ entity/service/controller
  - System settings entity/service/controller
- `PropertyService`
  - property reviews
  - review statistics
- `AuthService`
  - user profile retrieval
  - batch profile retrieval

## 8.2 Why existing APIs were not enough

The landing site is public, but the existing endpoints were not public-friendly:

- FAQ endpoints were staff/superadmin protected
- system settings endpoints were staff/superadmin protected
- property review endpoints were auth protected
- batch profile endpoint in AuthService was auth protected and returned more data than a landing page needs

There were also 2 structural gaps:

- review schema does **not** contain aspect ratings for `Accuracy`, `Communication`, `Cleanliness`
- user profile schema does **not** provide a dedicated structured country field for rendering country flags exactly like the PDF

## 8.3 Public APIs added

The following public endpoints were added in `viva-api`:

### AdminService

`GET /admin/v1/public/landing/content`

Purpose:

- fetch active landing settings
- fetch active FAQs
- support lightweight filtering for help page usage

Query params:

- `settingsCategory` default `landing-page`
- `languageId` optional
- `faqKeyword` optional
- `faqCategory` optional

### AuthService

`POST /auth/v1/public/users/profile-summaries`

Purpose:

- return minimal reviewer info for public pages
- avoid returning full private profile payload
- allow PropertyService to enrich testimonials without requiring auth

Request:

```json
{
  "userIds": ["guid-1", "guid-2"]
}
```

Response fields:

- `userId`
- `fullName`
- `userName`
- `avatarUrl`
- `address`
- `profileType`

Notes:

- avatar URL is presigned in AuthService
- `address` and `profileType` only come back when privacy allows public exposure

### PropertyService

`GET /property/v1/public/testimonials`

Purpose:

- return paginated public testimonials for home and reviews pages

Query params:

- `page`
- `pageSize`
- `minRating`

Behavior:

- only returns reviews with text content
- only returns reviews from `published` and `is_original` properties
- enriches reviewer info through the new AuthService public profile summary endpoint

## 9. Remaining data gaps and recommended handling

### 9.1 Aspect ratings in the PDF

The PDF shows:

- Accuracy
- Communication
- Cleanliness

But current review storage only has a single integer `rating`.

Recommendation:

- Phase 1 should **not** change review schema just for a temporary landing page.
- Render the aspect metrics from landing settings instead of the review table.
- If product later needs real multi-axis reviews in app/web core flows, then add schema and business logic in a separate project.

### 9.2 Country flag fidelity

The design visually shows country flags and country labels.

Current profile data only reliably gives:

- `address`
- no dedicated `countryCode`
- no dedicated `countryName`

Recommendation:

- Phase 1 frontend should display `address` or a normalized location label when present.
- If exact flag rendering is mandatory, add a structured country field later in AuthService profile schema.

## 10. Suggested landing content keys

Use `SystemSettings` category: `landing-page`

Recommended keys:

- `landing.hero.title`
- `landing.hero.subtitle`
- `landing.hero.appStoreUrl`
- `landing.hero.playStoreUrl`
- `landing.hero.videoUrl`
- `landing.hero.galleryImages`
- `landing.reviews.title`
- `landing.reviews.totalLabel`
- `landing.reviews.metric.accuracy`
- `landing.reviews.metric.communication`
- `landing.reviews.metric.cleanliness`
- `landing.help.title`
- `landing.help.searchPlaceholder`
- `landing.footer.leftText`
- `landing.footer.rightText`

Value conventions:

- plain strings for simple text and URLs
- JSON array string for image lists
- plain decimal string or short JSON for metrics

## 11. Fetch and cache strategy for Next.js 16

### 11.1 Home page

- fetch `landing content`
- fetch `testimonials`
- recommended `revalidate`:
  - content: 1 hour
  - testimonials: 15 to 30 minutes

### 11.2 Reviews page

- fetch `testimonials`
- pagination via URL search params
- revalidate same as testimonials

### 11.3 Help page

- fetch `landing content`
- filter FAQ client-side by search keyword
- no live API search in phase 1

## 12. SEO and performance

- Each page should have page-specific metadata
- Use `next/image` for gallery and avatars
- Export/store real optimized assets in `public/landing/`, not crops pulled directly from the PDF
- LCP is likely hero banner or main media image, so prioritize those assets
- Keep JS light:
  - no global state library
  - no large carousel library
  - no React Query unless product scope grows

## 13. Recommended implementation phases

### Phase 0

- Scaffold Next.js 16 app inside `viva-public`
- Set up app router, global CSS, fonts, base layout
- Add design tokens and core utilities

### Phase 1

- Implement shared marketing layout
- Implement header, footer, banner background system
- Add placeholder routes for `about`, `contest`, `jobs`

### Phase 2

- Implement home page
- Connect landing content + testimonials APIs
- Implement media gallery and review summary

### Phase 3

- Implement reviews page
- Reuse testimonial components
- Add URL-based pagination

### Phase 4

- Implement help page
- Add FAQ search + accordion
- Tune mobile interactions

### Phase 5

- Asset optimization
- metadata and OG tags
- accessibility polish
- visual QA against PDF desktop/mobile

## 14. Acceptance criteria

- The structure of home, reviews, and help clearly matches the PDF
- Mobile drawer behavior matches the intent of the mobile mock
- Public pages do not depend on user authentication
- Home uses at most 2 main data fetches
- Reviews uses 1 main data fetch
- Help uses 1 main data fetch
- No extra marketing sections are introduced
- Desktop and mobile spacing feel intentional, not auto-generated

## 15. Final recommendation

The right implementation direction is:

- `static-first`
- `public-read-only`
- `config-driven`
- `few routes`
- `few components`
- `small payloads`

This project should **not** be treated like a full CMS or a mini product app.  
The fastest safe path is to build a clean Next.js 16 marketing shell around 3 real routes, backed by the new public APIs added in `viva-api`, while keeping design fidelity high and business schema changes minimal.
