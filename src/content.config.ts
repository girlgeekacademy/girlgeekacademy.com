import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const newsCategories = ['News', 'In the media', 'Stories', 'Showcase'] as const;

/**
 * News posts live in src/content/news/ as Markdown.
 * src/content/news-review/ holds imported posts awaiting a keep/delete decision — not loaded.
 */
const news = defineCollection({
	loader: glob({ pattern: '*.md', base: './src/content/news' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			date: z.coerce.date(),
			category: z.enum(newsCategories),
			excerpt: z.string(),
			heroImage: image().optional(),
			heroAlt: z.string().default(''),
			/** Old WordPress slug, when it differs from the file name (for redirects). */
			legacySlug: z.string().optional(),
			draft: z.boolean().default(false),
		}),
});

export const collections = { news };
