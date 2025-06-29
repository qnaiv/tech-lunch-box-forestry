import { defineCollection, z } from 'astro:content'

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    date: z
      .union([z.string(), z.date()])
      .transform(val => new Date(val)),
    // 他のfrontmatterフィールドもここに追加できます
  }),
})

export const collections = {
  blog: blogCollection,
}
