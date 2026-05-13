# mkappworks.com

Personal site for [mkappworks.com](https://mkappworks.com). Built with Astro 6.

## Stack

| Tool                           | Purpose                                          |
| ------------------------------ | ------------------------------------------------ |
| [Astro 6](https://astro.build) | Static site generator                            |
| `@astrojs/mdx`                 | MDX blog posts                                   |
| `@astrojs/sitemap`             | Auto-generated sitemap                           |
| `@astrojs/rss`                 | RSS feed at `/rss.xml`                           |
| Tailwind CSS                   | Styling (wired via PostCSS, no Astro adapter)    |
| Shiki                          | Syntax highlighting (built into Astro)           |
| Mermaid                        | Client-side diagrams in MDX via `<Diagram />`    |
| Satori + Resvg                 | OG banner generation (`scripts/generate-og.mjs`) |
| `@fontsource/inter`            | Self-hosted Inter                                |
| `@fontsource/jetbrains-mono`   | Self-hosted JetBrains Mono                       |

## Requirements

Node 22.12.0 or later.

## Commands

| Command           | Action                           |
| ----------------- | -------------------------------- |
| `npm install`     | Install dependencies             |
| `npm run dev`     | Dev server at `localhost:4321`   |
| `npm run build`   | Build to `./dist/`               |
| `npm run preview` | Preview production build locally |

## Project structure

```
src/
├── assets/           # Static images imported by components
├── components/       # BaseHead, Nav, Footer, ProjectCard, PostPreview,
│                     # PostCTA, Diagram, SocialLinks, SpecSheet, ThemeToggle
├── content/
│   ├── blog/         # MDX posts
│   └── projects/     # Project markdown files
├── content.config.ts # Zod schemas for blog + projects collections
├── layouts/          # BaseLayout, PostLayout
├── pages/            # index, about, 404, blog/, projects/, rss.xml, robots.txt
├── styles/
│   └── global.css
└── utils/            # Shared helpers
public/                # Static assets (favicon, OG banner, project icons)
scripts/
└── generate-og.mjs   # Builds public/og-banner.png with Satori + Resvg
```

## Writing a blog post

Create a `.mdx` file in `src/content/blog/` with this frontmatter:

```yaml
---
title: Your Post Title
description: One-sentence summary shown in previews and meta tags.
date: YYYY-MM-DD
tags: [local-first, agents]
draft: false
image: ./cover.png # optional — relative path used for the OG card
---
```

### Code blocks

Every code block must include a `title` with a real filename matching the language's convention:

| Language           | Convention        | Example                   |
| ------------------ | ----------------- | ------------------------- |
| TypeScript         | `kebab-case.ts`   | `consistent-hash-ring.ts` |
| TypeScript (React) | `PascalCase.tsx`  | `ProjectCard.tsx`         |
| Dart               | `snake_case.dart` | `agent_runtime.dart`      |
| Python             | `snake_case.py`   | `cache_eviction.py`       |
| Go                 | `snake_case.go`   | `hash_ring.go`            |
| Shell              | `kebab-case.sh`   | `deploy.sh`               |

Syntax:

````md
```ts title="consistent-hash-ring.ts"
// code here
```
````

## Adding a project

Create a `.md` file in `src/content/projects/` with:

```yaml
---
name: Project Name
description: One-line description.
status: live | beta | wip
tags: [oss, infra]
github: https://github.com/you/project # omit for closed-source projects
url: https://project.com # optional
version: 0.1.0 # optional — shown on the project card
icon: ./icon.png # optional — relative path to an icon asset
benchlabsApp: false
---
Long-form description shown on the project detail page.
```

## OG banner

The site-wide Open Graph image at `public/og-banner.png` is generated from
`scripts/generate-og.mjs` using Satori (JSX → SVG) and Resvg (SVG → PNG).
Re-run it after editing the script:

```sh
node scripts/generate-og.mjs
```

## License

MIT — see [LICENSE](./LICENSE).
