use context7 mcp server if you need to find out something about how to work with astro and/or starlight.

# Project: wiki.me

Personal knowledge wiki built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build). Deployed to GitHub Pages at `marweumr.github.io/wiki.me/`.

## Tech Stack

- **Framework**: Astro 5.x with Starlight 0.37.x
- **Package manager**: pnpm
- **Language**: TypeScript (strict mode)
- **Content format**: `.md` and `.mdx` (MDX preferred for component usage)

## Key Commands

```bash
pnpm dev      # Dev server → http://localhost:4321
pnpm build    # Production build → ./dist/
pnpm preview  # Preview production build
```

## Content Structure

All content lives in `src/content/docs/`. The sidebar is auto-generated from the directory tree.

```
src/content/docs/
├── index.mdx            # Homepage (splash template)
├── guides/              # How-to guides and tutorials
│   ├── Ansible/
│   ├── Cloudera/
│   ├── Containers/
│   ├── Git/
│   ├── kubernetes/
│   ├── Python/
│   ├── Shell/
│   ├── bash.mdx
│   ├── postgres.mdx
│   ├── tls.mdx
│   └── ...
└── reference/           # Cheatsheets and quick-reference material
    ├── cli-cheatsheets.mdx
    ├── git-cheatsheet.mdx
    ├── jenkins-cheatsheet.mdx
    └── ...
```

Images/assets live in `src/assets/` and must be imported in MDX files.

## Adding or Updating Content

This site is meant to be the user's external brain: short, findable pages for things that are expensive to rediscover or that the user looks up repeatedly.

When adding new material, prefer:

- **Guides** for procedures, explanations, and troubleshooting flows.
- **Reference** for cheatsheets, tables, and quick lookup material.
- **Small focused pages** over long unsorted dumps when a topic starts becoming reusable.
- **Images in `src/assets/`** imported into MDX via Astro’s `<Image />` component.

1. Create a `.mdx` file in `guides/` (how-tos, tutorials) or `reference/` (cheatsheets, quick-ref).
2. Required frontmatter: `title`. Optional but recommended: `description`.
3. The sidebar auto-generates from the directory structure — no manual config needed.
4. For images: place files in `src/assets/`, then import and use the `<Image>` component.

**Minimal file template:**
```mdx
---
title: "My Page"
description: "One-line summary"
---

Content here.
```

**MDX with image:**
```mdx
---
title: "My Page"
---
import { Image } from "astro:assets";
import myImg from "../../../assets/my-image.png";

<Image src={myImg} alt="description" />
```

## Config Files

| File | Purpose |
|------|---------|
| `astro.config.mjs` | Site title, base URL, sidebar sections, Starlight settings |
| `src/content/config.ts` | Content collections schema (uses Starlight's `docsSchema()`) |
| `tsconfig.json` | TypeScript strict mode |
| `pnpm-workspace.yaml` | pnpm version policy |

## Deployment

- Production URL: `https://marweumr.github.io/wiki.me/` (base path `/wiki.me/`)
- Dev URL: `http://localhost:4321` (base path `/`)
- GitHub Actions in `.github/workflows/` handle deployment

## Starlight Components Available in MDX

- `<Card>`, `<CardGrid>` — content cards
- `<Image>` from `astro:assets` — optimized images
- Splash template for the homepage (`template: splash` frontmatter)
