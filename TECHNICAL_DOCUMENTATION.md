# Portfolio Technical Documentation

Last updated: 2026-05-14

## 1. Project Overview

This project is Jiajun Liu's personal portfolio website. It is a React single-page application built with Create React App. The current UI direction is a clean, compact portfolio style inspired by Framer-style personal sites: small typography, soft neutral backgrounds, rounded profile-card presentation, refined project cards, and concise content sections.

Primary user goals:

- Recruiters and hiring managers can quickly understand Jiajun's role, skills, work history, and projects.
- Visitors can inspect selected projects.
- Visitors can schedule a meeting through Cal.com or contact Jiajun through social/email links.

Main route:

- `/`: portfolio homepage

Secondary routes:

- `/coming-soon`: placeholder page for unfinished Blog/Vlog/Hobby links
- `/contact`: standalone contact form page

## 2. Technology Stack

Core:

- React 18
- Create React App / `react-scripts`
- React Router DOM
- Tailwind CSS
- Custom CSS in `src/App.css`

UI and icons:

- Material UI and MUI Lab
- Ant Design
- Heroicons
- React Icons

Helpers and integrations:

- Cal.com embed via `@calcom/embed-react`
- `react-fast-marquee` remains installed but is no longer used by the current homepage
- `react-type-animation` remains installed but is no longer used by the current homepage

## 3. Runtime and Build Commands

Install dependencies:

```bash
npm install
```

Start local development server:

```bash
npm start
```

Default local URL:

```text
http://localhost:3000
```

Build production bundle:

```bash
npm run build
```

Run tests:

```bash
npm test
```

Known current build warnings:

- `src/components/info_components/Contact.js` has unused state variables and missing hook dependency warnings.
- These warnings come from the standalone `/contact` route and do not block the homepage build.

## 4. High-Level Application Structure

```text
portfolio/
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   ├── profile.jpg
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   ├── coding.svg
│   ├── images/
│   │   ├── profile-image.jpg
│   │   └── profile-original-campus.jpg
│   └── public education/tech images
│
├── src/
│   ├── index.js
│   ├── index.css
│   ├── App.js
│   ├── App.css
│   ├── data.js
│   ├── App.test.js
│   ├── setupTests.js
│   ├── reportWebVitals.js
│   ├── logo.svg
│   └── components/
│       ├── About.js
│       ├── BlogEventSchedule.js
│       ├── ComingSoon.js
│       ├── Job.js
│       ├── Navbar.js
│       ├── Skills.js
│       ├── Testimonials.js
│       ├── style.css
│       ├── experience_components/
│       ├── info_components/
│       ├── menu_components/
│       ├── project_components/
│       └── images/
│
├── package.json
├── tailwind.config.js
├── README.md
└── TECHNICAL_DOCUMENTATION.md
```

## 5. Current Homepage Render Flow

`src/App.js` controls routing and homepage composition.

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

Data flow:

- `src/data.js` stores reusable portfolio content.
- `Projects`, `Experience`, `Testimonials`, `Skills`, and `ContactBar` read from `data.js`.
- `About` uses a public profile image path.
- `BlogEventSchedule` owns Cal.com and mailto configuration locally.

## 6. File-by-File Documentation

### Root Files

#### `package.json`

Defines project metadata, scripts, runtime dependencies, and development dependencies.

Important scripts:

- `start`: starts the Create React App dev server
- `build`: creates optimized static assets in `build/`
- `test`: starts the Jest test runner
- `eject`: exposes CRA internals; should generally be avoided

Important dependencies:

- `react`, `react-dom`: app runtime
- `react-router-dom`: route handling
- `tailwindcss`: utility CSS
- `@calcom/embed-react`: scheduling widget
- `@mui/material`, `@mui/lab`: legacy/secondary UI components
- `react-icons`, `@heroicons/react`: icon libraries
- `antd`: used by `ComingSoon`

#### `tailwind.config.js`

Configures Tailwind scanning and small theme extensions.

Current content scan:

```js
content: ["./src/**/*.{html,js}"]
```

This means Tailwind classes in React component files are detected and emitted.

Custom extensions:

- `backgroundImage.grid-pattern`
- `transformOrigin["100-0-0"]`

The file also contains an older commented-out Tailwind config block.

#### `README.md`

General project README. It is not the source of truth for component-level implementation details; this technical document is more current for architecture and file responsibilities.

#### `TECHNICAL_DOCUMENTATION.md`

This file. It describes the current codebase, file structure, component responsibilities, data flow, assets, and known maintenance notes.

## 7. Public Files

### `public/index.html`

Create React App HTML template.

Responsibilities:

- Declares HTML document language and metadata
- Defines favicon and Apple touch icon references
- Defines viewport settings
- Defines SEO description
- Provides the React mount point: `<div id="root"></div>`

Current title:

```text
Jiajun Porfolio
```

Maintenance note:

- The word `Porfolio` is misspelled in both title and meta description. It should be changed to `Portfolio` when polishing SEO.

### `public/manifest.json`

Web app manifest used by browsers when the site is installed or saved as an app.

Typical responsibilities:

- App name and short name
- Icon references
- Theme/background colors
- Display mode

### `public/robots.txt`

Search crawler instruction file. Used to tell search engines which paths are allowed or disallowed.

### `public/profile.jpg`

Used by `public/index.html` as favicon and Apple touch icon source.

### `public/favicon.ico`

Browser favicon asset.

### `public/logo192.png` and `public/logo512.png`

PWA/icon assets referenced by the manifest.

### `public/coding.svg`

Static SVG illustration asset. It is currently not part of the main homepage render flow.

### `public/images/profile-image.jpg`

Original public profile image asset from the earlier version of the site. It is currently not used by `About.js`.

### `public/images/profile-original-campus.jpg`

Current homepage profile image used by `src/components/About.js`.

This file was created from the user's original photo and compressed for web use. It keeps the original likeness while allowing the UI to present it in a smaller profile-card layout.

### `public/images/profile-suit.jpg`

Generated suit-version profile image kept as an optional asset. It is not currently referenced by the homepage after switching back to the original photo.

### `public/huawei.jpg`, `public/java.png`, `public/k8s.png`, `public/py.jpg`, `public/unimelb.jpg`, `public/monash.png`, degree images

Public static images used or previously intended for education/work detail views. Some paths are referenced in `src/data.js` under the `experience.detail.img` fields, but the current `Experience` component does not render those detail images.

## 8. Source Entry Files

### `src/index.js`

React application entry point.

Responsibilities:

- Imports React and ReactDOM
- Imports global Tailwind CSS from `src/index.css`
- Imports the root `App`
- Mounts `<App />` into the `public/index.html` root element

Current implementation uses:

```js
ReactDOM.render(...)
```

Maintenance note:

- React 18 projects commonly use `createRoot` from `react-dom/client`. The current code still uses the older render API, but it works under Create React App.

### `src/index.css`

Global Tailwind entry file.

Responsibilities:

- Imports Tailwind base styles
- Imports Tailwind component styles
- Imports Tailwind utility classes

Current content is compact and only exists to activate Tailwind.

### `src/App.js`

Top-level route and page composition file.

Responsibilities:

- Wraps app in `BrowserRouter`
- Defines routes with `Routes` and `Route`
- Composes the homepage from section components
- Provides secondary pages for `/coming-soon` and `/contact`

Current homepage component order:

```jsx
<BlogHeader />
<About />
<Projects />
<Experience />
<Testimonials />
<Skills />
<BlogEventSchedule />
<ContactBar />
<Copyright />
```

### `src/App.css`

Primary custom stylesheet for the current UI.

Responsibilities:

- Defines the global background and typography baseline
- Defines shared layout container `.site-shell`
- Defines sticky glass navigation styles
- Defines hero layout and profile-card styles
- Defines project card styles
- Defines experience list styles
- Defines skill chip styles
- Defines testimonial card styles
- Defines CTA and social footer styles
- Defines responsive behavior for tablet and mobile viewports

Important classes:

- `.site-shell`: central max-width wrapper
- `.glass-nav`: sticky translucent nav
- `.hero-section`, `.hero-grid`, `.hero-copy`: hero layout
- `.portrait-panel`, `.portrait-card`, `.portrait-nameplate`: profile image card
- `.section-block`, `.section-heading`, `.section-title`, `.section-note`: reusable section structure
- `.project-grid`, `.project-card`, `.project-media`, `.project-body`: project card layout
- `.experience-list`, `.experience-item`: experience section
- `.skill-wrap`, `.skill-chip`: skill tags
- `.testimonial-grid`, `.testimonial-card`: testimonial section
- `.cta-panel`, `.cta-actions`: contact CTA
- `.social-bar`, `.footer-copy`: footer/contact presentation

Current design intent:

- Small, polished, compact portfolio
- Neutral background
- Thin borders and soft shadows
- Smaller profile photo instead of oversized hero portrait

### `src/data.js`

Central content file for portfolio data.

Exports:

- `personInfo`
- `projects`
- `comments`
- `skills`
- `experience`

#### `personInfo`

Stores social and contact links:

- LinkedIn URL
- GitHub URL
- hobby route
- email address
- WhatsApp URL

Used by:

- `ContactBar`
- `SendEmailLink` indirectly uses its own local email instead of this data

#### `projects`

Array of selected project objects.

Each project includes:

- `title`
- `subtitle`
- `description`
- `image`
- `link`

Used by:

- `src/components/project_components/Projects.js`

Images are imported from `src/components/images/`.

#### `comments`

Array of testimonial objects.

Each comment includes:

- `text`
- `image`
- `name`
- `company`
- `link`

Used by:

- `src/components/Testimonials.js`

#### `skills`

Base skill list.

Used by:

- `src/components/Skills.js`

Note:

- `Skills.js` extends this array locally with `Python`, `AWS`, `Kubernetes`, and `PostgreSQL`.

#### `experience`

Array of education and work history entries.

Each entry includes:

- `period`
- `name`
- `major`
- `image`
- `description`
- `detail`

Used by:

- `src/components/experience_components/Experience.js`

Current component behavior:

- Renders only the first four description bullets per experience item.
- Does not currently render `image` or `detail`.

### `src/App.test.js`

Default Create React App test file. It is part of the test scaffold and may still contain the original CRA sample test.

### `src/setupTests.js`

Jest testing setup file created by Create React App.

Common role:

- Imports `@testing-library/jest-dom` matchers.

### `src/reportWebVitals.js`

Create React App performance reporting helper.

Current role:

- Not central to the UI.
- Can be wired to analytics if performance reporting is needed.

### `src/logo.svg`

Default CRA logo asset. It is not part of the current homepage UI.

## 9. Component Files

### `src/components/menu_components/BlogHeader.js`

Current top navigation component.

Responsibilities:

- Renders sticky glass-style navigation
- Shows site owner name
- Shows desktop section links
- Shows availability pill

Links:

- Work -> `#projects`
- Experience -> `#experience`
- Skills -> `#skills`
- Contact -> `#schedule`

Styles used:

- `.site-shell`
- `.glass-nav`
- `.nav-link`
- `.availability-pill`
- `.pulse-dot`

Note:

- This current header does not use `MenuButton`.

### `src/components/menu_components/MenuButton.js`

Legacy/optional Material UI dropdown menu.

Responsibilities:

- Opens and closes a popover menu
- Provides navigation links
- Provides resume PDF link

Current usage:

- Not used by the current `BlogHeader`.
- Can be reintroduced for mobile navigation if desired.

Important imported asset:

- `src/components/images/resume.pdf`

Maintenance notes:

- Uses Material UI `Button`, `Popper`, `MenuList`, `MenuItem`, `Grow`, and `ClickAwayListener`.
- Defines `domain = process.env.REACT_APP_DOMAIN`, but the variable is unused.

### `src/components/About.js`

Hero/about section.

Responsibilities:

- Introduces Jiajun as a full-stack developer
- Shows location and role tags
- Provides primary CTAs
- Shows metrics
- Shows the profile card

Current profile image:

```js
const profileImg = `${process.env.PUBLIC_URL}/images/profile-original-campus.jpg`;
```

Main UI blocks:

- left hero copy
- CTA buttons
- metric cards
- right profile panel
- mini stack describing current focus and core stack

Styles used:

- `.hero-section`
- `.hero-grid`
- `.hero-copy`
- `.hero-title`
- `.hero-subtitle`
- `.hero-actions`
- `.button-primary`
- `.button-secondary`
- `.metric-row`
- `.metric-card`
- `.portrait-panel`
- `.portrait-card`
- `.portrait-nameplate`
- `.mini-stack`
- `.mini-card`

### `src/components/project_components/Projects.js`

Selected work section.

Responsibilities:

- Imports `projects` from `data.js`
- Maps each project to a clickable card
- Shows project image, stack/subtitle, card index, title, and description

Important behavior:

- Each card is an `<a>` tag linking to `project.link`.
- Project preview images are imported through `data.js`.

Styles used:

- `.section-block`
- `.site-shell`
- `.section-heading`
- `.eyebrow`
- `.section-title`
- `.section-note`
- `.project-grid`
- `.project-card`
- `.project-media`
- `.project-body`
- `.project-topline`

### `src/components/experience_components/Experience.js`

Current experience section.

Responsibilities:

- Imports `experience` from `data.js`
- Renders each education/work entry as a compact list item
- Shows period, organization/school, major/title, and up to four bullet points

Current rendering rule:

```js
exp.description.slice(0, 4)
```

Styles used:

- `.section-block`
- `.section-heading`
- `.experience-list`
- `.experience-item`
- `.experience-period`
- `.experience-points`

### `src/components/experience_components/Timeline.js`

Legacy MUI timeline implementation.

Responsibilities:

- Renders the same `experience` data using MUI Timeline and Accordion components
- Supports expandable details
- Uses responsive MUI breakpoints

Current usage:

- Not used by `Experience.js` after the UI redesign.
- Kept in the repository as a previous implementation or future reference.

Maintenance notes:

- Contains a JSX bug: the outer wrapper uses `class` instead of `className`.
- Imports `../style.css`.

### `src/components/Testimonials.js`

Testimonials section.

Responsibilities:

- Imports `comments` from `data.js`
- Renders testimonial cards in a horizontally scrollable grid
- Shows quote text, avatar image, name, and company
- Links each card to the testimonial author's URL

Current behavior:

- No marquee animation.
- Uses static cards for a calmer, cleaner UI.

Styles used:

- `.section-block`
- `.testimonial-grid`
- `.testimonial-card`
- `.testimonial-person`

### `src/components/Skills.js`

Skills and technology section.

Responsibilities:

- Imports base `skills` from `data.js`
- Extends the skill list locally
- Renders each skill as a dark rounded chip

Local extension:

```js
["Python", "AWS", "Kubernetes", "PostgreSQL"]
```

Styles used:

- `.section-block`
- `.section-heading`
- `.clean-card`
- `.skill-wrap`
- `.skill-chip`

### `src/components/BlogEventSchedule.js`

Contact CTA and scheduling section.

Responsibilities:

- Initializes Cal.com embed through `getCalApi`
- Configures Cal.com brand color and layout
- Provides a meeting scheduling button
- Provides a mailto link

Cal.com namespace:

```text
15min
```

Cal.com link:

```text
jiajun-liu/15min
```

Email:

```text
jiajunliu0024@gmail.com
```

Styles used:

- `.section-block`
- `.cta-panel`
- `.cta-actions`
- `.button-primary`
- `.button-secondary`

### `src/components/info_components/ContactBar.js`

Social/contact icon bar.

Responsibilities:

- Imports social links from `personInfo`
- Renders LinkedIn, GitHub, hobby, email, and WhatsApp icons
- Uses `SendEmailLink` for email

Icon libraries:

- `react-icons/fa`
- `react-icons/fa6`
- `react-icons/io`
- `react-icons/md`

Styles used:

- `.social-bar`

### `src/components/info_components/SendEmailLink.js`

Reusable email link wrapper.

Responsibilities:

- Builds a `mailto:` URL
- Renders child/icon content inside an anchor tag

Current email:

```text
jiajunliu0024@gmail.com
```

Maintenance note:

- This duplicates the email already present in `data.js`. A future cleanup could pass `personInfo.email` into this component or import it directly.

### `src/components/info_components/Copyright.js`

Footer copyright.

Responsibilities:

- Displays current year dynamically with `new Date().getFullYear()`
- Displays ownership text

Styles used:

- `.footer-copy`

### `src/components/info_components/Contact.js`

Standalone contact page used by route `/contact`.

Responsibilities:

- Renders `BlogHeader`
- Renders a contact form with name, email, and message inputs
- Tracks local validation state
- Shows alerts on submit

Current limitations:

- Does not send the form data to a backend.
- Does not integrate with an email service.
- Contains ESLint warnings:
  - unused `validEmail`
  - unused `setValidEmail`
  - unused `sendMsgClick`
  - unused `secSendMsgClick`
  - missing dependencies in several `useEffect` calls

Implementation note:

- `DisplayValidationError` accepts `hiddenStatus`, but the component is called with `hidden`. This means validation message display logic likely does not work as intended.

### `src/components/ComingSoon.js`

Placeholder page.

Responsibilities:

- Renders `BlogHeader`
- Shows a divider from Ant Design
- Shows "Coming Soon" message

Used by:

- `/coming-soon` route
- Blog/Vlog/Hobby placeholder links

### `src/components/Navbar.js`

Legacy navigation component.

Responsibilities:

- Provides an older dark navigation bar
- Includes resume download logic
- Links to About, Projects, Skills, Experience, Resume, and Contact

Current usage:

- Not used by `App.js`.

Maintenance notes:

- Contains nested `<a>` tags, which is invalid HTML.
- Has a likely typo class `bg-withe`.
- Refers to `./Jiajun_resume_IT.pdf`, which may not exist in the current public path.

### `src/components/Job.js`

Legacy project section component.

Responsibilities:

- Renders projects from `data.js` with a dark hover overlay design

Current usage:

- Not used by `App.js`.
- Superseded by `src/components/project_components/Projects.js`.

### `src/components/style.css`

Secondary custom CSS helper file.

Responsibilities:

- Defines animated grid background utilities
- Defines `.footer-grey-blackground`

Current usage:

- Imported by legacy `Timeline.js`
- Not central to the current homepage UI

Maintenance note:

- Contains duplicate `.animate-grid` declarations.
- Has typo-like class name `footer-grey-blackground`.

## 10. Component Assets

### `src/components/images/resume.pdf`

Resume PDF imported by `MenuButton.js`.

Current usage:

- Only used if `MenuButton` is rendered.

### `src/components/images/yep-ai.gif`

Project preview image for Yep AI.

Used by:

- `data.js` -> `projects` -> `Projects.js`

### `src/components/images/petrol-map.gif`

Project preview image for Petrol Map.

Used by:

- `data.js` -> `projects` -> `Projects.js`

### `src/components/images/digital-refrige.gif`

Project preview image for Digital Refridge.

Used by:

- `data.js` -> `projects` -> `Projects.js`

### `src/components/images/voice-2-text.gif`

Project preview image for Voice Cloning.

Used by:

- `data.js` -> `projects` -> `Projects.js`

### `src/components/images/ken.jpeg`, `meng.jpeg`, `norton.jpeg`, `anderson.jpeg`

Testimonial avatar images.

Used by:

- `data.js` -> `comments` -> `Testimonials.js`

### `src/components/images/dev-chat.gif`

Static image/GIF asset. It is currently not referenced by the current homepage render chain.

## 11. Styling Architecture

The current UI uses a hybrid styling strategy:

- Tailwind utility classes for small layout details inside JSX.
- `src/App.css` for the current design system and reusable section/card classes.
- `src/components/style.css` for old animation helpers used by legacy timeline code.

Current design tokens are implicit in CSS:

- Background: warm off-white and light neutral gradients
- Text: near-black primary text, muted gray secondary text
- Borders: low-opacity black borders
- Shadows: soft large shadows for card elevation
- Radius: mostly 16-26px card radius, 999px pills/buttons

Responsive behavior:

- Desktop uses a two-column hero.
- Tablet/mobile collapses hero, project grid, and CTA into one column.
- Mobile reduces wrapper width and card radii.

## 12. Routing

Routes are defined in `src/App.js`.

```text
/             Main portfolio homepage
/coming-soon  Placeholder page
/contact      Standalone contact form page
```

Hash anchors used on the homepage:

```text
#about
#projects
#experience
#skills
#schedule
```

## 13. External Services

### Cal.com

Used in `BlogEventSchedule.js`.

Configuration:

- namespace: `15min`
- link: `jiajun-liu/15min`
- layout: `month_view`
- brand color: `#171717`

### Mailto Links

Two mailto implementations exist:

- `BlogEventSchedule.js` builds a project-chat email link.
- `SendEmailLink.js` builds a generic email link for the social bar.

## 14. Current Active vs Legacy Files

Active homepage files:

- `src/App.js`
- `src/App.css`
- `src/data.js`
- `src/components/menu_components/BlogHeader.js`
- `src/components/About.js`
- `src/components/project_components/Projects.js`
- `src/components/experience_components/Experience.js`
- `src/components/Testimonials.js`
- `src/components/Skills.js`
- `src/components/BlogEventSchedule.js`
- `src/components/info_components/ContactBar.js`
- `src/components/info_components/Copyright.js`
- `src/components/info_components/SendEmailLink.js`

Active secondary route files:

- `src/components/ComingSoon.js`
- `src/components/info_components/Contact.js`

Legacy or currently unused files:

- `src/components/Navbar.js`
- `src/components/Job.js`
- `src/components/experience_components/Timeline.js`
- `src/components/menu_components/MenuButton.js`
- `src/components/style.css`
- `src/logo.svg`
- `src/reportWebVitals.js`
- `public/coding.svg`

Optional/generated image assets not currently referenced:

- `public/images/profile-suit.jpg`
- `public/images/profile-image.jpg`

## 15. Content Editing Guide

Change personal links:

- Edit `personInfo` in `src/data.js`

Change project cards:

- Edit `projects` in `src/data.js`
- Add project images under `src/components/images/`
- Import new images at the top of `data.js`

Change testimonials:

- Edit `comments` in `src/data.js`
- Add avatar images under `src/components/images/`

Change skills:

- Edit `skills` in `src/data.js`
- Also check local extensions in `src/components/Skills.js`

Change work/education history:

- Edit `experience` in `src/data.js`
- Current homepage shows only four bullets per entry

Change hero text:

- Edit `src/components/About.js`

Change profile image:

- Put image under `public/images/`
- Update the `profileImg` path in `src/components/About.js`

Change global visual style:

- Edit `src/App.css`

Change SEO title/description:

- Edit `public/index.html`

## 16. Known Issues and Cleanup Opportunities

High priority:

- Fix `Contact.js` validation prop mismatch: `DisplayValidationError` expects `hiddenStatus`, but callers pass `hidden`.
- Remove unused state variables in `Contact.js`.
- Fix missing dependencies or simplify `useEffect` validation in `Contact.js`.

Medium priority:

- Correct `Porfolio` typo in `public/index.html`.
- Decide whether to keep or remove legacy files: `Navbar.js`, `Job.js`, `Timeline.js`, `MenuButton.js`.
- Consolidate duplicated email values between `data.js`, `BlogEventSchedule.js`, and `SendEmailLink.js`.
- Move all profile image history into a clean assets policy: keep only current image and documented alternates.

Low priority:

- Migrate `src/index.js` from `ReactDOM.render` to React 18 `createRoot`.
- Remove unused dependencies if the old components are deleted.
- Add project impact metadata such as role, duration, and outcomes.
- Add tests for rendering the main homepage sections.

## 17. Deployment Notes

Create React App builds static files into `build/`.

Build command:

```bash
npm run build
```

Output:

```text
build/
```

The project currently assumes it is hosted at the domain root `/`.

If deploying under a subpath, configure `homepage` in `package.json` before building.

## 18. Suggested Future Structure

If the codebase grows, consider reorganizing into:

```text
src/
├── assets/
├── components/
├── data/
├── pages/
├── styles/
└── utils/
```

Possible refactor:

- Move `data.js` to `src/data/portfolio.js`
- Move page-level route components to `src/pages/`
- Move old unused components to an archive folder or delete them
- Move custom CSS into `src/styles/global.css`
- Centralize email/social config in one file

