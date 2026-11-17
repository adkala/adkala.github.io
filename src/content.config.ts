import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const link = z.object({
  label: z.string(),
  href: z.string(),
});

// All site content lives in a single Markdown file for now: structured data in
// the frontmatter, and the bio as the Markdown body (first paragraph is the
// lead, the rest renders as the muted line beneath it).
const site = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content' }),
  schema: z.object({
    name: z.string(),
    seo: z.object({
      title: z.string(),
      description: z.string(),
      jobTitle: z.string(),
      topics: z.array(z.string()).default([]),
      affiliations: z.array(z.object({ name: z.string(), href: z.string().url() })).default([]),
    }),
    portrait: z.string().optional(),
    links: z.array(link).default([]),
    research: z
      .array(
        z.object({
          title: z.string(),
          url: z.string(),
          // file name (without .svg) in src/thumbs/
          thumb: z.string().optional(),
          authors: z.array(z.string()),
          venue: z.string(),
          venueFull: z.string().optional(),
          year: z.number(),
          links: z.array(link).default([]),
          description: z.string(),
        }),
      )
      .default([]),
    experience: z
      .array(
        z.object({
          org: z.string(),
          role: z.string(),
          dates: z.string().optional(),
        }),
      )
      .default([]),
  }),
});

export const collections = { site };
