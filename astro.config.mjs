// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

/** @type {import('shiki').ShikiTransformer} */
const metaTransformer = {
  name: 'code-meta',
  pre(node) {
    const meta = this.options.meta?.__raw ?? '';
    // title="foo.ts" or title='foo.ts'
    const titleMatch = meta.match(/title=["']([^"']+)["']/);
    if (titleMatch) node.properties['data-title'] = titleMatch[1];
    // stamp the language so CSS / JS can read it
    node.properties['data-lang'] = this.options.lang ?? '';
  },
};

export default defineConfig({
  site: 'https://mkappworks.com',
  integrations: [
    mdx(),
    sitemap(),
    tailwind({ applyBaseStyles: false }),
  ],
  vite: {
    optimizeDeps: {
      include: ['mermaid'],
    },
  },
  markdown: {
    shikiConfig: {
      theme: 'vitesse-dark',
      transformers: [metaTransformer],
    },
  },
});
