# Information Architecture - Phase 2

This document defines the route structure, navigation plan, page responsibilities, and landing page section order for Efficacy AI Learning Hub. It is intentionally structural. Full visual design, animations, monetization features, and blog publishing functionality belong in later phases.

## Site Purpose

Efficacy AI Learning Hub is a professional academic and project portfolio that can later grow into a monetized content platform. It should represent:

- Artificial intelligence student
- Machine learning beginner growing into expert
- Pharma quality assurance professional
- Biotech and regulated operations leader
- AI, robotics, automation, and healthcare innovation builder
- Future digital entrepreneur and content creator

## Primary Navigation

| Label | Path | Purpose |
| --- | --- | --- |
| Home | `/` | Introduce identity, featured work, roadmap, and collaboration path |
| Assignments | `/assignments` | Organize academic assignments, labs, and learning outcomes |
| Projects | `/projects` | Showcase AI, automation, healthcare, robotics, and developer projects |
| Articles | `/articles` | Prepare learning notes, technical reflections, and future content |
| About | `/about` | Explain professional background, learning journey, and positioning |
| Contact | `/contact` | Provide a path for academic, professional, and collaboration contact |

## Future Navigation Ideas

These routes are future ready but should not become primary navigation until the site has enough content or a real offer:

- Resources
- Templates
- Courses
- Newsletter
- Consulting
- Community

The machine-readable version of this plan lives in `src/content/navigation.ts`.

## Site Map

```text
Home
|-- Assignments
|-- Projects
|-- Articles
|-- About
`-- Contact
```

Future reserved routes:

```text
Resources
Templates
Courses
Newsletter
Consulting
Community
```

## Landing Page Section Order

The homepage should be built in this order:

1. Hero
2. Professional identity
3. Featured assignments
4. Featured projects
5. Content pillars
6. Learning roadmap
7. Future monetization roadmap
8. Newsletter call to action
9. Contact and collaboration call to action

The structured section plan lives in `src/content/homepage-sections.ts`. Each section includes:

- Section title
- Short section description
- Purpose of the section
- Type of content that will appear there
- Recommended call to action

## Page Responsibilities

### Home

Purpose: Quickly explain the site identity and guide visitors to the most important work.

Content:

- Hero positioning statement
- Professional identity summary
- Featured assignments
- Featured projects
- Content pillars
- Learning roadmap
- Future monetization roadmap
- Newsletter placeholder
- Contact and collaboration call to action

### Assignments

Purpose: Show academic growth and course-related work in a portfolio-ready format.

Content:

- Assignment title
- Course
- Category
- Summary
- Skills
- Status
- Date
- Repository URL
- Live URL
- Featured flag
- Learning outcome

### Projects

Purpose: Show applied problem solving across AI, automation, pharma quality, healthcare, robotics, and tooling.

Content:

- Project title
- Category
- Summary
- Problem solved
- Tools
- Status
- Repository URL
- Live URL
- Featured flag
- Future potential

### Articles

Purpose: Prepare the site for future content creation without adding full blog functionality yet.

Content:

- Article title
- Slug
- Category
- Summary
- Audience
- Status
- Estimated read time
- Keywords
- Future monetization link

### About

Purpose: Connect the academic learning journey with professional experience and future direction.

Content:

- AI student positioning
- Machine learning growth path
- Pharma quality assurance background
- Biotech and regulated operations leadership
- AI, robotics, automation, and healthcare innovation interests
- Founder and content creator direction

### Contact

Purpose: Create a professional connection path without sales pressure.

Content:

- Academic review path
- Project collaboration path
- Pharma quality automation discussion path
- Healthcare innovation and robotics discussion path
- Future content or digital product collaboration path

## Metadata Plan

The detailed metadata plan lives in `src/content/seo.ts`.

Each page has:

- `pageTitle`
- `metaDescription`
- `openGraphTitle`
- `openGraphDescription`
- `targetKeywords`

Pages covered:

- Home
- Assignments
- Projects
- Articles
- About
- Contact

## Phase Boundaries

In scope for Phase 2:

- Route structure
- Navigation strategy
- Content architecture
- Data models
- Placeholder route shells
- README and documentation updates
- SEO voice and metadata planning

Out of scope for Phase 2:

- Full visual design
- Advanced animations
- Monetization tools
- Payment systems
- Newsletter integrations
- CMS or MDX blog implementation
- Final production copy
