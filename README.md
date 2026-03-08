# tzeyong.com

Personal website of TY Koh — technology leader, platform architect, and author of *Beyond Comfort Zone*.

Built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and deployed to [GitHub Pages](https://pages.github.com) at [tzeyong.com](https://www.tzeyong.com).

---

## Tech Stack

| Layer      | Choice                          |
|------------|---------------------------------|
| Framework  | Astro 4 (static output)         |
| Styling    | Tailwind CSS + custom design tokens |
| Content    | Markdown / MDX (content collections) |
| Fonts      | Cormorant Garamond + Inter (Google Fonts) |
| Hosting    | GitHub Pages                    |
| Deployment | GitHub Actions                  |

---

## Local Development

**Prerequisites:** Node.js 20+

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

The dev server runs at `http://localhost:4321` by default.

---

## Project Structure

```
.
├── .github/workflows/deploy.yml   # GitHub Actions deploy workflow
├── public/                        # Static assets (copied as-is to dist/)
│   ├── CNAME                      # Custom domain config
│   ├── ads.txt                    # Google AdSense
│   └── images/                    # Logo and image assets
├── src/
│   ├── components/                # Reusable Astro components
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   ├── BookFeature.astro
│   │   ├── ProjectCard.astro
│   │   ├── WritingCard.astro
│   │   └── SectionHeader.astro
│   ├── content/
│   │   ├── config.ts              # Content collection schemas
│   │   └── writing/               # Markdown essays (*.md or *.mdx)
│   ├── layouts/
│   │   ├── Base.astro             # HTML shell (meta, OG tags, fonts)
│   │   └── Post.astro             # Blog post layout
│   ├── pages/
│   │   ├── index.astro            # Home
│   │   ├── about.astro
│   │   ├── work.astro
│   │   ├── book.astro
│   │   ├── contact.astro
│   │   └── writing/
│   │       ├── index.astro        # Writing list
│   │       └── [...slug].astro    # Individual post routes
│   └── styles/
│       └── global.css             # Tailwind imports + base styles
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## Adding a New Essay

Create a new `.md` or `.mdx` file in `src/content/writing/`:

```markdown
---
title: "Your Essay Title"
description: "A one or two sentence description."
pubDate: 2025-01-15
tags: ["Architecture", "Leadership"]
readingTime: "6 min read"
---

Your content here...
```

The essay will automatically appear on `/writing` and get its own page at `/writing/your-essay-title`.

---

## Deployment

Deployment is fully automated via GitHub Actions.

**How it works:**

1. Push to `main` or `master`
2. GitHub Actions builds the site with `npm run build`
3. The `dist/` output is deployed to GitHub Pages
4. The site is live at [tzeyong.com](https://www.tzeyong.com) within ~2 minutes

**Manual deploy:** Go to Actions → "Deploy to GitHub Pages" → "Run workflow"

---

## Custom Domain

The custom domain `tzeyong.com` is configured via `public/CNAME`. GitHub Pages reads this file automatically.

To change the domain:
1. Update `public/CNAME` with the new domain
2. Update `site` in `astro.config.mjs`
3. Configure DNS at your registrar:
   - `A` records pointing to GitHub Pages IPs, or
   - `CNAME` record pointing to `tykoh.github.io`

---

## GitHub Pages Setup

In your repository settings:

1. Go to **Settings → Pages**
2. Set **Source** to **GitHub Actions**
3. The workflow handles everything from there

---

## Design Tokens

Key design decisions are encoded in `tailwind.config.mjs`:

- **Background:** `parchment-50` (#FAFAF8) — warm off-white
- **Primary text:** `ink-900` (#1A1714) — warm near-black
- **Accent:** `forest-900` (#1E3A2F) — deep forest green
- **Display font:** Cormorant Garamond (editorial serif)
- **Body font:** Inter (clean sans-serif)
