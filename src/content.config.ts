import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

const caseStudies = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    client: z.string(),
    industry: z.string(),
    pubDate: z.coerce.date(),
    status: z.enum(["in-progress", "internal-testing", "launched", "scaling"]),
    services: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    image: z.string(),
  }),
});

export const collections = {
  blog,
  "case-studies": caseStudies,
};
