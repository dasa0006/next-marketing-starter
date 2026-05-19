# PRD: Next-Marketing-Starter

**A production‑ready starter for modern, accessible, i18n‑aware marketing web apps.**

## Goal

Eliminate the 1–2 days of boilerplate and configuration friction required to start a new client marketing site.  
Provide a **GitHub Template Repo** that creates a fully functional, best‑practice marketing foundation in a single click.

**Success Metric:** Time from “New repo created” to “Building client features” is under **10 minutes** for all common marketing requirements (forms, cookie consent, dark mode, SEO, i18n routing).

---

## User Personas & Core Stories

### Primary User: Frontend Developer / Agency Developer

- **Story 1 – Instant Productive Development**  
  _As a developer, I want to clone a template and immediately start building custom pages and components so that I can demo a localized, styled marketing site to a client within minutes._

- **Story 2 – Multi‑language Ready**  
  _As a developer, I need locale‑specific routing, translated UI strings, and SEO metadata out‑of‑the‑box so that I can serve international audiences without re‑architecting the app._

- **Story 3 – Consent‑Respecting Analytics**  
  _As a developer, I need analytics to be gated behind a cookie consent mechanism that loads nothing until the user agrees, and users must be able to withdraw consent later._

- **Story 4 – Dark Mode Without Flicker**  
  _As a developer, I need a theme switcher that persists user preference and applies the correct theme instantly on page load, with no flash of unstyled content._

- **Story 5 – Accessible by Default**  
  _As a developer, I want all provided components to meet WCAG 2.2 AA standards so that I don’t need to audit basics later._

- **Story 6 – Lead Capture Showcase**  
  _As a developer, I want a pre‑built contact form with client‑ and server‑side validation that demonstrates how to handle form submissions securely and with rate‑limiting._

- **Story 7 – Self‑Documented Components**  
  _As a developer, I want an interactive component catalog where I can test every building block in isolation, with example usage and accessibility checks._

---

## Functional Requirements

### Routing & Internationalization (powered by `next-intl`)

- **FR1:** The app must support multiple locales via URL path prefix (e.g., `/en/about`, `/da/about`), handled by `next-intl` proxy.
- **FR2:** A default locale must be automatically applied when no prefix is present, using `next-intl`’s locale detection logic.
- **FR3:** All internal navigation must use `next-intl`’s navigation utilities (`useRouter`, `<Link>`, `getPathname`) to automatically preserve locale context—developers never construct prefixed URLs manually.
- **FR4:** SEO metadata (title, description) must be locale‑aware and derived from `next-intl`’s translation dictionaries via helper functions.
- **FR6:** All displayed dates, numbers, and currencies must use `next-intl`’s formatting hooks, with examples in the component catalog.
- **FR7:** Translation dictionaries must follow a structured, scalable convention:
  - `messages/base/{locale}.json` – base messages for repitive legal content or other.
  - `messages/custom/{locale}.json` – custom messages on a per template basis.
  - Clear documentation on adding new namespaces must be provided.

### Core UI Components (Provided As Starting Points, Not Opaque Libraries)

- **FR8:** A **Button component** must render as a native `<button>`, an internal link, or an external link depending on the props supplied, automatically handling accessibility and locale routing.
- **FR9:** An **Image component** must prevent layout shift, provide lazy‑loading with a low‑quality placeholder, and enforce the presence of meaningful `alt` text.
- **FR10:** A **Heading component** must allow semantic heading levels (`h1`–`h6`) with independent visual size control, following the typographic scale.
- **FR11:** A **MaxWidth container** must provide consistent horizontal padding and a configurable maximum content width.
### Text-and-Image Content Block (TextBlock)

- **FR13:** The **TextBlock component** renders a heading, one or more paragraphs, and an optional image in a side‑by‑side or stacked layout.
  - Accepts `heading`, `headingLevel`, `body`, `image` (optional, via the `TextBlockImage` interface with `src`, `alt`, `width`, `height`), and `imagePosition` (`left` | `right` | `top`).
  - When `image` is supplied, the layout switches between stacked (`top`, default) and side-by-side (`left` / `right`) breakpoint-aware modes.
  - Uses the existing `Image` component which enforces meaningful `alt` text (Storybook a11y addon flags missing alt).
  - Uses `cn()` for all class composition (see FR42).
  - All visuals (background, spacing, text colour) are driven by the centralized design tokens.

### Header & Footer Components

- **FR14:** A **SiteHeader component** must be provided that delivers a complete, composed header, used automatically by the base layout. It must include:
  - A logo slot accepting either an `<Image>` component or textual brand name, with locale‑aware alternative text.
  - Primary navigation driven by a centralised navigation configuration (`site-navigation.ts` or per‑locale dictionary), leveraging `next-intl`’s `<Link>` and `getPathname` so every link is automatically locale‑scoped.
  - An optional language switcher built with `useParams` and `useRouter` for client‑friendly locale switching without full page reloads.
  - A theme toggle integrated directly into the header (reusing the flicker‑free dark‑mode mechanism required by FR21–FR22).
  - A responsive mobile menu (hamburger) that implements focus trapping and exposes correct ARIA attributes (`aria-expanded`, `role="menu"`, etc.).
  - All styling exclusively consumed from the centralised design tokens and composed with `cn()`.
- **FR15:** A **SiteFooter component** must be provided that delivers a complete, composed footer, placed in the base layout so every page inherits it. It must include:
  - A multi‑column grid layout for navigation links, social media links, and legal pages, sourced from the same navigation configuration and translation dictionaries.
  - Legal links (Privacy Policy, Terms, Cookie Settings) where the Cookie Settings link triggers the consent‑revocation UI (see FR17).
  - An embedded Newsletter Signup form that reuses the simple validation component from FR26, demonstrating how site‑wide components can be composed.
  - A localised copyright notice with an auto‑updated year.
  - Full use of design tokens for colours, spacing, and typography, ensuring the footer immediately reflects any brand‑level token change.

### Cookie Consent & Analytics

- **FR16:** A consent banner must be displayed to new visitors, blocking any analytics or tracking scripts until explicit consent is given.
- **FR17:** The consent mechanism must support **at least three categories**: `necessary` (always loaded), `analytics`, and `marketing`. Scripts that fall into a category must be loaded only after the user grants consent for that category.
- **FR18:** The consent choice must persist across visits and be revocable via an always‑accessible interface (e.g., a link in the footer).
- **FR19:** No analytics data may be sent before appropriate consent is granted; the mechanism must work synchronously to avoid flashes of unconsented tracking.
- **FR20:** The analytics integration must be abstracted behind a simple provider interface (`AnalyticsProvider`). Users must be able to swap implementations (e.g., Plausible, GA4) by providing a different provider without modifying consent logic. The default provider must respect consent categories.
- **FR21:** The built‑in consent banner must be self‑contained, but documentation must clearly describe how to replace it with a third‑party Consent Management Platform (CMP) like OneTrust or Cookiebot.

### Theming / Dark Mode

- **FR22:** The application must provide a light and a dark visual theme, toggled by the user.
- **FR23:** The theme preference must be stored and applied before any paint to avoid a “flash of incorrect theme” (FOUC).

### Forms

- **FR24:** A **Contact Form** must be provided with fields for name, email, and message, with client‑side validation errors displayed inline.
- **FR25:** Form submission must be processed using a **Next.js Server Action**, leveraging built‑in CSRF protection via React’s `formAction`. The action must demonstrate a pluggable “submission handler” (e.g., forward to email service, post to webhook), with all sensitive credentials stored in environment variables.
- **FR26:** The Contact Form must include a **honeypot field** (invisible to users) to reduce spam. Documentation must show how to integrate an optional third‑party CAPTCHA service.
- **FR27:** A simple **Newsletter Signup** form must demonstrate a single‑field validation pattern.

### SEO & Metadata

- **FR28:** Each page must automatically receive locale‑appropriate `<title>` and `<meta description>` tags, overridable on a per‑page basis.
- **FR29:** Each page must generate **Open Graph and Twitter Card meta tags** (`og:title`, `og:description`, `og:image`, `twitter:card`, etc.) derived from the same translation dictionaries, with per‑page override.
- **FR30:** Every localized page must include **`<link rel="alternate" hreflang="...">` tags** for all supported locales, automatically generated from the routing configuration.
- **FR31:** A default **JSON‑LD structured data block** for `Organization` and `WebSite` must be included on the homepage. Internal pages must include a `BreadcrumbList` snippet.
- **FR32:** A dynamic sitemap (`/sitemap.xml`) must include all static marketing pages.
- **FR33:** A `robots.txt` must be provided and be production‑ready.

### Error, Loading & Not‑Found States

- **FR34:** The app must show a branded loading indicator during route transitions.
- **FR35:** A friendly error page must appear for unhandled runtime errors.
- **FR36:** A custom 404 page must guide users back to relevant content, respecting the current locale.

### Developer Experience & Onboarding

- **FR37:** A single interactive setup command must scaffold a new project from the template, prompting for project name and optionally linking to a hosting platform.
- **FR38:** After setup, all features (homepage, consent banner, dark mode, contact form, header, footer, TextMedia) must run locally with zero additional configuration.
- **FR39:** The project must include a **Storybook** catalog, launchable immediately. It must display each provided component in isolation, in all defined interaction states, and include accessibility audits (via `@storybook/addon-a11y`).
- **FR40:** Storybook must be pre‑configured with global decorators for:
  - Locale switching (leveraging `next-intl`’s context and translation dictionaries).
  - Theme toggling (light/dark).
  - Responsive viewport sizes (using `@storybook/addon-viewport`).
- **FR41:** An environment‑driven image loader must be provided, demonstrating how to use external asset management (e.g., Cloudinary) with `next/image`.

### Class Merging Utility

- **FR42:** The project must include a documented utility function `cn()` that combines `clsx` (for conditional class logic) and `tailwind-merge` (to intelligently resolve conflicting Tailwind classes).
  - All provided components (Buttons, TextMedia, Header, Footer, etc.) must use this utility for every element’s `className` to guarantee predictable style composition.
  - The utility must be re‑exported from a single, clearly documented path (e.g., `@/lib/utils`) and be the recommended approach for any custom component added by developers.

---

## Non‑Functional Requirements

### Performance

- **NFR1:** Time to first custom feature commit after cloning the template must be ≤ 10 minutes.
- **NFR2:** Initial local development server must start in under 5 seconds (hot module replacement ready).
- **NFR3:** Production builds must achieve a Lighthouse Performance score ≥ 90 on the default homepage.

### Accessibility

- **NFR4:** All provided components and templates must conform to **WCAG 2.2 Level AA**.
- **NFR5:** Automated a11y linting rules must run on every commit; any violation blocks the PR. Storybook stories must include automated accessibility checks via the a11y addon.

### Code Quality & Standards

- **NFR6:** The codebase must be written in **TypeScript** with the strictest compiler options enabled.
- **NFR7:** Commit messages must follow conventional commit format and be enforced automatically.
- **NFR8:** A unified code style (formatting, import order, class merging via the `cn()` utility) must be automatically enforced and applied on save.

### Testing

- **NFR9:** The starter must include a pre‑configured unit testing framework (Vitest). At least one component test and one form validation test must be present, with a test script runnable via a single command.
- **NFR10:** The `package.json` must include a script to run Storybook’s accessibility addon checks in CI mode (smoke test).

### Security & Hardening

- **NFR11:** The production configuration must set a baseline **Content Security Policy (CSP)** that allows the inline script required for dark‑mode flicker‑free switching (using a nonce or hash), with documentation on how to customize it.
- **NFR12:** The following security headers must be set in `next.config.js` or middleware: `Strict-Transport-Security`, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, and `Permissions-Policy`.
- **NFR13:** All form submissions must use Next.js Server Actions, ensuring built‑in CSRF protection is active and no plain API routes are exposed for mutations.

### Observability & Analytics (Post‑Consent)

- **NFR14:** Once consent is given, web analytics and real‑user performance monitoring must be active and easily configurable (vendor agnostic but with a pre‑configured modern analytics service).
- **NFR15:** A global error monitoring integration point (e.g., a `reportError` stub) must be included, with documentation for connecting to services like Sentry.

### Brand Theming & Maintainability

- **NFR16:** All colors, spacing, font families, and border radii must be defined as **centralized design tokens** (via Tailwind theme extensions or a `design-tokens.ts` file). Changing the primary brand color must be achievable by modifying a single token.
- **NFR17:** A documented **upgrade guide** (`upgrade-guide.md`) must be provided, explaining how to compare the generated codebase with upstream template changes. A script that checks for upstream divergence is optional but strongly recommended.

### Browser & Device Support

- **NFR18:** The starter must support all modern evergreen browsers (Chrome, Firefox, Safari, Edge) in their latest two versions.
- **NFR19:** All layouts must be responsive and functional down to 320px viewport width.

---

## Constraints (Mandatory Boundaries)

- **C1:** The project **must** be built on **Next.js 16** using the **App Router** and **React 19** (server components, streaming).
- **C2:** Styling **must** be done with **Tailwind CSS** (latest version, no config‑file‑heavy setup). Utility class merging must be safe and predictable, using the `cn()` utility as described in FR42.
- **C3:** All runtime translations must be colocated in simple dictionary files (JSON), not fetched from an external API.
- **C4:** The template must remain deployment‑agnostic but must work **out‑of‑the‑box on Vercel** (the suggested host); other platforms are supported but not documented.
- **C5:** Package manager lockfile (`pnpm-lock.yaml`) may be included, but the setup must not break if a different manager is used (only a friendly warning).
- **C6:** Internationalization **must** be implemented with **`next-intl`** (latest stable version compatible with Next.js 16). No other i18n library may be introduced.
- **C7:** The component catalog **must** be built with **Storybook 8+**, integrated with the a11y and viewport addons.
- **C8:** The Storybook configuration must correctly resolve `next-intl` provider and Tailwind setup, allowing stories to render with real translation strings and styling.
- **C9:** Design tokens must be defined in a single, documented location and consumed throughout all components and layouts.
- **C10:** The repository must include a **go‑live quality checklist** (`docs/go-live-checklist.md`) covering performance budgets, accessibility audits, legal page requirements, and security hardending.

---

## Acceptance Criteria

The PRD is considered successfully implemented when a developer can:

1. Clone the template and run the setup command.
2. Open the running app and see a localized, styled homepage with a consent banner, header, and footer.
3. Toggle dark mode seamlessly.
4. Click any internal button/link in nav and footer and navigate correctly within a locale; external links open securely in a new tab.
5. Fill in the contact form (with a hidden honeypot), see validation errors, and submit successfully via a Server Action.
6. **Launch Storybook** and interact with all base components in isolation (including SiteHeader, SiteFooter, and TextMedia), switching locale and theme, and verifying responsiveness.
7. Create a new page (`/services`) by adding a single file, inheriting SEO defaults (including `hreflang` and OG tags), and automatically appearing inside the header/footer layout.
8. **Run the test suite** and see passing component and form validation tests.
9. **Change the primary brand color** by modifying a single design token and see it applied site‑wide, including the header, footer, and TextMedia components.
10. **View page source** and confirm the presence of `hreflang` alternate links, Open Graph tags, and JSON‑LD structured data.
11. Complete all steps in **under 10 minutes** from clone to first custom commit.

---

## Scope Boundaries (What It Is Not)

- **Not a full‑fledged CMS or blog engine.** It provides the foundation for static marketing pages; content is managed via code, not a database.
- **Not a UI kit.** Components are templates to be copied and customized, not an imported library.
- **Not an e‑commerce or dashboard starter.** Only marketing‑focused patterns are included.
- **Not a production‑hardened auth system.** Authentication/authorization is out of scope.
