# mkappworks.com

Personal site for [mkappworks.com](https://mkappworks.com). Built with Astro 6.

## Stack

| Tool                           | Purpose                                |
| ------------------------------ | -------------------------------------- |
| [Astro 6](https://astro.build) | Static site generator                  |
| `@astrojs/mdx`                 | MDX blog posts                         |
| `@astrojs/sitemap`             | Auto-generated sitemap                 |
| `@astrojs/rss`                 | RSS feed at `/rss.xml`                 |
| `@astrojs/tailwind`            | Tailwind CSS                           |
| `@fontsource/inter`            | Self-hosted Inter                      |
| `@fontsource/jetbrains-mono`   | Self-hosted JetBrains Mono             |
| Shiki                          | Syntax highlighting (built into Astro) |

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
├── components/       # BaseHead, Nav, Footer, ProjectCard, PostPreview, etc.
├── content/
│   ├── blog/         # MDX posts
│   └── projects/     # Project markdown files
├── layouts/          # BaseLayout, PostLayout
├── pages/            # index, blog/[slug], projects/[slug], rss.xml, robots.txt
└── styles/
    └── global.css
public/
└── favicon.svg
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
benchlabsApp: false
---
Long-form description shown on the project detail page.
```

## License

MIT — see [LICENSE](./LICENSE).
