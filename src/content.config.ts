import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const link = z.object({
  label: z.string(),
  href: z.string(),
});

// All site content lives in a single Markdown file for now: structured data in
// the frontmatter, and the blurb as the Markdown body.
const site = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content' }),
  schema: z.object({
    name: z.string(),
    links: z.array(link).default([]),
    research: z
      .array(
        z.object({
          title: z.string(),
          url: z.string().url(),
          authors: z.array(z.string()),
          venue: z.string(),
          year: z.number(),
          links: z.array(link).default([]),
          description: z.string(),
        }),
      )
      .default([]),
  }),
});

export const collections = { site };
