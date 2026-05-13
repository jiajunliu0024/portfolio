# Portfolio Technical Documentation

## 1. Project Overview

This repository contains Jiajun Liu's personal portfolio website. The site is a single-page React application built with Create React App and styled primarily with Tailwind CSS utility classes.

The main audience is recruiters, HR teams, and interviewers who need to quickly understand:

- who Jiajun is
- what roles and technologies he works with
- which selected projects demonstrate his experience
- how to view his resume or contact him

## 2. Technology Stack

- Runtime: React 18
- Build tool: Create React App via `react-scripts`
- Routing: `react-router-dom`
- Styling: Tailwind CSS utility classes, with a small amount of custom CSS
- UI libraries: Material UI, MUI Lab, Ant Design, Heroicons, React Icons
- Animation/helpers: `react-type-animation`, `react-fast-marquee`
- Scheduling integration: Cal.com embed

## 3. Application Entry Points

### `public/index.html`

The HTML template used by Create React App. It defines metadata, favicon, viewport settings, and the root element.

Important responsibilities:

- document title
- SEO description
- favicon and app icon references
- `<div id="root"></div>` mount point

### `src/index.js`

The React entry point. It mounts the app into the `root` element.

### `src/App.js`

The main app router and page composition file.

Current routes:

- `/`: main portfolio homepage
- `/coming-soon`: placeholder page for unfinished content
- `/contact`: separate contact form page

Homepage section order:

1. `BlogHeader`
2. `About`
3. `Projects`
4. `Experience`
5. `Testimonials`
6. `Skills`
7. `BlogEventSchedule`
8. `ContactBar`
9. `Copyright`

## 4. Data Model

### `src/data.js`

This file stores most portfolio content and is the best place for non-layout updates.

Exports:

- `personInfo`: contact and social links
- `projects`: selected project cards
- `comments`: testimonial content
- `skills`: displayed skills
- `experience`: education and work experience timeline data

Recommended editing rule:

- update content in `data.js` when changing words, links, images, skills, or experience
- update components only when changing layout or interaction

## 5. Code Map

Use this section as a quick side index when browsing the project.

```text
portfolio/
├── public/
│   ├── index.html                 HTML template, SEO metadata, root mount point
│   ├── manifest.json              PWA/app metadata
│   ├── robots.txt                 Search crawler rule file
│   ├── profile.jpg                favicon/apple icon source
│   ├── images/profile-image.jpg   hero portrait image
│   └── *.jpg / *.png / *.svg      public static images
│
├── src/
│   ├── index.js                   React mount entry
│   ├── index.css                  Tailwind base/components/utilities import
│   ├── App.js                     Router and homepage section order
│   ├── App.css                    legacy/global CSS helpers
│   ├── data.js                    portfolio content: projects, skills, experience
│   │
│   ├── components/
│   │   ├── About.js               homepage hero/about section
│   │   ├── Skills.js              skills section
│   │   ├── Testimonials.js        testimonial marquee section
│   │   ├── BlogEventSchedule.js   Cal.com and contact CTA section
│   │   ├── ComingSoon.js          placeholder page
│   │   ├── style.css              small custom CSS helpers/animations
│   │   │
│   │   ├── menu_components/
│   │   │   ├── BlogHeader.js      top header and availability message
│   │   │   └── MenuButton.js      Material UI navigation dropdown
│   │   │
│   │   ├── project_components/
│   │   │   └── Projects.js        selected project cards
│   │   │
│   │   ├── experience_components/
│   │   │   ├── Experience.js      experience section wrapper
│   │   │   └── Timeline.js        MUI timeline and accordions
│   │   │
│   │   ├── info_components/
│   │   │   ├── Contact.js         standalone contact form route
│   │   │   ├── ContactBar.js      social/contact icon bar
│   │   │   ├── Copyright.js       footer copyright
│   │   │   └── SendEmailLink.js   reusable mail link helper
│   │   │
│   │   └── images/                imported images, GIFs, and resume PDF
│   │
│   └── setupTests.js              Create React App test setup
│
├── tailwind.config.js             Tailwind scan paths and theme extension
├── package.json                   dependencies and npm scripts
├── README.md                      original project readme
└── TECHNICAL_DOCUMENTATION.md     this documentation file
```

Suggested reading order:

1. `src/App.js`: understand page order and routes.
2. `src/data.js`: understand the content model.
3. `src/components/About.js`: understand the hero section.
4. `src/components/project_components/Projects.js`: understand selected work rendering.
5. `src/components/experience_components/Timeline.js`: understand experience rendering.
6. `src/components/menu_components/MenuButton.js`: understand navigation and resume link.
7. `public/index.html`: understand SEO and browser metadata.

Common edit locations:

- Update personal links: `src/data.js`
- Update project content: `src/data.js`
- Update hero layout/text: `src/components/About.js`
- Update project card layout: `src/components/project_components/Projects.js`
- Update experience content: `src/data.js`
- Update experience layout: `src/components/experience_components/Timeline.js`
- Update SEO title/description: `public/index.html`
- Update global styling helpers: `src/App.css` or `src/components/style.css`

## 6. Component Architecture

### Header and Navigation

#### `src/components/menu_components/BlogHeader.js`

Renders the top header with:

- name link
- availability message
- menu button

Current UX role:

- gives visitors a persistent brand anchor
- communicates availability
- provides navigation through the menu

#### `src/components/menu_components/MenuButton.js`

Renders a Material UI popover menu.

Menu items include:

- About
- Projects
- Skills
- Experience
- Blog
- Vlog
- Resume
- Talk to me

The resume PDF is imported from `src/components/images/resume.pdf`.

### Hero / About

#### `src/components/About.js`

Acts as the homepage hero section.

Current responsibilities:

- introduce Jiajun's role and location
- show a short rotating capability line
- provide primary calls to action
- display the profile image

Recommended UX role:

- help HR and interviewers understand role fit within the first screen
- make resume/contact/project paths easy to find

### Selected Work

#### `src/components/project_components/Projects.js`

Renders project cards from `projects` in `data.js`.

Current responsibilities:

- show project image
- show project title
- show project description
- link to live site or repository

Recommended future improvement:

- rename visible section to `Selected Work`
- add role, stack, and impact metadata for each project
- make project cards easier to scan on mobile

### Experience

#### `src/components/experience_components/Experience.js`

Section wrapper for the experience timeline.

#### `src/components/experience_components/Timeline.js`

Renders the timeline using MUI Lab Timeline and MUI Accordion.

Current responsibilities:

- show period
- show company or school
- show title or major
- reveal bullet details in accordion content

Recommended future improvement:

- keep key achievements visible without requiring every accordion to be opened
- separate work experience from education if the section becomes too dense

### Testimonials

#### `src/components/Testimonials.js`

Renders testimonial cards using `react-fast-marquee`.

Current responsibilities:

- show peer/colleague quotes
- link quote cards to LinkedIn profiles

Recommended future improvement:

- reduce marquee speed or convert to static cards for a more editorial tone
- keep only the strongest 2-3 testimonials visible

### Skills

#### `src/components/Skills.js`

Renders skill badges from the `skills` array in `data.js`.

Current responsibilities:

- show major technologies
- present a short capability statement

Recommended future improvement:

- group skills into categories such as Frontend, Backend, AI/Data, Cloud, and Tools
- remove duplicate or near-duplicate skill names

### Contact and Scheduling

#### `src/components/BlogEventSchedule.js`

Renders the main contact CTA section and initializes Cal.com.

Current responsibilities:

- schedule a meeting through Cal.com
- send an email through a `mailto:` link

Recommended future improvement:

- adjust wording from client/project language to recruiter/interview language
- keep the CTA compact on mobile

#### `src/components/info_components/ContactBar.js`

Renders social/contact icons.

Current links:

- LinkedIn
- GitHub
- hobby placeholder
- email
- WhatsApp

#### `src/components/info_components/Contact.js`

Renders a standalone contact form route.

Current limitation:

- the form validates empty fields but does not send data to a backend or email service

### Footer

#### `src/components/info_components/Copyright.js`

Renders copyright text using the current year.

## 7. Styling System

Styling is mainly handled through Tailwind CSS classes directly in React components.

Files:

- `src/index.css`: imports Tailwind base, components, and utilities
- `src/App.css`: legacy Create React App styles plus a small submit button style
- `src/components/style.css`: small custom animation and footer helper styles
- `tailwind.config.js`: Tailwind content paths and small theme extensions

Recommended styling rule:

- keep small layout changes inside component class names
- use custom CSS only when repeated behavior or keyframes are needed
- avoid introducing another styling system unless there is a clear reason

## 8. Assets

Static public assets live in:

- `public/`
- `public/images/`

Component-imported assets live in:

- `src/components/images/`

Important current assets:

- profile image
- project GIFs
- testimonial portraits
- resume PDF
- education and technology images

Recommended asset rule:

- use `public/` for assets referenced by URL
- use `src/components/images/` for assets imported by React components
- compress large GIFs or replace them with optimized video/image formats if performance becomes an issue

## 9. Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Default local URL:

```text
http://localhost:3000
```

Create a production build:

```bash
npm run build
```

## 10. Current Known Issues

- SEO title and description are minimal and contain a spelling issue in `public/index.html`.
- Some ESLint warnings exist for unused variables and missing hook dependencies.
- The standalone contact form does not send real messages.
- The project uses several UI libraries at once, which increases dependency weight.
- `Testimonials` uses a very fast marquee animation, which may feel less polished for a professional portfolio.
- Some content is written more for general visitors or clients than for recruiters and interviewers.

## 11. Recommended Incremental Roadmap

### Phase 1: First-screen clarity

- refine Hero positioning
- make CTA labels recruiter-friendly
- improve mobile spacing

### Phase 2: Selected Work

- rename `Apps I've Built` to `Selected Work`
- add role, stack, and impact metadata
- make project cards more editorial and easier to scan

### Phase 3: Experience and Skills

- make work achievements easier to scan
- group skills by category
- remove duplicate skill labels

### Phase 4: Contact and Resume

- make resume access more visible
- adjust contact copy for HR/interviewer intent
- decide whether the contact form should be removed, simplified, or connected to a real service

### Phase 5: SEO and polish

- update title, description, favicon, and social preview tags
- add restrained animation only where it supports comprehension
- review mobile layout across common screen widths
