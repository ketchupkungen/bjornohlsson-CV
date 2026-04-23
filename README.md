# bjornohlsson-CV

Personal CV website built with React and Vite.

## Current Status

This README reflects the current codebase structure and behavior.

## Tech Stack

- React 18
- Vite 4
- Plain CSS (single stylesheet)

## Features

- Bilingual UI (Swedish/English)
- Theme switching (light/dark with persisted preference)
- Loading screen and staged reveal transitions
- Scroll-triggered section/item animations
- Responsive layout for desktop/tablet/mobile
- Mobile slide-in menu with overlay and scroll locking

## Project Structure

```text
.
├── index.html
├── public/                     # Static files copied as-is to dist/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Experience.jsx
│   │   ├── Project.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Hobby.jsx
│   │   ├── Footer.jsx
│   │   └── LoadingScreen.jsx
│   ├── hooks/
│   │   ├── useDarkMode.js
│   │   ├── useLanguage.js
│   │   └── useScrollAnimation.js
│   └── styles/
│       └── main.css
├── vite.config.js
└── package.json
```

## Development

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

Default configured port is `3001` (Vite may choose another if occupied).

3. Build for production:

```bash
npm run build
```

Build output is generated in `dist/`.

4. Preview production build locally:

```bash
npm run preview
```

## Where To Edit Content

- Main profile/bio: `src/components/Hero.jsx`
- Work history: `src/components/Experience.jsx`
- Projects: `src/components/Project.jsx`
- Education: `src/components/Education.jsx`
- Skills: `src/components/Skills.jsx`
- Interests: `src/components/Hobby.jsx`
- Footer/contact links: `src/components/Footer.jsx`

## Theming And Styling

- Primary stylesheet: `src/styles/main.css`
- Theme handling logic: `src/hooks/useDarkMode.js`
- Language handling logic: `src/hooks/useLanguage.js`

## Notes About `index.html`, `public`, and `dist`

- `index.html` (project root) is the source HTML used by Vite.
- `public/` is for static assets copied directly to `dist/` without bundling/import processing.
- `dist/` is generated build output and can be recreated at any time with `npm run build`.

## Publish To GitHub Pages

1. Ensure repository settings use **Settings -> Pages -> Source: GitHub Actions**.
2. Commit and push changes to `main`.
3. Open **Actions** tab and wait for **Deploy to GitHub Pages** workflow to complete.
4. Open **Settings -> Pages** to find the published URL.

## GitHub Pages Troubleshooting Checklist

- Confirm workflow exists at `.github/workflows/deploy.yml`.
- Confirm workflow triggers on `push` to `main`.
- Confirm repo default branch is `main`.
- Confirm `npm run build` succeeds locally.
- If `Setup Pages` fails on first run, ensure `actions/configure-pages` uses:

```yaml
with:
	enablement: true
```

- If deploy runs but page is broken, verify `base` in `vite.config.js` matches your hosting path:
	- Project site (`https://<user>.github.io/<repo>/`) -> `base: '/<repo>/'`
	- Custom domain (`https://cv.example.com`) -> `base: '/'`
- If custom domain is used, add `public/CNAME` with the exact domain value.
- After fixes, push a new commit or run the workflow manually with `workflow_dispatch`.

## License

© 2026 bjornohlsson-CV. All rights reserved.
