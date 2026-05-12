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
tags: [system-design, battleboard]
draft: false
---
```

### Code blocks

Every code block **must** include a `title` with a real filename:

````md
```ts title="consistent-hash-ring.ts"
// code here
```
````

````

The filename is displayed in the code block header bar alongside the file type badge.
See `CLAUDE.md` for filename conventions per language.

## Adding a project

Create a `.md` file in `src/content/projects/` with:

```yaml
---
name: Project Name
description: One-line description.
status: live | beta | wip
tags: [oss, infra]
github: https://github.com/mkappworks/project
url: https://project.com          # optional
benchlabsApp: false
---

Long-form description shown on the project detail page.
````
