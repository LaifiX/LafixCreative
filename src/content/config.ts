// SPRÁVNE: src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    // Tu použijeme funkciu image, ktorú nám Astro posiela
    schema: ({ image }) => z.object({
      title: z.string(),
      excerpt: z.string(),
      tags: z.array(z.string()),
      author: z.string().default('Peter'),
      date: z.date(),
      
      // KĽÚČOVÁ ZMENA: Používame image() validátor
      image: image(),
    }),
});

export const collections = {
  'blog': blogCollection,
};