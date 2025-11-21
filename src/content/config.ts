// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    author: z.string(),
    date: z.date(),
  }),
});

export const collections = {
  'blog': blogCollection,
};