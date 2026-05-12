# mkappworks-site — Claude Notes

## Project GitHub links

Only OSS projects get a `github:` field in their frontmatter. Closed-source or commercial
projects (e.g. Battleboard) should not have a GitHub link.

## Code block conventions

**Every fenced code block in an MDX post must have a `title` attribute set to a real filename.**
Never use a bare language identifier (e.g. ` ```ts `) without a title — the header bar will
show only the file type badge with no name, which looks incomplete.

The filename must follow the language's conventional naming style (see table below).

### Naming rules by language

| Language           | Convention                                                            | Example                   |
| ------------------ | --------------------------------------------------------------------- | ------------------------- |
| TypeScript         | `kebab-case.ts`                                                       | `consistent-hash-ring.ts` |
| TypeScript (React) | `PascalCase.tsx`                                                      | `ProjectCard.tsx`         |
| JavaScript         | `kebab-case.js`                                                       | `hash-ring.js`            |
| JavaScript (React) | `PascalCase.jsx`                                                      | `App.jsx`                 |
| Python             | `snake_case.py`                                                       | `cache_eviction.py`       |
| Go                 | `snake_case.go`                                                       | `hash_ring.go`            |
| Rust               | `snake_case.rs`                                                       | `consistent_hash.rs`      |
| Dart               | `snake_case.dart`                                                     | `chat_bench.dart`         |
| Shell / Bash       | `kebab-case.sh`                                                       | `deploy.sh`               |
| SQL                | `snake_case.sql`                                                      | `create_sessions.sql`     |
| CSS                | `kebab-case.css`                                                      | `global.css`              |
| HTML               | `kebab-case.html`                                                     | `index.html`              |
| JSON               | `kebab-case.json`                                                     | `package.json`            |
| YAML               | `kebab-case.yaml`                                                     | `deploy.yaml`             |
| Markdown / MDX     | `kebab-case.md` / `.mdx`                                              | `battleboard-post.mdx`    |
| Astro              | `PascalCase.astro` (components/layouts) or `kebab-case.astro` (pages) | `ProjectCard.astro`       |

### Syntax

````md
```ts title="consistent-hash-ring.ts"
// code here
```
````

```

The `title` value is parsed at build time by a Shiki transformer and rendered
as a filename label in the code block header bar.
```
