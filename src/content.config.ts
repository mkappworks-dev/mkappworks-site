import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    status: z.enum(['live', 'beta', 'alpha', 'wip']),
    tags: z.array(z.string()),
    github: z.string().url().optional(),
    url: z.string().url().optional(),
    version: z.string().optional(),
    icon: z.string().optional(),
    benchlabsApp: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
