// src/content.config.ts – Content Layer API (Astro 5+)
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
    schema: ({ image }) => z.object({
      title: z.string(),
      excerpt: z.string(),
      tags: z.array(z.string()),
      author: z.string().default('Peter'),
      date: z.date(),
      image: image(),
    }),
});

export const collections = {
  'blog': blogCollection,
};
