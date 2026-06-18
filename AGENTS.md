# AGENTS.md

## Project Overview

Static personal portfolio site for `shanixxx`. Pure HTML/CSS/JS — no build tools, no frameworks, no package manager.

## Structure

```
├── index.html        # Home page
├── guide.html        # Project guide / documentation page
├── css/style.css     # Single stylesheet (light + dark theme via prefers-color-scheme)
├── js/main.js        # Mobile menu, copy-code, scroll-to-top
├── favicon.svg       # SVG icon (blue square with "S")
└── README.md         # GitHub repo description
```

## Deployment

GitHub Pages from `master` branch. Site lives at `shanixxx.github.io`.

Update flow: edit files → GitHub Desktop → commit → push. Changes appear in 1-2 minutes.

## Key Conventions

- **Language**: Russian (`lang="ru"`)
- **CSS variables**: All colors defined as custom properties in `:root` — easy to retheme
- **Dark mode**: Automatic via `@media (prefers-color-scheme: dark)` in style.css
- **Sidebar**: Fixed left nav, duplicated in both HTML files (no templating)
- **No build step**: Edit HTML/CSS/JS directly, push, done

## Gotchas

- Sidebar nav is copy-pasted across pages — add new links to BOTH `index.html` and `guide.html`
- Footer is also duplicated in both pages
- `js/main.js` is loaded at bottom of `<body>` — no defer/async needed
- No linter, no formatter, no typecheck — code style is manual
