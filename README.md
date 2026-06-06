# Efficacy AI Learning Hub

A professional Next.js landing page and portfolio foundation for academic assignments, AI projects, content creation, pharma quality automation, and future monetization.

## Project Purpose

Efficacy AI Learning Hub is being built in phases. It starts as an academic and project portfolio for an artificial intelligence student and pharma quality professional. The architecture also prepares for future growth into articles, resources, templates, newsletters, courses, consulting, and community.

The site should represent:

- Artificial intelligence student
- Machine learning beginner growing into expert
- Pharma quality assurance professional
- Biotech and regulated operations leader
- AI, robotics, automation, and healthcare innovation builder
- Future digital entrepreneur and content creator

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Structured TypeScript content files
- Generated hero visual asset stored in `public`
- Vercel-ready project scripts

## Site Architecture

Primary routes:

- `/` - Home
- `/assignments` - Academic assignments and labs
- `/assignments/[id]` - Assignment detail readiness pages
- `/projects` - AI, automation, healthcare, robotics, and developer projects
- `/projects/[id]` - Project detail readiness pages
- `/articles` - Future article and content planning
- `/articles/[slug]` - Article detail readiness pages
- `/resources` - Future resource library, resource pathways, and waitlist readiness
- `/about` - Professional identity and content pillars
- `/contact` - Collaboration and contact path

Future reserved navigation ideas:

- Templates
- Courses
- Newsletter
- Consulting
- Community

## Content Model Overview

Structured content lives in `src/content`.

- `navigation.ts` - Primary navigation and future navigation ideas
- `homepage-sections.ts` - Landing page section order and purpose
- `assignments.ts` - Assignment card data model and placeholder assignments
- `projects.ts` - Project card data model, project categories, and placeholder projects
- `articles.ts` - Future article data model and article ideas
- `resources.ts` - Resource data model, categories, and placeholder resources
- `growth.ts` - Newsletter interests, lead capture paths, monetization paths, and content growth paths
- `content-pillars.ts` - Content pillar strategy
- `seo.ts` - Audience plan, voice guide, keyword groups, and metadata plan

Pages import these TypeScript content files directly and pass each item into reusable card components. This keeps repeated card content out of page files while making it easy to add, edit, or feature content from one location.

## Page Structure Summary

Current working pages:

- Home: hero, professional identity, featured assignments, featured projects, featured articles, resource preview, content pillars, roadmap preview, monetization readiness, newsletter signup preview, and contact call to action
- Assignments: featured assignments, stats, category/status filters, grouped summaries, skill organization, card grid, and detail readiness pages
- Projects: featured projects, stats, category/status filters, grouped summaries, tool organization, card grid, and detail readiness pages
- Articles: featured article ideas, stats, category/status filters, grouped summaries, audience/keyword organization, content growth paths, related resource preview, newsletter signup preview, card grid, and detail readiness pages
- Resources: stats, featured resources, category/status filters, grouped summaries, future waitlist cards, related article path, and newsletter signup preview
- About: concise professional identity and content pillars
- Contact: collaboration paths and placeholder contact links

Current homepage sections:

1. Hero with visual asset
2. Professional identity
3. Featured assignments
4. Featured projects
5. Featured article ideas
6. Featured resource pathways
7. Content pillars
8. Learning roadmap
9. Monetization readiness roadmap
10. Newsletter signup preview
11. Contact call to action

## Component Summary

Reusable components live in `src/components`.

Cards:

- `AssignmentCard`
- `ProjectCard`
- `ArticleCard`
- `ResourceCard`

Layout:

- `Container`
- `PageHeader`
- `SectionHeader`
- `SiteHeader`
- `SiteFooter`

UI helpers:

- `StatusBadge`
- `TagList`
- `ContentLinkList`
- `EmptyState`

Content organization:

- `FeaturedSection`
- `FilterBar`
- `GroupedSummary`
- `StatsSummary`

Lead capture and conversion readiness:

- `NewsletterSignup`
- `LeadCaptureForm`
- `InterestSelector`
- `WaitlistCard`
- `ResourceCallout`
- `ConversionSection`

The card components are typed with the Phase 2 data models and handle missing repository or live preview links by showing a pending state instead of crashing or rendering broken links.

The lead capture components are front-end only in Phase 6. They validate in the browser and show temporary preview messages. They do not send, store, subscribe, gate, or charge users.

## Design System Summary

Phase 4 introduced a polished but lightweight visual system:

- Professional neutral foundation with teal, emerald, and warm gold accents
- Stronger typography scale for hero, page headers, and section headers
- Responsive sticky navigation with a simple mobile menu
- Global footer with primary navigation and future platform paths
- Soft section backgrounds for visual rhythm
- Readable cards with restrained borders, shadows, status badges, and tags
- Accessible focus outlines and improved contrast
- Generated hero visual: `public/hero-ai-quality-automation.svg`

Visual system maintenance:

- Keep repeated content in `src/content` and render it through card components.
- Use `Container`, `PageHeader`, and `SectionHeader` for page rhythm.
- Use status badges and tag lists consistently instead of custom one-off labels.
- Keep visual polish restrained: no heavy animation, cluttered gradients, or sales-page styling.
- Add new design patterns only when they serve multiple pages.

Supporting strategy docs live in `docs`.

- `docs/information-architecture.md`
- `docs/content-strategy.md`

## Navigation Plan

The primary navigation is:

1. Home
2. Assignments
3. Projects
4. Articles
5. Resources
6. About
7. Contact

The homepage section order is:

1. Hero
2. Professional identity
3. Featured assignments
4. Featured projects
5. Featured article ideas
6. Resource preview
7. Content pillars
8. Learning roadmap
9. Future monetization roadmap
10. Newsletter call to action
11. Contact and collaboration call to action

## SEO and Content Voice

Primary audience:

Professors, classmates, recruiters, collaborators, AI learners, pharma professionals, future clients, and future content subscribers.

Secondary audience:

Startup founders, healthcare innovators, international students, technical hiring teams, and digital product customers.

Brand voice:

Professional, ambitious, intelligent, clear, trustworthy, academic, technical, entrepreneurial, and human.

Avoid:

- Generic filler text
- Overhyped claims
- Weak student language
- Unverified accomplishments
- Salesy language
- Cluttered wording

Use:

- Clear project descriptions
- Evidence based language
- Professional technical framing
- Learning journey language
- Founder mindset language
- Portfolio ready summaries

## Metadata Plan

Metadata planning is stored in `src/content/seo.ts` for:

- Home page
- Assignments page
- Projects page
- Articles page
- Resources page
- About page
- Contact page

Each page includes:

- `pageTitle`
- `metaDescription`
- `openGraphTitle`
- `openGraphDescription`
- `targetKeywords`

Phase 4 added Open Graph image readiness through the generated hero asset. Phase 6 adds metadata readiness for the Resources page and resource-related keyword groups.

## Future Monetization Roadmap

No monetization tools are active in Phase 6.

Future monetization paths may include:

- Newsletter
- Digital templates
- AI study guides
- Project walkthroughs
- Mini courses
- Consulting
- Premium resources
- Community membership
- Affiliate resources

These should only be built after the site has useful free content, clear audience fit, and credible project examples.

## How To Add New Assignments

Add a new object to `assignments` in `src/content/assignments.ts`.

Required fields:

- `id`
- `title`
- `course`
- `category`
- `summary`
- `skills`
- `status`
- `date`
- `repositoryUrl`
- `liveUrl`
- `featured`
- `learningOutcome`

## How To Add New Projects

Add a new object to `projects` in `src/content/projects.ts`.

Required fields:

- `id`
- `title`
- `category`
- `summary`
- `problemSolved`
- `tools`
- `status`
- `repositoryUrl`
- `liveUrl`
- `featured`
- `futurePotential`

## How To Add New Articles

Add a new object to `articles` in `src/content/articles.ts`.

Required fields:

- `id`
- `title`
- `slug`
- `category`
- `summary`
- `audience`
- `status`
- `estimatedReadTime`
- `keywords`
- `futureMonetizationLink`
- `featured`

## How To Add New Resources

Add a new object to `resources` in `src/content/resources.ts`.

Required fields:

- `id`
- `title`
- `category`
- `summary`
- `audience`
- `status`
- `format`
- `accessType`
- `futureMonetizationPath`
- `featured`

Keep resource records realistic and honest. Do not add download links, payment links, gated access, or availability claims until the resource exists and the integration has been deliberately added.

## Future Newsletter Integration Notes

Phase 6 forms are preview-only. To connect a newsletter service later:

1. Choose a provider such as ConvertKit, Beehiiv, Mailchimp, or another email service.
2. Define consent language, privacy expectations, list fields, and unsubscribe behavior.
3. Add a server-side integration path such as a safe API route or server action.
4. Replace the client-only confirmation in `LeadCaptureForm` with the verified integration.
5. Keep validation, error handling, and no-fake-submission language clear.

Do not connect an email provider until the site is ready to store or transmit signup data responsibly.

## Future Payment Integration Notes

Phase 6 does not add Stripe, Gumroad, Lemon Squeezy, PayPal, or checkout links.

To connect payment tools later:

1. Confirm which resources or services are genuinely ready to sell.
2. Create clear product pages, refund terms, support expectations, and delivery rules.
3. Add checkout through a vetted provider.
4. Keep free resources and paid resources clearly labeled.
5. Avoid income claims, pressure language, or unsupported promises.

## Future Database Integration Notes

Phase 6 uses TypeScript content files only.

To connect a database later:

1. Decide whether content, leads, resources, or user accounts actually need persistence.
2. Choose the smallest appropriate data layer.
3. Add schema validation and environment variables.
4. Migrate existing TypeScript content carefully.
5. Keep public content working even if optional dynamic features fail.

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Run a production build check:

```bash
pnpm build
```

Run TypeScript checking:

```bash
pnpm typecheck
```

## Phase 2 Status

Completed in this phase:

- Core navigation plan
- Landing page section structure
- Assignment content model
- Project content model
- Article content model
- Content pillars
- SEO and content voice guide
- Metadata plan
- Basic route shells for primary pages
- README and strategy documentation

## Phase 3 Status

Completed in this phase:

- Lightweight polished homepage shell
- Dynamic Assignments page using `AssignmentCard`
- Dynamic Projects page using `ProjectCard`
- Dynamic Articles page using `ArticleCard`
- Refined About page shell
- Refined Contact page shell
- Shared layout primitives
- Shared status, tag, link, and empty-state helpers
- Working navigation across primary routes
- Metadata applied through the Phase 2 metadata plan

## Phase 4 Status

Completed in this phase:

- Polished visual design system
- Upgraded homepage landing experience
- Generated hero image added to `public`
- Refined responsive navigation
- Added global footer
- Improved card visual hierarchy and hover states
- Improved status badge, tag, link, and empty-state styling
- Improved page header and section header hierarchy
- Added Open Graph image readiness
- Updated page rhythm across Assignments, Projects, Articles, About, and Contact

Known limitations:

- No connected contact form
- No newsletter integration
- Placeholder email, LinkedIn, and GitHub remain placeholders
- No authentication, database, payments, or monetization tools
- Lint is not configured yet

## Phase 5 Status

Completed in this phase:

- Added stable `id` values to assignment and project records
- Added stable `id` values and `featured` flags to article records
- Added reusable content utilities for counts, filters, search params, and tags
- Added reusable content sections for featured content, filters, stats, and grouped summaries
- Upgraded Assignments with stats, featured section, category/status filters, grouped summaries, skill tags, and empty filter state
- Upgraded Projects with stats, featured section, category/status filters, grouped summaries, tool/category tags, and empty filter state
- Upgraded Articles with stats, featured section, category/status filters, grouped summaries, audience/keyword tags, and empty filter state
- Added data-aware detail readiness pages for assignments, projects, and articles
- Connected homepage and listing cards to detail routes

Filtering behavior:

- Listing pages use query string filters: `category` and `status`
- Filters are server-rendered through the App Router and preserve the other active filter when changed
- Invalid or overly narrow filter combinations show a clear empty state with a reset link
- Grouped summaries show category counts and status counts from the same structured content arrays

Current Phase 5 limitations:

- Detail pages are structured placeholders, not full essays, case studies, or blog posts
- No CMS, database, authentication, payments, newsletter provider, or contact form is connected
- Repository and live preview links still show pending states until real URLs are added
- Lint is not configured yet

## Phase 6 Status

Completed in this phase:

- Added a structured resource data model and placeholder resource library
- Added resource category, format, access type, future monetization, and featured fields
- Added content growth data for newsletter interests, lead capture paths, future monetization paths, and content planning
- Added reusable front-end lead capture components
- Added browser-only newsletter signup validation and temporary confirmation messaging
- Added a Resources page with stats, featured resources, filters, grouped summaries, waitlist previews, and newsletter readiness
- Added Resources to primary navigation and metadata planning
- Added homepage resource preview, monetization readiness roadmap, and newsletter signup preview
- Added Articles page resource and newsletter conversion readiness
- Improved the footer with main pages, content areas, future resources, newsletter signup preview, professional identity, and social placeholders

Newsletter readiness summary:

- Forms include labels, names, email fields, interest selectors, submit buttons, privacy reassurance text, validation messages, and accessible status messaging
- Forms do not send, store, subscribe, gate, or charge anyone
- Code comments in `LeadCaptureForm` mark where a future email service or internal API route can be connected

Lead capture structure summary:

- Reusable structure now supports newsletter signup, project updates, resource interest, study guide waitlists, template waitlists, mini course waitlists, consulting interest, and community interest
- Waitlist cards are front-end previews only

Resource pathway summary:

- The Resources page prepares future free and paid resource pathways without downloads, payments, or gated access
- Planned categories include AI study guides, machine learning notes, GitHub workflow templates, GMP templates, cleanroom deviation practice tools, student success systems, AI agent prompts, and project planning templates

Current Phase 6 limitations:

- No newsletter provider is connected
- No signup data is stored or transmitted
- No downloadable files are created
- No payment processing or product checkout exists
- No database, authentication, analytics, or CMS exists
- Social links remain placeholders
- Lint is not configured yet

## Next Recommended Phase

Phase 7 should perform SEO polish, accessibility review, performance improvement, analytics readiness, deployment preparation, and production quality checks before final Vercel deployment.
