import { defineCollection, z } from 'astro:content';

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string().optional(),
    pubDate:     z.date(),
    tags:        z.array(z.string()).default([]),
    readingTime: z.string().optional(),
    draft:       z.boolean().default(false),
  }),
});

export const collections = { writing };
