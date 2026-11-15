// Case studies & demos. One Markdown file per case and language in src/content/cases/
// (see src/content/cases/_README.md). The section stays hidden until a language has at least one case.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const cases = defineCollection({
  loader: glob({ base: './src/content/cases', pattern: '**/[^_]*.md' }),
  schema: ({ image }) =>
    z.object({
      lang: z.enum(['ro', 'en']),
      title: z.string(),
      summary: z.string(),
      /** Which of the four verticals it belongs to (ids from solutions.items). */
      vertical: z.enum(['iot', 'vision', 'rnd', 'automation']),
      /** Cover photo, relative to the .md file (e.g. ./pick-to-light.jpg). */
      cover: image(),
      coverAlt: z.string(),
      /** Optional video: a YouTube link or a direct .mp4 URL. */
      video: z.url().optional(),
      /** Short measurable results, shown as a list. */
      results: z.array(z.string()).default([]),
      /** Lower comes first; the first case is the big featured one. */
      order: z.number().default(0),
      /** Drafts are never shown (e.g. the example template). */
      draft: z.boolean().default(false),
    }),
});

export const collections = { cases };
